import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput"
import { PhoneIcon } from "@/shared/ui/CompanyAccount/icons/PhoneIcon"
import { useFormContext } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/CompanyAccountForm/model/types/CompanyAccountFormValues.types"

type CompanyPhoneInputProps = {
    index: number;
}

export const CompanyPhoneInput = ({ index }: CompanyPhoneInputProps) => {
    const { register } = useFormContext<CompanyAccountFormValues>()
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
            <CompanyAccountField
                icon={<PhoneIcon />}
                className="flex-1"
            >
                <CompanyAccountInput
                    type='phone'
                    placeholder="Номер телефона"
                    {...register(`contacts.phones.${index}.phone`)}
                />
            </CompanyAccountField>
            <CompanyAccountField className="flex-1">
                <CompanyAccountInput
                    placeholder="ФИО Представителя"
                    {...register(`contacts.phones.${index}.representativeName`)}
                />
            </CompanyAccountField>
        </div>

    )
}
