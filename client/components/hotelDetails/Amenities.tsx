import { Knife, Waves, Tree, Car, WifiHigh } from "@phosphor-icons/react"
import Link from "next/link"

export default function Amenities() {
  const amenities = [
    { icon: <Knife className="w-5 h-5" />, label: "Kitchen" },
    { icon: <WifiHigh className="w-5 h-5" />, label: "Dryer" },
    { icon: <Car className="w-5 h-5" />, label: "Parking available" },
  ]

  const amenitiesSecond = [
    { icon: <WifiHigh className="w-5 h-5" />, label: "Washer" },
    { icon: <Tree className="w-5 h-5" />, label: "Outdoor Space" },
    { icon: <Waves className="w-5 h-5" />, label: "Ocean view" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4 max-[522px]:grid-cols-1" >
        <h2 className="text-2xl font-semibold tracking-tight">Amenities</h2>
        <div className="flex flex-col gap-3 max-[522px]:order-last">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-gray-500">{amenity.icon}</div>
              <span className="text-sm">{amenity.label}</span>
            </div>
          ))}
          <Link
          href="#"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline inline-block mt-2"
        >
          See all 34 amenities
        </Link>
        </div>
        <div className="flex flex-col gap-3">
          {amenitiesSecond.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-gray-500">{amenity.icon}</div>
              <span className="text-sm">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
      </div>
    </div>
  )
}