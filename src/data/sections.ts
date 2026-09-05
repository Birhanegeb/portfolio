export const SECTION_ORDER = [
  'hero',
  'experience',
  'skills',
  'projects',
  'education',
  'contact',
] as const

export type SectionId = (typeof SECTION_ORDER)[number]

export const SECTION_LABELS: Record<SectionId, string> = {
  hero: 'Home',
  experience: 'Experience',
  skills: 'Stack',
  projects: 'Projects',
  education: 'Education',
  contact: 'Contact Me',
}