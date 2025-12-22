import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiExpress,
  SiPostman,
  SiVite,
} from "react-icons/si";

import type { IconType } from "react-icons"; // ✅ type-only import

export type Skill = {
  name: string;
  Icon: IconType;
};

export type SkillCategory = {
  name: string;
  color: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    color: "#6366F1", // indigo
    skills: [
      { name: "React", Icon: FaReact },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "HTML", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3Alt },
      { name: "JavaScript", Icon: FaJs },
    ],
  },
  {
    name: "Backend",
    color: "#10B981", // emerald
    skills: [
      { name: ".NET", Icon: SiDotnet },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Express", Icon: SiExpress },
      { name: "SQL", Icon: FaJs }, // icon representativo
      { name: "Entity Framework", Icon: SiDotnet },
    ],
  },
  {
    name: "Tools & Others",
    color: "#F97316", // orange
    skills: [
      { name: "Git", Icon: FaGit },
      { name: "GitHub", Icon: FaGithub },
      { name: "Vite", Icon: SiVite },
      { name: "Postman", Icon: SiPostman },
      { name: "REST APIs", Icon: FaJs },
      { name: "Docker", Icon: FaDocker },
    ],
  },
];
