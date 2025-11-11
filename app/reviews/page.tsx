import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"

const reviews = [
  {
    name: "Azizbek Rakhimov",
    role: "MMA Fighter, Tashkent",
    image: "/reviews/azizbek-mma.jpg",
    rating: 5,
    date: "November 8, 2025",
    text: "Я использую Fitness Athletes Pro каждый день после тренировок. Восстановление стало в 2 раза быстрее! Даже после спаррингов ноги не ноют. Лучшие 69$ в моей жизни.",
    product: "Fitness Athletes Pro",
  },
  {
    name: "Diora Kim",
    role: "Fitness Blogger, Seoul",
    image: "/reviews/diora-fitness.jpg",
    rating: 5,
    date: "November 5, 2025",
    text: "XL Ice Bath Tub — это просто ЛЮБОВЬ! Я 178 см и наконец-то могу полностью погрузиться. Температура держится 12+ часов даже в жару. Уже 892 отзыва не врут!",
    product: "XL Ice Bath Tub",
  },
  {
    name: "Jake Morrison",
    role: "Navy SEAL (Ret.), San Diego",
    image: "/reviews/jake-seal.jpg",
    rating: 5,
    date: "October 30, 2025",
    text: "Ice Pod Pro — танковый уровень. Стены 50 мм, крышка как у термоса. Использую с чиллером на 3°C круглый год. Лучше, чем морской лёд в Арктике.",
    product: "Ice Pod Pro",
  },
  {
    name: "Madinabonu Usmanova",
    role: "CrossFit Athlete, Samarkand",
    image: "/reviews/madina-crossfit.jpg",
    rating: 5,
    date: "October 25, 2025",
    text: "Arctic Wolf за 54$ с электронасосом в комплекте — это просто подарок! Двойная камера, не протекает даже если кошка прыгнет. Для Узбекистана — идеально.",
    product: "Arctic Wolf",
  },
  {
    name: "Sophie Laurent",
    role: "Beauty Influencer, Paris",
    image: "/reviews/sophie-beauty.jpg",
    rating: 5,
    date: "November 10, 2025",
    text: "Shark FacialPro — мой утренний ритуал! 60 секунд — и отёки gone, поры сужены, тон лица как после салона за 200€. Уже купила маме и подруге!",
    product: "Shark FacialPro",
  },
  {
    name: "Rustam Khalimov",
    role: "Triathlete, Bukhara",
    image: "/reviews/rustam-tri.jpg",
    rating: 5,
    date: "November 2, 2025",
    text: "Wxtkkom держит 35°F целых 14 часов! У меня +38°C на улице, а вода ледяная до вечера. 8 слоёв изоляции — это не маркетинг, это реальность.",
    product: "Wxtkkom Pro Tub",
  },
  {
    name: "Elena Petrova",
    role: "Ice Diver, Lake Baikal",
    image: "/reviews/elena-diver.jpg",
    rating: 5,
    date: "October 18, 2025",
    text: "LEG3ND ELITE — единственный регулятор, который не замерзает подо льдом Байкала при -2°C. Дышу как на суше. Спасатели Антарктиды тоже на нём.",
    product: "LEG3ND ELITE",
  },
  {
    name: "Carlos Rivera",
    role: "UFC Welterweight",
    image: "/reviews/carlos-ufc.jpg",
    rating: 5,
    date: "November 7, 2025",
    text: "После каждого боя — только XL Ice Bath. 42 дюйма высоты = полное погружение. Восстанавливаюсь за 2 дня вместо 5. Тренер заставляет всех в зале купить.",
    product: "XL Ice Bath Tub",
  },
]

export default function ReviewsPage() {
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
          <h1 className="font-serif text-5xl md:text-6xl text-[#E8F9FD] mb-4">Customer Reviews</h1>
          <p className="text-[#8DA7B5] text-lg max-w-2xl mx-auto">
            Real stories from real people who've transformed their lives with cold therapy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="glass rounded-2xl p-8 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img src={review.image || "/placeholder.svg"} alt={review.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="text-[#E8F9FD] font-semibold text-lg">{review.name}</h4>
                    <p className="text-[#8DA7B5] text-sm">{review.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#A3E7FC] fill-[#A3E7FC]" />
                  ))}
                </div>
              </div>

              <p className="text-[#E8F9FD] leading-relaxed">"{review.text}"</p>

              <p className="text-[#8DA7B5] text-sm">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
