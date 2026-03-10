import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { useTranslations } from 'next-intl'

const projects = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]

function Example() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
      <div className="flex p-px lg:col-span-4">
        <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-zinc-800 dark:shadow-none dark:outline-white/15">
          <div className="p-10">
            <h3 className="text-sm/4 font-semibold text-zinc-500 dark:text-zinc-400">
              Integrations
            </h3>
            <p className="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
              Connect your favorite tools
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
              Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
              massa.
            </p>
          </div>
        </div>
      </div>
      <div className="flex p-px lg:col-span-2">
        <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:bg-zinc-800 dark:shadow-none dark:outline-white/15">
          <div className="p-10">
            <h3 className="text-sm/4 font-semibold text-zinc-500 dark:text-zinc-400">
              Integrations
            </h3>
            <p className="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
              Connect your favorite tools
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
              Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
              massa.
            </p>
          </div>
        </div>
      </div>
      <div className="flex p-px lg:col-span-2">
        <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:bg-zinc-800 dark:shadow-none dark:outline-white/15">
          <div className="p-10">
            <h3 className="text-sm/4 font-semibold text-zinc-500 dark:text-zinc-400">
              Security
            </h3>
            <p className="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
              Advanced access control
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia.
            </p>
          </div>
        </div>
      </div>
      <div className="flex p-px lg:col-span-4">
        <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-zinc-800 dark:shadow-none dark:outline-white/15">
          <div className="p-10">
            <h3 className="text-sm/4 font-semibold text-zinc-500 dark:text-zinc-400">
              Performance
            </h3>
            <p className="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
              Lightning-fast builds
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
              Sed congue eros non finibus molestie. Vestibulum euismod augue vel
              commodo vulputate. Maecenas at augue sed elit dictum vulputate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  // title: 'Projects',
  // description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  const t = useTranslations('Projects')
  return (
    <SimpleLayout title={t('title')} intro={t('intro')}>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className='text-xl font-semibold'>Quaartz <span className='font-medium text-zinc-500'>・ Physics-based MMO</span></h3>
        <div className='flex gap-2'>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-400/10 dark:text-gray-400">
            Node.js
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-400/10 dark:text-gray-400">
            ThreeJS
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-400/10 dark:text-gray-400">
            Websockets
          </span>
        </div>

      </div>
      <Example />
      {/* <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul> */}
    </SimpleLayout>
  )
}
