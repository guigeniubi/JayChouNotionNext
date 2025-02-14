import { useState, useEffect, useCallback } from 'react'
import { TypewriterDemo } from '@/components/demos/TypewriterDemo'
import { FadeInDemo } from '@/components/demos/FadeInDemo'

// 页面组件
const HookPage = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Typewriter Effect</h2>
      <TypewriterDemo />

      <h2 className="text-2xl font-bold mb-4 mt-8">Fade In/Out Effect</h2>
      <FadeInDemo />
    </div>
  )
}

export default HookPage
