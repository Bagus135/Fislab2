import { Udara1,Udara2,Udara3,Air,LarutanGula } from "./dataW5";
import { MathJax } from "better-react-mathjax";
var ss = require('simple-statistics')


function indexFormula(diameterUdara, diameter1, diameter2){
    let n1 = [];
    let n2 = [];
    let orde = [];
    let varOrde = 0;
    let var1 = 0;
    let var2 = 0;
    //looping equation
    for (let i = 0; i<diameterUdara.length; i++ ){
        varOrde = i + 1;
        orde.push(varOrde)
        var1 = diameterUdara[i]/diameter1[i];
        var1 = parseFloat(var1.toFixed(3))
        n1.push(var1);
        var2 = diameterUdara[i]/diameter2[i];
        var2 = parseFloat(var2.toFixed(3))
        n2.push(var2);
    }

    // Cari Rata-ratanya
    let rata1 = ss.mean(n1);
    rata1 = parseFloat(rata1.toFixed(3)) 
    let rata2 = ss.mean(n2);
    rata2 = parseFloat(rata2.toFixed(3))
    orde.push('Rata-Rata'); n1.push(rata1); n2.push(rata2)

    return [orde,n1,n2]
}

const diameterUdara1 = Udara1.dataObjek.y; 
const diameterUdara2 = Udara2.dataObjek.y; 
const diameterUdara3 = Udara3.dataObjek.y; 
const diameterAir = Air.dataObjek.y; 
const diameterLarutanGula = LarutanGula.dataObjek.y; 

function IndeksBiasW5(){
    const index1 = indexFormula(diameterUdara1,diameterAir,diameterLarutanGula)
    const index2 = indexFormula(diameterUdara2,diameterAir,diameterLarutanGula)
    const index3 = indexFormula(diameterUdara3,diameterAir,diameterLarutanGula)
 return{index1,index2,index3}
}

function IndeksBiasScript(){
    return(
        <div className="biasScript">
            <p>Untuk mencari indeks bias pada suatu medium dapat ditentukan dengan membandingkan diameter cincin dengan orde yang sama pada medium udara dengan suatu medium lainnya, dengan menggunakan persamaan</p>
            <MathJax>{"\\(n = \\frac{d^2}{d_l^2}\\)"}</MathJax>
            <MathJax> <p>dengan n adalah nilai indeks biasnya, {"\\(d\\)"} adalah diameter cincin pada udara dan {"\\(d_l\\)"} adalah diameter cincin pada suatu medium lain  </p></MathJax>
            <p>Hasil perhitungan indeks bias tersebut terdapat pada tabel berikut ini</p>
        </div>
    )
}

export { IndeksBiasW5 , IndeksBiasScript}