'use client'

import { X, AlertCircle, CheckCircle, XCircle, Zap } from 'lucide-react'
import { useState } from 'react'

interface Alert {
  id: number
  title: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  source: string
  description: string
  isReal: boolean
  explanation: string
}

const alerts: Alert[] = [
  {
    id: 1,
    title: 'Multiple Failed Login Attempts',
    severity: 'High',
    source: 'User: john.doe@company.com',
    description: '15 failed SSH login attempts from 192.168.1.100 in 2 minutes',
    isReal: true,
    explanation: 'This is a REAL threat - Indicates brute force attack. Recommend: Block IP, reset password, check for compromise.',
  },
  {
    id: 2,
    title: 'DNS Query to Random Domain',
    severity: 'Medium',
    source: 'Host: DESKTOP-XYZ',
    description: 'Host queried: xyzrandomdomain12345.com once at 3:45 AM',
    isReal: false,
    explanation: 'This is a FALSE POSITIVE - Single DNS query likely DNS prefetch or typo. No action needed.',
  },
  {
    id: 3,
    title: 'Unusual Data Exfiltration',
    severity: 'Critical',
    source: 'User: admin@company.com',
    description: '2.5GB of data uploaded to external IP in 30 minutes (unusual pattern)',
    isReal: true,
    explanation: 'This is a REAL threat - Massive data transfer outside business hours. Recommend: Isolate account, investigate backup deletion.',
  },
  {
    id: 4,
    title: 'Port Scan Detected',
    severity: 'Low',
    source: 'Network: Internal subnet',
    description: 'Routine Nessus vulnerability scan from authorized scanner',
    isReal: false,
    explanation: 'This is a FALSE POSITIVE - Authorized security scan. Check scan schedule before alerting.',
  },
  {
    id: 5,
    title: 'Suspicious Process Execution',
    severity: 'High',
    source: 'Host: SERVER-PROD-01',
    description: 'powershell.exe spawned from Microsoft Word with encoded commands',
    isReal: true,
    explanation: 'This is a REAL threat - Macro malware execution. Recommend: Isolate host, quarantine file, check for lateral movement.',
  },
]

export function AlertTriageGame() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const currentAlert = alerts[currentAlertIndex]

  const handleAnswer = (isRealThreat: boolean) => {
    setSelectedAnswer(isRealThreat)
    setShowFeedback(true)

    // Check if answer is correct
    if (isRealThreat === currentAlert.isReal) {
      setScore(score + 1)
    }
    setTotalAnswered(totalAnswered + 1)
  }

  const handleNext = () => {
    if (currentAlertIndex < alerts.length - 1) {
      setCurrentAlertIndex(currentAlertIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setGameOver(true)
    }
  }

  const handleReset = () => {
    setCurrentAlertIndex(0)
    setScore(0)
    setTotalAnswered(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setGameOver(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-4 shadow-lg transition-all hover:shadow-xl hover:scale-110 group"
        title="SOC Alert Triage Challenge"
      >
        <div className="flex items-center gap-2">
          <Zap size={24} className="animate-pulse" />
          <span className="text-xs font-bold">SOC Challenge</span>
        </div>
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white shadow-2xl rounded-lg overflow-hidden w-96 max-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertCircle className="text-yellow-300" size={24} />
          <div>
            <h3 className="text-white font-bold">SOC Alert Triage</h3>
            <p className="text-purple-100 text-xs">Real Threat or False Positive?</p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="text-white hover:bg-purple-700 p-1.5 rounded transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {!gameOver ? (
          <>
            {/* Score Bar */}
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-gray-700">
                  Alert {currentAlertIndex + 1}/{alerts.length}
                </span>
                <span className="text-purple-600 font-bold">Score: {score}/{totalAnswered}</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all"
                  style={{
                    width: `${((currentAlertIndex + 1) / alerts.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Alert Card */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`px-3 py-1 rounded text-xs font-bold text-white ${
                    currentAlert.severity === 'Critical'
                      ? 'bg-red-600'
                      : currentAlert.severity === 'High'
                        ? 'bg-orange-600'
                        : currentAlert.severity === 'Medium'
                          ? 'bg-yellow-600'
                          : 'bg-blue-600'
                  }`}
                >
                  {currentAlert.severity}
                </span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{currentAlert.title}</h4>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Source:</span> {currentAlert.source}
              </p>
              <p className="text-sm text-gray-700 bg-gray-100 p-2 rounded font-mono">
                {currentAlert.description}
              </p>
            </div>

            {!showFeedback ? (
              <>
                {/* Question */}
                <div className="bg-purple-50 border-l-4 border-purple-600 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-800">
                    Is this a REAL threat or a FALSE POSITIVE?
                  </p>
                </div>

                {/* Answer Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded transition-all hover:shadow-lg"
                  >
                    🚨 Real Threat
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded transition-all hover:shadow-lg"
                  >
                    ✅ False Positive
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Feedback */}
                <div
                  className={`rounded-lg p-4 flex items-start gap-3 ${
                    selectedAnswer === currentAlert.isReal
                      ? 'bg-green-50 border-l-4 border-green-600'
                      : 'bg-red-50 border-l-4 border-red-600'
                  }`}
                >
                  <div>
                    {selectedAnswer === currentAlert.isReal ? (
                      <CheckCircle className="text-green-600 mt-1" size={20} />
                    ) : (
                      <XCircle className="text-red-600 mt-1" size={20} />
                    )}
                  </div>
                  <div>
                    <p
                      className={`font-bold mb-2 ${
                        selectedAnswer === currentAlert.isReal ? 'text-green-700' : 'text-red-700'
                      }`}
                    >
                      {selectedAnswer === currentAlert.isReal ? 'Correct! ✓' : 'Incorrect ✗'}
                    </p>
                    <p className="text-sm text-gray-700">{currentAlert.explanation}</p>
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  {currentAlertIndex < alerts.length - 1 ? 'Next Alert →' : 'View Results'}
                </button>
              </>
            )}
          </>
        ) : (
          <>
            {/* Game Over Screen */}
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Challenge Complete!</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {score}/{totalAnswered}
                </div>
                <p className="text-gray-700">
                  {score === totalAnswered
                    ? '🌟 Perfect Score! You are a Tier-1 SOC Analyst!'
                    : score >= Math.ceil(totalAnswered * 0.8)
                      ? '👏 Great Job! You have solid analyst skills!'
                      : score >= Math.ceil(totalAnswered * 0.6)
                        ? '📚 Good effort! Practice makes perfect!'
                        : '💪 Keep learning! Check the explanations for insights.'}
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded text-sm text-gray-700">
                <p className="font-semibold mb-2">💡 Key Takeaway:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Always check source IP & authentication patterns</li>
                  <li>Baseline normal activity first</li>
                  <li>Prioritize by severity and context</li>
                  <li>Document decisions for incident response</li>
                </ul>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Play Again 🔄
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
