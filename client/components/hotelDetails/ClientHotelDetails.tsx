'use client'

import Gallery from '@/components/hotelDetails/gallery/Gallery'
import Overview from '@/components/hotelDetails/overview/OverviewNav'
import { Hotel } from '@/types/hotel'
import OverviewDetails from '@/components/hotelDetails/overview/OverviewDetails'
import Rooms from '@/components/hotelDetails/Rooms'
import Property from '@/components/hotelDetails/Property'
import Amenities from '@/components/hotelDetails/Amenities'
import Question from '@/components/hotelDetails/Question'

export default function ClientHotelDetails({ hotel }: { hotel: Hotel }) {
  return (
    <div className="container">
      <Gallery hotel={hotel} />
      <Overview />
      <OverviewDetails hotel={hotel} />
      <div className="max-w-[793px]">
        <Rooms />
        <Property hotel={hotel} />
        <Amenities />
      </div>
      <Question/>
    </div>
  )
}