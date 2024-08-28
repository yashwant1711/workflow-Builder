import React, { useContext, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { CsvDataContext } from "../../Context/CsvDataContext";

function Inputcsv({ id, data }) {
  const { setNodes } = useReactFlow();
  const { csvDatain, error, message, uploaded, handleFileChange } = data;
  // const [show , setShow] = useState(false)
  // console.log(csvDatain);
  const {contextshow} = useContext(CsvDataContext)
  const handelCancel = () => {
    return  setNodes((nodes) => nodes.filter((node) => node.id !== id))
  }

  return (
    (contextshow &&(
   <div className="border-2 border-blue-600 text-white w-[200px] bg-[#1B1F3B] rounded-md shadow-lg">
      <div className="flex justify-between items-center p-2 text-sm border-b-2 border-gray-700">
        <p>File</p>
        <button
          className="text-red-400 hover:text-white"
          onClick={handelCancel}
        >
          X
        </button>
      </div>
      {!uploaded && (
        <div className="flex justify-between items-center text-xs p-2">
          <h5>Choose file:</h5>
          <div className="border-2 border-blue-900 p-1 hover:bg-blue-600 rounded-md cursor-pointer">
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file">Select files here</label>
          </div>
        </div>
      )}
      <div className="text-xs text-center text-gray-400 mt-2">
        Allowed file type is CSV
      </div>
      {error && (
        <p className="p-2 text-xs text-red-600 text-center font-bold">{error}</p>
      )}
      {message && (
        <p className="p-2 text-xs text-blue-600 text-center font-bold">File uploaded</p>
      )}
      <Handle type="source" position={Position.Right} style={{ background: "#6E85B7" }} />
    </div>
  )))
}

export default Inputcsv;
