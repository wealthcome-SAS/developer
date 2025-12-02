import { Outlet, Link, useLocation } from '@tanstack/react-router'
import React from 'react'
import { AppSidebar } from './AppSidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './ui/Sidebar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/Breadcrumb'
import { Separator } from 'design-system'
import { getBreadcrumbItems, type BreadcrumbItem as BreadcrumbItemType, getNavigationTarget } from '../lib/content'
import { Footer } from './ui/Footer'

export function Layout() {
    const location = useLocation()
    const [breadcrumbItems, setBreadcrumbItems] = React.useState<BreadcrumbItemType[]>([
        { label: 'WealthPartners', href: '/' }
    ])

    React.useEffect(() => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent).detail
            if (detail && detail.slug) {
                const items = getBreadcrumbItems(detail.slug)
                setBreadcrumbItems(items)
            }
        }

        window.addEventListener('doc:navigate', handler as EventListener)
        return () => window.removeEventListener('doc:navigate', handler as EventListener)
    }, [])

    // Reset breadcrumb to default when not on a docs page
    React.useEffect(() => {
        if (!location.pathname.startsWith('/docs/')) {
            setBreadcrumbItems([
                { label: 'WealthPartners', href: '/', isActive: true }
            ])
        }
    }, [location.pathname])

    // Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="overflow-y-auto ">
                <main className="flex-1 overflow-y-auto bg-gray-100 rounded-lg">
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {breadcrumbItems.map((item, index) => (
                                        <React.Fragment key={item.href}>
                                            <BreadcrumbItem>
                                                {item.isActive ? (
                                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                                ) : item.href === '/' ? (
                                                    <BreadcrumbLink href={item.href}>
                                                        {item.label}
                                                    </BreadcrumbLink>
                                                ) : (() => {
                                                    const { route, anchor } = getNavigationTarget(item.href)
                                                    return (
                                                        <Link
                                                            to="/docs/$"
                                                            params={{ _splat: route }}
                                                            hash={anchor}
                                                            className="transition-colors hover:text-foreground"
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    )
                                                })()}
                                            </BreadcrumbItem>
                                            {index < breadcrumbItems.length - 1 && (
                                                <BreadcrumbSeparator />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="max-w-full mx-auto pt-0">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </SidebarInset>
        </SidebarProvider>
    )
}