type LoadingStateProps = {
    message?: string
    className?: string
}

export function LoadingState({
    message = 'Загрузка...',
    className,
}: LoadingStateProps) {
    const classes = className ? `text-center py-10 ${className}` : 'text-center py-10'

    return (
        <div className={classes}>
            <p className="text-accent-quinary">{message}</p>
        </div>
    )
}