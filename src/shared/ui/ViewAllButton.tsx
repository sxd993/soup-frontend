import Link from 'next/link'

interface ViewAllButtonProps {
    href: string
    text: string
}

export const ViewAllButton = ({ href, text }: ViewAllButtonProps) => {
    return (
        <Link 
            href={href} 
            className="block w-full sm:w-auto text-center text-accent-senary font-semibold bg-primary hover:bg-accent transition-all duration-300 text-base lg:px-8 px-7 lg:py-2.5 py-3 rounded-[50px]"
        >
            {text}
        </Link>
    )
}
