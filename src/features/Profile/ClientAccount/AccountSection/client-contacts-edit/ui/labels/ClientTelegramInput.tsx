import { AccountField, AccountInput } from "@/shared/ui"
import { ContactPlaceholderIcon } from "./ContactPlaceholderIcon"

export const ClientTelegramInput = () => {
    return (
        <AccountField icon={<ContactPlaceholderIcon label="TG" />}>
            <AccountInput placeholder="Telegram" />
        </AccountField>
    )
}
