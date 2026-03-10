import '@/styles/tailwind.css'

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* We remove all margins, padding, and scrollbars 
        so the iframe blends seamlessly into your page. 
      */}
      <body className="m-0 p-0 overflow-hidden bg-transparent w-full h-full flex items-center justify-center">
        {children}
      </body>
    </html>
  )
}