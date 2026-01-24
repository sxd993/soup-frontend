export const useScrollToTop = () => {
    const scrollToTop = () => {
        const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })
    }

    return { scrollToTop }
}
