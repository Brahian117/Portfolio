type SkillChipProps = {
  label: string
  color?: string // puede ser 'primary', 'secondary', etc.
}

export const SkillChip = ({ label, color }: SkillChipProps) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium transition-colors'

  const colorClass = color === 'secondary'
    ? 'bg-secondary text-white dark:bg-secondary-hover dark:text-gray-900'
    : 'bg-primary text-white dark:bg-primary-hover dark:text-gray-900'

  return <span className={`${baseClasses} ${colorClass}`}>{label}</span>
}
