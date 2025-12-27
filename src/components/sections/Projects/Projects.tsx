import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../../data/projects'

export const Projects = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <>
      <section
        id="projects"
        className="min-h-screen scroll-mt-24 py-20 px-6
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
              {project.image && (
                <button
                  onClick={() => project.image && setActiveImage(project.image)}
                  className="block w-full focus:outline-none hover:cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform"
                  />
                </button>
              )}

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                  {project.description}
                </p>
              </div>

                <div className="flex gap-3 p-4 pt-0">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 btn-ghost"
                >
                  Code
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 btn-primary"
                >
                  Live Demo
                </a>
              )}
            </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center
                       bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              alt="Project preview"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
