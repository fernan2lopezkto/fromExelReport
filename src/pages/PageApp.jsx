import React from "react";

import { useState } from "react";
import * as XLSX from "xlsx";

import { Container, Grid, Typography } from "@mui/material";

import XlsxFromYoutube from "../components/XlsxFromYoutube";
import ResponsiveAppBar from "../components/Apbar";

function PageApp() {
  const [data, setData] = useState([]);
  const [sheetName, setSheetName] = useState("No hay ningun archivo cargado");

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
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h1" textAlign="center" sx={{ pb: 4, pt: 4 }}>
          APP
        </Typography>

        <Typography variant="h2">{sheetName}</Typography>

        <input type="file" onChange={handleFileUpload} />
        <Grid item xs={8} sx={{ pb: 4, pt: 4 }}>
          <XlsxFromYoutube data={data} />
        </Grid>
      </Container>
    </>
  );
}

export default PageApp;
