'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Image as PhosphorImage, X, CaretLeft, CaretRight } from 'phosphor-react'
import GalleryHeader from '@/components/hotelDetails/gallery/GalleryHeader'
import { Hotel } from '@/types/hotel'

interface GalleryProps {
  hotel: Hotel
}

export default function Gallery({ hotel }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const remainingImages = hotel?.images?.length - 5
  const totalImages = hotel?.images?.length

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      if (isModalOpen) {
        return prev === hotel?.images?.length - 1 ? 5 : prev + 1
      }
      return (prev + 1) % hotel?.images?.length
    })
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => {
      if (isModalOpen) {
        return prev === 5 ? hotel?.images?.length - 1 : prev - 1
      }
      return (prev - 1 + hotel?.images?.length) % hotel?.images?.length
    })
  }

  return (
    <div className="w-full">
      <GalleryHeader />
      {/* Desktop Layout */}
      <div className={`hidden md:grid md:grid-cols-[1fr_1fr] ${totalImages === 1 && "md:grid-cols-[1fr]"} md:gap-1 md:h-[450px]`}>
        <div className="relative">
          <Image
            src={`http://localhost:3001${hotel?.images?.[0]}`}
            alt={`${hotel?.title} - Main Image`}
            fill
            className="object-cover"
          />
        </div>
        <div className={`grid grid-cols-2 ${totalImages <= 3 && "grid-cols-1"} ${totalImages === 1 && "hidden"} gap-1`}>
          {hotel?.images?.slice(1, 5).map((image: string, index: number) => (
            <div key={index} className={`relative ${(totalImages === 4 && image === hotel.images[3]) && "col-span-2"}`}>
              <Image
                src={`http://localhost:3001${image}`}
                alt={`${hotel?.title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
              {index === 3 && remainingImages > 0 && (
                <button
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-[100px] border-none py-2 px-4 outline-none flex items-center"
                  onClick={() => {
                    setIsModalOpen(true)
                    setCurrentImageIndex(5)
                  }}
                >
                  <PhosphorImage size={16} className="mr-2" />
                  {remainingImages}+
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout with Simple Carousel */}
      <div className="md:hidden relative aspect-square">
        <Image
          src={`http://localhost:3001${hotel?.images[currentImageIndex]}`}
          alt={`${hotel?.title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            className="bg-black/50 text-white rounded-full p-2"
            onClick={previousImage}
          >
            <CaretLeft size={24} />
          </button>
          <button
            className="bg-black/50 text-white rounded-full p-2"
            onClick={nextImage}
          >
            <CaretRight size={24} />
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md">
          {currentImageIndex + 1}/{hotel?.images?.length}
        </div>
      </div>

      {/* Gallery Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto flex flex-col">
            <div className="flex justify-between items-center p-4 bg-black/50">
              <h2 className="text-white text-xl font-semibold">
                {hotel.images[currentImageIndex].split('/').pop()?.replace('/uploads/', '')}
              </h2>
              <button
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="relative flex-grow overflow-hidden">
              <Image
                src={`http://localhost:3001${hotel?.images[currentImageIndex]}`}
                alt={`${hotel?.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-center p-4 bg-black/50">
              <button
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={previousImage}
                disabled={currentImageIndex === 5}
              >
                <CaretLeft size={24} />
              </button>
              <span className="text-white px-2 py-1 rounded-md">
                {currentImageIndex - 4}/{remainingImages}
              </span>
              <button
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={nextImage}
                disabled={currentImageIndex === hotel?.images?.length - 1}
              >
                <CaretRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}