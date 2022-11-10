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
      label: '건축대학',
      data: [10],
      backgroundColor: 'rgba(53, 162, 235)',
    },
    {
      label: '경영대학',
      data: [15],
      backgroundColor: 'rgba(53, 162, 23)',
    },
    {
      label: '공과대학',
      data: [7],
      backgroundColor: 'rgba(59, 12, 23)',
    },
    {
      label: '미래융합대학',
      data: [18],
      backgroundColor: 'rgba(3, 162, 123)',
    },
    {
      label: '사회과학대학',
      data: [25],
      backgroundColor: 'rgba(253, 162, 23)',
    },
    {
      label: '예술체육대학',
      data: [9],
      backgroundColor: 'rgba(53, 12, 223)',
    },
    {
      label: '인문대학',
      data: [17],
      backgroundColor: 'rgba(123, 252, 23)',
    },
    {
      label: '자연과학대학',
      data: [20],
      backgroundColor: 'rgba(231, 12, 23)',
    },
    {
      label: 'ICT융합대학',
      data: [40],
      backgroundColor: 'rgba(53, 162, 23)',
    },
    {
      label: '단과대구분없음',
      data: [12],
      backgroundColor: 'rgba(193, 182, 23)',
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} />;
}
