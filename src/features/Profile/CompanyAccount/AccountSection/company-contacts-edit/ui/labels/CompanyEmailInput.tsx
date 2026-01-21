import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput"
import { EmailIcon } from "@/shared/ui/CompanyAccount/icons/EmailIcon"

export const CompanyEmailInput = () => {
    return (

        <CompanyAccountField
            className="max-w-1/2"
            icon={<EmailIcon />}
        >
            <CompanyAccountInput
                type='email'
                placeholder='Электронная почта'
            />
        </CompanyAccountField>
    )
}
