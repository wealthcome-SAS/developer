import React from 'react'
import { Typography } from 'design-system'

interface TypographyCodeProps {
  children?: React.ReactNode
  content?: string
}

export function TypographyCode({ children, content }: TypographyCodeProps) {
  const hasRenderableChildren = React.Children.count(children) > 0
  const value = hasRenderableChildren ? children : content ?? ''

  return (
    <Typography
      as="code"
      variant="body"
      size="smaller"
      weight="regular"
      className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded font-mono"
    >
      {value}
    </Typography>
  )
}