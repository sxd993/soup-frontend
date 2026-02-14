import { AccountField, AccountInput } from "@/shared/ui"
import { PhoneIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/PhoneIcon"
import { useFormContext } from "react-hook-form"
import type { ClientAccountFormValues } from "@/widgets/Profile/ClientProfile/AccountCompanyForm/model"

type ClientPhoneInputProps = {
    index: number;
}

export const ClientPhoneInput = ({ index }: ClientPhoneInputProps) => {
    const { register } = useFormContext<ClientAccountFormValues>()

    return (
        <AccountField icon={<PhoneIcon color="#C5C2C2" />}>
            <AccountInput
                type="tel"
                placeholder="Номер телефона"
                {...register(`contacts.${index}.value`)}
            />
        </AccountField>
    )
}
