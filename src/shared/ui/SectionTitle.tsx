interface SectionTitleProps {
    title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <div className="w-full text-left mt-25 mb-10">
            <h2 className="font-bold text-4xl leading-[110%] tracking-normal">
                {title}
            </h2>
        </div>
    );
};
