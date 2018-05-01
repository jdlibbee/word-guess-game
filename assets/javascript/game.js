// Player hits any key to start game;
// Display wins
// Display current score
// Display remaining guesses
// Display letters guessed
// Word is chosen by random in an array;
// Words length i displayed with underscores (ie: HITMAN = ___ ___ );
// Player hits keys to guess hidden letters;
// player is allowed 10 tries to guess word;
// if player gueses correct letter, gueses stay the same;
// if player knows whole word they can enter it;
// display letters player guessed below;
// if turns equals zero and word not displayed - player loses;
// if turns is greater than zero and player guesses word - player wins and score increases;
// hint button shows a letter;
// if game over prompt to play again !
var words = ["Beetlejuice", "Labyrinth", "Gremlins", "Ghostbusters", "Who Framed Roger Rabbit"];

var wins = 0;
var losses = 0;
var guessesLeft = 0;

document.onkeyup = function (event) {
    var userGuess = event.key;
    var word = words[Math.floor(Math.random() * words.length)];
    document.getElementById("winNumber").innerHTML = "Wins: " + wins;
    document.getElementById("lossesNumber").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = guessesLeft;
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        document.getElementById("current_word").innerHTML = answerArray.join(" ");
    }



}