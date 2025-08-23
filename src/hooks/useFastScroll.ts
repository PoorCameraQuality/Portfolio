'use client'

import { useEffect } from 'react'

export function useFastScroll() {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only apply to main page sections below portfolio
      const target = e.target as HTMLElement
      const section = target.closest('section')
      
      if (section && section.classList.contains('fast-scroll-section')) {
        e.preventDefault()
        
        // Double the scroll speed
        const scrollAmount = e.deltaY * 2
        
        window.scrollBy({
          top: scrollAmount,
          behavior: 'auto' // Use auto for immediate response, then smooth for final positioning
        })
      }
    }

    // Add wheel event listener with passive: false to allow preventDefault
    document.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [])
}

// Alternative approach: smooth scroll with faster timing
export function useSmoothFastScroll() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .fast-scroll-section {
        scroll-behavior: smooth;
        scroll-snap-align: start;
        scroll-margin-top: 2rem;
      }
      
      html {
        scroll-behavior: smooth;
        scroll-snap-type: y proximity;
      }
      
      @media (prefers-reduced-motion: no-preference) {
        .fast-scroll-section {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
}
