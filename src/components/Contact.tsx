'use client'

import { Mail, Linkedin, Github, Send, Globe } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY_HERE')

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send email using EmailJS
      await emailjs.send('SERVICE_ID_HERE', 'TEMPLATE_ID_HERE', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'houshicb19@gmail.com',
      })

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                  ✗ Error sending message. Please try again or contact directly via email.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:houshicb19@gmail.com"
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg hover:border-cyan-500/50 border border-cyan-900/30 transition-all group"
                >
                  <Mail className="text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-cyan-300 font-semibold">houshicb19@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-cyan-900/30">
                  <Mail className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-cyan-300 font-semibold">+91 8056733377</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-cyan-900/30">
                  <Mail className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-cyan-300 font-semibold">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/houshic-fsd1901/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg hover:border-cyan-500/50 border border-cyan-900/30 transition-all group"
                >
                  <Linkedin className="text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-cyan-300 font-semibold">linkedin.com/in/houshic-fsd1901</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Houshic19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg hover:border-cyan-500/50 border border-cyan-900/30 transition-all group"
                >
                  <Github className="text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-cyan-300 font-semibold">github.com/Houshic19</p>
                  </div>
                </a>

                <a
                  href="https://tryhackme.com/p/houshicb19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg hover:border-cyan-500/50 border border-cyan-900/30 transition-all group"
                >
                  <Globe className="text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">TryHackMe</p>
                    <p className="text-cyan-300 font-semibold">tryhackme.com/p/houshicb19</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-cyan-300 text-sm">
                💡 <strong>Tip:</strong> Looking to connect about SOC analyst roles or security opportunities? Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
