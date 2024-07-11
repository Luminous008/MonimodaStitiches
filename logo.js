




let logoVar = document.getElementById("logo");
let logoArray = [ "slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg", "slide6.jpg", "slide7.jpg", "slide8.jpg", 
    "slide9.jpg", "slide10.jpg", "slide11.jpg", "slide12.jpg"];

let logoIndex = 0;

function slideShow(){
    logoVar.setAttribute("src", logoArray[logoIndex]);
    logoIndex++

    if(logoIndex >= logoArray.length){
        //return
        logoIndex = 0;
    }

}


setInterval(slideShow, 8000);