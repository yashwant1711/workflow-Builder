import React, { useState, useEffect, useContext } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { CsvDataContext } from "../../Context/CsvDataContext";

function Sortcsv({ id, data }) {
  const { setNodes } = useReactFlow();
  const [selectedColumn, setSelectedColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const { updateAllSortedData, contextshowsort ,updateContextsort  } = useContext(CsvDataContext);

  useEffect(() => {
    // Trigger sorting whenever the selected column or sort order changes
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
    try {
      // Flatten the CSV data into a single array
      let allData = data.csvData.flatMap((chunk) => chunk);

      // Sort the data based on the selected column and order
      allData.sort((a, b) => {
        // Handle undefined, null, or missing values
        const aValue = a[columnName] !== undefined && a[columnName] !== null ? a[columnName] : "";
        const bValue = b[columnName] !== undefined && b[columnName] !== null ? b[columnName] : "";

        // Compare values based on their type (number or string)
        if (typeof aValue === "number" && typeof bValue === "number") {
          return order === "asc" ? aValue - bValue : bValue - aValue;
        } else {
          // Default to string comparison using localeCompare with safety checks
          return order === "asc"
            ? String(aValue).localeCompare(String(bValue))
            : String(bValue).localeCompare(String(aValue));
        }
      });

      // Update the sorted data globally if needed
      updateAllSortedData(allData); // Uncomment if global update is required
      // console.log(allData)

      // Update the node data with the sorted results
      setNodes((nodes) =>
        nodes.map((node) =>
          node.id === id
            ? { ...node, data: { ...node.data, selectedColumn, sortedData: allData } }
            : node
        )
      );
    } catch (error) {
      console.error("Error sorting data:", error);
    }
  };

  const handelCancel = () => {
    updateContextsort(false);
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
  };

  return (
    (contextshowsort &&
    <div className="border-2 border-blue-600 text-white w-[200px] bg-[#1B1F3B] rounded-md shadow-lg">
      <div className="flex justify-between items-center p-2 text-sm border-b-2 border-gray-700">
        <p>Sort</p>
        <button
          className="text-red-400 hover:text-white"
          onClick={handelCancel}
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
          value={sortOrder}
          onChange={(e) => handleOrderChange(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <Handle type="target" position={Position.Left} style={{ background: "#6E85B7" }} id="a"/>
      {/* <Handle type="source" position={Position.Right} style={{ background: "#6E85B7" }} id="b" /> */}

    </div>
  ));
}

export default Sortcsv;

