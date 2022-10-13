import React from "react";
import BackgoundUser from "../../layout/ProfileBack/BackgoundUser";
import ProfileTitle from "../../components/profile/ProfileTitle";
import {Avatar, Container, Grid} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import QuestionAnswer from "../../components/profile/QuestionAnswer";
import { Box } from "@mui/material";

const Question = () => {
    return(
      <BackgoundUser>
        <ProfileTitle text={"Вопрос-ответ"}/>
          <Grid container>
            <Container>
              <Grid xs={10}>
                <QuestionAnswer />
              </Grid>
            </Container>
          </Grid>
      </BackgoundUser>
    )
}

export default Question;