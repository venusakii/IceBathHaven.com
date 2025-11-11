"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#A3E7FC] hover:text-[#6BB8D4] transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl text-[#E8F9FD] mb-4">Get in Touch</h1>
          <p className="text-[#8DA7B5] text-lg">
            Have questions? We're here to help you start your cold therapy journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A3E7FC] to-[#6BB8D4] flex items-center justify-center mx-auto">
              <Mail className="text-[#0E1726]" size={24} />
            </div>
            <h3 className="text-[#E8F9FD] font-semibold">Email Us</h3>
            <p className="text-[#8DA7B5] text-sm">support@icebathhaven.com</p>
          </div>

          <div className="glass rounded-xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A3E7FC] to-[#6BB8D4] flex items-center justify-center mx-auto">
              <MessageSquare className="text-[#0E1726]" size={24} />
            </div>
            <h3 className="text-[#E8F9FD] font-semibold">Live Chat</h3>
            <p className="text-[#8DA7B5] text-sm">Available Mon-Fri, 9AM-5PM EST</p>
          </div>

          <div className="glass rounded-xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A3E7FC] to-[#6BB8D4] flex items-center justify-center mx-auto">
              <Send className="text-[#0E1726]" size={24} />
            </div>
            <h3 className="text-[#E8F9FD] font-semibold">Response Time</h3>
            <p className="text-[#8DA7B5] text-sm">Within 24 hours</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-[#E8F9FD] mb-2">
                Name *
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
                Email *
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
          </div>

          <div>
            <label htmlFor="subject" className="block text-[#E8F9FD] mb-2">
              Subject *
            </label>
            <Input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-[#0E1726] border-[#2C4558] text-[#E8F9FD]"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#E8F9FD] mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#0E1726] border-[#2C4558] text-[#E8F9FD] min-h-[200px]"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#A3E7FC] text-[#0E1726] hover:bg-[#6BB8D4] text-lg py-6">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
