'use client';
import { useFormContext } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/CompanyAccountForm/model"
import { useState } from "react"

export const CompanyNameInput = () => {
    const { register } = useFormContext<CompanyAccountFormValues>()
    const [symbols, setSymbols] = useState(0)
    return (
        <div className="h-13.5 flex justify-between rounded-[10px] border border-[#c5c2c2] pl-3.75 pt-3.75 pb-4.25 pr-2.5 flex-1 gap-5">
            <input
                {...register("profile.name")}
                type="text"
                placeholder="Название"
                className="outline-none flex-1 placeholder:text-[#c5c2c2]"
                maxLength={100}
                onChange={(event) => setSymbols(event.target.value.length)}
            />
            <div className="font-normal leading-[130%] text-sm text-[#c5c2c2] pt-1">
                {symbols}/100
            </div>
        </div>
    )
}
