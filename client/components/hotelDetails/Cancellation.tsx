'use client'

import { Circle } from '@phosphor-icons/react'

export default function Component() {
  return (
    <div className="w-full">
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="relative">
          {/* Timeline points */}
          <div className="relative flex justify-between">
            {/* Today */}
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-600 mb-4">Full refund</span>
              <div className="relative">
                <div className="absolute h-[2px] bg-black w-[calc(100vw*0.24)] left-2 top-[5px]" />
                <Circle weight="fill" className="w-3 h-3 text-gray-900 relative z-10" />
              </div>
              <span className="text-sm font-medium text-gray-900 mt-2">Today</span>
            </div>

            {/* Nov 4 */}
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600 mb-4">No refund</span>
              <div className="relative">
                <Circle className="w-3 h-3 text-gray-400 relative z-10 border-2 border-gray-400 rounded-full bg-white" />
              </div>
              <span className="text-sm font-medium text-gray-900 mt-2">Nov 4</span>
            </div>

            {/* Check-in */}
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-600 mb-4">No refund</span>
              <div className="relative">
                <div className="absolute h-[2px] bg-gray-200 w-[calc(100vw*0.21)] right-2 top-[5px]" />
                <Circle weight="fill" className="w-3 h-3 text-gray-900 relative z-10" />
              </div>
              <span className="text-sm font-medium text-gray-900 mt-2">Check-in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}