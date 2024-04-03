import XlsxFromYoutube from "../components/XlsxFromYoutube";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8} alignItems="center">
            <Typography variant="h1" component="h1">
              Home
            </Typography>
          </Grid>
          <Stack direction="row" spacing={2}>
            <Link to="app">APP</Link>
            <Link to="ajustes">ajustes</Link>
            <Link to="ayuda">ayuda</Link>
          </Stack>
          <Grid item xs={8}>
            <XlsxFromYoutube />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
