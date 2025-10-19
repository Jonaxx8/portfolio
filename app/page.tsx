import Link from 'next/link'
import { ArrowIcon } from './components/icons'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Nikil Jonnada
      </h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        Software Developer
      </p>
      <p className="mb-8 prose prose-neutral dark:prose-invert">
        {`Energetic and adaptable software developer with a strong focus on backend systems and scalable architectures. Passionate about designing efficient solutions, optimizing performance, and continuously learning emerging technologies to drive innovation in software development.`}
      </p>
      
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:nikil.jonnada8@gmail.com" className="hover:text-neutral-800 dark:hover:text-neutral-200">
            nikil.jonnada8@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Hyderabad, 500016</span>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <a
          href="https://www.linkedin.com/in/nikil-jonnada/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-neutral-800 dark:hover:border-neutral-200 transition-all"
        >
          LinkedIn
          <ArrowIcon />
        </a>
        <a
          href="https://github.com/Jonaxx8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-neutral-800 dark:hover:border-neutral-200 transition-all"
        >
          GitHub
          <ArrowIcon />
        </a>
        <a
          href="https://drive.google.com/file/d/1UHc4DhLMtVPD3XTgYQBC92vybMfTpeNT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-neutral-800 dark:hover:border-neutral-200 transition-all"
        >
          Resume
          <ArrowIcon />
        </a>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Highlights</h2>
        <ul className="space-y-2 text-neutral-800 dark:text-neutral-200">
          <li className="flex gap-2">
            <span className="text-neutral-400">→</span>
            <span>Currently SDE 1 at <a href="https://periskope.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Periskope</a>, building WhatsApp communication platforms</span>
          </li>
          <li className="flex gap-2">
            <span className="text-neutral-400">→</span>
            <span>Building and scaling full-stack solutions that streamline WhatsApp-based business communication for 5,000+ companies worldwide</span>
          </li>
          <li className="flex gap-2">
            <span className="text-neutral-400">→</span>
            <span>Winner at multiple hackathons defeating 200-500+ teams</span>
          </li>
          <li className="flex gap-2">
            <span className="text-neutral-400">→</span>
            <span>Represented <a href="https://www.linkedin.com/feed/update/urn:li:activity:7262821029478039552/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Mitt Arv</a> at <a href="https://www.fintechfestival.sg/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Singapore Fintech Festival (Top 20 globally)</a></span>
          </li>
          <li className="flex gap-2">
            <span className="text-neutral-400">→</span>
            <span>Linux enthusiast | Explore my <a href="https://github.com/Jonaxx8/dotfiles" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">dotfiles</a> and see how I optimize my workflow </span>
          </li>
        </ul>
      </div>

      <div className="my-8 flex flex-col gap-4">
        <Link
          href="/experience"
          className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-neutral-800 dark:hover:border-neutral-200 transition-all"
        >
          <div>
            <h3 className="font-semibold">Experience</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">View my professional journey</p>
          </div>
          <ArrowIcon />
        </Link>
        <Link
          href="/projects"
          className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-neutral-800 dark:hover:border-neutral-200 transition-all"
        >
          <div>
            <h3 className="font-semibold">Projects</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Explore my work</p>
          </div>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
