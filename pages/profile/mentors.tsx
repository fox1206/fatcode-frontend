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
                <Container sx={{
                    height: 150,
                    background: "#F3F3F3"
                }}>
                    <MentorList mentor={mentor}/>
                </Container>
        </BackgoundUser>
    )
}

export default Mentors