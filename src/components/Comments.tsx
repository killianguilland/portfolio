'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes' // If you use next-themes for dark mode

export function Comments() {
  const { resolvedTheme } = useTheme()

  return (
    <section className="mt-24 border-t border-zinc-100 pt-10 dark:border-zinc-700/40">
      {/* <Giscus
        id="comments"
        repo="your-github-username/your-repo-name"
        repoId="R_kgDO..." // Get this from giscus.app
        category="Announcements"
        categoryId="DIC_kwDO..." // Get this from giscus.app
        mapping="pathname" // Each article gets its own thread based on URL
        term="Welcome to the discussion!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === 'dark' ? 'transparent_dark' : 'light'}
        lang="en"
        loading="lazy"
      /> */}
        <Giscus
            repo="killianguilland/portfolio"
            repoId="R_kgDORM1T1w"
            category="Announcements"
            categoryId="DIC_kwDORM1T184C2IhC"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={resolvedTheme === 'dark' ? 'transparent_dark' : 'light'}
            lang="en"
            loading="lazy"
        />
    </section>
  )
}