import { Shield, Wifi, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FaradaySection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass rounded-2xl p-8 space-y-6">
            <img src="/faraday-cage-emf-protection.jpg" alt="Faraday Protection" className="w-full rounded-xl" />
            <div className="text-center">
              <h3 className="font-serif text-2xl text-[#E8F9FD] mb-2">Complete EMF Protection Kit</h3>
              <p className="text-[#8DA7B5] mb-4">Everything you need to protect yourself and your devices</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-[#E8F9FD]">Faraday Protection</h2>
            <p className="text-[#8DA7B5] text-lg">
              In our connected world, electromagnetic radiation is everywhere. Protect yourself with our curated
              selection of Faraday bags, cages, and EMF protection products.
            </p>

            <div className="space-y-4">
              {[
                { icon: Shield, text: "Block 99% of EMF radiation" },
                { icon: Wifi, text: "Protect devices from tracking" },
                { icon: Lock, text: "Secure your digital privacy" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A3E7FC] to-[#6BB8D4] flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-[#0E1726]" size={24} />
                  </div>
                  <p className="text-[#E8F9FD]">{item.text}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-[#A3E7FC] text-[#0E1726] hover:bg-[#6BB8D4]">
              Explore Faraday Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
