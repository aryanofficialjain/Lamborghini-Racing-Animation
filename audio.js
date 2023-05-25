let play = document.getElementById('play');
function music(){
	let audio = new Audio('audio.mp3');
	audio.loop=true;
	audio.play()
}
play.addEventListener('click',music);