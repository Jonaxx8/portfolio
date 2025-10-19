export const metadata = {
  title: 'Experience',
  description: 'My professional work experience and career journey.',
}

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Experience
      </h1>
      
      <div className="space-y-12">
        {/* Periskope */}
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">SDE 1</h2>
                <p className="text-neutral-600 dark:text-neutral-400">Periskope</p>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Jun 2025 - Present</span>
            </div>
          </div>
          <ul className="space-y-3 text-neutral-800 dark:text-neutral-200 ml-4">
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Developed and maintained <strong>"Warmup Numbers"</strong>, a WhatsApp number warming 
                system designed to improve deliverability and engagement rates. Implemented background 
                job scheduling, analytics tracking, and message queue optimization.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Integrated HubSpot CRM with Periskope's communication platform, enabling automatic 
                syncing of WhatsApp conversations, contact creation, and company data mapping between 
                the two systems.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Built automated prospecting and outreach scripts to streamline lead generation.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Contributed to the AI Playground, an interactive environment where users can test 
                and customize the platform's AI Agent in real time — focusing on prompt configuration, 
                context management, and user experience.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Engineered robust error-handling and rate-limiting mechanisms to gracefully manage 
                API throttling and ensure high system reliability across integrations and background tasks.
              </span>
            </li>
          </ul>
        </div>

        {/* Mitt Arv */}
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Software Developer</h2>
                <p className="text-neutral-600 dark:text-neutral-400">Mitt Arv</p>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Feb 2024 - May 2025</span>
            </div>
          </div>
          <ul className="space-y-3 text-neutral-800 dark:text-neutral-200 ml-4">
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Promoted from Software Development Engineer Intern to Software Developer within 6 months, 
                based on strong performance and contributions.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Implemented Redis caching to address high database load and improve response times, 
                achieving an <strong>80% reduction in HTTP API Latency</strong> and scaling the system 
                to handle over <strong>100,000 requests daily</strong>.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Assisted deployment processes using CI/CD pipelines and YAML ensuring zero-downtime 
                releases for deployments.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Optimized authentication services by leveraging Express.js and Middlewares, reducing 
                average login times from <strong>4 seconds to 0.6 seconds</strong>.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Implemented secure user access to documents using Azure SAS tokens, ensuring data 
                confidentiality and controlled access based on user permissions.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Led a team in revamping the company's website using React.js, implementing engaging 
                animations to enhance user experience. Managed complex state efficiently with Redux 
                Toolkit and ensured full responsiveness for a seamless experience across devices.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Implemented Google Analytics to track user behavior and acquisition metrics, while 
                optimizing the company website's SEO to improve visibility and search rankings.
              </span>
            </li>
          </ul>
        </div>

        {/* Awards Section */}
        <div className="space-y-4 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-semibold tracking-tight mb-6">Awards & Recognition</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">Singapore Fintech Festival</h3>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">2024</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Mitt Arv</p>
              <p className="text-neutral-800 dark:text-neutral-200">
                Represented the company with the founding team in Singapore, showcasing a legacy 
                preservation idea that ranked <strong>20th globally</strong>.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">MANTHAN - Finalist</h3>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">2021</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">MIC-AICTE</p>
              <p className="text-neutral-800 dark:text-neutral-200">
                Reached the finalist stage in a prestigious national initiative by the government. 
                Developed an Automatic Number Plate Recognition System that streamlined vehicle 
                monitoring and enhanced transportation system efficiency.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">LEXICON 2.0 - Winner</h3>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">2021</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">IARE</p>
              <p className="text-neutral-800 dark:text-neutral-200">
                Achieved first place in a highly competitive national-level hackathon, outshining 
                over <strong>200 app development teams</strong>. Delivered a cutting-edge solution 
                that demonstrated innovation and practical utility in a real-world scenario.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">VNR-VJIET HACKATHON - Finalist</h3>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">2021</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">VNR-VJIET</p>
              <p className="text-neutral-800 dark:text-neutral-200">
                Developed an android application that locates health-centers and lists government schemes.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-semibold tracking-tight mb-6">Education</h2>
          
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Bachelor of Technology in Computer Science</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Jawaharlal Nehru Technological University
                </p>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">2024</span>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200">Hyderabad, India</p>
          </div>
        </div>
      </div>
    </section>
  )
}

