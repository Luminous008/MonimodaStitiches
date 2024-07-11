




     const form = document.getElementById("form");
     const email = document.getElementById("email");
     const button = document.getElementById("button");
     form.addEventListener("subscribe", function (event) {
        event.preventDefault();
        checkInput();
        trigger();
     })

     function trigger(){
        emailValue = email.value.trim(); 

        if( emailValue === ""){
            alert("Please enter a valid Email");
        }
        else{
            alert("You will be receving our newsletter from now on ");
        }
     }

     







