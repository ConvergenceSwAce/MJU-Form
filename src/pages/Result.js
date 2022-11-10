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

  const ThumbUpPress = async () => {
    await axios
      .post("#")
      .then((res) => {
        alert("투표가 완료되었습니다.");
        console.log("test");
      })
      .catch((err) => {
        alert("error: " + err.message);
      });
  };

  useEffect(() => {
    axios
      .get(`#/survey/${alignment}`)
      .then((res) => {
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
                  sx={{ m: 2, fontSize: 22 }}
                  variant="subtitle1"
                >
                  "그대는 명지明知를 밝히는 등불이어라"
                </Typography>
                <Grid container spacing={2} alignItems="center">
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
                      value={38}
                    />
                  </Grid>
                </Grid>
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
              <Stack spacing={4}>
                {dummy.map((data) => {
                  return (
                    <>
                      <Item>
                        <p>{data.comment}</p>
                        {/* <IconButton onClick={ThumbUpPress}>
                          <ThumbUpAltIcon color="primary" />
                        </IconButton> */}
                      </Item>
                    </>
                  );
                })}
              </Stack>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
      <Background />
    </React.Fragment>
  );
}
