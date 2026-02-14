import { AccountField, AccountFormBlock, AccountInput } from "@/shared/ui"
import { useFormContext } from "react-hook-form"
import type { ClientAccountFormValues } from "@/widgets/Profile/ClientProfile/AccountCompanyForm/model"

export const ClientProfileEdit = () => {
    const { register } = useFormContext<ClientAccountFormValues>()

    return (
        <AccountFormBlock label="Личные данные">
            <div className="flex flex-col gap-[26px] lg:flex-row lg:items-stretch">

                {/* Загрузка фото */}
                <button
                    type="button"
                    className="px-8 rounded-[16px] bg-[#f8f8f8] text-[14px] leading-[130%] text-[#c5c2c2]"
                > 
                    Загрузите
                    <br />
                    фото
                </button>

                {/* Фио и город */}
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                    <AccountField className="rounded-[16px] px-5 py-0">
                        <AccountInput
                            placeholder="ФИО"
                            className="text-[16px] font-normal leading-[140%] placeholder:text-[#c5c2c2]"
                            {...register("profile.full_name")}
                        />
                    </AccountField>
                    <AccountField className="rounded-[16px] px-5 py-0">
                        <AccountInput
                            placeholder="Город"
                            className="text-[16px] font-normal leading-[140%] placeholder:text-[#c5c2c2]"
                            {...register("profile.city")}
                        />
                    </AccountField>
                </div>
            </div>
        </AccountFormBlock>
    )
}
