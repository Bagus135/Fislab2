import { DataSenar,DataRefraksi,DataSnellius,DataW1, LambdaFinal } from "./dataW1";
import { Tabel } from "../../component/table";

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

function TabelIndeksBias(){
      return (
         <div className='TabelIndeksBiasW1'>
          <Tabel layout={Layout('Data Indeks Bias Kaca',300)} header={['Pengulangan', decodeURI('%CE%B8') + '1  (' +decodeURI('%C2%B0') + ')', decodeURI('%CE%B8') + '2  (' + decodeURI('%C2%B0') +')', 'n_kaca' ]} data={[DataW1.IndexBias.pengulangan, DataSnellius.theta1, DataSnellius.theta2, DataW1.IndexBias.n2]} />
         </div>
       )
  }
  
  function TabelLambda(){
      function Kisi100mm(){
          return (
              <div className='TabelKisi100mm'>
            <Tabel layout={Layout('Data Kisi 100mm',300)} header={['Orde', ' x (cm)', decodeURI('%CE%BB')+'(nm)' ]} data={[DataW1.Lambda._100mm.orde, DataRefraksi.x100mm, DataW1.Lambda._100mm.lambdas]} />
           </div>
         )
      }
      
      function Kisi300mm(){
          return (
              <div className='TabelKisi300mm'>
            <Tabel layout={Layout('Data Kisi 300mm',300)} header={['Orde', ' x (cm)', decodeURI('%CE%BB')+'(nm)' ]} data={[DataW1.Lambda._300mm.orde, DataRefraksi.x300mm, DataW1.Lambda._300mm.lambdas]} />
           </div>
         )
        }
        
        function Kisi600mm(){
            return (
                <div className='TabelKisi600mm'>
            <Tabel layout={Layout('Data Kisi 600mm',300)} header={['Orde', ' x (cm)', decodeURI('%CE%BB')+'(nm)' ]} data={[DataW1.Lambda._600mm.orde, DataRefraksi.x600mm, DataW1.Lambda._600mm.lambdas]} />
           </div>
         )
        }
        function Final(){
            return (
                <div className='TabelFinal'>
            <Tabel layout={Layout('Data ' + decodeURI('%CE%BB') + " Final",300)} header={['Variasi', decodeURI('%CE%BB')+'(nm)' ]} data={[LambdaFinal.Variasi, LambdaFinal.Means]} />
           </div>
         )
        }
        
        return (
            <div className="Tabel Lambda Kisi">
            <Kisi100mm/>
            <Kisi300mm/>
            <Kisi600mm/>
            <Final/>
        </div>
    )
}

function TabelDiameterSenar(){
      return (
         <div className='TabelDiameterSenar'>
          <Tabel layout={Layout('Data Diameter Senar',300)} header={['Orde', ' x (cm)', "Diameter Senar (mm)" ]} data={[DataW1.DiameterSenar.orde, DataSenar.x, DataW1.DiameterSenar.diameters]} />
         </div>
       )
  }


export{TabelIndeksBias,TabelLambda, TabelDiameterSenar}