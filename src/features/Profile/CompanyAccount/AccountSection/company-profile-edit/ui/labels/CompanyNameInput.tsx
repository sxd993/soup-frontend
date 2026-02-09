'use client';
import { useFormContext } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model"
import { useState } from "react"

export const CompanyNameInput = () => {
    const { register } = useFormContext<CompanyAccountFormValues>()
    const [symbols, setSymbols] = useState(register("profile.name").name.length || 0)
    const registerName = register("profile.name", {
        onChange: (event) => setSymbols(event.target.value.length),
    })

    return (
        <div className="flex h-13.5 w-full min-w-0 items-center justify-between gap-2 rounded-[10px] border border-[#c5c2c2] pl-3.75 pr-2.5 pt-3.75 pb-4.25 lg:flex-1">
            <input
                {...registerName}
                type="text"
                placeholder="Название"
                className="min-w-0 flex-1 outline-none placeholder:text-[#c5c2c2]"
                maxLength={100}
            />
            <span className="shrink-0 font-normal text-sm leading-[130%] text-[#c5c2c2]">
                {symbols}/100
            </span>
        </div>
    )
}
