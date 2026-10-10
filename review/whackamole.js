const holes = [...document.querySelectorAll('.hole')];
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const startButton = document.querySelector('#start');

let score = 0;
let timeLeft = 30;
let activeHole = -1;
let timerId;
let playing = false;

function showMole() {
  holes.forEach((hole) => hole.classList.remove('is-up'));
  let nextHole = Math.floor(Math.random() * holes.length);
  if (holes.length > 1 && nextHole === activeHole) {
    nextHole = (nextHole + 1 + Math.floor(Math.random() * (holes.length - 1))) % holes.length;
  }
  activeHole = nextHole;
  holes[activeHole].classList.add('is-up');
}

function endGame() {
  playing = false;
  clearInterval(timerId);
  holes.forEach((hole) => hole.classList.remove('is-up'));
  activeHole = -1;
  message.textContent = `시간 종료! ${score}마리 잡았어요. 한 번 더 도전할까요?`;
  startButton.textContent = '다시 하기';
}

function startGame() {
  clearInterval(timerId);
  score = 0;
  timeLeft = 30;
  playing = true;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  message.textContent = '두더지를 잡아 보세요!';
  startButton.textContent = '다시 시작';
  showMole();

  timerId = setInterval(() => {
    timeLeft -= 1;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

holes.forEach((hole, index) => {
  hole.addEventListener('click', () => {
    if (!playing || index !== activeHole) return;
    score += 1;
    scoreDisplay.textContent = score;
    message.textContent = '잡았다! 다음 두더지를 찾아보세요.';
    showMole();
  });
});

startButton.addEventListener('click', startGame);