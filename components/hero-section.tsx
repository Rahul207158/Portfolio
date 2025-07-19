"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"

export function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="outline" className="border-green-400 text-green-400 px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Rahul Kumar{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Singh</span>
            </motion.h1>

            <div className="text-xl md:text-2xl text-white/80 h-8">
              <TypewriterEffect words={["Full Stack Developer", "Systems Engineer", "AI/ML Enthusiast"]} />
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-8529155264</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>rsrahul0511@gmail.com</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            A dedicated Computer Science student from NIT Warangal with hands-on experience in full-stack development,
            cloud technologies, and system design. Passionate about building scalable and efficient software solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.open("https://github.com/Rahul207158", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.open("https://www.linkedin.com/in/rahul-kumar-singh-3657a1235", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.open("mailto:rsrahul0511@gmail.com", "_blank")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </div>
    </section>
  )
}
