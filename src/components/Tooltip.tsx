// components/Tooltip.tsx
'use client'

import { useState, useRef, useEffect } from 'react'

export function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const tooltipRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <span className="relative inline-block not-prose" ref={tooltipRef}>
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="underline decoration-dotted decoration-zinc-400 hover:decoration-zinc-600 dark:decoration-zinc-500 dark:hover:decoration-zinc-300 transition-colors cursor-help text-left"
      >
        {children}
      </button>

      {isVisible && (
        <span 
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
                     w-max max-w-[200px] sm:max-w-[300px] 
                     p-2 px-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 
                     text-xs leading-relaxed rounded-md shadow-xl z-50 
                     animate-in fade-in zoom-in slide-in-from-bottom-1 duration-200
                     whitespace-normal break-words text-center"
        >
          {text}
          {/* Flèche */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900 dark:border-t-zinc-50" />
        </span>
      )}
    </span>
  )
}