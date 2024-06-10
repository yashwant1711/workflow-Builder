import React from "react";
import useCsvData from "../../../Customhooks/UseCsvData";

function Table() {
  const {csvData} = useCsvData();

  console.log(csvData)
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
