import { Button, Input, RadioCircleIcon } from '@/shared/ui'

export const RegisterForm = () => {
    return (
        <form className="flex flex-col gap-5">
            
            {/* Роль */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="role"
                        value="customer"
                        className="peer sr-only"
                        defaultChecked
                    />
                    <span className="flex h-6 w-6 items-center justify-center text-accent transition opacity-60 peer-checked:opacity-100">
                        <RadioCircleIcon aria-hidden="true" />
                    </span>
                    <span className="text-[#535353] transition peer-checked:text-black">
                        Я заказчик
                    </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="role"
                        value="executor"
                        className="peer sr-only"
                    />
                    <span className="flex h-6 w-6 items-center justify-center text-accent transition opacity-60 peer-checked:opacity-100">
                        <RadioCircleIcon aria-hidden="true" />
                    </span>
                    <span className="text-[#535353] transition peer-checked:text-black">
                        Я исполнитель
                    </span>
                </label>
            </div>

            {/* ФИО / компания */}
            <Input
                type="text"
                name="name"
                placeholder="ФИО/Название компании"
                className="text-secondary"
            />

            {/* E-mail */}
            <Input
                type="email"
                name="email"
                placeholder="E-mail"
                className="text-secondary"
            />

            {/* Пароль */}
            <Input type="password" name="password" placeholder="Пароль" />

            {/* Подтверждение пароля */}
            <Input
                type="password"
                name="passwordConfirm"
                placeholder="Подтверждение пароля"
            />

            {/* Создать аккаунт */}
            <div className="flex justify-center mt-5">
                <Button className="rounded-full bg-primary px-8 py-2 transition hover:bg-accent flex justify-center">
                    <p className="text-accent-senary font-semibold text-base leading-[140%]">
                        Создать аккаунт
                    </p>
                </Button>
            </div>
        </form>
    )
}
