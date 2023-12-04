'use client'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { dataChart } from '@/constants';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const BarChart = ({ data }: { data : string }) => {
  const currentChart = dataChart.find((d) => d.date === data) 
  if (!currentChart) return null

  return (
    <div className='w-full mt-4 px-4 py-2'>
      <Bar data={currentChart?.data} />
    </div>
  )
}

export default BarChart