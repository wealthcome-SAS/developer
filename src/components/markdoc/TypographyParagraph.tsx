import { Typography } from 'design-system'

export function TypographyParagraph({ children }: { children: React.ReactNode }) {
  return (
    <Typography as="p" variant="body" size="medium" className="text-base font-normal! my-4">
      {children}
    </Typography>
  )
}