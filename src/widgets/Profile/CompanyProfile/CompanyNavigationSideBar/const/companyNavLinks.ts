import type { ComponentType } from "react";
import {
  AdvertisingIcon,
  BlogIcon,
  FavoritesIcon,
  MessagesIcon,
  ProfileIcon,
  ReviewsIcon,
  ServicesIcon,
} from "@/shared/ui";

type CompanyNavLink = {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  badge?: number;
};

export const COMPANY_NAV_LINKS: CompanyNavLink[] = [
  {
    label: "Профиль",
    href: "/profile/company/account",
    Icon: ProfileIcon,
  },
  {
    label: "Услуги",
    href: "/profile/company/services",
    Icon: ServicesIcon,
  },
  {
    label: "Отзывы",
    href: "/profile/company/reviews",
    Icon: ReviewsIcon,
  },
  {
    label: "Блог",
    href: "/profile/company/blog",
    Icon: BlogIcon,
  },
  {
    label: "Отклики",
    href: "/profile/company/orders",
    Icon: MessagesIcon,
  },
  {
    label: "Избранное",
    href: "/profile/company/favorites",
    Icon: FavoritesIcon,
  },
  {
    label: "Реклама",
    href: "/profile/company/ads",
    Icon: AdvertisingIcon,
  },
];
