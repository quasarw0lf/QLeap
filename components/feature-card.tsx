"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 border-border/50 h-full",
        isHovered ? "shadow-md shadow-accent/5 transform -translate-y-1" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 space-y-4 h-full flex flex-col">
        <div className={cn("transition-all duration-300 text-accent", isHovered ? "transform scale-110" : "")}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
      </CardContent>
    </Card>
  )
}
