import { useState } from "react";
import * as XLSX from "xlsx";
import "../styles/example.css"
import StickyHeadTable from "./StickyHeaderTable";
import Container from '@mui/material/Container';

function XlsxFromYoutube() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      console.log(workbook);

      console.log(sheetName);
      console.log(sheet);

      console.log(parsedData);
    };
  };
  return (
    <div>
      <Container maxWidth="sm">
      <h1>XlsxFromYoutube</h1>
      <input type="file" onChange={handleFileUpload} />
      {data.length > 0 && (<StickyHeadTable />)}
      </Container>
    </div>
  );
}

export default XlsxFromYoutube;
