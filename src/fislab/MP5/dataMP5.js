import { ExecutionGrating,RefractiveIndex } from "./functionMP5";
// data mentah
const DataKisiMentah = {
    l : 0.2, // meter
    helium:{
        kisi100mm :{
            warna : ['Merah', 'Kuning', 'Biru', 'Nila','Ungu'],
            x : [[85,6],[72,8],[61,7],[55,6], [51,5]],
            referensi_1cm:[163,2], 
            d : (2/100)/1000,
        },
        kisi300mm :{
            warna : ['Merah', 'Kuning', 'Biru', 'Nila','Ungu'],
            x : [[615,23],[539,20],[456,21],[411,25],[406,20]],
            referensi_1cm: [264,4],
            d : (2/300)/1000
        },
        kisi600mm :{
            warna : ['Merah', 'Kuning', 'Biru', 'Nila','Ungu'],
            x : [[1238,31],[1088,31],[923,20],[872,13],[829,12]],
            referensi_1cm: [280,12],
            d : (2/600)/1000
        },
    },
    neon:{
        kisi100mm :{
            warna:['Merah', 'Jingga', 'Kuning', 'Hijau', 'Biru'],
            referensi_1cm: [232,6],
            x : [[220,12], [195,9], [171,8], [163,7], [149,6]],
            d : (2/100)/1000
        },
        kisi300mm :{
            warna:['Merah', 'Jingga', 'Kuning', 'Hijau', 'Biru'],
            referensi_1cm: [267,4],
            x : [[652,23],[622,17],[585,16],[532,9],[492,6]],
            d : (2/300)/1000
        },
        kisi600mm :{
            warna:['Merah', 'Jingga', 'Kuning', 'Hijau', 'Biru'],
            referensi_1cm: [222,2],
            x : [[1147,44],[1101,40],[1072,37],[978,32],[861,33]],
            d : (2/600)/1000
        },
    },
    hidrogen:{
        kisi100mm :{
            warna:['Merah', 'Biru'],
            referensi_1cm: [0,0],
            x : [[0,0],[0,0]],
            d : (2/100)/1000
        },
        kisi300mm :{
            warna:['Merah', 'Biru'],
            referensi_1cm: [215,1],
            x : [[700,121],[629,99]],
            d : (2/300)/1000
        },
        kisi600mm :{
            warna:['Merah', 'Biru'],
            referensi_1cm: [211,2],
            x : [[1383,287],[983,175]],
            d : (2/600)/1000
        },
    },
}

const DataSpectrometer = {
    helium :{
        warna : ["Merah", "Kuning", "Biru", "Nila", "Ungu"],
        sudut : [10.5, 11.6, 12, 13.5, 14.1],
    },
    neon : {
        warna : ['Merah', 'Jingga', 'Kuning', 'Hijau', 'Biru'],
        sudut : [10.8, 10.9, 11.2, 11.9, 12],
    },
    hidrogen :{
        warna : ["Merah", "Biru"],
        sudut : [11.3, 13.4],
    }
}

//Eksekusi Data
// Data Kisi
const helium100mm = ExecutionGrating(DataKisiMentah.helium.kisi100mm);
const helium300mm = ExecutionGrating(DataKisiMentah.helium.kisi300mm);
const helium600mm = ExecutionGrating(DataKisiMentah.helium.kisi600mm);
const neon100mm = ExecutionGrating(DataKisiMentah.neon.kisi100mm);
const neon300mm = ExecutionGrating(DataKisiMentah.neon.kisi300mm);
const neon600mm = ExecutionGrating(DataKisiMentah.neon.kisi600mm);
const hidrogen100mm = ExecutionGrating(DataKisiMentah.hidrogen.kisi100mm);
const hidrogen300mm = ExecutionGrating(DataKisiMentah.hidrogen.kisi300mm);
const hidrogen600mm = ExecutionGrating(DataKisiMentah.hidrogen.kisi600mm);

//Data Spectrometer
const nHelium = RefractiveIndex(DataSpectrometer.helium.sudut)
const nNeon = RefractiveIndex(DataSpectrometer.neon.sudut)
const nHidrogen = RefractiveIndex(DataSpectrometer.hidrogen.sudut)


// Data pengolahan
const DataKisiMP5 = {
    helium : {
        kisi100mm:{
            skala1cm: helium100mm.skala1cm,
            x : helium100mm.lambda.xArray,
            lambda : helium100mm.lambda.lambdaArray, 
        },
        kisi300mm:{
            skala1cm: helium300mm.skala1cm,
            x : helium300mm.lambda.xArray,
            lambda : helium300mm.lambda.lambdaArray, 
        },
        kisi600mm:{
            skala1cm: helium600mm.skala1cm,
            x : helium600mm.lambda.xArray,
            lambda : helium600mm.lambda.lambdaArray, 
        },
    },
    neon : {
        kisi100mm:{
            skala1cm: neon100mm.skala1cm,
            x : neon100mm.lambda.xArray,
            lambda : neon100mm.lambda.lambdaArray, 
        },
        kisi300mm:{
            skala1cm: neon300mm.skala1cm,
            x : neon300mm.lambda.xArray,
            lambda : neon300mm.lambda.lambdaArray, 
        },
        kisi600mm:{
            skala1cm: neon600mm.skala1cm,
            x : neon600mm.lambda.xArray,
            lambda : neon600mm.lambda.lambdaArray, 
        },
    },
    hidrogen : {
        kisi100mm:{
            skala1cm: hidrogen100mm.skala1cm,
            x : hidrogen100mm.lambda.xArray,
            lambda : hidrogen100mm.lambda.lambdaArray, 
        },
        kisi300mm:{
            skala1cm: hidrogen300mm.skala1cm,
            x : hidrogen300mm.lambda.xArray,
            lambda : hidrogen300mm.lambda.lambdaArray, 
        },
        kisi600mm:{
            skala1cm: hidrogen600mm.skala1cm,
            x : hidrogen600mm.lambda.xArray,
            lambda : hidrogen600mm.lambda.lambdaArray, 
        },
    },         
};

const DataIndexBias ={
    helium : nHelium,
    neon : nNeon,
    hidrogen : nHidrogen ,
}

export {DataKisiMentah,DataSpectrometer,DataKisiMP5,DataIndexBias};

