import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <h1 className="font-serif text-5xl text-[#E8F9FD] mb-8">Privacy Policy</h1>

          <p className="text-[#8DA7B5] text-sm">Last updated: January 11, 2025</p>

          <div className="space-y-6 text-[#E8F9FD]">
            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">1. Information We Collect</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                We collect information you provide directly to us, such as when you contact us through our contact form.
                This may include your name, email address, and any message content you choose to share.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">2. How We Use Your Information</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                We use the information we collect to respond to your inquiries, provide customer support, and improve
                our services. We do not sell or share your personal information with third parties for marketing
                purposes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">3. Cookies and Tracking</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                We may use cookies and similar tracking technologies to analyze site usage and improve user experience.
                You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">4. Third-Party Links</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                Our website contains links to third-party websites, including Amazon. We are not responsible for the
                privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">5. Data Security</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#A3E7FC] mb-3">6. Contact Us</h2>
              <p className="text-[#8DA7B5] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at support@icebathhaven.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
