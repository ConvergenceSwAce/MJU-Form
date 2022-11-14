import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "인문캠퍼스 단과대별 의견 제출 현황",
    },
  },
  scales: {
    // ⑫y축에 대한 설정(Object)
    y: {
      // ⑬시작을 0부터 하게끔 설정(최소값이 0보다 크더라도)(boolean)
      beginAtZero: true,
    },
  },
};

const labels = [
  "경영대학",
  "미래융합대학",
  "법과대학",
  "사회과학대학",
  "인문대학",
  "ICT융합대학",
  "방목기초대학",
];

export default function Chart(props) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "단과대 별 의견 제출율",
        data: props.chartData,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
        ],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
