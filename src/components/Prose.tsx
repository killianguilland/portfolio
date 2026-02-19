import clsx from 'clsx'

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(className, 'prose-p:mt-4 prose-p:mb-3 prose-ul:mt-4 prose-ul:mb-5 prose-li:mt-3 prose-li:mb-3 prose dark:prose-invert')} {...props} />
  )
}
