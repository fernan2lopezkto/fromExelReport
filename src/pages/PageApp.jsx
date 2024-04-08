import React from "react";

import { Container, Grid, Typography } from "@mui/material";

import XlsxFromYoutube from "../components/XlsxFromYoutube";
import ResponsiveAppBar from "../components/Apbar";

function PageApp() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h1" textAlign="center">
          APP
        </Typography>
        <Grid item xs={8}>
          <XlsxFromYoutube />
        </Grid>
      </Container>
    </>
  );
}

export default PageApp;
