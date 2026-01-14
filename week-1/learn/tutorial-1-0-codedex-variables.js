// ============================================
// TUTORIAL 1-1: CODEDEX VARIABLES
// Student: Sydney Lincoln
// Date: January 14, 2026
// ============================================


// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------

const firstName = "Sydney";
const favoriteColor = "Light pink";

let currentLocation = "At home";
let mood = "stressed";

console.log("My Profile:");
console.log(firstName);
console.log(favoriteColor);
console.log(currentLocation);
console.log(mood);

// reassign one let variable
mood = "focused";
console.log("Updated mood:", mood);


// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------

const companyName = "Lush Cosmetics";
const foundingYear = 1995;
let smellsGood = true;
let fundingAmount = undefined;

console.log(companyName);
console.log(foundingYear);
console.log(smellsGood);
console.log(fundingAmount);


// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------

let temp_f = 42;
let temp_c = (temp_f - 32) / 1.8;

console.log("Temperature in Fahrenheit:", temp_f + "°F");
console.log("Temperature in Celsius:", temp_c + "°C");


// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------

let billAmount = 42.75;
let tipPercent = 18;

let tipAmount = billAmount * (tipPercent / 100);
let total = billAmount + tipAmount;

console.log("----- Tip Receipt -----");
console.log("Bill Amount: $" + billAmount);
console.log("Tip (" + tipPercent + "%): $" + tipAmount.toFixed(2));
console.log("Total: $" + total.toFixed(2));


// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------

const numberOfSongs = 27;
const averageSongLength = 3.5;

const totalMinutes = numberOfSongs * averageSongLength;
const hours = Math.floor(totalMinutes / 60);
const remainingMinutes = totalMinutes % 60;

console.log("----- Playlist Summary -----");
console.log("Number of songs in your playlist:", numberOfSongs);
console.log("Average song length:", averageSongLength + " minutes");
console.log(
  "Total playlist duration:",
  hours + " hour(s) and " + remainingMinutes + " minutes"
);
