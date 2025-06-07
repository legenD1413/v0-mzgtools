import Link from "next/link"
import Image from "next/image"

export default function RightAngleFlatPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Right Angle Flat End Mills</h1>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Product Detail Pages</h2>
        <p className="mb-4">Direct links to product detail pages:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/standard-tools/right-angle-flat/2F45C" className="text-blue-600 hover:underline">
              2F Edge HRC45° Tungsten Steel Coated End Milling Cutter (2F45C)
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-gray-600 mb-8">
        Right angle flat end mills are designed for precise machining of flat surfaces, slots, and steps. These tools
        feature a 90° cutting edge that creates sharp corners and flat bottoms.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/images/2F45C-JST.png"
              alt="2F Edge HRC45° Tungsten Steel Coated End Milling Cutter"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">2F Edge HRC45° Tungsten Steel Coated End Milling Cutter</h3>
            <p className="text-sm text-gray-600 mb-3">Product Code: 2F45C</p>
            <Link href="/standard-tools/right-angle-flat/2F45C" className="text-blue-600 hover:underline">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
