import React from "react";
import {Container, Typography} from "@mui/material";
import TextLeftMenu from "./TextLeftMenu";

const LeftMenu = () => {
    const list = [
        {key: 1, text: "Профиль", href: ""},
        {key: 2, text: "Мой питомец", href: ""},
        {key: 3, text: "Мои курсы", href: ""},
        {key: 4, text: "Мои ментора", href: ""},
        {key: 5, text: "Мои донаты", href: ""},
        {key: 6, text: "Мои заметки", href: ""},
        {key: 7, text: "Вопрос-ответ", href: ""},
    ]
    return(
        <Container sx={{
            background: "#69CB2D",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingTop: 5
        }}>
            <TextLeftMenu list={list}/>
        </Container>
    )
}

export default LeftMenu