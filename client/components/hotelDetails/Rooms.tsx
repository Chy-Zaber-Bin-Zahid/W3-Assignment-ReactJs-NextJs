import { Bed, House, ForkKnife, Buildings, Tree } from "@phosphor-icons/react"
import { Link } from "@nextui-org/react"

export default function Rooms() {
  return (
    <div className="space-y-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#1D1B20]">Rooms & beds</h2>
        <p className="text-lg font-medium">2 bedrooms <span className="text-gray-600 font-normal">(sleeps 4)</span></p>
        <div className="grid grid-cols-2 gap-8 border-b-[2px] pb-8 max-[555px]:grid-cols-1">
          <div>
            <h3 className="font-medium mb-2">Bedroom 1</h3>
            <div className="flex flex-col items-start gap-2">
              <Bed className="w-6 h-6 text-gray-700" />
              <span className="text-gray-600">1 Queen Bed</span>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Bedroom 2</h3>
            <div className="flex flex-col items-start gap-2">
              <Bed className="w-6 h-6 text-gray-700" />
              <span className="text-gray-600">1 Twin Bed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 border-b-[2px] pb-8 pt-6">
        <h2 className="text-2xl font-semibold text-[#1D1B20]">1 bathroom</h2>
        <p className="text-gray-600">Full Bathroom</p>
      </div>

      <div className="space-y-4 pt-6">
        <h2 className="text-2xl font-semibold text-[#1D1B20]">Spaces</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <House className="w-6 h-6 text-gray-700" />
            <span className="text-gray-600">Deck or patio</span>
          </div>
          <div className="flex items-center gap-3">
            <ForkKnife className="w-6 h-6 text-gray-700" />
            <span className="text-gray-600">Kitchen</span>
          </div>
          <div className="flex items-center gap-3">
            <Buildings className="w-6 h-6 text-gray-700" />
            <span className="text-gray-600">Balcony</span>
          </div>
          <div className="flex items-center gap-3">
            <Tree className="w-6 h-6 text-gray-700" />
            <span className="text-gray-600">Garden</span>
          </div>
        </div>
      </div>

      <Link
        href="#"
        className="text-[#3366FF] hover:text-[#2952CC] text-sm"
      >
        See all rooms and beds details
      </Link>
    </div>
  )
}