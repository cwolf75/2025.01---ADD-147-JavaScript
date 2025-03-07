// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

function beerSong() {
    let lyrics = ""; 

    for (let i = 99; i > 0; i--) {
        lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer. <br>`;
        lyrics += `If one of those bottles should happen to fall, ${i - 1} bottles of beer on the wall. <br><br>`;
    }

        lyrics += `No more bottles of beer on the wall, no more bottles of beer. <br>`;
        lyrics += `Head out to the store, and go get some more.  No more bottles of beer on the wall. <br>`;

    document.getElementById("beer").innerHTML = lyrics;
}

beerSong();

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let array = "";
for (let index in months) {
    array += months[index] + "<br>";
}

document.getElementById("for-in").innerHTML = array;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let letterString = "Cynthia";

let letters = "";
for (let x of letterString) {
  letters += x + "<br>";
}

document.getElementById("for-of").innerHTML = letters;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let numbersList = "";
let i = 1;
while (i < 51) {
  numbersList += "<br>Your number is " + i + ".";
  i++;
}
document.getElementById("while").innerHTML = numbersList;