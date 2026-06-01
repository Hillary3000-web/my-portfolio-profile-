import useReveal from '../hooks/useReveal'

const featured = [
  {
    num: '01',
    title: 'FlowState',
    tag: 'AI · Productivity',
    year: '2026',
    desc: 'Built an AI-powered productivity platform end-to-end. Integrated Groq\'s Llama 3.3 70B for intelligent task management, handled the Django backend, PostgreSQL schema, Redis caching layer, and the React frontend.',
    stack: ['React', 'Django', 'Groq / Llama 3.3 70B', 'PostgreSQL', 'Redis'],
    live: 'https://flow-state-liart.vercel.app',
    repo: 'https://github.com/Hillary3000-web/Flow-state',
    flagship: true,
  },
  {
    num: '02',
    title: 'MediRemit',
    tag: 'Fintech · Healthcare',
    year: '2026',
    desc: 'Designed and shipped a cross-border healthcare payment platform by myself in one hackathon weekend. No team. Integrated Interswitch\'s payment API, built the Node.js backend and React frontend from scratch, and got it live under deadline pressure.',
    stack: ['Node.js / Express', 'React', 'Supabase', 'Interswitch Checkout API'],
    live: 'https://mediremit-frontend.vercel.app',
  },
  {
    num: '03',
    title: 'Sentiment Analysis',
    tag: 'ML · NLP',
    year: '2026',
    desc: 'Implemented and compared three text classification models — Naive Bayes, Logistic Regression, and SVM — with a Flask API serving live predictions. Built for a university ML course but went well beyond what was required.',
    stack: ['Flask', 'Scikit-learn', 'Python', 'NLP'],
    live: 'https://sentiment-analysis-g0cf.onrender.com',
    repo: 'https://github.com/Hillary3000-web/sentiment-analysis',
  },
]

const extras = [
  { title: 'UniHub',        desc: 'Student results portal for FUTO(under development)' },
  { title: 'Sudoku Solver', desc: 'Django + OpenCV / Tesseract(under development)' },
  { title: 'JungleTrack',   desc: 'Django guide on Gumroad', href: 'https://hillarydev.gumroad.com' },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref} className="bg-night text-night-text overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-12 md:mb-16 border-b border-night-rule pb-6 reveal">
          <p className="font-mono text-xs text-night-muted uppercase tracking-widest">02 — Selected Work</p>
          <h2 className="font-display font-bold text-2xl md:text-4xl text-night-text">Projects</h2>
        </div>

        {/* Project rows */}
        <div>
          {featured.map(({ num, title, tag, year, desc, stack, live, repo, flagship }, i) => (
            <div
              key={title}
              className="group border-b border-night-rule py-8 md:py-10 transition-colors duration-200 hover:bg-night-2 rounded-sm reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-6">
                <span className="font-mono text-xl md:text-2xl font-bold text-night-rule group-hover:text-accent transition-colors duration-200 shrink-0 w-10 select-none">
                  {num}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl md:text-3xl text-night-text">{title}</h3>
                    {flagship && (
                      <span className="font-mono text-[10px] text-accent border border-accent/40 px-2 py-0.5 rounded-full uppercase tracking-widest">
                        flagship
                      </span>
                    )}
                    <span className="font-mono text-xs text-night-muted">{tag} · {year}</span>
                  </div>
                  <p className="font-sans text-sm text-night-muted leading-relaxed mb-4 max-w-2xl">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map(s => (
                      <span key={s} className="font-mono text-[10px] text-night-muted border border-night-rule px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-2 shrink-0">
                  {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-xs text-night-text border border-night-rule px-4 py-2 hover:border-accent hover:text-accent transition-colors duration-200 text-center whitespace-nowrap">
                      Live ↗
                    </a>
                  )}
                  {repo && (
                    <a href={repo} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-xs text-night-muted border border-night-rule px-4 py-2 hover:border-night-text hover:text-night-text transition-colors duration-200 text-center whitespace-nowrap">
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Also built */}
        <div className="mt-12 reveal" style={{ transitionDelay: '0.3s' }}>
          <p className="font-mono text-xs text-night-muted uppercase tracking-widest mb-5">Also built</p>
          <div className="flex flex-wrap gap-3">
            {extras.map(({ title, desc, href }) => (
              <div key={title} className="flex items-center gap-2 border border-night-rule rounded-full px-4 py-2 hover:border-accent/50 transition-colors duration-200">
                <span className="font-sans text-sm text-night-text font-medium">{title}</span>
                <span className="font-sans text-xs text-night-muted hidden sm:inline opacity-60">{desc}</span>
                {href && (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-accent text-xs hover:underline ml-1">↗</a>
                )}
              </div>
            ))}
            <a href="https://github.com/Hillary3000-web" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-accent/40 rounded-full px-4 py-2 text-accent font-mono text-xs hover:bg-accent/10 transition-colors duration-200">
              All on GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
