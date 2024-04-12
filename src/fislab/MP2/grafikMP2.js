import { PlotGraph,DatasetsY } from "../../component/chart"
import {fluxData} from "./dataMP2"

function GrafikFlux(){
    const grafikData = DatasetsY('Muon Flux','line',fluxData.mean,'blue','blue')
    
    const Datasets = {
      x : [1,2,3,4],
      y : [grafikData]
    }
    const PlotGrafik = <PlotGraph title='Grafik Flux Muon terhadap Ketinggian' titleX={'Lantai'} titleY={'Muon Flux (cps)'} datasetsX={Datasets.x} datasetsY={Datasets.y}/>
    return  PlotGrafik
  }
  
  export default GrafikFlux