import XlsxFromYoutube from "../components/XlsxFromYoutube";
import { Container, Grid, Typography } from "@mui/material";

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
          <Grid item xs={8}>
            <XlsxFromYoutube />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
