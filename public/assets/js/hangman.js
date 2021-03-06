//Main Game Javascript

var guessedLetters = [];    // Stores the letters guessed already
var currentWordIndex;       // Index of the current word
var guessingWord = [];      // Word being built to match the current word
var remainingGuesses = 10;   // How many tries a player has left
var wins = 0;               // How many wins earned
var scriptChoice = localStorage.getItem("storagescriptChoice");

// Reset variables

var title = localStorage.getItem("storageTitle");
var image = localStorage.getItem("storageImage");
var directions = localStorage.getItem("storageDirections");
var list = JSON.parse(localStorage.getItem("storageList"));
var definitions = JSON.parse(localStorage.getItem("storageDefinitions"));
var questions = JSON.parse(localStorage.getItem("storageQuestions"));
console.log(title, image, directions, "list ", list, "definitions ", definitions, questions);

$("body").css("background-image", image);
$("#title").text(title);


function resetGame() {
    currentWordIndex = Math.floor(Math.random() * (list.length));
    guessedLetters = [];
    guessingWord = [];
    remainingGuesses = 10;

    for (var i = 0; i < list[currentWordIndex].length; i++) {
        guessingWord.push(" _ ");
    }

    updateDisplay();

}; //ends reset

resetGame();

function updateDisplay() {
    // Updates the display on the HTML
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    console.log("remaining GUesses  ", remainingGuesses);
    if (remainingGuesses == 0) {
        $("#messages").css("display", "block");
        document.getElementById("gameover").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display:block";
        $("#correctAnswer").html(list[currentWordIndex]);
    }

}; //ends update display

document.onkeyup = function (event) {

    // Checking to make sure A-Z was pressed.
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLowerCase());
        //     }
    }

}; // ends onkey

function makeGuess(letter) {
    if (remainingGuesses > 0) {

        if (guessedLetters.indexOf(letter) === -1) {            // Make sure we didn't use this letter yet
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }

    checkWin();
    updateDisplay();

}; //ends makeGuess

// This function takes a letter and finds all instances of
// appearance in the string and replaces them in the guess word.

function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];
    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < list[currentWordIndex].length; i++) {
        if (list[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }
    // if there are no indicies, remove a guess
    if (positions.length <= 0) {
        remainingGuesses--;
    }
    else {
        // Loop through all the indicies and replace the '_' with a letter.
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

$("#tryAgain").click(function () {
    $("#directions").text("Press any letter to make a guess.");
    resetGame();

    $("#messages").css("display", "none");
    $("#buttons").css("display", "flex");
    updateDisplay();
});


function checkWin() {
    for (i = 0; i < guessingWord.length; i++) {
        if (guessingWord[i] == " _ ") {
            var blanks = 1;
        };
    };
    if (blanks != 1) {
        $("#messages").css("display", "block");
        $("#giveAnswer").css("display", "none");
        document.getElementById("youwin").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        wins++;

    };

}; // ends checkWin

$(document).ready(function () {

    //Creates the buttons

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "á", "é", "í", "ó", "ú", "ñ", "ü"];

    for (var i = 0; i < letters.length; i++) {

        var letterBtn = $("<button>");

        letterBtn.addClass("letter-button");

        letterBtn.attr("data-letter", letters[i]);

        letterBtn.text(letters[i]);

        $("#buttons").append(letterBtn);
    }

    //Runs when a button is clicked, gets attribute of button and uses it to make a guess
    $(".letter-button").on("click", function () {
        var letterGuess = this.getAttribute("data-letter");
        makeGuess(letterGuess);
        var definition = definitions[currentWordIndex];
        $("#directions").text(definition);

    })

});