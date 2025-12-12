import { JSX } from "react";

export interface BlogsItems {
    id: number,
    logo: JSX.Element;
    date: string;
    title: string;
    description: string;
    likes: number;
    comments: number;
}