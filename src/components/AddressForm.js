import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";

export default function AddressForm(props) {
  const handleChangeCollage = (event) => {
    props.setCollage(event.target.value);
  };

  const FormHelperTexts = styled(FormHelperText)`
    width: 100%;
    font-weight: 700 !important;
    color: #d32f2f !important;
  `;

  const handleChangeDepartment = (event) => {
    props.setDepartment(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom textAlign="center">
        개인정보 입력
      </Typography>
      <Grid container spacing={2}>
        {/* 이름 입력 폼 */}
        <Grid item xs={6} md={6}>
          <TextField
            id="Name"
            name="Name"
            label="이름"
            value={props.name}
            onChange={(event) => props.setName(event.target.value)}
            fullWidth
            autoComplete="name"
            variant="standard"
            error={props.nameError !== "" || false}
          />
          <FormHelperTexts>{props.nameError}</FormHelperTexts>
        </Grid>
        {/* 학번 입력 폼 */}
        <Grid item xs={6} md={6}>
          <TextField
            id="stdId"
            name="stdId"
            label="학번"
            value={props.stdId}
            onChange={(event) => props.setStdId(event.target.value)}
            fullWidth
            variant="standard"
            error={props.stdIdError !== "" || false}
          />
          <FormHelperTexts>{props.stdIdError}</FormHelperTexts>
        </Grid>
        <Grid item xs={12}>
          {/* 단과대 셀렉터 */}
          <FormControl fullWidth>
            <InputLabel id="collage-select-label">단과대학</InputLabel>
            <Select
              labelId="collage-select-label"
              id="collage-select"
              value={props.collage}
              label="단과대학"
              onChange={handleChangeCollage}
              error={props.collageError !== "" || false}
            >
              <MenuItem value={"건축대학"}>건축대학</MenuItem>
              <MenuItem value={"경영대학"}>경영대학</MenuItem>
              <MenuItem value={"공과대학"}>공과대학</MenuItem>
              <MenuItem value={"미래융합대학교"}>미래융합대학교</MenuItem>
              <MenuItem value={"법과대학"}>법과대학</MenuItem>
              <MenuItem value={"사회과학대학"}>사회과학대학</MenuItem>
              <MenuItem value={"예술체육대학"}>예술체육대학</MenuItem>
              <MenuItem value={"인문대학"}>인문대학</MenuItem>
              <MenuItem value={"자연과학대학"}>자연과학대학</MenuItem>
              <MenuItem value={"ICT융합대학"}>ICT융합대학</MenuItem>
              <MenuItem value={"단과대구분없음"}>단과대구분없음</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* 학과 셀렉터  */}
          <FormControl fullWidth>
            <InputLabel id="department-select-label">학과・학부</InputLabel>
            <Select
              labelId="department-select-label"
              id="department-select"
              value={props.department}
              label="학과・학부"
              onChange={handleChangeDepartment}
              error={props.departmentError !== "" || false}
            >
              {/* 단과대 선택된 데이터를 map함수로 뿌림 */}
              {props.collage === "" ? (
                <MenuItem value={""}>단과대를 먼저 선택해주세요</MenuItem>
              ) : (
                props.collageOfMajors[props.collage].map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })
              )}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => props.setChecked(event.target.checked)}
                name="checkbox"
                checked={props.checked}
              />
            }
            label="이용약관 및 개인정보 처리방침에 동의합니다."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
