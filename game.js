//let computer select rock paper or scissors
function computerPlay() {
  var choiceArr = ['rock', 'paper', 'scissors'];
  var choice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  return choice;
}

//play one round of game
function playRound(computerChoice, playerChoice) {
  computerChoice = computerChoice.toLowerCase();
  playerChoice = playerChoice.toLowerCase();
  var playerScore = 0;
  if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore = 1;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore = 1;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore = 1;
  } else {
    playerScore = -1;
  }
  return playerScore;
}

//play multiple round game
function game(rounds) {
  if (rounds % 2 === 0) {
    console.log('MUST BE ODD NUMBER OF ROUNDS');
    return 0;
  }
  var win = Math.ceil(rounds / 2);
  var score = {'player': 0, 'computer': 0};
  var count = 1;
  while (score['player'] !== win && score['computer'] !== win) {
    var result = playRound(computerPlay(), prompt('Whats your choice'));
    if (result === 1) {
      score['player']++;
    }
    if (result === -1) {
      score['computer']++;
    }
    console.log('Round ' + count);
    console.log(score);
    console.log('=======');
    count ++;
  }
  if (score['player'] > score['computer']) {
    console.log('USER WINS');
  } else {
    console.log('COMPUTER WINS');
  }
  return 0;
}


//play game 
game(prompt('How many rounds should this game go?'));