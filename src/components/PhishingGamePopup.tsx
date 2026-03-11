'use client'

import { AlertTriangle, X } from 'lucide-react'
import { useState } from 'react'

interface PhishingPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function PhishingGamePopup({ isOpen, onClose }: PhishingPopupProps) {
  const [showDetails, setShowDetails] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-gradient-to-br from-red-900/90 to-slate-900 border-2 border-red-500 rounded-lg max-w-md w-full shadow-2xl animate-bounce">
        {/* Header */}
        <div className="bg-red-600/80 px-6 py-4 flex items-center justify-between border-b border-red-500">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-yellow-300 animate-pulse" size={28} />
            <div>
              <h3 className="text-lg font-bold text-white">⚠️ SECURITY ALERT</h3>
              <p className="text-xs text-red-200">Suspicious Activity Detected</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-red-700 p-1 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-red-500/20 border border-red-500/50 rounded p-3">
            <p className="text-red-300 font-mono text-sm">
              🎣 YOU FELL UNDER THE PHISHING ATTACK! 🎣
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-200">
            <p>
              <span className="text-yellow-300 font-bold">Alert ID:</span> PORT-2026-PHISH
            </p>
            <p>
              <span className="text-yellow-300 font-bold">Threat Level:</span>{' '}
              <span className="text-red-400 font-bold">CRITICAL</span>
            </p>
            <p>
              <span className="text-yellow-300 font-bold">Status:</span> Compromised
            </p>
          </div>

          {!showDetails ? (
            <button
              onClick={() => setShowDetails(true)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              View Attack Details
            </button>
          ) : (
            <div className="bg-slate-800 border border-red-500/30 rounded p-3 space-y-2 text-xs text-gray-300 font-mono">
              <p>
                <span className="text-cyan-400">[SOC-ANALYST]$</span> analyze_attack
              </p>
              <p className="text-green-400">
                ✓ Attack Vector: Social Engineering
              </p>
              <p className="text-green-400">✓ Method: Malicious Link Click</p>
              <p className="text-green-400">
                ✓ Impact: User Education Level +10
              </p>
              <p className="text-green-400">
                ✓ Lesson: Always verify links before clicking!
              </p>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            🛡️ Acknowledge & Close
          </button>

          <p className="text-xs text-gray-400 text-center italic">
            This is a simulated phishing attack for educational purposes
          </p>
        </div>
      </div>
    </div>
  )
}
