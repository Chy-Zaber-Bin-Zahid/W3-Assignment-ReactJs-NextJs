'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Globe, X, List, CaretDown } from "@phosphor-icons/react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Select, SelectItem, Input } from "@nextui-org/react"

type Region = {
  name: string
  currency: string
  code: string
}

const regions: Region[] = [
  { name: "United States", currency: "USD", code: "US" },
  { name: "United Kingdom", currency: "GBP", code: "UK" },
  { name: "European Union", currency: "EUR", code: "EU" },
  { name: "Japan", currency: "JPY", code: "JP" },
  { name: "Australia", currency: "AUD", code: "AU" },
  { name: "Canada", currency: "CAD", code: "CA" },
  { name: "Portugal", currency: "EUR", code: "PT" },
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0])
  const [tempRegion, setTempRegion] = useState<Region>(selectedRegion)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const menuItems: string[] = [
    selectedRegion.name,
    "Trip Boards",
    "List your property",
    "Help",
    "My trips",
    "Sign in",
  ]

  useEffect(() => {
    const savedRegion = localStorage.getItem('selectedRegion')
    if (savedRegion) {
      const region = regions.find(r => r.code === savedRegion)
      if (region) setSelectedRegion(region)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      setTempRegion(selectedRegion)
    }
  }, [isOpen, selectedRegion])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleRegionChange = (regionCode: string) => {
    const region = regions.find(r => r.code === regionCode)
    if (region) {
      setTempRegion(region)
    }
  }

  const handleSave = () => {
    setSelectedRegion(tempRegion)
    localStorage.setItem('selectedRegion', tempRegion.code)
    onClose()
  }

  return (
    <>
      <nav className="border-b border-gray-300">
        <div className="px-4 py-4 flex justify-between items-center">
          {/* Logo placeholder */}
          <div className="text-xl font-bold">Logo</div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6 text-sm">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={(e) => {
                  if (item === selectedRegion.name) {
                    e.preventDefault()
                    onOpen()
                  }
                }}
              >
                {item === selectedRegion.name && <Globe size={20} />}
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#111111] z-50 sm:hidden">
            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={24} color="white" />
              </button>
            </div>
            <div className="px-2 py-4">
              {menuItems.map((item, index) => (
                <div key={`${item}-${index}`} className="py-1">
                  <Link
                    href="#"
                    className={`w-full px-3 py-2 rounded-lg flex items-center gap-2 transition-colors
                      ${index === 0 ? 'text-white hover:bg-gray-800' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
                      ${index === menuItems.length - 1 ? 'text-red-500 hover:text-red-400' : ''}`}
                    onClick={(e) => {
                      if (item === selectedRegion.name) {
                        e.preventDefault()
                        onOpen()
                      } else {
                        toggleMenu()
                      }
                    }}
                  >
                    {item === selectedRegion.name && <Globe size={20} />}
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="md"
        placement="center"
        classNames={{
          base: "bg-red-500",
          closeButton: "top-4 right-4",
          header: "border-none pb-0",
          body: "py-6",
          footer: "pt-0",
          backdrop: "bg-[rgba(0, 0, 0, 0.5)]",
        }}
      >
        <ModalContent className="max-w-[400px] rounded-lg bg-white border-2">
          <ModalHeader className="flex items-center gap-1">
            <X size={20} className="text-gray-400 cursor-pointer" onClick={onClose} />
            <h3 className="text-base font-medium">Display settings</h3>
          </ModalHeader>
          <ModalBody>
            <div className="flex items-start gap-2 mb-6">
              <span className="text-warning">⚠️</span>
              <p className="text-sm text-default-700">
                Changing your region could change your rewards program. To stay with your current rewards program keep your
                region the same. The key is currently only available in select regions.
              </p>
            </div>
            <div className="space-y-4">
            <label htmlFor="">Select Region</label>
              <Select
                labelPlacement="outside"
                selectedKeys={[tempRegion.code]}
                onChange={(e) => handleRegionChange(e.target.value)}
                className="w-full"
                classNames={{
                  label: "text-sm font-medium text-default-700",
                  trigger: "border-2 mb-4 rounded  border-default-200"
                }}
              >
                {regions.map((region) => (
                  <SelectItem className="bg-gray-200 px-4 py-2" key={region.code} value={region.code}>
                    {region.name}
                  </SelectItem>
                ))}
              </Select>
              <label htmlFor="">Currency</label>
              <Input
                labelPlacement="outside"
                value={tempRegion.currency}
                isReadOnly
                className="border-2 mb-4 rounded  border-default-200"
                classNames={{
                  label: "text-sm font-medium text-default-700",
                }}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onPress={handleSave} 
              className="w-full rounded-lg bg-[#0066FF] text-white"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}