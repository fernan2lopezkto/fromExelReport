import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../components/Apbar";

function HomePage() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            <Typography variant="h1" textAlign="center">
              Home
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="outlined" component={Link} to="/fromExelReport/app">
                APP
              </Button>
              <Button variant="outlined" component={Link} to="/fromExelReport/ajustes">
                Ajustes
              </Button>
              <Button variant="outlined" component={Link} to="/fromExelReport/ayuda">
                Ayuda
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
