import { Execution } from "./functionW5";

// DataVariasi merupakan data mentah pada variasi tersebut
// Variasi merupakan data yang sudah diolah pada variasi tersebut
const DataUdara1 ={
    referensi_x : 435,
    referensi_y : 841,
    diameter_x:[158,262,334,496,450,496,540,578,620,656],
    diameter_y : [4,44,60,78,84,92,98,104,112,114],
   }
 const Udara1 = Execution(DataUdara1.referensi_x, DataUdara1.referensi_y,DataUdara1.diameter_x,DataUdara1.diameter_y);
 
 const DataUdara2 ={
    referensi_x : 229,
    referensi_y : 721,
    diameter_x:[184,278,348,386,442,492,528,568,604,638],
    diameter_y : [2,4,4,2,12,16,20,28,34,38],
   }
 const Udara2 = Execution(DataUdara2.referensi_x, DataUdara2.referensi_y,DataUdara2.diameter_x,DataUdara2.diameter_y);
 
 const DataUdara3 ={
    referensi_x : 165,
    referensi_y : 560,
    diameter_x: [224,300,358,410,456,500,538,578,612,644],
    diameter_y : [2,4,2,4,6,4,6,8,8,10],
   }
 const Udara3 = Execution(DataUdara3.referensi_x, DataUdara3.referensi_y,DataUdara3.diameter_x,DataUdara3.diameter_y);
 
 const DataAir ={
    referensi_x : 884,
    referensi_y : 152,
    diameter_x: [196,268,314,362,398,434,470,502,526,554],
    diameter_y : [2,4,6,8,8,8,10,12,12,12],
   }
 const Air = Execution(DataAir.referensi_x, DataAir.referensi_y, DataAir.diameter_x, DataAir.diameter_y);
 
 
 const DataLarutanGula ={
    referensi_x : 349,
    referensi_y : 848,
    diameter_x: [190,270,316,366,414,448,482,514,548,576],
    diameter_y : [4,4,4,6,4,10,6,6,10,10],
   }
 const LarutanGula = Execution(DataLarutanGula.referensi_x, DataLarutanGula.referensi_y, DataLarutanGula.diameter_x, DataLarutanGula.diameter_y);
 
 export {DataUdara1,Udara1,DataUdara2,Udara2,DataUdara3,Udara3,DataAir,Air,DataLarutanGula,LarutanGula};