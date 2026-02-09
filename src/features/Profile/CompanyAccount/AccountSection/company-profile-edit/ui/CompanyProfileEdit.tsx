import { CompanyAccountFormBlock } from "@/shared/ui"
import { CompanyNameInput, CompanyDescriptionInput, CompanyRegionsSelect } from "./labels/index"
import { CompanyUploadLogo } from "../../company-upload-logo"

export const CompanyProfileEdit = () => {
    return (
        <CompanyAccountFormBlock label="Название и описание">

            {/* Cмена логотипа и название компании*/}
            <div className="flex flex-row items-end gap-3 lg:gap-6.5">
                <div className="shrink-0">
                    <CompanyUploadLogo />
                </div>
                <div className="min-w-0 flex-1">
                    <CompanyNameInput />
                </div>
            </div>

            {/* Описание компании*/}
            <CompanyDescriptionInput />

            {/* Регионы компании*/}
            <CompanyRegionsSelect />

        </CompanyAccountFormBlock>
    )
}
