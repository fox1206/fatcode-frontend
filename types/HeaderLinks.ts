import {ReactNode} from "react";

export interface Link{
    id: number;
    text: string;
    href: string;
}

export interface Child{
    children?: string|ReactNode
}