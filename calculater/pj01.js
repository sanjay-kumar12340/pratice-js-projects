
// Get references to the input box and buttons
// const inputBox = document.getElementById("inputbox");
// const buttons = document.querySelectorAll("button");
// let currentInput = '';

// // Add event listeners to the buttons
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const value = button.innerText;

//         if (value === "AC") {
//             // Clear the input
//             currentInput = '';
//             inputBox.value = currentInput;
//         } else if (value === "DEL") {
//             // Delete last character
//             currentInput = currentInput.slice(0, -1);
//             inputBox.value = currentInput;
//         } else if (value === "=") {
//             // Calculate the result
//             try {
//                 currentInput = eval(currentInput);
//                 inputBox.value = currentInput;
//             } catch (error) {
//                 inputBox.value = "Error"; // In case of invalid expression
//             }
//         } else {
//             // Append the clicked value to the current input
//             currentInput += value;
//             inputBox.value = currentInput;
//         }
//     });
// });



let inputbox = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons)
arr .forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            inputbox.value = string;
            
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            inputbox.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inputbox.value = string;

        }
        else{
            string += e.target.innerHTML;
            inputbox.value = string;
    
        }
        
    })
    
})