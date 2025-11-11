import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#A3E7FC] hover:text-[#6BB8D4] transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <div className="glass rounded-2xl p-12 space-y-6">
          <h1 className="font-serif text-5xl text-[#E8F9FD] mb-8">Terms of Service</h1>

          <p className="text-[#8DA7B5] text-sm">Last updated: January 11, 2025</p>

          <div className="space-y-6 text-[#E8F9FD]">
            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">1. Acceptance of Terms</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                By accessing and using IceBath Haven, you accept and agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">2. Affiliate Disclosure</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                IceBath Haven is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">3. Product Information</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                We strive to provide accurate product information and reviews. However, we do not manufacture or sell
                products directly. All purchases are made through third-party retailers, primarily Amazon.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">4. Medical Disclaimer</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                The information provided on this website is for educational purposes only and is not intended as medical
                advice. Consult with a healthcare professional before starting any cold therapy regimen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">5. Intellectual Property</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                All content on IceBath Haven, including text, graphics, logos, and images, is the property of IceBath
                Haven and protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">6. Limitation of Liability</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                IceBath Haven shall not be liable for any direct, indirect, incidental, or consequential damages arising
                from the use of our website or products purchased through affiliate links.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">7. Changes to Terms</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting to the website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
