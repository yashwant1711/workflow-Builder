import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import Table from './Components/Layout/Table/Table'
import Blockbutton from './Components/Layout/Block/Blockbutton'
import Flow from './Reactflow/Flow'

function App() {
  return (
    <div >
      <Navbar/>
      <Blockbutton/>
      <Flow/>
     <Table/>
    </div>
  )
}

export default App
