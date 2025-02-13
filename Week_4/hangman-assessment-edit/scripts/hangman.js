
let game = ["WATERFALLS", "STARS", "LAKES", "CABINS", "KAYAK", "ROCKS", "RIVERS", "LIGHTHOUSE", "TREES", "FISHING"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let guessedLetters = [];

function setup() {
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

function hangmanImg() {
    let img = 6 - attemptsLeft; 
    if (img >= 0 && img <= 6) {
        document.getElementById("hangman").src = "images/0" + (img + 1) + ".png";
    }
}

document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; 

    guessedLetters.push(userLetter.toUpperCase()); 
    document.getElementById("guessed").innerHTML = "Letters Used: " + guessedLetters.join(", ");


    let found = false;

    for (let c = 0; c < answer.length; c++) {
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }
            output = output + display[c] + ' ';
    }

    if (found == false){
        attemptsLeft--;
        hangmanImg();
        }

        
        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
        } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
        }
    
    
    document.getElementById("word").innerHTML = output;
    output = '';
    
});


