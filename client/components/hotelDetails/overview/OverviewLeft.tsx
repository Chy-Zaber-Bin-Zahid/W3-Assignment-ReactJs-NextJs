import { Bed, Bathtub, Ruler, Car, Users, ArrowRight, MapPin } from 'phosphor-react'
import { Button } from "@nextui-org/react"
import { Hotel } from '@/types/hotel'

interface OverviewLeftProps {
  hotel: Hotel
}

export default function OverviewLeft({ hotel }: OverviewLeftProps) {
  return (
    <div className="space-y-6 py-6 w-[65%] max-[1230px]:w-full">
      <div>
        <div className="text-sm text-gray-500">Entire home</div>
        <h1 className="text-[32px] font-semibold mt-2 text-[#222222]">{hotel.title}</h1>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-[#1b8f3f] text-white rounded-md text-sm">9.8</span>
          <span className="font-semibold text-[#222222]">Exceptional</span>
        </div>
        <div>
          <Button 
              as="a" 
              href="#reviews" 
              className="text-[#006aff] font-normal p-0 h-auto"
            >
              See all 24 reviews <ArrowRight size={20} />
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-6 gap-x-12">
        {[
          { icon: <Bed size={24} weight="light" />, text: `${hotel.bedroomCount} bedrooms` },
          { icon: <Bathtub size={24} weight="light" />, text: `${hotel.bathroomCount} bathroom` },
          { icon: <Users size={24} weight="light" />, text: "Sleeps 4" },
          { icon: <Ruler size={24} weight="light" />, text: "1155 sq ft" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-[#222222]">{item.icon}</div>
            <span className="text-[#222222]">{item.text}</span>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Popular amenities</h2>
        <div className="grid grid-cols-2 gap-4 gap-x-12">
          {hotel.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3">
              <Car size={24} weight="light" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
        <Button 
          variant="light" 
          className="text-blue-600 mt-4 p-0"
        >
          See all property amenities <ArrowRight size={20} />
        </Button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Explore the area</h2>
        <div className='min-[765px]:hidden mb-4 flex justify-between items-center' >
            <div >
              <div className='flex gap-2 justify-start items-center'>
                <h2 className='font-semibold text-xl' >$134</h2>
                <span>per night</span>
              </div>
              <a href="#" className='text-blue-500 underline' >Price details</a>
            </div>
            <button className='bg-blue-500 rounded-[100px] pt-2 pb-1 px-4 text-white font-semibold'>Book Now</button>
        </div>
        <div className="rounded-lg mb-4">
          <div className="flex gap-4 justify-start items-end max-[765px]:flex-col ">
            <div className="flex-1 max-[765px]:w-full">
                <div className="bg-white w-full rounded-[20px] overflow-hidden flex flex-col items-start border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.831123680264!2d-134.4197406!3d58.301944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5400cf4d6a735a07%3A0x548ee3c3dff8d05a!2sJuneau%2C%20AK!5e0!3m2!1sen!2sus!4v123456789"
                    width="100%"
                    height="170"
                    className="rounded-t-lg"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Juneau, Alaska Map"
                  ></iframe>
                  <div className="p-3 w-full">
                    <div className="text-gray-800 font-medium text-lg">Juneau, Alaska</div>
                    <Button 
                      variant="light" 
                      className="text-blue-600 p-0 h-auto underline-none mt-1"
                    >
                      View in a map
                    </Button>
                  </div>
                </div>
            </div>
            <div className="space-y-2 flex-1 max-[765px]:w-full">
            {[
              { name: "Auke Bay", time: "6 min drive" },
              { name: "University of Alaska-Southeast", time: "10 min drive" },
              { name: "Mendenhall Golf Course", time: "14 min drive" },
              { name: "Juneau, AK (JNU-Juneau Intl.)", time: "14 min drive" }
            ].map((location, index) => (
              <div key={index} className="flex items-center justify-between py-1">
                <div className="flex gap-2">
                  <MapPin size={24} />
                  <span className="text-[#222222]">{location.name}</span>
                </div>
                <span className="text-[#717171]">{location.time}</span>
              </div>
            ))}
                <Button 
                  variant="light" 
                  className="text-blue-600 mt-4 p-0"
                >
                  See more about this area <ArrowRight size={20} />
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}