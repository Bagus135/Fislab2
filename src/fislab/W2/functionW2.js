var regression = require('regression')

function Data(dataVariasi){
    const dataRegresi = [];
    const dataAmplitudo = [];
    let Amplitude = 0; let Time = 0;
    for(let i = 0; i < dataVariasi.t.length; i++){
        Time = dataVariasi.t[i];
        Amplitude = dataVariasi.A[i]/100; // rubah ke cm
        dataAmplitudo.push(Amplitude)
        dataRegresi.push([Time, Amplitude]);
    }

    return {dataRegresi, dataAmplitudo}    
};

function ExpRegresi(dataRegresi){
    const expRegresi = regression.exponential(dataRegresi);
    const [a,b] = expRegresi.equation;
return {a,b}
}

function Viscosity(b,m,r){
    let dampRatio = (b*2*m*-1);
    let Viscosity = dampRatio/(6*Math.PI*r);
    
    // bulatkan 4 angka di belakang koma
    dampRatio = parseFloat(dampRatio.toFixed(6)); 
    Viscosity = parseFloat(Viscosity.toFixed(6));
    return {Viscosity, dampRatio}
};

function AngularFrequency(k,m,b){
    const Omega = ((k/m) - (b**2))**0.5;
    return Omega
};

function plotEquation(A0, b,AngularFrequency, datawaktu){
  
    function finalEquation(t){
        const regEquation = A0*Math.exp(b*t)
        const waveEquation = regEquation*Math.cos(AngularFrequency*t);
        return {regEquation, waveEquation}
    };

    let time = 0; let Amplitude = 0; let Y =0;
    const regPlot = {
        t : [],
        A:[],
    }
    const wavePlot = {
        t : [],
        y:[],
    }

    for(let i = 0; i<=datawaktu[datawaktu.length-1]; i+=0.01){
         time = i;
         const result = finalEquation(i)
         Y = result.waveEquation;
         Amplitude = result.regEquation

         wavePlot.t.push(time); wavePlot.y.push(Y);
         regPlot.t.push(time); regPlot.A.push(Amplitude);
    }
return {wavePlot, regPlot}
}

function Execution(dataVariasi){
    const data = Data(dataVariasi)
    const expRegresi = ExpRegresi(data.dataRegresi);
    console.log(expRegresi.b)
    const viscosity = Viscosity(expRegresi.b,dataVariasi.m,dataVariasi.r,);
    const angularFrequency = AngularFrequency(dataVariasi.k, dataVariasi.m, expRegresi.b);
    const plot = plotEquation(data.dataAmplitudo[0], expRegresi.b,angularFrequency,dataVariasi.t)

    return {data, expRegresi, viscosity, angularFrequency, plot}
}

export default Execution