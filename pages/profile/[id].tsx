import React from "react";
import {Grid, Typography} from "@mui/material";
import BackgoundUser from "../../layout/ProfileBack/BackgoundUser";
import LeftMenu from "../../components/profile/LeftMenu";

const UserProfile = () => {
    return(
        <>
            <BackgoundUser>
                <Grid container>
                    <Grid xs={3}>
                        <LeftMenu/>
                    </Grid>
                    <Grid ml={5} xs={8}>
                        <Typography>
                            Hello
                        </Typography>
                    </Grid>
                </Grid>
            </BackgoundUser>
        </>
    )
}

export default UserProfile