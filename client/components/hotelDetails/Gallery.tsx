'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import GalleryHeader from '@/components/hotelDetails/GalleryHeader'
import axios from 'axios'
import { Hotel } from '@/types/hotel'

export default function GalleryPage() {
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
        console.log(err);
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
    <div className="w-full">
      <GalleryHeader />
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4">
        {hotel.images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={`http://localhost:3001${image}`}
              alt={`${hotel.title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}