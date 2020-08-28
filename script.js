
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');
const menuWrap = document.getElementById('menu-wrap');
const figBox = document.getElementById("fig-box");
const hero = document.getElementById("hero");


menu.addEventListener("click", () => {
	menuList.style.display = "flex";
}); 

document.getElementById('menu').removeEventListener("click", () => {
	menuList.style.display= "none";
});

function showGallery () {
	const figureElement = document.querySelectorAll("figure");
	figureElement.forEach(figs => {
		figs.style.display ="flex";
	});
}
