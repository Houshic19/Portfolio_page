'use client'

import { ArrowRight, Shield, Award, Code, Download } from 'lucide-react'

export default function Hero() {
  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    // Create a link to download resume from public folder
    const link = document.createElement('a')
    link.href = '/Houshic_RESUME.pdf'
    link.download = 'Houshic_RESUME.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const stats = [
    { label: 'Certifications', value: '4' },
    { label: 'Tools Proficiency', value: '10+' },
    { label: 'Projects', value: '4+' },
    { label: 'Experience', value: '1+ yr' },
  ]

  return (
    <section id="about" className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-cyan-400" size={24} />
              <span className="text-cyan-400 font-mono">Security Operations Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Houshic Balasubramanian <span className="text-cyan-400">SOC Analyst</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cybersecurity Analyst with hands-on experience in SOC operations, threat monitoring, and vulnerability assessment. Certified Ethical Hacker (CEH) with practical exposure to penetration testing tools, CTF environments, and security labs. Passionate about threat detection, attack analysis, and building resilient security systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleViewWork}
                className="btn-primary flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                View My Work <ArrowRight size={20} />
              </button>
              <button 
                onClick={handleDownloadResume}
                className="btn-secondary flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <Download size={20} /> Download Resume
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 transition-all group"
                >
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
