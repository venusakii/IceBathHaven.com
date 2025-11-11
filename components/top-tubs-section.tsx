import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"
import { products } from "@/lib/products-data"
import Link from "next/link"

export default function TopTubsSection() {
  const topTubs = products.slice(0, 3)

  return (
    <section id="products" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#E8F9FD] mb-4">Top-Rated Ice Baths</h2>
          <p className="text-[#8DA7B5] text-lg max-w-2xl mx-auto">
            Handpicked selection of the best cold plunge tubs on the market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topTubs.map((tub, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:border-[#A3E7FC] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tub.image || "/placeholder.svg"}
                  alt={tub.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl text-[#E8F9FD]">{tub.shortName}</h3>

                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(tub.rating) ? "text-[#A3E7FC] fill-[#A3E7FC]" : "text-[#2C4558]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[#8DA7B5] text-sm">
                    {tub.rating} ({tub.reviews} reviews)
                  </span>
                </div>

                <ul className="space-y-2">
                  {tub.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-[#8DA7B5] text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3E7FC] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={`/products/${tub.slug}`}>
                  <Button className="w-full bg-[#A3E7FC] text-[#0E1726] hover:bg-[#6BB8D4] group">
                    Read More
                    <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
