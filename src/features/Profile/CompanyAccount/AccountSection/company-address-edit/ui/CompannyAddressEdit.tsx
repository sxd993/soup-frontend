'use client';

import { CompanyAccountField, CompanyAccountFormBlock, CompanyAccountInput, AddressIcon } from "@/shared/ui";
import { useFormContext } from "react-hook-form";
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types";

export const CompannyAddressEdit = () => {
    const { register } = useFormContext<CompanyAccountFormValues>()
    return (
        <CompanyAccountFormBlock
            label="Адрес"
        >
            {/* Адрес */}
            <CompanyAccountField
                icon={<AddressIcon />}>
                <CompanyAccountInput
                    placeholder="Введите адрес"
                    {...register("profile.address")}
                />
            </CompanyAccountField>
            {/* Карта */}
        </CompanyAccountFormBlock>
    )
}
