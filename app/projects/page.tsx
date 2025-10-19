import { ArrowIcon } from "../components/icons";

export const metadata = {
  title: "Projects",
  description: "A collection of my personal and professional projects.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

      <div className="space-y-8">
        {/* Not Another Resume Builder */}
        <div className="space-y-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">
              Not Another Resume Builder
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              AI powered resume generator
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Next.js
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Tanstack Query
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Azure
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Gemini AI
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Firebase
              </span>
            </div>
          </div>
          <ul className="space-y-3 text-neutral-800 dark:text-neutral-200 ml-4">
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Built an AI powered resume builder which builds the resume
                automatically and compiles it in LaTeX format.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Added a devmode allowing users to hover and enter prompts to
                change the resume accordingly.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Added a history of created resumes, storing personal data of
                users in a database to serve personalized resumes according to
                job descriptions.
              </span>
            </li>
          </ul>
          <div className="flex gap-4 pt-2">
            <a
              href="https://narb.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"
            >
              Live Demo
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* EventEase */}
        <div className="space-y-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">
              EventEase
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Modern event management platform for creating, managing, and
              sharing events
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Next.js
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Supabase
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                TypeScript
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Tailwind CSS
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                shadcn/ui
              </span>
            </div>
          </div>
          <ul className="space-y-3 text-neutral-800 dark:text-neutral-200 ml-4">
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Built a comprehensive event management platform with role-based
                access control (Admin, Event Owner, User) enabling secure event
                creation and management workflows.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Implemented dual view modes (calendar and list) for event
                visualization with real-time updates, providing intuitive
                navigation and event tracking capabilities.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Developed analytics dashboard displaying key metrics including
                total events, attendee tracking, and RSVP analytics for
                data-driven decision making.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Integrated shareable public links for each event, enabling
                non-registered users to view event details and RSVP seamlessly.
              </span>
            </li>
          </ul>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Jonaxx8/EventEase"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"
            >
              View on GitHub
              <ArrowIcon />
            </a>
            <a
              href="https://event-ease-brown.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"
            >
              Live Demo
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Catering App */}
        <div className="space-y-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2">
              Catering App
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Event-based catering booking and management system
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Flutter
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Supabase
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Node.js
              </span>
            </div>
          </div>
          <ul className="space-y-3 text-neutral-800 dark:text-neutral-200 ml-4">
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Developed a Catering App with separate Flutter-based
                applications for clients and admins, facilitating seamless
                event-based catering bookings and order management.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Implemented Node.js backend integrated with Supabase database
                and Prisma ORM, ensuring efficient data management and real-time
                updates for orders and menus.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                Enabled client-side functionality for booking catered services
                based on occasion, and admin-side functionality for managing
                orders, menus, and service availability.
              </span>
            </li>
          </ul>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Jonaxx8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"
            >
              View on GitHub
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Additional Projects Note */}
        <div className="pt-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            More projects and contributions can be found on my{" "}
            <a
              href="https://github.com/Jonaxx8"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"
            >
              GitHub profile
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
