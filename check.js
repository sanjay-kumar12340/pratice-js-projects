let formEle = document.getElementById("form")
let firstNameEle = document.getElementById("firstname");
let lastNameEle = document.getElementById("lastname");
let emailEle = document.getElementById("email");
let ageEle = document.getElementById("age");
let roleEle = document.getElementById("role");
let addressEle = document.getElementById("address");
let numberEle = document.getElementById("number");
let genderEle = document.getElementById("gender");
// let result = document.getElementById("result");

// table div 

// tbody 
let tbody = document.getElementById("tbody")

//search 
let searchEle = document.getElementById("search")

// crate the array then push the onj 

let allEle = [];

let editId = null;


function deleteLTable(id) {
    allEle = allEle.filter(table => table.id !== id)
    randerTable(allEle)
}

// Find the row data by id
function editTableFild(id) {
    editData = allEle.find(table => table.id === id);

    firstNameEle.value = editData.firstName;
    lastNameEle.value = editData.lastName;
    emailEle.value = editData.email;
    ageEle.value = editData.age;
    roleEle.value = editData.role;
    addressEle.value = editData.address;
    numberEle.value = editData.number;
    genderEle.value = editData.gender;


    editId = id;

}
// update input fildes 
function updateTable() {
    let updateTable = allEle.find(table => table.id === editId);
    if (updateTable) {
        updateTable.firstName = firstNameEle.value;
        updateTable.lastName = lastNameEle.value;
        updateTable.email = emailEle.value;
        updateTable.age = ageEle.value;
        updateTable.roleEle = roleEle.value;
        updateTable.address = addressEle.value;
        updateTable.number = numberEle.value;
        updateTable.gender = genderEle.value;
    }

    randerTable(allEle)
    clearForm();

    editId = null;

}
function clearForm() {
    firstNameEle.value = '';
    lastNameEle.value = '';
    email.value = '';
    ageEle.value = '';
    roleEle.value = '';
    addressEle.value = '';
    numberEle.value = '';
    genderEle.value = '';
}
function randerTable(table) {

    tbody.innerHTML = '';

    table.forEach(tableFildes => {

        let tr = document.createElement("tr")

        let tdFirstName = document.createElement("td")
        tdFirstName.innerHTML = tableFildes.firstName

        let tdLastName = document.createElement("td")
        tdLastName.innerHTML = tableFildes.lastName

        let tdEmail = document.createElement("td")
        tdEmail.innerHTML = tableFildes.email

        let tdAge = document.createElement("td")
        tdAge.innerHTML = tableFildes.age

        let tdrole = document.createElement("td")
        tdrole.innerHTML = tableFildes.role

        let tdAddress = document.createElement("td")
        tdAddress.innerHTML = tableFildes.address

        let tdNumber = document.createElement("td")
        tdNumber.innerHTML = tableFildes.number

        let tdGender = document.createElement("td")
        tdGender.innerHTML = tableFildes.gender

        let tdAction = document.createElement("td")

        let editBtn = document.createElement("img")
        // editBtn.innerHTML = "Edit"
        editBtn.src = "./assets/pencil.png";
        editBtn.classList = "edit"
        editBtn.setAttribute = ("data-id", tableFildes.id);
        editBtn.onclick = () => editTableFild(tableFildes.id);

        let deleteBtn = document.createElement("img")
        deleteBtn.src = "./assets/delete.png"
        // deleteBtn.innerHTML = "Delete"
        deleteBtn.classList = "delete"
        deleteBtn.setAttribute = ("data-id", tableFildes.id);
        deleteBtn.onclick = () => deleteLTable(tableFildes.id);

        tbody.appendChild(tr)
        tr.appendChild(tdFirstName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdAge)
        tr.appendChild(tdrole)
        tr.appendChild(tdAddress)
        tr.appendChild(tdNumber)  
        tr.appendChild(tdGender)
        tr.appendChild(tdAction)
        tdAction.appendChild(editBtn)
        tdAction.appendChild(deleteBtn)

    });
    localStorage.setItem("allEle", JSON.stringify(allEle));
}

// search input 

function searchTable() {
    let searchQuery = searchEle.value.toLowerCase();

    let filterResult = allEle.filter(user => {
        return (
            user.firstName.toLowerCase().includes(searchQuery) ||
            user.lastName.toLowerCase().includes(searchQuery) ||
            user.email.toLowerCase().includes(searchQuery) ||
            user.age.toLowerCase().includes(searchQuery) ||
            user.role.toLowerCase().includes(searchQuery) ||
            user.number.toLowerCase().includes(searchQuery) ||
            user.gender.toLowerCase().includes(searchQuery) ||
            user.address.toLowerCase().includes(searchQuery)
        );


    });


    randerTable(filterResult)
}
searchEle.addEventListener("input", searchTable);


formEle.addEventListener("submit", (event) => {
    event.preventDefault();

    let existingEmail = allEle.find(user => user.email === emailEle.value.trim())
    let existingNumber = allEle.find(user => user.number === numberEle.value.trim())

    if (existingEmail && (editId === null || existingEmail.id !== editId)) {
        result.innerHTML = "email is not requied";
        result.style.display = "block"
        return;
    }
    if (existingNumber && (editId === null || existingNumber.id !== editId)) {
        result.innerHTML = "Number is not requied";
        result.style.display = "block"
        return;
    }
    else {
        console.log("not working");

    }

    if (editId !== null) {
        updateTable();
    } else {
        editId = null

        if (firstNameEle.value !== "") {
            console.log(`firstNameEle : ${firstNameEle.value}`);
        }
        if (lastNameEle.value.trim() !== "") {
            console.log(`lastNameEle : ${lastNameEle.value}`);
        }
        if (emailEle.value.trim() !== "") {
            console.log(`emailEle : ${emailEle.value}`);
        }
        if (ageEle.value.trim() !== "") {
            console.log(`ageEle : ${ageEle.value}`);
        }
        if (roleEle.value.trim() !== "") {
            console.log(`roleEle : ${roleEle.value}`);
        }
        if (addressEle.value.trim() !== "") {
            console.log(`addressEleEle : ${addressEle.value}`);
        }
        if (numberEle.value.trim() !== "") {
            console.log(`numberEle : ${numberEle.value}`);
        }
        if (genderEle.value.trim() !== "") {
            console.log(`genderEle : ${genderEle.value}`);
        }

        allEle.push(
            {
                id: allEle.length + 1,
                firstName: firstNameEle.value,
                lastName: lastNameEle.value,
                email: emailEle.value,
                age: ageEle.value,
                role: roleEle.value,
                address: addressEle.value,
                number: numberEle.value,
                gender: genderEle.value
            }
        );


        tbody.innerHTML = '';

        randerTable(allEle)

        clearForm();
    }

});

let existingUsers = localStorage.getItem("allEle")
if (existingUsers) {
    allEle = JSON.parse(existingUsers);
    randerTable(allEle)
}

