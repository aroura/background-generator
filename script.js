var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector(".randomColor");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

// Color generated and CSS linear gradient property on first pageload
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColor.addEventListener("click", setRandomColors);


function makeRandomColor() {
	var num = "";

	num = Math.floor(Math.random() * 16777216).toString(16);
	while (num.length < 6) {
		num = "0" + num;
	}

	return "#" + num;
}

function setRandomColors() {
	color1.value = makeRandomColor();
	color2.value = makeRandomColor();
	// console.log(color1.value, color2.value);
	setGradient();
}