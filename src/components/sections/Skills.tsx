import Section from '../Section'
import { skillGroups } from '../../data/content'

export default function Skills() {
  return (
    <Section id="skills" title="Stack" bg="var(--section-skills)">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-4xl">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-base font-medium mb-4" style={{ color: 'var(--text)' }}>
              {group.label}
            </h3>
            <ul className="flex flex-col gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}