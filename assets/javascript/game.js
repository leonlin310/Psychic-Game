
//Creates an array that lists out all of the options (A thru Z)
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(computerChoice);

//Variables to track wins and losses
var wins = 0;
var losses = 0;
var guessesleft = 9;
var userguesses = [];


// These variables grab the HTML elements in the index.html
var winsText = document.getElementById("wins-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var playerGuessesText = document.getElementById("player-guesses-text");
var lossesText = document.getElementById("losses-text");

//Computers Guess
var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
console.log(computerGuess);

//This Function is run whenever the user presses a key.
document.onkeyup = function(event) {
    //Determines which key was pressed.
        var userGuess = event.key;

    //Shows User and Computer Guesses
        console.log(userGuess);
        console.log(computerGuess);

// LOGIC STATEMENTS

    //WIN: If userGuess equals computerGuess 
     {   
        if (userGuess === computerGuess) {
            wins++
            guessesleft = 9
            userguesses = [];


        }

            else {
                guessesleft--
                userguesses.push(userGuess)
            }
        
            if (guessesleft === 0) {
                losses++
                guessesleft = 9
                userguesses = []
            }
    }

    

//Display the User and Computer Guesses along with wins/losses/ties
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses " + losses;
guessesLeftText.textContent = "Guesses Left " + guessesleft;
playerGuessesText.textContent = "Your Current Guesses: " + userguesses;

        }
    