'use client'

import Gallery from '@/components/hotelDetails/gallery/Gallery'
import Overview from '@/components/hotelDetails/overview/OverviewNav'
import { Hotel } from '@/types/hotel'
import OverviewDetails from '@/components/hotelDetails/overview/OverviewDetails'
import Rooms from '@/components/hotelDetails/Rooms'
import Property from '@/components/hotelDetails/Property'
import Amenities from '@/components/hotelDetails/Amenities'
import Question from '@/components/hotelDetails/Question'
import Rules from '@/components/hotelDetails/Rules'
import Information from '@/components/hotelDetails/Information'
import Faq from '@/components/hotelDetails/Faq'
import Review from '@/components/hotelDetails/Review'
import Host from '@/components/hotelDetails/Host'
import Message from '@/components/hotelDetails/Message'
import Cancellation from '@/components/hotelDetails/Cancellation'

export default function ClientHotelDetails({ hotel }: { hotel: Hotel }) {
  return (
    <div className="container p-0">
      <Gallery hotel={hotel} />
      <Overview />
      <OverviewDetails hotel={hotel} />
      <div className="max-w-[793px]">
        <Rooms />
        <Property hotel={hotel} />
        <Amenities />
      </div>
      <Question/>
      <div className='grid grid-cols-[25%_75%] gap-x-6 gap-y-8 max-[655px]:grid-cols-1' >
         <h2 className='font-semibold'>House Rules</h2>
         <Rules/>
         <h2 className='font-semibold'>Damage and incidentals</h2>
         <p>You will be responsible for any damage to rental property caused by you or your party during your stay.</p>
         <h2 className='font-semibold' >Cancellation</h2>
         <Cancellation/>
         <h2 className='font-semibold'>Important information</h2>
         <Information/>
         <h2 className='font-semibold'>Frequently asked questions</h2>
         <Faq hotel={hotel}/>
      </div>
      <Review/>
      <div className='grid grid-cols-[25%_75%] gap-x-6 gap-y-8 mb-8 max-[655px]:grid-cols-1'>
          <h2 className='font-semibold'>About the host</h2>
          <Host hotel={hotel}/>
          <h2 className='font-semibold'>Send a message</h2>
          <Message/>
      </div>
    </div>
  )
}