/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

const date = new Date();  
document.getElementById("basic").innerHTML = date;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

const currentDate = new Date(2025,1,19);  
document.getElementById("today").innerHTML = currentDate;

// display the variable in the birthday paragraph

const birthdate = new Date(1975,0,2);  
document.getElementById("birthday").innerHTML = birthdate;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

const isoDate = date.toISOString();
document.getElementById("iso").innerHTML = isoDate;

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

const onlyYear = new Date ("2025");
document.getElementById("date1").innerHTML = onlyYear;

const shortDate = new Date ("01/02/1975");
document.getElementById("date2").innerHTML = shortDate;

const longDate = new Date ("9 Mar 2015");
document.getElementById("date3").innerHTML = longDate;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

const dayOfMonth = new Date ("2019-12-28");
document.getElementById("get1").innerHTML = dayOfMonth.getDate();

const minutes = new Date ("2019-12-28 2:15");
document.getElementById("get2").innerHTML = minutes.getMinutes();

const fullYear = new Date ("2019-12-28");
document.getElementById("get3").innerHTML = fullYear.getFullYear();

const month = new Date ("2019-12-28");
document.getElementById("get4").innerHTML = month.getMonth();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const seconds = new Date ("2019-12-28");
seconds.setSeconds(15);
document.getElementById("set1").innerHTML = seconds;

const hours = new Date ("2019-12-28");
hours.setHours(6);
document.getElementById("set2").innerHTML = hours;

const months = new Date ("2019-12-28");
months.setMonth(1);
document.getElementById("set3").innerHTML = months;

const mins = new Date ("2019-12-28 2:15");
mins.setMinutes(25);
document.getElementById("set4").innerHTML = mins;
