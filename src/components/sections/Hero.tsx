import { useScroll } from '../../hooks/useScroll'
import { StatusAlert } from '../ui/StatusAlert'

export const Hero = () => {
  const { scrollTo } = useScroll()

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12
                 bg-surface-light dark:bg-surface-dark
                 text-text-light dark:text-text-dark"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I am Brahian!
      </h1>

      <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-6">
        Software Engineer & Full Stack Developer
      </p>

      <StatusAlert message="🚧 Currently working on this portfolio" />

      <button
        className="mt-6 px-6 py-3 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors"
        onClick={() => scrollTo('projects')}
      >
        Projects
      </button>
    </section>
  )
}
