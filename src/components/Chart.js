import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

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
      position: 'top',
    },
    title: {
      display: true,
      text: '단과대별 의견 제출 수',
    },
  },
};

const labels = ['단과대별 투표수'];

const labelss = [
  '건축대학',
  '경영대학',
  '공과대학',
  '미래융합대학',
  '법과대학',
  '사회과학대학',
  '예술체육대학',
  '인문대학',
  '자연과학대학',
  'ICT융합대학',
  '단과대구분없음',
];

export const data = {
  labels,
  datasets: [
    {
      label: '단과대학',
      data: [10],
      backgroundColor: 'rgba(53, 162, 235)',
    },
    {
      label: '2',
      data: [15],
      backgroundColor: 'rgba(53, 162, 23)',
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} />;
}
