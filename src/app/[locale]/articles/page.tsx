import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article, odd }: { article: ArticleWithSlug, odd: boolean }) {
  return (
    <article className="">
      <Card className="md:grid md:grid-cols-7 md:items-start gap-5 group">
        <img src={article.image.src} alt={'Illustration'} className={`aspect-[16/9] w-full object-cover col-span-3 rounded-md z-10 relative ${odd ? 'group-hover:rotate-2' : 'group-hover:-rotate-2'} group-hover:-translate-y-2 transition-transform`} />
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

export const metadata: Metadata = {
  title: 'Sharing what I find out while building and breaking things',
  description:
    'When I’m experimenting with code, I often stumble upon things that are just too interesting not to share. This space is dedicated to those discoveries and the stories behind them. You can also find these articles over on my Medium page.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Sharing what I find out while building and breaking things"
      intro="When I’m experimenting with code, I often stumble upon things that are just too interesting not to share. This space is dedicated to those discoveries and the stories behind them. You can also find these articles over on my Medium page."
    >
      <div className="md:border-zinc-100 md:dark:border-zinc-700/40">
        <div className="flex flex-col space-y-16">
          {articles.map((article, i) => (
            <Article key={article.slug} article={article} odd={i % 2 == 0} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
