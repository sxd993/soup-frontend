export const useScrollToTop = () => {
    const scrollToTop = () => {
        // Надежный скролл для всех устройств
        if ('scrollBehavior' in document.documentElement.style) {
            // Поддержка smooth scroll
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            // Fallback для старых браузеров и мобильных устройств
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 0) {
                window.scrollTo(0, 0)
            }
        }
    }

    return { scrollToTop }
}