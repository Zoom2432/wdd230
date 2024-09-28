let elem = document.getElementById('year');
elem.textContent = new Date().getFullYear();

let elem2 = document.getElementById('lastModified')
elem2.textContent = `Last Modification - ${new Date(document.lastModified)}`;




const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});




const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#FFFFFF";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});