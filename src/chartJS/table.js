// Ini adalah file template untuk membuat tabel di HTML 
function Tabel({Header, Data}) {
   const mapingHeader = Header.map((value,index)=>{
        return(<th key={index} >{value}</th>)
    });
   const mapingData = Data.map((row,index)=>{
       const mapingRow = row.map((value,index) =>{
        return (
            <td key={index}>{value}</td>
        )
       })
       return (
        <tr>{mapingRow}</tr>
       )
    });
return(
    <table>
        <tr>{mapingHeader}</tr>
        {mapingData}
    </table>
)
}

export default Tabel