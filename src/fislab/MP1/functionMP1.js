 const variable = {
     phi : Math.PI,
     eta: 1.81*(10**-5),
     distance : 0.001,
     oilDensity :875.3,
     airDensity : 1.29,
     g : 9.8,  
    };
    
    console.log(variable)


 function FloatingEquation(Voltage, fallVelocity){
    let equation1 = 6*variable.phi*variable.distance*variable.eta*fallVelocity/Voltage
    let equation2 = 9*variable.eta*fallVelocity
    let equation3= 2*(variable.oilDensity - variable.airDensity)*variable.g;
    let equation4 = (equation2/equation3)**0.5;
    let oilCharge = equation1*equation4*10**19;
    return oilCharge
 }

function FallRaiseEquation(Voltage, fallVelocity, raiseVelocity){
    let equation1 = (fallVelocity + raiseVelocity)*18*variable.phi*variable.distance/Voltage
    let equation2=(fallVelocity/(2*(variable.oilDensity - variable.airDensity)*variable.g))**0.5
    let oilCharge = equation1*equation2*(variable.eta**1.5)*(10**19);
    return oilCharge
}

function FloatingMethod(Data){
    const oilCharge = [];
    const pengulangan = [];
    let Charge = 0;
    let fallVelocity =0;
    for (let i = 0; i < Data.Voltage.length; i++){
       fallVelocity = variable.distance /Data.fallTime[i];
       Charge = FloatingEquation(Data.Voltage[i], fallVelocity);
       oilCharge.push(Charge);
       pengulangan.push(i+1);
    }
    console.log(typeof Charge)
    return {oilCharge, pengulangan};
 }

 function FallRaiseMethod(Data){
    const oilCharge = [];
    let fallVelocity = 0; let raiseVelocity = 0;
    let Charge = 0;
    for (let i = 0; i < Data.Voltage.length; i++){
       fallVelocity = variable.distance /Data.fallTime[i];
       raiseVelocity = variable.distance /Data.raiseTime[i]
       Charge = FallRaiseEquation(Data.Voltage[i], fallVelocity, raiseVelocity);
       oilCharge.push(Charge);
    }
    return oilCharge;
 }

export{FallRaiseMethod,FloatingMethod}