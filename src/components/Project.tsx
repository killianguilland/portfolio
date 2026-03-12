'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Slideshow } from './Slideshow';

export function Project({ project }: { project: any }) {
  // 1. Default to a safe, predictable state for the initial Server Render
  const [isAlt, setIsAlt] = useState(false);
  const [open, setOpen] = useState(false);

  // 2. Once the component mounts in the browser, randomize it safely
  useEffect(() => {
    setIsAlt(Math.random() < 0.5);
  }, []);

  return (
    <>
      <article className={`cursor-pointer ${project.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`} onClick={() => setOpen(true)}>
        <Card
          className="gap-3 group h-full"
          onMouseLeave={() => {
            console.log('Mouse left, randomizing animation direction');
            setIsAlt(Math.random() < 0.5)
          }}
          as="li"
        >
          <Image
            src={project.image}
            placeholder='blur'
            alt={'Illustration'}
            className={`w-full object-cover rounded-md block ring-1 ring-zinc-900/5 z-10 relative transition-opacity group-hover:animate-pulse ${isAlt ? 'group-hover:rotate-2' : 'group-hover:-rotate-2'} group-hover:-translate-y-2 transition-transform ${project.featured ? 'lg:object-cover lg:h-full lg:flex-grow-1 aspect-video lg:aspect-auto' : 'aspect-video'}`}
          />
          <div>
            <Card.Title>
              {project.name}
            </Card.Title>
            <Card.Description>{project.subtitle}</Card.Description>

          </div>
          {/* <img src={article.image.src} /> */}
          {/* <div className='md:col-span-4 h-full flex flex-col'>

            <Card.Title href={`/articles/${article.slug}`}>
              {project.title}
            </Card.Title>
            {/* <Card.Eyebrow
              as="time"
              dateTime={project.date}
              className="md:hidden"
              decorate
            >
              {formatDate(project.date)}
            </Card.Eyebrow>
            <Card.Description>{project.description}</Card.Description>
            <div className='mt-auto'>
              <Card.Cta>Read article</Card.Cta>
            </div>
          </div> */}
        </Card>
        {/* <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="mt-1 max-md:hidden"
        >
          {formatDate(article.date)}
        </Card.Eyebrow> */}

      </article>

      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-white/65 dark:bg-zinc-900/95 backdrop-blur-3xl transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
              transition
              className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-[1200px]"
            >


              <div className="relative flex w-full items-center overflow-hidden bg-white dark:bg-zinc-900 px-4 pt-14 pb-8 sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-2xl ring-1 ring-zinc-900/10 dark:ring-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8 focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className={`grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8`}>
                  {!project.long && (project.slides ?
                    <div className={'sm:col-span-6'}>
                      <Slideshow slides={project.slides} contained />
                    </div>
                    :
                    <Image
                      alt={project.name || 'Project Illustration'}
                      src={project.image}
                      placeholder="blur"
                      className={"aspect-video w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover border border-zinc-200 dark:border-zinc-800 sm:col-span-6"}
                    />
                  )}
                  <div className={"flex flex-col h-full " + (project.long ? 'sm:col-span-12' : 'sm:col-span-6')}>
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{project.name}</h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.subtitle}</p>

                    <section aria-labelledby="information-heading" className='mt-3'>
                      {project.description}
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
