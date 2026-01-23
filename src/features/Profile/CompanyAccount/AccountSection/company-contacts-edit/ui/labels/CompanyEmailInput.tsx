import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput"
import { EmailIcon } from "@/shared/ui/CompanyAccount/icons/EmailIcon"
import { useFormContext } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/CompanyAccountForm/model/types/CompanyAccountFormValues.types"

export const CompanyEmailInput = () => {
    const { register } = useFormContext<CompanyAccountFormValues>()
    return (
        <CompanyAccountField
            className="w-full sm:max-w-[50%]"
            icon={<EmailIcon />}
        >
            <CompanyAccountInput
                type='email'
                placeholder='Электронная почта'
                {...register("contacts.email")}
            />
        </CompanyAccountField>
    )
}
