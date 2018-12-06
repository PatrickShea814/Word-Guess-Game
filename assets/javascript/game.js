var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ""];

    let noOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "-", "=", "[", "]", "'\'", ";", "'", ",", ".", "/", "`"]

    function reset() {
        numGuesses = 9;
        guessChoices = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log (computerGuess);
    }

    function newWord() {
        guessChoices = [];
        numGuesses = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log (computerGuess);
    }

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            alert("You guessed it! You really are psychic!");
            newWord();
        }
        else {
            if (guessChoices.includes(userGuess)) {
                alert("You have already guessed this key! Please guess again, on the house!");
            } else {
                numGuesses--;
                guessChoices.push(userGuess);
            }
        }
        if (numGuesses === 0) {
            alert("You are NOT a psychic. I want my money back!")
            reset();
        }
    }

    if (noOptions.indexOf(userGuess) > -1) {
        alert("This is not a valid guess. Try guessing a letter.");
    }
};   