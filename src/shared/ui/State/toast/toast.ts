import { toast } from "sonner";

export function showErrorToast(message: string, description?: string) {
    toast.error(message, { description: description ?? undefined });
}

export function showSuccessToast(message: string, description?: string) {
    toast.success(message, { description: description ?? undefined });
}
