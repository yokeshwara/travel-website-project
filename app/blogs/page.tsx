

import BlogsSection from "../components/blogs-section"
import { Footer } from "../components/footer"
import Header from "@/app/components/header"
import Newsletter from "../components/newsletter"



export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogsSection />
       <Newsletter />
      <Footer />
    </div>
  )
}
