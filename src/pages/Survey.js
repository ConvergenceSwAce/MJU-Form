import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Result from "../components/Result";
import Header from "../components/Header";
import AddressForm from "../components/AddressForm";
import SubmitForm from "../components/SubmitForm";
import Background from "../components/Background";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const steps = ["개인정보 동의", "의견 작성", "의견 확인"];

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
    typography: {
      fontFamily: "'Noto Sans KR', sans-serif",
    },
  },
});

export default function Checkout() {
  async function onhandlePost(data) {
    const { name, stdId, collage, department, content } = data;
    const postData = {
      name,
      stdId,
      collage,
      department,
      content,
    };

    console.log(postData);

    await axios
      .post("http://localhost:7000/sumbit", postData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "제출 성공",
          showConfirmButton: false,
          timer: 1000,
        });
        handleNext();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          iconColor: "#d32f2f",
          title: "제출 실패",
          text: "다시 시도해주세요",
          confirmButtonColor: "#005cb8",
        });
      });
  }

  // Step State
  const [activeStep, setActiveStep] = React.useState(0);

  // 다음 스텝 넘어가는 함수
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  //이전 스텝 돌아가는 함수
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // 버튼 상태

  // 학과
  const collageOfMajors = {
    인문대학: [
      "국어국문학과",
      "중어중문학과",
      "일어일문학과",
      "영어영문학과",
      "사학과",
      "문헌정보학과",
      "아랍지역학과",
      "미술사학과",
      "철학과",
      "문예창작학과",
    ],
    사회과학대학: [
      "행정학과",
      "경제학과",
      "정치외교학과디지털미디어학과",
      "아동학과",
      "청소년지도학과",
    ],
    경영대학: ["경영학과", "국제통상학과", "경영정보학과"],
    법과대학: ["법학과"],
    ICT융합대학: [
      "디지털콘텐츠디자인학과",
      "융합소프트웨어학부 데이터테크놀로지전공",
      "융합소프트웨어학부 응용소프트웨어전공",
      "정보통신공학과",
    ],
    미래융합대학: [
      "창의융합인재학부",
      "사회복지학과",
      "부동산학과",
      "법무행정학과",
      "심리치료학과",
      "미래융합경영학과",
      "멀티디자인학과",
    ],
    자연과학대학: [
      "수학과",
      "물리학과",
      "화학과",
      "식품영양학과",
      "생명과학정보학과",
    ],
    공과대학: [
      "전기공학과",
      "전자공학과",
      "화학공학과",
      "신소재공학과",
      "환경에너지공학과",
      "컴퓨터공학과",
      "토목환경공학과",
      "교통공학과",
      "기계공학과",
      "산업경영공학과",
      "융합공학부",
    ],
    예술체육대학: [
      "디자인학부 시각디자인전공",
      "디자인학부 산업디자인전공",
      "디자인학부 영상디자인전공",
      "디자인학부 패션디자인전공",
      "스포츠학부 체육학전공",
      "스포츠학부 스포츠산업학전공",
      "스포츠학부 스포츠지도학전공 (야간)",
      "바둑학과",
      "예술학부 피아노전공",
      "예술학부 성악전공",
      "예술학부 아트앤멀티미디어작곡전공",
      "예술학부 영화전공",
      "예술학부 뮤지컬공연전공",
    ],
    건축대학: [
      "건축학부 건축학전공",
      "건축학부 전통건축전공",
      "건축학부 공간디자인전공",
    ],
  };

  // 학생 정보
  const [collage, setCollage] = useState("");
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [stdId, setStdId] = useState("");

  // 의견 내용
  const [content, setContent] = useState("");

  // 유효성 검사
  const [nameError, setNameError] = useState("");
  const [stdIdError, setStdIdError] = useState("");
  const [collageError, setCollageError] = useState("");
  const [departmentError, setDepartmentError] = useState("");

  const buttonValue = activeStep === steps.length - 1 ? "제출하기" : "다음";

  // 이용약관 동의 state
  const [checked, setChecked] = useState(false);

  // 스텝에 따른 페이지 불러오기
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            name={name}
            setName={setName}
            collage={collage}
            setCollage={setCollage}
            department={department}
            setDepartment={setDepartment}
            stdId={stdId}
            setStdId={setStdId}
            nameError={nameError}
            setNameError={setNameError}
            stdIdError={stdIdError}
            setStdIdError={setStdIdError}
            setChecked={setChecked}
            collageError={collageError}
            setCollageError={setCollageError}
            departmentError={departmentError}
            setDepartmentError={setDepartmentError}
            collageOfMajors={collageOfMajors}
            checked={checked}
          />
        );
      case 1:
        return <SubmitForm content={content} setContent={setContent} />;
      case 2:
        return (
          <Result
            name={name}
            collage={collage}
            department={department}
            stdId={stdId}
            content={content}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name,
    };

    //개인정보 동의 checkbox 유효성 검사
    if (activeStep === 0) {
      if (!checked) {
        Swal.fire({
          icon: "error",
          iconColor: "#d32f2f",
          title: "개인정보 약관에 동의해주세요.",
          confirmButtonColor: "#005cb8",
        });
      }
      const nameRegex = /^[가-힣a-zA-Z]+$/;
      if (!nameRegex.test(name) || name.length < 1)
        setNameError("올바른 이름을 입력해주세요.");
      else setNameError("");

      // 학번 유효성 체크
      const stdIdRegex = /^[0-9]{8}$/;
      if (!stdIdRegex.test(stdId)) setStdIdError("올바른 학번을 입력해주세요.");
      else setStdIdError("");

      if (collage === "") setCollageError("학과를 선택해주세요.");
      else setCollageError("");

      if (department === "") setDepartmentError("학과를 선택해주세요.");
      else setDepartmentError("");

      // 유효성 체크 후 통과시 다음으로 넘어가기
      if (
        nameRegex.test(name) &&
        stdIdRegex.test(stdId) &&
        collage !== "" &&
        department !== "" &&
        checked
      ) {
        handleNext();
      } else {
      }
    }

    if (activeStep === 1) {
      if (content === "") {
        Swal.fire({
          icon: "error",
          iconColor: "#d32f2f",
          title: "의견을 입력해주세요.",
          confirmButtonColor: "#005cb8",
        });
      } else {
        handleNext();
      }
    }

    // 마지막에서 제출하기 버튼일 경우 onhandlePost
    if (activeStep === 2) {
      if (event.target.id === "제출하기") {
        onhandlePost(userData);
      }
    }
  };
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="md" sx={{ mt: 10 }}>
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 5 } }}>
          <Typography variant="h4" align="center">
            설문조사
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  제출해주셔서 감사합니다.
                </Typography>
                <Typography variant="subtitle1">
                  제출한 의견은 메인화면에서 확인하실 수 있습니다.
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3 }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  내 의견 확인하기
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  onSubmit={handleSubmit}
                  component="form"
                  noValidate
                >
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      이전
                    </Button>
                  )}

                  <Button
                    id={buttonValue}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    onClick={(event) => handleSubmit(event)}
                  >
                    {buttonValue}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
      <Background />
    </ThemeProvider>
  );
}
