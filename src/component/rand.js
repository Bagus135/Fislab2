// Ini merupakan module npm yang dibutuhkan (import module)
import { Chart} from 'react-chartjs-2';
var ss = require('simple-statistics');

// Fungsi convert piksel
function perbesaran(referensi_x, referensi_y, diameter_x, diameter_y){
    let referensi = (referensi_x**2 + referensi_y**2)**0.5;
    let referensi_1mm = referensi/5;
    let diameter = (diameter_x**2 + diameter_y**2)**0.5;
    let diameter_asli = diameter/referensi_1mm;
    return diameter_asli;
}

//Fungsi membuat sebuah data menjadi objek
function dataObj(dataInput){
    let data = {
        x : [],
        y : [],
        arrayMulti : [],
    }
    let space = 0;
    for(let i = 0; i < dataInput.length; i++){
        data.x.push(i+1)
        data.y.push(dataInput[i])
        space = [i+1,dataInput[i]]
        data.arrayMulti.push(space)
    }
    return data;
}

// Fungsi mencari regresi linear
function regresiLinear(arrayMulti){
let regresiLinear = ss.linearRegression(arrayMulti)
return regresiLinear
}

// fungsi untuk membuat grafik persamaan regresinya
function grafikregresiLinear(inputData, gradient, interceps){
    let MatriksKosong = {
        y : [],
        x : [],
    }
    let titik = 0;
    for(let i = 0; i <= inputData.length; i++){
        titik = gradient*i + interceps
        MatriksKosong.y.push(titik)
        MatriksKosong.x.push(i)
    }
    return MatriksKosong
}

// Fungsi untuk membuat tabel

const LineChart = () => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Line Chart: Monthly Sales Trend for Products A & B",
        },
      },
    }
  
    const labels = ["January", "February", "March", "April", "May", "June", "July"]
  
    const productASales = [120, 135, 125, 145, 160, 150, 170]
  
    const productBSales = [80, 75, 95, 100, 110, 105, 120, 115]
  
    const data = {
      labels,
      datasets: [
        {
          label: "Product A Sales",
          data: productASales,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132)",
        },
        {
          label: "Product B Sales",
          data: productBSales,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235)",
        },
      ],
    }
  
    return <Chart type='line' data={data} options={options} />
  }
  

export default LineChart
    