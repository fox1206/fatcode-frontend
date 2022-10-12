import React from "react";
import {Grid, Typography} from "@mui/material";


//Навесить линки на переходы по страницам
const TextLeftMenu = ({list}) => {
    return (
        <>
            {
                list.map(item=>(
                    <Grid>
                        <Typography key={item.key} sx={{
                            color: "white",
                            fontSize: 25,
                            fontWeight: "bold"
                        }}>
                            {item.text}
                        </Typography>
                    </Grid>
                ))
            }
        </>
    )
}

export default TextLeftMenu