import { CheckIcon } from "@/shared/ui/Controls/icons/Common/CheckIcon"

type ClientAccountCheckboxProps = {
    checked: boolean;
    onChange: () => void;
}

export const ClientAccountCheckbox = ({ checked, onChange }: ClientAccountCheckboxProps) => {
    return (
        <span className="relative inline-flex h-5 w-5 shrink-0 leading-none">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="peer h-5 w-5 appearance-none rounded-[6px] border border-primary bg-white checked:bg-primary"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100">
                <CheckIcon />
            </span>
        </span>
    )
}
