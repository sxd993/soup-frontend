import { ReactNode } from 'react';
import { ProfileIcon, ServicesIcon, ReviewsIcon, BlogIcon, OrdersIcon, MessagesIcon, FavoritesIcon, AdvertisingIcon, SettingsIcon } from '@/shared/ui';

export const ICONS_BY_LABEL: Record<string, ReactNode> = {
    'Профиль': <ProfileIcon className="h-8 w-8" />,
    'Услуги': <ServicesIcon className="h-8 w-8" />,
    'Отзывы': <ReviewsIcon className="h-8 w-8" />,
    'Блог': <BlogIcon className="h-8 w-8" />,
    'Заказы': <OrdersIcon className="h-8 w-8" />,
    'Сообщения': <MessagesIcon className="h-8 w-8" />,
    'Избранное': <FavoritesIcon className="h-8 w-8" />,
    'Реклама': <AdvertisingIcon className="h-8 w-8" />,
    'Настройки': <SettingsIcon className="h-8 w-8" />,
}