import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#A3E7FC] hover:text-[#6BB8D4] transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <div className="glass rounded-2xl p-12 space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl text-[#E8F9FD] text-center">About IceBath Haven</h1>

          <div className="space-y-6 text-[#E8F9FD] leading-relaxed">
            <p className="text-lg">
              Welcome to IceBath Haven, your trusted guide to the transformative world of cold therapy and wellness.
            </p>

            <p>
              Our journey began with a simple belief: that the ancient practice of cold immersion holds incredible power
              to enhance modern life. From elite athletes to busy professionals, from wellness enthusiasts to health
              seekers, we've seen firsthand how cold therapy can unlock human potential.
            </p>

            <h2 className="font-serif text-3xl text-[#A3E7FC] mt-8">Our Mission</h2>
            <p>
              At IceBath Haven, our mission is to make premium cold plunge experiences accessible to everyone. We
              carefully curate only the best ice baths, cold plunge tubs, and wellness products, ensuring quality,
              durability, and effectiveness.
            </p>

            <h2 className="font-serif text-3xl text-[#A3E7FC] mt-8">What We Offer</h2>
            <ul className="space-y-3 text-[#8DA7B5]">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                <span>Expert-curated selection of premium ice baths and cold plunge tubs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                <span>Comprehensive guides and educational resources on cold therapy</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                <span>EMF protection products for complete wellness</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                <span>Real customer reviews and success stories</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl text-[#A3E7FC] mt-8">Why Choose Us</h2>
            <p>
              We're not just another affiliate site. We're cold therapy enthusiasts who personally test and evaluate
              every product we recommend. Our team includes athletes, wellness professionals, and health experts who
              understand what makes a great cold plunge experience.
            </p>

            <p className="text-[#8DA7B5] text-sm mt-8 pt-8 border-t border-[#2C4558]">
              As an Amazon Associate, we earn from qualifying purchases. This allows us to continue providing valuable
              content and recommendations at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
