import { fizeauFocaultData } from "./dataMP2"

function fizeauFocault(L, n , V_angular){
    const c = 2*L*n*V_angular/ Math.PI
    return c
}

const c = fizeauFocault(fizeauFocaultData.Length,fizeauFocaultData.n,fizeauFocaultData.V_angular);

export {c}