// wins is set to 0
var wins = 0;
// losses is set to 0
var losses = 0;
// possible leters to type array is defined
var possibleChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// an array of words is defined
var playableWords = ["LION" , "TIGER" , "MONKEY" , "GIRAFFE" , "ELEPHANT" , "ANTELOPE" , "FROG" , "BEAR" , "ZEBRA" , "GAZELLE" , "SNAKE", "RHINOCEROS" , "CROCODILE" , "LEOPARD" , "PANTHER" , "PARROT" , "PIRANHA"];

function newGame() {
    // guesses are set to 10
    var guesses = 10;
    var incorrectGuesses = document.getElementById("incorrect-guesses");
    var remainingGuess = document.getElementById("guess-count");
    remainingGuess.textContent = guesses;
    var incorrectLetters = [];
    // a word is picked at random from the array
    var playWord = playableWords[Math.floor(Math.random() * playableWords.length)];
    // a series of -'s are presented that correspond to the amount of letters in the randomly selected word
    var playWordArray = playWord.split("");
    var blankArray = [];

    for(i = 0; i < playWordArray.length; i++){
        blankArray.push(" _ ")
    }

    var blanksBox = document.getElementById("letter-blanks")

    function activeDisplay(){
        for(i = 0; i < blankArray.length; i++){
            var displayedBlanks = document.createElement("span");
            displayedBlanks.textContent = blankArray[i];
            blanksBox.appendChild(displayedBlanks);
        }
    }
    activeDisplay();
    // player types letters to guess which letters fill blanks
    document.onkeyup = function () {
        var letterGuess = String.fromCharCode(event.keyCode).toUpperCase();
        // if player input is not a letter, player is notified to please pick a letter
        if(possibleChoices.includes(letterGuess)){}
        else{
            return
        }
        // if letter has already been played, return function
        for(i = 0; i < incorrectLetters.length; i++){
            if (letterGuess === incorrectLetters[i]){
                return
            }
        }
        // if guess is correct, corresponding -('s) are replaced by proper letter
        if (playWordArray.includes(letterGuess)){
            for(i = 0; i < playWordArray.length; i++){
                if (letterGuess === playWordArray[i]){
                    blankArray[i] = letterGuess;
                }
            }
            blanksBox.innerHTML = "";
            activeDisplay();
        }
        // if guess is incorrect, guessed letter goes to incorrect letter array and guesses goes down by 1
        else{
            var missedLetters = document.createElement("span");
            missedLetters.textContent = letterGuess + " ";
            incorrectGuesses.appendChild(missedLetters);
            guesses--;
            remainingGuess.textContent = guesses;
            incorrectLetters.push(letterGuess);
        }
        // if all guesses reaches 0, player loses and losses goes up by 1, game restarts
        if(guesses < 1){
            alert("Sorry :( You failed to guess the mystery word: " + playWord)
            incorrectGuesses.innerHTML = "";
            blanksBox.innerHTML = "";
            newGame();
        }
        // if all blanks are filled, player wins and wins goes up by 1, game restarts
        if(blankArray.includes(" _ ")){
            return
        }
        else{
            alert("Congratulations! You guessed the mystery word: " + playWord)
            incorrectGuesses.innerHTML = "";
            blanksBox.innerHTML = "";
            newGame();
        }
    }
}
newGame();

// var winCount = document.getElementById("win-count");
// winCount.textContent = wins;

// var lossCount = document.getElementById("loss-count");
// lossCount.textContent = losses;