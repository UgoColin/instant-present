export type SiteSubmenuItem = {
  href: string
  title: string
}

export type SiteNavItem = {
  href: string
  submenu?: SiteSubmenuItem[]
  title: string
}

export type SiteSettingsData = {
  bookingCta: {
    href: string
    label: string
  }
  contact: {
    address: string
    email: string
    phone: string
  }
  footerDescription: string
  legalLinks: {
    href: string
    label: string
  }[]
  shortSiteName: string
  siteName: string
  socials: {
    facebookUrl: string
    instagramUrl: string
  }
  tagline: string
  navigation: SiteNavItem[]
}

export type HomePageData = {
  about: {
    imageAlt: string
    imageUrl: string
    paragraphs: string[]
    scriptTitle: string
    title: string
  }
  approach: {
    highlightedQuote: string
    introText: string
    title: string
  }
  audience: {
    highlightedText: string
    imageAlt: string
    imageUrl: string
    paragraphs: string[]
    title: string
  }
  contactBanner: {
    text: string
  }
  hero: {
    accentTitle: string
    backgroundImageAlt: string
    backgroundImageUrl: string
    ctaHref: string
    ctaLabel: string
    scriptTitle: string
    subtitle: string
    title: string
  }
  services: {
    ctaHref: string
    ctaLabel: string
    items: {
      description: string
      href: string
      imageAlt: string
      imageUrl: string
      title: string
    }[]
    scriptTitle: string
    title: string
  }
  testimonials: {
    items: {
      author: string
      quote: string
    }[]
    scriptTitle: string
    title: string
  }
}

export type WellnessPageData = {
  benefits: {
    items: {
      description: string
      icon: 'heart' | 'sparkles' | 'wind'
      title: string
    }[]
    title: string
  }
  cta: {
    buttonHref: string
    buttonLabel: string
    text: string
    title: string
  }
  hero: {
    backgroundImageAlt: string
    backgroundImageUrl: string
    subtitle: string
    title: string
  }
  intro: {
    paragraphs: string[]
    title: string
  }
  services: {
    items: {
      description: string
      duration: string
      href: string
      imageAlt: string
      imageUrl: string
      price: string
      title: string
    }[]
  }
}

export type WellnessServiceDetailPageData = {
  audience: {
    items: string[]
    title: string
  }
  cta: {
    primaryHref: string
    primaryLabel: string
    secondaryHref: string
    secondaryLabel: string
    text: string
    title: string
  }
  hero: {
    backgroundImageAlt: string
    backgroundImageUrl: string
    subtitle: string
    title: string
  }
  overview: {
    imageAlt: string
    imageUrl: string
    paragraphs: string[]
    scriptTitle: string
    title: string
  }
  practicalInfo: {
    ctaHref: string
    ctaLabel: string
    duration: string
    price: string
  }
  slug: string
  title: string
  benefits: {
    items: {
      description: string
      icon: 'droplets' | 'leaf' | 'wind'
      title: string
    }[]
    scriptTitle: string
    title: string
  }
}

export type BookingPageData = {
  access: {
    location: string
    mapImageAlt: string
    mapImageUrl: string
    mapLabel: string
    note: string
    scriptTitle: string
    title: string
  }
  faq: {
    acceptanceText: string
    introText: string
    items: {
      description: string
      icon: 'alert-circle' | 'clock' | 'credit-card' | 'heart-handshake' | 'shield-check'
      title: string
    }[]
    title: string
  }
  form: {
    description: string
    emailLabel: string
    messageLabel: string
    messagePlaceholder: string
    nameLabel: string
    phoneLabel: string
    serviceLabel: string
    serviceOptions: string[]
    servicePlaceholder: string
    submitLabel: string
    title: string
  }
  hero: {
    backgroundImageAlt: string
    backgroundImageUrl: string
    quote: string
    title: string
  }
  importantInfo: {
    items: string[]
    title: string
  }
  intro: {
    paragraphs: string[]
    title: string
  }
  reservation: {
    description: string
    facebookLabel: string
    facebookUrl: string
    scriptTitle: string
    title: string
  }
}
