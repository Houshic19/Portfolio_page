'use client'

import { Briefcase, Calendar } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Experience {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    role: 'Cybersecurity Analyst Intern',
    company: 'HackUp Technology',
    period: 'Sep 2025 – Present',
    description: 'Monitoring security alerts using Splunk SIEM and conducting vulnerability assessments for threat detection and response.',
    highlights: [
      'Monitored security alerts using Splunk SIEM, identifying suspicious login attempts, malware indicators, and abnormal network traffic',
      'Conducted vulnerability assessments using Nessus, reviewing CVSS scores and assisting in remediation prioritization',
      'Performed log analysis and alert triage as part of SOC workflows to detect potential threats',
      'Investigated network traffic using Wireshark and Nmap to identify unusual patterns and potential attack vectors',
      'Created incident reports and technical documentation aligned with SOC investigation procedures',
    ],
  },
  {
    role: 'Analyst',
    company: 'Capgemini',
    period: 'Sep 2024 – Dec 2024',
    description: 'Enterprise training and backend development with exposure to cloud technologies and database management.',
    highlights: [
      'Completed enterprise training in C#, .NET Core, and Microsoft Azure as part of Capgemini\'s internal program',
      'Developed backend services integrated with MS SQL Server for application data management',
      'Gained exposure to enterprise IT processes including documentation, debugging, and root-cause analysis',
      'Strengthened analytical and troubleshooting skills useful for security investigations and incident analysis',
    ],
  },
]

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container-custom">
        <h2 className="section-title">Professional Experience</h2>

        <div className="space-y-8 max-w-4xl mx-auto" ref={ref}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 border border-cyan-900/30 rounded-lg p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 animate-on-scroll animate-stagger-${(index % 4) + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                  <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 whitespace-nowrap">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              <div className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
