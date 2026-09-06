import { useLayoutEffect, useRef, useState } from 'react'
import { SECTION_ORDER, SECTION_LABELS, type SectionId } from '../data/sections'

export default function TopNav({
  active,
  onSelect,
}: {
  active: SectionId
  onSelect: (id: SectionId) => void
}) {
  const listRef = useRef<HTMLUListElement>(null)
  const [hovered, setHovered] = useState<SectionId | null>(null)
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false })

  // Only one highlight is ever shown: the hovered item if there is one,
  // otherwise the active section.
  const targetId = hovered ?? active

  useLayoutEffect(() => {
    const measure = () => {
      const list = listRef.current
      if (!list) return
      const btn = list.querySelector<HTMLButtonElement>(`[data-id="${targetId}"]`)
      if (!btn) return
      const listRect = list.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      setPill({ left: btnRect.left - listRect.left, width: btnRect.width, ready: true })
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [targetId])

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ background: 'var(--bg)', borderColor: 'var(--line)' }}
    >
      <nav className="container-page flex flex-wrap items-center justify-between gap-y-3 py-5">
        <button
          onClick={() => onSelect('hero')}
          className="group flex items-center gap-2.5"
        >
          <span className="flex items-baseline gap-1 font-mono text-lg">
            <span style={{ color: 'var(--accent-hover)' }}>{'<'}</span>
            <span className="font-display" style={{ fontWeight: 480, fontFamily: 'var(--font-display)' }}>
              Birhane
            </span>
            <span style={{ color: 'var(--accent-hover)' }}>{'/>'}</span>
          </span>
          <span
            className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded-full transition-colors group-hover:opacity-80"
            style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}
          >
            data.engineer
          </span>
        </button>

        <ul
          ref={listRef}
          onMouseLeave={() => setHovered(null)}
          className="relative flex flex-wrap items-center gap-x-2 gap-y-2 text-base"
        >
          {/* single sliding highlight — moves to whichever item is hovered/active */}
          <span
            aria-hidden="true"
            className="absolute top-0 h-full rounded-lg transition-all duration-200 ease-out pointer-events-none"
            style={{
              left: pill.left,
              width: pill.width,
              background: 'var(--bg-raised-2)',
              opacity: pill.ready ? 1 : 0,
            }}
          />

          {SECTION_ORDER.map((id) => (
            <li key={id} className="relative z-10">
              <button
                data-id={id}
                onMouseEnter={() => setHovered(id)}
                onClick={() => onSelect(id)}
                aria-current={active === id ? 'page' : undefined}
                className="rounded-lg px-5 py-2.5 font-semibold"
                style={{ color: 'var(--text)' }}
              >
                {SECTION_LABELS[id]}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}