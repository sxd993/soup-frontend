import { CompanyAccountFormBlock } from "@/shared/ui/CompanyAccount/CompanyAccountFormBlock"
import { CompanyLogoUpload, CompanyNameInput, CompanyDescriptionInput, CompanyRegionsSelect } from "./labels/index"

export const CompanyProfileEdit = () => {
    return (
        <CompanyAccountFormBlock label="Название и описание">

            {/* Cмена логотипа и название компании*/}
            <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:gap-6.5">
                <CompanyLogoUpload />
                <CompanyNameInput />
            </div>

            {/* Описание компании*/}
            <CompanyDescriptionInput />

            {/* Регионы компании*/}
            <CompanyRegionsSelect />

        </CompanyAccountFormBlock>
    )
}
