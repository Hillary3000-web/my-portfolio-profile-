'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onEnter = () => document.body.classList.add('cursor-grow');
    const onLeave = () => document.body.classList.remove('cursor-grow');

    const bindHover = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    const loop = () => {
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      animId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    bindHover();
    loop();

    // Re-bind hover listeners when DOM changes (route transitions, etc.)
    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={curRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
