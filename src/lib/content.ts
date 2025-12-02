export interface DocPage {
  slug: string
  title: string
  description?: string
  content: string
}

export interface BreadcrumbItem {
  label: string
  href: string
  isActive?: boolean
}

export function getBreadcrumbItems(slug: string): BreadcrumbItem[] {
  const parts = slug.split('/')
  const items: BreadcrumbItem[] = [
    { label: 'Wealthcome Developer Portal', href: '/' }
  ]

  let currentPath = ''

  for (let i = 0; i < parts.length; i++) {
    currentPath += (i > 0 ? '/' : '') + parts[i]
    const isLast = i === parts.length - 1

    // Format the label based on the part
    let label = parts[i]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase()) // Title case

    // Special formatting for known sections
    if (parts[i] === 'aggregated-api') {
      label = 'Aggregated API'
    } else if (parts[i] === 'financial-provider-specification') {
      label = 'Financial Provider Specification'
    } else if (parts[i] === 'introduction') {
      label = 'Introduction'
    } else if (parts[i].endsWith('-list')) {
      label = label.replace(' List', ' — List')
    } else if (parts[i].endsWith('-detail') || parts[i].endsWith('-information') || parts[i].endsWith('-informations')) {
      label = label.replace(/ (Detail|Information|Informations)$/, ' — $1')
    } else if (parts[i].endsWith('-statistics')) {
      label = label.replace(' Statistics', ' — Statistics')
    } else if (parts[i].endsWith('-creation')) {
      label = label.replace(' Creation', ' — Create')
    } else if (parts[i].endsWith('-update') || parts[i].endsWith('-modification')) {
      label = label.replace(/ (Update|Modification)$/, ' — $1')
    } else if (parts[i].endsWith('-delete') || parts[i].endsWith('-deletion')) {
      label = label.replace(/ (Delete|Deletion)$/, ' — $1')
    }

    items.push({
      label,
      href: currentPath, // Just the slug, not the full path
      isActive: isLast
    })
  }

  return items
}

// Function to determine if a slug should use an anchor link instead of a route
export function getNavigationTarget(slug: string): { route: string; anchor?: string } {
  const doc = docsList.find(d => d.slug === slug)
  if (!doc) {
    // Check if it's a known category
    const categories = ['authentication', 'financial-provider-specification', 'aggregated-api']
    if (categories.includes(slug)) {
      return { route: slug + '/introduction' }
    }
    return { route: slug }
  }

  // Check if this slug is part of a group that shares the same file
  const sameFileDocs = docsList.filter(d => d.path === doc.path && d.slug !== slug)

  if (sameFileDocs.length > 0) {
    // This is part of a shared file, extract the anchor from the slug
    const slugParts = slug.split('/')
    const lastPart = slugParts[slugParts.length - 1]

    // If the last part is different from the base slug, it's an anchor
    const baseSlug = slugParts.slice(0, -1).join('/')
    const baseDoc = docsList.find(d => d.slug === baseSlug)

    if (baseDoc && baseDoc.path === doc.path) {
      // There's a base document, use it as route with anchor
      return { route: baseSlug, anchor: lastPart }
    }
  }

  return { route: slug }
}

function parseFrontmatter(text: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = text.match(frontmatterRegex)

  if (!match) {
    return { data: {}, content: text }
  }

  const [, frontmatter, content] = match
  const data: Record<string, any> = {}

  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      data[key.trim()] = valueParts.join(':').trim()
    }
  })

  return { data, content }
}

export async function loadMarkdownFile(path: string): Promise<DocPage> {
  const response = await fetch(path)
  const text = await response.text()
  const { data, content } = parseFrontmatter(text)

  return {
    slug: path.replace('/content/', '').replace('.md', ''),
    title: data.title || 'Untitled',
    description: data.description,
    content,
  }
}

