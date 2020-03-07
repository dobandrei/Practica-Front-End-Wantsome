const button = document.getElementsByClassName("colorBtn");

const body = document.querySelector("body");

const div = document.querySelector("div");

const h2 = document.createElement("h2");
div.appendChild(h2);

const randomColor =  () => '#' + Math.random().toString(16).substr(-6).toUpperCase();

const changeColor = () => {
        body.style.backgroundColor = randomColor();
        h2.textContent = `Hex code : ${randomColor()}`;
        h2.style.padding = "10px";
}
button[0].addEventListener("click", changeColor);
