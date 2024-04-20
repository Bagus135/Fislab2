import { PlotGraph, datasets } from '../../component/chart.js';
import { DataMentahW2, DataW2} from './dataW2.js';


function GrafikVariasi(){
  function GrafikUdara1(){
    const dataPengukuran = datasets('Pengukuran','scatter',DataMentahW2.beban1.udara.t,DataW2.beban1.udara.Amplitudo,'green','green',0);
    const dataRegresi = datasets('Regresi','line', DataW2.beban1.udara.regPlot.t,DataW2.beban1.udara.regPlot.A, 'red', 'white',1000)
    const DataOsilasi = datasets('Osilasi', 'line', DataW2.beban1.udara.wavePlot.t, DataW2.beban1.udara.wavePlot.y,'blue', 'blue', 1000)
    const PlotGrafik = <PlotGraph title='Grafik Osilasi Pegas pada Udara dengan 1 Beban' titleX={'Waktu (s)'} titleY={'Amplitude (m)'} datasets={[dataPengukuran,dataRegresi,DataOsilasi]}/>
    return  PlotGrafik
  }
  function GrafikAir1(){
    const dataPengukuran = datasets('Pengukuran','scatter',DataMentahW2.beban1.air.t,DataW2.beban1.air.Amplitudo,'green','green',0)
    const dataRegresi = datasets('Regresi','line', DataW2.beban1.air.regPlot.t,DataW2.beban1.air.regPlot.A, 'red', 'red',1000)
    const DataOsilasi = datasets('Osilasi', 'line', DataW2.beban1.air.wavePlot.t, DataW2.beban1.air.wavePlot.y,'blue', 'blue', 1000)

    const PlotGrafik = <PlotGraph title='Grafik Osilasi Pegas pada Air dengan 1 Beban' titleX={'Waktu (s)'} titleY={'Amplitude (m)'} datasets={[dataPengukuran,dataRegresi,DataOsilasi]}/>
    return  PlotGrafik
  }
  function GrafikUdara2(){
    const dataPengukuran = datasets('Pengukuran','scatter',DataMentahW2.beban2.udara.t,DataW2.beban2.udara.Amplitudo,'green','green',0)
    const dataRegresi = datasets('Regresi','line', DataW2.beban2.udara.regPlot.t,DataW2.beban2.udara.regPlot.A, 'red', 'red',1000)
    const DataOsilasi = datasets('Osilasi', 'line', DataW2.beban2.udara.wavePlot.t, DataW2.beban2.udara.wavePlot.y,'blue', 'blue', 1000)

    const PlotGrafik = <PlotGraph title='Grafik Osilasi Pegas pada Udara dengan 2 Beban' titleX={'Waktu (s)'} titleY={'Amplitude (m)'} datasets={[dataPengukuran,dataRegresi,DataOsilasi]}/>
    return  PlotGrafik
  }
  function GrafikAir2(){
    const dataPengukuran = datasets('Pengukuran','scatter',DataMentahW2.beban2.air.t,DataW2.beban2.air.Amplitudo,'green','green',0)
    const dataRegresi = datasets('Regresi','line', DataW2.beban2.air.regPlot.t, DataW2.beban2.air.regPlot.A, 'red', 'red',1000)
    const DataOsilasi = datasets('Osilasi', 'line', DataW2.beban2.air.wavePlot.t, DataW2.beban2.air.wavePlot.y,'blue', 'blue', 1000)

    const PlotGrafik = <PlotGraph title='Grafik Osilasi Pegas pada Air  dengan 2 Beban' titleX={'Waktu (s)'} titleY={'Amplitude (m)'} datasets={[dataPengukuran,dataRegresi,DataOsilasi]}/>
    return  PlotGrafik
  }

  return (
    <div className='GrafikVariasiW2'>
      <GrafikUdara1/>
      <GrafikAir1/>
      <GrafikUdara2/>
      <GrafikAir2/>
    </div>
  )
} 
  
export default GrafikVariasi