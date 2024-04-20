import { fizeauFocaultData } from "./dataMP2"

function fizeauFocault(L, n , V_angular){
    const c = 2*L*n*V_angular/ Math.PI
    return c
}

const c = fizeauFocault(fizeauFocaultData.Length[0],fizeauFocaultData.n[0],fizeauFocaultData.V_angular[0]);
const c2 = fizeauFocault(fizeauFocaultData.Length[1],fizeauFocaultData.n[1],fizeauFocaultData.V_angular[1])

export {c, c2}