import Execution from "./functionW2";

// Data mentah
const DataMentahW2 = {
    beban1 : {
        udara : {
            A :[7.5, 7.4, 7, 7.3, 7.2, 7,], // cm
            t :[0, 0.85, 1.72, 2.53, 3.41, 4.22,], //s
            m : 0.171, // kg
            k : 10.474, // N/m
            r: 0.014, //m
        }, 
        air : {
            A :[10, 5.5, 3.6, 2.8, 2.3, 2], // cm
            t :[0, 1.03, 1.8, 2.69, 3.57, 4.42], //s
            m : 0.171, // kg
            k : 10.474, // N/m 
            r: 0.014, //cm
        },
    },
    beban2 : {
        udara : {
            A :[11.3, 11.5, 11.4, 11.3, 11, 11.2], //cm
            t :[0, 1.02, 2.01, 2.97, 3.96, 4.91], //s
            m : 0.233 , // kg
            k : 10.474,  // N/m  
            r: 0.014, //m
        },
        air : {
            A :[11.3, 5.3, 3.5, 2.4, 1.9, 1.4], // cm
            t :[0, 1.1, 2.1, 3.12, 4.13, 5.12], // s
            m : 0.233, // kg
            k : 10.474, // N/m 
            r: 0.014, //m
        },
    },
};

// eksekusi Data
const DataUdara1 = Execution(DataMentahW2.beban1.udara);
const DataAir1 = Execution(DataMentahW2.beban1.air);
const DataUdara2= Execution(DataMentahW2.beban2.udara);
const DataAir2 = Execution(DataMentahW2.beban2.air);


//Data Pengolahan setelah di eksekusi
const DataW2 = {
    beban1 : {
        udara: {
            Amplitudo : DataUdara1.data.dataAmplitudo,
            expRegresi : DataUdara1.expRegresi,
            viscosity : DataUdara1.viscosity,
            angularFreq : DataUdara1.angularFrequency,
            regPlot : DataUdara1.plot.regPlot,
            wavePlot :DataUdara1.plot.wavePlot
        },
        air: {
            Amplitudo : DataAir1.data.dataAmplitudo,
            expRegresi : DataAir1.expRegresi,
            viscosity : DataAir1.viscosity,
            angularFreq : DataAir1.angularFrequency,
            regPlot : DataAir1.plot.regPlot,
            wavePlot :DataAir1.plot.wavePlot
        },
    },
    beban2 : {
        udara: {
            Amplitudo : DataUdara2.data.dataAmplitudo,
            expRegresi : DataUdara2.expRegresi,
            viscosity : DataUdara2.viscosity,
            angularFreq : DataUdara2.angularFrequency,
            regPlot : DataUdara2.plot.regPlot,
            wavePlot :DataUdara2.plot.wavePlot
        },
        air: {
            Amplitudo : DataAir2.data.dataAmplitudo,
            expRegresi : DataAir2.expRegresi,
            viscosity : DataAir2.viscosity,
            angularFreq : DataAir2.angularFrequency,
            regPlot : DataAir2.plot.regPlot,
            wavePlot :DataAir2.plot.wavePlot
        },
    }
};

export {DataMentahW2, DataW2}