import { CompanyAccountField, CompanyAccountInput } from "@/shared/ui"
import { PhoneIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/PhoneIcon"
import { useCompanyPhoneInput } from "../../model/hooks/useCompanyPhoneInput"

type CompanyPhoneInputProps = {
    index: number;
}

export const CompanyPhoneInput = ({ index }: CompanyPhoneInputProps) => {
    const { phoneInputProps, representativeInputProps, errorMessage, isPhoneFilled } = useCompanyPhoneInput(index)
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
            <div className="flex flex-1 flex-col gap-2">
                <CompanyAccountField
                    icon={<PhoneIcon isActive={isPhoneFilled} />}
                >
                    <CompanyAccountInput
                        type='phone'
                        placeholder="Номер телефона"
                        {...phoneInputProps}
                    />
                </CompanyAccountField>
                <p className="text-xs text-red-500">{errorMessage}</p>
            </div>
            <CompanyAccountField className="flex-1">
                <CompanyAccountInput
                    placeholder="ФИО Представителя"
                    {...representativeInputProps}
                />
            </CompanyAccountField>
        </div>

    )
}
