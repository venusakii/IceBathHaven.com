import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass border-t border-[#2C4558] mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#E8F9FD]">
              IceBath<span className="text-[#A3E7FC]">Haven</span>
            </h3>
            <p className="text-[#8DA7B5] text-sm">
              Your trusted source for premium cold plunge experiences and EMF protection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E8F9FD] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Reviews", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-[#8DA7B5] hover:text-[#A3E7FC] transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#E8F9FD] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Disclaimer"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[#8DA7B5] hover:text-[#A3E7FC] transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          
        </div>

        <div className="border-t border-[#2C4558] pt-8 text-center text-[#8DA7B5] text-sm">
          <p>
            © {new Date().getFullYear()} IceBath Haven. All rights reserved. As an Amazon Associate, we earn from
            qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
