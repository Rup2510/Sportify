// Get the current date and time
var today = new Date();
var date = today.toDateString();
var time = today.toLocaleTimeString();

// Display the current date and time in the header
var headerDate = document.getElementById("header-date");
headerDate.innerHTML = date + " " + time;

// Change the background color of the header on hover
var header = document.getElementById("header");
header.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#333";
});
header.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#444";
});

// Show and hide the navigation menu on mobile devices
var navButton = document.getElementById("nav-button");
var navMenu = document.getElementById("nav-menu");
navButton.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});
// Change the color of the h1 element when the page is loaded
window.onload = function() {
    var header = document.getElementsByTagName("h1")[0];
    header.style.color = "blue";
}