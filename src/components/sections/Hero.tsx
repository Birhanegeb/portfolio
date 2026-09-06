import { profile } from '../../data/content'

export default function Hero() {
  return (
    <section id="hero" style={{ background: 'var(--section-hero)' }}>
      <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-center container-page pt-16 pb-16">
        <p className="font-mono text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          {profile.location} · currently building data pipelines
        </p>

        <h1
          className="font-display leading-[1.02] mb-8"
          style={{
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 480,
            fontOpticalSizing: 'auto' as never,
            maxWidth: '18ch',
          }}
        >
          {profile.name}
        </h1>

        <div className="flex items-baseline gap-3 mb-10">
          <span
            className="h-px w-10 shrink-0"
            style={{ background: 'var(--gold)' }}
            aria-hidden="true"
          />
          <p className="font-mono text-lg sm:text-xl" style={{ color: 'var(text)' }}>
            Data Engineer / AI Engineer
          </p>
        </div>

        <p className="prose-copy text-base sm:text-lg leading-relaxed mb-12" style={{ color: 'var(--text-muted)' }}>
          {profile.summary}
        </p>

        <PipelineFlow />

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12">
          <a href="#projects" className="hero-link">
            View projects
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hero-link">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hero-link">
            LinkedIn
          </a>
          <a href="./Birhane-Gebrewahid-CV.pdf" download className="hero-link">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

function PipelineFlow() {
  const stages = [
    { label: 'bronze', sub: 'raw ingest', color: 'var(--bronze)' },
    { label: 'silver', sub: 'validated', color: 'var(--silver)' },
    { label: 'gold', sub: 'curated', color: 'var(--gold)' },
  ]

  return (
    <div
      className="flex items-center gap-0 max-w-xl"
      role="img"
      aria-label="Data flows through bronze, silver, and gold pipeline stages"
    >
      {stages.map((stage, i) => (
        <div key={stage.label} className="flex items-center flex-1 min-w-0">
          <div className="flex flex-col items-start">
            <span
              className="w-3 h-3 rounded-full mb-3"
              style={{ background: stage.color }}
              aria-hidden="true"
            />
            <span className="font-mono text-sm" style={{ color: 'var(--text)' }}>
              {stage.label}
            </span>
            <span className="font-mono text-sm" style={{ color: 'var(--text-faint)' }}>
              {stage.sub}
            </span>
          </div>
          {i < stages.length - 1 && (
            <div className="flex-1 h-px mx-3 mt-[-24px] relative overflow-hidden" style={{ background: 'var(--line)' }}>
              <span className="pipeline-pulse" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}