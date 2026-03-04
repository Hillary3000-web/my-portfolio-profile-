'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
    const [clock, setClock] = useState('Open to Work');

    useEffect(() => {
        const interval = setInterval(() => {
            const n = new Date();
            const wat = new Date(
                n.getTime() + n.getTimezoneOffset() * 60000 + 3600000
            );
            const h = String(wat.getHours()).padStart(2, '0');
            const m = String(wat.getMinutes()).padStart(2, '0');
            const s = String(wat.getSeconds()).padStart(2, '0');
            setClock(`WAT  ${h}:${m}:${s}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav>
            <a href="#" className="nav-logo">
                H<span>.</span>C<span>.</span>P
            </a>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Stack</a></li>
                <li><a href="#projects">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-right">
                <div className="dot" />
                <span>{clock}</span>
            </div>
        </nav>
    );
}
