import React from "react";
import { CsvDataContext } from "../../../Context/CsvDataContext";


function Table() {
  const { selectedColumnData , csvData, allSortedData } = React.useContext(CsvDataContext);

  // console.log(selectedColumnData);
  // console.log(csvData);
  // console.log(allSortedData)
  return (
    <div className="bg-[#070F2B] h-[25vh]  border-2 border-gray-500 text-white">
      <div className="p-2 border-b-2 border-gray-500">
        <h1>Output</h1>
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Table;
