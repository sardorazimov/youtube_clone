"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  "Musiqa",
  "Gaming",
  "Mikslar",
  "Jonli",
  "Basketbol",
  "Jangovar va sarguzasht o'yinlar",
  "Animatsion film",
  "Futbol",
  "Rep aytish",
  "Yaqinda yuklangan",
  "Tomosha qilish",
  "Yangi sizga",
  "Tavsiya etilgan",
]

export default function NavigationBar() {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll)
      checkScroll() // Initial check
    }
    return () => scrollContainer?.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <div className="  max-w-full fixed bg-transparent text-white">
      <div className="flex items-center">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 z-10 p-2 bg-gray-900 hover:bg-gray-800 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 p-4"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-full whitespace-nowrap hover:bg-gray-700 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 p-2 bg-gray-900 hover:bg-gray-800 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  )
}