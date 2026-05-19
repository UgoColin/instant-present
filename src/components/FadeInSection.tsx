'use client'

import { useEffect, useRef, useState } from 'react'

type FadeInSectionProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeInSection({
  children,
  className,
  delay = 0,
}: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const currentRef = domRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      className={[
        'transition-all duration-1000 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
