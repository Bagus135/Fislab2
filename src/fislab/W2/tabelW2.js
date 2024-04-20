import { Tabel } from "../../component/table";
import { DataW2, DataMentahW2 } from "./dataW2";

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
    function TabelInformasi(){
        return (
           <div className='TabelInformasi'>
            <Tabel layout={Layout('Data Informasi',200)} header={['Besaran', 'Nilai' ]} data={[['Massa Beban 1', "Massa Beban 2", "Konstanta Pegas", "Jari-Jari Massa", "Arekuensi Alami Beban 1", "Frekuensi Alami Beban 2"], ['0.171 kg', '0.233 kg' ,'10.474 N/m' ,'14 cm','7.83 rad/s', '6.705 rad/s']]} />
           </div>
         )
    }
    function TabelUdara1(){
        return (
           <div className='TabelUdara1'>
            <Tabel layout={Layout('Data Pengukuran Beban 1 pada Udara',225)} header={['Amplitudo (cm)', 'Waktu (s)' ]} data={[DataMentahW2.beban1.udara.A,DataMentahW2.beban1.udara.t]} />
           </div>
         )
    }
    function TabelAir1(){
        return (
           <div className='TabelAir1'>
            <Tabel layout={Layout('Data Pengukuran Beban 1 pada Air',225)} header={['Amplitudo (cm)', 'Waktu (s)' ]} data={[DataMentahW2.beban1.air.A,DataMentahW2.beban1.air.t]} />
           </div>
         )
    }
    function TabelUdara2(){
        return (
            <div className='TabelUdara2'>
            <Tabel layout={Layout('Data Pengukuran Beban 2 pada Udara',225)} header={['Amplitudo (cm)', 'Waktu (s)' ]} data={[DataMentahW2.beban2.udara.A,DataMentahW2.beban2.udara.t]} />
           </div>
         )
    }
        function TabelAir2(){
            return (
               <div className='TabelAir2'>
                <Tabel layout={Layout('Data Pengukuran Beban 2 pada Air', 225)} header={['Amplitudo (cm)', 'Waktu (s)' ]} data={[DataMentahW2.beban2.air.A,DataMentahW2.beban2.air.t]} />
               </div>
             )
        }
        return(
            <div className="tabelPengukuran">
                <TabelInformasi/>
                <TabelUdara1/>
                <TabelAir1/>
                <TabelUdara2/>
                <TabelAir2/>
            </div>
        )
}

function TabelData(){
    const data = {
        variasi : ["Beban 1, Udara", "Beban 1, Air", "Beban 2, Udara", "Beban 2, Air"],
        b : [DataW2.beban1.udara.expRegresi.b,DataW2.beban1.air.expRegresi.b,DataW2.beban2.udara.expRegresi.b, DataW2.beban2.air.expRegresi.b],
        dP : [DataW2.beban1.udara.viscosity.dampRatio,DataW2.beban1.air.viscosity.dampRatio,DataW2.beban2.udara.viscosity.dampRatio, DataW2.beban2.air.viscosity.dampRatio],
        viscosity : [DataW2.beban1.udara.viscosity.Viscosity,DataW2.beban1.air.viscosity.Viscosity,DataW2.beban2.udara.viscosity.Viscosity, DataW2.beban2.air.viscosity.Viscosity],
        dampFreq : [DataW2.beban1.udara.angularFreq,DataW2.beban1.air.angularFreq,DataW2.beban2.udara.angularFreq, DataW2.beban2.air.angularFreq],
    }
    return (
           <div className='TabelData'>
            <Tabel layout={Layout('Data Perhitungan',225)} header={['Variasi', 'b', 'Damping Ratio (rad/s)', 'Viskositas (Pa.s)', 'Frekuensi Teredam (rad/s)']} data={[data.variasi, data.b, data.dP, data.viscosity, data.dampFreq ]} />
           </div>
     )
}

export {TabelPengukuran, TabelData}