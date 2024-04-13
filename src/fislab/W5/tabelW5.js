import { Tabel } from "../../component/table"
import { Udara1,Udara2,Udara3,Air,LarutanGula,DataUdara1,DataUdara2,DataUdara3,DataAir,DataLarutanGula} from "./dataW5"
import { LambdaW5} from "./lambdaW5"
import {IndeksBiasW5} from "./indeksBiasW5"
var ss = require('simple-statistics')

function Layout(title, height){
  let layout = {
    margin: {
      autoexpand : false,
      b:0,
      t:35
     },
     height,
     title
   }
   return layout
 } 

function TabelPengukuran(){
     function TabelUdara1(){
       return (
         <div className='TabelUdara1'>
          <Tabel layout={Layout('Udara 1',270)} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (mm)']} data={[Udara1.dataObjek.x, DataUdara1.diameter_x, DataUdara1.diameter_y, Udara1.dataObjek.DataTabel] }/>
          <p> Referensi 1 mm = {Udara1.referensi_1mm}px</p>
         </div>
       )
     }
     function TabelUdara2(){
       return (
         <div className='TabelUdara2'>
          <Tabel layout={Layout('Udara 2',270)} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (mm)']} data={[Udara2.dataObjek.x, DataUdara2.diameter_x, DataUdara2.diameter_y, Udara2.dataObjek.DataTabel] }/>
           <p> Referensi 1 mm = {Udara2.referensi_1mm}px</p>
         </div>
       )
     }
     function TabelUdara3(){
       return (
         <div className='TabelUdara3'>
           <Tabel layout={Layout('Udara 3',270)} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (mm)']} data={[Udara3.dataObjek.x, DataUdara3.diameter_x, DataUdara3.diameter_y, Udara3.dataObjek.DataTabel] }/>
           <p> Referensi 1 mm = {Udara3.referensi_1mm}px</p>
         </div>
       )
     }
     function TabelAir(){
       return (
         <div className='TabelAir'>
          <Tabel layout={Layout('Air',270)} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (mm)']} data={[Air.dataObjek.x, DataAir.diameter_x, DataAir.diameter_y, Air.dataObjek.DataTabel] }/>
          <p> Referensi 1 mm = {Air.referensi_1mm}px</p>
         </div>
       )
     }
     function TabelLarutanGula(){
       return (
         <div className='TabelLarutanGula'>
          <Tabel layout={Layout('LarutanGula',270)} header={['Orde', 'diameter_x (px)', 'diameter_y (px)', 'diameter_asli (mm)']} data={[LarutanGula.dataObjek.x, DataLarutanGula.diameter_x, DataLarutanGula.diameter_y, LarutanGula.dataObjek.DataTabel] }/>
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


// Tabel Panjang Gelombang
function TabelLambda(){
  const lambdaW5 = LambdaW5();
  //rubah ke nano meter
  const lambda1 = lambdaW5.lambdaUdara1*(10**9);
  const lambda2 = lambdaW5.lambdaUdara2*(10**9);
  const lambda3 = lambdaW5.lambdaUdara3*(10**9);
  const lambda4 = lambdaW5.lambdaAir*(10**9);
  const lambda5 = lambdaW5.lambdaLarutanGula*(10**9);
  const rata2 =  ss.mean([lambda1,lambda2,lambda3,lambda4,lambda5])
  
    return (
       <div className='Tabellambda'>
        <Tabel layout={Layout('Panjang Gelombang',190)} header={['Variasi', decodeURI('%CE%BB')+'(nm)']} data={[['Udara 1', 'Udara 2', 'Udara 3', 'Air', 'Larutan Gula', "Rata-rata"], [lambda1,lambda2,lambda3, lambda4, lambda5, rata2]]} />
       </div>
     )
}

//Tabel indeksBias
function TabelIndeksBias(){
  const indeksBiasW5 = IndeksBiasW5()
  const indeksBias1 = indeksBiasW5.index1;
  const indeksBias2 = indeksBiasW5.index2;
  const indeksBias3 = indeksBiasW5.index3;
  
  function TabelUdara1(){
    return (
      <div className='TabelUdara1'>
       <Tabel layout={Layout('Udara 1',300)} header={['Orde', 'Indeks Bias Air', 'Indeks Bias Larutan Gula']} data={indeksBias1}/>
      </div>
    )
  }
  function TabelUdara2(){
    return (
      <div className='TabelUdara2'>
       <Tabel layout={Layout('Udara 2',300)} header={['Orde', 'Indeks Bias Air', 'Indeks Bias Larutan Gula']} data={indeksBias2}/>
      </div>
    )
  }
  function TabelUdara3(){
    return (
      <div className='TabelUdara3'>
       <Tabel layout={Layout('Udara 3',300)} header={['Orde', 'Indeks Bias Air', 'Indeks Bias Larutan Gula']} data={indeksBias3}/>
      </div>
    )
  }
  return (
    <div className='TabelIndeksBias'>
      <h3 style={{textAlign: 'right'}}>Tabel Indeks Bias</h3>
    <TabelUdara1/>
    <TabelUdara2/>
    <TabelUdara3/>
    </div>
  )
}
export {TabelPengukuran, TabelLambda, TabelIndeksBias}