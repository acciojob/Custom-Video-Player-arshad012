/* Edit this file */
const player = document.querySelector('.player');
console.log(player)
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');

const skipButtons = player.querySelectorAll('[data-skip]');
const back_btn = skipButtons[0];
const forward_btn = skipButtons[1];

const ranges = player.querySelectorAll('.player__slider');
const volume = ranges[0];
const playbackRate = ranges[1];


let isVideoPlaying = false;
toggle.addEventListener('click', () => {
	if(isVideoPlaying) {
		video.pause();
	} else {
		video.play();
	}
	isVideoPlaying = !isVideoPlaying;
	toggle.innerText = isVideoPlaying ? '| |' : '►';
})

volume.addEventListener('change', (e) => {
	const val = e.target.value;
	video.volume = val;
})
playbackRate.addEventListener('change', (e) => {
	const val = e.target.value;
	video.playbackRate = val;
})

back_btn.addEventListener('click', () => {
	video.currentTime += -10;
})
forward_btn.addEventListener('click', () => {
	video.currentTime += 25;
})

