'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { ArrowLeft, Heart, UploadSimple, X, Link as LinkIcon, WhatsappLogo, MessengerLogo, FacebookLogo, TwitterLogo, Check } from "@phosphor-icons/react";
import Image from 'next/image';

export default function GalleryHeader() {
  const [isSaved, setIsSaved] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

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

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between py-4 font-semibold">
        <Link
          href="#"
          className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600"
        >
          <ArrowLeft size={20} />
          See all properties
        </Link>
        <div className="flex items-center gap-2">
          <button 
            className="flex items-center gap-2 px-4 max-[465px]:px-2 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50"
            onClick={() => setIsShareModalOpen(true)}
          >
            <UploadSimple className="text-blue-500" size={20} />
            <span className="max-[465px]:hidden" >Share</span>
          </button>
          <button
            onClick={handleSaveToggle}
            className={`flex items-center gap-2 px-4 max-[465px]:px-2 py-2 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-50 text-gray-500`}
          >
            <Heart className={`text-red-500`} weight={isSaved ? 'fill' : 'regular'} size={20} />
            <span  className="max-[465px]:hidden" >Save</span>
          </button>
        </div>
      </div>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-xl mx-4">
            {/* Close button */}
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            {/* Preview card */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg mb-6 mt-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/images/1731902498792-530955075.jpg"
                  alt="Property preview"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Share this property</h3>
                <p className="text-sm text-gray-500">United States of America</p>
              </div>
            </div>

            {/* Share options */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00B800] text-white rounded-full">
                  <WhatsappLogo size={24} />
                </div>
                <span className="text-xs">Messages</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50">
                <div className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full">
                  <WhatsappLogo size={24} />
                </div>
                <span className="text-xs">WhatsApp</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0084FF] text-white rounded-full">
                  <MessengerLogo size={24} />
                </div>
                <span className="text-xs">Messenger</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50">
                <div className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-full">
                  <FacebookLogo size={24} />
                </div>
                <span className="text-xs">Facebook</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50">
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full">
                  <TwitterLogo size={24} />
                </div>
                <span className="text-xs">X</span>
              </button>
              <button 
                onClick={handleCopyLink}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full">
                  {isCopied ? <Check size={24} className="text-green-500" /> : <LinkIcon size={24} />}
                </div>
                <span className="text-xs">{isCopied ? 'Copied!' : 'Copy link'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}