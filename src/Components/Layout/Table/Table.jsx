import React from "react";
import { CsvDataContext } from "../../../Context/CsvDataContext";

function Table() {
  const { selectedColumnData, csvData, allSortedData } = React.useContext(CsvDataContext);

  // Use a fallback empty array if dataToRender is null or undefined
  const dataToRender = selectedColumnData || csvData || allSortedData || [];
  // console.log(allSortedData)
  
  return (
    <div className="bg-[#070F2B] h-[25vh] border-2 border-gray-500 text-white">
      <div className="p-2 border-b-2 border-gray-500">
        <h1>Output</h1>
      </div>
      <div className="overflow-y-scroll h-[20vh] p-2">
        <table className="w-full text-left">
          <thead>
            <tr>
              {dataToRender.length > 0 && Object.keys(dataToRender[0]).map((header, index) => (
                <th key={index} className="border-b-2 border-gray-500 p-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataToRender.length > 0 ? (
              dataToRender.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex} className="border-b border-gray-500 p-2">{value}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={dataToRender[0] ? Object.keys(dataToRender[0]).length : 1} className="p-2 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

