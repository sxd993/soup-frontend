interface CompanyAccounеFieldProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export const CompanyAccountField = ({ children, icon, className = "" }: CompanyAccounеFieldProps) => {
    return (
        <div className={`h-[54px] w-full border p-[15px] border-[#c5c2c2] rounded-[10px] flex gap-3 ${className}`}>
            {icon && (
                <div className="flex items-center justify-center">
                    {icon}
                </div>
            )}
            <div className="flex-1 min-w-0">
                {children}
            </div>
        </div>
    )
}
