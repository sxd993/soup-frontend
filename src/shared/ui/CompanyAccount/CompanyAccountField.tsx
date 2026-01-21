interface CompanyAccounеFieldProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export const CompanyAccountField = ({ children, icon, className = "" }: CompanyAccounеFieldProps) => {
    return (
        <div className={`h-[54px] border p-[15px] border-[#c5c2c2] rounded-[10px] flex gap-3 ${className}`}>
            <div className="flex justify-center items-center">
                {icon}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
