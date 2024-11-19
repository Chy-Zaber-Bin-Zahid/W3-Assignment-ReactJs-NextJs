import { Button } from '@nextui-org/react'
import React from 'react'

function Message() {
  return (
    <div>
      <Button
            className="w-fit text-[#0066FF] rounded-full text-sm py-2 font-medium border-2 hover:bg-default-100"
          >
            Contact Host
          </Button>
    </div>
  )
}

export default Message