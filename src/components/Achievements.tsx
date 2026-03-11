'use client'

import { Trophy, Award, BookOpen } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Achievement {
  type: 'hackathon' | 'ctf' | 'paper'
  title: string
  description: string
  date: string
}

const achievementsData: Achievement[] = [
  {
    type: 'hackathon',
    title: 'Second Runner-Up – Bosch KIT Hackathon',
    description: 'Recognized for innovative cybersecurity solution in a competitive hackathon event.',
    date: '2024',
  },
  {
    type: 'paper',
    title: 'Published IEEE Research Paper',
    description: 'Artify — An Artistic NFT Marketplace. Published at IEEE SCES 2024 conference.',
    date: '2024',
  },
]

const ctfEvents = [
  'TryHackMe Active Participant',
  'Cyber Challenge Platform',
  'Security Wargames',
]

export default function Achievements() {
  const ref = useScrollAnimation()

  return (
    <section id="achievements" className="py-20 bg-slate-900/50">
      <div className="container-custom">
        <h2 className="section-title">Achievements & Recognition</h2>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12" ref={ref}>
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 border border-cyan-900/30 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 animate-on-scroll animate-stagger-${(index % 4) + 1}`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {achievement.type === 'hackathon' && (
                    <Trophy className="text-yellow-400" size={28} />
                  )}
                  {achievement.type === 'paper' && (
                    <BookOpen className="text-purple-400" size={28} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{achievement.description}</p>
                  <span className="text-sm text-cyan-300/70 font-mono">{achievement.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTF & Events */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-cyan-900/30 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
            <Award className="text-cyan-400" size={28} />
            CTF Events & Competitions
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {ctfEvents.map((event, i) => (
              <div
                key={i}
                className="bg-slate-900/60 border border-cyan-500/30 rounded-lg p-4 text-center hover:border-cyan-400/60 transition-colors"
              >
                <p className="text-cyan-300 font-semibold">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
