import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from '@mui/material';

const collageOfMajors = {
  인문대학: [
    '국어국문학과',
    '중어중문학과',
    '일어일문학과',
    '영어영문학과',
    '사학과',
    '문헌정보학과',
    '아랍지역학과',
    '미술사학과',
    '철학과',
    '문예창작학과',
  ],
  사회과학대학: [
    '행정학과',
    '경제학과',
    '정치외교학과디지털미디어학과',
    '아동학과',
    '청소년지도학과',
  ],
  경영대학: ['경영학과', '국제통상학과', '경영정보학과'],
  법과대학: ['법학과'],
  ICT융합대학: [
    '디지털콘텐츠디자인학과',
    '융합소프트웨어학부 데이터테크놀로지전공',
    '융합소프트웨어학부 응용소프트웨어전공',
    '정보통신공학과',
  ],
  미래융합대학: [
    '창의융합인재학부',
    '사회복지학과',
    '부동산학과',
    '법무행정학과',
    '심리치료학과',
    '미래융합경영학과',
    '멀티디자인학과',
  ],
  자연과학대학: [
    '수학과',
    '물리학과',
    '화학과',
    '식품영양학과',
    '생명과학정보학과',
  ],
  공과대학: [
    '전기공학과',
    '전자공학과',
    '화학공학과',
    '신소재공학과',
    '환경에너지공학과',
    '컴퓨터공학과',
    '토목환경공학과',
    '교통공학과',
    '기계공학과',
    '산업경영공학과',
    '융합공학부',
  ],
  예술체육대학: [
    '디자인학부 시각디자인전공',
    '디자인학부 산업디자인전공',
    '디자인학부 영상디자인전공',
    '디자인학부 패션디자인전공',
    '스포츠학부 체육학전공',
    '스포츠학부 스포츠산업학전공',
    '스포츠학부 스포츠지도학전공 (야간)',
    '바둑학과',
    '예술학부 피아노전공',
    '예술학부 성악전공',
    '예술학부 아트앤멀티미디어작곡전공',
    '예술학부 영화전공',
    '예술학부 뮤지컬공연전공',
  ],
  건축대학: [
    '건축학부 건축학전공',
    '건축학부 전통건축전공',
    '건축학부 공간디자인전공',
  ],
};
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
        <Grid item xs={12} md={6}>
          <TextField
            id="Name"
            name="Name"
            label="이름"
            value={props.name}
            onChange={(event) => props.setName(event.target.value)}
            fullWidth
            autoComplete="name"
            variant="standard"
            error={props.nameError !== '' || false}
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
            error={props.stdIdError !== '' || false}
          />
          <FormHelperTexts>{props.stdIdError}</FormHelperTexts>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="collage-select-label">단과대학</InputLabel>
            <Select
              labelId="collage-select-label"
              id="collage-select"
              value={props.collage}
              label="단과대학"
              onChange={handleChangeCollage}
              error={props.collageError !== '' || false}
            >
              <MenuItem value={'건축대학'}>건축대학</MenuItem>
              <MenuItem value={'경영대학'}>경영대학</MenuItem>
              <MenuItem value={'공과대학'}>공과대학</MenuItem>
              <MenuItem value={'미래융합대학교'}>미래융합대학교</MenuItem>
              <MenuItem value={'법과대학'}>법과대학</MenuItem>
              <MenuItem value={'사회과학대학'}>사회과학대학</MenuItem>
              <MenuItem value={'예술체육대학'}>예술체육대학</MenuItem>
              <MenuItem value={'인문대학'}>인문대학</MenuItem>
              <MenuItem value={'자연과학대학'}>자연과학대학</MenuItem>
              <MenuItem value={'ICT융합대학'}>ICT융합대학</MenuItem>
              <MenuItem value={'단과대구분없음'}>단과대구분없음</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="department-select-label">학과・학부</InputLabel>
            <Select
              labelId="department-select-label"
              id="department-select"
              value={props.department}
              label="학과・학부"
              onChange={handleChangeDepartment}
              error={props.departmentError !== '' || false}
            >
              <MenuItem value={'건축대학'}>건축대학</MenuItem>
              <MenuItem value={'경영대학'}>경영대학</MenuItem>
              <MenuItem value={'공과대학'}>공과대학</MenuItem>
              <MenuItem value={'미래융합대학교'}>미래융합대학교</MenuItem>
              <MenuItem value={'법과대학'}>법과대학</MenuItem>
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
