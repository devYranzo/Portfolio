import React, { useState, useEffect } from 'react'

export default function CursorCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none w-16 h-16 bg-emerald-400 rounded-full blur-[70px]"
        style={{
          left: position.x - 40,
          top: position.y - 40,
          transition: 'left 0.1s ease, top 0.1s ease',
          zIndex: -1,
        }}
      ></div>
    </>
  )
}
