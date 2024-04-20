var ss = require('simple-statistics')

let fluxData = {
    lt1 :[0.45, 0.46, 0.46],
    lt2 : [0.56, 0.53, 0.49],
    lt3 : [0.48, 0.48, 0.48],
    lt4 : [0.37, 0.48, 0.52],
    pengulangan : [1,2,3],
    mean :[],
}

const fizeauFocaultData = {
    Length : [5000,8633],
    n : [500,720],
    V_angular : [190,75]
}

// Cari Rata2 nya
const rata2lt1 = parseFloat(ss.mean(fluxData.lt1).toFixed(3))
const rata2lt2 = parseFloat(ss.mean(fluxData.lt2).toFixed(3))
const rata2lt3 = parseFloat(ss.mean(fluxData.lt3).toFixed(3))
const rata2lt4 = parseFloat(ss.mean(fluxData.lt4).toFixed(3))

fluxData.lt1.push(rata2lt1); // lantai 1
fluxData.lt2.push(rata2lt2); // lantai 2
fluxData.lt3.push(rata2lt3); // lantai 3
fluxData.lt4.push(rata2lt4); // lantai 4
fluxData.pengulangan.push("Rata - Rata");

// Tambah array mean pada objek fluxData
const Mean = [rata2lt1,rata2lt2,rata2lt3,rata2lt4];
fluxData.mean.push(...Mean)
export {fluxData, fizeauFocaultData}