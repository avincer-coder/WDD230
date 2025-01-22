const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h2Color = document.querySelector('h2');
const aLinks = document.querySelectorAll('.weekLinks');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

console.log(aLinks)
// aLinks.color = "red"

const modeButton = document.querySelector("#darkMode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "🔆";
		aLinks.forEach((link)=>{
			link.style.color = "#fff"
		})
		h2Color.style.color = "#fff"

	} else {
		body.style.background = "#eee";
		body.style.color = "#000";
		modeButton.textContent = "🕶️";
		aLinks.forEach((link)=>{
			link.style.color = "#000"
		})
		h2Color.style.color = "#000"
	}
});
