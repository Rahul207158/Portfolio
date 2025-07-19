"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  HardDrive,
  Brain, // Added Brain icon
} from "lucide-react"

const projects = [
  {
    title: "LSM/Bitcask Key-Value Store",
    description:
      "Developed a high-throughput, persistent key-value store using LSM-tree and Bitcask models, with append-only files and Write-Ahead Log (WAL) for durability.",
    longDescription:
      "A high-performance key-value store implementation in Golang, leveraging LSM-tree and Bitcask architectures. It features efficient storage, fast lookups using SSTables and Bloom filters, and ensures data durability with an append-only file structure and Write-Ahead Log. Performance benchmarks were conducted to analyze trade-offs with traditional B+ tree-based stores.",
    technologies: ["Golang", "Systems Design", "Data Structures", "Algorithms"],
    features: [
      "High-throughput, persistent key-value storage",
      "LSM-tree and Bitcask models for optimized writes and reads",
      "Append-only files and Write-Ahead Log (WAL) for data durability",
      "SSTables and Bloom filters for efficient storage and fast lookups",
      "Performance benchmarking against B+ tree-based stores",
    ],
    icon: HardDrive,
    gradient: "from-blue-500 to-purple-500",
    demoUrl: "#", // No demo URL provided
    githubUrl: "https://github.com/Rahul-Kumar-Singh/LSM-Bitcask-KV-Store", // Placeholder, replace with actual
  },
  {
    title: "Next Word Predictor",
    description:
      "Built a next-word prediction model using LSTM neural networks and NLP techniques in Python (TensorFlow/Keras).",
    longDescription:
      "A robust next-word prediction model developed using advanced NLP techniques and Long Short-Term Memory (LSTM) neural networks. Trained on extensive text corpora, the model generates contextually relevant word predictions. It includes a command-line interface (CLI) for easy interaction and comprehensive documentation for testing and reproducibility.",
    technologies: ["Python", "NLP", "TensorFlow", "Keras", "Deep Learning"],
    features: [
      "LSTM neural network architecture for sequence prediction",
      "Utilizes Natural Language Processing (NLP) techniques",
      "Trained on large text corpora for contextual relevance",
      "Generates accurate next-word predictions",
      "Provides a CLI interface for user interaction",
      "Includes clear documentation for reproducibility",
    ],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    demoUrl: "#", // No demo URL provided
    githubUrl: "https://github.com/Rahul-Kumar-Singh/Next-Word-Predictor", // Placeholder, replace with actual
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-white/70 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 flex-1 bg-transparent"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      disabled={project.demoUrl === "#"}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white/80 hover:bg-white/10 flex-1 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">Want to see more of my work?</p>
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white bg-transparent"
            onClick={() => window.open("https://github.com/Rahul207158", "_blank")} // Placeholder
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
