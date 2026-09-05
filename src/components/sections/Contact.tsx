import { profile } from '../../data/content'

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--section-contact)' }}>
      <div className="container-page py-20 lg:py-28">
        <h2
          className="font-display mb-6"
          style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 480 }}
        >
          Get in touch
        </h2>
        <p className="prose-copy text-base sm:text-lg leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
          Based in {profile.location}. Open to data engineering, data analytics, and AI engineering roles.
        </p>

        <div className="flex flex-col gap-3 mb-16">
          <a href={`mailto:${profile.email}`} className="hero-link w-fit">
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hero-link w-fit">
            github.com/Birhanegeb
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hero-link w-fit">
            linkedin.com/in/bgeb721
          </a>
          <a href="./Birhane-Gebrewahid-CV.pdf" download className="hero-link w-fit">
            Download CV (PDF)
          </a>
        </div>

        <p className="font-mono text-sm" style={{ color: 'var(--text-faint)' }}>
          Built with React, TypeScript, and Tailwind CSS.  <br />Made by Birhane Gebrewahid. © 2024.
        </p>
      </div>
    </section>
  )
}