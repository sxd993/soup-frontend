import { JSX } from "react";

export interface BlogItem {
    id: number,
    logo: JSX.Element;
    company_name: string;
    date: string;
    title: string;
    description: string;
    likes: number;
    comments: number;
    image?: string;
    isImportantBlog?: boolean;
    isAds?: boolean;
}
