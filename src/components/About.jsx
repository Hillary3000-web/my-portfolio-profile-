'use client'

import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-t border-rule">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">

        {/* Sidebar */}
        <div className="reveal">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">01 — About</p>
          <div className="mt-6 space-y-4">
            {[
              ['Email',    'princehillary813@gmail.com', 'mailto:princehillary813@gmail.com'],
              ['GitHub',   'Hillary3000-web',             'https://github.com/Hillary3000-web'],
              ['LinkedIn', 'chukwuma-hillary',            'https://linkedin.com/in/chukwuma-hillary-318b09337'],
            ].map(([label, val, href]) => (
              <div key={label}>
                <p className="font-mono text-[9px] text-muted/50 uppercase tracking-widest mb-0.5">{label}</p>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-muted hover:text-accent transition-colors break-words"
                >
                  {val}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          <h2
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mb-8 reveal"
            style={{ transitionDelay: '0.05s' }}
          >
            The honest version.
          </h2>

          <div className="space-y-5 reveal" style={{ transitionDelay: '0.12s' }}>
            <p className="font-sans text-lg text-ink font-light leading-relaxed">
              I started with Django building APIs. I ended up debugging race conditions
              in NestJS at midnight and shipping an ML Flask backend for a university course.
              Now I want to own the infrastructure those systems run on.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              I'm a third-year Computer Science student at FUTO and a graduate of the
              ALX Backend Engineering Programme. Outside of code, I serve as Secretary
              General of ASICTS, FUTO's ICT student association. It keeps me grounded in
              the community I came from.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Right now I'm working through AWS SAA-C03, with IAM done and compute and
              storage in progress. Not certified yet and I won't overclaim it. My goal is
              a remote cloud or backend role, and I'm open to relocation opportunities
              after graduation.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8 reveal" style={{ transitionDelay: '0.18s' }}>
            {['Port Harcourt, NG', 'Open to remote', 'Graduating Jan 2028', 'Open to relocation'].map(t => (
              <span key={t} className="font-mono text-xs text-muted bg-rule/60 px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
