import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">{children}</main>
      <Footer />
    </>
  )
}
