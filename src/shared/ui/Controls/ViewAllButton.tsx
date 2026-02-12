import Link from 'next/link'

interface ViewAllButtonProps {
    href: string
    text: string
    className?: string
}

export const ViewAllButton = ({ href, text, className }: ViewAllButtonProps) => {
    return (
        <Link 
            href={href} 
            className={`block w-full md:w-auto text-center text-accent-senary font-semibold bg-primary hover:bg-accent transition-all duration-300 text-base lg:px-8 px-7 lg:py-2.5 py-3 rounded-[50px] ${className ?? ""}`}
        >
            {text}
        </Link>
    )
}
