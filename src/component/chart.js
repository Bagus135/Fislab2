import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, Legend,  CategoryScale} from 'chart.js/auto';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, Legend, CategoryScale);

 function datasets(label,type,dataX,dataY,borderColor,backgroundColor,){
  const dataArray = [];
  let x = 0; let y = 0;

  for(let i = 0; i<dataX.length; i++){
    x = dataX[i];
    y = dataY[i];
    dataArray.push({x ,y})
  }

  const datasetsObj = {
    label,
    type,
    data : dataArray,
    borderColor,
    backgroundColor,
  }
  return datasetsObj
}; 

 function PlotGraph({title, titleX, titleY, datasets}) {
  const options = {
    responsive: true,
    scales: {
      x: {
        type:'linear',
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
   datasets
  }

  return <Chart options={options} data={data} />
}
export {datasets,PlotGraph}