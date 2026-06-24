const genreText = document.querySelector(".genre");
const menu = document.querySelectorAll("nav a");

menu.forEach(function(item){

    item.addEventListener("mouseover", function(){
        item.style.color = "orange";
    });

    item.addEventListener("mouseout", function(){
        item.style.color = "white";
    });

});

const registerBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", function () {
    alert("Website Dalam Perbaikan");
});

loginBtn.addEventListener("click", function () {
    alert("Website Dalam Perbaikan");
});

const genres = [
    "ACTION",
    "HORROR",
    "ROMANCE",
    "COMEDY"
];

let index = 0;

setInterval(function(){

    index++;

    if(index >= genres.length){
        index = 0;
    }

    genreText.textContent = genres[index];

}, 4000);