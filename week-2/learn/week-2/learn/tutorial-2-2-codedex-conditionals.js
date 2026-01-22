// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: Sydney
// Date: 01/21/2026
// ============================================

// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
let coin = Math.random();

if (coin < 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
let hour = 7; 

if (hour < 12) {
  console.log("Good morning!");
  console.log("Brush teeth, eat breakfast, get cozy.");
}

// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
let hour = 9; 

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
let ph = 7; 

if (ph < 7) {
  console.log("Acidic");
} else if (ph > 7) {
  console.log("Basic");
} else {
  console.log("Neutral");
}

// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
let question = "Will I ace this?";
let roll = Math.floor(Math.random() * 9); 
let answer = "";

if (roll === 0) {
  answer = "Yes, definitely.";
} else if (roll === 1) {
  answer = "It is certain.";
} else if (roll === 2) {
  answer = "Reply hazy, try again.";
} else if (roll === 3) {
  answer = "Ask again later.";
} else if (roll === 4) {
  answer = "Better not tell you now.";
} else if (roll === 5) {
  answer = "Don't count on it.";
} else if (roll === 6) {
  answer = "My sources say no.";
} else if (roll === 7) {
  answer = "Outlook not so good.";
} else {
  answer = "Signs point to yes.";
}

console.log("Question:", question);
console.log("Magic 8 Ball:", answer);

// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
let aqi = 350; 

if (aqi >= 0 && aqi <= 50) {
  console.log("Good");
} else if (aqi >= 51 && aqi <= 100) {
  console.log("Moderate");
} else if (aqi >= 101 && aqi <= 150) {
  console.log("Unhealthy for Sensitive Groups");
} else if (aqi >= 151 && aqi <= 200) {
  console.log("Unhealthy");
} else if (aqi >= 201 && aqi <= 300) {
  console.log("Very Unhealthy");
} else if (aqi >= 301) {
  console.log("Hazardous");
} else {
  console.log("Invalid AQI");
}

// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------

// 0 = Rock, 1 = Paper, 2 = Scissors
let player = 0; 
let computer = Math.floor(Math.random() * 3);

function namePick(n) {
  if (n === 0) return "Rock";
  if (n === 1) return "Paper";
  return "Scissors";
}

console.log("Player:", namePick(player));
console.log("Computer:", namePick(computer));

if (player === computer) {
  console.log("Tie!");
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  console.log("Yippee! You win!");
} else {
  console.log("Boo! Computer wins!");
}
