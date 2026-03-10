'use client'

import Image from 'next/image'
import emulatorLight from './emulator-light.png'
import emulatorDark from './emulator-dark.png'
import { useRef, useState } from 'react'

interface ReferenceProps {
  src: string
}

export function DSiEmulator({
  src
}: ReferenceProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);
  
  return (
    <div className='relative flex items-center justify-center not-prose group'>
      <div onClick={() => {
        if(videoRef.current?.paused) {
          videoRef.current.play();
          setIsPaused(false);
        } else {
          videoRef.current?.pause();
          setIsPaused(true);
        }
      }} className={"absolute bottom-[20%] z-10 cursor-pointer text-white group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm " + (isPaused ? '': 'opacity-0')}>
        {isPaused ? 'Play' : 'Pause'}
      </div>
      <Image src={emulatorLight} alt="Picture of a Nintendo DSi running the homebrew port of Kallune." className='dark:hidden z-2 relative pointer-events-none'/>
      <Image src={emulatorDark} alt="Picture of a Nintendo DSi running the homebrew port of Kallune." className='hidden dark:block z-2 relative pointer-events-none'/>
      <video 
        muted  
        loop 
        src={src} 
        ref={videoRef}
        className={'block absolute z-1 transition'}
        style={{width: "49.51644101%", marginLeft: ".5%", filter: isPaused ? 'sepia(1) hue-rotate(180deg) saturate(50%)' : 'none'}} 
      />
    </div>
  )
}
