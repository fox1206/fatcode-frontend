import React from "react";
import BackgoundUser from "../../layout/ProfileBack/BackgoundUser";
import ProfileTitle from "../../components/profile/ProfileTitle";
import {Avatar, Container, Grid} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MentorList from "../../components/profile/MentorList";

const Mentors = () => {
    const mentor = [
        {key: 1, text:"Михаил"},
        {key: 2, text:"Михаил"},
        {key: 3, text:"Михаил"},
        {key: 4, text:"Михаил"},
        {key: 5, text:"Михаил"},
    ]
    return(
        <BackgoundUser>
            <ProfileTitle text={"Мои ментора"}/>
            <Grid container>
                <Container>
                    <Grid xs={10}>
                        <MentorList mentor={mentor}/>
                    </Grid>
                </Container>
            </Grid>
        </BackgoundUser>
    )
}

export default Mentors