import { Card, Grid, Typography } from "@mui/material";
import * as React from "react";

export default function Result(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom textAlign="center" mb={5}>
        의견 확인
      </Typography>
      <Card sx={{ p: 5 }}>
        <Grid container spacing={2}>
          {/* 이름 */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom textAlign="left">
              이름 : {props.name}
            </Typography>
          </Grid>

          {/* 학번 */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom textAlign="left">
              학번 : {props.stdId}
            </Typography>
          </Grid>

          {/* 단과대학 */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom textAlign="left">
              단과대학 : {props.collage}
            </Typography>
          </Grid>

          {/* 학과 학부 */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom textAlign="left">
              학과・학부 : {props.department}
            </Typography>
          </Grid>

          {/* 의견 */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom textAlign="left">
              의견 : {props.content}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
}
