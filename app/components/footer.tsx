import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Plane } from "lucide-react"
import Image from "next/image"

export function Footer() {

  const instagramImages = [
  "/instagram-image1.jpg",
  "/instagram-image2.jpg",
  "/instagran-image3.jpg",
  "/instagram-image4.jpg",
  "/instagram-image5.jpg",
  "/instagram-image6.jpg",
]
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">TRAVEL</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Destination
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (234) 5678</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@travel.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">456 Main St, Miami, FL 33131</span>
              </li>
            </ul>
          </div>

          {/* Follow Us On Instagram */}
        <div className="grid grid-cols-3 gap-2">
  {instagramImages.map((src, index) => (
    <div
      key={index}
      className="relative aspect-square overflow-hidden rounded"
    >
      <Image
        src={src}
        alt={`Instagram ${index + 1}`}
        fill
        className="object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  ))}
</div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
