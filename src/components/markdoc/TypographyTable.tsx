import React from 'react'
import { Typography, Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from 'design-system'
import { Badge } from '../ui/Badge'

interface TypographyTableProps {
    children: React.ReactNode
}

export function TypographyTable({ children }: TypographyTableProps) {
    // Parse the table structure from Markdoc children
    const headers: string[] = []
    const data: React.ReactNode[][] = []

    // Helper to extract text from React elements
    const extractText = (node: React.ReactNode): string => {
        if (typeof node === 'string') return node
        if (typeof node === 'number') return node.toString()
        if (React.isValidElement(node)) {
            return React.Children.toArray((node as any).props.children).map(extractText).join('')
        }
        return ''
    }

    // Parse children to find thead and tbody
    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if ((child as any).type === 'thead') {
                // Extract headers
                React.Children.forEach((child as any).props.children, (row) => {
                    if (React.isValidElement(row) && (row as any).type === 'tr') {
                        React.Children.forEach((row as any).props.children, (cell) => {
                            if (React.isValidElement(cell) && ((cell as any).type === 'th' || (cell as any).type === 'td')) {
                                headers.push(extractText((cell as any).props.children))
                            }
                        })
                    }
                })
            } else if ((child as any).type === 'tbody') {
                // Extract data rows
                React.Children.forEach((child as any).props.children, (row) => {
                    if (React.isValidElement(row) && (row as any).type === 'tr') {
                        const rowData: React.ReactNode[] = []
                        React.Children.forEach((row as any).props.children, (cell) => {
                            if (React.isValidElement(cell) && ((cell as any).type === 'td' || (cell as any).type === 'th')) {
                                rowData.push((cell as any).props.children)
                            }
                        })
                        if (rowData.length > 0) {
                            data.push(rowData)
                        }
                    }
                })
            }
        }
    })

    return (
        <div className="flex w-full overflow-auto my-4">
            <Table className="w-full caption-bottom text-sm border-0.5 border-slate-300">
                <TableHeader className="bg-slate-100">
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableHead
                                key={index}
                                className="h-[42px] px-4 text-left align-middle font-medium text-muted-foreground border-b border-slate-300"
                            >
                                <Typography
                                    as="label"
                                    size="smaller"
                                    color="slate-500 font-normal"
                                    variant="label"
                                    className="text-slate-500! font-normal!"
                                >
                                    {header}
                                </Typography>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody className="[&_tr:last-child]:border-0">
                    {data.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            className="border-b-[1.5px] border-slate-200 transition-colors hover:bg-slate-50"
                        >
                            {row.map((cell, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    className="px-4 h-14 align-middle"
                                >
                                    {headers[cellIndex] === 'Required' ? (
                                        <Badge
                                            chip
                                            label={extractText(cell).toLowerCase() === 'yes' ? 'Required' : 'Optional'}
                                            variant={extractText(cell).toLowerCase() === 'yes' ? "low" : "neutral"}
                                        />
                                    ) : (
                                        cell
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}