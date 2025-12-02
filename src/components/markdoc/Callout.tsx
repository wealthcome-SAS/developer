import React from 'react'

interface CalloutProps {
    type?: 'info' | 'warning' | 'error' | 'success'
    title?: string
    children: React.ReactNode
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
    const styles = {
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        error: 'bg-red-50 border-red-200 text-red-900',
        success: 'bg-green-50 border-green-200 text-green-900',
    }

    return (
        <div className={`border-l-4 p-4 my-4 ${styles[type]}`}>
            {title && <div className="font-bold mb-2">{title}</div>}
            <div>{children}</div>
        </div>
    )
}