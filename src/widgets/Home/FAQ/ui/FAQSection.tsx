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
            <div className="flex flex-col gap-10 md:gap-15">
                <div className="lg:hidden">
                    <SectionTitle
                        className="text-[28px] leading-[110%] font-bold"
                        title={
                            <>
                                <span className="block md:hidden whitespace-nowrap">
                                    Часто задаваемые<br />вопросы
                                </span>
                                <span className="hidden md:inline whitespace-nowrap">
                                    Часто задаваемые вопросы
                                </span>
                            </>
                        }
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-10 md:gap-15">
                    <div className="hidden lg:block lg:w-1/5">
                        <SectionTitle
                            className="text-[28px] leading-[110%] font-bold"
                            title={
                                <span className="block">
                                    Часто<br />
                                    задаваемые<br />
                                    вопросы
                                </span>
                            }
                        />
                    </div>

                    <div className="lg:w-4/5">
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
            </div>
        </section>
    )
}
