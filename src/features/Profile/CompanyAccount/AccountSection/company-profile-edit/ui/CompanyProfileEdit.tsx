import { CompanyAccountFormBlock } from "@/shared/ui"
import { CompanyNameInput, CompanyDescriptionInput, CompanyRegionsSelect } from "./labels/index"
import { CompanyUploadLogo } from "../../company-upload-logo"

export const CompanyProfileEdit = () => {
    return (
        <CompanyAccountFormBlock label="Название и описание">

            {/* Cмена логотипа и название компании*/}
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-end lg:gap-6.5">
                <CompanyUploadLogo />
                <CompanyNameInput />
            </div>

            {/* Описание компании*/}
            <CompanyDescriptionInput />

            {/* Регионы компании*/}
            <CompanyRegionsSelect />

        </CompanyAccountFormBlock>
    )
}
