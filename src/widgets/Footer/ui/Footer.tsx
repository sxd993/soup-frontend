import { MainIcon2 } from '@/shared/ui/icons';

export const Footer = () => {

    return (
        <footer className="bg-[#2f2f2f] min-h-[500px] p-0!">
            <div className='flex  flex-col justify-between min-h-[500px] items-center py-15 max-w-[1200px] mx-auto'>
                <div className='flex  justify-between items-start w-full'>
                    {/* Левая колонка */}
                    <div className="flex flex-col justify-between h-full">
                        <MainIcon2 />
                        <div>
                            <p>Политика конфиденциальности </p>
                        </div>
                    </div>
                    {/* Средняя колонка */}
                    <div className='text-white flex flex-col justify-between h-full!'>
                        <div>Контакты</div>
                        <div>
                            <p className='text-[#EBE7DF]'>Договор оферты </p>
                        </div>
                    </div>
                    {/* Правая колонка */}
                    <div className='text-white'>
                        <ul className='flex flex-col gap-6 font-semibold tracking-[1%] leading-[120%] text-base'>
                            <li>Каталог</li>
                            <li>Новости</li>
                            <li>Конкурсы</li>
                            <li>Блоги</li>
                            <li>Разместить заказ</li>
                        </ul>
                        <div>                    <p>Все права защищены </p></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}