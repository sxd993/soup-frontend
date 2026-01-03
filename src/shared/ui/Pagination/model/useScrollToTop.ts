export const useScrollToTop = () => {
    const scrollToTop = () => {
        // Используем несколько методов для максимальной совместимости с мобильными устройствами
        try {
            // Метод 1: Прямая установка scrollTop (наиболее надежный для мобильных)
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
            
            // Метод 2: window.scrollTo с немедленным скроллом (для мобильных)
            window.scrollTo(0, 0)
            
            // Метод 3: Используем requestAnimationFrame для гарантированного выполнения
            requestAnimationFrame(() => {
                document.documentElement.scrollTop = 0
                document.body.scrollTop = 0
                window.scrollTo(0, 0)
            })
            
            // Метод 4: Дополнительный вызов через небольшую задержку для мобильных браузеров
            setTimeout(() => {
                document.documentElement.scrollTop = 0
                document.body.scrollTop = 0
                window.scrollTo(0, 0)
            }, 0)
        } catch {
            // Fallback на простой скролл
            window.scrollTo(0, 0)
        }
    }

    return { scrollToTop }
}
