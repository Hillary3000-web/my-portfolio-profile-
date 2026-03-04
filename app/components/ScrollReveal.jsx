'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', style, as: Tag = 'div' }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                }
            },
            { threshold: 0.09 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <Tag ref={ref} className={`reveal ${className}`} style={style}>
            {children}
        </Tag>
    );
}
