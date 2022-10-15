import {Container, Grid} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MentorsListItem from "./MentorsListItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

type PropsList = {
    currentPageList: CurrentPageList[],
    next: any,
    back: any
}
type CurrentPageList = {
    key: number,
    text: string
}

const MentorsList: React.FC<PropsList> = ({currentPageList,
                                              next, back}) => {
    return(
        <>
            <Container sx={{
                width: "100%",
                height: 160,
                background: "#F3F3F3",
                position: "relative",
                zIndex: 2,
                overflow: "hidden",
            }}>
                <Grid container maxWidth={"120%"}>
                    <Grid item xs={1} mr={-5} sx={{
                        position: "relative",
                        zIndex: 4,
                        overflow: "hidden",
                    }}>
                        <ArrowBackIosIcon onClick={()=>back} sx={{
                            marginTop: 7.5,

                        }}/>
                    </Grid>
                    <Grid item xs={8} mt={2} mr={2.2} >
                        <MentorsListItem mentor={currentPageList}/>
                    </Grid>
                    <Grid item xs={1} ml={15} >
                        <ArrowForwardIosIcon onClick={()=>next} sx={{
                            zIndex: 12,
                            position: "relative",
                            overflow: "hidden",
                            marginTop: 7.5,
                            marginLeft: 7
                        }}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default MentorsList