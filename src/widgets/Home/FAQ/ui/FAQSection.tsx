"use client"

import { FAQ_DATA } from "../model/const/faq"
import { useFAQSection } from "../model/hooks/useFAQSection"
import { useFAQStore } from "../model/store/useFAQStore"
import { FAQCard } from "./FAQCard"
import { SectionTitle } from "@/shared/ui/SectionTitle"

export const FAQSection = () => {
    const openIndices = useFAQStore(state => state.openIndices)
    const handleToggle = useFAQStore(state => state.handleToggle)
    const { cardProps } = useFAQSection({ items: FAQ_DATA, openIndices })

    return (
        <section className="mb-15 mt-25">
            <div className="flex flex-col md:flex-row gap-10 md:gap-15">
                <div className="md:w-1/5">
                    <SectionTitle title={
                        <>
                            <span className="block md:hidden whitespace-nowrap">
                                Часто задаваемые вопросы
                            </span>
                            <span className="hidden md:block">
                                Часто<br />
                                задаваемые<br />
                                вопросы
                            </span>
                        </>
                    } />
                </div>

                <div className="md:w-4/5">
                    <div className="flex flex-col">
                        {FAQ_DATA.map((item, index) => {
                            const props = cardProps[index]
                            return (
                                <div key={item.id} style={props.wrapperStyle}>
                                    <FAQCard
                                        item={item}
                                        isOpen={props.isOpen}
                                        onToggle={(isOpen) => handleToggle(index, isOpen)}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
