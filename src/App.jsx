const projects = [
  {
    title: 'Easy Yum',
    year: '2026',
    type: 'Personal',
    description: 'A recipe app built around simple, one-pan meals. Designed, built, and launched independently using AI-assisted development.',
    stack: 'React · Tailwind',
    url: 'https://www.easyyum.app/',
  },
  {
    title: 'Sanborn Studio',
    year: '2026',
    type: 'Freelance',
    description: 'Portfolio and artist notes blog for oil painter Jen Sanborn. CMS-connected gallery built for long-term content ownership.',
    stack: 'React · Tailwind · Sanity',
    url: 'https://www.sanbornstudio.com/',
  },
  {
    title: 'Token Stories',
    year: '2025',
    type: 'Personal',
    description: 'A platform for short-form narratives shaped from thought experiments. Designed and built with AI-assisted development.',
    stack: 'React · Tailwind · Framer Motion',
    url: 'https://www.tokenstories.org/',
  },
  {
    title: 'Merit Medical',
    year: '2022',
    type: 'Freelance',
    description: 'Primary developer on a web app for generating medical supply label sets. Built the frontend, integrated a Django backend, and coordinated a small team to see the project through to delivery.',
    stack: 'React Native Web · JavaScript · Django',
    url: null,
  },
  {
    title: 'Hilary Watts',
    year: '2022',
    type: 'Freelance',
    description: 'Minimalist personal site for a researcher, built to highlight her academic background and make contact easy.',
    stack: 'React',
    url: 'https://hilary-researcher.vercel.app/',
  },
]

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-stone-50 text-stone-900 font-sans">

      {/* Left — sticky identity */}
      <aside className="md:w-[38%] md:sticky md:top-0 md:h-screen flex flex-col justify-between px-10 py-16">
        <div className="space-y-3">
          <h1 className="text-4xl font-light tracking-tight">Osha Foster</h1>
          <p className="text-sm text-stone-500">Software Engineer</p>
          <p className="text-sm text-stone-400 leading-relaxed max-w-xs pt-1">
            I design and build — from concept to deployment, working independently
            or as part of a team. Lately focused on AI-assisted development and
            what it means to make thoughtful software with new tools.
          </p>
        </div>

        <nav className="flex flex-col gap-1.5">
          <a href="#work" className="text-sm text-stone-400 hover:text-stone-900 transition-colors duration-150">Work</a>
          <a href="#about" className="text-sm text-stone-400 hover:text-stone-900 transition-colors duration-150">About</a>
          <a href="#contact" className="text-sm text-stone-400 hover:text-stone-900 transition-colors duration-150">Contact</a>
        </nav>
      </aside>

      {/* Right — scrolling content */}
      <main className="md:w-[62%] px-10 py-16 md:py-24 space-y-32 border-l border-stone-200">

        {/* Work */}
        <section id="work">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-10">Work</p>
          <div>
            {projects.map(({ title, year, type, description, stack, url }) => {
              const meta = (
                <p className="text-xs text-stone-400">
                  <span className="text-stone-500">{type}</span>
                  {' — '}
                  {stack}
                </p>
              )
              if (url) {
                return (
                  <a
                    key={title}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block py-6 border-t border-stone-200"
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <p className="text-sm font-medium">
                        {title} <span className="text-stone-300 group-hover:text-stone-500 transition-colors duration-150">↗</span>
                      </p>
                      <span className="text-xs text-stone-400">{year}</span>
                    </div>
                    <p className="text-sm text-stone-400 leading-relaxed mb-2">{description}</p>
                    {meta}
                  </a>
                )
              }
              return (
                <div key={title} className="py-6 border-t border-stone-200">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <p className="text-sm font-medium">{title}</p>
                    <span className="text-xs text-stone-300">{year}</span>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed mb-2">{description}</p>
                  {meta}
                </div>
              )
            })}
            <div className="border-t border-stone-200" />
          </div>
        </section>

        {/* About */}
        <section id="about">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-10">About</p>
          <div className="space-y-4 max-w-sm">
            <p className="text-sm text-stone-500 leading-relaxed">
              Software engineer who likes to build. Lately that's meant working with
              AI on creative projects — not letting it generate everything at once,
              but breaking work into pieces and building up from a solid foundation.
              It tends to get to a done product.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed">
              Background in full-stack development across medical, construction, and
              data industries. Good at owning a project end to end.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-10">Contact</p>
          <div className="space-y-2">
            <a href="mailto:oshafoster@hotmail.com" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors duration-150">
              oshafoster@hotmail.com
            </a>
            <a href="https://github.com/OshaFoster" target="_blank" rel="noopener noreferrer" className="block text-sm text-stone-400 hover:text-stone-900 transition-colors duration-150">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/osha-foster-a295ab52/" target="_blank" rel="noopener noreferrer" className="block text-sm text-stone-400 hover:text-stone-900 transition-colors duration-150">
              LinkedIn
            </a>
          </div>
        </section>

      </main>
    </div>
  )
}
