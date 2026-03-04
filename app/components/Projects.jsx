import ScrollReveal from './ScrollReveal';

export default function Projects() {
    return (
        <section id="projects">
            <div className="proj-header">
                <ScrollReveal as="h2" className="proj-heading">
                    Selected<br /><span>Work</span>
                </ScrollReveal>
                <a
                    href="https://github.com/Hillary3000-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-all"
                >
                    All on GitHub →
                </a>
            </div>

            <ScrollReveal className="proj-list">
                {/* FEATURED: FlowState */}
                <a
                    className="proj-featured"
                    href="https://flow-state-liart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="proj-feat-top">
                        <span className="proj-feat-num">001 — Featured</span>
                        <span className="proj-feat-arrow">↗</span>
                    </div>
                    <div className="proj-feat-name">FlowState</div>
                    <div className="proj-feat-sub">
                        Full Stack Productivity Platform · Live on Vercel
                    </div>
                    <p className="proj-feat-desc">
                        A <strong>psychologically-optimized productivity platform</strong>{' '}
                        built for students, developers, and founders. Combines task
                        management with priority levels, Pomodoro focus sessions, visual
                        time-blocking, goal tracking, analytics dashboards, and a{' '}
                        <strong>Groq-powered AI assistant (Llama 3.3 70B)</strong> — all in
                        one premium dark UI. Backend runs{' '}
                        <strong>Django Channels for real-time WebSocket notifications</strong>,{' '}
                        <strong>Celery + Redis for async tasks</strong>, and{' '}
                        <strong>PostgreSQL via Supabase</strong> in production. Secured with
                        JWT auth throughout.
                    </p>
                    <div className="proj-feat-stack">
                        {['Django 5', 'DRF', 'WebSockets', 'Celery + Redis', 'PostgreSQL', 'Groq / Llama 3.3', 'React 19', 'Zustand', 'React Query', 'Framer Motion', 'Render + Vercel'].map((tag) => (
                            <span className="proj-feat-tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                </a>

                {/* SUDOKU SOLVER */}
                <a
                    className="proj-row"
                    href="https://sudoku-solver-six-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="proj-num">002</span>
                    <div>
                        <div className="proj-name">AI Sudoku Solver</div>
                        <div className="proj-desc">
                            Solves 4×4 up to 16×16 Sudoku grids via a Python backtracking
                            algorithm exposed as a Django REST API. Upload a photo and{' '}
                            <strong>OpenCV + Tesseract OCR</strong> extract the grid
                            automatically — no manual entry needed.
                        </div>
                    </div>
                    <div className="proj-tags">
                        {['Python', 'Django', 'OpenCV', 'OCR', 'React'].map((tag) => (
                            <span className="proj-tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                    <span className="proj-arrow">↗</span>
                </a>

                {/* PORTFOLIO */}
                <a
                    className="proj-row"
                    href="https://my-portfolio-profile-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="proj-num">003</span>
                    <div>
                        <div className="proj-name">Portfolio v2 — Liquid Glass UI</div>
                        <div className="proj-desc">
                            Production-grade portfolio featuring Apple-inspired glassmorphism,
                            dark/light mode with system preference detection, Framer Motion
                            page transitions, and a mobile-first responsive layout built with
                            React + Vite.
                        </div>
                    </div>
                    <div className="proj-tags">
                        {['React', 'Framer Motion', 'Vite', 'CSS Modules'].map((tag) => (
                            <span className="proj-tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                    <span className="proj-arrow">↗</span>
                </a>
            </ScrollReveal>
        </section>
    );
}
