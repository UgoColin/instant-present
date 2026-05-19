'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import type { SiteSettingsData } from '@/lib/site-model'

type SiteHeaderProps = {
  siteSettings: SiteSettingsData
}

export function SiteHeader({ siteSettings }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isPathActive = (href: string) => {
    if (!href || href === '#') {
      return false
    }

    const baseHref = href.split('#')[0]

    if (!baseHref) {
      return false
    }

    if (baseHref === '/') {
      return pathname === '/'
    }

    return pathname === baseHref || pathname.startsWith(`${baseHref}/`)
  }

  const isItemActive = (href: string, submenu?: SiteSettingsData['navigation'][number]['submenu']) =>
    isPathActive(href) || Boolean(submenu?.some((subItem) => isPathActive(subItem.href)))

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream shadow-md">
      <div className="relative mx-auto min-h-[5.5rem] w-full px-3 py-1.5 sm:min-h-[6rem] sm:px-5 lg:px-6">
        <Link
          className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center sm:left-5 lg:left-6"
          href="/"
        >
          <Image
            alt={siteSettings.siteName}
            className="h-auto w-[225px] object-contain object-left md:w-[260px]"
            height={314}
            priority
            src="/branding/logo-header.png"
            unoptimized
            width={920}
          />
        </Link>

        <div className="mx-auto grid min-h-[5.5rem] w-full grid-cols-[1fr_auto] items-center sm:min-h-[6rem] sm:w-[96%] lg:w-[94%] xl:w-[92%] 2xl:w-[88%] xl:grid-cols-[220px_1fr_220px]">
          <div className="hidden xl:block" />

          <nav className="hidden h-full items-center justify-center self-center gap-5 xl:flex 2xl:gap-6">
            {siteSettings.navigation.map((item) => {
              const isActive = isItemActive(item.href, item.submenu)

              return (
                <div className="group relative" key={`${item.title}-${item.href}`}>
                  <Link
                    className={[
                      'relative flex items-center whitespace-nowrap py-2 text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-full after:-translate-x-1/2 after:bg-brand-rose after:transition-all after:duration-300 2xl:text-sm 2xl:tracking-widest',
                      isActive
                        ? 'text-brand-rose after:max-w-full'
                        : 'text-brand-forest after:max-w-0 hover:text-brand-rose group-hover:after:max-w-full',
                    ].join(' ')}
                    href={item.href}
                  >
                    {item.title === 'Contact / RDV' ? 'Contact' : item.title}
                    {item.submenu?.length ? (
                      <ChevronDown
                        className={[
                          'ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-px',
                          isActive
                            ? 'text-brand-rose'
                            : 'text-current group-hover:text-brand-rose',
                        ].join(' ')}
                      />
                    ) : null}
                  </Link>

                  {item.submenu?.length ? (
                    <div className="invisible absolute left-0 mt-2 w-56 origin-top-left border border-brand-rose/20 bg-brand-cream opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            className="block px-4 py-2 text-sm text-brand-sage transition-colors hover:bg-brand-rose hover:text-white"
                            href={subItem.href}
                            key={`${subItem.title}-${subItem.href}`}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </nav>

          <div className="ml-auto flex items-center xl:hidden">
            <button
              className="text-brand-forest transition-colors hover:text-brand-rose focus:outline-none"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              type="button"
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>

          <div className="hidden xl:block" />
        </div>
      </div>

      <div
        className={[
          'absolute left-0 top-full w-full bg-brand-cream shadow-xl transition-all duration-300 xl:hidden',
          isMobileMenuOpen
            ? 'visible max-h-[calc(100vh-80px)] overflow-y-auto py-4 opacity-100'
            : 'invisible max-h-0 overflow-hidden py-0 opacity-0',
        ].join(' ')}
      >
        <div className="space-y-3 px-4">
          {siteSettings.navigation.map((item) => (
            <div key={`${item.title}-${item.href}-mobile`}>
              <Link
                className={[
                  'block border-b border-brand-rose/20 py-2 text-lg font-semibold transition-colors',
                  isItemActive(item.href, item.submenu) ? 'text-brand-rose' : 'text-brand-forest',
                ].join(' ')}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title === 'Contact / RDV' ? 'Contact' : item.title}
              </Link>

              {item.submenu?.length ? (
                <div className="space-y-2 py-2 pl-4">
                  {item.submenu.map((subItem) => (
                    <Link
                      className="block text-sm text-brand-sage hover:text-brand-rose"
                      href={subItem.href}
                      key={`${subItem.title}-${subItem.href}-mobile`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      - {subItem.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
