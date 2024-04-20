
function perbesaran_1mm(referensi_x, referensi_y){
    let referensi_1mm = (referensi_x**2 + referensi_y**2)**0.5;
    return referensi_1mm; // 1 mm dalam piksel
  }
  
function perbesaran(data, referensi_1mm){
  let panjang = 0; // tempat sementara untuk menyimpan nilai panjang cincin dalam satuan px
  let panjang_asli = 0; // tempat sementara untuk menyimpan nilai panjang cincin dalam satuan m
  let panjangArray = []; 
  for(let i = 0; i<x.length; i++){
    panjang = (x[i]**2 + y[i]**2)**0.5;
    panjang_asli = (panjang/referensi_1mm)*0.001;
    panjangArray.push(panjang_asli)
  }
  return panjangArray;
}

function lambdaMP5(panjangArray, gratingConstant){
    
    const l = 0
    function equation(x,d,l){
        const lamda =  d*x/(l**2 + x**2)**0.5
        return lamda
    }
    
    const lambdaArray = [];
    let lambda = 0; let x = 0; let d = gratingConstant 

    
    for(let i = 0; i < panjangArray.length; i++){
        x = panjangArray[i]
        lambda = equation(x,d,l)
        lambdaArray.push(lambda);
    }
    return lambdaArray
}