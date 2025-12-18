export type SkillCategory = {
  name: string
  skills: string[]
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'MUI'],
    color: 'primary'
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'C#', '.NET', 'SQL Server'],
    color: 'secondary'
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'VSCode', 'Postman'],
    color: 'success'
  }
]
