import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
  image: string
  featured?: boolean
  illustration?: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
  locale: string // We need the locale to build the correct import path
): Promise<ArticleWithSlug> {
  // Update the path to include [locale]
  let { article } = (await import(`../app/[locale]/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles(locale: string = 'en') {
  // Update the cwd to look inside the specific locale folder
  let articleFilenames = await glob('*/page.mdx', {
    cwd: `./src/app/[locale]/articles`, 
  })

  // Pass the locale down so the import() function knows where to look
  let articles = await Promise.all(
    articleFilenames.map((filename) => importArticle(filename, locale))
  )

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}