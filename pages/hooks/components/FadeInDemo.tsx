import { useFadeIn } from '@/hooks/useFadeIn'

export const FadeInDemo = () => {
  const { isVisible, shouldRender, setIsVisible } = useFadeIn(false, 500)

  return (
    <div className="p-4">
      <button
        onClick={() => setIsVisible(v => !v)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Text
      </button>
      <div className="h-32">
        {' '}
        {/* 固定高度容器 */}
        {shouldRender && (
          <div
            className={`
              mt-4 text-2xl 
              transition-all duration-500 ease-in-out
              ${
                isVisible
                  ? 'opacity-100 max-h-[200px] translate-y-0'
                  : 'opacity-0 max-h-0 translate-y-4'
              }
            `}
          >
            <div className="bg-gray-100 p-4 rounded">
              Fade in/out text with height animation
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
