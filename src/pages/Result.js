import { ThemeProvider } from "@emotion/react";
import {
  Container,
  createTheme,
  Grid,
  IconButton,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
  Stack,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Header from "../components/Header";
import Background from "../components/Background";
import LinearProgressWithLabel from "../components/ProgressBar";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import axios from "axios";
import Chart from "../components/Chart";
import Swal from "sweetalert2";

export default function Result() {
  const [alignment, setAlignment] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    axios
      .get(
        `http://${process.env.REACT_APP_BACKEND_URL}/survey`,
        { params: { orderby: alignment } },
        { withCredentials: true }
      )
      .then((res) => {
        setSortedData(res.data);
      })
      .catch((err) => {});
  }, [alignment]);

  useEffect(() => {
    axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/total`)
      .then((res) => {
        setChartData(res.data);
      })
      .catch((err) => {});
  }, []);

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
      btn: {
        main: "##5AA263",
      },
    },
    typography: {
      fontFamily: "'Noto Sans KR', sans-serif",
    },
  });

  const Item = styled(Paper)(() => ({
    backgroundColor: "#ffffff",
    padding: 20,
    paddingLeft: '1.3rem',
    paddingRight: '0.4rem',
    textAlign: "center",
    color: "black",
  }));

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
            <Grid container spacing={2} minWidth={280}>
              <Grid item xs={12}>
                <Logo height={100} />
                <Typography
                  color="black"
                  sx={{ m: 2, fontSize: 18 }}
                  variant="subtitle1"
                >
                  "그대는 명지明知를 밝히는 등불이어라"
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Chart chartData={chartData} setChartData={chartData}/>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      color="white"
                      variant="subtitle1"
                      bgcolor="secondary.main"
                      borderRadius={20}
                    >
                      전체 참여율
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <LinearProgressWithLabel
                      sx={{
                        height: 10,
                        borderRadius: 20,
                      }}
                      value={sortedData.length / 183}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Box
                sx={{
                  width: "100%",
                  mt: 2,
                  ml: 1,
                  minWidth: 280,
                }}
              >
                <Grid item xs={12} textAlign="center" marginBottom={4}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="latest">최신순</ToggleButton>
                    <ToggleButton value="oldest">오래된순</ToggleButton>
                    <ToggleButton value="vote">공감순</ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                <Stack spacing={2}>
                  {sortedData.map((data) => {
                    return (
                      <Item>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          textAlign="center"
                        >
                          <Grid xs={10} textAlign="left"> {data.comment.split('\n').map((line) => <Typography variant="body1" padd>{line}</Typography>)}</Grid>
                          <Grid xs={2} textAlign="center">
                            <IconButton
                              onClick={async () => {
                                await axios
                                  .get(
                                    `http://${process.env.REACT_APP_BACKEND_URL}/survey/vote?id=${data.id}`
                                  )
                                  .then((res) => {
                                    Swal.fire({
                                      icon: "success",
                                      title: "투표 성공",
                                      showConfirmButton: false,
                                      timer: 1000,
                                    });
                                  })
                                  .catch((err) => {
                                    Swal.fire({
                                      icon: "error",
                                      iconColor: "#d32f2f",
                                      title: "투표 실패",
                                      text: "다시 시도해주세요",
                                      confirmButtonColor: "#005cb8",
                                    });
                                  });
                              }}
                              sx={{
                                p: 0,
                              }}
                            >
                              <ThumbUpAltIcon color="primary"/>
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Item>
                    );
                  })}
                </Stack>
              </Box>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
      <Background />
    </React.Fragment>
  );
}
