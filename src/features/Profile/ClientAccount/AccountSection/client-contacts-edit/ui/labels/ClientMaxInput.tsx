import { AccountField, AccountInput } from "@/shared/ui"
import { MaxIcon } from "@/shared/ui/ClientAccount"
import { useFormContext } from "react-hook-form"
import type { ClientAccountFormValues } from "@/widgets/Profile/ClientProfile/AccountCompanyForm/model"

type ClientMaxInputProps = {
    index: number;
}

export const ClientMaxInput = ({ index }: ClientMaxInputProps) => {
    const { register } = useFormContext<ClientAccountFormValues>()

    return (
        <AccountField icon={<MaxIcon color="#C5C2C2" />}>
            <AccountInput
                placeholder="Max"
                {...register(`contacts.${index}.value`)}
            />
        </AccountField>
    )
}
