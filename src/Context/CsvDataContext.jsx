import React, { createContext, useState } from 'react';

export const CsvDataContext = createContext();

 export const CsvDataProvider = ({ children }) => {
  const [csvData, setCsvData] = useState([]);
  const [columnNames, setColumnNames] = useState([]);
  const [selectedColumnData, setSelectedColumnData] = useState([]);
  const [allSortedData, setAllSortedData] = useState([]);

  const updateCsvData = (data) => {
    setCsvData(data);
    setColumnNames(data.length > 0 ? Object.keys(data[0]) : []);
  };

  const updateSelectedColumnData = (data) => {
    setSelectedColumnData(data);
  };

  const updateAllSortedData = (data) => {
    setAllSortedData(data);
  };

  return (
    <CsvDataContext.Provider 
      value={{  
        updateCsvData, 
        updateSelectedColumnData, 
        updateAllSortedData,
        csvData,
        columnNames,
        selectedColumnData,
        allSortedData 
      }}
    >
      {children}
    </CsvDataContext.Provider>
  );
};

