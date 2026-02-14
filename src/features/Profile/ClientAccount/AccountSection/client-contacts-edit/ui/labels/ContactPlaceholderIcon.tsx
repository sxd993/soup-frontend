type ContactPlaceholderIconProps = {
    label: string;
}

export const ContactPlaceholderIcon = ({ label }: ContactPlaceholderIconProps) => {
    return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#c5c2c2] text-[10px] font-medium text-[#8f8f8f]">
            {label}
        </div>
    )
}
