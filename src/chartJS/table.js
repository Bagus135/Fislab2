// Ini adalah file template untuk membuat tabel di HTML 
function Table(Header, Data,) {
    mapingHeader = Header.map((value,index)=>{
        return(<th key={index} >{value}</th>)
    });
    mapingData = Data.map((row,index)=>{
       mapingRow = row.map((value,index) =>{
        return (
            <td key={index}>{value}</td>
        )
       })
       return (
        <tr>{mapingRow}</tr>
       )
    })
return(
    <table>
        <tr>{mapingHeader}</tr>
        {mapingData}
    </table>
)
}

export default Table