var j=1;
function submitForm() {
    var titleRadios = document.getElementsByName('title');
    var title;
    for(var r=0;r<titleRadios.length;r++){
        if(titleRadios[r].checked)  title = titleRadios[r].value;
    }
    console.log(title);
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var fullName = firstName + " " + lastName;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var emailId = document.getElementById("emailId").value;
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;
  var zipcode = document.getElementById("zipcode").value;
  var streetAddress1 = document.getElementById("streetAddress1").value;
  var streetAddress2 = document.getElementById("streetAddress2").value;
  var drinks = document.getElementById("drinks").value;

  var comments = document.getElementById("comments").value;
  var comments1 = document.getElementById("comments1").value;

  var radios = document.querySelectorAll('input[name="title"]:checked');
  var radiosLength = radios.length > 0 ? radios[0].value : "";

  var checkbox = document.querySelectorAll('input[name="source"]:checked');
  var checkCount = checkbox.length > 0 ? checkbox[0].value : "";
  var checkboxVals = document.getElementsByName('source');
  var sources='';
  for(var cc=0;cc<checkboxVals.length;cc++){
    console.log(checkboxVals[cc].checked);
    if(cc!=(checkboxVals.length-1) && checkboxVals[cc].checked)
    sources += checkboxVals[cc].value + ', ';
    else if(checkboxVals[cc].checked){
        sources += checkboxVals[cc].value;
    }
  }

  var checkbox1 = document.querySelectorAll('input[name="source100"]:checked');
  var extrasLength = checkbox1.length > 0 ? checkbox1[0].value : "";

  var checkboxVals1 = document.getElementsByName('source100');
  var sources1='';
  for(var cc=0;cc<checkboxVals1.length;cc++){
    if(checkboxVals1[cc].checked){
    sources1 += checkboxVals1[cc].value;
    break;
    }
  }

  if (
    firstName == "" ||
    lastName == "" ||
    phoneNumber == "" ||
    emailId == "" ||
    zipcode == "" ||
    checkCount == "" ||
    comments == "" ||
    state == "" ||
    city == "" ||
    streetAddress1 == "" ||
    radiosLength == "" ||
    drinks == "default"
  ) {
    alert("All fields are mandatory");
  } else if (extrasLength != "" && comments1 == "") {
    alert("All fields are mandatory");
  }  else {
    var content = "";
    content += "<tr><td>" + firstName + "</td><td>" + lastName + "</td></tr>";
    var myTable = document.getElementById("myTable");
    for (var i = j; i <= j; i++) {
      var row = myTable.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);
      var cell11= row.insertCell(10);
      var cell12= row.insertCell(11);
      var cell13= row.insertCell(12);
      var cell14= row.insertCell(13);
      cell1.innerHTML = title;
      cell2.innerHTML = fullName;
      cell3.innerHTML = phoneNumber;
      cell4.innerHTML = emailId;
      cell5.innerHTML = streetAddress1;
      cell6.innerHTML = streetAddress2;
      cell7.innerHTML = city;
      cell8.innerHTML = state;
      cell9.innerHTML = zipcode;
      cell10.innerHTML = sources;
      cell11.innerHTML = comments;
      cell12.innerHTML = drinks;
      cell13.innerHTML = sources1;
      cell14.innerHTML = comments1;
    }
    j = j + 1;
  }
  alert('Thank You, Submitted Succesfully!');
  resetForm();
}

function validinput(object, type, nameType) {
    var regExName = /^[a-zA-Z]+$/;
    var regExEmail = /([\w\.]+)@northeastern.edu/;
    var regExPhone = /\d{3}-\d{3}-\d{4}$/;
    var regExZip = /^\d{5}$/;
    var name = "error_" + nameType;
    switch (type) {
      case 1:
        if (!object.value.trim().match(regExName)) {
          object.style.border = "2px solid red";
          document.getElementById(name).style.display = "block";
        } else {
          object.style.border = "";
          document.getElementById(name).style.display = "none";
        }
        break;
      case 3:
        if (!object.value.trim().match(regExEmail)) {
          object.style.border = "2px solid red";
          document.getElementById("error_emailId").style.display = "block";
        } else {
          object.style.border = "";
          document.getElementById("error_emailId").style.display = "none";
        }
        break;
      case 4:
        if (!object.value.trim().match(regExPhone)) {
          object.style.border = "2px solid red";
          document.getElementById("error_phoneNumber").style.display = "block";
        } else {
          object.style.border = "";
          document.getElementById("error_phoneNumber").style.display = "none";
        }
        break;
      case 5:
        if (!object.value.trim().match(regExZip)) {
          object.style.border = "2px solid red";
          document.getElementById("error_zipcode").style.display = "block";
        } else {
          object.style.border = "";
          document.getElementById("error_zipcode").style.display = "none";
        }
    
        case 6:
        if (object.value=="") {
            object.style.border = "2px solid red";
            document.getElementById(name).style.display = "block";
        } else {
            object.style.border = "";
            document.getElementById(name).style.display = "none";
        }
        break;
    }
  }

