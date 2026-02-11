'use client';

import { StateProvider } from "@/app/providers/State/StateProvider"
import { useCompanyLogoUpload } from "../model/hooks/useCompanyLogoUpload"

export const CompanyUploadLogo = () => {
    const {
        inputRef,
        previewUrl,
        isUploading,
        handleFileChange,
    } = useCompanyLogoUpload()

    const content = (
        <div className="flex flex-col gap-2">
            <label
                htmlFor="company-logo-upload"
                className="group relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-[20px] border border-[#c5c2c2] bg-[#f6f6f6] transition-colors hover:border-[#a9a6a6] lg:h-32 lg:w-32"
            >
                <input
                    id="company-logo-upload"
                    ref={inputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    className="sr-only"
                    onChange={handleFileChange}
                    disabled={isUploading}
                />
                {previewUrl ? (
                    <>
                        <img
                            src={previewUrl}
                            alt="Логотип компании"
                            className="h-full w-full object-contain"
                        />
                        <span
                            className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                        >
                            Изменить
                        </span>
                    </>
                ) : (
                    <p className="text-center text-sm font-medium leading-[140%] text-[#c5c2c2] lg:text-base">
                        Загрузите
                        <br />
                        логотип
                    </p>
                )}
            </label>
        </div>
    )

    return (
        <StateProvider
            isLoading={isUploading}
            isError={false}
            loadingComponent={content}
        >
            {content}
        </StateProvider>
    )
}
