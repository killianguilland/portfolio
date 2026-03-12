import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { useTranslations } from 'next-intl'

import ninetyfivePosters from './thumbnails/95-posters.png'
import ninetyfiveMovie from './thumbnails/95-movie.png'
import campusIsland from './thumbnails/campus-island.png'
import { slides as campusIslandSlides } from './thumbnails/campus-island-slides'
import lumaPoster from './thumbnails/luma-poster.png'
import minimistanClothing from './thumbnails/minimistan-clothing.png'
import meteorTaxi from './thumbnails/meteor-taxi.png'
import woodsongLogo from './thumbnails/woodsong-logo.png'
import blogIllustrations from './thumbnails/killian-blog.png'
import cubeEscape from './thumbnails/cube-escape.png'
import gaarnet from './thumbnails/gaarnet.png'
import serverCase from './thumbnails/server-case.png'
import kallune from './thumbnails/kallune.png'
import kallunePlus from './thumbnails/kallune-plus.png'
import ochaquest from './thumbnails/ocha-quest.png'
import royaumes from './thumbnails/royaumes.png'
import ruuby from './thumbnails/ruuby.png'
import swivelKnight from './thumbnails/swivel-knight.png'
import jam803z from './thumbnails/jam-803z.png'
import quaartz from './thumbnails/quaartz.png'
import meshroomCloud from './thumbnails/meshroom-cloud.png'
import noiseRest from './thumbnails/noise-rest.png'
import loubki from './thumbnails/loubki-game.png'
import quaartzUi from './thumbnails/quaartz-ui.png'
import { Project } from '@/components/Project'
import { Reference } from '@/components/Reference'
import { article as ScalableMMOArchitecture } from '../articles/(en)/mmo-scalable-architecture/page.mdx';
import { article as RPGCharacterCreation } from '../articles/(en)/rpg-character-creation/page.mdx';

// function Example() {
//   return (
// <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//   <h3 className='text-xl font-semibold'>Quaartz <span className='font-medium text-zinc-500'>・ Physics-based MMO</span></h3>
//   <div className='flex gap-2'>
//     <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-400/10 dark:text-gray-400">
//       Node.js
//     </span>
//     <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-400/10 dark:text-gray-400">
//       ThreeJS
//     </span>
//     <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-400/10 dark:text-gray-400">
//       Websockets
//     </span>
//   </div>
// </div>
//     <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
//       <div className="flex p-px lg:col-span-4">
//         <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-zinc-800 dark:shadow-none dark:outline-white/15">
//           <div className="p-10">
//             <h3 className="text-sm/4 font-semibold text-zinc-500 dark:text-zinc-400">
//               Integrations
//             </h3>
//             <p className="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
//               Connect your favorite tools
//             </p>
//             <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
//               Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
//               massa.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex p-px lg:col-span-2">
//         <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:bg-zinc-800 dark:shadow-none dark:outline-white/15">
//           <div className="p-10">
//             <h3 className="text-sm/4 font-semibold text-zinc-500 dark:text-zinc-400">
//               Integrations
//             </h3>
//             <p className="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
//               Connect your favorite tools
//             </p>
//             <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
//               Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
//               massa.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex p-px lg:col-span-2">
//         <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:bg-zinc-800 dark:shadow-none dark:outline-white/15">
//           <div className="p-10">
//             <h3 className="text-sm/4 font-semibold text-zinc-500 dark:text-zinc-400">
//               Security
//             </h3>
//             <p className="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
//               Advanced access control
//             </p>
//             <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
//               Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
//               posuere cubilia.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex p-px lg:col-span-4">
//         <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-zinc-800 dark:shadow-none dark:outline-white/15">
//           <div className="p-10">
//             <h3 className="text-sm/4 font-semibold text-zinc-500 dark:text-zinc-400">
//               Performance
//             </h3>
//             <p className="mt-2 text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
//               Lightning-fast builds
//             </p>
//             <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
//               Sed congue eros non finibus molestie. Vestibulum euismod augue vel
//               commodo vulputate. Maecenas at augue sed elit dictum vulputate.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

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

