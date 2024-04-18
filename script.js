let button1 = document.querySelector("#hardwork");
let button2= document.querySelector("#talent");
let button3 = document.querySelector("#fifteen");
let button4= document.querySelector("#sixteen");
let asta= document.querySelector(".asta");
let yuno= document.querySelector(".yuno");
let y= document.querySelector(".yami");
let j= document.querySelector(".julius");

let main= document.querySelector(".main");
let mainText= document.querySelector(".mainText");

let age;
let choice;



let submitButton = document.querySelector("#submit");
let results = document.querySelector(".results");

button1.addEventListener("click", function() { 
choice="hardwork";
// let choice= document.querySelector("button1").value;
console.log(choice);
});

    button2.addEventListener("click", function() {
   choice="talent";
        // let choice= document.querySelector("button2").value;
        console.log(choice);
    });

    button3.addEventListener("click", function() {
         age="fifteen";
        // let age= document.querySelector("button1").value;
        console.log(age);
    });

    button4.addEventListener("click", function() {
        age="sixteen";
        // let age= document.querySelector("button2").value;
        console.log(age);
    });









    submitButton.addEventListener("click", function() {

       if (choice === "hardwork" && age === "fifteen"){
        console.log("You are a young, hardworking knight like Asta");
        mainText.innerHTML = ("You are a young, hardworking knight like Asta");
        main.src = "asta.jpg"
       }




       else if (choice === "hardwork" && age === "sixteen"){
            console.log("You are an experienced hardworking knight like Yami");
            mainText.innerHTML = ("You are an experienced hardworking knight like Yami");
            main.src = "yami.jpg"
    };
    
    if (choice === "talent" && age === "fifteen"){
        console.log("You are a young, talented knight like Yuno");
        mainText.innerHTML = ("You are a young, talented knight like Yuno");
        main.src = "yuno.jpg"
    }
       else if (choice === "talent" && age === "sixteen"){
        console.log("You are an experienced, talented knight like Julius");
        mainText.innerHTML = ("You are an experienced, talented knight like Julius");
        main.src = "julius.jpg"
        }
    
    })