import { Tabel } from "../../component/table";
import DataMP1 from "./dataMP1";
import { AmountCharge } from "./selisihdataMP1";

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

function TabelPerhitunganQ(){
      return (
         <div className='TabelPerhitunganMP1'>
          <Tabel layout={Layout('Data Perhitungan',300)} header={['Pengulangan', 'q-Floating (10^-19 C)', 'q-FallRaise (10^-19 C)l' ]} data={[DataMP1.dataFloating.pengulangan,DataMP1.dataFloating.oilCharge, DataMP1.dataFallRaise]} />
         </div>
       )
  }

  function TabelJumlahMuatan(){
    console.log(AmountCharge)
      function Floating(){
        return (
           <div className='TabelMuatanFloating'>
            <Tabel layout={Layout('Jumlah Muatan q-Floating',300)} header={['Pengulangan', 'q-Floating (10^-19 C)', 'n-Charge' ]} data={[DataMP1.dataFloating.pengulangan,DataMP1.dataFloating.oilCharge, AmountCharge.nChargeFloating]} />
           </div>
         )
      }
      function FallRaise(){
        return (
           <div className='TabelMuatanFallRaise'>
            <Tabel layout={Layout('Data Jumlah Muatan q-FallRaise',300)} header={['Pengulangan', 'q-FallRaise(10^-19 C)', 'n-Charge' ]} data={[DataMP1.dataFloating.pengulangan,DataMP1.dataFallRaise, AmountCharge.nChargeFallRaise]} />
           </div>
         )
      }
    return (
        <div className="Tabel Jumlah Muatan">
            <Floating/>
            <FallRaise/>
        </div>
    )
}
export {TabelPerhitunganQ, TabelJumlahMuatan}