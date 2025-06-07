import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Image src="/images/mzg-logo.png" alt="MZG Tools" width={80} height={30} className="mb-4 h-auto" />
            <p className="mb-4">
              MZG Tools specializes in high-precision industrial milling tools and custom tooling solutions for
              manufacturing industries worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-red-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/standard-tools/milling" className="hover:text-red-500">
                  Milling Tools
                </Link>
              </li>
              <li>
                <Link href="/standard-tools/hole-making" className="hover:text-red-500">
                  Hole Making Tools
                </Link>
              </li>
              <li>
                <Link href="/standard-tools/threading" className="hover:text-red-500">
                  Threading Tools
                </Link>
              </li>
              <li>
                <Link href="/standard-tools/inserts" className="hover:text-red-500">
                  Inserts
                </Link>
              </li>
              <li>
                <Link href="/standard-tools/tool-holders" className="hover:text-red-500">
                  Tool Holders
                </Link>
              </li>
              <li>
                <Link href="/resources/catalog" className="hover:text-red-500">
                  Product Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-red-500" />
                <span>123 Manufacturing Way, Industrial District, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-red-500" />
                <span>info@mzgtools.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest product updates and industry news.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md border border-blue-800 bg-blue-900 px-4 py-2 focus:border-red-500 focus:outline-none"
              />
              <button type="submit" className="rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-900 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MZG Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
