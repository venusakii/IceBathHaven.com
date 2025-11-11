import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alexandra Mitchell",
    role: "Marathon Runner",
    image: "/woman-athlete-portrait.png",
    rating: 5,
    text: "Cold plunging has completely transformed my recovery routine. I feel stronger and more energized than ever!",
  },
  {
    name: "David Thompson",
    role: "Entrepreneur",
    image: "/business-portrait-man.png",
    rating: 5,
    text: "The mental clarity I get from my morning ice bath is incredible. It sets the tone for my entire day.",
  },
  {
    name: "Rachel Martinez",
    role: "Yoga Instructor",
    image: "/yoga-instructor-portrait.png",
    rating: 5,
    text: "I was skeptical at first, but the benefits are real. Better sleep, less inflammation, and improved mood.",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#E8F9FD] mb-4">Success Stories</h2>
          <p className="text-[#8DA7B5] text-lg max-w-2xl mx-auto">Hear from those who've embraced the cold</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass rounded-2xl p-8 space-y-6">
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#A3E7FC] fill-[#A3E7FC]" />
                ))}
              </div>

              <p className="text-[#E8F9FD] italic">"{testimonial.text}"</p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-[#E8F9FD] font-semibold">{testimonial.name}</h4>
                  <p className="text-[#8DA7B5] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
