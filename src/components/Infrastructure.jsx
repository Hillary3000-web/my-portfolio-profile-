import useReveal from '../hooks/useReveal'

const steps = [
  { name: 'Amazon S3',  detail: 'Stores the static build output — HTML, CSS, JS and assets. Configured for static website hosting.', done: true },
  { name: 'CloudFront', detail: 'CDN that distributes the site globally from edge locations. HTTPS enforced, S3 as origin.',          done: true },
  { name: 'ACM',        detail: 'Free TLS certificate issued in us-east-1, which is required for CloudFront distributions.',         done: true },
  { name: 'Route 53',   detail: 'Custom domain and alias record. On the list once I pick a domain name.',                           done: false },
]

export default function Infrastructure() {
  const ref = useReveal()

  return (
    <section id="infrastructure" ref={ref} className="py-20 md:py-28 px-6 md:px-10 lg:px-16 border-t border-rule">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-12 md:mb-16 reveal">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">03 — Infrastructure</p>
          <h2 className="font-display font-bold text-2xl md:text-4xl text-ink">This site runs on AWS</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          <div className="reveal" style={{ transitionDelay: '0.08s' }}>
            <p className="font-sans text-lg font-light text-ink leading-relaxed mb-4">
              Intentionally simple. This is hands-on practice with the services I need
              for SAA-C03, not enterprise architecture.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              Static React build, distributed globally via CloudFront, with HTTPS through
              ACM. Currently running on the CloudFront distribution URL. A custom domain
              is the obvious next step.
            </p>

            {/* Diagram */}
            <div>
              <p className="font-mono text-[10px] text-muted/50 uppercase tracking-widest mb-4">Architecture</p>
              <div className="flex flex-wrap items-center gap-1">
                {['Browser', 'CloudFront', 'S3 Bucket'].map((node, i, arr) => (
                  <span key={node} className="flex items-center gap-1">
                    <span className={`font-mono text-xs px-3 py-2 border ${
                      node === 'Browser'
                        ? 'border-rule text-muted'
                        : 'border-accent/40 text-accent bg-accent-bg'
                    }`}>
                      {node}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-rule text-sm select-none">→</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="font-mono text-[10px] text-muted/40 mt-3 uppercase tracking-widest">
                HTTPS via ACM · Deployed via AWS CLI
              </p>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.16s' }}>
            {steps.map(({ name, detail, done }, i) => (
              <div key={name} className="flex gap-4 py-5 border-b border-rule last:border-0">
                <div className={`w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center ${
                  done ? 'bg-accent' : 'border border-rule'
                }`}>
                  {done
                    ? <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : <span className="font-mono text-[9px] text-muted">{i + 1}</span>
                  }
                </div>
                <div>
                  <p className={`font-sans text-sm font-semibold mb-0.5 ${done ? 'text-ink' : 'text-muted'}`}>{name}</p>
                  <p className="font-sans text-sm text-muted leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
