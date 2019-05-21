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
	a(['one btn', 'two btn', 'three btn', 'four btn', 'five btn', 'six btn', 'seven btn', 'eight btn'], '.notes')
);
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');

let action;
let aud;
let ga;

stop.setAttribute('disabled', '');
oneBtn.setAttribute('disabled', '');
twoBtn.setAttribute('disabled', '');
threeBtn.setAttribute('disabled', '');
fourBtn.setAttribute('disabled', '');
fiveBtn.setAttribute('disabled', '');
sixBtn.setAttribute('disabled', '');
sevenBtn.setAttribute('disabled', '');
eightBtn.setAttribute('disabled', '');

start.addEventListener('click', () => {
	let audio = new AudioContext();
	let oscillator = audio.createOscillator();
	let gainNode = audio.createGain();
	oscillator.connect(gainNode).connect(audio.destination);
	oscillator.start(audio.currentTime);
	oscillator.type = 'sine';
	oscillator.frequency.value = 261.625565300598634;
	gainNode.gain.setValueAtTime(0, audio.currentTime);
	action = oscillator;
	aud = audio;
	ga = gainNode;
	start.setAttribute('disabled', '');
	stop.removeAttribute('disabled', '');
	oneBtn.removeAttribute('disabled', '');
	twoBtn.removeAttribute('disabled', '');
	threeBtn.removeAttribute('disabled', '');
	fourBtn.removeAttribute('disabled', '');
	fiveBtn.removeAttribute('disabled', '');
	sixBtn.removeAttribute('disabled', '');
	sevenBtn.removeAttribute('disabled', '');
	eightBtn.removeAttribute('disabled', '');
});

stop.addEventListener('click', () => {
	action.stop(aud.currentTime);
	start.removeAttribute('disabled', '');
	stop.setAttribute('disabled', '');
	oneBtn.setAttribute('disabled', '');
	twoBtn.setAttribute('disabled', '');
	threeBtn.setAttribute('disabled', '');
	fourBtn.setAttribute('disabled', '');
	fiveBtn.setAttribute('disabled', '');
	sixBtn.setAttribute('disabled', '');
	sevenBtn.setAttribute('disabled', '');
	eightBtn.setAttribute('disabled', '');
});

oneBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(200, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

oneBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

twoBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(300, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

twoBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

threeBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(400, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

threeBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

fourBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(500, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

fourBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

fiveBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(600, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

fiveBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

sixBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(700, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

sixBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

sevenBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(800, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

sevenBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});

eightBtn.addEventListener('mouseenter', () => {
	action.detune.setValueAtTime(900, aud.currentTime);
	ga.gain.setValueAtTime(1, aud.currentTime);
});

eightBtn.addEventListener('mouseleave', () => {
	ga.gain.setValueAtTime(0, aud.currentTime);
});