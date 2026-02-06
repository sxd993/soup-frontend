import { CurrentTariff, TariffPicker } from "@/features/Profile/CompanyAccount/AdsSection"

export const AdCompanySection = () => {
    return (
        <div className="flex flex-col gap-5">
            <CurrentTariff />
            <TariffPicker />
        </div>
    )
}
