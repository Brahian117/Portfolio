import { motion } from 'framer-motion'
import { projects } from '../../../data/projects'

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-24  py-20 px-6
                 bg-surface-light dark:bg-surface-dark
                 text-text-light dark:text-text-dark"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="w-full sm:w-72 md:w-80
                       bg-surface-light dark:bg-surface-dark
                       border border-border-light dark:border-border-dark
                       rounded-xl shadow-lg overflow-hidden
                       hover:shadow-2xl hover:-translate-y-2 transition-all"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primary/10 dark:bg-primary-dark/20
                               text-primary dark:text-primary-dark
                               rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                {project.description}
              </p>
            </div>

            <div className="flex gap-3 p-4">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 border border-border-light dark:border-border-dark
                             rounded hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                >
                  Code
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 bg-primary text-white rounded
                             hover:bg-primary-hover transition-colors text-sm font-medium"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
