import Plot from "react-plotly.js";


export function Tabel({layout, header,data}){
    let Tabel = [{
        type: 'table',
        header: {
          values: header,
          align: "center",
          line: {width: 1, color: 'black'},
          fill: {color: "grey"},
          font: {family: "Arial", size: 12, color: "white"}
        },
        cells: {
          values: data,
          align: "center",
          line: {color: "black", width: 1},
          font: {family: "Arial", size: 11, color: ["black"]}
        }
        }]
    let layouts = layout
    return(<Plot data={Tabel} layout={layouts}/>)
}
