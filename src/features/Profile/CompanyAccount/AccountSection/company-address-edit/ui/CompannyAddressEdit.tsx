'use client';

import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField";
import { CompanyAccountFormBlock } from "@/shared/ui/CompanyAccount/CompanyAccountFormBlock"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput";
import { AddressIcon } from "@/shared/ui/CompanyAccount/icons/AddressIcon";
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
