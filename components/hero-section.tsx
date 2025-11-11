"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      alpha: number
    }> = []

    // Create fog particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.3 + 0.1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius)
        gradient.addColorStop(0, `rgba(163, 231, 252, ${particle.alpha})`)
        gradient.addColorStop(1, "rgba(163, 231, 252, 0)")
        ctx.fillStyle = gradient
        ctx.fill()

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated fog canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1726] via-[#1B2C3E] to-[#0E1726]" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="animate-fade-in-up space-y-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#E8F9FD] tracking-wider uppercase">
            IceBath<span className="text-[#A3E7FC]">•</span>Haven
          </h1>
          <p className="text-xl md:text-2xl text-[#8DA7B5] font-light tracking-wide">
            Embrace the Cold. Transform Your Life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button size="lg" className="bg-[#A3E7FC] text-[#0E1726] hover:bg-[#6BB8D4] text-lg px-8">
            Discover Ice Baths
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#A3E7FC] text-[#A3E7FC] hover:bg-[#A3E7FC] hover:text-[#0E1726] text-lg px-8 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#A3E7FC]" size={32} />
      </div>
    </section>
  )
}
