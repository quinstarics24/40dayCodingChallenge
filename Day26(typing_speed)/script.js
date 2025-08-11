const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a versatile programming language.",
  "Practice makes perfect when learning to code.",
  "Frontend and backend work together for full-stack apps."
];

let timeLeft = 30;
let timer;
let isRunning = false;
let currentQuote = "";
let charCount = 0;

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const startBtn = document.getElementById("startBtn");

function startTest() {
  if (isRunning) return;
  isRunning = true;
  timeLeft = 30;
  charCount = 0;
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = currentQuote;
  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();
  wpmEl.textContent = "0";
  timeEl.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      endTest();
    }
  }, 1000);
}

function endTest() {
  clearInterval(timer);
  inputEl.disabled = true;
  isRunning = false;

  let wordsTyped = inputEl.value.trim().split(/\s+/).length;
  let wpm = Math.round((wordsTyped / 30) * 60);
  wpmEl.textContent = wpm;
}

startBtn.addEventListener("click", startTest);
