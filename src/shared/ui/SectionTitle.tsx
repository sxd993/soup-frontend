interface SectionTitleProps {
    title: string | React.ReactNode;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <h2 className="text-left font-bold lg:text-4xl text-3xl text-secondary leading-[110%] tracking-normal">
            {title}
        </h2>
    );
};