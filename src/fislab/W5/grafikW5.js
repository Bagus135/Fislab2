import { Graphing } from "./functionW5"
import { Udara1,Udara2,Udara3,Air,LarutanGula} from "./dataW5"

function GrafikW5(){
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

export default GrafikW5