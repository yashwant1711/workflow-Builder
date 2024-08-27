import React, { useState, useContext }  from "react";
import Papa from "papaparse";
import { CsvDataContext } from "../Context/CsvDataContext";


function useCsvData() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);
  const [uploded, setUploded] = useState(false);
  const [csvDatain, setCsvDatain] =useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Clear previous error
    setError("");
    setMessage(false);
    setUploded(false);
    setCsvDatain([]);
    // Check if the file is a CSV
    if (file && (file.type === "text/csv" || file.name.endsWith(".csv"))) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          // console.log(results.data);
          setCsvDatain(results.data);
          setMessage(true);
          setUploded(true);
          return {
            data: results.data,
          };
        },
        error: (error) => {
          console.error("Error parsing CSV:", error.message);
          setError(
            "Error parsing CSV file. Please check the file and try again."
          );
        },
      });
    } else {
      setError("Please upload a valid CSV file.");
    }
  };

  // console.log(csvDatain);
  // sending data to context
  
  // const { updateCsvData } = useContext(CsvDataContext);
  // useEffect(() => {
  //   if (csvDatain.length > 0) {
  //     updateCsvData(csvDatain);
  //   }
  // }, [csvDatain]);

  return {
    error,
    message,
    uploded,
    handleFileChange,
    csvDatain,
  };
}

export default useCsvData;
