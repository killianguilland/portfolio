import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoNitro from '@/images/logos/nitro.png'
import logoAscanio from '@/images/logos/ascanio.png'
import logoEsiee from '@/images/logos/esiee.png'
import logoImac from '@/images/logos/imac.png'
import logoIut1 from '@/images/logos/iut1.png'
import logoIut2 from '@/images/logos/iut2.png'

import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Game from '@/components/Game'
import { useLocale, useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server';


function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function MailIconBis(props: React.ComponentPropsWithoutRef<'svg'>) {
return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
)}


function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function LanguageIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
</svg>)}

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>
)}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug}) {
  return (
    <Card as="article">
      <div className={`relative z-10 mb-5 overflow-hidden rounded-lg bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-zinc-700/50 hover:ring-zinc-900`}>
        <img
          src={article.image.src}
          alt=""
          className="aspect-[16/9] w-full object-cover transition duration-300"
        />
      </div>
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  const t = useTranslations('Index.Newsletter');

  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 hidden lg:block"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{t('title')}</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {t('description')}
      </p>
      <div className="mt-6 flex items-center">
        <span className="flex min-w-0 flex-auto p-px">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
          />
        </span>
        <Button type="submit" className="ml-4 flex-none">
          {t('cta')}
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

interface Language {
  company: string
  title: string
  code: string
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-4 w-4 rounded-sm" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function LangCard({ language }: { language: Language }) {

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{language.code.toUpperCase()}</span>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {language.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {language.title}
        </dd>
        {/* <dt className="sr-only">Date</dt> */}
        {/* <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={language.label}
        >
          {language.label}
        </dd> */}
      </dl>
    </li>
  )
}

function Resume() {
  const t = useTranslations('Index.Resume');
  let resume: Array<Role> = [
    {
      company: t('roles.esiee.company'),
      title: t('roles.esiee.title'),
      logo: logoEsiee,
      start: '2025',
      end: {
        label: '26',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: t('roles.imac.company'),
      title: t('roles.imac.title'),
      logo: logoImac,
      start: '2008',
      end: '11',
    },
    {
      company: t('roles.ascanio.company'),
      title: t('roles.ascanio.title'),
      logo: logoAscanio,
      start: '2014',
      end: '19',
    },
    {
      company: t('roles.nitro.company'),
      title: t('roles.nitro.title'),
      logo: logoNitro,
      start: '2011',
      end: '14',
    },
    {
      company: t('roles.iut1.company'),
      title: t('roles.iut1.title'),
      logo: logoIut1,
      start: '2008',
      end: '11',
    },
    {
      company: t('roles.iut2.company'),
      title: t('roles.iut2.title'),
      logo: logoIut2,
      start: '2008',
      end: '11',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 hidden lg:block">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{t('title')}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        {t('cta')}
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Languages() {
  const t = useTranslations('Index.Languages');
  let languages: Array<Language> = [
    {
      company: t('fr.company'),
      code: 'fr',
      title: t('fr.title'),
    },
    {
      company: t('en.company'),
      code: 'en',
      title: t('en.title'),
    },
    {
      company: t('de.company'),
      code: 'de',
      title: t('de.title'),
    },
    {
      company: t('es.company'),
      code: 'es',
      title: t('es.title'),
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 hidden lg:block">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <LanguageIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{t('title')}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {languages.map((language, languageIndex) => (
          <LangCard key={languageIndex} language={language} />
        ))}
      </ol>
    </div>
  )
}

function Minigame() {

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 relative hidden lg:block">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 absolute">
        <StarIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Dino zone</span>
      </h2>
      <ol className="dark:invert z-20 relative">
        <Game />
        <style dangerouslySetInnerHTML={{ __html: `
          .interstitial-wrapper#main-frame-error {
            margin-top: -2px !important;
          }
        `}} />
      </ol>
    </div>
  )
}

function ProjectsShortcut() {
  const t = useTranslations('Index.ProjectsShortcut');
  return (
    <Link href='/projects' className="block rounded-2xl border bg-zinc-50 border-zinc-100 hover:bg-zinc-100 p-6 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700/40 relative">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3">{t('title')}</span>
      </h2>
    </Link>
  )
}

function FunShortcut() {
  const t = useTranslations('Index.FunShortcut');
  return (
    <Link href='/fun-stuff' className="block rounded-2xl border bg-zinc-50 border-zinc-100 hover:bg-zinc-100 p-6 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700/40 relative">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3">{t('title')}</span>
      </h2>
    </Link>
  )
}

async function ArticlesShortcut() {
  const t = await getTranslations('Index.ArticlesShortcut');
  const locale = await getLocale();
  let articles = (await getAllArticles(locale)).filter((article) => !article.featured).reverse()
  return (
    <Link href='/articles' className="block rounded-2xl group border bg-zinc-50 border-zinc-100 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700/40 relative">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3 p-6">{t('title')}</span>
        {/* <div className='flex ml-auto h-full items-center -gap-3'> */}
        {articles && articles.map((article, i) =>
          <img key={'article' + i} src={article.image.src} className={`aspect-[16/9] group-hover:-translate-x-${i} transition-transform h-10 object-cover rounded-sm absolute right-4 ring-2 ring-zinc-50 dark:ring-zinc-800 dark:hover:ring-zinc-700 ${i == 1 ? 'group-hover:-rotate-4' : 'group-hover:rotate-4'}`} style={{marginRight: i * 8 + 'px'}} />
        )}
        {/* </div> */}
      </h2>
      <div className='hidden group-hover:-translate-x-1 group-hover:-translate-x-2 group-hover:-translate-x-3'/>
    </Link>
  )
}

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations('Index');
  let articles = (await getAllArticles(locale)).filter((article) => article.featured)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('title')}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t.rich('description', {
              b: (chunks) => <b>{chunks}</b>,
              br: () => <span className='block h-3'/>
            })}
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
            {/* <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            /> */}
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="#"
              aria-label="Send an email"
              icon={MailIconBis}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article, i) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
            <Languages />
            <Minigame />
            <div className='flex-col space-y-3 mt-auto'>
              <ProjectsShortcut />
              <FunShortcut />
              <ArticlesShortcut />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
