import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import Table from './Components/Layout/Table/Table'
import Blockbutton from './Components/Layout/Block/Blockbutton'
import Flow from './Reactflow/Flow'
import useCsvData from "./Customhooks/UseCsvData"

function App() {
 const {csvData, handleFileChange, uploded, message, error} = useCsvData();
 console.log(csvData)
  return (
    <div >
      <Navbar/>
      <Blockbutton/>
      <Flow data={csvData} uploded={uploded} handleFileChange={handleFileChange} message={message} error={error}/>
      <Table data={csvData}/>
    </div>
  )
}

export default App
