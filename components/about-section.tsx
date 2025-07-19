"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Users, Target } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Experienced in building end-to-end web applications with modern technologies",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Focused on creating fast, efficient, and scalable solutions",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong experience working in Agile teams with excellent communication skills",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Analytical thinking approach to tackle complex technical challenges",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Passionate About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student from NIT Warangal, passionate about building scalable and efficient
            software solutions. With hands-on experience in full-stack development, cloud technologies, and system
            design, I strive to create impactful software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-white/60 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-400/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-white/70 mb-4">
                    As a B.Tech student in Computer Science & Engineering at NIT Warangal, I've gained valuable industry
                    experience through internships and impactful projects. My journey involves continuous learning and
                    staying updated with the latest trends in technology, aiming to contribute to innovative solutions
                    that solve real-world problems.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Problem Solving</span>
                    <span className="text-cyan-400">95%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Full Stack Development</span>
                    <span className="text-cyan-400">90%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Team Collaboration</span>
                    <span className="text-cyan-400">88%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
