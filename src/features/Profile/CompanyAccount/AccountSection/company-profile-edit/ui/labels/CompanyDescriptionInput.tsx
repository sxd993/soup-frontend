'use client';
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/CompanyAccountForm/model/types/CompanyAccountFormValues.types"

export const CompanyDescriptionInput = () => {
    const [symbols, setSymbols] = useState(0)
    const { register } = useFormContext<CompanyAccountFormValues>()
    const registerDescription = register("profile.description", {
        onChange: (event) => setSymbols(event.target.value.length),
    })
    return (
        <div className="flex flex-col rounded-[10px] border border-[#c5c2c2] p-4 gap-2 min-h-40">
            <textarea
                {...registerDescription}
                placeholder="Описание"
                className="outline-none flex-1 resize-none placeholder:text-[#c5c2c2]"
                maxLength={250}
            />
            <div className="font-normal leading-[130%] text-sm text-[#c5c2c2] pt-1 self-end">
                {symbols}/250
            </div>
        </div>
    )
}
