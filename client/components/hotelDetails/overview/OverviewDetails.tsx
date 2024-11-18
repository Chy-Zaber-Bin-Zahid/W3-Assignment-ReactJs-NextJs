import OverviewCard from '@/components/hotelDetails/overview/OverviewCard'
import OverviewLeft from '@/components/hotelDetails/overview/OverviewLeft'
import { Hotel } from '@/types/hotel'

interface OverviewDetails {
    hotel: Hotel
  }

function OverviewDetails( { hotel }: OverviewDetails) {
  return (
    <div className='grid grid-cols-[800px_1fr] gap-10'>
        <OverviewLeft hotel={hotel}/>
        <OverviewCard />
    </div>
  )
}

export default OverviewDetails