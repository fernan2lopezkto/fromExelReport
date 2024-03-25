import * as XLSX from 'xlsx';

function ExcelReader() {
  const handleExcelFile = (file) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      
      const worksheet = workbook.Sheets['DEPO'];
      
      const cellRange = XLSX.utils.decode_range(worksheet['!ref']);
      const sheetData = [];
      
      for (let R = cellRange.s.r; R <= cellRange.e.r; ++R) {
        const row = [];
        for (let C = cellRange.s.c; C <= cellRange.e.c; ++C) {
          const cellAddress = { c: C, r: R };
          const cellRef = XLSX.utils.encode_cell(cellAddress);
          const cell = worksheet[cellRef];
          row.push(cell ? cell.v : undefined);
        }
        sheetData.push(row);
      }
      
      console.log("Datos de la hoja DEPO:", sheetData);
    };
    
    reader.readAsBinaryString(file);
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleExcelFile(file);
  };
  
  return (
    <div>
        <h1>datos en toda la hoja</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default ExcelReader;
