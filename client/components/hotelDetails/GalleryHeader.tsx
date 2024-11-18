'use client'
import Link from "next/link"
import { ArrowLeft, Heart, UploadSimple } from "@phosphor-icons/react"

export default function GalleryHeader() {
  return (
    <div className="flex items-center justify-between py-4 font-semibold">
      <Link
        href="#"
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
  )
}