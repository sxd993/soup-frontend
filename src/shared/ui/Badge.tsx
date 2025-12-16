interface BadgeProps {
    badge: string,
}

export const Badge = ({ badge}: BadgeProps) => {
    return (
        <span className="w-fit px-4 py-1 text-[11px] font-medium bg-white hover:bg-accent-quaternary transition-all duration-300 text-secondary rounded-full border border-accent-quaternary">
            {badge}
        </span>
    )

}