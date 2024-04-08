import { Margin } from "@mui/icons-material";
import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/Apbar";

function PageAyuda() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          marginBottom={4}
          marginTop={4}
        >
          <Grid item xs={12} alignItems="center">
            <Typography variant="h1" component="h1" textAlign="center">
              Ayuda
            </Typography>
            <Typography variant="h6" component="p" textAlign="center">
              Pagina de ayuda al Usuario
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} alignItems="center">
            <Typography variant="h4" component="h3" textAlign="center">
              Ayuda
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PageAyuda;
