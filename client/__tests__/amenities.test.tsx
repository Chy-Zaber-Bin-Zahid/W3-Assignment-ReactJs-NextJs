import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Amenities from '@/components/hotelDetails/Amenities'

// Mock the next/link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

// Mock the @phosphor-icons/react icons
jest.mock('@phosphor-icons/react', () => ({
  Knife: () => <div data-testid="knife-icon" />,
  Waves: () => <div data-testid="waves-icon" />,
  Tree: () => <div data-testid="tree-icon" />,
  Car: () => <div data-testid="car-icon" />,
  WifiHigh: () => <div data-testid="wifi-icon" />,
}))

describe('Amenities Amenities', () => {
  it('renders the Amenities title', () => {
    render(<Amenities />)
    expect(screen.getByText('Amenities')).toBeInTheDocument()
  })

  it('renders the "See all 34 amenities" link', () => {
    render(<Amenities />)
    const link = screen.getByText('See all 34 amenities')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })

  it('applies correct CSS classes for responsive layout', () => {
    render(<Amenities />)
    const mainContainer = screen.getByText('Amenities').closest('div')
    expect(mainContainer).toHaveClass('grid-cols-3')
    expect(mainContainer).toHaveClass('max-[522px]:grid-cols-1')
  })

})