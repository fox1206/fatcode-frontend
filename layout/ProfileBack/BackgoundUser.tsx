import React from "react";
import {Container, Grid} from "@mui/material";

const BackgoundUser = ({children}) => {
    return(
            <Container fixed sx={{
                background: "white",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingBottom: 5
            }}>
                    {children}
            </Container>
    )
}

export default BackgoundUser