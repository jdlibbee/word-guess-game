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
//global variables. 
var words = ["Beetlejuice", "Labyrinth", "Gremlins", "Ghostbusters", "Who Framed Roger Rabbit"];
var selectedWord = "";
var lettersInWord = [];
var blanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var spacedIndex = 0;
var foundLetters = [];
//game counters
var wins = 0;
var losses = 0;
var guesesLeft = 9;
//check and debug
//functions
function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = selectedWord.split("");
    blanks = lettersInWord.length;
    console.log(lettersInWord);
    //reset
    guesesLeft = 9;
    wrongGuesses = [];
    blanksAndSuccesses = [];
    hiddenValues = [];
    // document.getElementById("reel").src = "assets/images/mreels.jpeg";
    // document.getElementById("winLose").innerHTML = " ";
    for (var i = 0; i < lettersInWord.length; i++) {
        console.log(lettersInWord[i]);
        blanksAndSuccesses.push("_");
        if (lettersInWord[i] == " ") {
            blanksAndSuccesses[i] = "&nbsp;";
        }
    }
    console.log(blanksAndSuccesses);
    //html update
    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guesses").innerHTML = guesesLeft;
    document.getElementById("winNumber").innerHTML = wins;
    document.getElementById("lossesNumber").innerHTML = losses;
    //test
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(blanks);
    console.log(blanksAndSuccesses);
}
function checkletters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (selectedWord[i] == capitalizeFirst(letter, selectedWord)) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        console.log("i came in her after cap");
        for (var i = 0; i < blanks; i++) {
            if (selectedWord[i] == capitalizeFirst(letter, selectedWord)) {
                blanksAndSuccesses[i] = capitalizeFirst(letter, selectedWord);
            }
        }
        foundLetters.push(letter.toUpperCase())
    }
    // else if (letterInWord) {
    //     for (var i = 0; i < blanks; i++) {
    //         if (selectedWord[i] == letter) {
    //             blanksAndSuccesses[i] = letter;
    //         }
    //     }
    // }
    else {
        wrongGuesses.push(letter);
        guesesLeft--;
    }
    console.log(blanksAndSuccesses);
}
function roundComplete() {
    console.log("Wins: " + wins + " | Losses: " + losses + " |Guesses Left " + guesesLeft);
    document.getElementById("guesses").innerHTML = guesesLeft;
    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessedLetters").innerHTML = wrongGuesses.join(" ");
    //won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        wins++;
        document.getElementById("winLose").innerHTML = "You Won!";
        document.getElementById("reel").src = './assets/images/' + selectedWord + '.jpeg';
        if (selectedWord == "Beetlejuice") {
            document.getElementById("beetlejuice").play();
        }
        else if (selectedWord == "Ghostbusters") {
            document.getElementById("ghostbusters").play();
        }
        else if (selectedWord == "Gremlins") {
            document.getElementById("gremlins").play();
        }
        else if (selectedWord == "Labyrinth") {
            document.getElementById("labyrinth").play();
        }
        else if (selectedWord == "Who Framed Roger Rabbit") {
            document.getElementById("roger").play();
        }
        //update win counter
        document.getElementById("winNumber").innerHTML = wins;
        foundLetters = [];
        startGame();
    }
    else if (guesesLeft == 0) {
        losses++;
        document.getElementById("winLose").innerHTML = "You lost!";
        document.getElementById("reel").src = "./assets/images/gameover.png";
        document.getElementById("lose").play();
        document.getElementById("lossesNumber").innerHTML = losses;
        startGame();
    }
}
function capitalizeFirst(letter, selectedWord) {
    var splitWord = selectedWord.split(" ");
    var found = false;
    var foundLetter = "";
    console.log(foundLetters, "this is found letters");
    splitWord.forEach(function (word, index) {
        if (word.charAt(0) == letter.toUpperCase() && foundLetters.join("").indexOf(letter.toUpperCase()) == -1) {
            found = true;
            foundLetter = letter.toUpperCase()
        }
    })
    console.log(found, "this is found");
    if (found) {
        console.log(foundLetter, "returned foun letter");
        return foundLetter;
    } else {
        console.log(letter, "return lowercase letter");
        return letter
    }
}
//check & debug
//main process
startGame();
//keyclicks
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    checkletters(letterGuessed);
    roundComplete();
    console.log(letterGuessed);
}


