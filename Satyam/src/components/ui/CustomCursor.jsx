import { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const node = cursorRef.current
    if (!node) return

    const update = (event) => {
      node.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
    }

    window.addEventListener('pointermove', update)
    return () => window.removeEventListener('pointermove', update)
  }, [])

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}

export default CustomCursor
