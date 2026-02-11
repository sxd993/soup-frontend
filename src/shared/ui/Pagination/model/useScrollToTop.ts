export const useScrollToTop = () => {
    const scrollToTop = () => {
        const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
        const behavior = prefersReducedMotion ? "auto" : "smooth"
        const run = () => {
            window.scrollTo({ top: 0, behavior })
            document.documentElement.scrollTo?.({ top: 0, behavior })
        }
        setTimeout(run, 0)
        setTimeout(run, 150)
    }

    return { scrollToTop }
}
