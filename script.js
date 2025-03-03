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
