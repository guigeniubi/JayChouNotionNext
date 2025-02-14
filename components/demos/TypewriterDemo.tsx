import { useTypewriter } from '@/hooks/useTypewriter'

export const TypewriterDemo = () => {
  const text = 'Hello, this is a typewriter effect!'
  const { displayText, isFinished, restart } = useTypewriter(text, 100)

  return (
    <div className="p-4">
      <div className="text-2xl font-bold min-h-[2em]">
        {displayText}
        <span
          className={`inline-block w-[2px] h-[1em] bg-black ml-1 ${
            isFinished ? 'animate-pulse' : 'animate-blink'
          }`}
        />
      </div>
      <button
        onClick={restart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Restart
      </button>
    </div>
  )
}