//check & debug


// attempt #1
// var words = ["Beetlejuice", "Labyrinth", "Gremlins", "Ghostbusters", "Who Framed Roger Rabbit"];
// var wins = 0;
// var losses = 0;
// var guessesLeft = 10;

// var word = words[Math.floor(Math.random() * words.length)];
// console.log(word)

// document.onkeyup = function (event) {
//     var userGuess = event.key;
//     document.getElementById("winNumber").innerHTML = "Wins: " + wins;
//     document.getElementById("lossesNumber").innerHTML = "Losses: " + losses;
//     document.getElementById("guesses").innerHTML = guessesLeft;
//     var answerArray = [];
//     for (var i = 0; i < word.length; i++) {
//         answerArray[i] = "_";
//         document.getElementById("current_word").innerHTML = answerArray.join(" ");
//     }
//     //update game status
//     for (var j = 0; j < words.length; j++) {
//         if (words[j] === userGuess) {
//             answerArray[j] = userGuess;
//         }
//     }

// }
//attempt #2
// var words = ["Beetlejuice", "Labyrinth", "Gremlins", "Ghostbusters", "Who Framed Roger Rabbit"];
// const maxTries = 6;
// var guessedLetters = [];
// var currentWord;
// var guessingWord = [];
// var remainingGuesses = 0;
// var gameStarted = false;
// var hasFinished = false;
// var wins = 0;
// var losses = 0;

// function resetGame() {
//     remainingGuesses = maxTries;
//     gameStarted = false;

//     currentWord = words[Math.floor(Math.random() * words.length)];

//     guessedLetters = [];
//     guessedWord = [];

//     document.getElementById("reel").src = "../images/mreels.jpeg";

//     for (var i = 0; i < words[currentWord].length; i++) {
//         guessingWord.push("_");
//     }
//     updateDisplay();

// }
// function updateDisplay() {
//     document.getElementById("winNumber").innerText = wins;
//     document.getElementById("lossesNumber").innerText = losses;
//     document.getElementById("current_word").innerText = " ";
//     for (var i = 0; i < guessedWord.length; i++) {
//         document.getElementById("current_word").innerText += guessedWord[i];
//     }
//     document.getElementById("guesses").innerText = remainingGuesses;
//     document.getElementById("guessed_letters").innerText = guessedLetters;
//     if (remainingGuesses <= 0) {
//         document.getElementById("reel").src = "../images/gameOver.png";
//         hasFinished = true;
//     }
// }
// document.onkeyup = function (event) {
//     if (hasFinished) {
//         resetGame();
//         hasFinished = false;
//     } else {
//         if (event.keycode >= 65 && event.keycode <= 90) {
//             makeGuess(event.key.toLowerCase());
//         }
//     }
// }
// function makeGuess(letter) {
//     if (remainingGuesses > 0) {
//         if (!gameStarted) {
//             gameStarted = true;
//         }
//         if (guessedLetters.indexOf(letter) === -1) {
//             guessedLetters.push(letter);
//             evaluateGuess(letter);
//         }
//     }
//     updateDisplay();
//     checkWin();
// }
// function evaluateGuess(letter) {
//     var positions = [];
//     for (var i = 0; i < words[currentWord].length; i++) {
//         if (words[currentWord][i] === letter) {
//             positions.push[i];
//         }
//     }
//     if (positions.length <= 0) {
//         remainingGuesses--;
//     }
// }
// function checkWin() {
//     if (guessingWord.indexOf("_") === -1) {
//         document.getElementById("reel").src = "assets/images/gremlins.jpeg";
//         hasFinished = true;
//     }
// }
// console.log(guessingWord);
// console.log(guessedLetters);
// console.log(currentWord);