import { Button, Card } from "@nextui-org/react"
import { Check, Calendar, Info } from "@phosphor-icons/react"
import type { Hotel } from "@/types/hotel"
import Image from 'next/image'

interface BookingCardProps {
  hotel: Hotel
}

export default function Component() {
  return (
    <div className="w-full space-y-4 py-4">
      <Card className="bg-[#1a1f36] text-white p-6 flex flex-row justify-center items-center gap-3 rounded-[10px]">
        <div className="">
          <Image
              src="/images/card.png"
              alt="Card Logo"
              width={130}
              height={130}
            />
        </div>
        <div className="flex flex-col gap-2 justify-center items-start">
          <p className="font-medium">Members get our best prices when signed in!</p>
          <Button 
            className="rounded-[100px] py-1 bg-[#3366FF] hover:bg-[#2952CC] text-white font-medium"
          >
            Sign in
          </Button>
        </div>
      </Card>

      <Card className="p-6 space-y-4 border-2 rounded-[10px] border-gray-200">
        <div className="flex items-center justify-start gap-2 border-b-[2px] pb-3">
          <span className="text-2xl font-semibold">$134</span>
          <span className="text-gray-500 text-sm">per night</span>
        </div>

        <div>
          <div className="flex items-center gap-1 text-green-600">
            <span className="text-sm font-medium">Free cancellation</span>
            <Info className="h-4 w-4" />
          </div>
          <div className="text-sm text-gray-500">Before Mon, Nov 4</div>
        </div>

        <div className="flex items-center gap-2 text-green-600">
          <Check className="h-4 w-4" weight="bold" />
          <span className="text-sm">Your dates are available</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Card className="p-3 border-2 rounded-[10px] border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Start date</div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Nov 18</span>
            </div>
          </Card>
          <Card className="p-3 border-2 rounded-[10px] border-gray-200">
            <div className="text-xs text-gray-500 mb-1">End date</div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Nov 20</span>
            </div>
          </Card>
        </div>

        <Card className="p-3 border-2 rounded-[10px] border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Travelers</div>
          <div className="text-sm">2 travelers</div>
        </Card>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total</span>
            <span className="font-semibold">$543</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Total includes fees, not tax</span>
            <Button 
              variant="light" 
              className="h-auto p-0 text-[#3366FF] min-w-0 underline"
            >
              Price details
            </Button>
          </div>
        </div>

        <Button 
          className="w-full bg-[#3366FF] hover:bg-[#2952CC] text-white font-medium rounded-[100px] py-2"
        >
          Book now
        </Button>

        <div className="text-center text-sm text-gray-500">
          You will not be charged yet
        </div>
      </Card>

      <div>
        <Button 
            variant="light" 
            className="w-full text-[#3366FF] border-b-[2px] pb-4"
          >
            Contact host
          </Button>

          <div className="text-sm text-gray-500 text-center pt-4">
            Property # 983810404ha
          </div>
      </div>
    </div>
  )
}