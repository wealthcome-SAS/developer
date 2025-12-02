import Markdoc from '@markdoc/markdoc'
import type { Config } from '@markdoc/markdoc'
import { Callout } from '../components/markdoc/Callout'
import { CodeBlock } from '../components/markdoc/CodeBlock'
import { Card } from '../components/markdoc/Card'
import { Grid } from '../components/markdoc/Grid'
import { Mermaid } from '../components/markdoc/Mermaid'
import { TypographyParagraph } from '../components/markdoc/TypographyParagraph'
import { TypographyHeading } from '../components/markdoc/TypographyHeading'
import { TypographyTable } from '../components/markdoc/TypographyTable'
import { TypographyCode } from '../components/markdoc/TypographyCode'

export const config: Config = {
  tags: {
    callout: {
      render: 'Callout',
      attributes: {
        type: {
          type: String,
          default: 'info',
          matches: ['info', 'warning', 'error', 'success'],
        },
        title: {
          type: String,
        },
      },
    },
    card: {
      render: 'Card',
      inline: false,
      attributes: {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        href: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
      },
    },
    grid: {
      render: 'Grid',
      attributes: {
        cols: {
          type: String,
          default: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        },
      },
    },
    mermaid: {
      render: 'Mermaid',
      attributes: {
        code: { type: String, required: true },
        theme: { type: String, default: 'default' },
        sandbox: { type: Boolean, default: false },
        diagramId: { type: String },
      },
    },
  },
  nodes: {
    fence: {
      render: 'CodeBlock',
      attributes: {
        language: {
          type: String,
        },
      },
    },
    paragraph: {
      render: 'TypographyParagraph',
    },
    heading: {
      render: 'TypographyHeading',
      attributes: {
        level: {
          type: Number,
        },
      },
    },
    table: {
      render: 'TypographyTable',
    },
    code: {
      render: 'TypographyCode',
      attributes: {
        content: { type: String },
      },
    },
  },
}

export const components = {
  Callout,
  CodeBlock,
  Card,
  Grid,
  Mermaid,
  TypographyParagraph,
  TypographyHeading,
  TypographyTable,
  TypographyCode,
}

export function parseMarkdoc(content: string) {
  const ast = Markdoc.parse(content)
  const transformed = Markdoc.transform(ast, config)
  return transformed
}