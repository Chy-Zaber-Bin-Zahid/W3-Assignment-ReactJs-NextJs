'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Gallery from '@/components/hotelDetails/gallery/Gallery'
import Overview from '@/components/hotelDetails/overview/OverviewNav'
import { Hotel } from '@/types/hotel'
import OverviewDetails from '@/components/hotelDetails/overview/OverviewDetails'
import Rooms from '@/components/hotelDetails/Rooms'
import Property from '@/components/hotelDetails/Property'

export default function HotelDetails() {
  const params = useParams()
  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/hotel/${params.id}`)
        setHotel(response.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchHotelData()
  }, [params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!hotel) {
    return <div>Hotel not found</div>
  }

  return (
    <div className="container">
      <Gallery hotel={hotel} />
      <Overview/>
      <OverviewDetails hotel={hotel}/>
      <div className="max-w-[793px]">
        <Rooms/>
        <Property hotel={hotel}/>
      </div>
    </div>
  )
}