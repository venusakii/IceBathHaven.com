"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#E8F9FD] mb-4">Get in Touch</h2>
          <p className="text-[#8DA7B5] text-lg">
            Have questions? We're here to help you start your cold therapy journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-[#E8F9FD] mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#0E1726] border-[#2C4558] text-[#E8F9FD]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#E8F9FD] mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#0E1726] border-[#2C4558] text-[#E8F9FD]"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#E8F9FD] mb-2">
              Message
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#0E1726] border-[#2C4558] text-[#E8F9FD] min-h-[150px]"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#A3E7FC] text-[#0E1726] hover:bg-[#6BB8D4] text-lg">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
