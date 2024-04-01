import { Container, Typography, Grid } from "@mui/material";
import React from "react";

function PageAyuda() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8} alignItems="center">
          <Typography variant="h1" component="h1">
            Ayuda
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PageAyuda;
