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
        main: "transparent",
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
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                elevation={1}
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  height: 600,
                }}
              >
                <Wave
                  width="auto"
                  mask="url(#mask)"
                  fill="#071648"
                  paused={false}
                  options={{
                    height: 0,
                    amplitude: 5,
                    speed: 0.15,
                    points: 20,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="0" stopColor="white" />
                      <stop offset="0.5" stopColor="black" />
                    </linearGradient>
                    <mask id="mask">
                      <Logo />
                    </mask>
                  </defs>
                </Wave>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="latest">최신순</ToggleButton>
                <ToggleButton value="heart">공감순</ToggleButton>
                <ToggleButton value="oldest">오래된순</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
