import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { PhishingChatbot } from '@/components/PhishingChatbot'
import { AlertTriageGame } from '@/components/AlertTriageGame'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Achievements />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <PhishingChatbot />
      <AlertTriageGame />
    </main>
  )
}
