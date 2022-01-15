
// ADDED SOUND TO BUTTON USING SWITCH CASE STATEMENT (Noob's Approach)
// var i ;
var n = document.querySelectorAll("button.drum").length;
// for ( i = 0 ; i < n ; i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){alert("I got clicked !!");})
// }
// Adding sound on clicks
for (var i = 0; i < n; i++) {
    document.querySelectorAll("button.drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
// Adding sound on keyboard
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log(this.innerHTML);
            break;
    }
}
function buttonAnimation(key) {
    var currentKey = document.querySelector("." + key);
    currentKey.classList.add("pressed");
    setTimeout(function () {
        currentKey.classList.remove("pressed");
    }, 100);
}