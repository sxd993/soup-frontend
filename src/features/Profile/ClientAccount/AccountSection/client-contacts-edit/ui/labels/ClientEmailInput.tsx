import { AccountField, AccountInput } from "@/shared/ui"
import { ContactPlaceholderIcon } from "./ContactPlaceholderIcon"

export const ClientEmailInput = () => {
    return (
        <AccountField icon={<ContactPlaceholderIcon label="@" />}>
            <AccountInput type="email" placeholder="Электронная почта" />
        </AccountField>
    )
}
