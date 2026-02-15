import { AccountField, AccountInput } from "@/shared/ui"
import { TgIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/TgIcon"
import { useFormContext } from "react-hook-form"
import type { ClientAccountFormValues } from "@/widgets/Profile/ClientProfile/AccountCompanyForm/model"

type ClientTelegramInputProps = {
    index: number;
}

export const ClientTelegramInput = ({ index }: ClientTelegramInputProps) => {
    const { register } = useFormContext<ClientAccountFormValues>()

    return (
        <AccountField icon={<TgIcon color="#C5C2C2" />}>
            <AccountInput
                placeholder="Telegram"
                {...register(`contacts.${index}.value`)}
            />
        </AccountField>
    )
}
