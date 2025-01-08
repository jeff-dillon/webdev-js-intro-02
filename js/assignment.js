"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const resolution = "Get Better";
const year = "2025";
let willMeetResolution = true;

function updateYear() {
    // write the logic
    yearElement.textContent = year;

}

function updateResolution() {
    // Update this function 
    resolutionElement.textContent = resolution;
}

function updateWillMeet() {
    willMeetResolutionElement.textContent = willMeetResolution;
}

function render() {
    // Finish writing this function
    updateYear();
    updateResolution();
    updateWillMeet();
}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function
    render()
})
