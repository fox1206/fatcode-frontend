import React from 'react';
import {Center} from './../../components/profile/coursedetails/center'
import {Left} from './../../components/profile/coursedetails/left'
import {Right} from './../../components/profile/coursedetails/right'
import {Grid} from "@mui/material";

const Coursedetails = () => {

    return (
        <Grid container>
            <Grid>
                <Center/>
            </Grid>
            <Grid>
                <Left/>
            </Grid>
            <Grid>
                <Right/>
            </Grid>
        </Grid>
    )
};

export default Coursedetails;
