
let secretNumber = Math.floor(Math.random() * 1000) + 1;
let attempts = 0;

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    let feedback = document.getElementById("feedback");
    let body = document.body; 

    attempts++;

    if (guess < 1 || guess > 1000 || isNaN(guess)) {
        feedback.innerText = "Enter a number between 1 and 1000.";
        body.style.backgroundColor = "white";
    } 
    else if (guess === secretNumber) {
        feedback.innerText = `HOORAY!!! You guessed the secret number in ${attempts} tries.`;
        body.style.backgroundColor = "green";
    } 

    else if (Math.abs(guess - secretNumber) > 250) {
        feedback.innerText = "Absolutely Freezing ☃️☃️☃️";
        body.style.backgroundColor = "darkblue";
    } 
    else if (Math.abs(guess - secretNumber) > 200) {
        feedback.innerText = "Very Cold ❄️❄️❄️";
        body.style.backgroundColor = "blue";
    } 
    else if (Math.abs(guess - secretNumber) > 100) {
        feedback.innerText = "Cold 🥶🥶🥶";
        body.style.backgroundColor = "lightblue";
    } 
    else if (Math.abs(guess - secretNumber) > 50) {
        feedback.innerText = "Neutral 🌚🌚🌚";
        body.style.backgroundColor = "yellow";
    } 
    else if (Math.abs(guess - secretNumber) > 10) {
        feedback.innerText = "Warmer 🌞🌞🌞";
        body.style.backgroundColor = "orange";
    } 
    else if (Math.abs(guess - secretNumber) > 5) {
        feedback.innerText = "Hot 🥵🥵🥵";
        body.style.backgroundColor = "red";
    } 
    else {
        feedback.innerText = "ON FIRE! 🔥🔥🔥";
        body.style.backgroundColor = "darkred";
    }
}

document.getElementById("submit").addEventListener("click", checkGuess);
