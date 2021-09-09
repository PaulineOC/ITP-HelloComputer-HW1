
const COUNTRIES = Object.freeze({
	"US": {
		"lang": "en-US",
		"animals": {
			"duck": "quack",
			"rooster":"cock-a-doodle-doo",
			"dog": "woof woof",
			"cat": "meow",
			"frog": "ribbit",
		},
	},
	"FR": {
		"lang": "fr-FR",
		"animals": {
			"duck": "coin coin",
			"rooster": "cocorico",
			"dog": "ouaf ouaf",
			"cat": "miaou",
			"frog": "croa croa",
		},
	},
	"IN": {
		"lang": "hi-IN",
		"animals": {
			"duck": "कां कां",
			"rooster": "कुक्डूकू करना",
			"dog": "भौंकना",
			"cat": "म्याऊँ – म्याऊँ करना",
			"frog": "टरटराना",
		},
	},
	"JP": {
		"lang": "ja-JP",
		"animals": {
			"duck": "ガーガー",
			"rooster": "コケコッコー",
			"dog": "ワンワン",
			"cat": "ニャー",
			"frog": "ケロケロ",
		},
	},
	"RU": {
		"lang": "ru-RU",
		"animals": {
			"duck": "кря-кря",
			"rooster": "кукареку",
			"dog": "гав-гав",
			"cat": "мяу-мяу",
			"frog": "ква ква",
		},
	},
});

const synth = window.speechSynthesis;

const triggerAnimalOnomatopoeia = (text, language) => {
	console.log(text, language);
	if (synth.speaking) {
		return;
	}
	let words = new SpeechSynthesisUtterance(text);
	words.lang = language;
	synth.speak(words);
};

let currActiveCountry = null;

let allCountries = Object.keys(COUNTRIES).forEach((country)=>{

	const countryElement = document.querySelector(`#${country.toLowerCase()}`);
	const countryFilled = document.querySelector(`#${country}-Fill`);

	countryElement.onmouseover = () => {
		countryFilled.classList.remove("hidden-fill");
	};

	countryFilled.onclick = () => {
		const modal = document.querySelector("#options-modal");
		modal.style.display = "block";
		currActiveCountry = country;
	}

	countryFilled.onmouseout = () => {
		if(!currActiveCountry){
			countryFilled.classList.add("hidden-fill");
		}
		//Hide tooltip
	};
});

const closeModal = document.querySelector("#close-modal").onclick = () => {
	const currFilled = document.querySelector(`#${currActiveCountry}-Fill`);
	if(currActiveCountry){
		currFilled.classList.add("hidden-fill");
	}
	currActiveCountry = null;
	const modal = document.querySelector("#options-modal");
	modal.style.display = "none";
};


const duck = document.querySelector("#duck").onclick = () => {
	if(currActiveCountry){
		triggerAnimalOnomatopoeia(COUNTRIES[currActiveCountry].animals.duck,COUNTRIES[currActiveCountry].lang);
	}
};

const rooster = document.querySelector("#rooster").onclick = () => {
	if(currActiveCountry){
		triggerAnimalOnomatopoeia(COUNTRIES[currActiveCountry].animals.rooster,COUNTRIES[currActiveCountry].lang);
	}
};

const dog = document.querySelector("#dog").onclick = () => {
	if(currActiveCountry){
		triggerAnimalOnomatopoeia(COUNTRIES[currActiveCountry].animals.dog,COUNTRIES[currActiveCountry].lang);
	}
};

const cat = document.querySelector("#cat").onclick = () => {
	if(currActiveCountry){
		triggerAnimalOnomatopoeia(COUNTRIES[currActiveCountry].animals.cat,COUNTRIES[currActiveCountry].lang);
	}
};

const frog = document.querySelector("#frog").onclick = () => {
	if(currActiveCountry){
		triggerAnimalOnomatopoeia(COUNTRIES[currActiveCountry].animals.frog,COUNTRIES[currActiveCountry].lang);
	}
};
