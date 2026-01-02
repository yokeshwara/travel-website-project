



import Header from "@/app/components/header"
import { Footer } from "@/app/components/footer"

import BlogDetailsSection from "@/app/components/blogs-details-section"
import { Newsletter } from "@/app/components/newsletter"



export default function BlogDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <BlogDetailsSection />
       <Newsletter />
      <Footer />
    </div>
  )
}
