import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

import type { SiteSettingsData } from '@/lib/site-model'

type SiteFooterProps = {
  siteSettings: SiteSettingsData
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.2c0-.9.2-1.5 1.5-1.5H16V5.1c-.2 0-1-.1-2-.1-2 0-3.4 1.2-3.4 3.6V11H8v3h2.6v7h2.9Z" />
    </svg>
  )
}

export function SiteFooter({ siteSettings }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-brand-forest pb-10 pt-20 text-white/70" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Image
              alt={siteSettings.siteName}
              className="mb-6 h-auto w-[255px]"
              height={314}
              src="/branding/logo-footer.png"
              unoptimized
              width={920}
            />
            <p className="text-sm leading-relaxed font-light">{siteSettings.footerDescription}</p>
          </div>

          <div>
            <h4 className="mb-6 font-subtitle text-lg uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {siteSettings.navigation.slice(0, 4).map((item) => (
                <li key={`${item.title}-${item.href}-footer`}>
                  <a className="transition-colors hover:text-brand-rose" href={item.href}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-subtitle text-lg uppercase tracking-wider text-white">
              Contact & Réservation
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-brand-rose" />
                <span>
                  {siteSettings.contact.address.split('\n').map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-brand-rose" />
                <span>{siteSettings.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-brand-rose" />
                <span>{siteSettings.contact.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-subtitle text-lg uppercase tracking-wider text-white">
              Suivez-moi
            </h4>
            <div className="flex space-x-4">
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-brand-rose hover:text-white"
                href={siteSettings.socials.facebookUrl}
              >
                <FacebookIcon />
              </a>
            </div>
            <div className="mt-8">
              <a
                className="inline-block bg-brand-rose px-6 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:!text-brand-forest"
                href={siteSettings.bookingCta.href}
              >
                {siteSettings.bookingCta.label}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs font-light md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteSettings.siteName}. Tous droits réservés.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            {siteSettings.legalLinks.map((link) => (
              <a className="hover:text-white" href={link.href} key={`${link.label}-${link.href}`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
