// Traffic Chart
// const traffic = document.getElementById("traffic-chart");

const labels = [
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

const data = {
  labels: labels,
  datasets: [
    {
      data: [550, 1400, 1000, 2000, 1500, 1700, 1200, 1800, 2300, 1500, 2500],
      fill: true,
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

const config = {
  type: "line",
  data: data,
};

const myChart = new Chart(document.getElementById("traffic-chart"), config);
