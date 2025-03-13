"use client"

import { useEffect, useState, type ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ImpactCounterProps {
  icon: ReactNode
  value: number
  label: string
  prefix?: string
  suffix?: string
}

export default function ImpactCounter({ icon, value, label, prefix = "", suffix = "" }: ImpactCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Animate the counter from 0 to the target value
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const increment = value / totalFrames

    let currentFrame = 0

    const counter = setInterval(() => {
      currentFrame++
      const progress = Math.min(currentFrame / totalFrames, 1)
      const currentCount = Math.floor(progress * value)

      setCount(currentCount)

      if (currentFrame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [value])

  // Format the number with commas for thousands
  const formattedCount = count.toLocaleString()

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-4">{icon}</div>
        <div className="text-3xl font-bold">
          {prefix}
          {formattedCount}
          {suffix}
        </div>
        <p className="mt-2 text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  )
}

