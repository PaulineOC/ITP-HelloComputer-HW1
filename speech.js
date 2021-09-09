const synth = window.speechSynthesis;


console.log(navigator.language);



document.querySelector("#to-speak").onclick = () => {
	const test = document.querySelector("#foreign-text").value;
	speak(test);
};

const speak = (text) => {
	if (synth.speaking) {
		//console.error(text);
		return;
	}

	const othertext = "にゃ";
	const another = 'ニャー';
	//console.log(othertext);
	console.log(othertext);
	console.log('hiragana: ',another);
	console.log('katanana: ',another);

	let utterThis = new SpeechSynthesisUtterance(another);
	// optional parameters below, you can find more info at:
	// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
	
	//utterThis.lang = "es-US";
	utterThis.lang = "ja-JP";

	// utterThis.pitch = 1.2;
	// utterThis.rate = 0.2;
	synth.speak(utterThis);
};