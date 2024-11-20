import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cancellation from '@/components/hotelDetails/Cancellation'

// Mock the Circle component from @phosphor-icons/react
jest.mock('@phosphor-icons/react', () => ({
  Circle: ({ className }: { className: string }) => <div className={className} data-testid="circle-icon" />,
}))

describe('Cancellation Component', () => {
  beforeEach(() => {
    render(<Cancellation />)
  })


  it('renders three Circle icons for the timeline points', () => {
    const circles = screen.getAllByTestId('circle-icon')
    expect(circles).toHaveLength(3)
  })


  it('contains the correct cancellation policy text', () => {
    expect(screen.getByText('Cancel your reservation before Nov 4 at 11:59 PM, and you will get a full refund. timer are based on the property local time')).toBeInTheDocument()
    expect(screen.getByText('After the you will not get a refund.')).toBeInTheDocument()
  })

  it('applies correct CSS classes for layout', () => {
    const mainContainer = screen.getByText('Today').closest('.flex.flex-col')
    expect(mainContainer).toBeInTheDocument()

    const timelineContainer = screen.getByText('Today').closest('.bg-gray-50')
    expect(timelineContainer).toHaveClass('rounded-lg', 'p-6', 'mb-6')

    const gridContainer = screen.getByText('Before').closest('.grid')
    expect(gridContainer).toHaveClass('grid-cols-[30%_70%]', 'gap-x-8', 'gap-y-6')
  })
})