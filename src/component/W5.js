// Ini merupakan module npm yang dibutuhkan (import module)
import { PlotGraph, DatasetsY } from '../chartJS/chart.js';
import { Tabel } from '../chartJS/table.js';
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
function Execution(referensi_x, referensi_y, diameter_x, diameter_y){
  const referensi_1mm = perbesaran_1mm(referensi_x,referensi_y);
  const diameterArray = perbesaran(diameter_x, diameter_y, referensi_1mm);
  const dataObjek = dataObj(diameterArray);
  const regresiLinear = LinearRegression(dataObjek.arrayMulti);
  const plotRegresi = LinearRegressionGraph(diameterArray, regresiLinear.m, regresiLinear.b);
  return {dataObjek, regresiLinear, plotRegresi, referensi_1mm};
};


function Graphing({variasi, dataObjek, plotRegresi}){
  const grafikData = DatasetsY('Udara','scatter',dataObjek.y,'blue','blue')
  const grafikRegresi = DatasetsY('Regresi Udara','line', plotRegresi.y,'red','red')
  
  const Datasets = {
    x : dataObjek.x,
    y : [grafikData,grafikRegresi]
  }
  const PlotGrafik = <PlotGraph title={variasi} datasetsX={Datasets.x} datasetsY={Datasets.y}/>
  return  PlotGrafik
}


const DataUdara1 ={
   referensi_x : 435,
   referensi_y : 841,
   diameter_x:[158,262,334,496,450,496,540,578,620,656],
   diameter_y : [4,44,60,78,84,92,98,104,112,114],
  }
const Udara1 = Execution(DataUdara1.referensi_x, DataUdara1.referensi_y,DataUdara1.diameter_x,DataUdara1.diameter_y);

const DataUdara2 ={
   referensi_x : 229,
   referensi_y : 721,
   diameter_x:[184,278,348,386,442,492,528,568,604,638],
   diameter_y : [2,4,4,2,12,16,20,28,34,38],
  }
const Udara2 = Execution(DataUdara2.referensi_x, DataUdara2.referensi_y,DataUdara2.diameter_x,DataUdara2.diameter_y);

const DataUdara3 ={
   referensi_x : 165,
   referensi_y : 560,
   diameter_x: [224,300,358,410,456,500,538,578,612,644],
   diameter_y : [2,4,2,4,6,4,6,8,8,10],
  }
const Udara3 = Execution(DataUdara3.referensi_x, DataUdara3.referensi_y,DataUdara3.diameter_x,DataUdara3.diameter_y);

const DataAir ={
   referensi_x : 884,
   referensi_y : 152,
   diameter_x: [196,268,314,362,398,434,470,502,526,554],
   diameter_y : [2,4,6,8,8,8,10,12,12,12],
  }
const Air = Execution(DataAir.referensi_x, DataAir.referensi_y, DataAir.diameter_x, DataAir.diameter_y);


const DataLarutanGula ={
   referensi_x : 349,
   referensi_y : 848,
   diameter_x: [190,270,316,366,414,448,482,514,548,576],
   diameter_y : [4,4,4,6,4,10,6,6,10,10],
  }
const LarutanGula = Execution(DataLarutanGula.referensi_x, DataLarutanGula.referensi_y, DataLarutanGula.diameter_x, DataLarutanGula.diameter_y);



