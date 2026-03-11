'use client'

import { Target, Eye, AlertCircle, Code } from 'lucide-react'
import { useState } from 'react'

interface Skill {
  category: string
  icon: React.ReactNode
  skills: string[]
}

interface Certification {
  name: string
  issuer: string
  credentialUrl: string
}

const skillsData: Skill[] = [
  {
    category: 'Security Operations & Threat Detection',
    icon: <Eye className="text-cyan-400" size={32} />,
    skills: ['SIEM Monitoring', 'Alert Triage', 'Incident Investigation', 'Log Analysis', 'Threat Correlation', 'MITRE ATT&CK Mapping'],
  },
  {
    category: 'Security Tools & Technologies',
    icon: <AlertCircle className="text-cyan-400" size={32} />,
    skills: ['Splunk', 'Nessus', 'Nmap', 'Burp Suite', 'Wireshark', 'Metasploit'],
  },
  {
    category: 'Networking & Systems',
    icon: <Code className="text-cyan-400" size={32} />,
    skills: ['TCP/IP', 'DNS', 'HTTP/S', 'Linux', 'Windows Security Basics', 'Network Traffic Analysis'],
  },
  {
    category: 'Security Knowledge & Expertise',
    icon: <Target className="text-cyan-400" size={32} />,
    skills: ['OWASP Top 10', 'Vulnerability Assessment', 'Penetration Testing Fundamentals', 'Incident Response', 'Threat Analysis'],
  },
  {
    category: 'Scripting & Platforms',
    icon: <Code className="text-cyan-400" size={32} />,
    skills: ['Python', 'Bash', 'GitHub', 'Microsoft Azure', 'MS SQL Server'],
  },
]

const certificationsData: Certification[] = [
  {
    name: 'Certified Ethical Hacker (CEH v13)',
    issuer: 'EC Council',
    credentialUrl: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    credentialUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
  },
  {
    name: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Oracle',
    credentialUrl: 'https://education.oracle.com/oracle-cloud-infrastructure-foundations-certified-associate/trackp_OCIAFCA',
  },
  {
    name: 'Cisco Junior Cybersecurity Analyst',
    issuer: 'Cisco Networking Academy',
    credentialUrl: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/entry/ccna.html',
  },
]

function CertificationCard({ cert }: { cert: Certification }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-48 perspective cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      >
        {/* Front Side */}
        <div
          className="flip-card-front bg-gradient-to-br from-slate-900/80 to-cyan-900/20 border border-cyan-500/50 rounded-lg p-6 flex items-center justify-center"
        >
          <div className="text-center">
            <p className="text-lg font-bold text-cyan-300">{cert.name}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="flip-card-back bg-gradient-to-br from-cyan-900/30 to-slate-900/80 border border-cyan-400/60 rounded-lg p-6 flex flex-col items-center justify-center"
        >
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold text-cyan-300">Issued by</p>
            <p className="text-xl font-bold text-white">{cert.issuer}</p>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded text-cyan-300 hover:bg-cyan-500/40 transition-colors text-sm font-semibold"
            >
              View Credential
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container-custom">
        <h2 className="section-title">Technical Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-cyan-900/30 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-bold text-cyan-400">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-3">
                {skillGroup.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-cyan-400">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certificationsData.map((cert, i) => (
              <CertificationCard key={i} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
