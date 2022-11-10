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
      text: "단과대별 의견 제출 현황",
    },
  },
  scales: {
    // ⑫y축에 대한 설정(Object)
    y: {
      // ⑬시작을 0부터 하게끔 설정(최소값이 0보다 크더라도)(boolean)
      beginAtZero: true,
      max: 100,
    },
  },
};

const labels = [
  "건축대학",
  "경영대학",
  "공과대학",
  "미래융합대학",
  "법과대학",
  "사회과학대학",
  "예술체육대학",
  "인문대학",
  "자연과학대학",
  "ICT융합대학",
  "방목기초대학",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "단과대 별 의견 제출율",
      data: [65, 59, 80, 81, 56, 55, 40, 30, 29, 40, 30],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(255, 159, 64)",
        "rgba(255, 205, 86)",
        "rgba(75, 192, 192)",
        "rgba(54, 162, 235)",
        "rgba(153, 102, 255)",
        "rgba(21, 03, 207)",
        "rgba(255, 992, 132)",
        "rgba(255, 99, 64)",
        "rgba(25, 99, 86)",
        "rgba(201, 203, 207)",
      ],
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} />;
}
