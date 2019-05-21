const body = document.querySelector('body');
function a(arr, place) {
	const destination = document.querySelector(place);
	arr.forEach(element => {
		destination.innerHTML += `<button class='btn ${element}'>${element.slice(0, -4)}</button>`;
	});
	console.log(arguments)
}
window.addEventListener('load',
	a(['start btn', 'stop btn'], '.start-stop'),
	a(['do btn', 're btn', 'mi btn', 'fa btn', 'so btn', 'la btn', 'si btn', 'doo btn'], '.notes')
);
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const doBtn = document.querySelector('.do');
const reBtn = document.querySelector('.re');
const miBtn = document.querySelector('.mi');
const faBtn = document.querySelector('.fa');
const soBtn = document.querySelector('.so');
const laBtn = document.querySelector('.la');
const siBtn = document.querySelector('.si');
const dooBtn = document.querySelector('.doo');

let action;
let aud;
let ga;

stop.setAttribute('disabled', '');
doBtn.setAttribute('disabled', '');
reBtn.setAttribute('disabled', '');
miBtn.setAttribute('disabled', '');
faBtn.setAttribute('disabled', '');
soBtn.setAttribute('disabled', '');
laBtn.setAttribute('disabled', '');
siBtn.setAttribute('disabled', '');
dooBtn.setAttribute('disabled', '');

start.addEventListener('click', () => {
	let audio = new AudioContext();
	let oscillator = audio.createOscillator();
	let gainNode = audio.createGain();
	oscillator.connect(gainNode).connect(audio.destination);
	oscillator.start(audio.currentTime);
	gainNode.gain.setValueAtTime(0, audio.currentTime);
	action = oscillator;
	aud = audio;
	ga = gainNode;
	start.setAttribute('disabled', '');
	stop.removeAttribute('disabled', '');
	doBtn.removeAttribute('disabled', '');
	reBtn.removeAttribute('disabled', '');
	miBtn.removeAttribute('disabled', '');
	faBtn.removeAttribute('disabled', '');
	soBtn.removeAttribute('disabled', '');
	laBtn.removeAttribute('disabled', '');
	siBtn.removeAttribute('disabled', '');
	dooBtn.removeAttribute('disabled', '');
});

stop.addEventListener('click', () => {
	action.stop(aud.currentTime);
	start.removeAttribute('disabled', '');
	stop.setAttribute('disabled', '');
	doBtn.setAttribute('disabled', '');
	reBtn.setAttribute('disabled', '');
	miBtn.setAttribute('disabled', '');
	faBtn.setAttribute('disabled', '');
	soBtn.setAttribute('disabled', '');
	laBtn.setAttribute('disabled', '');
	siBtn.setAttribute('disabled', '');
	dooBtn.setAttribute('disabled', '');
});

doBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(200, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

doBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

reBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(300, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

reBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

miBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(400, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

miBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

faBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(500, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

faBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

soBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(600, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

soBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

laBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(700, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

laBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

siBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(800, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

siBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

dooBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(900, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

dooBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});