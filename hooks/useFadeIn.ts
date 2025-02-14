import { useState, useEffect } from 'react'

export const useFadeIn = (
  initialValue: boolean = false,
  duration: number = 500
) => {
  const [isVisible, setIsVisible] = useState(initialValue)
  const [shouldRender, setShouldRender] = useState(initialValue)

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true)
    } else {
      // 等待动画完成后再移除元素
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration])

  return {
    isVisible,
    shouldRender,
    setIsVisible
  }
}
