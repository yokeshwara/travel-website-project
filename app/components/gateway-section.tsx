import { Check, CreditCard, Shield, Star, ThumbsUp, Users } from "lucide-react"

const features = [
  {
    number: "1",
    icon: Users,
    title: "Unrivaled Selection",
    description:
      "Whether you're searching for a popular hotel, secluded cabin or a relaxing spa getaway, you'll find the ideal option on our site with accommodations in the world's top cities and a premium selection of places to at every price.",
  },
  {
    number: "2",
    icon: Check,
    title: "Ease and Convenience",
    description:
      "We strive to perfect to booking and payment processes. It's easy to navigate, save the accommodations, but your travel history and finding accommodations just take some easy steps.",
  },
  {
    number: "3",
    icon: Star,
    title: "Best Price Guarantee",
    description:
      "We're committed to offering the best deals around with some of the most affordable rates in the world! Our hotel are carefully selected with great value for outstanding price for your money.",
  },
  {
    number: "4",
    icon: ThumbsUp,
    title: "Expert Advice and Recommendations",
    description:
      "Whether you're searching for a popular hotel, secluded cabin or a relaxing spa getaway, you'll find the ideal option on our site with accommodations in the best price.",
  },
  {
    number: "5",
    icon: Shield,
    title: "Secure and Reliable",
    description:
      "We strive to perfect to booking and payment processes. It's easy to navigate, save the accommodations, but your travel history and finding accommodations just take some easy steps.",
  },
  {
    number: "6",
    icon: CreditCard,
    title: "Exceptional Customer Service",
    description:
      "We're committed to offering the best deals. Alongside with some of the most affordable rates online. Our hotels are carefully selected with great value for money in mind.",
  },
]

export function GatewaySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ fontFamily: "Urbanist" }}>
            Your Gateway to Seamless Travel Experiences
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty" style={{ fontFamily: "Urbanist" }}>
            Whether you are searching for you popular hotels or cities or luxury cabin and make your hotel deal work in
            the world will help you to enjoy your travel with your family or friends and at the affordable price online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.number} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {feature.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Urbanist" }}>{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "Urbanist" }}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
