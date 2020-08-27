var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;

hole.addEventListener('animationiteration', () => {
    var random = Math.random()*3;
    var top = (random*100)+150;
    hole.style.top = -(top) + "px";
});
setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top = (characterTop+3)+"px";
},10);

function jump(){
    jumping = 1;

    var jumpInterval = setInterval(function(){

    },10);
}