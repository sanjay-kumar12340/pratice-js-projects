// ///////perform form in js////////////use,dom
// // console.log("komal");

// let firstNameEle = document.getElementById('firstname')
// let lastNameEle = document.getElementById('lastname')
// let email = document.getElementById('email')
// let age = document.getElementById('age')
// let role = document.getElementById('role')
// let address = document.getElementById('address')
// let number = document.getElementById('number')
// let gender = document.getElementById('gender')
// let tbody = document.getElementById('tbody')

// let formEle = document.getElementById('form')
// ///
// formEle.addEventListener('submit' , function(e) {
//     e.preventDefault();
     
//    ////use if statement 

//     if (firstNameEle.value.trim !== "" ) {
//         console.log(`firstname :` ,  firstNameEle.value);
        
//     } else {
//         console.log("not working");
//     }
    
//     if (lastNameEle.value.trim !== "" ) {
//         console.log(`lastname :` ,  lastNameEle.value);
        
//     }
//     if (email.value.trim !== "" ) {
//         console.log(`email :` ,  email.value);
        
//     }
//     if (age.value.trim !== "" ) {
//         console.log(`age :` ,  age.value);
        
//     }
//     if (role.value.trim !== "" ) {
//         console.log(`role :` ,  role.value);
        
//     }
//     if (address.value.trim !== "" ) {
//         console.log(`address :` ,  address.value);
        
//     }
//     if (number.value.trim !== "" ) {
//         console.log(`number :` ,  number.value);
        
//     }
//     if (gender.value.trim !==  ''){
//         console.log(`gender :` , gender.value );
        
//     }
// })
// ////
// let allelement = []

// allelement.push(
// {
//  id: allelement.length + 1,
//  firstname:firstNameEle.value,
//  lastname:lastNameEle.value,
//  email:email.value,
//  age:age.value,
//  role:role.value,
//  address:address.value,
//  number:number.value,
//  gender:gender.value,
// }
// )

// function randertable(table){
//     tbody.innerHTML = '' ;

//     table.forEach(tableFildes => {

//         let tr = document.createElement('tr')

//         let tdfirstname = document.createElement('td')
//         tdfirstname.innerHTML = tableFildes.firstname

//         let tdlastname = document.createElement('td')
//         tdlastname.innerHTML = tableFildes.lastname

//         let tdemail = document.createElement('td')
//         tdemail.innerHTML = tableFildes.email

//         let tdage = document.createElement('td')
//         tdage.innerHTML = tableFildes.age

//         let tdrole = document.createElement('td')
//         tdrole.innerHTML = tableFildes.role

//         let tdaddress = document.createElement('td')
//         tdaddress.innerHTML = tableFildes.address

//         let tdnumber = document.createElement('td')
//         tdnumber.innerHTML = tableFildes.number

//         let tdgender = document.createElement('td')
//         tdgender.innerHTML = tableFildes.gender
         
//         let tdaction = document.createElement('td')

//         let editbtn = document.createElement('img')

//         ///editbtn.innerHTML = 'edit'////
//         editbtn.src = '/pencil.png';
//         editbtn.classList = 'edit'
//         editbtn.setAttribute = ('data-id' , tableFildes.id);
//         editbtn.onclick = () => edittablefild(tableFildes.id)


//         let dletebtn = document.createElement('img')

//         ///dletebtn.innerHTML = 'dlete'////
//         dletebtn.src = '/bin.png';
//         dletebtn.classList = 'dlete'
//         dletebtn.setAttribute = ('data-id' , tableFildes.id);
//         dletebtn.onclick = () => dletetablefild(tableFildes.id)
 
        

//         tbody.appendchild(tr)
//         tr.appendChild(tdfirstname)
//         tr.appendChild(tdlastname)
//         tr.appendChild(tdemail)
//         tr.appendChild(tdage)
//         tr.appendChild(tdrole)
//         tr.appendChild(tdaddress) 
//         tr.appendChild(tdnumber) 
//         tr.appendChild(tdgender)
//         tdaction.appendChild(editbtn)
//         tdaction.appendChild(dletebtn)

//     });

//     localStorage.setItem('allelement', JSON.stringify(allelement));