export const docsList = [
  { slug: 'getting-started', title: 'Getting Started', path: '/content/getting-started.md' },
  { slug: 'guides/first-steps', title: 'First Steps', path: '/content/guides/first-steps.md' },

  // Authentication
  { slug: 'authentication/introduction', title: 'Authentication — Introduction', path: '/content/authentication/introduction.md' },

  // Financial Provider Specification
  { slug: 'financial-provider-specification/introduction', title: 'Financial Provider Specification — Introduction', path: '/content/financial-provider-specification/introduction.md' },

  // Company
  { slug: 'financial-provider-specification/company-list', title: 'Company — List all companies', path: '/content/financial-provider-specification/company-list.md' },
  { slug: 'financial-provider-specification/company-detail', title: 'Company — Get company details', path: '/content/financial-provider-specification/company-detail.md' },

  // Manager
  { slug: 'financial-provider-specification/manager-list', title: 'Manager — List all managers', path: '/content/financial-provider-specification/manager-list.md' },
  { slug: 'financial-provider-specification/manager-detail', title: 'Manager — Get manager details', path: '/content/financial-provider-specification/manager-detail.md' },

  // Contract
  { slug: 'financial-provider-specification/contract-list', title: 'Contract — List all contracts', path: '/content/financial-provider-specification/contract-list.md' },
  { slug: 'financial-provider-specification/contract-detail', title: 'Contract — Get contract details', path: '/content/financial-provider-specification/contract-detail.md' },

  // Asset
  { slug: 'financial-provider-specification/asset-list', title: 'Asset — List all assets', path: '/content/financial-provider-specification/asset-list.md' },
  { slug: 'financial-provider-specification/asset-detail', title: 'Asset — Get asset details', path: '/content/financial-provider-specification/asset-detail.md' },
  { slug: 'financial-provider-specification/asset-transactions', title: 'Asset — Transactions', path: '/content/financial-provider-specification/asset-transactions.md' },
  { slug: 'financial-provider-specification/asset-valuation-history', title: 'Asset — Valuation over time', path: '/content/financial-provider-specification/asset-valuation-history.md' },
  { slug: 'financial-provider-specification/asset-valuation-current', title: 'Asset — Current valuation', path: '/content/financial-provider-specification/asset-valuation-current.md' },
  { slug: 'financial-provider-specification/asset-investments', title: 'Asset — Investments currently held', path: '/content/financial-provider-specification/asset-investments.md' },
  { slug: 'financial-provider-specification/asset-investments-history', title: 'Asset — Investment history', path: '/content/financial-provider-specification/asset-investments-history.md' },

  // Schemas
  // There's a single combined schemas doc in the repo
  { slug: 'financial-provider-specification/schemas', title: 'Schemas', path: '/content/financial-provider-specification/schemas.md' },
  { slug: 'financial-provider-specification/schemas/cursor_paginated', title: 'Schema — cursor_paginated', path: '/content/financial-provider-specification/schemas.md' },
  { slug: 'financial-provider-specification/schemas/company', title: 'Schema — company', path: '/content/financial-provider-specification/schemas.md' },
  { slug: 'financial-provider-specification/schemas/manager', title: 'Schema — manager', path: '/content/financial-provider-specification/schemas.md' },
  { slug: 'financial-provider-specification/schemas/contract', title: 'Schema — contract', path: '/content/financial-provider-specification/schemas.md' },
  { slug: 'financial-provider-specification/schemas/asset', title: 'Schema — asset', path: '/content/financial-provider-specification/schemas.md' },
  { slug: 'financial-provider-specification/schemas/transaction', title: 'Schema — transaction', path: '/content/financial-provider-specification/schemas.md' },
  { slug: 'financial-provider-specification/schemas/amount', title: 'Schema — amount', path: '/content/financial-provider-specification/schemas.md' },
  { slug: 'financial-provider-specification/schemas/investment', title: 'Schema — investment', path: '/content/financial-provider-specification/schemas.md' },

  // Aggregated API
  { slug: 'aggregated-api/introduction', title: 'Aggregated API — Introduction', path: '/content/aggregated-api/introduction.md' },

  // Company
  { slug: 'aggregated-api/company-list', title: 'Company — List companies', path: '/content/aggregated-api/company-list.md' },
  { slug: 'aggregated-api/company-statistics', title: 'Company — Retrieve list companies statistics', path: '/content/aggregated-api/company-statistics.md' },
  { slug: 'aggregated-api/company-detail', title: 'Company — Retrieve a company information', path: '/content/aggregated-api/company-detail.md' },
  { slug: 'aggregated-api/company-update', title: 'Company — Update a company information', path: '/content/aggregated-api/company-update.md' },
  { slug: 'aggregated-api/company-delete', title: 'Company — Delete a company', path: '/content/aggregated-api/company-delete.md' },

  // Customer
  { slug: 'aggregated-api/customer-statistics', title: 'Customer — Customer list statistics', path: '/content/aggregated-api/customer-statistics.md' },
  { slug: 'aggregated-api/customer-list', title: 'Customer — List of customers', path: '/content/aggregated-api/customer-list.md' },

  // Team
  { slug: 'aggregated-api/team-statistics', title: 'Team — Team list statistics', path: '/content/aggregated-api/team-statistics.md' },
  { slug: 'aggregated-api/team-list', title: 'Team — Team list', path: '/content/aggregated-api/team-list.md' },
  { slug: 'aggregated-api/team-creation', title: 'Team — Team creation', path: '/content/aggregated-api/team-creation.md' },
  { slug: 'aggregated-api/team-retrieve', title: 'Team — Team retrieval', path: '/content/aggregated-api/team-retrieve.md' },
  { slug: 'aggregated-api/team-update', title: 'Team — Team update', path: '/content/aggregated-api/team-update.md' },
  { slug: 'aggregated-api/team-deletion', title: 'Team — Team deletion', path: '/content/aggregated-api/team-deletion.md' },
  { slug: 'aggregated-api/team-statistics-team', title: 'Team — Statistics of a team', path: '/content/aggregated-api/team-statistics-team.md' },
  { slug: 'aggregated-api/team-member-list', title: 'Team — Team member list', path: '/content/aggregated-api/team-member-list.md' },
  { slug: 'aggregated-api/team-member-add', title: 'Team — Team Member Add', path: '/content/aggregated-api/team-member-add.md' },

  // Entity
  { slug: 'aggregated-api/entities-statistics', title: 'Entity — entities list statistics', path: '/content/aggregated-api/entities-statistics.md' },
  { slug: 'aggregated-api/entities-list', title: 'Entity — List of entities', path: '/content/aggregated-api/entities-list.md' },
  { slug: 'aggregated-api/entity-informations', title: 'Entity — Get entity informations', path: '/content/aggregated-api/entity-informations.md' },
  { slug: 'aggregated-api/entity-modification', title: 'Entity — Update entity informations', path: '/content/aggregated-api/entity-modification.md' },

  // Reference
  { slug: 'aggregated-api/customer-references-statistics', title: 'Reference — Customer references list statistics', path: '/content/aggregated-api/customer-references-statistics.md' },
  { slug: 'aggregated-api/references-list', title: 'Reference — List of reference', path: '/content/aggregated-api/references-list.md' },
  { slug: 'aggregated-api/references-creation', title: 'Reference — Create a reference', path: '/content/aggregated-api/references-creation.md' },
  { slug: 'aggregated-api/references-informations', title: 'Reference — Reference information', path: '/content/aggregated-api/references-informations.md' },
  { slug: 'aggregated-api/references-modification', title: 'Reference — Update a reference', path: '/content/aggregated-api/references-modification.md' },

  // Manager
  { slug: 'aggregated-api/manager-statistics', title: 'Manager — Manager list statistics', path: '/content/aggregated-api/manager-statistics.md' },
  { slug: 'aggregated-api/manager-list', title: 'Manager — List of managers', path: '/content/aggregated-api/manager-list.md' },
  { slug: 'aggregated-api/manager-creation', title: 'Manager — Create a new manager', path: '/content/aggregated-api/manager-creation.md' },
  { slug: 'aggregated-api/manager-update', title: 'Manager — Update a manager', path: '/content/aggregated-api/manager-update.md' },

  // Assets
  { slug: 'aggregated-api/assets-list', title: 'Assets — List assets', path: '/content/aggregated-api/assets-list.md' },
  { slug: 'aggregated-api/asset-information', title: 'Assets — Asset Information', path: '/content/aggregated-api/asset-information.md' },
  { slug: 'aggregated-api/asset-transactions', title: 'Assets — List asset transactions', path: '/content/aggregated-api/asset-transactions.md' },
  { slug: 'aggregated-api/asset-investments', title: 'Assets — List asset investments', path: '/content/aggregated-api/asset-investments.md' },

  // Parent Company
  { slug: 'aggregated-api/parent-company-list', title: 'Parent Company — List parent companies', path: '/content/aggregated-api/parent-company-list.md' },
  { slug: 'aggregated-api/parent-company-informations', title: 'Parent Company — Retreive the parent company informations', path: '/content/aggregated-api/parent-company-informations.md' },

  // Schemas
  { slug: 'aggregated-api/schemas/company', title: 'Schemas — Company', path: '/content/aggregated-api/schemas-company.md' },
  { slug: 'aggregated-api/schemas/customer', title: 'Schemas — Customer', path: '/content/aggregated-api/schemas-customer.md' },
  { slug: 'aggregated-api/schemas/team', title: 'Schemas — Team', path: '/content/aggregated-api/schemas-team.md' },
  { slug: 'aggregated-api/schemas/entity', title: 'Schemas — Entity', path: '/content/aggregated-api/schemas-entity.md' },
  { slug: 'aggregated-api/schemas/manager', title: 'Schemas — Manager', path: '/content/aggregated-api/schemas-manager.md' },
  { slug: 'aggregated-api/schemas/asset', title: 'Schemas — Asset', path: '/content/aggregated-api/schemas-asset.md' },
  { slug: 'aggregated-api/schemas/transaction', title: 'Schemas — Transaction', path: '/content/aggregated-api/schemas-transaction.md' },
  { slug: 'aggregated-api/schemas/investment', title: 'Schemas — Investment', path: '/content/aggregated-api/schemas-investment.md' },
  { slug: 'aggregated-api/schemas/parent-company', title: 'Schemas — Parent Company', path: '/content/aggregated-api/schemas-parent-company.md' },
]

