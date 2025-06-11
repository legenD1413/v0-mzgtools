import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function TapsPage() {
  // Product data based on the provided content
  const products = [
    {
      id: "tap-007",
      name: "Spiral Groove Tap",
      image: "/images/JIS-SP.png",
      description: "Spiral groove design for efficient chip evacuation in blind hole threading operations",
      threadStandards: "JIS, Metric",
      application: "Upward chip removal is suitable for blind hole processing, steel, stainless steel and cast iron",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Superior Chip Evacuation",
      description:
        "Spiral flute design provides excellent chip evacuation, pulling chips up and out of blind holes, preventing chip packing and ensuring high thread quality.",
    },
    {
      icon: "Zap",
      title: "Precision Thread Quality",
      description:
        "Advanced manufacturing processes and quality control ensure consistent, high-precision threads that meet all major international standards.",
    },
    {
      icon: "Target",
      title: "Multi-Material Performance",
      description:
        "Engineered for optimal performance across diverse materials from general steels to challenging titanium alloys and heat-resistant superalloys.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Zap":
        return <Zap className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Industries served
  const industries = [
    "Automotive Manufacturing",
    "Aerospace Industry",
    "Medical Device Manufacturing",
    "Heavy Machinery",
    "Plumbing and HVAC",
    "Petrochemical Industry",
    "Fastener Manufacturing",
    "General Machine Shops",
  ]

  // Threading operations
  const threadingOperations = [
    "Internal Threading in Blind Holes",
    "Pipe Thread Creation",
    "External Thread Production",
    "Quality Control Inspection",
    "Thread Starting Operations",
    "Dryseal Thread Creation",
    "High-Volume Threading",
    "Precision Thread Verification",
  ]

  // Materials that can be threaded
  const threadableMaterials = [
    "General Steels",
    "Stainless Steels",
    "Cast Iron",
    "Titanium Alloys",
    "Aluminum and Copper Alloys",
    "Heat-Resistant Superalloys",
    "Tool Steels",
    "Non-Ferrous Metals",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Thread Standards Support",
      description:
        "Comprehensive coverage of Metric (M), Unified (UNC/UNF), British Standard (BSW), and specialized pipe thread standards (NPT, BSPT, BSPP, NPTF).",
      color: "border-red-600",
    },
    {
      title: "Advanced Materials & Coatings",
      description:
        "High-Speed Steel (HSS), Cobalt-enhanced HSS-E, and solid carbide substrates with TiN, TiCN, TiAlN coatings for enhanced performance.",
      color: "border-blue-600",
    },
    {
      title: "Precision Manufacturing",
      description:
        "Manufactured to extremely tight tolerances with optimized geometries for superior chip evacuation, thread quality, and tool life.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Threading Tools and Inspection Gauges" },
    { label: "Material", value: "HSS, HSS-E, Carbide, Tool Steel" },
    { label: "Coating Options", value: "TiN, TiCN, TiAlN, Uncoated" },
    { label: "Helix Angle", value: "15°-52° (Spiral Taps)" },
    { label: "Thread Standards", value: "Metric, Unified, BSW, Pipe Threads" },
    { label: "Chamfer Types", value: "Taper, Plug, Bottoming" },
    { label: "Size Range", value: "M1-M64, #0-80 to 4\"" },
    { label: "Tolerance Classes", value: "6H, 6G, Class X/XX" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-white text-gray-900">
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Threading Expert Guide
          </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Taps and Adjustable Circular Die
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  A detailed overview of critical industrial tools used for creating and verifying threads. Covering performance, technical parameters, applications, and primary functions of each tool, grounded in professional engineering principles.
              </p>
              <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Request Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-gray-900 hover:bg-gray-100 border-gray-300 hover:text-gray-900 transition-all duration-300"
                  >
                  Download Catalog <Download className="ml-2 h-4 w-4" />
                </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-[563px] h-[400px] flex items-center justify-center">
                  <Image
                    src="/images/taps.png"
                    alt="Professional Taps and Threading Tools Collection"
                    width={563}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Performance Features */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {performanceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4 bg-white inline-flex p-3 rounded-lg shadow-sm">{renderIcon(feature.icon)}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Product Performance Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Professional threading tools represent the pinnacle of precision manufacturing technology, designed to create and verify threads across diverse industrial applications. The Spiral Groove Tap stands as a prime example of engineering excellence, featuring helical flutes that spiral around the tool's axis to provide exceptional chip evacuation capabilities. This innovative design pulls chips up and out of blind holes, preventing the chip packing that can lead to tap breakage and compromised thread quality.
                </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Advanced material science drives the performance of modern taps and threading tools. High-Speed Steel (HSS) provides the foundation for general-purpose applications, while cobalt-enhanced HSS-E extends performance into more challenging materials like stainless steel and heat-resistant alloys. Solid carbide constructions offer maximum performance and tool life in high-production environments, particularly when enhanced with advanced coatings such as Titanium Nitride (TiN), Titanium Carbonitride (TiCN), or Titanium Aluminum Nitride (TiAlN).
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Precision manufacturing and quality control ensure that these tools consistently produce threads meeting international standards including Metric (M), Unified (UNC/UNF), British Standard (BSW), and specialized pipe thread standards. From the gradual engagement of taper thread taps that reduce starting torque to the metal-to-metal sealing capabilities of dryseal pipe threads, each tool is engineered for specific applications where reliability and precision are paramount.
                </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    Key Performance Indicators
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Materials:</strong> HSS, HSS-E, Carbide, Tool Steel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiN, TiCN, TiAlN, Uncoated
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Helix Angle:</strong> 15°-52° (Variable)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Standards:</strong> Metric, Unified, BSW, Pipe Threads
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Tolerance:</strong> Class X/XX for Gauges
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Our Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                  className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-red-200"
              >
                  <div className="relative w-full bg-white" style={{ height: "200px" }}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                                    <div className="p-5 border-t">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold line-clamp-2 flex-1 mr-2">{product.name}</h3>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">L27</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      {product.threadStandards && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Standards:</span>
                          <span className="text-gray-900">{product.threadStandards}</span>
                    </div>
                      )}
                      {product.application && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-600">{product.application}</p>
                    </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Parameters */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technical Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Technical Specifications</h3>
                <div className="p-4 space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className={`border-l-4 ${spec.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{spec.title}</h4>
                      <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Specifications</h3>
                <div className="divide-y divide-gray-100">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-4">
                      <span className="font-medium text-sm text-gray-700">{spec.label}:</span>
                      <span className="text-sm text-right text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Application Scenarios */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios</h2>
                  </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Industries Served */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Industries Served
                </h3>
                                <div className="grid grid-cols-1 gap-1">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{industry}</span>
                  </div>
                  ))}
                </div>
                  </div>

              {/* Threading Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Threading Operations
                </h3>
                                <div className="grid grid-cols-1 gap-1">
                  {threadingOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
                  </div>
                  ))}
                </div>
                  </div>

              {/* Material Compatibility */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Material Compatibility
                    </h3>
                <div className="grid grid-cols-1 gap-1">
                  {threadableMaterials.map((material, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{material}</span>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Functions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Primary Functions</h2>
                  </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Spiral Chip Evacuation",
                  description: "Helical flutes guide chips upward and away from the cutting zone, preventing chip packing and ensuring superior thread quality in blind holes.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Pressure-Tight Sealing",
                  description: "Specialized pipe threads create reliable seals through thread deformation, ensuring leak-proof connections in fluid and gas systems.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Quality Control",
                  description: "Go/No-Go gauge sets provide quick, accurate verification of external taper dimensions, ensuring interchangeability and proper fit.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Volume Production",
                  description: "Self-opening die chaser systems enable rapid external thread production with automatic retraction for maximum efficiency.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Thread Starting Alignment",
                  description: "Extended taper chamfers distribute cutting action over multiple teeth, reducing torque and ensuring proper thread alignment.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Dryseal Technology",
                  description: "Metal-to-metal sealing through precise thread form control eliminates the need for chemical sealants in high-pressure applications.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
              ].map((func, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-50 p-2 rounded-lg mr-4">{func.icon}</div>
                    <h3 className="text-lg font-bold">{func.title}</h3>
                  </div>
                  <p className="text-gray-600">{func.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Thread Mills",
                  image: "/images/thread-mills.jpg",
                  description: "CNC thread milling tools for internal and external threads",
                  url: "/standard-tools/threading/thread-mills",
                },
                {
                  title: "Drills",
                  image: "/images/drills.jpg", 
                  description: "Precision drilling tools for hole preparation",
                  url: "/standard-tools/hole-making/drills",
                },
                {
                  title: "Thread Turning Tools",
                  image: "/images/thread-turning.jpg",
                  description: "Lathe tools for external thread creation",
                  url: "/standard-tools/threading/thread-turning",
                },
                {
                  title: "Reamers",
                  image: "/images/reamers.jpg",
                  description: "Precision hole finishing for tight tolerances",
                  url: "/standard-tools/hole-making/reamers",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Threading Tools" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Expert Threading Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal threading tools for your specific applications, materials, and production requirements. From spiral flute taps to precision gauges, we provide comprehensive threading solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                  Contact Technical Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10 border-white hover:text-white transition-all duration-300"
                >
                  Request Custom Solution
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}