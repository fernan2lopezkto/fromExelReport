import { useState } from "react";
import * as XLSX from "xlsx";
import Container from "@mui/material/Container";
import { Table, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

function XlsxFromYoutube() {
  const [data, setData] = useState([]);
  const [sheetName, setSheetName] = useState("No sheet name Up");

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      console.log(sheet);
      setSheetName(sheetName);
      setData(parsedData);
    };
  };
  console.log(sheetName);
  console.log(data[0]);
  return (
    <div>
      <Container>
        <Typography variant="h2">{sheetName}</Typography>

        <input type="file" onChange={handleFileUpload} />

        {data.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {Object.values(data[0]).map((value) => (
                    <TableCell key={value}>{value}</TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.name}>
                    {Object.values(row).map((value) => (
                      <TableCell key={value}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  );
}

export default XlsxFromYoutube;
