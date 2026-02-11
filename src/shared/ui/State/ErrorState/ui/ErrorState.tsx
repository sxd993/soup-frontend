import { Result } from "antd";

type ErrorStateProps = {
    title?: string;
    subTitle?: string;
    extra?: React.ReactNode;
    className?: string;
};

export function ErrorState({
    title = "Ошибка при загрузке данных",
    subTitle,
    extra,
    className,
}: ErrorStateProps) {
    return (
        <div className={className ? `py-10 ${className}` : "py-10"}>
            <Result status="error" title={title} subTitle={subTitle} extra={extra} />
        </div>
    );
}
