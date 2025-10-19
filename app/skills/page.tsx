export const metadata = {
  title: 'Skills',
  description: 'My technical skills and competencies.',
}

export default function SkillsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Skills
      </h1>
      
      <div className="space-y-8">
        {/* Programming Languages */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
            Programming Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'Java'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Front-end Stack */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
            Front-end Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Flutter', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'UI/UX'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Back-end Stack */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
            Back-end Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Node.js', 'SQL', 'REST APIs', 'JSON'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
            Database
          </h2>
          <div className="flex flex-wrap gap-2">
            {['MySQL', 'MongoDB', 'Sequelize ORM', 'Redis'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Development & Operations */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
            Development & Operations
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Agile', 'Git', 'Azure', 'Version Control', 'Linux', 'Jira'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
            Soft Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Problem Solving', 'English Fluency', 'Team Collaboration', 'Attention to Detail'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Notable Achievements */}
        <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
            Technical Achievements
          </h2>
          <ul className="space-y-2 text-neutral-800 dark:text-neutral-200">
            <li className="flex gap-2">
              <span className="text-neutral-400">→</span>
              <span>80% reduction in HTTP API Latency through Redis caching</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">→</span>
              <span>Scaled system to handle 100,000+ daily requests</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">→</span>
              <span>Optimized authentication reducing login time from 4s to 0.6s</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">→</span>
              <span>Implemented CI/CD pipelines ensuring zero-downtime deployments</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

