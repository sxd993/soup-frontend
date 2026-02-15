import type { CreateOrderPayload } from "../api/createOrder";

const PENDING_ORDER_KEY = "pending-create-order";
/** Флаг в sessionStorage: редирект на регистрацию был с формы заказа (только эта вкладка/сессия). */
export const PENDING_ORDER_SESSION_FLAG = "pending-create-order-from-form";

export function savePendingOrder(payload: CreateOrderPayload): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PENDING_ORDER_KEY, JSON.stringify(payload));
    window.sessionStorage.setItem(PENDING_ORDER_SESSION_FLAG, "1");
  } catch {
    // ignore
  }
}

export function hadPendingOrderRedirect(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(PENDING_ORDER_SESSION_FLAG) === "1";
  } catch {
    return false;
  }
}

export function clearPendingOrderSessionFlag(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(PENDING_ORDER_SESSION_FLAG);
  } catch {
    // ignore
  }
}

export function getPendingOrder(): CreateOrderPayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(PENDING_ORDER_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CreateOrderPayload;
  } catch {
    return null;
  }
}

export function clearPendingOrder(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(PENDING_ORDER_KEY);
    window.sessionStorage.removeItem(PENDING_ORDER_SESSION_FLAG);
  } catch {
    // ignore
  }
}
