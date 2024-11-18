'use client'
import { Card, CardBody } from "@nextui-org/card"

export default function Information() {
  return (
    <Card className="">
      <CardBody className="gap-6 m-0 p-0">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">You need to know</h2>
            <div className="space-y-4 text-default-600">
              <p>Extra-person charges may apply and vary depending on property policy</p>
              
              <p>Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges</p>
              
              <p>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</p>
              
              <p>Onsite parties or group events are strictly prohibited</p>
              
              <p>Host has indicated there is a carbon monoxide detector on the property</p>
              
              <p>Host has indicated there is a smoke detector on the property</p>
              
              <p>Safety features at this property include a fire extinguisher and a first aid kit</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}