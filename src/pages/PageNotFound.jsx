import { Container, Typography } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/Apbar";

function PageNotFound() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h1" textAlign="center">PageError</Typography>
      </Container>
    </>
  );
}

export default PageNotFound;