export function getOrderedDocSlugs(): string[] {
  return [
    // Authentication
    'authentication/introduction',
    // Financial Provider Specification
    'financial-provider-specification/introduction',
    'financial-provider-specification/company-list',
    'financial-provider-specification/company-detail',
    'financial-provider-specification/manager-list',
    'financial-provider-specification/manager-detail',
    'financial-provider-specification/contract-list',
    'financial-provider-specification/contract-detail',
    'financial-provider-specification/asset-list',
    'financial-provider-specification/asset-detail',
    'financial-provider-specification/asset-transactions',
    'financial-provider-specification/asset-valuation-history',
    'financial-provider-specification/asset-valuation-current',
    'financial-provider-specification/asset-investments',
    'financial-provider-specification/asset-investments-history',
    'financial-provider-specification/schemas/cursor_paginated',
    'financial-provider-specification/schemas/company',
    'financial-provider-specification/schemas/manager',
    'financial-provider-specification/schemas/contract',
    'financial-provider-specification/schemas/asset',
    'financial-provider-specification/schemas/transaction',
    'financial-provider-specification/schemas/amount',
    'financial-provider-specification/schemas/investment',
    // Aggregated API
    'aggregated-api/introduction',
    'aggregated-api/company-list',
    'aggregated-api/company-statistics',
    'aggregated-api/company-detail',
    'aggregated-api/company-update',
    'aggregated-api/company-delete',
    'aggregated-api/customer-statistics',
    'aggregated-api/customer-list',
    'aggregated-api/team-statistics',
    'aggregated-api/team-list',
    'aggregated-api/team-creation',
    'aggregated-api/team-retrieve',
    'aggregated-api/team-update',
    'aggregated-api/team-deletion',
    'aggregated-api/team-statistics-team',
    'aggregated-api/team-member-list',
    'aggregated-api/team-member-add',
    'aggregated-api/entities-statistics',
    'aggregated-api/entities-list',
    'aggregated-api/entity-informations',
    'aggregated-api/entity-modification',
    'aggregated-api/customer-references-statistics',
    'aggregated-api/references-list',
    'aggregated-api/references-creation',
    'aggregated-api/references-informations',
    'aggregated-api/references-modification',
    'aggregated-api/manager-statistics',
    'aggregated-api/manager-list',
    'aggregated-api/manager-creation',
    'aggregated-api/manager-update',
    'aggregated-api/assets-list',
    'aggregated-api/asset-information',
    'aggregated-api/asset-transactions',
    'aggregated-api/asset-investments',
    'aggregated-api/parent-company-list',
    'aggregated-api/parent-company-informations',
    'aggregated-api/schemas/company',
    'aggregated-api/schemas/customer',
    'aggregated-api/schemas/team',
    'aggregated-api/schemas/entity',
    'aggregated-api/schemas/manager',
    'aggregated-api/schemas/asset',
    'aggregated-api/schemas/transaction',
    'aggregated-api/schemas/investment',
    'aggregated-api/schemas/parent-company',
  ]
}

