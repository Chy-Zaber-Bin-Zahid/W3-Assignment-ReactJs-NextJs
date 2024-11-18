import { notFound } from 'next/navigation'
import { Hotel } from '@/types/hotel'
import ClientHotelDetails from '@/components/hotelDetails/ClientHotelDetails'

async function getHotel(id: string): Promise<Hotel> {
  const res = await fetch(`http://localhost:3001/api/hotel/${id}`, { next: { revalidate: 60 } })
  
  if (!res.ok) {
    throw new Error('Failed to fetch hotel data')
  }

  return res.json()
}

export default async function HotelDetailsPage({ params }: { params: { id: string } }) {
  let hotel: Hotel

  try {
    hotel = await getHotel(params.id)
  } catch (error) {
    console.error('Error fetching hotel data:', error)
    notFound()
  }

  return <ClientHotelDetails hotel={hotel} />
}