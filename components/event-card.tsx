"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from 'lucide-react'
import { cn } from "@/lib/utils"

interface EventCardProps {
  title: string
  date: string
  description: string
}

export default function EventCard({ title, date, description }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 flex flex-col h-full",
        isHovered ? "shadow-md shadow-accent/5 transform -translate-y-1" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 space-y-4 flex-1">
        <div className="flex items-center gap-2 text-accent">
          <Calendar className="h-5 w-5" />
          <span className="font-medium">{date}</span>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "w-full transition-all duration-300",
            isHovered ? "bg-accent/10 border-accent text-accent-foreground" : "",
          )}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}
