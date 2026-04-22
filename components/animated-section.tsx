"use client"

import { useEffect, useRef, useState } from "react"

type AnimationVariant = "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  threshold?: number
  as?: React.ElementType
}

export function AnimatedSection({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  threshold = 0.12,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? `animate-${variant}` : "opacity-0"}`}
      style={delay && visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
