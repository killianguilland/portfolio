'use client'

export function YouTube({ 
  id, 
  title = 'YouTube video player',
  autoplay = false 
}: { 
  id: string; 
  title?: string;
  autoplay?: boolean;
}) {
  // Build parameters: 
  // - autoplay=1/0
  // - mute=1 (Required for autoplay to work)
  // - loop=1 & playlist={id} (If you want it to loop)
  const params = autoplay ? `?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&rel=0` : `?rel=0`

  return (
    <div className="my-10 overflow-hidden rounded-2xl border-4 border-zinc-200 dark:border-zinc-700 pointer-events-none">
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}${params}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}