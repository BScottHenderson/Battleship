
var gridWidth = 7;

var shipLocation = { start: 1, len: 3 };
// shipLocation.start must be >= 0 and <= gridWith - shipLocation.len
shipLocation.start = Math.floor(Math.random() * (gridWidth - shipLocation.len));

var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;

var guessUsed = [];

while (!isSunk) {

  // Get a valid (i.e., in range) guess from the user.
  do {
    guess = prompt('Ready, aim, fire! (Enter a number in the range [0,' + (gridWidth - 1) + '])');
    if (0 <= guess && guess < gridWidth || guess == null) {
      if (0 <= guessUsed.indexOf(guess)) {
        alert('Please enter a number that you have not alredy guessed.');
      }
      else {
        guessUsed.push(guess);
        break;  // Valid guess - exit the loop.
      }
    }
    else {
      alert('Please enter a number in the range [0,' + (gridWidth - 1) + ']');
    }
  }
  while (true); // While we don't have a valid guess.

  if (guess == null)
    break;

  guesses += 1;

  if (shipLocation.start <= guess && guess < shipLocation.start + shipLocation.len) {
    alert('HIT!');
    hits += 1;
    if (hits == shipLocation.len) {
      isSunk = true;
      alert('You sank by battleship!');
    }
  }
  else {
    alert('Miss!');
  }

}

if (isSunk) { // Why are we testing isSunk?  In case the user cancelled out of the game.
  alert('You took ' + guesses + ' guesses to sink my battleship. ' +
        'This means your shooting accuracy was ' + (shipLocation.len / guesses));
}
