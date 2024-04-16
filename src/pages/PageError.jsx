import React from "react";
import ResponsiveAppBar from "../components/Apbar";
import { Container, Typography } from "@mui/material";

function PageError() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h1" textAlign="center">PageError</Typography>
      </Container>
    </>
  );
}

export default PageError;
