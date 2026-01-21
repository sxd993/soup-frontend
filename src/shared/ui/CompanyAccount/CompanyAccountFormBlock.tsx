import React from "react"

interface CompanyAccountFormBlockProps  {
    children: React.ReactNode;
    label: string;
}

export const CompanyAccountFormBlock  = ({ children, label }: CompanyAccountFormBlockProps) => {
    return (
        <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px] max-w-[793px]">
            {/* Заголовок лейбла формы*/}
            <h3 className="font-bold text-[22px] leading-[115%] text-secondary">
                {label}
            </h3>
            {/* Контент */}
            <div className="flex flex-col gap-3">
                {children}
            </div>
        </div>
    )
}