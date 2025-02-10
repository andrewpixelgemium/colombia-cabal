"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function CultureCarousel() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <Card className="relative overflow-hidden border-4 border-red-600 rounded-xl bg-white shadow-lg max-w-5xl mx-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EKKJP44QINOIZD4Z6G2OPVVY3I%20Medium-wCxwhkNBklAoFGxkn4KjKP14InE7YO.jpeg"
          alt="Colombian President at cultural event"
          width={1200}
          height={600}
          className="aspect-[2/1] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent w-full h-full" />
        <div className="absolute top-0 left-0 bg-red-600 text-white px-4 py-2 text-lg font-bold">BREAKING NEWS</div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-2">
            Colombian President Embraces Culture
          </h2>
          <p className="text-xl md:text-2xl font-semibold">
            "Our heritage is our strength," says leader in passionate address
          </p>
        </div>
        <div className="absolute bottom-2 right-2 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
          <span className="text-white text-sm font-bold">LIVE</span>
        </div>
      </Card>
    </div>
  )
}

