function validationForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var patronimyc = document.getElementById("patronimyc").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var address = document.getElementById("address").value;
    var housenumber = document.getElementById("housenumber").value;

    if(name == "") {
        alert("Name is required");
        return false;
    }

    if(surname == "") {
        alert("Surname is required");
        return false;
    }

    if(email == "") {
        alert("Email is required");
        return false;
    }
    else if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }

    if(address == "") {
        alert("Address is required");
        return false;
    }

    return true;
}

function showData() {
    var dataList; 
    if (localStorage.getItem("dataList") == null) {
        dataList = [];
    }
    else {
        dataList = JSON.parse(localStorage.getItem("dataList"));

    }

    var html = "";

    dataList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.surname + "</td>";
        html += "<td>" + element.patronimyc + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.phonenumber + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.housenumber + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" style="color: white; border-radius: 20px; border: none; background: red; width: 30%; height: 30px;">Delete</button> <button onclick="updateData(' + index + ')" style="color: white; border-radius: 20px; border: none; background: lightblue; width: 25%; height: 30px;">Edit</button></td>';
        html += "</tr>"
    });

    document.querySelector("#storeList tbody").innerHTML = html;
}

window.onload = showData();

function AddData(){
    if (validationForm() == true){
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var patronimyc = document.getElementById("patronimyc").value;
        var email = document.getElementById("email").value;
        var phonenumber = document.getElementById("phonenumber").value;
        var address = document.getElementById("address").value;
        var housenumber = document.getElementById("housenumber").value;

        var dataList; 
        if (localStorage.getItem("dataList") == null) {
        dataList = [];
        }
        else {
        dataList = JSON.parse(localStorage.getItem("dataList"));

        }

        dataList.push({
            name : name,
            surname : surname,
            patronimyc : patronimyc,
            email : email,
            phonenumber : phonenumber,
            address : address, 
            housenumber : housenumber,
        }
        );

        localStorage.setItem("dataList", JSON.stringify(dataList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("patronimyc").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("address").value = "";
        document.getElementById("housenumber").value = "";
    }
}

function resetData(){
    document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("patronimyc").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("address").value = "";
        document.getElementById("housenumber").value = "";
}
function deleteData(index){
    var dataList;
    if (localStorage.getItem("dataList") == null) {
        dataList = [];
    }
    else {
        dataList = JSON.parse(localStorage.getItem("dataList"));
    }

    dataList.splice(index, 1);
    localStorage.setItem("dataList", JSON.stringify(dataList));
    showData();
}

function updateData(index){
    document.getElementById('Submit').style.display = "none";
    document.getElementById('Update').style.display = "block";
    var dataList;
    if (localStorage.getItem("dataList") == null) {
        dataList = [];
    }
    else {
        dataList = JSON.parse(localStorage.getItem("dataList"));
    }

  document.getElementById("name").value = dataList[index].name;
  document.getElementById("surname").value = dataList[index].surname;
  document.getElementById("patronimyc").value = dataList[index].patronimyc;
  document.getElementById("email").value = dataList[index].email;
  document.getElementById("phonenumber").value = dataList[index].phonenumber;
  document.getElementById("address").value = dataList[index].address;
  document.getElementById("housenumber").value = dataList[index].housenumber;

  document.querySelector("#Update").onclick = function() {
    if(validationForm() == true){
        dataList[index].name = document.getElementById("name").value;
        dataList[index].surname = document.getElementById("surname").value;
        dataList[index].patronimyc = document.getElementById("patronimyc").value;
        dataList[index].email = document.getElementById("email").value;
        dataList[index].phonebumber = document.getElementById("phonenumber").value;
        dataList[index].address = document.getElementById("address").value;
        dataList[index].housenumber = document.getElementById("housenumber").value;

        localStorage.setItem("dataList", JSON.stringify(dataList));

        showData();

        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("patronimyc").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("address").value = "";
        document.getElementById("housenumber").value = "";

        document.getElementById('Submit').style.display = "block";
        document.getElementById('Update').style.display = "none";
    }
  }
}








var selectedRow = null;


function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();

   /* var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell_1 = newRow.insertCell(0);
    cell_1.innerHTML = localStorage.getItem("Name");
    var cell_2 = newRow.insertCell(1);
    cell_2.innerHTML = localStorage.getItem("Surame");
    var cell_3 = newRow.insertCell(2);
    cell_3.innerHTML = localStorage.getItem("Patronimyc");
    var cell_4 = newRow.insertCell(3);
    cell_4.innerHTML = localStorage.getItem("Email");
    var cell_5 = newRow.insertCell(4);
    cell_5.innerHTML = localStorage.getItem("Phone-number");
    var cell_6 = newRow.insertCell(5);
    cell_6.innerHTML = localStorage.getItem("Address");
    var cell_7 = newRow.insertCell(6);
    cell_7.innerHTML = localStorage.getItem("House-number");
    var cell_8 = newRow.insertCell(7);
    cell_8.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;*/

    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resertForm();
}


function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["surname"] = document.getElementById("surname").value;
    formData["patronimyc"] = document.getElementById("patronimyc").value;
    formData["email"] = document.getElementById("email").value;
    formData["phonenumber"] = document.getElementById("phonenumber").value;
    formData["address"] = document.getElementById("address").value;
    formData["housenumber"] = document.getElementById("housenumber").value;

  ;

    return formData;
}

function insertNewRecord(data){

    /*localStorage.setItem("Name", data.name);
    localStorage.setItem("Surname", data.surname);
    localStorage.setItem("Patronimyc", data.patronimyc);
    localStorage.setItem("Email", data.email);
    localStorage.setItem("Phone-number", data.phonenumber);
    localStorage.setItem("Address", data.address);
    localStorage.setItem("House-number", data.housenumber);*/

    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell_1 = newRow.insertCell(0);
                 cell_1.innerHTML = data.name;
    var cell_2 = newRow.insertCell(1);
                 cell_2.innerHTML = data.surname;
    var cell_3 = newRow.insertCell(2);
                 cell_3.innerHTML = data.patronimyc;
    var cell_4 = newRow.insertCell(3);
                 cell_4.innerHTML = data.email;
    var cell_5 = newRow.insertCell(4);
                 cell_5.innerHTML = data.phonenumber;
    var cell_6 = newRow.insertCell(5);
                 cell_6.innerHTML = data.address;
    var cell_7 = newRow.insertCell(6);
                 cell_7.innerHTML = data.housenumber;

    var cell_8 = newRow.insertCell(7);
                 cell_8.innerHTML = `<button onClick='onEdit(this)' style="color: white; 
                 border-radius: 20px; border: none; background: lightblue; width: 25%; height: 30px;
                 ">Edit</button> <button onClick='onDelete(this)' style="color: white; 
                 border-radius: 20px; border: none; background: red; width: 30%; height: 30px;">Delete</button>`;

} 

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('surname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('patronimyc').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    document.getElementById('phonenumber').value = selectedRow.cells[4].innerHTML;
    document.getElementById('address').value = selectedRow.cells[5].innerHTML;
    document.getElementById('housenumber').value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.patronimyc;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.phonenumber;
    selectedRow.cells[5].innerHTML = formData.address;
    selectedRow.cells[6].innerHTML = formData.housenumber;
}

function onDelete(td){
    if(confirm('Вы точно хотите удалить запись?')){
        row =  td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resertForm();
}

function resertForm(){
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('patronimyc').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('address').value = '';
    document.getElementById('housenumber').value = '';
}

onsubmit="onFormSubmit()"