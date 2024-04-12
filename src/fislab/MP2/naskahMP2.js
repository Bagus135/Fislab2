import {c} from "./fizeauFocault";
import { MathJax } from "better-react-mathjax";

function Header(){
    return(
        <h1 className="Header">SPECIAL RELATIVITY AND FIZEAU-FOCAULT EXPERIMENT</h1>
    )
}

function Opening(){
    return(
        <div className="Opening">
            <p>Relativitas khusus merupakan sebuah konsep fisika yang menjelaskan bahwa segala sesuatu itu relatif terhadap sudut pandang seorang pengamat. Teori relativitas dikemukakan oleh Albert Einstein. Einstein menguraikan bahwa prinsip-prinsip fisika dan kecepatan cahaya bersifat absolut, sedangkan ruang dan waktu bersifat relatif. Selain itu, jika sebuah benda bergerak dengan mendekati kecepatan cahaya, maka benda tersebut akan mengalami perubahan besaran fisika lainnya seperti dilatasi waktu dan kontraksi panjang.Dilatasi waktu dan kontraksi panjang terjadi ketika terdapat dua kerangka acuan yang bergerak relatif satu sama lain dengan kecepatan yang berbeda. Pengamat pada masing-masing kerangka acuan akan merasakan jarak dan waktu tempuh yang berbeda. Dilatasi waktu dan kontraksi panjang akan benar-benar terasa apabila kerangka acuan bergerak mendekati kecepatan cahaya. Semakin cepat medekati kecepatan cahaya, maka jarak yang ditempuh akan semakin pendek dan waktu yang ditempuh semakin cepat. </p>
            <p>     Teori relativitas khusus ini didukung dengan keberadaan dari muon. Partikel muon ini dihasilkan melalui tumbukan proton matahari atau tumbukkan dengan sinar kosmik yang memiliki energi kinetik yang sangat tinggi dengan massa mereka yang relatif kecil, hal inilah yang membuat partikel muon dapat bergerak gengan kecepatan mendekati kecepatan cahaya hingga 0,9c. Muon memiliki waktu hidup yang sangat singkat hanya sebesar 2,2 mikrodetik. Jika dihitung secara matematis jarak yang ditempuh muon selama waktu hidupnya adalah sebesar 600 meter. Jarak 600 meter tidak mungkin besar jarak dari matahari sampai ke permukaan bumi. Namun terdapat partikel muon dapat ditemukan di permukaan bumi, hal ini memungkinkan jika konsep relativitas khusus berlaku. Partikel muon yang bergerak`mendekati kecepatan cahaya akan mengalami dilatasi waktu dan kontraksi panjang. Hal ini menyebabkan partikel muon akan menempuh jarak yang lebih jauh dan waktu yang lebih lama berdasarkan pada pengamat yang diam. Muon dapat dideteksi keberadaannya dengan menggunakan suatu alat yang dinamakan RadEye Radiation Detector. Dengan menggunakan alat tersebut, dilakukan pengukuran intensitas muon terhadap ketinggian di Departemen Fisika ITS. Hasil pengukuran tersebut terdapat pada tabel berikut ini</p>
        </div>
    )
}

function MuonScript(){
    return(
        <div className="MuonScript">
            <p> Dari hasil data tersebut dapat diplot sebuah grafik yang menunjukan hubungan antara intensitas muon terhadap ketinggian berdasarkan tinggi lantai di Departemen Fisika ITS</p>
        </div>
    )
}


function FizeauFocaultScript(){
    return(
        <div className="fizeauScript">
            <MathJax>
            <p>Selain itu juga dilakukan sebuah simulasi percobaan fizeau-focault yang bertujuan untuk menentukan besarnya kecepatan cahaya. Kecepatan cahaya dapat dihitung pada percobaaan fizeau-focault dengan menggunakan persamaan berikut ini</p>
            <span>{'\\(c = \\frac{2 L n \\omega_{block}}{\\phi}\\)'}</span>
            <p>Dengan {'\\(L\\)'} adalah jarak gigi roda ke cermin, {'\\(n\\)'} adalah banyaknya gigi pada roda {'\\(\\omega_{block}\\)'} adalah kecepatan sudut dari roda gigi. Didapatkan hasil simulasi yaitu {'\\(L\\)'} sebesar 8633 meter, {'\\(n\\)'} sebesar 720 {'\\(\\omega_{block}\\)'} sebesar 75 rad/s. Maka kecepatan cahaya dapat diketahui dengan menggunakan perhitungan sebagai berikut</p>
            <p>{'\\(c = \\frac{2 L n \\omega_{block} }{\\phi}\\)'}</p>
            <p>{`\\(c = \\frac{2 . 8633 . 720 . 75}{3.14}\\)`}</p>
            <p>{`\\(c = ${c} m/s\\)`}</p>
            <p>{`\\(c = 2.967 . 10^8 m/s\\)`}</p>
            </MathJax>
        </div>    
    )
}

export{Header,Opening,MuonScript,FizeauFocaultScript}