
function perbesaran_1cm(referensi){
    const referensi_x = referensi[0];
    const referensi_y = referensi[1];
    const referensi_1cm = (referensi_x**2 + referensi_y**2)**0.5;
    return referensi_1cm; // 1 cm dalam piksel
  }
  
function perbesaran(data, referensi_1cm){
  let x = 0; // nilai  panjang piksel x
  let y = 0; // nilai panjang piksel y

  let panjang = 0; // tempat sementara untuk menyimpan nilai panjang titikcerahtengah-warna dalam satuan px
  let panjang_asli = 0; // tempat sementara untuk menyimpan nilai panjang x dalam satuan m
  let panjangArray = [];
   
  for(let i = 0; i<data.length; i++){
    x = data[i][0];
    y = data[i][1]
    panjang = (x**2 + y**2)**0.5;
    panjang_asli = (panjang/referensi_1cm)*0.01;
    panjangArray.push(panjang_asli)
  }
  return panjangArray;
}

function lambdaMP5(panjangArray, gratingConstant){
   function equation(x,d,l){
    const lamda =  d*x/(l**2 + x**2)**0.5
    return lamda
  }
  
    const l = 0.2
    const lambdaArray = [];
    const xArray = []
    let lambda = 0; let x = 0; let d = gratingConstant 

    
    for(let i = 0; i < panjangArray.length; i++){
        x = panjangArray[i]*100 // rubah ke cm
        x = parseFloat(x.toFixed(3)) // bulatkan 3 angka dibelakang koma
        xArray.push(x);

        lambda = equation(x,d,l);
        lambda = lambda*10**9; // rubah ke nm
        lambda = parseFloat(lambda.toFixed(3)) // bulatkan 3 angka di belakang koma
        lambdaArray.push(lambda);
    }
    return {lambdaArray, xArray}
}

function ExecutionGrating(dataVariasi){
  const skala1cm = perbesaran_1cm(dataVariasi.referensi_1cm);
  const panjangX = perbesaran(dataVariasi.x, skala1cm);
  const lambda = lambdaMP5(panjangX, dataVariasi.d)
  return {skala1cm,panjangX,lambda}
};

// Eksekusi Data Spectrometer
function RefractiveIndex(Data){
  function equation(angle){
    const apexAngle = 60; // satuan Derajat
    let theta1 = (apexAngle + angle)*0.5;
    let theta2 = apexAngle*0.5;
    theta1 = theta1*Math.PI/180 // convert ke radian
    theta2 = theta2*Math.PI/180 // convert ke radian
    const n = Math.sin(theta1)/Math.sin(theta2)
    return n
  }
  const nArray = [];
  let n = 0;
  for(let i = 0; i < Data.length; i++){
    n = equation(Data[i]);
    nArray.push(n)
  }

  return nArray
}

export {ExecutionGrating, RefractiveIndex}