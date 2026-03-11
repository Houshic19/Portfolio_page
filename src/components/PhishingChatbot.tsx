'use client'

import { X, MessageCircle, Minimize2, Maximize2 } from 'lucide-react'
import { useState, useEffect } from 'react'

interface PhishingChatbotProps {
  initiallyOpen?: boolean
}

export function PhishingChatbot({ initiallyOpen = false }: PhishingChatbotProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string }[]>([
    { type: 'bot', text: 'Hi! 👋 We noticed unusual activity on your account...' },
  ])
  const [hasTriggeredPhishing, setHasTriggeredPhishing] = useState(false)

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleBotMessage = () => {
    if (!hasTriggeredPhishing) {
      // First message - innocent looking
      const newMessages = [
        ...messages,
        { type: 'bot' as const, text: 'We detected a login from India. Is this you?' },
      ]
      setMessages(newMessages)

      // After a second, ask for verification
      setTimeout(() => {
        const phishingMessages = [
          ...newMessages,
          {
            type: 'bot' as const,
            text: 'To secure your account, please verify your identity by clicking the button below. Click here to verify →',
          },
        ]
        setMessages(phishingMessages)
        setHasTriggeredPhishing(true)
      }, 800)
    }
  }

  const handlePhishingClick = () => {
    const newMessages = [
      ...messages,
      { type: 'user' as const, text: 'I clicked the link...' },
      {
        type: 'bot' as const,
        text: '🎣 YOU FELL FOR THE PHISHING ATTACK! This was a simulated attack to educate you. Always verify URLs before clicking sensitive links!',
      },
    ]
    setMessages(newMessages)
    setHasTriggeredPhishing(true)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-4 shadow-lg transition-all hover:shadow-xl hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>
    )
  }

  return (
    <div
      className={`fixed z-50 bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ${
        isMinimized
          ? 'bottom-6 right-6 w-80 h-16'
          : 'bottom-6 right-6 w-80 h-[500px]'
      }`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <MessageCircle className="text-cyan-500" size={18} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Security Team</h4>
            <p className="text-cyan-100 text-xs">Usually replies instantly</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:bg-cyan-600 p-1.5 rounded transition-colors"
          >
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-cyan-600 p-1.5 rounded transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-[380px] overflow-y-auto bg-gray-50 p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-cyan-500 text-white rounded-br-none'
                      : 'bg-gray-300 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {!hasTriggeredPhishing && (
              <button
                onClick={handleBotMessage}
                className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition-colors text-sm"
              >
                Click to Continue
              </button>
            )}

            {hasTriggeredPhishing && messages[messages.length - 1].type === 'bot' && messages[messages.length - 1].text.toLowerCase().includes('verify your identity') && (
              <button
                onClick={handlePhishingClick}
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors text-sm"
              >
                ⚠️ Verify Your Identity
              </button>
            )}

            {hasTriggeredPhishing && messages[messages.length - 1].type === 'bot' && messages[messages.length - 1].text.includes('FELL FOR') && (
              <div className="mt-4 bg-yellow-50 border border-yellow-300 rounded p-3">
                <p className="text-xs text-yellow-800">
                  <strong>Lesson:</strong> Always verify links and never click suspicious links from unknown sources. Check the URL in your browser&apos;s address bar!
                </p>
              </div>
            )}
          </div>

          {/* Input (disabled for game) */}
          <div className="bg-white border-t p-3">
            <input
              type="text"
              placeholder="Type a message..."
              disabled
              className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-100 cursor-not-allowed"
            />
          </div>
        </>
      )}
    </div>
  )
}
