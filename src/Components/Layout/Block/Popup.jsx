import React, {useContext} from 'react';
import { CsvDataContext } from '../../../Context/CsvDataContext';

function Popup({ onClose }) {
    const {updateContextshow, updateContextfilter, updateContextsort, updateContextsearch } = useContext(CsvDataContext)
    const handelShow = (id) => {
     return () => {
         if(id === 'input'){
            updateContextshow((prev) => !prev)
         }
        //  console.log(updateContextshow(true))
        if(id === 'filter'){
          updateContextfilter((prev) => !prev)
       }
       if(id === 'sort'){
        updateContextsort((prev) => !prev)
       }

       if(id === 'search'){
        updateContextsearch((prev) => !prev)
     }
    }
    }
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20'
      onClick={onClose} // Close the popup when clicking outside
    >
      <div
        className='bg-[#1B1F3B] text-white p-4 rounded-lg shadow-lg w-[300px]'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h3 className='text-lg font-bold mb-2'>Select Node Type</h3>
        <div className='flex flex-col space-y-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2' id='input' onClick={handelShow('input')}>Add Data Node</button>
          <button className='bg-green-500 hover:bg-green-700 text-white rounded-md p-2' id='sort' onClick={handelShow('sort')}>Add Sort Node</button>
          <button className='bg-red-500 hover:bg-red-700 text-white rounded-md p-2' id='filter' onClick={handelShow('filter')}>Add Filter Node</button>
          <button className='bg-yellow-500 hover:bg-yellow-700 text-white rounded-md p-2' id='search' onClick={handelShow('search')}>Add Search Node</button>
        </div>
        <div className='mt-4 flex justify-end'>
          <button
            className='bg-gray-500 hover:bg-gray-700 text-white rounded-md px-4 py-2'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;


