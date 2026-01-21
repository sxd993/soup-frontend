'use client';

import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField";
import { CompanyAccountFormBlock } from "@/shared/ui/CompanyAccount/CompanyAccountFormBlock"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput";
import { AddressIcon } from "@/shared/ui/CompanyAccount/icons/AddressIcon";
import { useState } from "react";

export const CompannyAddressEdit = () => {
    const [address, setAddress] = useState('')
    return (
        <CompanyAccountFormBlock
            label="Адрес"
        >
            {/* Адрес */}
            <CompanyAccountField
                icon={<AddressIcon />}>
                <CompanyAccountInput
                    placeholder="Введите адрес"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
            </CompanyAccountField>
            {/* Карта */}
        </CompanyAccountFormBlock>
    )
}
