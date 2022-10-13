import React from "react";
import BackgoundUser from "../../layout/ProfileBack/BackgoundUser";
import ProfileTitle from "../../components/profile/ProfileTitle";
import {Container, Grid} from "@mui/material";
import MyTrello from "../../components/profile/MyTrello";

const MyNotes = () => {
    return(
      <BackgoundUser>
        <ProfileTitle text={"Мои заметки"}/>
          <Grid container>
            <Container>
              <Grid xs={10}>
                <MyTrello />
              </Grid>
            </Container>
          </Grid>
      </BackgoundUser>
    )
}

export default MyNotes;