



const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById('email');
const tel = document.getElementById("tel.");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
} )




function checkInput(){
    //Get the values from the input

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim(); 
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    



//   window.location.href="welcome.html"


//if the username is empty, there should be an error message


if (firstNameValue === "" ){
        setErrorFor(firstName , "first name field can not be blank" );

}
else {
        setSuccessFor(firstName);
}
if (lastNameValue === ""){
    setErrorFor(lastName , "Last name field can not be blank");
}
else{
    setSuccessFor(lastName)
}
if (emailValue === "" ){
    setErrorFor(email , "email can not be blank" );

}
else {
    setSuccessFor(email);
}
if (telValue === "" ){
                setErrorFor(tel , "Tel. field can not be blank" );
        
        }

        else if (telValue.length < 11 ){
            setErrorFor(tel, "Tel. must be 11 digits");
        }

    else {
        setSuccessFor(tel);
    }



}



function setErrorFor(input , message ){
    const formControl = input.parentElement;  // .form-control
    const small = formControl.querySelector("small");


    // add error message inside small

    small.innerText = message;

 // Add error class
 
 formControl.className = "form-control error";


}





function setSuccessFor(input){
    const formControl = input.parentElement;  // .form-control

    // Add success class

    formControl.className = " form-control success ";

}




