//  main img
const images = [
    "img/grass.avif",
    "img/far-main.webp"
];

const slider = document.getElementById("slider");
let index = 0;

setInterval(() => {

    slider.style.opacity = "0";

    setTimeout(() => {
        index = (index + 1) % images.length;
        slider.src = images[index];
        slider.style.opacity = "1";
    }, 1000);

}, 4000);

// loginpage
const loginBtn = document.getElementById("openLoginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeBtn");

loginBtn.addEventListener("click", () => {
    loginModal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    loginModal.classList.remove("show");
});


// login submit

function showAlert() {
    alert("✅ Login Successful!");
    document.getElementById("loginModal").classList.remove("show");
}

// send message
function sendAlert(){
    alert(" ✅ send successfull!");
}


// navbar 
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



 