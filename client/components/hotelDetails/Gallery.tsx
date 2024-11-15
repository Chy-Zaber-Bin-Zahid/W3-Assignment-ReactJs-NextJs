import { Hotel } from "@/types/hotel"
import Image from 'next/image'
import { ArrowLeft, Heart, UploadSimple } from "@phosphor-icons/react"
import Link from "next/link"

async function getHotel(id: string): Promise<Hotel> {
  const res = await fetch(`http://localhost:3001/api/hotel/${id}`)
  if (!res.ok) throw new Error('Failed to fetch hotel')
  return res.json()
}

export default async function GalleryPage({ id: string }) {
  const hotel = await getHotel(id)

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4 font-semibold">
        <Link
          href="/hotels"
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
        >
          <ArrowLeft size={20} />
          See all properties
        </Link>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50">
            <UploadSimple className="text-blue-500" size={20} />
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-full hover:bg-gray-50">
            <Heart className="text-red-500" size={20} />
            Save
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {hotel.images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={`/server${image}`}
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