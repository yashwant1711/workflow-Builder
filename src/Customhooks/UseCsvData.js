import React from "react";
import Papa from "papaparse";

function useCsvData() {
    const [error, setError] = React.useState('');
    const [message, setMessage] = React.useState(false);
    const [uploded, setUploded] = React.useState(false);
    // const [csvData, setCsvData] = React.useState([]);
  
    let data = []
       const handleFileChange = (event) => {
        const file = event.target.files[0];
      
        // Clear previous error
        setError('');
        setMessage(false);
        setUploded(false);
        data = []
    
        // Check if the file is a CSV
        if (file && (file.type === 'text/csv' || file.name.endsWith('.csv'))) {
          Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
            //   console.log(results.data);
            data = results.data
            console.log(data)
              setMessage(true);
              setUploded(true);
              return {
                data: results.data,}
            },
            error: (error) => {
              console.error('Error parsing CSV:', error.message);
              setError('Error parsing CSV file. Please check the file and try again.');
            },
          });
        } else {
          setError('Please upload a valid CSV file.');
        }
}
return {
  error,
  message,
  uploded,
  handleFileChange,
  data
}
}

export default useCsvData;
