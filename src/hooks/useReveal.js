import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    // Mark body so CSS can safely hide elements (avoids blank flash if JS is slow)
    document.body.classList.add('js-ready')

    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
    )

    const els = ref.current?.querySelectorAll('.reveal') ?? []
    els.forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [])

  return ref
}
