/*
 console.log(username); 
username = prompt("what is your username:");
username = Elert("what is your username:");
document.getElementById("mySubmit").onclick = function(){ }
document.getElementById("myH1").textContent = `Welcome ${username}`;
let price = document.getElementById("price").value;

subResult.textContent = `You are Subcribed`;
mySubmit.onclick = function(){
price = Number(price);

if (condition) {
    // This code runs if the condition is TRUE
} else {
    // This code runs if the condition is FALSE
}
*/// 1. Kunin ang mga Elements (Wag palitan ang laman nito ng numero)
const email = document.getElementById("email");
const myBtn = document.getElementById("myBtn");
const myH1 = document.getElementById("myH1");

myBtn.onclick = function() {
    let emailInput = email.value;

    if (emailInput.includes("@") ){
        myH1.textContent = `Valid Email`;
        myH1.style.color = "green";
    }
    else{
        myH1.textContent = `Invalid Email`;
        myH1.style.color = "red";
    }
}
