import { Udara1,Udara2,Udara3,Air,LarutanGula} from "./dataW5"
import { MathJax } from "better-react-mathjax";

function lambdaFormula(slope){
    const ringDiameter = 3.4; //meter
    let lambda = slope/(4*ringDiameter);
    return lambda
}

function LambdaW5(){
    const lambdaW5 ={};
    function lambdaUdara1(){
        const slopeUdara1 = Udara1.regresiLinear.m;
        const lambdaUdara1 = lambdaFormula(slopeUdara1);
        return lambdaUdara1
    }
    function lambdaUdara2(){
        const slopeUdara2 = Udara2.regresiLinear.m;
        const lambdaUdara2 = lambdaFormula(slopeUdara2);
        return lambdaUdara2
    }
    function lambdaUdara3(){
        const slopeUdara3 = Udara3.regresiLinear.m;
        const lambdaUdara3 = lambdaFormula(slopeUdara3);
        return lambdaUdara3
    }
    function lambdaAir(){
        const slopeAir = Air.regresiLinear.m;
        const lambdaAir = lambdaFormula(slopeAir);
        return lambdaAir
    }
    function lambdaLarutanGula(){
        const slopeLarutanGula = LarutanGula.regresiLinear.m;
        const lambdaLarutanGula = lambdaFormula(slopeLarutanGula);
        return lambdaLarutanGula
    }

 lambdaW5.lambdaUdara1 = lambdaUdara1();
 lambdaW5.lambdaUdara2 = lambdaUdara2();
 lambdaW5.lambdaUdara3 = lambdaUdara3();
 lambdaW5.lambdaAir = lambdaAir();
 lambdaW5.lambdaLarutanGula = lambdaLarutanGula();
 return lambdaW5
}

// Menulis MathFormula using MathJax with laTeX format
function LambdaScript(){
    return(
        <div className="lambdaScript">
            <p> Persamaan pada grafik tersebut memenuhi</p>
            <MathJax>{"\\(d^2 = 4R \\lambda m\\) "}</MathJax>
            <p>Untuk mencari panjang gelombang dari sumber cahaya dapat ditentukan melalui persamaan garisnya yaitu pada nilai gradiennya</p>
            <MathJax>{"\\(m = 4R \\lambda \\) "}</MathJax>
            <MathJax>{"\\(\\lambda = \\frac{m}{4R}\\) "}</MathJax>
            <MathJax> <p>dengan {"\\(m\\)"} adalah nilai gradiennya, {"\\(R\\)"} adalah jari-jari kelengkungan lensa dan {"\\(\\lambda\\)"} adalah panjang gelombangnya </p></MathJax>
            <p>Hasil perhitungan panjang gelombang tersebut terdapat pada tabel berikut ini</p>
        </div>
    )
}

export {LambdaScript, LambdaW5}