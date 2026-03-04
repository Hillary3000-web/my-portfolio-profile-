'use client';

import { useEffect, useRef } from 'react';

const SKILLS = [
    {
        num: '01',
        badge: 'Primary',
        title: 'Backend',
        tags: ['Django 5', 'Python', 'Django REST', 'SimpleJWT', 'Celery', 'Redis', 'Django Channels', 'WebSockets'],
    },
    {
        num: '02',
        badge: 'Primary',
        title: 'Database',
        tags: ['PostgreSQL', 'Supabase', 'SQLite', 'ORM', 'Migrations'],
        delay: '0.08s',
    },
    {
        num: '03',
        badge: 'Secondary',
        title: 'Frontend',
        tags: ['React 19', 'Vite', 'Framer Motion', 'Zustand', 'React Query', 'Recharts'],
        delay: '0.16s',
    },
    {
        num: '04',
        badge: 'Growing',
        title: 'AI & Vision',
        tags: ['Groq API', 'Llama 3.3 70B', 'OpenCV', 'Tesseract OCR', 'Backtracking'],
        delay: '0.24s',
    },
    {
        num: '05',
        badge: 'DevOps',
        title: 'Deploy',
        tags: ['Render', 'Vercel', 'Docker', 'Git / GitHub', 'Gunicorn', 'ASGI / WSGI'],
        delay: '0.32s',
    },
];

function SkillCard({ skill }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) el.classList.add('visible');
            },
            { threshold: 0.09 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="skill-card reveal"
            data-num={skill.num}
            style={skill.delay ? { transitionDelay: skill.delay } : undefined}
        >
            <div className="skill-badge">{skill.badge}</div>
            <div className="skill-title">{skill.title}</div>
            <div className="skill-tags">
                {skill.tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills">
            <div className="sec-label">002 — Stack</div>
            <div className="skills-grid">
                {SKILLS.map((skill) => (
                    <SkillCard key={skill.num} skill={skill} />
                ))}
            </div>
        </section>
    );
}
