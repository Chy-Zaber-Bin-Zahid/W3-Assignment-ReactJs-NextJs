import OverviewCard from '@/components/hotelDetails/overview/OverviewCard'
import OverviewLeft from '@/components/hotelDetails/overview/OverviewLeft'
import { Hotel } from '@/types/hotel'

interface OverviewDetails {
    hotel: Hotel
  }

function OverviewDetails( { hotel }: OverviewDetails) {
  return (
    <div className='flex gap-10 max-[1230px]:flex-col max-[765px]:gap-0'>
        <OverviewLeft hotel={hotel}/>
        <OverviewCard />
    </div>
  )
}

export default OverviewDetails