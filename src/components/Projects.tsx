'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'SOC Threat Detection Lab',
    description: 'Simulated SOC environments using Splunk SIEM to detect brute-force attacks and malicious traffic. Correlated alerts with MITRE ATT&CK techniques and documented investigation workflows.',
    technologies: ['Splunk', 'SIEM', 'MITRE ATT&CK', 'Threat Detection', 'Incident Investigation'],
    github: '#',
  },
  {
    title: 'Artify — Artistic NFT Marketplace',
    description: 'An innovative NFT marketplace platform for digital artists. Published as IEEE research paper at IEEE SCES 2024 conference. Demonstrates smart contract integration and blockchain technology.',
    technologies: ['Blockchain', 'NFT', 'Smart Contracts', 'Web3', 'React'],
    link: '#',
  },
  {
    title: 'Decentralized Security Token Platform',
    description: 'Blockchain-based platform for secure token transactions with cryptographic verification. Implements consensus mechanisms and distributed ledger technology for enhanced security.',
    technologies: ['Blockchain', 'Ethereum', 'Solidity', 'Smart Contracts', 'Web3.js'],
    github: '#',
  },
  {
    title: 'Traffic Monitoring System',
    description: 'Built a YOLO-based real-time vehicle detection system using Python and Flask for automated traffic monitoring.',
    technologies: ['Python', 'YOLO', 'Flask', 'Computer Vision', 'Real-time Processing'],
    link: '#',
  },
]

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8" ref={ref}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-slate-800/50 border border-cyan-900/30 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 animate-on-scroll animate-stagger-${(index % 4) + 1}`}
            >
              <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={18} /> Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
