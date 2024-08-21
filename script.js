// Countdown timer code remains the same
const countdown = () => {
    const countDate = new Date('September 1, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};

setInterval(countdown, 1000);

// Hamburger menu toggle code
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Function to show the popup after 3 seconds
function showPopup() {
    document.querySelector('.wrapper').style.display = 'block';
}

// Function to close the popup when the close button is clicked
function closeFunc() {
    document.querySelector('.wrapper').style.display = 'none';
}

// Set a timeout to show the popup after 3 seconds
setTimeout(showPopup, 3000);





// Handle Subscription

const subscribeBtn = document.getElementById("subscribeBtn");
const emailField = document.getElementById("email");
subscribeBtn.addEventListener("click", function() {
    if (emailField.value) { // Check if email field is not empty
        // Logic for handling subscription could go here

        // Close the popup after subscribing
        closeFunc();
        alert("Subscribed with email");

        
    } else {
        alert("Please enter your email.");
    }
});



