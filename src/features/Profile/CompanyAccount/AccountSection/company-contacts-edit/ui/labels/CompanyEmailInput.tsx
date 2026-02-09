import { CompanyAccountField, CompanyAccountInput } from "@/shared/ui"
import { EmailIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/EmailIcon"
import { useCompanyEmailInput } from "../../model/hooks/useCompanyEmailInput"

type CompanyEmailInputProps = {
    index: number;
}

export const CompanyEmailInput = ({ index }: CompanyEmailInputProps) => {
    const { emailInputProps, errorMessage, isEmailFilled } = useCompanyEmailInput(index)
    return (
        <div className="flex w-full flex-col gap-2">
            <CompanyAccountField
                icon={<EmailIcon isActive={isEmailFilled} />}
            >
                <CompanyAccountInput
                    type='email'
                    placeholder='Электронная почта'
                    {...emailInputProps}
                />
            </CompanyAccountField>
            <p className="text-xs text-red-500">{errorMessage}</p>
        </div>
    )
}
