import { FloatingMethod, FallRaiseMethod } from "./functionMP1"

const DataMentah = {
    Voltage : [588,589,588,585,584,585,584,552,586,588,568,585,583,588,438,574,585,586,585,568],
    raiseTime : [8.933,6.747,3.616,12.27,8.953,8.662,8.798,10.786,11.937,9.152,14.616,13.849,18.816,8.779,14.109,10.012,11.15,11.849,7.52,6.178],
    fallTime : [9.831,7.665,9.64,12.534,3.592,7.636,6.786,6.718,8.823,6.918,9.77,9.593,11.022,12.965,15.436,12.737,7.687,11.905,7.133,6.927],
 }

const DataMP1 = {
    dataFloating : FloatingMethod(DataMentah),
    dataFallRaise : FallRaiseMethod(DataMentah), 
}

export default DataMP1