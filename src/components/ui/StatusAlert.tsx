import { motion } from 'framer-motion'

type StatusAlertProps = {
  message: string
  visible?: boolean
}

export const StatusAlert = ({ message, visible = true }: StatusAlertProps) => {
  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 max-w-md mx-auto px-4 py-2 bg-yellow-200 dark:bg-yellow-600 text-yellow-900 dark:text-yellow-100 rounded-md text-center text-base font-medium shadow-md"
    >
      {message}
    </motion.div>
  )
}
