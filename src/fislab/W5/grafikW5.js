import { Graphing } from "./functionW5"
import { Udara1,Udara2,Udara3,Air,LarutanGula} from "./dataW5"
import { MathJax } from "better-react-mathjax"


function GrafikW5(){
    function GrafikUdara1(){
      return(
        <div className='GrafikUdara1'>
        <Graphing variasi={'Udara 1'} dataObjek={Udara1.dataObjek} plotRegresi={Udara1.plotRegresi}/>
        <p> Persamaan Regresi : y ={(Udara1.regresiLinear.m*10**7).toFixed(2)}x{'\\(10^{-7}x\\)'} + {(Udara1.regresiLinear.b*10**7).toFixed(2)}x{'\\(10^{-7}\\)'} </p>
        <hr/>
        </div>
      )
    }
    function GrafikUdara2(){
      return(
        <div className='GrafikUdara2'>
        <Graphing variasi={'Udara 2'} dataObjek={Udara2.dataObjek} plotRegresi={Udara2.plotRegresi}/>
        <p> Persamaan Regresi : y ={(Udara2.regresiLinear.m*10**7).toFixed(2)}x{'\\(10^{-7}x\\)'} + {(Udara2.regresiLinear.b*10**7).toFixed(2)}x{'\\(10^{-7}\\)'} </p>
        <hr/>
        </div>
      )
    }
    function GrafikUdara3(){
      return(
        <div className='GrafikUdara3'>
        <Graphing variasi={'Udara 3'} dataObjek={Udara3.dataObjek} plotRegresi={Udara3.plotRegresi}/>
        <p> Persamaan Regresi : y ={(Udara3.regresiLinear.m*10**7).toFixed(2)}x{'\\(10^{-7}x\\)'} + {(Udara3.regresiLinear.b*10**7).toFixed(2)}x{'\\(10^{-7}\\)'} </p>
        <hr/>
        </div>
      )
    }
    function GrafikAir(){
      return(
        <div className='GrafikAir'>
        <Graphing variasi={'Air'} dataObjek={Air.dataObjek} plotRegresi={Air.plotRegresi}/>
        <p> Persamaan Regresi : y ={(Air.regresiLinear.m*10**7).toFixed(2)}x{'\\(10^{-7}x\\)'} + {(Air.regresiLinear.b*10**7).toFixed(2)}x{'\\(10^{-7}\\)'} </p>
        <hr/>
        </div>
      )
    }
    function GrafikLarutanGula(){
      return(
        <div className='GrafikLarutanGula'>
        <Graphing variasi={'Larutan Gula'} dataObjek={LarutanGula.dataObjek} plotRegresi={LarutanGula.plotRegresi}/>
        <p> Persamaan Regresi : y ={(LarutanGula.regresiLinear.m*10**7).toFixed(2)}x{'\\(10^{-7}x\\)'} + {(LarutanGula.regresiLinear.b*10**7).toFixed(2)}x{'\\(10^{-7}\\)'} </p>
          <hr/>
        </div>
      )
    }
    return (
      <div className='Grafik'>
        <MathJax>
        <GrafikUdara1/>
        <GrafikUdara2/>
        <GrafikUdara3/>
        <GrafikAir/>
        <GrafikLarutanGula/>
        </MathJax>
      </div>
    )
  }

export default GrafikW5