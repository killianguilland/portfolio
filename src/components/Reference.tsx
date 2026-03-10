'use client'

import { useCallback, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Card } from './Card'
import { formatDate } from '@/lib/formatDate'
import { get } from 'http'
import { ArticleWithSlug, importArticle } from '@/lib/articles'

interface ReferenceProps {
  article: ArticleWithSlug
  title?: string
  description?: string
}

export function Reference({
  article,
  title,
  description,
}: ReferenceProps) {

  const [isAlt, setIsAlt] = useState(false)

  // 2. Once the component mounts in the browser, randomize it safely
  useEffect(() => {
    setIsAlt(Math.random() < 0.5)
  }, [])

  return (
    <article className="not-prose py-8">
      <Card
        className="group gap-5 flex-col md:flex-row"
        onMouseLeave={() => {
          setIsAlt(Math.random() < 0.5)
        }}
      >
        <div className="absolute -inset-x-4 -inset-y-6 z-0 border-4 border-zinc-50 transition scale-100 opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:border-zinc-800/50" />
        <img
          src={article.image.src}
          alt={'Illustration'}
          className={`relative z-10 aspect-[16/9] w-48 rounded-xs object-cover ${isAlt ? 'group-hover:rotate-2' : 'group-hover:-rotate-2'} transition-transform group-hover:-translate-y-2`}
        />
        <div className="flex flex-col">
          <Card.Title href={`/articles/${article.slug}`} className=''>
            {title || article.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="md:hidden"
            decorate
          >
            {formatDate(article.date)}
          </Card.Eyebrow>
          <Card.Description>
            {description || article.description.length > 195 ? <>{article.description.slice(0, 195)}... <span className='text-teal-500 dark:text-zinc-500'>Read more</span></> : article.description}
          </Card.Description>
        </div>
      </Card>
      {/* <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="mt-1 max-md:hidden"
        >
          {formatDate(article.date)}
        </Card.Eyebrow> */}
    </article>
  )
}
