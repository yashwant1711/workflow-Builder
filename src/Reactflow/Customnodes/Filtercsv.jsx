import React from "react";
import { Handle, useReactFlow, Position } from "reactflow";

function Filtercsv({ id }) {
  const { setNodes } = useReactFlow();
  return (
    <div className="border-2 border-purple-900 text-white w-[150px] bg-[#070F2B]" >
      <div className="flex justify-between items-center p-1 text-[10px] border-b-2 border-gray-500">
        <p>Filter</p>
        <button
          className="text-gray-700  hover:text-white"
          onClick={() =>
            setNodes((node) => node.filter((node) => node.id !== id))
          }
        >
          X
        </button>
      </div>
      <div className="flex flex-col p-2">
        <p className="text-[8px] flex">Column Name :</p>
        <select
          id="countries"
          className="bg-gray-500 border border-gray-300 text-gray-900 text-[12px]"
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>Connect to CSV</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="flex flex-col p-2 text-[14px]">
        <p className="text-[8px] flex">Condition :</p>
        <select
          id="countries"
          className="bg-gray-500 border border-gray-300 text-gray-900 text-[13px]"
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>Connect to CSV</option>
          <option value="US">Number equals</option>
          <option value="CA">Number is Greater than</option>
          <option value="FR">Number is Grater than or equal</option>
          <option value="DE">Number is Less than</option>
          <option value="DE">Number is Less than or equals</option>
        </select>
        <input type="text" className="bg-gray-500 border border-gray-300 text-gray-900 text-[13px] my-1" />
        <button className="text-gray-400  hover:text-white">Run</button>
      </div>
      <Handle type="target" position={Position.Left}  />
      <Handle type="source" position={Position.Right} />

    </div>
  );
}

export default Filtercsv;
