import ScrollReveal from './ScrollReveal';

export default function About() {
    return (
        <section id="about">
            <div className="about-left">
                <div className="sec-label">001 — About</div>
                <ScrollReveal as="h2" className="about-heading">
                    Backend first.<br /><em>Full picture.</em><br />Always.
                </ScrollReveal>
                <ScrollReveal as="p" className="about-body" style={{ transitionDelay: '0.08s' }}>
                    I&apos;m <strong>Hillary Chukwuma Prince</strong> — a Full Stack Developer
                    with a strong backend bias, based in{' '}
                    <strong>Port Harcourt, Nigeria</strong>. I build the systems behind
                    the experience:{' '}
                    <strong>
                        REST APIs, async task queues, real-time WebSocket connections,
                    </strong>{' '}
                    and AI-integrated backends that are engineered to scale.
                </ScrollReveal>
                <ScrollReveal as="p" className="about-body" style={{ transitionDelay: '0.16s' }}>
                    On the frontend I ship clean, animated React UIs using{' '}
                    <strong>Framer Motion, Zustand, and React Query</strong> — but my real
                    home is in <strong>Django and Python</strong>, where I&apos;ve built
                    everything from productivity platforms with Celery workers to
                    AI-powered computer vision solvers. I&apos;m currently{' '}
                    <strong>open to backend, full stack, or API-focused roles.</strong>
                </ScrollReveal>
                <ScrollReveal className="about-tags" style={{ transitionDelay: '0.22s' }}>
                    <span className="about-tag">Backend APIs</span>
                    <span className="about-tag">AI Integration</span>
                    <span className="about-tag">Real-time Systems</span>
                    <span className="about-tag">Full Stack</span>
                    <span className="about-tag">Open to Remote</span>
                </ScrollReveal>
                <ScrollReveal style={{ transitionDelay: '0.28s' }}>
                    <a href="mailto:princehillary813@gmail.com" className="about-cta">
                        princehillary813@gmail.com →
                    </a>
                </ScrollReveal>
            </div>
            <ScrollReveal className="about-right" style={{ transitionDelay: '0.14s' }}>
                <div className="stats-grid">
                    <div className="stat-box">
                        <div className="stat-num">3+</div>
                        <div className="stat-label">Years Building</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-num">2</div>
                        <div className="stat-label">Live Projects</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-num">AI</div>
                        <div className="stat-label">Integrated Builds</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-num">∞</div>
                        <div className="stat-label">Curiosity</div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
