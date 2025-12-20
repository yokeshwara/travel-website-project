



import Header from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import Newsletter from "@/app/components/newsletter"
import BlogDetailsSection from "@/app/components/blogs-details-section"



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
