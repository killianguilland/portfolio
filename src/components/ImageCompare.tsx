'use client';

import React from 'react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import Image from 'next/image';

interface ImageCompareProps {
  beforeSrc: any;
  beforeAlt: string;
  afterSrc: any;
  afterAlt: string;
  caption?: string;
}

export const ImageCompare = ({ beforeSrc, beforeAlt, afterSrc, afterAlt, caption }: ImageCompareProps) => {
  return (
    <figure className="my-10 flex flex-col items-center not-prose">
      <div className="w-full overflow-hidden transition-all duration-300">
        <ReactCompareSlider
            itemOne={<Image alt="Image one" src={beforeSrc} style={{objectPosition: 'top center'}}/>}
            itemTwo={<Image alt="Image two" src={afterSrc} style={{objectPosition: 'top center'}}/>}
          // On personnalise la barre de séparation
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                // backdropFilter: 'blur(4px)',
                // backgroundColor: 'rgba(255, 255, 255, 0.9)',
                // color: '#0f172a',
                // border: '1px solid #e2e8f0',
                background: 'color-mix(in oklab, var(--color-black) 50%, transparent)',
                transform: 'scale(.8)',
                boxShadow: 'none',
                border: 'none',
              }}
              
              linesStyle={{ opacity: 1, boxShadow: 'none' }}
            //   className='bg-zinc-800/50'
            />
          }
          className="flex w-full h-full"
        />
      </div>
      
      {caption && (
        <figcaption className="mt-4 text-xs font-medium tabular-nums text-zinc-500 opacity-75 text-center px-6 max-w-2xl leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// export default ImageCompare;