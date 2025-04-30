"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AudienceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function AudienceCard({ icon, title, description }: AudienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 text-center h-full",
        isHovered ? "shadow-md shadow-accent/5 transform -translate-y-1" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 space-y-4">
        <div
          className={cn(
            "mx-auto w-fit text-accent transition-all duration-300",
            isHovered ? "transform scale-110" : "",
          )}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
