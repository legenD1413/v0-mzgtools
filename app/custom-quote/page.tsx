import Header from "@/components/header"
import Footer from "@/components/footer"
import CustomQuoteForm from "@/components/custom-quote-form"

export const metadata = {
  title: "Custom Quote Request | MZG Tools",
  description: "Request a custom quote for your specific tooling needs",
}

export default function CustomQuotePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Custom Quote Request</h1>
            <p className="mb-8 text-lg text-gray-600">
              Fill out the form below to request a custom quote for your specific tooling needs. Our team will get back
              to you within 24 hours.
            </p>

            <CustomQuoteForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
