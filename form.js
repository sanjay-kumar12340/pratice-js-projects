let allEle = []
///////dom elelmens//////
let firstNameEle = document.getElementById('firstname');
let lastNameEle = document.getElementById('lastname');
let emailEle = document.getElementById('email');
let ageEle = document.getElementById('age');
let roleEle = document.getElementById('role');
let addressEle = document.getElementById('address');
let numberEle = document.getElementById('number');
let genderEle = document.getElementById('gender');
let tbodyEle = document.getElementById('tbody')

let formEle = document.getElementById('form')



formEle.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (firstNameEle.value !== '') {
        console.log(`firstNameEle : ${firstNameEle.value}`);
    }
    if (lastNameEle.value !== '') {
        console.log(`lastNameEle : ${lastNameEle.value}`);  
    }
    if (emailEle.value !== '') {
        console.log(`emailEle : ${emailEle.value}`);
    }
    if (ageEle.value !== '') {
        console.log(`ageEle : ${ageEle.value}`);   
    }
    if (roleEle.value !== '') {
        console.log(`roleEle : ${roleEle.value}`);
        
    }
    if (roleEle.value !== '') {
        console.log(`addressEle : ${addressEle.valu}`); 
    }
    if (numberEle.value !== '') {
        console.log(`numberEle : ${numberEle.value}`);
        
    }
    if (genderEle.value !== '') {
        console.log(`genderEle : ${genderEle.value}`);
    }

   
    allEle.push(
       {
           id : allEle.length + 1,
           firstname:firstNameEle.value,
           lastname:lastNameEle.value,
           email:emailEle.value,
           age:ageEle.value,
           role:roleEle.value,
           address:addressEle.value,
           number:numberEle.value,
           gender:genderEle.value,
       }
    )

    randerList()

    formEle.reset()
})

//////rander list////

function randerList(){
    tbody.innerHTML = '';


    allEle.forEach(tableFields => {
        
        let tr = document.createElement('tr')


        let tdFirstName = document.createElement('td')
        tdFirstName.innerHTML = tableFields.firstname;

        let tdLastName = document.createElement('td')
        tdLastName.innerHTML = tableFields.lastname;

        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = tableFields.email;

        let tdAge = document.createElement('td')
        tdAge.innerHTML = tableFields.age;

        let tdRole = document.createElement('td')
        tdRole.innerHTML = tableFields.role;

        let tdAddress = document.createElement('td')
        tdAddress.innerHTML  = tableFields.address;

        let tdNumber = document.createElement('td')
        tdNumber.innerHTML  = tableFields.number;


        let tdGender = document.createElement('td')
        tdGender.innerHTML  = tableFields.gender;

        let tdActions = document.createElement('td')

                // editBtn.innerHTML = "Edit"
        let editBtn = document.createElement("img")
        editBtn.src = "/pencil.png";
        editBtn.classList = "edit"
        editBtn.setAttribute = ("data-id", tableFields.id);
        editBtn.onclick = () => editTableFild(tableFields.id);


        
                // dleteBtn.innerHTML = "delete"
        let dletebtn = document.createElement('img')
        dletebtn.src = '/bin.png';
        dletebtn.classList = 'dlete';
        dletebtn.setAttribute = ("data-id" , tableFields.id);
        dletebtn.onclick = () => deleteTableFild(tableFields.id)  ;     
   
       tbody.appendChild(tr);
       tr.appendChild(tdFirstName);
       tr.appendChild(tdLastName);
       tr.appendChild(tdEmail);
       tr.appendChild(tdAge);
       tr.appendChild(tdRole);
       tr.appendChild(tdAddress);
       tr.appendChild(tdNumber);
       tr.appendChild(tdGender);
       tr.appendChild(tdActions)
       tdActions.appendChild(editBtn);
       tdActions.appendChild(dletebtn)
 });

 
 // Function to edit data
function editData(id) {
    const data = allEle.find(item => item.id === id);

    firstNameEle.value = data.firstname;
    lastNameEle.value = data.lastname;
    emailEle.value = data.email;
    ageEle.value = data.age;
    roleEle.value = data.role;
    addressEle.value = data.address;
    numberEle.value = data.number;
    genderEle.value = data.gender;

    // Update the form's submit event to update data
    formEle.onsubmit = (event) => {
        event.preventDefault();

        // Update the existing data in the array
        data.firstname = firstNameEle.value.trim();
        data.lastname = lastNameEle.value.trim();
        data.email = emailEle.value.trim();
        data.age = ageEle.value.trim();
        data.role = roleEle.value.trim();
        data.address = addressEle.value.trim();
        data.number = numberEle.value.trim();
        data.gender = genderEle.value.trim();

      
        // Reset submit handler to add new data
        formEle.onsubmit = (event) => {
            event.preventDefault();
            addData();
        };
    };
}


    localStorage.setItem('allEle', JSON.stringify(allEle));
}

