import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <AppBar color="header" position="relative" elevation={5}>
      <Container maxWidth="x">
        <Toolbar disableGutters sx={{ justifyContent: "flex-start" }}>
          {/* 로고 */}
          <IconButton href="/">
            <Box
              component="img"
              sx={{
                width: 50,
              }}
              
              src="/image/1.gif"
            />
          </IconButton>
          <Typography
            variant="h5"
            style={{
              color: "#000",
              marginLeft: "1vw",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            명지대학교 학사구조 통합안 관련 인식 설문조사
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
