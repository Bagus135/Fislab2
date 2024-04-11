import DataMP1 from './dataMP1'
function gcd(numbers) {
    let result = 0;
    for (let i = 1; i < numbers.length; i++) {
        result = gcdTwoNumbers(result, numbers[i]);
    }
    return result;
}

function gcdTwoNumbers(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}



const dataFloating = DataMP1.dataFloating.oilCharge
const dataFallRaise = DataMP1.dataFallRaise

// menghitung besar muatan dengan menggunakan fpb
const chargeFloating = gcd(dataFloating);
const chargeFallRaise = gcd(dataFallRaise);

console.log(chargeFloating)

//Hitung n muatan
function amountCharge(){
    const nChargeFloating = [];
    const nChargeFallRaise = [];
    let a =0 ; let b = 0;
    for(let i = 0; i <dataFloating; i++){
        a = dataFloating[i]/chargeFloating;
        console.log(a)
        nChargeFloating.push(a);
        b = dataFallRaise[i]/chargeFallRaise;
        nChargeFallRaise.push(b);
    }
    return {nChargeFallRaise, nChargeFloating}
};

const AmountCharge = amountCharge()

export{AmountCharge}

