import { PlotGraph,datasets } from "../../component/chart"
import {fluxData} from "./dataMP2"

function GrafikFlux(){
    const grafikData = datasets('Muon Flux','line',[1,2,3,4],fluxData.mean,'blue','blue')
    const PlotGrafik = <PlotGraph title='Grafik Flux Muon terhadap Ketinggian' titleX={'Lantai'} titleY={'Muon Flux (cps)'} datasets={[grafikData]}/>
    return  PlotGrafik
  }
  
  export default GrafikFlux