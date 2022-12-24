//constant for snack game
let inputDir = { x: 0, y: 0 };
const backgroundSong = new Audio('music/music.mp3');
console.log('dfsdf');
function main(ctime) {
  console.log('ctime', ctime);
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', (e) => {
  const x = Math.random();
  inputDir = { x: 3, y: 3 };
});
