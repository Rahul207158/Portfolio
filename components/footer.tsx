"use client"

import { motion } from "framer-motion"
import { Heart, Code, Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-white/60 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-purple-400" />
            <span>by Rahul Kumar Singh</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/40 text-sm mb-4">
            <Coffee className="w-4 h-4" />
            <span>Fueled by coffee and passion for innovation</span>
          </div>

          <p className="text-white/40 text-sm">© 2024 Rahul Kumar Singh. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
