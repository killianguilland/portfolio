declare module '*.mdx' {
  import { ReactNode } from 'react'

  export const article: {
    author: string
    date: string
    title: string
    description: string
    image: any
    illustration?: any
    featured?: boolean
    slug: string
  }

  export const metadata: any

  const component: (props: any) => ReactNode
  export default component
}
