"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  Database,
  Cloud,
  Users,
  Brain,
  Server,
  Box,
  GitBranch,
  Workflow,
  Terminal,
  Send,
  Cpu,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    gradient: "from-blue-500 to-purple-500",
    skills: [
      { name: "JavaScript", level: 90, icon: Code },
      { name: "Python", level: 90, icon: Code },
      { name: "Golang", level: 70, icon: Code },
      { name: "C++", level: 90, icon: Code },
      { name: "SQL", level: 80, icon: Database },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 88, icon: Server },
      { name: "Express.js", level: 85, icon: Server },
      { name: "TensorFlow", level: 75, icon: Cpu },
      { name: "Keras", level: 70, icon: Cpu },
      { name: "Pandas", level: 70, icon: Brain },
      { name: "NumPy", level: 70, icon: Brain },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-green-500 to-blue-500",
    skills: [
      { name: "AWS (ECS, S3, Lambda, Glue, EventBridge)", level: 90, icon: Cloud },
      { name: "Docker", level: 78, icon: Box },
      { name: "Git/GitHub", level: 90, icon: GitBranch },
      { name: "GitHub Actions", level: 75, icon: Workflow },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "MongoDB", level: 85, icon: Database },
      { name: "MySQL", level: 80, icon: Database },
      { name: "VS Code", level: 95, icon: Terminal },
      { name: "MongoDB Compass", level: 85, icon: Database },
      { name: "Postman", level: 90, icon: Send },
      { name: "Google Colab", level: 75, icon: Brain },
    ],
  },
]

const softSkills = [
  "Analytical Thinking",
  "Problem Solving",
  "Team Collaboration",
  "Leadership",
  "Communication",
]

const concepts = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "Software Engineering",
  "Machine Learning",
  "Web Development",
  "Systems Design",
  "Microservices",
  "Containerization",
  "REST APIs",
  "Authentication",
  "Performance Optimization",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-4">
            Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm font-medium flex items-center gap-2">
                          {skill.icon && <skill.icon className="w-4 h-4 text-cyan-400" />}
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Concepts */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-400/20 h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">Soft Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="outline" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border-blue-400/20 h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">Core Concepts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {concepts.map((concept, index) => (
                    <motion.div
                      key={concept}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="outline" className="border-blue-400/50 text-blue-300 hover:bg-blue-400/20">
                        {concept}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
