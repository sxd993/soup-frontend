interface SectionTitleProps {
    title: string | React.ReactNode;
    className?: string;
}

export const SectionTitle = ({ title, className = '' }: SectionTitleProps) => {
    const baseStyles = "text-left font-bold lg:text-4xl text-3xl text-secondary leading-[110%] tracking-normal"
    return (
        <h2 className={`${baseStyles} ${className}`}>
            {title}
        </h2>
    );
};
