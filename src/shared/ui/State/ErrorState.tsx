type ErrorStateProps = {
    message?: string
    className?: string
}

export function ErrorState({
    message = 'Ошибка при загрузке данных',
    className,
}: ErrorStateProps) {
    const classes = className ? `text-center py-10 ${className}` : 'text-center py-10'

    return (
        <div className={classes}>
            <p className="text-red-500 h-full">{message}</p>
        </div>
    )
}