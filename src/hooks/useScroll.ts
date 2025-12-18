import { useCallback } from 'react'

export const useScroll = () => {
  const scrollTo = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return { scrollTo }
}
