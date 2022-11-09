import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function AddressForm() {
  const [collage, setCollage] = React.useState('건축대학');
  const [department, setDepartment] = React.useState('');

  const handleChangeCollage = (event) => {
    setCollage(event.target.value);
  };

  const handleChangeDepartment = (event) => {
    setCollage(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        개인정보 입력
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="이름"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stdId"
            name="stdId"
            label="학번"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="collage-select-label">단과대학</InputLabel>
            <Select
              labelId="collage-select-label"
              id="collage-select"
              value={collage}
              label="단과대학"
              onChange={handleChangeCollage}
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
            <InputLabel id="department-select-label">학과(학부)</InputLabel>
            <Select
              labelId="department-select-label"
              id="department-select"
              value={department}
              label="학과"
              onChange={handleChangeDepartment}
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
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="개인정보 활용동의"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
