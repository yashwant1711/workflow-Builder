import React, { useState, useEffect } from "react";
import { Handle, Position, useReactFlow } from "reactflow";

function Sortcsv({ id, data }) {
  const { setNodes } = useReactFlow();
  const [selectedColumn, setSelectedColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (selectedColumn) {
      sortData(selectedColumn, sortOrder);
    }
  }, [selectedColumn, sortOrder]);

  const handleColumnClick = (columnName) => {
    setSelectedColumn(columnName);
  };

  const handleOrderChange = (order) => {
    setSortOrder(order);
  };

  const sortData = (columnName, order) => {
    let allData = data.csvData.flatMap((chunk) => chunk);

    allData.sort((a, b) => {
      if (a[columnName] < b[columnName]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[columnName] > b[columnName]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });

    console.log(allData);

    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, selectedColumn, sortedData: allData } }
          : node
      )
    );
  };

  return (
    <div className="border-2 border-blue-600 text-white w-[200px] bg-[#1B1F3B] rounded-md shadow-lg">
      <div className="flex justify-between items-center p-2 text-sm border-b-2 border-gray-700">
        <p>Sort</p>
        <button
          className="text-red-400 hover:text-white"
          onClick={() => setNodes((nodes) => nodes.filter((node) => node.id !== id))}
        >
          X
        </button>
      </div>
      <div className="flex flex-col p-3">
        <p className="text-xs">Column Name:</p>
        <select
          className="bg-gray-600 border border-gray-500 text-white text-xs mt-1 rounded-md p-1"
          defaultValue="DEFAULT"
          onChange={(e) => handleColumnClick(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            Select a column
          </option>
          {data.columnNames?.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>
        <p className="text-xs mt-2">Order:</p>
        <select
          className="bg-gray-600 border border-gray-500 text-white text-xs mt-1 rounded-md p-1"
          onChange={(e) => handleOrderChange(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <Handle type="target" position={Position.Left} style={{ background: "#6E85B7" }} />
      <Handle type="source" position={Position.Right} style={{ background: "#6E85B7" }} />
    </div>
  );
}

export default Sortcsv;
