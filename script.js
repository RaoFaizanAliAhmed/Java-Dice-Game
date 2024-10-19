let currentPlayer;
const player1Btn = document.getElementById('player1-btn');
const player2Btn = document.getElementById('player2-btn');
const tossBtn = document.getElementById('toss-btn');
const tossResult = document.getElementById('toss-result');
const diceResult = document.getElementById('dice-result');

// Toss Function
tossBtn.addEventListener('click', () => {
  let choice = prompt("Choose Head or Tail").toLowerCase();
  if (choice !== 'head' && choice !== 'tail') return alert("Invalid choice!");
  
  let toss = Math.random() < 0.5 ? 'head' : 'tail';
  currentPlayer = (choice === toss) ? 1 : 2;
  tossResult.innerText = `Toss result: ${toss.toUpperCase()}. Player ${currentPlayer} starts.`;
  
  document.getElementById('game-section').style.display = 'block';
  enablePlayer(currentPlayer);
});

// Dice Roll Function
[player1Btn, player2Btn].forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    diceResult.innerText = `Player ${currentPlayer} rolled: ${dice}`;
    
    if (dice === 6) {
      diceResult.innerText += `\nPlayer ${currentPlayer} wins!`;
      disableAll();
    } else {
      currentPlayer = (currentPlayer === 1) ? 2 : 1;
      enablePlayer(currentPlayer);
    }
  });
});

// Helper Functions
function enablePlayer(player) {
  player1Btn.disabled = player !== 1;
  player2Btn.disabled = player !== 2;
}

function disableAll() {
  player1Btn.disabled = true;
  player2Btn.disabled = true;
}
