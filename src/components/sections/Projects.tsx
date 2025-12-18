import { projects } from '../../data/projects'

export const Projects = () => (
  <section
    id="projects"
    className="min-h-[80vh] py-12 px-6
               bg-surface-light dark:bg-surface-dark
               text-text-light dark:text-text-dark"
  >
    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
      Projects
    </h2>

    <div className="flex flex-wrap justify-center gap-6">
      {projects.map(project => (
        <div
          key={project.id}
          className="w-full sm:w-72 md:w-80
                     bg-surface-light dark:bg-surface-dark
                     border border-border-light dark:border-border-dark
                     rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
              {project.stack.join(', ')}
            </p>
          </div>

          <div className="flex gap-2 p-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 border border-border-light dark:border-border-dark
                           rounded hover:bg-primary hover:text-white transition-colors text-sm"
              >
                Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-primary text-white rounded
                           hover:bg-primary-hover transition-colors text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
)
