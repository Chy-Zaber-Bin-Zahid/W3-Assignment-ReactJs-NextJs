'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { ArrowLeft, Heart, UploadSimple } from "@phosphor-icons/react";

export default function GalleryHeader() {
  const [isSaved, setIsSaved] = useState(false);

  // Load the saved state from local storage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('isSaved');
    if (savedState === 'true') {
      setIsSaved(true);
    }
  }, []);

  // Toggle save state and persist it to local storage
  const handleSaveToggle = () => {
    const newState = !isSaved;
    setIsSaved(newState);
    localStorage.setItem('isSaved', newState.toString());
  };

  return (
    <div className="flex items-center justify-between py-4 font-semibold">
      <Link
        href="#"
        className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600"
      >
        <ArrowLeft size={20} />
        See all properties
      </Link>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50">
          <UploadSimple className="text-blue-500" size={20} />
          Share
        </button>
        <button
          onClick={handleSaveToggle}
          className={`flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-50 text-gray-500`}
        >
          <Heart className={`text-red-500`} weight={isSaved ? 'fill' : 'regular'} size={20} />
          Save
        </button>
      </div>
    </div>
  );
}
