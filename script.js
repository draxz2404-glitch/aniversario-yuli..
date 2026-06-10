document.addEventListener("DOMContentLoaded", () => {

const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");

enterBtn.addEventListener("click", () => {

welcomeScreen.style.display = "none";
mainContent.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const startDate = new Date("2025-06-12T00:00:00");

function updateCounter(){

const now = new Date();

const difference = now - startDate;

const days = Math.floor(difference / (1000*60*60*24));

const hours = Math.floor(
(difference % (1000*60*60*24))
/
(1000*60*60)
);

const minutes = Math.floor(
(difference % (1000*60*60))
/
(1000*60)
);

const seconds = Math.floor(
(difference % (1000*60))
/
1000
);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}

updateCounter();
setInterval(updateCounter,1000);

});
function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(Math.random()*20+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,700);
function openLetter(){

document
.querySelector(".envelope")
.classList.toggle("open");

}function openLetter(){

document
.querySelector(".envelope")
.classList.toggle("open");

}
function createStar(){

const star =
document.createElement("div");

star.classList.add("shooting-star");

star.style.left =
Math.random()*window.innerWidth+"px";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},2000);

}

setInterval(createStar,3000);
console.log("script funcionando");