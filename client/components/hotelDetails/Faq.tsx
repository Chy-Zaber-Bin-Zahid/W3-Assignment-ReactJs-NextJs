'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { CaretDown } from "@phosphor-icons/react"
import { Hotel } from '@/types/hotel'

interface PropertyDetails {
    hotel: Hotel
  }


export default function Faq({ hotel }: PropertyDetails) {
  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  
  return (
    <Accordion 
      variant="light"
      className="p-0"
      itemClasses={{
        base: "py-0 w-full",
        title: "font-medium",
        trigger: "flex flex-row-reverse gap-2 h-auto p-0 py-2",
        indicator: "data-[open=true]:-rotate-180",
        content: "text-sm px-2",
      }}
    >
      <AccordionItem
        key="1"
        aria-label="Is Juneau Vacation Home pet-friendly"
        title={`Is ${hotel.title} pet-friendly?`}
        indicator={<CaretDown className="text-default-500 w-5 h-5" />}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Check-in time"
        title={`What time is check-in at ${hotel.title}?`}
        indicator={<CaretDown className="text-default-500 w-5 h-5" />}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Check-out time"
        title={`What time is check-out at ${hotel.title}?`}
        indicator={<CaretDown className="text-default-500 w-5 h-5" />}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Location"
        title={`Where is ${hotel.title} located?`}
        indicator={<CaretDown className="text-default-500 w-5 h-5" />}
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  )
}