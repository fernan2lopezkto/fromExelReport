import React from "react";
import ResponsiveAppBar from "../components/Apbar";
import { Container, Typography } from "@mui/material";

function PageAjustes() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h1" textAlign="center">
          Ajustes
        </Typography>
      </Container>
    </>
  );
}

export default PageAjustes;
