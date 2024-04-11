
var ss = require('simple-statistics')

function SnelliusLaw(tetha1, tetha2){
    const rad1 = tetha1*Math.PI/180; // convert ke radian
    const rad2 = tetha2*Math.PI/180;
    const n = Math.sin(rad1)/Math.sin(rad2);
    return n
}

function RefractionIndex(tethas1, tethas2){
    const n2 = []
    const pengulangan = []
    let a = 0;
    for(let i = 0; i < tethas1.length; i++){
        pengulangan.push(i+1)
        a = SnelliusLaw(tethas1[i], tethas2[i])
        a = parseFloat(a.toFixed(2)) // bulatkan menjadi 2 angka dibelakang koma
        n2.push(a);
    };

    //Cari Rata-Rata
    pengulangan.push('Rata - Rata')
    let rata2 =ss.mean(n2)
    rata2 = parseFloat(rata2.toFixed(2))
    n2.push(rata2);
    return {n2, pengulangan}

}; 

function DiffractionFormula(d, x , n) {
    const l = 0.25;
    const lambda = d*x/(n*(l**2 + x**2)**0.5)
    return lambda  
}
function Difraction(d,x){
    const lambdas =[];
    const orde = []
    let a = 0; let b = 0;
    for(let i = 0; i < x.length; i++){
        b = i+1 // b adalah orde
        orde.push(b);
        a = DiffractionFormula(d,x[i]/100, b); //a adalah lambda
        a = a*(10**9) // convert dari m ke nm
        a = parseFloat(a.toFixed(5)) // bulatkan 5 angka dibelakang koma
        lambdas.push(a)
    }
    //Cari Rata-Rata
    if(lambdas.length>1){
    orde.push('Rata - Rata')
    let rata2 =ss.mean(lambdas)
    rata2 = parseFloat(rata2.toFixed(2))
    lambdas.push(rata2);
    }
    return {lambdas, orde};
}

function lambdaFinal(Kisi100mm, Kisi300mm, Kisi600mm){
    let Mean = 0;
    let Means = [];
    // mengambil nilai mean dari ke 3 masing2 variasi kisi
    for(let i = 0; i<arguments.length; i++){
        Mean = arguments[i][arguments[i].length-1]
        Means.push(Mean)
    }
    let Rata2Final = ss.mean(Means);
    Rata2Final = parseFloat(Rata2Final.toFixed(5));
    Means.push(Rata2Final)
    const Variasi = ['100mm', '300mm', '600mm', 'Rata-Rata']
    return {Means,Variasi}
}



function widthFormula(x,n){
    const lambda = 932*10**-9 ;// 932 nm
    const l = 6.735;
    const diameter = lambda*l*n/x;
    return diameter;
};

function DiameterString(x){
    const diameters = [];
    const orde = []
    let a = 0; let b = 0;
    for(let i = 0; i < x.length; i++){
        b = i+1
        orde.push(b);
        a = widthFormula(x[i]/100, b);
        a = a*1000 // convert dari m ke mm
        a = parseFloat(a.toFixed(5)) // bulatkan 5 angka dibelakang koma
        diameters.push(a)
    }

    //Cari Rata-Rata

    orde.push('Rata - Rata')
    let rata2 =ss.mean(diameters)
    rata2 = parseFloat(rata2.toFixed(2))
    diameters.push(rata2);
    
    return {diameters, orde};

}

export {RefractionIndex, Difraction, DiameterString, lambdaFinal}
