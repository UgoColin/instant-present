'use client'
/* eslint-disable @next/next/no-img-element */

import { useEffect, useEffectEvent, useState } from 'react'

type HeroSlide = {
  alt: string
  objectPosition?: string
  src: string
}

type HeroSlideshowProps = {
  slides: HeroSlide[]
}

export function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const uniqueSlides = slides.filter(
    (slide, index, array) => array.findIndex((item) => item.src === slide.src) === index,
  )
  const [activeIndex, setActiveIndex] = useState(0)

  const goToNextSlide = useEffectEvent(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % uniqueSlides.length)
  })

  useEffect(() => {
    if (uniqueSlides.length < 2) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    const interval = window.setInterval(() => {
      goToNextSlide()
    }, 5000)

    return () => {
      window.clearInterval(interval)
    }
  }, [uniqueSlides.length])

  return (
    <div className="absolute inset-0 z-0">
      {uniqueSlides.map((slide, index) => (
        <img
          alt={slide.alt}
          className={[
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out',
            index === activeIndex ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          key={slide.src}
          src={slide.src}
          style={{ objectPosition: slide.objectPosition || 'center' }}
        />
      ))}
      <div className="absolute inset-0 bg-brand-forest/18" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/94 via-brand-cream/78 to-brand-cream/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/18 via-transparent to-white/10" />
    </div>
  )
}
