import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fast scroll utility - doubles the scroll speed
export function scrollToElement(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    const currentPosition = window.pageYOffset
    const distance = elementPosition - currentPosition
    
    // Double the scroll speed by reducing the duration
    const duration = Math.abs(distance) / 2 // Faster scrolling
    
    let start: number | null = null
    
    const animateScroll = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      
      const run = easeInOutCubic(progress)
      window.scrollTo(0, currentPosition + distance * run)
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }
    
    requestAnimationFrame(animateScroll)
  }
}

// Smooth scroll to top with faster speed
export function scrollToTop() {
  const currentPosition = window.pageYOffset
  const duration = currentPosition / 2 // Faster scrolling
  
  let start: number | null = null
  
  const animateScroll = (currentTime: number) => {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const progress = Math.min(timeElapsed / duration, 1)
    
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    const run = easeInOutCubic(progress)
    
    window.scrollTo(0, currentPosition * (1 - run))
    
    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }
  
  requestAnimationFrame(animateScroll)
}
