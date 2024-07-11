




const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const tel = document.getElementById("tel.");
const button = document.getElementById("submit");





//form.addEventListener("submit", addTransation);



button.addEventListener("submit", function (e){
    e.preventDefault();
    checkInput();
    trigger2();
})



function checkInput(){
    firstNameValue = firstName.value.trim();
    lastNameValue = lastName.value.trim();
    emailValue = email.value.trim();
    telValue = tel.value.trim();  
    
    if(firstNameValue === ""){
        firstNameValue.placeholder = "Enter your first name";
        firstNameValue.style.background = "#ccc";

    }
    // else{
    //     alert("");
    // }
    // if (lastNameValue === ""){
    //     alert("Enter your last name");
    // }
    // else{
    //     alert("");
    // }
    // if(emailValue === ""){
    //     alert("Please enter your Email");
    // }
    // else{
    //     alert("");
    // }
    // if (telValue === ""){
    //     alert("Please enter your phone number");
    // }
    // else if(telValue.length < 11){
    //     alert("Phone number must be up to 11 digits");
    // }
    // else{
    //     alert("");
    // }
    


}



// const form = document.getElementById("form");
// const firstName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
// const email = document.getElementById("email");
// const tel = document.getElementById("tel.");



// //const localStorageTransations = JSON.parse(localStorage.getItem("transation"))

// //let transation = localStorage.getItem("transation") !== null ? localStorageTransations:[];


// form.addEventListener("submit");


// function submit(e){
//     e.preventDefault();

//     if (firstName.value.trim() === ""){
//         firstName.placeholder = "Please enter your First Name";
//         firstName.style.background = "#ccc";

//     }
//     else if( firstName.value.trim() ){
        
//     }
// }



 












