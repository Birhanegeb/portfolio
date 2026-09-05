import type { ReactNode } from 'react'

export default function Section({
  id,
  title,
  bg,
  children,
}: {
  id: string
  title: string
  bg: string
  children: ReactNode
}) {
  return (
    <section id={id} style={{ background: bg }}>
      <div className="container-page py-20 lg:py-28">
        <h2
          className="font-display mb-12"
          style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 480 }}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}