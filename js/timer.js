let timerInterval = null;
let timerSeconds = 600;
let timerRunning = false;

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  document.getElementById('timer-toggle-btn').textContent = '⏸';
  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      document.getElementById('timer-display').textContent = '00:00';
      document.getElementById('timer-display').classList.add('danger');
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('timer-toggle-btn').textContent = '▶';
}

function toggleTimer() {
  if (timerRunning) pauseTimer(); else startTimer();
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 600;
  document.getElementById('timer-display').textContent = '10:00';
  document.getElementById('timer-display').className = '';
  document.getElementById('timer-toggle-btn').textContent = '▶';
}

function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  const display = document.getElementById('timer-display');
  display.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  display.className = timerSeconds <= 60 ? 'danger' : timerSeconds <= 180 ? 'warn' : '';
}
