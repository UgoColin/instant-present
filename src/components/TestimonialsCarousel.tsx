'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useEffectEvent, useRef, useState } from 'react'

type TestimonialsCarouselProps = {
  items: {
    author: string
    quote: string
  }[]
}

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const goToSlide = useEffectEvent((index: number) => {
    setActiveIndex((() => {
      if (!items.length) {
        return 0
      }

      return (index + items.length) % items.length
    })())
  })

  const goToNext = useEffectEvent(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
  })

  const goToPrevious = useEffectEvent(() => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length)
  })

  useEffect(() => {
    if (items.length < 2) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    const interval = window.setInterval(() => {
      goToNext()
    }, 5000)

    return () => {
      window.clearInterval(interval)
    }
  }, [goToNext, items.length])

  if (!items.length) {
    return null
  }

  const activeItem = items[activeIndex]

  return (
    <div
      className="mx-auto max-w-4xl"
      onTouchEnd={(event) => {
        if (touchStartX.current === null) {
          return
        }

        const delta = event.changedTouches[0].clientX - touchStartX.current

        if (Math.abs(delta) > 40) {
          if (delta < 0) {
            goToNext()
          } else {
            goToPrevious()
          }
        }

        touchStartX.current = null
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX
      }}
      onWheel={(event) => {
        if (Math.abs(event.deltaX) < 20 && Math.abs(event.deltaY) < 20) {
          return
        }

        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
          if (event.deltaX > 0) {
            goToNext()
          } else {
            goToPrevious()
          }

          return
        }

        if (event.deltaY > 0) {
          goToNext()
        } else {
          goToPrevious()
        }
      }}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-brand-rose/15 bg-white px-6 py-8 shadow-[0_24px_80px_rgba(21,87,77,0.08)] sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute left-8 top-6 font-script text-6xl leading-none text-brand-rose/16">
          &ldquo;
        </div>

        <div className="relative min-h-[22rem] sm:min-h-[18rem]">
          <div
            className="transition-all duration-500 ease-out"
            key={`${activeItem.author}-${activeIndex}`}
          >
            <p className="text-lg leading-relaxed font-light text-brand-sage sm:text-xl">
              {activeItem.quote}
            </p>
            <h4 className="mt-8 font-subtitle text-2xl text-brand-forest">- {activeItem.author}</h4>
          </div>
        </div>

        {items.length > 1 ? (
          <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <button
                aria-label="Avis précédent"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-forest/15 text-brand-forest transition-colors hover:bg-brand-forest hover:text-white"
                onClick={() => goToPrevious()}
                type="button"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Avis suivant"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-forest/15 text-brand-forest transition-colors hover:bg-brand-forest hover:text-white"
                onClick={() => goToNext()}
                type="button"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {items.map((item, index) => (
                <button
                  aria-label={`Afficher l'avis ${index + 1}`}
                  className={[
                    'h-2.5 rounded-full transition-all',
                    index === activeIndex ? 'w-8 bg-brand-rose' : 'w-2.5 bg-brand-rose/30 hover:bg-brand-rose/50',
                  ].join(' ')}
                  key={`${item.author}-${index}-dot`}
                  onClick={() => goToSlide(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
