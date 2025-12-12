import { JSX } from "react";

export interface BlogsItems {
    id: number,
    logo: JSX.Element;
    company_name: string;
    date: string;
    title: string;
    description: string;
    likes: number;
    comments: number;
    image?: string;
}
