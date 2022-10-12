import React from "react";
import {Grid, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Link from "next/link";


//Навесить линки на переходы по страницам
const TextLeftMenu = ({list}) => {
    const router = useRouter()
    return (
        <>
            {
                list.map(item=>(
                    <Grid>
                        <Typography key={item.key} sx={{
                            color: "white",
                            fontSize: 25,
                            fontWeight: "bold",
                            "&:hover": {
                                background: "white",
                                color: "#69CB2D"
                            }
                        }}>
                            <Link href={item.href}>{item.text}</Link>
                        </Typography>
                    </Grid>
                ))
            }
        </>
    )
}

export default TextLeftMenu