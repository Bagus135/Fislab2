import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, Legend,  CategoryScale} from 'chart.js/auto';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, Legend, CategoryScale);

export function DatasetsY(label,type,data,borderColor,backgroundColor){
  const datasetsObj = {
    label,
    type,
    data,
    borderColor,
    backgroundColor,
  }
  return datasetsObj
}; 

export function PlotGraph({title, titleX, titleY, datasetsY, datasetsX}) {
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: titleX
        }
      },
      y: {
        title: {
          display: true,
          text: titleY
        }
      }
    },
    plugins: {
      legend: {
        display : true,
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  }

  const data = {
    labels : datasetsX,
    datasets: datasetsY,
  }

  return <Chart options={options} data={data} />
}
