import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { SkillChip } from '../ui/SkillChip'
import { containerVariants, itemVariants } from '../../theme/skills.animation'

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center
                 px-6 sm:px-12 md:px-24 py-12
                 bg-surface-light dark:bg-surface-dark
                 text-text-light dark:text-text-dark"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Skills</h2>
      <p className="max-w-xl mb-8 text-lg text-text-muted-light dark:text-text-muted-dark">
        Technologies and tools I enjoy working with.
      </p>

      <div className="w-full max-w-xl">
        {skillCategories.map(category => (
          <motion.div
            key={category.name}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-medium mb-2">{category.name}</h3>
            <motion.div className="flex flex-wrap justify-center gap-2">
              {category.skills.map(skill => (
                <motion.div key={skill} variants={itemVariants}>
                  <SkillChip
                    label={skill}
                    color={category.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
