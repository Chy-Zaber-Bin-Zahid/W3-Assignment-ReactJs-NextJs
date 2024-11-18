'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@nextui-org/react"
import { Image as PhosphorImage } from 'phosphor-react'
import GalleryHeader from '@/components/hotelDetails/gallery/GalleryHeader'
import { Hotel } from '@/types/hotel'

interface GalleryProps {
  hotel: Hotel
}

export default function Gallery({ hotel }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const remainingImages = hotel.images.length - 5
  const totalImages = hotel.images.length

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length)
  }

  return (
    <div className="w-full">
      <GalleryHeader />
      {/* Desktop Layout */}
      <div className={`hidden md:grid md:grid-cols-[1fr_1fr] ${totalImages === 1 && "md:grid-cols-[1fr]"} md:gap-1 md:h-[450px]`}>
        <div className="relative">
          <Image
            src={`http://localhost:3001${hotel.images[0]}`}
            alt={`${hotel.title} - Main Image`}
            fill
            className="object-cover"
          />
        </div>
        <div className={`grid grid-cols-2 ${totalImages <= 3 && "grid-cols-1"} ${totalImages === 1 && "hidden"} gap-1`}>
          {hotel.images.slice(1, 5).map((image: string, index: number) => (
            <div key={index}  className={`relative ${(totalImages === 4 && image === hotel.images[3]) && "col-span-2"}`}>
              <Image
                src={`http://localhost:3001${image}`}
                alt={`${hotel.title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
              {index === 3 && remainingImages > 0 && (
                <Button
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-[100px] border-none py-2 outline-none"
                  onClick={() => setIsModalOpen(true)}
                >
                  <PhosphorImage size={16} className="" />
                  {remainingImages}+
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout with Simple Carousel */}
      <div className="md:hidden relative aspect-square">
        <Image
          src={`http://localhost:3001${hotel.images[currentImageIndex]}`}
          alt={`${hotel.title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            className="bg-black/50 text-white rounded-full"
            onClick={previousImage}
          >
            ←
          </Button>
          <Button
            className="bg-black/50 text-white rounded-full"
            onClick={nextImage}
          >
            →
          </Button>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md">
          {currentImageIndex + 1}/{hotel.images.length}
        </div>
      </div>
    </div>
  )
}