import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../../../data/skills";

type SkillPosition = {
  name: string;
  Icon: React.ElementType;
  color: string;
  top: number;
  left: number;
  xOffset: number;
  yOffset: number;
  duration: number;
};

const buildInitialPositions = (): SkillPosition[] => {
  const allSkills = skillCategories.flatMap(category =>
    category.skills.map(skill => ({
      name: skill.name,
      Icon: skill.Icon,
      color: category.color,
    }))
  );

  return allSkills.map(skill => ({
    ...skill,
    top: Math.random() * 75,
    left: Math.random() * 75,
    xOffset: Math.random() * 160 - 80,
    yOffset: Math.random() * 120 - 60,
    duration: 8 + Math.random() * 4,
  }));
};

export const Skills = () => {
  const [skills] = useState<SkillPosition[]>(buildInitialPositions);

  return (
    <section
      id="skills"
      className="scroll-mt-24 min-h-screen flex flex-col justify-center items-center text-center
                 px-6 sm:px-12 md:px-24 py-12
                 bg-surface-light dark:bg-surface-dark
                 text-text-light dark:text-text-dark"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Skills</h2>

      <p className="max-w-xl mb-8 text-lg text-text-muted-light dark:text-text-muted-dark">
        Technologies and tools I enjoy working with.
      </p>

     
      <div className="relative w-full max-w-6xl h-100 rounded-xl
                      border border-border-light dark:border-border-dark
                      overflow-hidden">
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            className="absolute rounded-full flex items-center justify-center
                       shadow-lg select-none"
            style={{
              width: 64,
              height: 64,
              backgroundColor: skill.color,
              top: `${skill.top}%`,
              left: `${skill.left}%`,
            }}
            animate={{
              x: [0, skill.xOffset, 0],
              y: [0, skill.yOffset, 0],
            }}
            transition={{
              duration: skill.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.25 }}
            title={skill.name}
          >
            <skill.Icon className="w-8 h-8 text-white" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
