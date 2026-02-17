'use client';

import { useCompanyRegionsSelect } from "../../model/hooks/useCompanyRegionsSelect"

export const CompanyRegionsSelect = () => {
    const {
        query,
        setQuery,
        inputRef,
        containerRef,
        isOpen,
        selected,
        removeRegion,
        dropdownRegions,
        isDropdownVisible,
        openDropdown,
        handleSelectRegion,
    } = useCompanyRegionsSelect()

    return (
        <div className="flex flex-col gap-3" ref={containerRef}>
            <div className="rounded-[10px] border border-[#c5c2c2] pl-3.75 pt-3.75 pb-4.25 pr-2.5">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Выберите регион"
                    className="outline-none w-full text-base placeholder:text-[#c5c2c2]"
                    value={query}
                    onFocus={openDropdown}
                    onClick={openDropdown}
                    onChange={(event) => setQuery(event.target.value)}
                />
                {isOpen && isDropdownVisible && (
                    <div className="mt-5 flex flex-col gap-2 max-h-40 overflow-auto">
                        {dropdownRegions.map((region) => (
                            <button
                                key={region.id}
                                type="button"
                                className="cursor-pointer text-left text-sm text-secondary hover:text-primary"
                                onClick={() => handleSelectRegion(region)}
                            >
                                {region.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {selected.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {selected.map((region) => (
                        <button
                            key={region.id}
                            type="button"
                            className="group inline-flex cursor-pointer items-center gap-2 w-fit px-4 py-1 text-[11px] font-medium bg-[#f1f3ec] hover:bg-[#f1f3ec] transition-all duration-300 text-secondary rounded-full"
                            onClick={() => removeRegion(region.id)}
                        >
                            {region.label}
                            <span className="text-[10px]">
                                x
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
