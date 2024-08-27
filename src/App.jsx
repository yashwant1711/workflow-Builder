import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import Table from './Components/Layout/Table/Table'
import Blockbutton from './Components/Layout/Block/Blockbutton'
import Flow from './Reactflow/Flow'
import useCsvData from "./Customhooks/UseCsvData"
import { CsvDataProvider } from './Context/CsvDataContext'

function App() {
 const {csvDatain, uploded, handleFileChange, message, error} = useCsvData();
//  console.log(csvData)
  return (
    <div >
      <CsvDataProvider>
      <Navbar/>
      <Blockbutton/>
      <Flow data={csvDatain} uploded={uploded} handleFileChange={handleFileChange} message={message} error={error}/>
      <Table/>
      </CsvDataProvider>
    </div>
  )
}

export default App


// import React from 'react'
// import Navbar from './Components/Layout/Navbar/Navbar'
// import Table from './Components/Layout/Table/Table'
// import Blockbutton from './Components/Layout/Block/Blockbutton'
// import Flow from './Reactflow/Flow'
// import { CsvProvider } from './Context/Csvcontex'

// function App() {
//   return (
//     <CsvProvider>
//       <div>
//         <Navbar/>
//         <Blockbutton/>
//         <Flow />
//         <Table />
//       </div>
//     </CsvProvider>
//   )
// }

// export default App