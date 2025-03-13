import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  imageSrc: string
}

export default function TestimonialCard({ name, location, quote, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={`Photo of ${name}`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-white/80">{location}</p>
          </div>
        </div>
        <div className="p-6 pt-8 relative">
          <div className="absolute -top-4 left-6 rounded-full bg-primary/10 p-2">
            <QuoteIcon className="h-5 w-5 text-primary" />
          </div>
          <blockquote className="text-muted-foreground">"{quote}"</blockquote>
        </div>
      </CardContent>
    </Card>
  )
}

