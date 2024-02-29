let button1 = document.queryselector("hardwork");
let button2= document.querySelector("talent");

let birthYear = document.querySelector(".year").value;
let age = 2023 - birthYear;


button1.addEventListener("click", function(){
    hardwork.style.display = "none";
    talent.style.display = "none";
    text.innerHTML="Choose one of the following options."
    age.style.display = "block";
    });


    age.addEventListener("click", function(){
        text.innerHTML="Put in your age"
        age.style.display = "block";
        });