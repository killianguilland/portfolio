'use client'; // Obligatoire si tu utilises Next.js App Router

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Ou ton import actuel de <Image />

interface FigureProps {
  src: any; // Accepte les imports statiques (ImageData)
  alt: string;
  caption?: string; // Légende optionnelle
}

export const Figure = ({ src, alt, caption }: FigureProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    // On n'écoute que si le zoom est ouvert
    if (!isZoomed) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomed(false) // Super important pour l'UX !
    }

    window.addEventListener('keydown', handleKeyDown)
    
    // Nettoyage crucial pour éviter les fuites de mémoire
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isZoomed])

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isZoomed]);

  return (
    <>
      <figure className="my-10 flex flex-col items-center group not-prose">
        {/* Conteneur de l'image principale */}
        <div 
          onClick={toggleZoom}
          className="relative overflow-hidden rounded-3xl transition-all duration-300 cursor-zoom-in w-full"
        >
          {/* Overlay subtil au survol pour inviter au clic */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
              Agrandir
            </span>
          </div>

          <Image 
            src={src} 
            alt={alt} 
            className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            // Si c'est Next.js <Image />, ces props sont souvent requises/recommandées :
            layout="responsive" 
            placeholder="blur"
          />
        </div>

        {/* Légende sémantique */}
        {caption && (
          <figcaption className="mt-4 text-xs font-medium tabular-nums text-zinc-500 opacity-75 text-center px-6 max-w-2xl leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* --- Overlay du Zoom (Lightbox) --- */}
      {isZoomed && (
        <div 
          onClick={toggleZoom}
          className="not-prose fixed inset-0 z-[100] bg-white/65 dark:bg-zinc-900/95 backdrop-blur-3xl p-4 md:p-20 flex items-center justify-center cursor-zoom-out animate-fade-in"
        >

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <Image 
              src={src} 
              alt={alt} 
              // J'utilise un layout "fill" ou "contain" pour adapter l'image à l'écran
              className="max-h-full w-full block animate-scale-in object-contain"
              priority // Charge l'image zoomée rapidement
              layout='responsive'
            />
            <div className="absolute -bottom-19 flex items-center justify-between p-4 z-550 gap-4">
                {caption && (
                <p className="bg-zinc-100/80 transition dark:bg-zinc-800/90 text-xs px-5 py-2 text-center rounded-full backdrop-blur-sm">
                    {caption}
                </p>
                )}
              <button
                className="flex h-10 w-10 pb-0.5 items-center justify-center rounded-full bg-zinc-100/80 transition hover:bg-white dark:bg-zinc-800/90 dark:hover:bg-zinc-800"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};