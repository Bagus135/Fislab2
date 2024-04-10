// Ini merupakan module npm yang dibutuhkan (import module)
import { PlotGraph, DatasetsY } from '../../component/chart.js';
var ss = require('simple-statistics');

// Fungsi convert piksel
function perbesaran_1mm(referensi_x, referensi_y){
    let referensi = (referensi_x**2 + referensi_y**2)**0.5;
    let referensi_1mm = referensi/5;
    return referensi_1mm;
  }
  
function perbesaran(diameter_x, diameter_y, referensi_1mm){
  let diameter = 0;
  let diameter_asli = 0;
  let diameterArray = []; 
  for(let i = 0; i<diameter_x.length; i++){
    diameter = (diameter_x[i]**2 + diameter_y[i]**2)**0.5;
    diameter_asli = diameter/referensi_1mm*0.001;
    diameterArray.push(diameter_asli)
  }
  return diameterArray;
}
  
//Fungsi membuat sebuah data menjadi objek
function dataObj(dataInput){
    let data = {
        x : [],
        y : [],
        arrayMulti : [],
    };
    let diameter_kuadrat = 0
    let space = 0;
    for(let i = 0; i < dataInput.length; i++){
        data.x.push(i+1)
        diameter_kuadrat = (dataInput[i])**2
        data.y.push(diameter_kuadrat) // diameter dikuadratkan
        space = [i+1,diameter_kuadrat]
        data.arrayMulti.push(space)
    }
    return data;
}

// Fungsi mencari regresi linear
function LinearRegression(arrayMulti){
let regresiLinear = ss.linearRegression(arrayMulti)
return regresiLinear
}

// fungsi untuk membuat grafik persamaan regresinya
function LinearRegressionGraph(inputData, gradient, interceps){
    let MatriksKosong = {
        y : [],
        x : [],
    }
    let titik = 0;
    for(let i = 1; i <= inputData.length; i++){
        titik = gradient*i + interceps
        MatriksKosong.y.push(titik)
        MatriksKosong.x.push(i)
    }
    return MatriksKosong
}

// Fungsi eksekusi
export function Execution(referensi_x, referensi_y, diameter_x, diameter_y){
  const referensi_1mm = perbesaran_1mm(referensi_x,referensi_y);
  const diameterArray = perbesaran(diameter_x, diameter_y, referensi_1mm);
  const dataObjek = dataObj(diameterArray);
  const regresiLinear = LinearRegression(dataObjek.arrayMulti);
  const plotRegresi = LinearRegressionGraph(diameterArray, regresiLinear.m, regresiLinear.b);
  return {dataObjek, regresiLinear, plotRegresi, referensi_1mm};
};


export function Graphing({variasi, dataObjek, plotRegresi}){
  const grafikData = DatasetsY('Udara','scatter',dataObjek.y,'blue','blue')
  const grafikRegresi = DatasetsY('Regresi Udara','line', plotRegresi.y,'red','red')
  
  const Datasets = {
    x : dataObjek.x,
    y : [grafikData,grafikRegresi]
  }
  const PlotGrafik = <PlotGraph title={variasi} datasetsX={Datasets.x} datasetsY={Datasets.y}/>
  return  PlotGrafik
}





    