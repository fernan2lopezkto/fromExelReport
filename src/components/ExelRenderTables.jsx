import React from 'react';
import * as XLSX from 'xlsx';

function ExcelReaderTables() {
  const handleExcelFile = (file) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      
      const worksheet = workbook.Sheets['DEPO'];
      
      const tables = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      console.log("Tablas en la hoja DEPO:", tables);
    };
    
    reader.readAsBinaryString(file);
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleExcelFile(file);
  };
  
  return (
    <div>
        <h1>Tablas en Depo</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default ExcelReaderTables;
