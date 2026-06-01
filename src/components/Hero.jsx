'use client'

import { useState, useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'

const stats = [
  { k: 'Education',  v: 'B.Tech CS · FUTO · 300 Level' },
  { k: 'Graduated',  v: 'ALX Backend Engineering · Mar 2026' },
  { k: 'Available',  v: 'Remote first · Open to relocation' },
]

export default function Hero() {
  const ref = useReveal()
  const [imgLoaded, setImgLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current?.complete) setImgLoaded(true)
  }, [])

  return (
    <section ref={ref} className="min-h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* Mobile image */}
      <div className="lg:hidden relative h-64 sm:h-80 shrink-0 overflow-hidden">
        <img
          src="/hillary.jpg"
          alt="Hillary Chukwuma Prince"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectPosition: 'center 10%' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
      </div>

      {/* Left: content */}
      <div className="flex-1 flex flex-col justify-between px-6 md:px-10 lg:pl-16 lg:pr-12 pt-6 lg:pt-28 pb-10 min-w-0">

        {/* Name + status */}
        <div className="flex flex-col gap-2 reveal">
          <p className="font-mono text-xs text-muted/60 uppercase tracking-widest">
            Hillary Chukwuma Prince
          </p>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
            AWS SAA-C03 in progress · Open to remote roles
          </span>
        </div>

        {/* Headline + bio + CTAs */}
        <div className="py-8 lg:py-0">
          <h1
            className="font-display font-extrabold text-ink leading-[0.93] tracking-tight mb-6 reveal"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', transitionDelay: '0.1s' }}
          >
            Backend<br />
            depth.<br />
            <span className="text-accent">Cloud</span><br />
            direction.
          </h1>

          <p
            className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-sm reveal"
            style={{ transitionDelay: '0.18s' }}
          >
            Backend engineer with over a year of real production experience,
            actively building toward cloud infrastructure.
            Based in Port Harcourt, Nigeria.
          </p>

          <div className="flex flex-wrap gap-3 mt-7 reveal" style={{ transitionDelay: '0.24s' }}>
            <a
              href="#projects"
              className="font-sans font-semibold text-sm text-canvas bg-ink px-6 py-3 hover:bg-accent transition-colors duration-200"
            >
              View work
            </a>
            <a
              href="#contact"
              className="font-sans font-semibold text-sm text-ink border border-ink px-6 py-3 hover:bg-ink hover:text-canvas transition-colors duration-200"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal" style={{ transitionDelay: '0.32s' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-rule pt-6">
            {stats.map(({ k, v }) => (
              <div key={k}>
                <p className="font-mono text-[10px] text-muted/50 uppercase tracking-widest mb-1">{k}</p>
                <p className="font-sans text-sm text-ink leading-snug">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: image (desktop) */}
      <div className="hidden lg:block relative w-[38%] xl:w-[40%] shrink-0">
        <img
          ref={imgRef}
          src="/hillary.jpg"
          alt="Hillary Chukwuma Prince"
          onLoad={() => setImgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectPosition: 'center 8%' }}
        />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-canvas to-transparent pointer-events-none" />
      </div>

    </section>
  )
}
