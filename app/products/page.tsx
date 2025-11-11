import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ArrowLeft } from "lucide-react"
import { products } from "@/lib/products-data"

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#A3E7FC] hover:text-[#6BB8D4] transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#E8F9FD] mb-4">All Ice Bath Products</h1>
          <p className="text-[#8DA7B5] text-lg max-w-2xl mx-auto">
            Browse our complete collection of premium cold plunge tubs and ice baths
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:border-[#A3E7FC] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl text-[#E8F9FD]">{product.shortName || product.name}</h3>

                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-[#A3E7FC] fill-[#A3E7FC]" : "text-[#2C4558]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[#8DA7B5] text-sm">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="text-[#8DA7B5] text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3E7FC] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={`/products/${product.slug}`}>
                  <Button className="w-full bg-[#A3E7FC] text-[#0E1726] hover:bg-[#6BB8D4]">Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
