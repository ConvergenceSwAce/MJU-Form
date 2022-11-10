import { ThemeProvider } from "@emotion/react";
import {
  Container,
  createTheme,
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Header from "../components/Header";
import Wave from "react-wavify";
import Background from "../components/Background";

export default function Result() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
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
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Container sx={{ mt: 10 }}>
          <Paper
            elevation={1}
            sx={{
              justifyContent: "center",
              display: "flex",
              p: 10,
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Wave
                  fill="url(#gradient)"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                  }}
                  height={100}
                >
                  <Logo
                    sx={{
                      width: "100vw",
                      height: "100vh",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: -1,
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="10%" stopColor="#071648" />
                      <stop offset="90%" stopColor="#0086D1" />
                    </linearGradient>
                  </defs>
                </Wave>
              </Grid>
              <Grid item xs={12}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton value="latest" selected="true">
                    최신순
                  </ToggleButton>
                  <ToggleButton value="heart">공감순</ToggleButton>
                  <ToggleButton value="oldest">오래된순</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
      <Background />
    </React.Fragment>
  );
}
