'use client'

import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Infrastructure', 'Contact']

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open,  setOpen]  = useState(false)

  useEffect(() => {
    const h = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'bg-canvas/95 backdrop-blur-sm border-b border-rule' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg text-ink tracking-tight">
          HCP<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-sans text-sm text-muted hover:text-ink transition-colors duration-150 tracking-wide">
              {l}
            </a>
          ))}
          <a href="#contact"
            className="font-sans text-sm font-medium text-canvas bg-ink px-4 py-2 hover:bg-accent transition-colors duration-200">
            Hire me
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px]" aria-label="Menu">
          <span className={`w-5 h-px bg-ink block transition-all ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`w-5 h-px bg-ink block transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-ink block transition-all ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-canvas border-b border-rule px-6 pb-6 space-y-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="block text-sm text-muted hover:text-ink transition-colors py-1"
              onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href="#contact" className="block text-sm font-medium text-accent" onClick={() => setOpen(false)}>
            Hire me &rarr;
          </a>
        </div>
      )}
    </header>
  )
}
