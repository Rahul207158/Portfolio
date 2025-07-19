"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ResumeDownloadProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ResumeDownload({ variant = "outline", size = "sm", className = "" }: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  // ✅ Replace this with your actual Google Drive File ID
  const GOOGLE_DRIVE_FILE_ID = "https://drive.google.com/file/d/1hK3Id4tAqJucXy1OqPaUB8Y7crhzV0I6/view?usp=share_link" // Replace with actual ID

  // ✅ Direct download URL (forces browser to download the file)
  const GOOGLE_DRIVE_DOWNLOAD_URL = "https://drive.google.com/file/d/1hK3Id4tAqJucXy1OqPaUB8Y7crhzV0I6/view?usp=share_link" // Direct path to the resume file

  // ✅ View in browser (opens Google Drive preview)
  const GOOGLE_DRIVE_VIEW_URL = "https://drive.google.com/file/d/1hK3Id4tAqJucXy1OqPaUB8Y7crhzV0I6/view?usp=share_link" // Direct path to the resume file

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // First try direct download
      const link = document.createElement("a")
      link.href = GOOGLE_DRIVE_DOWNLOAD_URL
      link.download = "Rahul_Kumar_Singh_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Download started!",
        description: "Your resume download has begun.",
      })
    } catch (error) {
      // Fallback to opening in new tab
      window.open(GOOGLE_DRIVE_VIEW_URL, "_blank")

      toast({
        title: "Resume opened!",
        description: "Resume opened in new tab. You can download it from there.",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white bg-transparent ${className}`}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <>
          <div className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mr-2" />
          Downloading...
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Resume
        </>
      )}
    </Button>
  )
}
