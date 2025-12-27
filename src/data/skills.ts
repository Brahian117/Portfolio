import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJs,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiDotnet,
  SiExpress,
  SiPostman,
  SiVite,
} from "react-icons/si";


import {
  RiTailwindCssFill 
} from "react-icons/ri";

import { TbApi,
TbSql,
TbFileTypeSql 
 } from "react-icons/tb";


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
    color: "#6366F1", 
    skills: [
      { name: "React", Icon: FaReact },
      { name: "TailwindCSS", Icon: RiTailwindCssFill},
      { name: "TypeScript", Icon: SiTypescript },
      { name: "HTML", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3Alt },
      { name: "JavaScript", Icon: FaJs },
    ],
  },
  {
    name: "Backend",
    color: "#10B981", 
    skills: [
      { name: ".NET", Icon: SiDotnet },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Express", Icon: SiExpress },
      { name: "SQL", Icon: TbSql  }, 
      { name: "Entity Framework", Icon: TbFileTypeSql  },
    ],
  },
  {
    name: "Tools & Others",
    color: "#F97316",
    skills: [
      { name: "Git", Icon: FaGit },
      { name: "GitHub", Icon: FaGithub },
      { name: "Vite", Icon: SiVite },
      { name: "Postman", Icon: SiPostman },
      { name: "REST APIs", Icon: TbApi },
      { name: "Docker", Icon: FaDocker },
    ],
  },
];
