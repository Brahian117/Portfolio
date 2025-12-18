import { aboutText } from '../../data/about'

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-24 py-12
                 bg-surface-light dark:bg-surface-dark
                 text-text-light dark:text-text-dark"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        About Me
      </h2>

      <p className="max-w-xl leading-relaxed text-lg text-text-muted-light dark:text-text-muted-dark">
        {aboutText}
      </p>
    </section>
  )
}
