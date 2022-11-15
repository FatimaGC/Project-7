//ALERT CODE
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `<div class="alert-banner">
  <p><strong>Alert:</strong> You have unread messages</p>
  <span class="alert-banner-close">x</span>
</div>`;

alertBanner.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

// Traffic Chart
// const traffic = document.getElementById("traffic-chart");

const trafficLabels = [
  "16-22",
  "23-29",
  "30-5",
  "6-12",
  "13-19",
  "20-26",
  "27-3",
  "4-10",
  "11-17",
  "18-24",
  "25-31",
];

const trafficData = {
  labels: trafficLabels,
  datasets: [
    {
      data: [550, 1400, 1000, 2000, 1500, 1700, 1200, 1800, 2300, 1500, 2500],
      fill: true,
      backgroundColor: "rgba(116, 119, 191, 0.25)",
      tension: 0.4,
    },
  ],
};

const trafficConfig = {
  type: "line",
  data: trafficData,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const trafficChart = new Chart(
  document.getElementById("traffic-chart"),
  trafficConfig
);

// DAILY TRAFFIC CHART
const dailyTrafficLabels = ["S", "M", "T", "W", "T", "F", "S"];

const dailyTrafficData = {
  labels: dailyTrafficLabels,
  datasets: [
    {
      data: [55, 120, 155, 130, 230, 200, 100],
      fill: true,
      backgroundColor: "#7477bf",
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

const dailyTrafficConfig = {
  type: "bar",
  data: dailyTrafficData,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const dailyTrafficChart = new Chart(
  document.getElementById("daily-traffic-chart"),
  dailyTrafficConfig
);

// MOBILE USERS PIE CHART
const mobileUsersLabels = ["Desktop", "Tablet", "Phones"];

const mobileUsersData = {
  labels: mobileUsersLabels,
  datasets: [
    {
      labels: mobileUsersLabels,
      data: [70, 15, 15],
      backgroundColor: ["#7477bf", "#81c98f", "#51b6c8"],
      hoverOffset: 4,
    },
  ],
};

const mobileUsersConfig = {
  type: "doughnut",
  data: mobileUsersData,
  options: {
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  },
};

const mobileUsersChart = new Chart(
  document.getElementById("mobile-users-chart"),
  mobileUsersConfig
);
