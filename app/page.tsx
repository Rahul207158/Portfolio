"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform-origin-0 z-50"
          style={{ scaleX }}
        />

        {/* Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute top-40 left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <Navigation />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
