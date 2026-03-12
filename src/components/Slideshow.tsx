'use client'
import { useCallback, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface SlideshowProps {
  slides: StaticImageData[]
  interval?: number
  subtitle?: string
  contained?: boolean
}

export function Slideshow({ slides, interval = 3000, subtitle = "", contained = false }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false) // Logique de zoom ajoutée
  const [height, setHeight] = useState(0) // Logique de hauteur ajoutée
  const [aspectRatio, setAspectRatio] = useState(16 / 9) // Ratio par défaut

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  // Empêcher le défilement du body quand le zoom est actif
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isZoomed]);

  useEffect(() => {
    // On n'écoute que si le zoom est ouvert
    if (!isZoomed) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Escape') setIsZoomed(false) // Super important pour l'UX !
    }

    window.addEventListener('keydown', handleKeyDown)

    // Nettoyage crucial pour éviter les fuites de mémoire
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isZoomed, next, prev])

  useEffect(() => {
    if (isPaused || isZoomed) return // On bloque l'auto-play si zoomé

    const timer = setInterval(() => {
      next()
    }, interval)

    return () => clearInterval(timer)
  }, [next, interval, isPaused, isZoomed])

  return (
    <>
      <div
        className={`group relative not-prose ${contained ? '' : 'my-6'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Container principal cliquable pour zoomer */}
        <div
          className={`relative aspect-[16/9] w-full overflow-hidden ${contained ? 'rounded-lg ring ring-1 ring-zinc-900/10 dark:ring-white/10' : 'rounded-3xl'} cursor-zoom-in group/image`}
          onClick={() => setIsZoomed(true)}
        >
          {/* Overlay "Agrandir" au survol */}
          <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
              Agrandir
            </span>
          </div>

          <Image
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            placeholder="blur"
            className="object-cover transition-transform duration-500 ease-in-out group-hover/image:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority={currentIndex === 0}
          />

          {/* Navigation Overlay - On stopPropagration pour éviter de zoomer en cliquant sur les flèches */}
          <div className="absolute inset-0 flex items-center justify-between p-4 md:opacity-0 transition-opacity group-hover:opacity-100 z-20">
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="flex h-10 w-10 items-center justify-center rounded-full transition text-white bg-black/70 hover:bg-zinc-800 backdrop-blur-sm"
            >
              ←
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="flex h-10 w-10 items-center justify-center rounded-full transition text-white bg-black/70 hover:bg-zinc-800 backdrop-blur-sm"
            >
              →
            </button>
          </div>
        </div>

        {/* Progress & Counter */}
        <div className={`mt-4 flex items-center justify-between px-2 ${contained ? 'hidden' : ''}`}>
          <div className="md:flex gap-1.5 hidden">
            {Array.from({ length: Math.min(slides.length, 10) }).map((_, i) => {
              const isActive = slides.length < 10 ? i === currentIndex : Math.floor((currentIndex / slides.length) * 10) === i
              return (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${isActive ? 'w-4 bg-zinc-800 dark:bg-zinc-200' : 'bg-zinc-300 dark:bg-zinc-700'
                    }`}
                />
              )
            })}
          </div>
          <span className="text-xs font-medium tabular-nums text-zinc-500 leading-relaxed">
            {isPaused && !isZoomed ? <span className='opacity-75'>Paused | </span> : <span className='opacity-75'>{subtitle} | </span>}
            {currentIndex + 1} <span className="opacity-75">/</span> {slides.length}
          </span>
        </div>
      </div>

      {/* --- Lightbox du Zoom (Copie de ta Figure) --- */}
      {isZoomed && <>
        <div
          onClick={() => setIsZoomed(false)}
          className="not-prose fixed inset-0 z-[100] bg-white/65 dark:bg-zinc-900/95 backdrop-blur-3xl p-4 md:p-20 flex items-center justify-center cursor-zoom-out animate-fade-in"
        >

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <Image
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex + 1} zoomed`}
              className="max-h-full max-w-full block animate-scale-in ring-1 ring-zinc-900/10 rounded-lg w-auto"
              onLoad={(e) => {
                setHeight(e.currentTarget.naturalHeight)
                setAspectRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)
              }}
              height={height}
              style={{ aspectRatio: `${aspectRatio} / 1` }}
              priority
            />
            <div className="absolute bottom-0 md:-bottom-19 flex items-center justify-between p-4 z-550 gap-4">
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100/80 transition hover:bg-white dark:bg-zinc-800/90 dark:hover:bg-zinc-800"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100/80 transition hover:bg-white dark:bg-zinc-800/90 dark:hover:bg-zinc-800"
              >
                →
              </button>
              <p className="hidden md:block bg-zinc-100/80 transition dark:bg-zinc-800/90 text-center px-5 py-2 rounded-full backdrop-blur-sm text-xs tabular-nums">
                {subtitle && `${subtitle}`} <span className='opacity-50'> | {currentIndex + 1} / {slides.length}</span>
              </p>
              <button
                className="flex h-10 w-10 pb-0.5 items-center justify-center rounded-full bg-zinc-100/80 transition hover:bg-white dark:bg-zinc-800/90 dark:hover:bg-zinc-800"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      </>}
    </>
  )
}