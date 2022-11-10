import { Box } from "@mui/material";
import React from "react";

export default function Background() {
  return (
    <div>
      <Box
        component="img"
        src="/image/background.png"
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></Box>
    </div>
  );
}
