'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}




/**
* Typing animation functionality
*/

document.addEventListener('DOMContentLoaded', function () {
  const typingTextElement = document.querySelector('.typing-text');
  const phrases = [
    'Data Science Enthusiast',
    'Machine Learning Explorer',
    'Python Developer',
    'Data Analyst',
  ];
  let currentPhraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typePhrase() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting && charIndex < currentPhrase.length) {
      // Typing the text forward
      typingTextElement.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(typePhrase, 180); // Typing speed
    } else if (isDeleting && charIndex > 0) {
      // Deleting the text
      typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typePhrase, 120); // Deleting speed (same as typing speed)
    } else {
      // Switch between typing and deleting modes
      isDeleting = !isDeleting;

      if (!isDeleting) {
        // Move to the next phrase after deleting is complete
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
      setTimeout(typePhrase, 1200); // Pause before typing or deleting
    }
  }
  typePhrase(); // Start the typing animation
});



// Ensure EmailJS script is loaded in your HTML file
// <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

// Initialize EmailJS
emailjs.init('starhadibwp'); // Replace with your EmailJS user ID

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Gather the form data
  var formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
  };

  // Send the email via EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData) // Replace with your service and template IDs
    .then(function(response) {
      alert('Message sent successfully!');
      // Optionally reset the form
      document.getElementById('contact-form').reset();
    }, function(error) {
      alert('Failed to send message. Please try again.');
    });
});
