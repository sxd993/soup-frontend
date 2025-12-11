import Link from 'next/link'

interface ViewAllButtonProps {
    href: string
    text: string
}

export const ViewAllButton = ({ href, text }: ViewAllButtonProps) => {
    return (
        <Link 
            href={href} 
            className="text-accent-senary font-semibold bg-primary hover:bg-accent transition-all duration-300 text-base px-8 py-2.5 rounded-[50px]"
        >
            {text}
        </Link>
    )
}