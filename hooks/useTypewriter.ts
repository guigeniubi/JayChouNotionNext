import { useState, useEffect, useCallback } from 'react'

export const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  const restart = useCallback(() => {
    setDisplayText('')
    setCurrentIndex(0)
  }, [])

  return { displayText, isFinished: currentIndex === text.length, restart }
}
