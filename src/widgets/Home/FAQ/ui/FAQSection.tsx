"use client"

import { FAQ_DATA } from "../model/faq"
import { useFAQState } from "../model/useFAQState"
import { useFAQSection } from "../model/useFAQSection"
import { FAQCard } from "./FAQCard"
import { SectionTitle } from "@/shared/ui/SectionTitle"

export const FAQSection = () => {
    const { openIndices, handleToggle } = useFAQState(0)
    const { getCardProps } = useFAQSection({ items: FAQ_DATA, openIndices })

    return (
        <section className="mb-15 mt-25">
            <div className="flex flex-col md:flex-row gap-10 md:gap-15">
                <div className="md:w-1/5">
                    <SectionTitle title={
                        <> 
                            Часто<br />
                            задаваемые<br />
                            вопросы
                        </>
                    } />
                </div>

                <div className="md:w-4/5">
                    <div className="flex flex-col">
                        {FAQ_DATA.map((item, index) => {
                            const props = getCardProps(index)
                            
                            return (
                                <div key={item.id} style={props.wrapperStyle}>
                                    <FAQCard 
                                        item={item}
                                        defaultOpen={props.defaultOpen}
                                        isPreviousOpen={props.isPreviousOpen}
                                        isFirst={props.isFirst}
                                        isSecond={props.isSecond}
                                        isLast={props.isLast}
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