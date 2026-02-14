import { AccountField, AccountInput } from "@/shared/ui"
import { ContactPlaceholderIcon } from "./ContactPlaceholderIcon"

export const ClientMaxInput = () => {
    return (
        <AccountField icon={<ContactPlaceholderIcon label="M" />}>
            <AccountInput placeholder="Max" />
        </AccountField>
    )
}
