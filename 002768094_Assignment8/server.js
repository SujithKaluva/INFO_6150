const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var http = require("http");

const uri =
  "mongodb+srv://sujith:sujith@cluster0.hxicirg.mongodb.net/?retryWrites=true&w=majority";
//"localhost:27017";
const client = new MongoClient(uri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, async function () {
  console.log("Server starting on port 3000");
});

app.get("/", function (req, res) {
  res.send("Build Successful!");
});

//POST Method
app.post("/user", async function (req, res) {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  var regExEmail =  /([\w\.]+)@northeastern.edu/;
  var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (name == "" || name == undefined) {
    res.send("Name cannot be empty, please check");
  } 
  else if (email == "empty" || email == undefined) {
    res.send("Email cannot be empty, please check");
  } 
  else if (!email.trim().match(regExEmail)) {
    res.send("Enter a valid Northeastern email address");
  } 
  else if (password == "" || password == undefined) {
    res.send("Password cannot be empty, please check");
  } 
  else if (!password.trim().match(regexPassword)) {
    res.send("Enter a valid password");
  } 
  else {
    try {
        //Bcrypting password
      getHashValue(req.body.password, function (response) {
        req.body.password = response;
      });
      await client.connect();
      const result = await client
        .db("UserDb")
        .collection("User")
        .insertOne(req.body);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
    res.send("User added successfully");
  }
});

app.put("/user", async function (req, res) {
  var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const email = req.body.email;
  if(req.body.email!="" && req.body.password!="" && req.body.password.trim().match(regexPassword)){
    try {
      var hashedPassword;
      getHashValue(req.body.password, function (response) {
        //console.log(`password--`, response);
        hashedPassword = response;
      });

      await client.connect();
      let result = await client
        .db("UserDb")
        .collection("User")
        .findOne({
            email: email,
        });

      if (result != undefined && result != null && result.email != undefined) {
        result.name = req.body.name;
        result.password = hashedPassword;

        // Set filter and options
        const filter = { email: email };
        const options = { upsert: false };

        const isUpdated = await client
          .db("UserDb")
          .collection("User")
          .updateOne(filter, { $set: result }, options);

        res.send("User updated successfully");
      } else {
        res.send("User not found");
      }
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  } else {
    res.send("Enter valid details");
  }
});

app.get("/user/:emailId", async function (req, res) {
  try {
    await client.connect();
    const result = await client.db("UserDb").collection("User").findOne({
      email: req.params.emailId,
    });
    res.send(result);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

app.get("/user", async function (req, res) {
  try {
    await client.connect();
    const result = await client.db("UserDb").collection("User").find({});
    let list = [];
    await result.forEach((item) => list.push(item));
    res.send(list);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

app.delete("/user/:emailId", async function (req, res) {
  try {
    const query = { email: req.params.emailId };
    await client.connect();
    const result = await client
      .db("UserDb")
      .collection("User")
      .deleteOne(query);
    if (result.deletedCount == 1) {
      res.send("Deleted Successfully");
    } else {
      res.send("Deletion Failed");
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

function getHashValue(plainPassword, callback) {
  bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
    console.log(hash);
    callback(hash);
  });
}

// bcrypt.compare(someOtherPlaintextPassword, hash).then(function(result) {
//     // result == false
// });
