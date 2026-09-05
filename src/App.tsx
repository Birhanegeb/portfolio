import { useState } from 'react'
import TopNav from './components/TopNav'
import { SECTION_ORDER, type SectionId } from './data/sections'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

const SECTION_COMPONENTS: Record<SectionId, () => React.JSX.Element> = {
  hero: Hero,
  experience: Experience,
  skills: Skills,
  projects: Projects,
  education: Education,
  contact: Contact,
}

export default function App() {
  const [active, setActive] = useState<SectionId>(SECTION_ORDER[0])
  const ActiveSection = SECTION_COMPONENTS[active]

  return (
    <div>
      <TopNav active={active} onSelect={setActive} />
      <main>
        <ActiveSection />
      </main>
    </div>
  )
}