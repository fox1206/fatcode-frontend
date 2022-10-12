import React from "react";
import {Container} from "@mui/material";
import TextLeftMenu from "./TextLeftMenu";

const LeftMenu = () => {
    const list = [
        {key: 1, text: "Профиль", href: "1"},
        {key: 2, text: "Мой питомец", href: "mypet"},
        {key: 3, text: "Мои курсы", href: "mycourse"},
        {key: 4, text: "Мои ментора", href: "mentors"},
        {key: 5, text: "Мои донаты", href: "mydonats"},
        {key: 6, text: "Мои заметки", href: "my"},
        {key: 7, text: "Вопрос-ответ", href: "qus"},
    ]
    return(<>
        <Container sx={{
            background: "#69CB2D",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingTop: 5,
        }}>
            <TextLeftMenu list={list}/>
        </Container>
        </>
    )
}

export default LeftMenu