import React from "react";
import BackgoundUser from "../../layout/ProfileBack/BackgoundUser";
import ProfileTitle from "../../components/profile/ProfileTitle";
import {Avatar, Container, Grid} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Mentors = () => {
    return(
        <BackgoundUser>
            <ProfileTitle text={"Мои ментора"}/>
            <Grid container xs>
                <Grid>
                    <Container>
                        <Grid xs={1}>
                            <ArrowBackIosIcon/>
                        </Grid>
                        <Grid>
                            <Avatar/>
                        </Grid>
                        <Grid><ArrowForwardIosIcon/></Grid>
                    </Container>
                </Grid>
            </Grid>
        </BackgoundUser>
    )
}

export default Mentors