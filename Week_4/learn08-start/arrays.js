function start() {

    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1

    document.getElementById("name").innerHTML = "Cynthia Wolf";

    // Create an array called months that holds all the months of the year

    const months = ["January", " February", " March", " April", " May", " June", " July", " August", " September", " October", " November", " December"];
    document.getElementById("months").innerHTML = months;
    
    // use the index to print the month May from the months array the may paragraph

    document.getElementById("may").innerHTML = months[4];

    // print the length of the month array to the length paragraph

    let length = months.length;
    document.getElementById("length").innerHTML = length;

    // Loop through all of the months array and print each month to the months paragraph

    let loop = "";
    for (let i = 0; i < months.length; i++) {
    loop += months[i] + "<br>"};

    document.getElementById("months").innerHTML = loop;

    // convert the months array to a string and print to the string paragraph

    document.getElementById("string").innerHTML = months.toString();

    // create two new arrays - weekends and weekdays, add the appropriate days to each

    const weekdays = ["Monday", " Tuesday", " Wednesday", " Thursday", " Friday"];
    const weekends = [" Saturday", " Sunday"];

    // join the two arrays into a new array - week

    const week = weekdays.concat(weekends); 

    // print the contents of week to the week paragraph

    document.getElementById("week").innerHTML = week;

    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph

    week.pop();
    document.getElementById("pop").innerHTML = week;

    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    fruits = [" Apple", " Kiwi", " Mango"];
    fruits.push(" Bananas", " Grapes");
    document.getElementById("fruits").innerHTML = fruits;

    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph

    fruits.unshift("Watermelon");
    document.getElementById("fruits2").innerHTML = fruits;

    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    const languages = [" COBOL", " livescript", " C++", " Python", " JavaScript", " Lua", " Basic"]
        
    // sort the array languages and print to the paragraph sorted

    languages.sort();
    document.getElementById("sorted").innerHTML = languages;

    // reverse the array languages and print to the paragraph reversed

    languages.reverse();
    document.getElementById("reversed").innerHTML = languages;
    
    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    const numbers = [42, 23, 21, 50, 20, 6, 31, 9];
    document.getElementById("num-sorted").innerHTML = numbers;

    numbers.sort(function(a, b){return a - b});
    document.getElementById("num-sorted").innerHTML = numbers;

}