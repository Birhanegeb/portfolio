import Section from '../Section'
import { experience } from '../../data/content'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" bg="var(--section-experience)">
      <ol className="flex flex-col gap-12 max-w-3xl">
        {experience.map((job) => (
          <li key={`${job.org}-${job.start}`} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-2">
            <p className="font-mono text-sm pt-1" style={{ color: 'var(--text-faint)' }}>
              {job.start} — {job.end}
            </p>
            <div>
              <h3 className="text-lg font-medium">{job.role}</h3>
              <p className="text-base mb-3" style={{ color: 'var(--text-muted)' }}>
                {job.org} · {job.place}
              </p>
              <ul className="flex flex-col gap-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-base leading-relaxed pl-4 relative"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span
                      className="absolute left-0 top-[0.6em] w-[5px] h-[5px] rounded-full"
                      style={{ background: 'var(--silver)' }}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}