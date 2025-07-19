"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react" // Added Trophy icon

const education = [
  {
    degree: "B.Tech. in Computer Science and Engineering",
    institution: "National Institute of Technology, Warangal",
    duration: "2020 – 2024",
    status: "Completed", // Assuming 2024 means completed
    description:
      "Pursued a Bachelor of Technology in Computer Science and Engineering, gaining a strong foundation in core CS subjects and practical skills in software development.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-purple-500",
  },
]

const keyCourses = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "Software Engineering",
  "Machine Learning",
  "Web Development",
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-4">
            Education
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Foundation</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Building strong theoretical knowledge and practical skills through comprehensive education
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          {" "}
          {/* Changed to 1 column for single education entry */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${edu.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <edu.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">{edu.degree}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-cyan-400">
                          <GraduationCap className="w-4 h-4" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          {edu.score && (
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              <span>Score: {edu.score}</span>
                            </div>
                          )}
                          <Badge
                            variant={edu.status === "In Progress" ? "default" : "secondary"}
                            className={
                              edu.status === "In Progress"
                                ? "bg-cyan-500/20 text-cyan-300"
                                : "bg-green-500/20 text-green-300"
                            }
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-white/70 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Courses */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-400/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Key Courses Taken</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyCourses.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-white/80 text-sm font-medium text-center">{course}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.83</div>
                <div className="text-white/60">JEE Main Percentile</div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">AIR 3000</div>
                <div className="text-white/60">GATE 2024 (DS & AI)</div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-white/60">Competitive Problems Solved</div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
