import Link from "next/link"
import { ArrowLeft, Snowflake, Heart, Brain, Zap, Activity, Shield } from "lucide-react"

const benefits = [
  {
    icon: Snowflake,
    title: "Boost Immunity",
    description:
      "Cold exposure strengthens your immune system by increasing white blood cell count and enhancing your body's natural defense mechanisms.",
    details: [
      "Increases white blood cell production",
      "Enhances immune response",
      "Reduces frequency of illness",
      "Strengthens natural defenses",
    ],
  },
  {
    icon: Heart,
    title: "Improve Circulation",
    description:
      "Enhanced blood flow and cardiovascular health through regular cold plunges. Your heart pumps more efficiently, delivering oxygen throughout your body.",
    details: [
      "Improves cardiovascular health",
      "Enhances blood circulation",
      "Strengthens blood vessels",
      "Reduces blood pressure",
    ],
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description:
      "Sharpen focus, reduce stress, and boost mood with the power of cold therapy. The shock of cold water triggers powerful mental benefits.",
    details: [
      "Increases alertness and focus",
      "Reduces stress and anxiety",
      "Boosts mood and energy",
      "Enhances mental resilience",
    ],
  },
  {
    icon: Zap,
    title: "Faster Recovery",
    description:
      "Accelerate muscle recovery and reduce inflammation after intense workouts. Professional athletes rely on cold therapy for optimal performance.",
    details: [
      "Reduces muscle soreness",
      "Decreases inflammation",
      "Speeds up recovery time",
      "Enhances athletic performance",
    ],
  },
  {
    icon: Activity,
    title: "Metabolic Boost",
    description:
      "Cold exposure activates brown fat and increases metabolic rate, helping with weight management and energy levels.",
    details: [
      "Activates brown adipose tissue",
      "Increases calorie burning",
      "Improves insulin sensitivity",
      "Boosts energy levels",
    ],
  },
  {
    icon: Shield,
    title: "Stress Resilience",
    description:
      "Regular cold exposure builds mental toughness and helps your body handle stress more effectively in daily life.",
    details: ["Builds mental fortitude", "Improves stress adaptation", "Enhances willpower", "Increases resilience"],
  },
]

export default function BenefitsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#A3E7FC] hover:text-[#6BB8D4] transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#E8F9FD] mb-4">Benefits of Cold Therapy</h1>
          <p className="text-[#8DA7B5] text-lg max-w-2xl mx-auto">
            Discover the scientifically-proven benefits of cold plunge therapy and how it can transform your health and
            wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass rounded-2xl p-8 hover:border-[#A3E7FC] transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A3E7FC] to-[#6BB8D4] flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-[#0E1726]" size={32} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#E8F9FD] mb-2">{benefit.title}</h3>
                  <p className="text-[#8DA7B5]">{benefit.description}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="text-[#E8F9FD] text-sm flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A3E7FC] mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-12 mt-12 text-center">
          <h2 className="font-serif text-3xl text-[#E8F9FD] mb-4">Ready to Experience the Benefits?</h2>
          <p className="text-[#8DA7B5] mb-6 max-w-2xl mx-auto">
            Start your cold therapy journey today with our curated selection of premium ice baths and cold plunge tubs.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#A3E7FC] text-[#0E1726] hover:bg-[#6BB8D4] rounded-lg font-semibold transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  )
}
