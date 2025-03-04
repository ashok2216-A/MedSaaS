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


document.addEventListener("DOMContentLoaded", function() {
  // PIE CHART
  new Chart(document.getElementById("pieChart"), {
      type: "pie",
      data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [{
              data: [30, 50, 20],
              backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"]
          }]
      }
  });

  // DOUGHNUT CHART
  new Chart(document.getElementById("doughnutChart"), {
      type: "doughnut",
      data: {
          labels: ["Green", "Purple", "Orange"],
          datasets: [{
              data: [40, 35, 25],
              backgroundColor: ["#4caf50", "#9c27b0", "#ff9800"]
          }]
      }
  });

  // BAR CHART
  new Chart(document.getElementById("barChart"), {
      type: "bar",
      data: {
          labels: ["Jan", "Feb", "Mar", "Apr"],
          datasets: [{
              label: "Sales",
              data: [65, 59, 80, 81],
              backgroundColor: ["#42a5f5", "#66bb6a", "#ffa726", "#ab47bc"]
          }]
      }
  });

  // LINE CHART
  new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [{
              label: "Performance",
              data: [10, 25, 40, 30],
              borderColor: "#f44336",
              fill: false
          }]
      }
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