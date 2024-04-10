import GrafikW5 from "./grafikW5";
import {TabelPengukuran, TabelLambda, TabelIndeksBias} from "./tabelW5";
import {LambdaScript} from "./lambdaW5";
import { IndeksBiasScript } from "./indeksBiasW5";

function W5(){
    return(
      <>
      <p>Bagus Mustaqim/5001221060/14</p>
      <TabelPengukuran/>
      <br/>
      <br/>
      <GrafikW5/>
      <LambdaScript/>
      <TabelLambda/>
      <IndeksBiasScript/>
      <TabelIndeksBias/>
      </>
    )
  }
  
  export default W5;