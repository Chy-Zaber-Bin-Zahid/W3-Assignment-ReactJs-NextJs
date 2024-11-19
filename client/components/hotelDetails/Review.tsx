'use client'

import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Info, ArrowRight } from "@phosphor-icons/react"
import { Tooltip } from "@nextui-org/tooltip"

export default function Review() {
  const reviews = [
    {
      rating: "10/10",
      label: "Excellent",
      text: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...",
      author: "Kyle G.",
      date: "Sep 25, 2024",
    },
    {
      rating: "10/10", 
      label: "Excellent",
      text: "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
      author: "Cindy B.",
      date: "Sep 23, 2024",
    },
    {
      rating: "10/10", 
      label: "Excellent",
      text: "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
      author: "Cindy B.",
      date: "Sep 23, 2024",
    },
  ]

  return (
    <div className="">
      <div className="grid md:grid-cols-[240px,1fr] gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-1">
            <span className="text-[2.75rem] leading-none font-bold text-[#006F57]">9.8/10</span>
          </div>
          <h2 className="text-xl font-semibold">Exceptional</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-default-500">24 reviews</span>
            <Tooltip 
              content="Reviews are verified unless labeled otherwise"
              placement="right"
            >
              <Button 
                isIconOnly 
                variant="light" 
                size="sm"
                className="min-w-unit-6 w-6 h-6 p-0"
              >
                <Info weight="bold" className="w-4 h-4 text-default-400" />
              </Button>
            </Tooltip>
          </div>
          <p>Reviews are verified unless labeled otherwise.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Recent reviews</h3>
          <div className="grid gap-4 overflow-x-auto hide-scrollbar">
            <div className="flex gap-4 min-w-0">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="flex-none w-[450px]"
                >
                  <CardBody className="px-6 py-0 border-2 rounded-xl h-[300px] grid grid-col-1">
                    <div className="flex items-center gap-2 ">
                      <span className="font-semibold">{review.rating}</span>
                      <span className="text-default-500">{review.label}</span>
                    </div>
                    <div>
                      <p className="text-sm text-default-700 leading-relaxed">{review.text}</p>
                        <button className="text-[#0066FF] text-left text-sm hover:underline">
                            Read more
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <p className="font-semibold text-sm">{review.author}</p>
                        <p className="text-sm text-default-500">{review.date}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          <Button
            className="w-fit text-[#0066FF] rounded-full text-sm py-2 font-medium border-2 hover:bg-default-100"
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            See all 24 reviews
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}