// }
// let exsistuser = localStorage.getItem('allelement')
// if (exsistuser) {
//     allelement = JSON.parse(exsistuser);
//     randertable(allelement);
    
// }


// Selecting the necessary DOM elements
let firstNameEle = document.getElementById('firstname');
let lastNameEle = document.getElementById('lastname');
let email = document.getElementById('email');
let age = document.getElementById('age');
let role = document.getElementById('role');
let address = document.getElementById('address');
let number = document.getElementById('number');
let gender = document.getElementById('gender');
let tbody = document.getElementById('tbody');
let formEle = document.getElementById('form');

// Initialize the allelement array
let allelement = JSON.parse(localStorage.getItem('allelement')) || [];

// Function to render the table
function randertable(table) {
    tbody.innerHTML = ''; // Clear the existing table

    table.forEach(tableFildes => {
        let tr = document.createElement('tr');
        
        // Create table cells for each field
        let tdfirstname = document.createElement('td');
        tdfirstname.innerHTML = tableFildes.firstname;

        let tdlastname = document.createElement('td');
        tdlastname.innerHTML = tableFildes.lastname;

        let tdemail = document.createElement('td');
        tdemail.innerHTML = tableFildes.email;

        let tdage = document.createElement('td');
        tdage.innerHTML = tableFildes.age;

        let tdrole = document.createElement('td');
        tdrole.innerHTML = tableFildes.role;

        let tdaddress = document.createElement('td');
        tdaddress.innerHTML = tableFildes.address;

        let tdnumber = document.createElement('td');
        tdnumber.innerHTML = tableFildes.number;

        let tdgender = document.createElement('td');
        tdgender.innerHTML = tableFildes.gender;

        let tdaction = document.createElement('td');

        // Create edit button
        let editbtn = document.createElement('img');
        editbtn.src = '/pencil.png';
        editbtn.classList = 'edit';
        editbtn.setAttribute('data-id', tableFildes.id);
        editbtn.onclick = () => edittablefild(tableFildes.id);

        // Create delete button
        let dletebtn = document.createElement('img');
        dletebtn.src = '/bin.png';
        dletebtn.classList = 'dlete';
        dletebtn.setAttribute('data-id', tableFildes.id);
        dletebtn.onclick = () => dletetablefild(tableFildes.id);

        // Append the elements to the table row
        tdaction.appendChild(editbtn);
        tdaction.appendChild(dletebtn);

        tr.appendChild(tdfirstname);
        tr.appendChild(tdlastname);
        tr.appendChild(tdemail);
        tr.appendChild(tdage);
        tr.appendChild(tdrole);
        tr.appendChild(tdaddress);
        tr.appendChild(tdnumber);
        tr.appendChild(tdgender);
        tr.appendChild(tdaction);

        tbody.appendChild(tr);
    });

    // Save to localStorage
    localStorage.setItem('allelement', JSON.stringify(allelement));
}

// Function to handle form submission
formEle.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Validate and push form data into allelement array
    if (firstNameEle.value.trim() !== "") {
        let newElement = {
            id: allelement.length + 1,
            firstname: firstNameEle.value,
            lastname: lastNameEle.value,
            email: email.value,
            age: age.value,
            role: role.value,
            address: address.value,
            number: number.value,
            gender: gender.value,
        };

        allelement.push(newElement);
        randertable(allelement); // Re-render the table
    } else {
        console.log("First name is required.");
    }

    // Reset the form fields after submission
    formEle.reset();
});

// Functions for editing and deleting records
function edittablefild(id) {
    const record = allelement.find(item => item.id === id);
    if (record) {
        // Populate form with selected record data for editing
        firstNameEle.value = record.firstname;
        lastNameEle.value = record.lastname;
        email.value = record.email;
        age.value = record.age;
        role.value = record.role;
        address.value = record.address;
        number.value = record.number;
        gender.value = record.gender;
    }
}

function dletetablefild(id) {
    // Remove record from allelement array
    allelement = allelement.filter(item => item.id !== id);
    randertable(allelement); // Re-render the table after deletion
}

// Initial rendering of table if there's existing data in localStorage
randertable(allelement);





