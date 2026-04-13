import { useEffect, useMemo, useRef, useState } from 'react'
import HeroSection from './components/sections/HeroSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import CustomCursor from './components/ui/CustomCursor'
import Header from './components/ui/Header'
import LoadingScreen from './components/ui/LoadingScreen'
import {
  achievements,
  aiAnswers,
  backendHighlights,
  education,
  experience,
  navItems,
  projects,
  repoCards,
  roles,
  skills,
  socialLinks,
  techIcons,
} from './data/content'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [chatInput, setChatInput] = useState('')
  const [chatLog, setChatLog] = useState([
    {
      q: 'What can I explore here?',
      a: 'You can browse projects, skills, experience, DSA progress, achievements, and contact details.',
    },
  ])
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState({ status: 'idle', sentiment: 'Neutral' })
  const [voiceState, setVoiceState] = useState('Voice navigation ready')
  const [audioOn, setAudioOn] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const particleRef = useRef(null)

  const scrollProgress = useScrollProgress()
  const timeHue = useMemo(() => {
    const hours = new Date().getHours()
    return Math.round((hours / 24) * 120)
  }, [])

  useEffect(() => {
    const onMove = (event) => {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight
      setMouse({ x, y })
      document.documentElement.style.setProperty('--mx', x.toFixed(3))
      document.documentElement.style.setProperty('--my', y.toFixed(3))
    }

    window.addEventListener('pointermove', onMove)
    document.documentElement.style.setProperty('--time-hue', String(timeHue))
    return () => window.removeEventListener('pointermove', onMove)
  }, [timeHue])

  useEffect(() => {
    document.documentElement.style.setProperty('--scroll-progress', scrollProgress.toFixed(3))
  }, [scrollProgress])

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 1400)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let charIndex = 0
    setTyped('')

    const typer = window.setInterval(() => {
      charIndex += 1
      setTyped(currentRole.slice(0, charIndex))
      if (charIndex >= currentRole.length) {
        window.clearInterval(typer)
        window.setTimeout(() => {
          setRoleIndex((value) => (value + 1) % roles.length)
        }, 1200)
      }
    }, 65)

    return () => window.clearInterval(typer)
  }, [roleIndex])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = particleRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame = 0
    const reduced = window.innerWidth < 768
    const particleCount = reduced ? 80 : 180
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      depth: Math.random() * 0.8 + 0.2,
    }))

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const glowX = mouse.x * canvas.width
      const glowY = mouse.y * canvas.height

      particles.forEach((particle, index) => {
        particle.x += particle.speedX * (1 + particle.depth)
        particle.y += particle.speedY * (1 + particle.depth)

        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        const dx = glowX - particle.x
        const dy = glowY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const alpha = Math.max(0.08, 1 - distance / 320)
        const hue = (timeHue + scrollProgress * 200 + index) % 360

        ctx.beginPath()
        ctx.fillStyle = `hsla(${hue}, 100%, 68%, ${alpha * 0.7})`
        ctx.arc(particle.x, particle.y, particle.size + alpha * 1.2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrame = window.requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [mouse.x, mouse.y, scrollProgress, timeHue])

  const orbitSkills = useMemo(
    () =>
      skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2
        const radius = 160
        return {
          ...skill,
          style: {
            transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
          },
        }
      }),
    [],
  )

  const contributionGrid = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        level: (index * 7 + 3) % 5,
      })),
    [],
  )

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sendChat = (event) => {
    event.preventDefault()
    const question = chatInput.trim()
    if (!question) return

    const normalized = question.toLowerCase()
    const key = Object.keys(aiAnswers).find((item) => normalized.includes(item))
    const answer =
      (key && aiAnswers[key]) ||
      'This portfolio is fully editable. Aap jo bhi skill, project, certificate, ya resume details denge, unhe yahan plug kiya ja sakta hai.'

    setChatLog((current) => [...current, { q: question, a: answer }])
    setChatInput('')
  }

  const analyzeSentiment = (message) => {
    const positiveWords = ['great', 'awesome', 'love', 'amazing', 'nice', 'impressive']
    const negativeWords = ['bad', 'issue', 'problem', 'poor', 'confused']
    const lower = message.toLowerCase()
    const positive = positiveWords.some((word) => lower.includes(word))
    const negative = negativeWords.some((word) => lower.includes(word))
    if (positive && !negative) return 'Positive'
    if (negative && !positive) return 'Needs attention'
    return 'Neutral'
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setFormState({ status: 'Please fill all fields.', sentiment: formState.sentiment })
      return
    }

    const sentiment = analyzeSentiment(form.message)
    setFormState({ status: 'Message staged successfully.', sentiment })
    setForm({ name: '', email: '', message: '' })
  }

  const triggerVoice = () => {
    const recognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!recognitionClass) {
      setVoiceState('Speech API is not supported in this browser.')
      return
    }

    const recognition = new recognitionClass()
    recognition.lang = 'en-IN'
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase()
      setVoiceState(`Heard: ${transcript}`)
      if (transcript.includes('project')) scrollToSection('projects')
      if (transcript.includes('skill')) scrollToSection('skills')
      if (transcript.includes('contact')) scrollToSection('contact')
      if (transcript.includes('about')) scrollToSection('about')
    }
    recognition.onerror = () => setVoiceState('Voice navigation could not understand the command.')
    recognition.start()
  }

  const handleFormChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  return (
    <>
      {!loaded && <LoadingScreen />}
      <div className="app-shell">
        <canvas ref={particleRef} className="particle-canvas" aria-hidden="true" />
        <CustomCursor />
        <div
          className="aurora"
          style={{
            '--x': `${mouse.x * 100}%`,
            '--y': `${mouse.y * 100}%`,
          }}
        />

        <Header navItems={navItems} activeSection={activeSection} onNavigate={scrollToSection} />

        <main>
          <HeroSection
            typed={typed}
            orbitSkills={orbitSkills}
            socialLinks={socialLinks}
            onProjectsClick={() => scrollToSection('projects')}
            onContactClick={() => scrollToSection('contact')}
          />

          <SkillsSection skills={skills} backendHighlights={backendHighlights} />
          <ProjectsSection
            projects={projects}
            repoCards={repoCards}
            contributionGrid={contributionGrid}
          />
          <ExperienceSection experience={experience} achievements={achievements} />
          <AboutSection education={education} techIcons={techIcons} skills={skills} />
          <ContactSection
            form={form}
            formState={formState}
            chatInput={chatInput}
            chatLog={chatLog}
            voiceState={voiceState}
            audioOn={audioOn}
            socialLinks={socialLinks}
            onFormChange={handleFormChange}
            onSubmit={handleSubmit}
            onChatChange={setChatInput}
            onChatSubmit={sendChat}
            onVoiceTrigger={triggerVoice}
            onAudioToggle={() => setAudioOn((value) => !value)}
          />
        </main>
      </div>
    </>
  )
}

export default App
