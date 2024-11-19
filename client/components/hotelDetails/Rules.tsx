'use client'
import { Card, CardBody } from "@nextui-org/card"
import { Baby, Clock, Prohibit, Dog } from "@phosphor-icons/react"

export default function Rules() {
  return (
    <Card className="">
      <CardBody className="gap-3 px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Check in after 3:00 PM</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Minimum age to rent: 25</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Check in before 11:00 AM</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Baby className="w-5 h-5" weight="bold" />
              <span className="font-medium">Children</span>
            </div>
            <p className="text-default-500 text-sm">Children allowed: ages 0-17</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Prohibit className="w-5 h-5" weight="bold" />
              <span className="font-medium">Events</span>
            </div>
            <p className="text-default-500 text-sm">No events allowed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Dog className="w-5 h-5" weight="bold" />
              <span className="font-medium">Pets</span>
            </div>
            <p className="text-default-500 text-sm">No pets allowed</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" weight="bold" />
              <span className="font-medium">Smoking</span>
            </div>
            <p className="text-default-500 text-sm">Smoking is not permitted</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}