import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from '@/components/Navbar'

// Mock the next/link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

// Mock the localStorage
const localStorageMock = (function() {
  let store: { [key: string]: string } = {}
  return {
    getItem: function(key: string) {
      return store[key] || null
    },
    setItem: function(key: string, value: string) {
      store[key] = value.toString()
    },
    clear: function() {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

describe('Nav Component', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the logo', () => {
    render(<Nav />)
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders desktop menu items', () => {
    render(<Nav />)
    expect(screen.getByText('Trip Boards')).toBeInTheDocument()
    expect(screen.getByText('List your property')).toBeInTheDocument()
    expect(screen.getByText('Help')).toBeInTheDocument()
    expect(screen.getByText('My trips')).toBeInTheDocument()
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })

  it('opens mobile menu when toggle button is clicked', () => {
    render(<Nav />)
    const menuButton = screen.getByLabelText('Open menu')
    fireEvent.click(menuButton)
    expect(screen.getByText('Menu')).toBeInTheDocument()
  })

  it('closes mobile menu when close button is clicked', () => {
    render(<Nav />)
    const openMenuButton = screen.getByLabelText('Open menu')
    fireEvent.click(openMenuButton)
    const closeMenuButton = screen.getByLabelText('Close menu')
    fireEvent.click(closeMenuButton)
    expect(screen.queryByText('Menu')).not.toBeInTheDocument()
  })

})