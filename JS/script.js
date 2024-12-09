
let icons_img = document.querySelectorAll(".icons img");
let container = document.querySelector(".container");
let images = document.getElementById("main-image");


function phone(phone) {
    images.src = phone; 
}
icons_img.forEach((img) => {
    img.addEventListener("click", function () {
        phone(this.src); 
    });
});

function color(color) {
    container.style.backgroundColor = color;
}
//  لما اضغط علي الصورة اغير للون الخلفية
icons_img.forEach((img, index) => {
    img.addEventListener("click", () => {
        let colors = ["black", "#247ec8", "#1e1e1e", "#c79b53", "#c82525"];
        color(colors[index]); 
    });
});


