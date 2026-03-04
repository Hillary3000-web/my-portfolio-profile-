const ITEMS = [
    'Django', 'Python', 'Django REST Framework', 'PostgreSQL',
    'Celery + Redis', 'WebSockets', 'JWT Auth', 'React 19',
    'OpenCV', 'Groq AI', 'Supabase', 'Render + Vercel',
];

function MarqueeSet() {
    return ITEMS.map((item, i) => (
        <div className="marquee-item" key={i}>
            {item} <span className="dot-sep">✦</span>
        </div>
    ));
}

export default function Marquee() {
    return (
        <div className="marquee-wrap">
            <div className="marquee-track">
                <MarqueeSet />
                <MarqueeSet />
            </div>
        </div>
    );
}
