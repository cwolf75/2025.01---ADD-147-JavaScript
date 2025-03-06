/*
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const movies = ["The Phantom Menace","Attack of the Clones","Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"];

let list = "";
for (const x of movies) {
  list += x + "<br>";
}

document.getElementById("list").innerHTML = list;

/*
JS Sets

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

const songs = new Set(["With or Without You","Pride in the Name of Love","Mysterious Ways", "Elevation", "Dancing Barefoot"]);

// Display the contents of the set

let songList = "";
for (const x of songs) {
  songList += x + "<br>";
}
document.getElementById("set0").innerHTML = songList;

// Display set.size
document.getElementById("set1").innerHTML = "The set has " + songs.size + " values.";

// add two more songs to the set then display in the set2 paragraph

songs.add("The Sweetest Thing");
songs.add("Vertigo");

let addedSongs = "";
for (const x of songs) {
    addedSongs += x + "<br>";
}
document.getElementById("set2").innerHTML = addedSongs;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const contacts = new Map();

// Set Map Values
contacts.set("Cynthia Wolf", "cwolf75@mchenry.edu");
contacts.set("Kate Midday", "kmidday@mchenry.edu");
contacts.set("Mike Hillstrom", "mhillstrom@mchenry.edu");
contacts.set("Starr Nordgren", "snordgren@mchenry.edu");
contacts.set("Chris Gray", "cgray1@mchenry.edu");

let info = "";
contacts.forEach (function(value, key) {
  info += key + ' = ' + value + "<br>"
})
document.getElementById("map1").innerHTML = info;

// add two new names and emails and display in map2 use the forEach() method

contacts.set("Elizabeth Nelson", "enelson@mchenry.edu");
contacts.set("Kim Tipton", "ktipton@mchenry.edu");

let addedContacts = "";
contacts.forEach (function(value, key) {
  addedContacts += key + ' = ' + value + "<br>"
})

document.getElementById("map2").innerHTML = addedContacts;

// get and display the email of one person, display in map3

let person = "Elizabeth Nelson";  
let email = contacts.get(person); 

document.getElementById("map3").innerHTML = person + "'s email is: " + email;


