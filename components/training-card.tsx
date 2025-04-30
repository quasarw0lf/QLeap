"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TrainingCardProps {
  title: string
  description: string
  image: string
}

export default function TrainingCard({ title, description, image }: TrainingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 h-full",
        isHovered ? "shadow-md shadow-accent/5 transform -translate-y-1" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={cn("object-cover transition-transform duration-500", isHovered ? "transform scale-110" : "")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className={cn("w-1 h-8 bg-accent mr-3 transition-all duration-300", isHovered ? "h-12" : "h-8")}></div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
