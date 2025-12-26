import Link from 'next/link'
import { RightArrow } from "@/shared/ui/icons";
import Image from 'next/image';
import { ContestsTypes } from "../model/ContestsTypes";

type ContestsCardProps = {
    contest: ContestsTypes;
};

export const ContestsCard = ({ contest }: ContestsCardProps) => {
    return (
        <div className="group flex flex-col justify-between gap-3 rounded-[20px] bg-white p-3">
            {/* Изображение и заголовок */}
            <div className="flex flex-col gap-3">
                <div className='relative w-full aspect-square rounded-2xl overflow-hidden max-h-[159px]'>
                    <Image
                        src={contest.image}
                        alt={contest.title}
                        fill
                        className="rounded-[20px]"
                    />
                </div>
                <h3 className="lg:text-[22px] text-sm lg:font-bold font-semibold leading-[105%] text-secondary">
                    {contest.title}
                </h3>
            </div>
            {/* Ссылка и кнопка со стрелкой */}
            <div className="flex items-center justify-between">
                <span className="text-sm text-accent-quinary font-regular leading-[120%]">
                    {contest.link}
                </span>
                <Link href="#">
                    <button className="w-7 h-7 bg-primary hover:bg-accent transition-all duration-300 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <RightArrow />
                    </button>
                </Link>
            </div>
        </div>
    );
};