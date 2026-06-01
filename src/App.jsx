// Watermark: swap between "Artboard 7" and "Artboard 17" below
const WATERMARK = '/images/Secret Bloom - Artboard 7.svg'

const projects = [
  {
    title: 'Easy Yum',
    year: '2026',
    type: 'Personal',
    description: 'A recipe app built around simple, one-pan meals. Designed, built, and launched independently using AI-assisted development.',
    url: 'https://www.easyyum.app/',
  },
  {
    title: 'Sanborn Studio',
    year: '2026',
    type: 'Freelance',
    description: 'Portfolio and artist notes blog for oil painter Jen Sanborn. CMS-connected gallery built for long-term content ownership.',
    url: 'https://www.sanbornstudio.com/',
  },
  {
    title: 'Token Stories',
    year: '2025',
    type: 'Personal',
    description: 'A platform for short-form narratives shaped from thought experiments.',
    url: 'https://www.tokenstories.org/',
  },
  {
    title: 'Merit Medical',
    year: '2022',
    type: 'Freelance',
    description: 'Primary developer on a web app for generating medical supply label sets. Built the frontend, integrated a Django backend, and coordinated a small team.',
    url: null,
  },
  {
    title: 'Hilary Watts',
    year: '2022',
    type: 'Freelance',
    description: 'Minimalist personal site for a researcher, built to highlight her academic background and make contact easy.',
    url: 'https://hilary-researcher.vercel.app/',
  },
]

export default function App() {
  return (
    <div style={{ display: 'flex', height: '100%', fontFamily: 'var(--font-body)', position: 'relative' }}>


      {/* Watermark — lives on outer container so it can bleed across the divider */}
      <img
        src={WATERMARK}
        alt=""
        aria-hidden="true"
        className="watermark"
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '6%',
          width: '640px',
          filter: 'invert(1) sepia(1) hue-rotate(300deg) saturate(2) brightness(1.3)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 2,
        }}
      />

      {/* ── Left panel ───────────────────────── */}
      <aside style={{
        width: '38%',
        height: '100%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 48px',
        position: 'relative',
        background: 'var(--bg-light)',
      }}>

        {/* Name + bio */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1
            className="anim-fade-up"
            style={{
              fontFamily: "'Bigilla', var(--font-display)",
              fontSize: '80px',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '0.04em',
              color: 'var(--ink)',
              marginBottom: '28px',
              animationDelay: '0.1s',
            }}
          >
            Osha<br />Foster
          </h1>
          <p
            className="anim-slide-left"
            style={{
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--mauve)',
              marginBottom: '20px',
              animationDelay: '0.45s',
            }}
          >
            Freelance Web Designer
          </p>
          <p
            className="anim-fade-in"
            style={{
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: 1.85,
              color: 'var(--muted)',
              maxWidth: '240px',
              animationDelay: '0.75s',
            }}
          >
            I design and build personal websites — simple, beautiful, and built to last.
          </p>
        </div>

        {/* Nav */}
        <nav style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['Work', 'About', 'Contact'].map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                fontSize: '12px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--blush)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* ── Divider ──────────────────────────── */}
      <div style={{ width: '1px', height: '100%', background: 'var(--mauve)', opacity: 0.4, flexShrink: 0 }} />

      {/* ── Right panel ──────────────────────── */}
      <main
        id="work"
        style={{
          flex: 1,
          height: '100%',
          overflowY: 'auto',
          padding: '80px 64px',
        }}
      >
        {/* Work */}
        <section style={{ marginBottom: '96px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--mauve)', marginBottom: '48px' }}>
            Selected Work
          </p>

          <div style={{ borderTop: '1px solid var(--divider)' }}>
            {projects.map(({ title, year, type, description, url }, i) => {
              const inner = (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
                    <span className="project-title" style={{
                      fontFamily: "'Bigilla', var(--font-display)",
                      fontSize: '36px',
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                    }}>
                      {title}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em' }}>{year}</span>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.8, color: 'var(--muted)', marginBottom: '10px', maxWidth: '480px' }}>
                    {description}
                  </p>
                  <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    {type}
                  </span>
                </>
              )

              const rowStyle = {
                animationDelay: `${0.3 + i * 0.2}s`,
              }

              return url ? (
                <a
                  key={title}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-row anim-fade-up"
                  style={{ display: 'block', padding: '32px 0', borderBottom: '1px solid var(--divider)', textDecoration: 'none', ...rowStyle }}
                >
                  {inner}
                </a>
              ) : (
                <div key={title} className="project-row anim-fade-up" style={{ padding: '32px 0', borderBottom: '1px solid var(--divider)', ...rowStyle }}>
                  {inner}
                </div>
              )
            })}
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ marginBottom: '96px', maxWidth: '480px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--mauve)', marginBottom: '32px' }}>
            About
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, lineHeight: 1.65, color: 'var(--ink)', marginBottom: '24px' }}>
            Software engineer who likes to build.
          </p>
          <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.9, color: 'var(--muted)', marginBottom: '16px' }}>
            Lately that's meant working with AI on creative projects — not letting it generate everything at once, but breaking work into pieces and building up from a solid foundation.
          </p>
          <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.9, color: 'var(--muted)' }}>
            Background in full-stack development across medical, construction, and data industries. Good at owning a project end to end.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" style={{ marginBottom: '96px', position: 'relative' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--mauve)', marginBottom: '32px' }}>
            Contact
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'oshafoster@hotmail.com', href: 'mailto:oshafoster@hotmail.com' },
              { label: 'GitHub', href: 'https://github.com/OshaFoster' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/osha-foster-a295ab52/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ fontSize: '13px', fontWeight: 300, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--blush)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                {label}
              </a>
            ))}
          </div>
          <img
            src="/images/Secret Bloom - Artboard 17.svg"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-138px',
              right: '-36px',
              width: '160px',
              opacity: 0.3,
              filter: 'brightness(10)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        </section>

      </main>
    </div>
  )
}
