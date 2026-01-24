import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput"
import { EmailIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/EmailIcon"
import { useFormContext } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types"

type CompanyEmailInputProps = {
    index: number;
}

export const CompanyEmailInput = ({ index }: CompanyEmailInputProps) => {
    const { register } = useFormContext<CompanyAccountFormValues>()
    return (
        <CompanyAccountField
            className="max-w-[48.5%]"
            icon={<EmailIcon />}
        >
            <CompanyAccountInput
                type='email'
                placeholder='Электронная почта'
                {...register(`contacts.emails.${index}`)}
            />
        </CompanyAccountField>
    )
}
