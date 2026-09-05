import { useActiveSection, useScrollProgress } from '../hooks/useScrollTracking'

const STAGES = [
  { id: 'hero', label: 'intake' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'stack' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]

export default function Rail() {
  const progress = useScrollProgress()
  const active = useActiveSection(STAGES.map((s) => s.id))

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Top progress line — visible at every breakpoint */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent"
        role="progressbar"
        aria-label="Page read progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--bronze), var(--silver), var(--gold))',
            transition: 'width 80ms linear',
          }}
        />
      </div>

      {/* Vertical stage rail — desktop only */}
      <nav
        aria-label="Section navigation"
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-0"
      >
        <div className="relative flex flex-col gap-7 pl-4 border-l" style={{ borderColor: 'var(--line)' }}>
          {STAGES.map((stage) => {
            const isActive = active === stage.id
            return (
              <button
                key={stage.id}
                onClick={() => scrollTo(stage.id)}
                className="group flex items-center gap-3 -ml-[21px] text-left"
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className="block w-[9px] h-[9px] rounded-full shrink-0 transition-colors"
                  style={{
                    background: isActive ? 'var(--accent-hover)' : 'var(--bg)',
                    border: `2px solid ${isActive ? 'var(--accent-hover)' : 'var(--text-faint)'}`,
                  }}
                />
                <span
// was: className="font-mono text-[11px] tracking-normal transition-colors whitespace-nowrap"
                  className="font-mono text-[11px] tracking-normal transition-colors whitespace-nowrap group-hover:!text-[var(--accent-hover)]"                  style={{ color: isActive ? 'var(--text)' : 'var(--text-faint)' }}
                >
                  {stage.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
