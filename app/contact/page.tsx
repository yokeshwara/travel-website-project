import ContactSection from "../components/contact-section"
import { Footer } from "../components/footer"
import Header from "@/app/components/header"



export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactSection />
      <Footer />
    </div>
  )
}
