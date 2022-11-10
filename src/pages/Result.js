import { ThemeProvider } from "@emotion/react";
import {
  Card,
  Button,
  Container,
  createTheme,
  Grid,
  IconButton,
  ListItemButton,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  CardContent,
  Box,
  Stack,
  styled,
} from "@mui/material";
import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Header from "../components/Header";
import Background from "../components/Background";
import LinearProgressWithLabel from "../components/ProgressBar";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import axios from "axios";
import Chart from "../components/Chart";

const dummy = [
  {
    id: 4,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    vote: 30,
  },
  {
    id: 3,
    comment: "아니 이건 아니지",
    vote: 13,
  },
  {
    id: 1,
    comment: "내 의견",
    vote: 3,
  },
  {
    id: 5,
    comment: "명지 살려",
    vote: 2,
  },
  {
    id: 2,
    comment: "민수 의견",
    vote: 0,
  },
];

export default function Result(props) {
  const [alignment, setAlignment] = React.useState("latest");
  const [sortedData, setSortedData] = React.useState([]);
  console.log(sortedData.length);

  useEffect(() => {
    axios
      .get(
        `http://${process.env.REACT_APP_BACKEND_URL}/survey`,
        { params: { orderby: alignment } },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        setSortedData(res.data);
      })
      .catch((err) => {
        console.log("error: " + err.message);
      });
  }, [alignment]);

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
    padding: 10,
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
            <Grid container spacing={2}>
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
                    <Chart />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      color="white"
                      variant="subtitle1"
                      bgcolor="secondary.main"
                      borderRadius={30}
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
                  p: 2,
                }}
              >
                <Grid item xs={12} textAlign="left">
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
                  {console.log(sortedData)}
                  {sortedData.map((data) => {
                    return (
                      <Item>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          textAlign="center"
                        >
                          <Grid xs={10}> {data.comment}</Grid>
                          <Grid xs={2} textAlign="right">
                            <IconButton
                              onClick={async () => {
                                await axios
                                  .get(
                                    `http://${process.env.REACT_APP_BACKEND_URL}/survey/vote?id=${data.id}`
                                  )
                                  .then((res) => {
                                    alert("투표가 완료되었습니다.");
                                    console.log("test");
                                  })
                                  .catch((err) => {
                                    alert("중복된 투표입니다.");
                                  });
                              }}
                            >
                              <ThumbUpAltIcon color="primary" />
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
