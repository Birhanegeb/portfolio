import Section from '../Section'
import { education, languages } from '../../data/content'

export default function Education() {
  return (
    <Section id="education" title="Education" bg="var(--section-education)">
      <div className="grid sm:grid-cols-[1fr_auto] gap-x-12 gap-y-14 max-w-4xl">
        <ol className="flex flex-col gap-10">
          {education.map((item) => (
            <li key={item.degree} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-1">
              <p className="font-mono text-[13px] pt-1" style={{ color: 'var(--text-faint)' }}>
                {item.start} — {item.end}
              </p>
              <div>
                <h3 className="text-lg font-medium">{item.degree}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {item.school} · {item.place}
                </p>
                {item.focus && (
                  <p className="text-sm mt-1" style={{ color: 'var(--text-faint)' }}>
                    Focus: {item.focus}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div>
          <h3 className="text-sm font-medium mb-4">Languages</h3>
          <ul className="flex flex-col gap-2">
            {languages.map((lang) => (
              <li key={lang.name} className="font-mono text-[13px]" style={{ color: 'var(--text-muted)' }}>
                {lang.name} — {lang.level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
