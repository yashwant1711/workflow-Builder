import React from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import useCsvData from "../../Customhooks/UseCsvData";



function Inputcsv({ id }) {
  const { setNodes } = useReactFlow();

  const {error,
    message,
    uploded,
    handleFileChange,} = useCsvData();
 
  return (
    <>
    <div className="border-2 border-purple-900 text-white w-[150px] bg-[#070F2B]">
      <div className="flex justify-between items-center p-2 text-[10px] border-b-2 border-gray-500">
        <p>File</p>
        <button className="text-gray-700  hover:text-white" onClick={() => setNodes((node) => node.filter((node) => node.id !== id))}>X</button>
      </div>
      {uploded ? null : 
      <div className="flex justify-between items-center text-[10px] p-2">
        <h5>choose file :</h5>  
        <div className="border-2 border-blue-900 p-1 hover:bg-purple-900">
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            // accept=".csv"
            onChange={handleFileChange}
          />
          <label htmlFor="file">select files here</label>
        </div>
      </div>
      }
    <div className="text-[8px] text-center text-gray-400">Allowed file type is csv</div>


      {error && <p  className=" p-2 text-[10px] text-red-800 text-center font-bold">{error}</p>}
      {message && <p className=" p-2 text-[10px] text-purple-900 text-center font-bold">File Uploaded </p>}
      <Handle type="source" position={Position.Right} key={id}/>
    </div>
    </>
  );
}

export default Inputcsv;
