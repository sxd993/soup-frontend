import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput"
import { PhoneIcon } from "@/shared/ui/CompanyAccount/icons/PhoneIcon"

export const CompanyPhoneInput = () => {
    return (
        <div className="flex gap-5">
            <CompanyAccountField
                icon={<PhoneIcon />}
                className="flex-1"
            >
                <CompanyAccountInput
                    type='phone'
                    placeholder="Номер телефона"
                />
            </CompanyAccountField>
            <CompanyAccountField className="flex-1">
                <CompanyAccountInput
                    placeholder="ФИО Представителя"
                />
            </CompanyAccountField>
        </div>

    )
}
