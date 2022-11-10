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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Logo height={100} />
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
