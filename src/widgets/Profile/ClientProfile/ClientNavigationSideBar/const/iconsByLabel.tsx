import { ReactNode } from 'react';
import { ProfileIcon, FavoritesIcon } from '@/shared/ui';
import { MyOrdersIcon, NotificationIcon } from '@/shared/ui/ClientAccount';

export const ICONS_BY_LABEL: Record<string, ReactNode> = {
    'Профиль': <ProfileIcon className="h-8 w-8" />,
    'Мои заказы': <MyOrdersIcon className="h-8 w-8" />,
    'Избранное': <FavoritesIcon className="h-8 w-8" />,
    'Уведомления': <NotificationIcon className="h-8 w-8" />,
}