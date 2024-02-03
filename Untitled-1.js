let butts = document.querySelectorAll(".butt");
let reset = document.querySelector(".reset");
let newG = document.querySelector("#but2");
let winn = document.querySelector(".win");
let msg = document.querySelector(".msg");
let game = document.querySelector(".game");
let body = document.querySelector("body");
let curr = "dark";
let turno = true;
let wincombo = [
[0, 1, 2],
[0, 3, 6], 
[0, 4, 8], 
[1, 4, 7], 
[2, 5, 8], 
[2, 4, 6], 
[3, 4, 5], 
[6, 7, 8],
];

but1.addEventListener("click", () => {
    if (curr === "dark") {
        curr = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        game.classList.add("light");
        game.classList.remove("dark");
    } else {
        curr = "dark"; 
        body.classList.add("dark");
        body.classList.remove("light");
        game.classList.add("dark");
        game.classList.remove("light");
    }
    console.log("your background is",curr,"now");
});

const newGame = () => {
let turno = true;
enablebutts();
};

const disablebutts = () => {
for(butt of butts) {
butt.disabled = true;
}
};

const enablebutts = () => {
for(butt of butts) {
butt.disabled = false;
butt.innerText = "";
winn.classList.add("hidden");
}
};

butts.forEach((butt) => {
butt.addEventListener("click", () => {
if(turno === true){
    butt.innerText = "O";
    turno = false;
}
else {
    butt.innerText = "X";
    turno = true;
}
butt.disabled =  true;

checkWinnor();
} )
})

const checkWinnor = () => {
for(combo of wincombo) {
let pos1val = butts[combo[0]].innerText;
let pos2val = butts[combo[1]].innerText;
let pos3val = butts[combo[2]].innerText;

if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {

   showWinnor(pos1val);

}
if (Array.from(butts).every(butt => butt.innerText !== "")) {
showDraw();
}
}
};

const showWinnor = (winnor) => {
if(winnor === "O"){
    msg.innerText = " Way to go Player 1(O) ";
}
else {
    msg.innerText = " You got some common sense Player 2(X) ";
}
winn.classList.remove("hidden");
disablebutts();
};

const showDraw = () => {
    msg.innerText = "Congrats on successfully wasting your time";
winn.classList.remove("hidden");
disablebutts();
};

reset.addEventListener("click", newGame);
newG.addEventListener("click", newGame);


document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.visibility = "visible";
    popupOverlay.style.opacity = "1";

    document.addEventListener("click", function(event) {
        const popup = document.querySelector(".popup");
        if (!popup.contains(event.target)) {
            closePopup();
        }
    });
});

function closePopup() {
    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.visibility = "hidden";
    popupOverlay.style.opacity = "0";
}

function stopPropagation(event) {
    event.stopPropagation();
}