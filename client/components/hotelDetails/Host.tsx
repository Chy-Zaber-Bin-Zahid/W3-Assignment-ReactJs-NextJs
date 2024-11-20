import React from 'react'
import { Hotel } from '@/types/hotel'

interface HostDetails {
    hotel: Hotel
  }

function Host({ hotel }: HostDetails) {
  return (
    <div className='flex flex-col gap-16'>
        <h2>Hosted by {hotel?.host?.name}</h2>
        <div className="flex flex-col gap-1">
          <h2>Languages:</h2>
          <p>English, French, German, Spanish</p>
        </div>
    </div>
  )
}

export default Host