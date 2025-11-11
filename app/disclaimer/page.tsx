import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DisclaimerPage() {
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
          <h1 className="font-serif text-5xl text-[#E8F9FD] mb-8">Disclaimer</h1>

          <p className="text-[#8DA7B5] text-sm">Last updated: January 11, 2025</p>

          <div className="space-y-6 text-[#E8F9FD]">
            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">Medical Disclaimer</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                The information provided on IceBath Haven is for educational and informational purposes only. It is not
                intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the
                advice of your physician or other qualified health provider before starting any new health regimen,
                including cold therapy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">Affiliate Disclaimer</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                IceBath Haven is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.
                When you make a purchase through our affiliate links, we may earn a commission at no additional cost to
                you.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">Product Reviews</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                While we strive to provide accurate and unbiased product reviews and recommendations, individual results
                may vary. We are not responsible for the quality, safety, or performance of products purchased through
                our affiliate links.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">Safety Warning</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                Cold therapy can be dangerous if not practiced correctly. Consult with a healthcare professional before
                beginning cold plunge therapy, especially if you have any pre-existing medical conditions, including but
                not limited to:
              </p>
              <ul className="list-none space-y-2 mt-4 text-[#8DA7B5]">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                  Cardiovascular conditions
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                  High or low blood pressure
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                  Respiratory conditions
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                  Pregnancy
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E7FC] mr-3 mt-2 flex-shrink-0" />
                  Any chronic medical condition
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">No Guarantees</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                We make no guarantees regarding the effectiveness of cold therapy or any products featured on our
                website. Results vary from person to person, and your experience may differ from testimonials or reviews
                shared on our site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">Third-Party Links</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                Our website contains links to third-party websites. We are not responsible for the content, accuracy, or
                practices of these external sites. Accessing third-party links is at your own risk.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
