import React from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const MentorList = ({mentor}) => {
  return(
        <>
            <Grid container>
                <ArrowBackIosIcon/>
                {mentor.map(item=>(<>
                        <Grid ml={5}>
                            <Grid ml={1}>
                                <Avatar/>
                            </Grid>
                            <Typography>
                                {item.text}
                            </Typography>
                        </Grid>
                    </>
                ))}
                <Grid>
                    <ArrowForwardIosIcon/>
                </Grid>
            </Grid>
        </>
  )
}

export default MentorList