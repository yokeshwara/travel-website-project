import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Plane,
} from "lucide-react"
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
    <footer className="bg-secondary/30 pt-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 items-start">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">TRAVEL</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/visascreen">Host A Venue</Link></li>
              <li><Link href="/blogs">Blog</Link></li>
              <li><Link href="/searchresults">Hotel</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                +1 12345 67890
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                example@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                1014 N Main St, Miami, Oklahoma, 74354, United States
              </li>
            </ul>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="font-semibold mb-4">
              Follow Us On @instagram
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Instagram ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary py-4">
        <p className="text-center text-sm text-white">
          © 2023 All rights reserved
        </p>
      </div>
    </footer>
  )
}
