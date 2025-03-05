let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}



let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});



document.addEventListener("DOMContentLoaded", function () {
  let sidebar = document.querySelector(".sidebar");
  let menuIcon = document.querySelector(".bx-menu");

  // Toggle sidebar on menu button click
  menuIcon.addEventListener("click", function () {
    sidebar.classList.toggle("close");
  });

  // Auto-expand sidebar on hover
  sidebar.addEventListener("mouseenter", function () {
    sidebar.classList.remove("close");
  });

  // Auto-hide sidebar when not hovered
  sidebar.addEventListener("mouseleave", function () {
    sidebar.classList.add("close");
  });
});



// Get the theme toggle button and icon
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Add an event listener to the button to toggle themes
themeToggleButton.addEventListener('click', () => {
// Toggle the 'dark-theme' and 'light-theme' classes on the body
document.body.classList.toggle('dark-theme');
document.body.classList.toggle('light-theme');

// Toggle the 'dark-theme' and 'light-theme' classes on the sidebar and home-section
document.querySelector('.sidebar').classList.toggle('dark-theme');
document.querySelector('.sidebar').classList.toggle('light-theme');
document.querySelector('.home-section').classList.toggle('dark-theme');
document.querySelector('.home-section').classList.toggle('light-theme');

// Toggle the icon between sun and moon
if (themeIcon.classList.contains('fa-sun')) {
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
} else {
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}
});



const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

document.body.setAttribute("data-theme", currentTheme);
themeToggle.innerHTML = currentTheme === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const newTheme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.innerHTML = newTheme === "dark" ? "☀️" : "🌙";
});




// Function to create stars
function createStars() {
const starsContainer = document.createElement('div');
starsContainer.classList.add('stars');
document.querySelector('.sidebar').appendChild(starsContainer);

// Number of stars
const starCount = 100;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = `${Math.random() * 3}px`; // Random size (1px to 3px)
  star.style.height = star.style.width;
  star.style.top = `${Math.random() * 100}%`; // Random vertical position
  star.style.left = `${Math.random() * 100}%`; // Random horizontal position
  star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation speed (1s to 3s)
  starsContainer.appendChild(star);
}
}
// Call the function to create stars
createStars();