function TabelPengukuran(){
 function Layout(title){
   let layout = {
     margin: {
       autoexpand : false,
       b:0,
       t:40
      },
      height : 270,
      title
    }
    return layout
  } 
  function TabelUdara1(){
    return (
      <div className='TabelUdara1'>
       <Tabel layout={Layout('Udara 1')} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (m)']} data={[Udara1.dataObjek.x, DataUdara1.diameter_x, DataUdara1.diameter_y, Udara1.dataObjek.y] }/>
       <p> Referensi 1 mm = {Udara1.referensi_1mm}px</p>
      </div>
    )
  }
  function TabelUdara2(){
    return (
      <div className='TabelUdara2'>
       <Tabel layout={Layout('Udara 2')} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (m)']} data={[Udara2.dataObjek.x, DataUdara2.diameter_x, DataUdara2.diameter_y, Udara2.dataObjek.y] }/>
        <p> Referensi 1 mm = {Udara2.referensi_1mm}px</p>
      </div>
    )
  }
  function TabelUdara3(){
    return (
      <div className='TabelUdara3'>
        <Tabel layout={Layout('Udara 3')} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (m)']} data={[Udara3.dataObjek.x, DataUdara3.diameter_x, DataUdara3.diameter_y, Udara3.dataObjek.y] }/>
        <p> Referensi 1 mm = {Udara3.referensi_1mm}px</p>
      </div>
    )
  }
  function TabelAir(){
    return (
      <div className='TabelAir'>
       <Tabel layout={Layout('Air')} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (m)']} data={[Air.dataObjek.x, DataAir.diameter_x, DataAir.diameter_y, Air.dataObjek.y] }/>
       <p> Referensi 1 mm = {Air.referensi_1mm}px</p>
      </div>
    )
  }
  function TabelLarutanGula(){
    return (
      <div className='TabelLarutanGula'>
       <Tabel layout={Layout('LarutanGula')} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (m)']} data={[LarutanGula.dataObjek.x, DataLarutanGula.diameter_x, DataLarutanGula.diameter_y, LarutanGula.dataObjek.y] }/>
       <p> Referensi 1 mm = {LarutanGula.referensi_1mm}px</p>
      </div>
    )
  }
  return (
    <div className='TabelData'>
    <TabelUdara1/>
    <TabelUdara2/>
    <TabelUdara3/>
    <TabelAir/>
    <TabelLarutanGula/>
    </div>
  )
}

function Grafik(){
  console.log(Udara1.dataObjek)
  console.log(Udara1.plotRegresi)
  function GrafikUdara1(){
    return(
      <div className='GrafikUdara1'>
      <Graphing variasi={'Udara 1'} dataObjek={Udara1.dataObjek} plotRegresi={Udara1.plotRegresi}/>
      <p> Persamaan Regresi : y ={Udara1.regresiLinear.m}x + {Udara1.regresiLinear.b} </p>
      <hr/>
      </div>
    )
  }
  function GrafikUdara2(){
    return(
      <div className='GrafikUdara2'>
      <Graphing variasi={'Udara 2'} dataObjek={Udara2.dataObjek} plotRegresi={Udara2.plotRegresi}/>
      <p> Persamaan Regresi : y ={Udara2.regresiLinear.m}x + {Udara2.regresiLinear.b} </p>
      <hr/>
      </div>
    )
  }
  function GrafikUdara3(){
    return(
      <div className='GrafikUdara3'>
      <Graphing variasi={'Udara 3'} dataObjek={Udara3.dataObjek} plotRegresi={Udara3.plotRegresi}/>
      <p> Persamaan Regresi : y ={Udara3.regresiLinear.m}x + {Udara3.regresiLinear.b} </p>
      <hr/>
      </div>
    )
  }
  function GrafikAir(){
    return(
      <div className='GrafikAir'>
      <Graphing variasi={'Air'} dataObjek={Air.dataObjek} plotRegresi={Air.plotRegresi}/>
      <p> Persamaan Regresi : y ={Air.regresiLinear.m}x + {Air.regresiLinear.b} </p>
      <hr/>
      </div>
    )
  }
  function GrafikLarutanGula(){
    return(
      <div className='GrafikLarutanGula'>
      <Graphing variasi={'Larutan Gula'} dataObjek={LarutanGula.dataObjek} plotRegresi={LarutanGula.plotRegresi}/>
      <p> Persamaan Regresi : y ={LarutanGula.regresiLinear.m}x + {LarutanGula.regresiLinear.b} </p>
        <hr/>
      </div>
    )
  }
  return (
    <div className='Grafik'>
      <GrafikUdara1/>
      <GrafikUdara2/>
      <GrafikUdara3/>
      <GrafikAir/>
      <GrafikLarutanGula/>
    </div>
  )
}

function W5(){
  return(
    <>
    <TabelPengukuran/>
    <br/>
    <br/>
    <Grafik/>
    </>
  )
}

export default W5;




    