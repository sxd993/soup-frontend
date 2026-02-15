import { AccountField, AccountInput } from "@/shared/ui"
import { EmailIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/EmailIcon"
import { useFormContext } from "react-hook-form"
import type { ClientAccountFormValues } from "@/widgets/Profile/ClientProfile/AccountCompanyForm/model"

type ClientEmailInputProps = {
    index: number;
}

export const ClientEmailInput = ({ index }: ClientEmailInputProps) => {
    const { register } = useFormContext<ClientAccountFormValues>()

    return (
        <AccountField icon={<EmailIcon />}>
            <AccountInput
                type="email"
                placeholder="Электронная почта"
                {...register(`contacts.${index}.value`)}
            />
        </AccountField>
    )
}
