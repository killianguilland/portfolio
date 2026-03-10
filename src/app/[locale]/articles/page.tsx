import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { getLocale, getTranslations } from 'next-intl/server'
import { Article } from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Sharing what I find out while building and breaking things',
  description:
    'When I’m experimenting with code, I often stumble upon things that are just too interesting not to share. This space is dedicated to those discoveries and the stories behind them. You can also find these articles over on my Medium page.',
}

export default async function ArticlesIndex() {
  const locale = await getLocale();
  let articles = await getAllArticles(locale);
  const t = await getTranslations('Articles');

  return (
    <SimpleLayout
      title={t('title')}
      intro={t('description')}
    >
      <div className="md:border-zinc-100 md:dark:border-zinc-700/40">
        <div className="flex flex-col space-y-16">
          {articles.map((article, i) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
