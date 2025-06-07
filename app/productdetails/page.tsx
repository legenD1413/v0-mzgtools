import Link from "next/link"

export default function ProductDetailsIndexPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <p className="text-gray-600 mb-8">
        This page displays detailed information about our products. Please select a specific product to view its
        details.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Available Product Details</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/productdetails/2F45C" className="text-blue-600 hover:underline">
              2F Edge HRC45° Tungsten Steel Coated End Milling Cutter (2F45C)
            </Link>
          </li>
          <li>
            <Link href="/productdetails/test-page" className="text-blue-600 hover:underline">
              Test Page
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium mb-2">Looking for a specific product?</h2>
        <p className="text-gray-600 mb-4">
          Browse our product categories or use the search function to find the product you're looking for.
        </p>
        <Link href="/standard-tools" className="text-blue-600 hover:underline">
          Browse All Products
        </Link>
      </div>
    </div>
  )
}
