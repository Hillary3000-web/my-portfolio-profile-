'use client'

import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const darkField =
  'w-full bg-transparent border-b border-night-rule text-night-text text-sm py-3 focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-night-muted/40 font-sans'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const send = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Replace YOUR_FORM_ID after creating a free form at formspree.io
      const r = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(r.ok ? 'ok' : 'err')
    } catch {
      setStatus('err')
    }
  }

  return (
    <section id="contact" ref={ref} className="bg-night text-night-text py-20 md:py-28 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-12 md:mb-16 border-b border-night-rule pb-6 reveal">
          <p className="font-mono text-xs text-night-muted uppercase tracking-widest">04 — Contact</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Left */}
          <div className="reveal">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-night-text leading-tight mb-5">
              Let's work<br />
              <span className="text-accent">together.</span>
            </h2>
            <p className="font-sans text-base text-night-muted leading-relaxed mb-10">
              Open to backend contracts, cloud internships and remote roles.
              I respond within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Email',    val: 'princehillary813@gmail.com',  href: 'mailto:princehillary813@gmail.com' },
                { label: 'GitHub',   val: 'github.com/Hillary3000-web',  href: 'https://github.com/Hillary3000-web' },
                { label: 'LinkedIn', val: 'chukwuma-hillary',             href: 'https://linkedin.com/in/chukwuma-hillary-318b09337' },
              ].map(({ label, val, href }) => (
                <div key={label} className="flex items-center justify-between border-b border-night-rule pb-3 group">
                  <span className="font-mono text-xs text-night-muted uppercase tracking-widest">{label}</span>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-night-text group-hover:text-accent transition-colors duration-150 font-medium"
                  >
                    {val} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ transitionDelay: '0.12s' }}>
            {status === 'ok' ? (
              <div className="h-full flex flex-col justify-center py-12">
                <p className="font-display font-bold text-4xl text-night-text mb-3">Sent.</p>
                <p className="font-sans text-night-muted">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={send} className="space-y-7">
                {[
                  { name: 'name',  label: 'Your name', type: 'text',  ph: 'John Doe' },
                  { name: 'email', label: 'Email',      type: 'email', ph: 'you@company.com' },
                ].map(({ name, label, type, ph }) => (
                  <div key={name}>
                    <label className="font-mono text-[10px] text-night-muted uppercase tracking-widest block mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      required
                      value={form[name]}
                      onChange={set}
                      className={darkField}
                      placeholder={ph}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-[10px] text-night-muted uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={set}
                    className={`${darkField} resize-none`}
                    placeholder="What are you working on?"
                  />
                </div>

                {status === 'err' && (
                  <p className="font-mono text-xs text-red-400">
                    Something went wrong. Email me directly at princehillary813@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-canvas font-display font-bold py-4 text-sm tracking-wide hover:opacity-90 transition-opacity duration-200 disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
