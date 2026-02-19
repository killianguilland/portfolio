'use client'
import { useCallback, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface SlideshowProps {
  slides: StaticImageData[]
  interval?: number // Time in ms between slide changes
}

export function Slideshow({ slides, interval = 3000 }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [isPaused, setIsPaused] = useState(false)

  // Memoize next function so it can be used in useEffect safely
  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      next()
    }, interval)

    // Cleanup: This stops the timer if the component disappears 
    // or if the user clicks a button (triggering a re-render)
    return () => clearInterval(timer)
  }, [next, interval, isPaused])

  return (
    <div className="group relative my-6" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* The Main Slide Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          placeholder="blur" // This works automatically with static imports!
          className="object-cover transition-transform duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority={currentIndex === 0}
        />

        {/* Navigation Overlay */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white dark:bg-zinc-900/90 dark:hover:bg-zinc-800"
          >
            ←
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white dark:bg-zinc-900/90 dark:hover:bg-zinc-800"
          >
            →
          </button>
        </div>
      </div>

      {/* Progress & Counter */}
      <div className="mt-4 flex items-center justify-between px-2">
        <div className="flex gap-1.5">
          {/* We'll show a max of 10 dots so it doesn't overflow */}
          {Array.from({ length: Math.min(slides.length, 10) }).map((_, i) => {
            const isActive = Math.floor((currentIndex / slides.length) * 10) === i
            return (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  isActive ? 'w-4 bg-zinc-800 dark:bg-zinc-200' : 'bg-zinc-300 dark:bg-zinc-700'
                }`}
              />
            )
          })}
        </div>
        <span className="text-xs font-medium tabular-nums text-zinc-500">
            {isPaused ? <span className='opacity-50'>Paused on hover | </span> : ''}
          {currentIndex + 1} <span className="opacity-50">/</span> {slides.length}
        </span>
      </div>
    </div>
  )
}