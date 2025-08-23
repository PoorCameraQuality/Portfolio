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
    
    // Triple the scroll speed by reducing the duration even more
    const duration = Math.abs(distance) / 3 // Even faster scrolling
    
    let start: number | null = null
    
    const animateScroll = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Faster easing function for snappier animation
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
      
      const run = easeOutQuart(progress)
      window.scrollTo(0, currentPosition + distance * run)
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }
    
    requestAnimationFrame(animateScroll)
  }
}

// Fast scroll to section - specifically for main page sections
export function fastScrollToSection(sectionClass: string, offset: number = 0) {
  const section = document.querySelector(`.${sectionClass}`) as HTMLElement
  if (section) {
    const elementPosition = section.offsetTop - offset
    const currentPosition = window.pageYOffset
    const distance = elementPosition - currentPosition
    
    // Very fast scrolling for section navigation
    const duration = Math.abs(distance) / 4 // 4x faster
    
    let start: number | null = null
    
    const animateScroll = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Snappy easing for fast section scrolling
      const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      
      const run = easeOutExpo(progress)
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