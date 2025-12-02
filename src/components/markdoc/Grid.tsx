import React from 'react'

interface GridProps {
  cols?: string
  children?: React.ReactNode
}

export function Grid({ cols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children }: GridProps) {
  return (
    <div className={`grid ${cols} gap-4 my-10`}>
      {children}
    </div>
  )
}