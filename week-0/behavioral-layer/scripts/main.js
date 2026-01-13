
// Image Changer code
/*
  Image Changer Explanation:
  This code finds the image on the page and waits for a click.
  When the image is clicked, it checks which picture is showing
  and switches it to the other fox image.
*/
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fox1.png") {
    myImage.setAttribute("src", "images/fox2.png");
  } else {
    myImage.setAttribute("src", "images/fox1.png");
  }
});


// Personalized welcome message code
/*
  Welcome Message Explanation:
  This code asks the user for their name and saves it in localStorage,
  which is like a little memory box in the browser.
  When the page reloads, it checks if a name already exists
  and uses it instead of asking again.
*/

let myButton = document.querySelector('button.change-user');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome, ' + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome back, ${storedName} `;
}

myButton.addEventListener("click", () => {
  setUserName();
});
/*
  SUMMARY:
  This file does two things:
  1. It switches between two fox images when the image is clicked.
  2. It asks the user for their name and remembers it using localStorage.

  The key pattern I learned: find → listen → respond.
  AI useage: Copoilot helped me fix the smaller typeing errors. ChatGPT helped me understand the tutorial and give me some prettier CSS styles for the page.
*/
