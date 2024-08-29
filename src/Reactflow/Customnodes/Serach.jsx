import React, { useState, useEffect, useContext } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { CsvDataContext } from '../../Context/CsvDataContext';

function Search({ id, data }) {
  const { setNodes } = useReactFlow();
  const [searchTerm, setSearchTerm] = useState("");
  const { contextshowsearch, updateContextsearch } = useContext(CsvDataContext);

  useEffect(() => {
    // Log the data structure to understand its shape
    console.log("Data received from node:", data);
  }, [data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (!data.csvData || !searchTerm) {
      console.log("No data or search term is empty");
      return; // Exit if there's no data or search term is empty
    }

    try {
      // Assuming csvData is an array of arrays or objects; adjust as needed
      const allData = Array.isArray(data.csvData) ? data.csvData.flat() : [];

      // Log each chunk to see its structure
      console.log("All Data:", allData);

      const filteredData = allData.filter(row => {
        // Handle rows that are objects and ensure the values exist
        const values = Object.values(row || {});
        console.log("Row values:", values); // Log row values

        // Check if any value includes the search term
        return values.some(value =>
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      // Log the filtered results
      console.log("Filtered Data:", filteredData);

      // Update the node with the filtered results
      setNodes(nodes =>
        nodes.map(node =>
          node.id === id
            ? { ...node, data: { ...node.data, filteredData } } // Adding filteredData to node's data
            : node
        )
      );
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  const handelCancel = () => {
    setNodes(nodes => nodes.filter(node => node.id !== id));
    updateContextsearch((prev) => !prev);
  }

  return (
    (contextshowsearch && (        
    <div className="border-2 border-blue-600 text-white w-[200px] bg-[#1B1F3B] rounded-md shadow-lg">
      <div className="flex justify-between items-center p-2 text-sm border-b-2 border-gray-700">
        <p>Search</p>
        <button
          className="text-red-400 hover:text-white"
          onClick={handelCancel}
        >
          X
        </button>
      </div>
      <div className="flex flex-col p-3">
        <p className="text-xs">Search Here</p>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-gray-600 border border-gray-500 text-white text-xs mt-1 rounded-md p-1"
          placeholder="Type to search..."
        />
        <button
          onClick={handleSearch}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-xs rounded-md p-1"
        >
          Search
        </button>
      </div>
      <Handle type="target" position={Position.Left} style={{ background: "#6E85B7" }} />
    </div>
    ))
)
}

export default Search;
