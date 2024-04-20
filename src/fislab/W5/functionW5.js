// Ini merupakan module npm yang dibutuhkan (import module)
import { PlotGraph, datasets } from '../../component/chart.js';
var ss = require('simple-statistics');

// Fungsi convert piksel
function perbesaran_1mm(referensi_x, referensi_y){
    let referensi = (referensi_x**2 + referensi_y**2)**0.5;
    let referensi_1mm = referensi/5;
    return referensi_1mm;
  }
  
function perbesaran(diameter_x, diameter_y, referensi_1mm){
  let diameter = 0; // tempat sementara untuk menyimpan nilai diameter cincin dalam satuan px
  let diameter_asli = 0; // tempat sementara untuk menyimpan nilai diameter cincin dalam satuan m
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
  // properti x merupakan orde
  // properti y merupakan data yang digunakan dalam pengolahan data
  // properti Array Multi merupakan data yang digunakan dalam mencari regresi linearnya
  // variabel Data Tabel merupakan data pembulatan yang digunakan untuk visualisasi pada tabel
  // variabel Data Tabel merupakan data pembulatan yang digunakan untuk visualisasi pada grafik
    let data = {
        x : [],
        y : [],
        arrayMulti : [],
        DataTabel : [],
        DataGrafik : []
    };
    let Diameter = 0;
    let diameter_kuadrat = 0
    let space = 0;
    for(let i = 0; i < dataInput.length; i++){
        // data yang digunakan pada pengolahan data
        data.x.push(i+1)
        diameter_kuadrat = (dataInput[i])**2
        data.y.push(diameter_kuadrat) // diameter dikuadratkan

        // Array multidementional untuk regresi
        space = [i+1,diameter_kuadrat]
        data.arrayMulti.push(space)

        // data untuk visusalisasi tabel
        Diameter = dataInput[i]*(10**3) // jadikan ke milimeter
        Diameter = Diameter.toFixed(4) // bulatkan menjadi 4 angka dibelakang koma
        data.DataTabel.push(Diameter)
      
        // data untuk visualisasi grafik
        diameter_kuadrat = diameter_kuadrat*(10**6) // Agar terdapat satu angka didepan koma
        diameter_kuadrat = parseFloat(diameter_kuadrat.toFixed(2))
        data.DataGrafik.push(diameter_kuadrat)
    }
    return data
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
        titik = titik*(10**6) // agar terdapat satu angka didepan koma
        titik = parseFloat(titik.toFixed(2)) // bulatkan menjadi 2 angka di belakang koma
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
  const grafikData = datasets('Udara','scatter',dataObjek.x,dataObjek.DataGrafik,'blue','blue')
  const grafikRegresi = datasets('Regresi Udara','line',dataObjek.x, plotRegresi.y,'red','red')
  

  const PlotGrafik = <PlotGraph title={variasi} titleX={"Orde"} titleY={'Diameter Kuadrat .10^-6 (meter^2)'} datasets={[grafikData,grafikRegresi]}/>
  return  PlotGrafik
}





    