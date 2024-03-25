import React from 'react';
import * as XLSX from 'xlsx';

class ExcelReaderCell extends React.Component {
  handleExcelFile = (file) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      
      const worksheet = workbook.Sheets['DEPO'];
      const cellValue = worksheet['H1'].v;
      
      console.log("Valor de la celda H1 en la hoja DEPO:", cellValue);
    };
    
    reader.readAsBinaryString(file);
  };
  
  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.handleExcelFile(file);
  };
  
  render() {
    return (
      <div>
        <h1>datos en la celda H1</h1>
        <input type="file" onChange={this.handleFileChange} />
      </div>
    );
  }
}

export default ExcelReaderCell;
