import React from "react";



export type PropsChildren = {
    children?: React.ReactNode,
    petsList: PetList[]
}

type PetList = {
    key: number,
    img: string,
    text: string
}