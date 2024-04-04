import { Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8} >
            <Typography variant="h1" textAlign="center">
              Home
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Link to="app">APP</Link>
              <Link to="ajustes">ajustes</Link>
              <Link to="ayuda">ayuda</Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