function showText() {
  var eleout = document.getElementById("drinks").value;
  document.getElementById("comments1").value="";
  document.getElementById("largeTeaValue").checked = false;
  document.getElementById("mediumCoffeeValue").checked = false;
  document.getElementById("cokeCanValue").checked = false;
  document.getElementById("sodaValue").checked = false;
  if (eleout == "Tea") {
    document.getElementById("mediumCoffeeLabel").style.display = "none";
    document.getElementById("mediumCoffeeValue").style.display = "none";
    document.getElementById("cokeCanLabel").style.display = "none";
    document.getElementById("cokeCanValue").style.display = "none";
    document.getElementById("sodaLabel").style.display = "none";
    document.getElementById("sodaValue").style.display = "none";

    document.getElementById("largeTeaLabel").style.display = "block";
    document.getElementById("largeTeaValue").style.display = "block";
  } else if (eleout == "Coffee") {
    document.getElementById("mediumCoffeeLabel").style.display = "block";
    document.getElementById("mediumCoffeeValue").style.display = "block";

    document.getElementById("largeTeaLabel").style.display = "none";
    document.getElementById("largeTeaValue").style.display = "none";
    document.getElementById("cokeCanLabel").style.display = "none";
    document.getElementById("cokeCanValue").style.display = "none";
    document.getElementById("sodaLabel").style.display = "none";
    document.getElementById("sodaValue").style.display = "none";
  } else if (eleout == "Coke") {
    document.getElementById("cokeCanLabel").style.display = "block";
    document.getElementById("cokeCanValue").style.display = "block";

    document.getElementById("mediumCoffeeLabel").style.display = "none";
    document.getElementById("mediumCoffeeValue").style.display = "none";
    document.getElementById("largeTeaLabel").style.display = "none";
    document.getElementById("largeTeaValue").style.display = "none";
    document.getElementById("sodaLabel").style.display = "none";
    document.getElementById("sodaValue").style.display = "none";
  } else if (eleout == "Soda") {
    document.getElementById("sodaLabel").style.display = "block";
    document.getElementById("sodaValue").style.display = "block";

    document.getElementById("mediumCoffeeLabel").style.display = "none";
    document.getElementById("mediumCoffeeValue").style.display = "none";
    document.getElementById("cokeCanLabel").style.display = "none";
    document.getElementById("cokeCanValue").style.display = "none";
    document.getElementById("largeTeaLabel").style.display = "none";
    document.getElementById("largeTeaValue").style.display = "none";
  } else {
    document.getElementById("sodaLabel").style.display = "none";
    document.getElementById("sodaValue").style.display = "none";

    document.getElementById("mediumCoffeeLabel").style.display = "none";
    document.getElementById("mediumCoffeeValue").style.display = "none";
    document.getElementById("cokeCanLabel").style.display = "none";
    document.getElementById("cokeCanValue").style.display = "none";
    document.getElementById("largeTeaLabel").style.display = "none";
    document.getElementById("largeTeaValue").style.display = "none";

    document.getElementById("commentsLabel").style.display = "none";
    document.getElementById("comments1").style.display = "none";
  }
}

function onSelectExtras(object, type) {
    var stat = false;
    var curr = type;
    stat != stat;
    var stat = document.getElementById(curr).checked;
    stat != stat;
    console.log(stat);
    if (stat) {
      document.getElementById("comments1").style.display = "block";
      document.getElementById("commentsLabel").style.display = "block";
      document.getElementById("commentsLabel").attributes["required"] = true;
    } else {
      document.getElementById("comments1").style.display = "none";
      document.getElementById("commentsLabel").style.display = "none";
      document.getElementById("commentsLabel").attributes["required"] = false;
    }
  }

  function resetForm(){
    document.getElementById('drinks').value = '';
    showText();
    document.getElementById('myForm').reset();
  }
