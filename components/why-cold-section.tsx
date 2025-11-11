import { Snowflake, Heart, Brain, Zap } from "lucide-react"

const benefits = [
  {
    icon: Snowflake,
    title: "Boost Immunity",
    description: "Cold exposure strengthens your immune system and increases white blood cell count.",
  },
  {
    icon: Heart,
    title: "Improve Circulation",
    description: "Enhanced blood flow and cardiovascular health through regular cold plunges.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Sharpen focus, reduce stress, and boost mood with the power of cold therapy.",
  },
  {
    icon: Zap,
    title: "Faster Recovery",
    description: "Accelerate muscle recovery and reduce inflammation after intense workouts.",
  },
]

export default function WhyColdSection() {
  return (
    <section id="benefits" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#E8F9FD] mb-4">Why Cold Therapy?</h2>
          <p className="text-[#8DA7B5] text-lg max-w-2xl mx-auto">
            Discover the scientifically-proven benefits of cold plunge therapy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:border-[#A3E7FC] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A3E7FC] to-[#6BB8D4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-[#0E1726]" size={32} />
              </div>
              <h3 className="font-serif text-2xl text-[#E8F9FD] mb-3">{benefit.title}</h3>
              <p className="text-[#8DA7B5]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
