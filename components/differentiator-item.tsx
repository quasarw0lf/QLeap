"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface DifferentiatorItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function DifferentiatorItem({ icon, title, description }: DifferentiatorItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "p-6 border rounded-lg transition-all duration-300",
        isHovered ? "shadow-md border-accent/20 bg-accent/5 transform -translate-y-1" : "border-border/50",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 items-start">
        <div className={cn("transition-all duration-300 mt-1 text-accent", isHovered ? "transform scale-110" : "")}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