const projects = [
  {
    name: 'Quaartz',
    subtitle: 'Mobile & PC MMO',
    featured: true,
    tags: ['threejs', 'reactjs', 'django', 'bullet physics engine'],
    image: quaartz,
    long: true,
    description: <>
      Quaartz is a mobile and pc mmo focused on exploring with your friends, customizing your character, and finding out hidden zones. It has a strong focus on physics.
      The game is currently in beta.
      I have already talked about Quaartz in great length in the following articles :
      <Reference article={ScalableMMOArchitecture} contained />
      <Reference article={RPGCharacterCreation} contained />
    </>
  },
  {
    name: 'Swivel Knight',
    subtitle: 'Platformer made with Godot',
    tags: ['godot'],
    image: swivelKnight,
  },
  {
    name: 'Ruuby',
    subtitle: 'Sci-fi idle clicker',
    tags: ['threejs', 'reactjs', 'django', 'channels'],
    image: ruuby,
  },
  {
    name: 'Tout brûler et brûler avec',
    subtitle: 'Hide and seek (game jam)',
    tags: ['803z game jam'],
    image: jam803z,
  },
  {
    name: 'Royaumes',
    subtitle: 'Contracts & betrayal strategy game',
    tags: ['reactjs'],
    image: royaumes,
  },
  {
    name: 'Gaarnet',
    subtitle: 'Multiplayer building game',
    tags: ['websockets', 'threejs', 'reactjs'],
    image: gaarnet,
  },
  {
    name: 'Kallune',
    subtitle: 'Isometric 2D Game',
    tags: ['opengl', 'c++'],
    image: kallune,
  },
  {
    name: 'Kallune+',
    subtitle: 'Nintendo DS port of Kallune',
    featured: true,
    tags: ['devkitpro', 'c++', 'ds homebrew'],
    image: kallunePlus,
  },
  {
    name: 'Ochaquest',
    subtitle: 'Collaborative choice adventure',
    tags: ['discord api', 'web app'],
    image: ochaquest,
  },
  {
    name: 'Cube',
    subtitle: 'Immersive escape game',
    tags: ['reactjs', 'threejs'],
    image: cubeEscape,
  },
  {
    name: 'MeshroomCloud',
    subtitle: 'Addon for the 3D & VFX software',
    tags: ['qarnot sdk', 'qt', 'meshroom'],
    image: meshroomCloud,
  },
  {
    name: 'Loubki',
    subtitle: 'Choice-based narrative game',
    tags: ['flask', 'angular'],
    image: loubki,
  },
  // {
  //   name: 'Clap.tech',
  //   subtitle: 'Popular software suite I\'ve worked on',
  //   image: clap,
  // },
  // {
  //   name: 'Vib3s',
  //   subtitle: 'Podcast recording software I\'ve worked on',
  //   image: '/images/vib3s.png',
  // },
  // {
  //   name: 'Nitroserv',
  //   subtitle: 'Game server hosting platform I\'ve worked on',
  //   image: '/images/nitroserv.png',
  // },
  {
    name: 'FastNoiseRest',
    subtitle: 'REST wrapper for FastNoise library',
    tags: ['nodejs', 'scalar', 'fastnoiselite'],
    image: noiseRest,
  },
  {
    name: 'Meteor Taxi',
    subtitle: 'Moëbius-inspired 3D animation',
    featured: true,
    tags: ['blender', 'animation'],
    image: meteorTaxi,
  },
  {
    name: 'Luma illustrations',
    subtitle: 'Illustrations for a students bureau',
    tags: ['adobe illustrator', 'graphic design'],
    image: lumaPoster,
  },
  {
    name: 'Quaartz UI',
    subtitle: 'UI login process for Quaartz',
    tags: ['figma', 'ui/ux'],
    image: quaartzUi,
  },
  {
    name: 'Server Case',
    subtitle: '3D printed case for my home server',
    tags: ['blender', 'orca slicer', '3d printing'],
    image: serverCase,
  },
  {
    name: 'Minimistan',
    subtitle: 'Clothes designed for a contest',
    tags: ['adobe illustrator', 'graphic design'],
    image: minimistanClothing,
  },
  {
    name: 'Campus Island',
    subtitle: 'Brand identity & guidelines',
    slides: campusIslandSlides,
    image: campusIsland,
    tags: ['branding', 'adobe illustrator'],
    description: `
    I made a full brand identity for Campus Island with the help of Quentin Baud.Campus Island was a project to make the Université Gustave Eiffel campus more attractive to students.I made the logo, patterns and product mockups.
    `
  },
  {
    name: '95% Posters',
    subtitle: 'Posters for a movie',
    tags: ['affinity designer'],
    image: ninetyfivePosters,
  },
  {
    name: 'Woodsong Logo',
    subtitle: 'Logo design for a tv show',
    tags: ['graphic design', 'adobe illustrator'],
    image: woodsongLogo,
  },
  {
    name: '95%',
    subtitle: 'Short sci-fi movie',
    tags: ['lighting', 'vfx', 'writing'],
    image: ninetyfiveMovie,
  },
  {
    name: 'Blog illustrations',
    subtitle: 'Illustrations for my game dev blog',
    tags: ['figma', 'graphic design'],
    image: blogIllustrations,
  },
]



export default function Projects() {
  const t = useTranslations('Projects')
  return (
    <SimpleLayout title={t('title')} intro={t('intro')}>
      {/* <Example /> */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
