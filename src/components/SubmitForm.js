import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function SumbitForm(props) {
  // color, font 설정
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
    <ThemeProvider theme={theme}>
      <Box sx={{ textAlign: "center" }}>
        {/* 메인 제목 */}
        <Typography variant="h6" gutterBottom textAlign="center">
          의견 작성하기
        </Typography>
        <Box component="form" sx={{ mt: 4 }}>
          {/* 내용 입력 폼 */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={10}
              name="message"
              label="내용"
              id="message"
              onChange={(event) => props.setContent(event.target.value)}
              value={props.content}
            />
          </Grid>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="h8">{props.content.length}/1000</Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default SumbitForm;
