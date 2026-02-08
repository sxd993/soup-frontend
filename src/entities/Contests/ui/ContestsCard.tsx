import Link from "next/link";
import { RightArrow } from "@/shared/ui";
import { normalizeUrl } from "@/shared/lib";
import Image from 'next/image';
import type { ContestItem } from "../model/types/contest.types";

type ContestsCardProps = {
    contest: ContestItem;
};

// Компонент карточки конкурса {отображает изображение, название, ссылку}
export const ContestsCard = ({ contest }: ContestsCardProps) => {
    const contestHref = normalizeUrl(contest.contestLink)
    return (
        <Link
            href={contestHref}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-3 rounded-[20px] bg-white p-3 transition-opacity hover:opacity-95"
        >
            {contest.imageUrl && (
                <div className='relative w-full aspect-square rounded-2xl overflow-hidden max-h-[159px]'>
                    <Image
                        src={contest.imageUrl}
                        alt={contest.title}
                        fill
                        className="rounded-[20px]"
                    />
                </div>
            )}
            <h3 className="lg:text-[22px] text-sm lg:font-bold font-semibold leading-[105%] text-secondary">
                {contest.title}
            </h3>
            <div className="flex items-center justify-between">
                <span className="text-sm text-accent-quinary font-regular leading-[120%]">
                    {contest.contestLink}
                </span>
                <span className="w-7 h-7 bg-primary hover:bg-accent transition-colors rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <RightArrow />
                </span>
            </div>
        </Link>
    );
};