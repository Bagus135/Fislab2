// Ini merupakan module npm yang dibutuhkan (import module)
import { PlotGraph, DatasetsY } from '../chartJS/chart.js';
import Table from '../chartJS/table.js';
var ss = require('simple-statistics');

// Fungsi convert piksel
function perbesaran_1mm(referensi_x, referensi_y){
    let referensi = (referensi_x**2 + referensi_y**2)**0.5;
    let referensi_1mm = referensi/5;
    return referensi_1mm;
  }
  
function perbesaran(diameter_x,diameter_y, referensi_1mm){
  let diameter = 0;
  let diameter_asli = 0;
  let diameterArray = []; 
  for(let i = 0; i<diameter_x.length; i++){
    diameter = (diameter_x[i]**2 + diameter_y[i]**2)**0.5;
    diameter_asli = diameter/referensi_1mm;
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
    let diameter_asli = 0;
    let space = 0;
    for(let i = 0; i < dataInput.length; i++){
        data.x.push(i+1)
        diameter_asli = dataInput[i]
        data.y.push(dataInput[i])
        space = [i+1,dataInput[i]]
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
    for(let i = 0; i <= inputData.length; i++){
        titik = gradient*i + interceps
        MatriksKosong.y.push(titik)
        MatriksKosong.x.push(i)
    }
    return MatriksKosong
}

// Fungsi eksekusi
function Execution({variasi, referensi_x, referensi_y, diameter_x, diameter_y}){
  const referensi_1mm = perbesaran_1mm(referensi_x,referensi_y);
  const diameterArray = perbesaran(diameter_x, diameter_y, referensi_1mm);
  const dataObjek = dataObj(diameterArray);
  const regresiLinear = LinearRegression(dataObjek.arrayMulti);
  const grafikRegresi = LinearRegressionGraph(diameterArray, regresiLinear.m, regresiLinear.b);
  
  function Graphing({variasi}){
    const scatter = DatasetsY('Udara','scatter',dataObjek.y,'blue','blue')
    const line = DatasetsY('Regresi Udara','line', grafikRegresi.y,'red','red')
    
    const Datasets = {
      x : grafikRegresi.x,
      y : [scatter,line]
    }
    console.log(Datasets.y)
    const PlotGrafik = <PlotGraph title={variasi} datasetsX={Datasets.x} datasetsY={Datasets.y}/>
    return  PlotGrafik
  }
  return <Graphing variasi={variasi}/>
}

function Udara1(){
return (<Execution variasi= {'Grafik Udara 1'} referensi_x={2} referensi_y={4} diameter_x={[1,2,3,4,5]} diameter_y={[2,4,12,5,10]}/>)
}

  

export default Udara1;




    