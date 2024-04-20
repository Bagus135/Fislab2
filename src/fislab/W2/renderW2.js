import { TabelData,TabelPengukuran } from "./tabelW2";
import GrafikVariasi from "./grafikW2";

function W2(){
    return(
        <div className="W2">
        <h1> W2 : Damped Oscillation</h1>
        <br/> <br/>
        <TabelPengukuran/>    
        <TabelData/>
        <GrafikVariasi/>
    </div>
    ) 
}

export default W2