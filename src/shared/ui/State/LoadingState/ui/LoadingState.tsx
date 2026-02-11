import { Spin } from "antd";
import type { SpinProps } from "antd";

type LoadingStateProps = {
    size?: SpinProps["size"];
};

export function LoadingState({ size = "large" }: LoadingStateProps) {
    return (
        <div className="flex items-center justify-center py-10">
            <Spin
                spinning
                size={size}
                styles={{
                    indicator: {
                        color: "var(--color-primary)",
                    },
                }}
            />
        </div>
    );
}
