function play() {
    var audio = document.getElementById("rick");
    audio.play();
}

document.getElementById("hamster").addEventListener("click", onClick);
document.getElementById("hamster2").addEventListener("click", onClick2);
document.getElementById("hamster3").addEventListener("click", onClick3);

var isPlaying = 0
var isPlaying2 = 0
var isPlaying3 = 0

var hamster =  document.getElementById("hamster");
var right = setInterval(function() {hamster.style.transform = "scaleX(-1)";}, 250)  
var left = setInterval(function() {hamster.style.transform = "scaleX(1)";}, 500)

var hamster2 =  document.getElementById("hamster2");
var right2 = setInterval(function() {hamster2.style.transform = "scaleX(-1)";}, 250)  
var left2 = setInterval(function() {hamster2.style.transform = "scaleX(1)";}, 500)

var hamster3 =  document.getElementById("hamster3");
var right3 = setInterval(function() {hamster3.style.transform = "scaleX(-1)";}, 250)  
var left3 = setInterval(function() {hamster3.style.transform = "scaleX(1)";}, 500)

function onClick() {
    if (isPlaying == 1) {
        console.log("yes");
        isPlaying = 0;
        hamster.classList.remove("spin");
        right = setInterval(function() {hamster.style.transform = "scaleX(-1)";}, 250)  
        left = setInterval(function() {hamster.style.transform = "scaleX(1)";}, 500)  
    } else {
        console.log("no");
        isPlaying = 1;
        clearInterval(right)
        clearInterval(left)
        hamster.classList.add("spin");
    }
}

function onClick2() {
    if (isPlaying2 == 1) {
        console.log("yes");
        isPlaying2 = 0;
        hamster2.classList.remove("spin");
        right2 = setInterval(function() {hamster2.style.transform = "scaleX(-1)";}, 250)  
        left2 = setInterval(function() {hamster2.style.transform = "scaleX(1)";}, 500)  
    } else {
        console.log("no");
        isPlaying2 = 1;
        clearInterval(right2)
        clearInterval(left2)
        hamster2.classList.add("spin");
    }
}

function onClick3() {
    if (isPlaying3 == 1) {
        console.log("yes");
        isPlaying3 = 0;
        hamster3.classList.remove("spin");
        right3 = setInterval(function() {hamster3.style.transform = "scaleX(-1)";}, 250)  
        left3 = setInterval(function() {hamster3.style.transform = "scaleX(1)";}, 500)  
    } else {
        console.log("no");
        isPlaying3 = 1;
        clearInterval(right3)
        clearInterval(left3)
        hamster3.classList.add("spin");
    }
}