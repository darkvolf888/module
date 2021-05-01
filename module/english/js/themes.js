// Темный режим
if (!localStorage.theme)
	localStorage.theme = "light";
	document.body.className = localStorage.theme;
var toggles = document.querySelector(".header__title_text");
var togglesButton = document.querySelector(".header__title_button");
toggles.onclick = () => {
	document.body.classList.toggle("_light"); 
	toggles.classList.toggle("_active");
	togglesButton.classList.toggle("_active");
	localStorage.theme = document.body.className || "light"
}
if(document.body.classList.contains('_light')) {
	toggles.classList.add("_active");
	togglesButton.classList.add("_active");
}