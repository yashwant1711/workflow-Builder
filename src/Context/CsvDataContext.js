import React, { createContext, useState } from 'react';

export const CsvDataContext = createContext();

export const CsvDataProvider = ({ children }) => {
  const [csvData, setCsvData] = useState([]);
  const [columnNames, setColumnNames] = useState([]);

  const updateCsvData = (data) => {
    setCsvData(data);
    setColumnNames(data.length > 0 ? Object.keys(data[0]) : []);
  };

  return (
    <CsvDataContext.Provider value={{ csvData, columnNames, updateCsvData }}>
      {children}
    </CsvDataContext.Provider>
  );
};
