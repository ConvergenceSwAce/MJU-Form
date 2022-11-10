import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import Header from "../components/Header";
import Background from "../components/Background";
import Article from "../components/Article";

function Main() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#005cb8",
      },
      secondary: {
        main: "#051c48",
      },
      header: {
        main: "#ffffff",
      },
      icon: {
        main: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: "'Noto Sans KR', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container disableGutters align="center">
        <Grid
          container
          spacing={2}
          alignContent="center"
          sx={{
            height: "100vh",
          }}
        >
          <Article />
        </Grid>
      </Container>
      <Background />
    </ThemeProvider>
  );
}

export default Main;
