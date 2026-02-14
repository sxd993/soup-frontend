import { AccountField, AccountInput } from "@/shared/ui"
import { ContactPlaceholderIcon } from "./ContactPlaceholderIcon"

export const ClientPhoneInput = () => {
    return (
        <AccountField icon={<ContactPlaceholderIcon label="P" />}>
            <AccountInput type="tel" placeholder="Номер телефона" />
        </AccountField>
    )
}
