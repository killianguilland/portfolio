'use client'


import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { useEffect, useState } from 'react'

export function Article({ article }: { article: ArticleWithSlug }) {
  // 1. Default to a safe, predictable state for the initial Server Render
  const [isAlt, setIsAlt] = useState(false);

  // 2. Once the component mounts in the browser, randomize it safely
  useEffect(() => {
    setIsAlt(Math.random() < 0.5);
  }, []);

  return (
    <article className="">
      <Card 
        className="md:grid md:grid-cols-7 md:items-start gap-5 group"
        onMouseLeave={() => {
            console.log('Mouse left, randomizing animation direction');
            setIsAlt(Math.random() < 0.5)
        }}
      >
        <img src={article.image.src} alt={'Illustration'} className={`aspect-[16/9] w-full object-cover col-span-3 rounded-md z-10 relative ${isAlt ? 'group-hover:rotate-2' : 'group-hover:-rotate-2'} group-hover:-translate-y-2 transition-transform`} />
        <div className='md:col-span-4 h-full flex flex-col'>

          <Card.Title href={`/articles/${article.slug}`}>
            {article.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="md:hidden"
            decorate
          >
            {formatDate(article.date)}
          </Card.Eyebrow>
          <Card.Description>{article.description}</Card.Description>
          <div className='mt-auto'>
            <Card.Cta>Read article</Card.Cta>
          </div>
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