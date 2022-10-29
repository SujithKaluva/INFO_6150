//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

var tableRows = document.getElementsByTagName("tr");
//Dynamically Adding Table Header Cells
const thElement1 = document.createElement("th");
thElement1.innerHTML = "EDIT";
const thElement2 = document.createElement("th");
thElement2.innerHTML = "DELETE";

//Changing Background Color of selected row
//Adding Edit and Delete Buttons to selected row
function changeBgColor(row) {
  this.enableSubmit();
  var selectedRow = row.parentNode.parentNode;
  var bgColor = selectedRow.style.backgroundColor;

  //Adding 'Delete' Button in Row
  const tdDeleteButton = document.createElement("td");
  tdDeleteButton.innerHTML =
    '<button onClick="deleteRowDetails(this)">Delete</button>';

  //Adding 'Edit' Button in Row
  const tdEditButton = document.createElement("td");
  tdEditButton.innerHTML = '<button onClick="editRowDetails()">Edit</button>';

  //Changing BG Color to Yellow on Selection of Row & Removal of last 2 cells
  if (bgColor == "yellow") {
    selectedRow.style.backgroundColor = "";
    var employeeTable = document.getElementById('myTable');
    employeeTable.rows[selectedRow.rowIndex].deleteCell(8);
    employeeTable.rows[selectedRow.rowIndex].deleteCell(8);
  } 

  //Reveseral of Styles on Deselection
  else {
    selectedRow.style.backgroundColor = "yellow";
    this.addHeadings();
    selectedRow.appendChild(tdEditButton);
    selectedRow.appendChild(tdDeleteButton);
  }
}
//Adding Header cells to table
function addHeadings() {
  tableRows[0].appendChild(thElement1);
  tableRows[0].appendChild(thElement2);
}
//Removing Header Cells from table
function removeHeadings() {
  tableRows[0].removeChild(thElement1);
  tableRows[0].removeChild(thElement2);
}

function addStudentRow() {
  var count = (document.getElementById("myTable").rows.length-1)/2;
  count = count + 1;
  let table = document.getElementById("myTable");

  //Creating student row and adding each element value based on existing student count 
  let row = document.createElement("tr");

  let cell1 = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkBoxClass");
  checkbox.setAttribute("onclick", "changeBgColor(this)");
  cell1.appendChild(checkbox);
  let dynamicText = 'openDropDown(this)';
  let downArrow = document.createElement("img");
  downArrow.setAttribute("src", "down.png");
  downArrow.setAttribute("width", "25px");
  downArrow.setAttribute("onclick",dynamicText);
  cell1.appendChild(downArrow);

  let breakLine = document.createElement("br");
  cell1.insertBefore(breakLine, downArrow);

  row.appendChild(cell1);

  studentCell = document.createElement("td");
  studentCell.innerHTML = "Student " + count;
  row.appendChild(studentCell);

  advisorCell = document.createElement("td");
  advisorCell.innerHTML = "Teacher " + count;
  row.appendChild(advisorCell);

  awardCell = document.createElement("td");
  awardCell.innerHTML = "Approved";
  row.appendChild(awardCell);

  semesterCell = document.createElement("td");
  semesterCell.innerHTML = "Fall";
  row.appendChild(semesterCell);

  typeCell = document.createElement("td");
  typeCell.innerHTML = "TA";
  row.appendChild(typeCell);

  minBudget = 00001;
  maxBudget = 99999;
  const randomBudget = Math.floor(Math.random() * (maxBudget - minBudget + 1)) + minBudget;
  budgetCell = document.createElement("td");
  budgetCell.innerHTML = randomBudget;
  row.appendChild(budgetCell);

  pecentMin = 0;
  percentMax = 100;
  const randomPercentage = Math.floor(Math.random() * (percentMax - pecentMin + 1)) + pecentMin;
  let percentCell = document.createElement("td");
  percentCell.innerHTML = randomPercentage + "%";
  row.appendChild(percentCell);

  table.appendChild(row);

  //Creating Dropdown row and adding to Table
  let row2 = document.createElement("tr");
  row2.setAttribute('class','dropDownTextArea');
  row2.style.visibility = 'collapse';
  let cellText = document.createElement('td');
  cellText.setAttribute("colspan",8);
  cellText.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />';
  row2.appendChild(cellText);
  table.appendChild(row2);

  alert('New Student Added Sucessfully!');
}
//Opening Drop down for each row on click of down arrow image.
function openDropDown(rowDetails){
  var row = (rowDetails.parentNode.parentNode.rowIndex+1)/2-1;
  console.log(document.getElementById('myTable')[1]);
  console.log(row);
  var x = document.getElementsByClassName("dropDownTextArea");
  if (x[row].style.visibility == "collapse" || x[row].style.visibility == "") {
    x[row].style.visibility = "visible";
  } else {
    x[row].style.visibility = "collapse";
  }
}

function editRowDetails(){
  prompt("Edit the details:", "");
}

//Deleting row on click of Delete button
function deleteRowDetails(row){
  var employeeTable = document.getElementById('myTable');
  var rowNum = row.parentNode.parentNode.rowIndex;
  console.log(rowNum);
  employeeTable.deleteRow(rowNum+1);
  employeeTable.deleteRow(rowNum);
  this.enableSubmit();
  alert('Student Deleted Successfully!');
}

function enableSubmit(){
  var enableButton = false;
  var checkList = document.getElementsByClassName('checkBoxClass');
  //Check for enabling button
  for(let i=0;i<checkList.length;i++){
    if(checkList[i].checked){
      enableButton = true;
      break;
    }
  }
  if(enableButton) {
    //Enabling submit button if any one or more rows are selected.
    document.getElementById('submitButton').disabled = false;
    document.getElementById('submitButton').style.background = 'orange';
    document.getElementById('submitButton').style.color = 'white';
}
  else {
    //Calling function to remove EDIT and DELETE from header if no rows are selected
    this.removeHeadings();
    //Adding Disabling Styles to Submit Button if no rows are selected
    document.getElementById('submitButton').disabled = true;
    document.getElementById('submitButton').style.background = '';
    document.getElementById('submitButton').style.color = 'gray';
  }
}

function submitAwards(){
  //alert("Submission Successful!");
  var x;
  //x.length = 0;
  console.log(x);
}