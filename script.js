
// Newsletter

//   function trigger (){
//       alert( " You will be receving news on your Email from now on ")
//   }








const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("subscribe", (e) => {
    e.preventDefault();

    validateInput();
})

function validateInput (){
const emailValue = email.Value.trim();


if (emailValue === " " ){
    email.setCustomValidity( "Please enter your email");
}

else {
    email.setCustomValidity("");
}


}





// function setErrorFor(input , message ){
// const formControl = input.parentElement;  // .form-control
// const small = formControl.querySelector("small");


// // add error message inside small

// small.innerText = message;

// // Add error class

// formControl.className = " form-control error";


// }





// function setSuccessFor(input){
// const formControl = input.parentElement;  // .form-control

// // Add success class

// formControl.className = " form-control success ";

// }



