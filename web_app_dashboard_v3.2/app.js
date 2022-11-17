//ALERT BANNER CODE
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

// TRAFFIC CHART

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
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
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
    aspectRatio: 2.5,
    animation: {
      duration: 0,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
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
      data: [75, 115, 175, 125, 225, 200, 100],
      fill: true,
      backgroundColor: "#7477bf",
      borderColor: "rgb(75, 192, 192)",
      // borderWidth: 1,
    },
  ],
};

const dailyTrafficConfig = {
  type: "bar",
  data: dailyTrafficData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
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
      data: [2000, 550, 550],
      backgroundColor: ["#7477bf", "#81c98f", "#51b6c8"],
      hoverOffset: 4,
    },
  ],
};

const mobileUsersConfig = {
  type: "doughnut",
  data: mobileUsersData,
  options: {
    aspectRatio: 1.9,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 20,
          fontStyle: "bold",
        },
      },
    },
  },
};

const mobileUsersChart = new Chart(
  document.getElementById("mobile-users-chart"),
  mobileUsersConfig
);

//MESSAGE SECTION CODE
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out both user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});
