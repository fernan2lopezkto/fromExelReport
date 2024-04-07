import React from "react";

import { Grid } from "@mui/material";

import XlsxFromYoutube from "../components/XlsxFromYoutube";

function PageApp() {
  return (
    <>
      <div>PageApp</div>
      <Grid item xs={8}>
        <XlsxFromYoutube />
      </Grid>
    </>
  );
}

export default PageApp;
