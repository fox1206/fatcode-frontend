import React from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const MentorList = ({mentor}) => {
  return(
        <>
            <Grid container mt={3}>
                <Grid mt={2} xs={1}>
                    <ArrowBackIosIcon/>
                </Grid>
                {mentor.map(item=>(<>
                        <Grid>
                            <Grid ml={1}>
                                <Avatar sx={{
                                    width: 90,
                                    height: 90
                                }}/>
                            </Grid>
                            <Typography>
                                {item.text}
                            </Typography>
                        </Grid>
                    </>
                ))}
                <Grid mt={2} xs={1}>
                    <ArrowForwardIosIcon/>
                </Grid>
            </Grid>
        </>
  )
}

export default MentorList