import { RefractionIndex, Difraction, DiameterString,lambdaFinal, } from "./functionW1";

const DataSnellius = {
    theta1 : [10,20,30,40,50,60],
    theta2 : [6,10,17,23,27,31],
}

const DataRefraksi = {
    x100mm : [1.6,3.225,5.2,6.7,8.5,10.2],
    x300mm : [4.95,10.65],
    x600mm : [9.75],
};

const DataSenar = {
    x : [2,3.3,4.5,5.7,7,8.2,9.7,10.9,12.2,13.7]
}

const DataW1 = {
    IndexBias : RefractionIndex(DataSnellius.theta1, DataSnellius.theta2),
    Lambda : {
        _100mm : Difraction((2/100)/1000, DataRefraksi.x100mm),
        _300mm : Difraction((2/300)/1000, DataRefraksi.x300mm),
        _600mm : Difraction((2/600)/1000, DataRefraksi.x600mm),
    },
    DiameterSenar : DiameterString(DataSenar.x), 
}

const LambdaFinal = lambdaFinal(DataW1.Lambda._100mm.lambdas,DataW1.Lambda._300mm.lambdas,DataW1.Lambda._600mm.lambdas)

export {DataW1, DataRefraksi,DataSenar,DataSnellius, LambdaFinal}