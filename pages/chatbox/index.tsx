import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import BLOG from '@/blog.config'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const ChatBox: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // 打印社交媒体配置
    console.log('Social Media Config:', {
      email: BLOG.CONTACT_EMAIL,
      twitter: BLOG.CONTACT_TWITTER,
      github: BLOG.CONTACT_GITHUB,
      weibo: BLOG.CONTACT_WEIBO
    })
  }, [])

  const sendMessage = async () => {
    console.log('BLOG.USE_OPENAI', BLOG)

    if (!input.trim()) return

    setLoading(true)
    // 添加用户消息
    const newMessages: Message[] = [
      ...messages,
      { role: 'user' as const, content: input }
    ]
    setMessages(newMessages)
    setInput('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      })

      const data = await response.json()
      // 添加AI回复
      setMessages([
        ...newMessages,
        { role: 'assistant' as const, content: data.message }
      ])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto p-4">
        <div className="border rounded-lg h-[500px] overflow-y-auto p-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.role === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && <div className="text-center">思考中...</div>}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && sendMessage()}
            className="flex-1 border rounded-lg p-2"
            placeholder="输入消息..."
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
