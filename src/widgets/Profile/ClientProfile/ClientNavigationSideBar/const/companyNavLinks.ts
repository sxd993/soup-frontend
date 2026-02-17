import type { ComponentType } from "react";
import { FavoritesIcon, ProfileIcon } from "@/shared/ui";
import { MyOrdersIcon, NotificationIcon } from "@/shared/ui/ClientAccount";

type ClientNavLink = {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  badge?: number;
};

export const CLIENT_NAV_LINKS: ClientNavLink[] = [
  { label: "Профиль", href: "/profile/client/account", Icon: ProfileIcon },
  { label: "Мои заказы", href: "/profile/client/orders", Icon: MyOrdersIcon },
  { label: "Избранное", href: "/profile/client/favorites", Icon: FavoritesIcon },
  {
    label: "Уведомления",
    href: "/profile/client/notifications",
    Icon: NotificationIcon,
  },
];
