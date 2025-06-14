import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function ADSPullBackPage() {
  // Product data for ADS Pull-Back Tool Holders
  const products = [
    {
      id: "ads-001",
      name: "BT30-ADS Pull-Back Tool Holder",
      image: "/images/ads-bt30.png",
      description: "BT30 interface pull-back tool holder with side locking mechanism",
      series: "BT-ADS Series",
      speedRange: "Up to 30,000 RPM",
      application: "High-speed machining centers, precision milling operations",
      pageNumber: "A15",
    },
    {
      id: "ads-002",
      name: "BT40-ADS Pull-Back Tool Holder",
      image: "/images/ads-bt40.png",
      description: "BT40 interface pull-back tool holder for heavy-duty applications",
      series: "BT-ADS Series",
      speedRange: "Up to 25,000 RPM",
      application: "Medium to heavy machining operations, side milling",
      pageNumber: "A16",
    },
    {
      id: "ads-003",
      name: "BT50-ADS Pull-Back Tool Holder",
      image: "/images/ads-bt50.png",
      description: "BT50 interface pull-back tool holder for maximum rigidity",
      series: "BT-ADS Series",
      speedRange: "Up to 20,000 RPM",
      application: "Heavy-duty machining, large diameter tools",
      pageNumber: "A17",
    },
    {
      id: "ads-004",
      name: "HSK50A-ADS Pull-Back Tool Holder",
      image: "/images/ads-hsk50a.png",
      description: "HSK50A interface with dual-contact stability enhancement",
      series: "HSK-ADS Series",
      speedRange: "Up to 30,000 RPM",
      application: "High-speed machining with enhanced lateral stability",
      pageNumber: "A18",
    },
    {
      id: "ads-005",
      name: "HSK63A-ADS Pull-Back Tool Holder",
      image: "/images/ads-hsk63a.png",
      description: "HSK63A interface for maximum precision and stability",
      series: "HSK-ADS Series",
      speedRange: "Up to 25,000 RPM",
      application: "Precision finishing, complex geometry machining",
      pageNumber: "A19",
    },
    {
      id: "ads-006",
      name: "SK30-ADS Pull-Back Tool Holder",
      image: "/images/ads-sk30.png",
      description: "SK30 interface pull-back tool holder for compact applications",
      series: "SK-ADS Series",
      speedRange: "Up to 30,000 RPM",
      application: "Small diameter tools, precision drilling",
      pageNumber: "A20",
    },
    {
      id: "ads-007",
      name: "SK40-ADS Pull-Back Tool Holder",
      image: "/images/ads-sk40.png",
      description: "SK40 interface with optimized balance for high-speed operations",
      series: "SK-ADS Series",
      speedRange: "Up to 25,000 RPM",
      application: "General purpose milling, drilling operations",
      pageNumber: "A21",
    },
    {
      id: "ads-008",
      name: "C-ADS Extension Rod",
      image: "/images/ads-c-extension.png",
      description: "Straight shank pull-back extension rod for extended reach",
      series: "C-ADS Series",
      speedRange: "Up to 20,000 RPM",
      application: "Deep cavity machining, extended reach applications",
      pageNumber: "A22",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Superior Clamping Stability",
      description:
        "Pull-back collet mechanism provides dual-action clamping with radial compression and axial pull for exceptional grip strength and stability.",
    },
    {
      icon: "Target",
      title: "Ultra-High Precision",
      description:
        "Guaranteed run-out accuracy of ≤0.003mm (3µm) ensures perfect tool rotation and superior surface finishes with extended tool life.",
    },
    {
      icon: "Zap",
      title: "High-Speed Performance",
      description:
        "G2.5 dynamic balance grade enables safe operation up to 30,000 RPM for modern High-Speed Machining (HSM) strategies.",
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
    "Mold & Die Manufacturing",
    "Aerospace Industry",
    "Automotive Manufacturing",
    "Medical Device Manufacturing",
    "Electronics Industry",
    "Precision Engineering",
    "Tool & Die Making",
    "High-Speed Machining Centers",
  ]

  // Applications
  const applications = [
    "High-Speed Finishing Operations",
    "Precision Drilling and Reaming",
    "Side Milling / Peripheral Milling",
    "Complex Cavity Machining",
    "Electrode Manufacturing",
    "Micro-Milling Operations",
    "Profile Milling",
    "Deep Cavity Processing",
  ]

  // Compatible tools
  const compatibleTools = [
    "End Mills (Various Diameters)",
    "Drill Bits",
    "Reamers",
    "Micro Tools",
    "Ball End Mills",
    "Chamfer Mills",
    "Spot Drills",
    "Specialty Cutters",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Pull-Back Clamping System",
      description:
        "Unique dual-action mechanism combines radial compression with axial pull-back force, ensuring the collet and tool are firmly seated against the stop surface.",
      color: "border-red-600",
    },
    {
      title: "Precision Engineering",
      description:
        "Manufactured to achieve ≤0.003mm run-out accuracy with G2.5 dynamic balance grade for optimal performance at high rotational speeds.",
      color: "border-blue-600",
    },
    {
      title: "Enhanced Convenience Features",
      description:
        "Side locking mechanism allows tool clamping/unclamping without removing the pull stud, streamlining tool changes and reducing setup time.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Run-out Accuracy (TIR)", value: "≤ 0.003mm (3µm)" },
    { label: "Dynamic Balance Grade", value: "G2.5" },
    { label: "Maximum Speed", value: "30,000 RPM" },
    { label: "Clamping System", value: "Pull-Back Collet with Side Lock" },
    { label: "Interface Types", value: "BT30/40/50, HSK50A/63A, SK30/40/50" },
    { label: "Extension Options", value: "C-ADS Straight Shank Extensions" },
    { label: "Temperature Range", value: "-20°C to +150°C" },
    { label: "Material", value: "High-Grade Tool Steel" },
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
                <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Tool Holder Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  ADS Pull-Back Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the Pull-Back Tool Holder (ADS) system. This advanced tooling solution is specifically engineered to meet the stringent demands of high-speed and high-precision machining applications with superior clamping stability and exceptional accuracy.
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
                    src="/images/ads-pull-back-hero.png"
                    alt="ADS Pull-Back Tool Holder System Collection"
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
                    The performance of the ADS Pull-Back Tool Holder is defined by a combination of precision, speed, and a highly effective clamping design that delivers significant operational advantages. The core of the system is its <strong>pull-back collet clamping method</strong>. Unlike standard collet chucks that simply compress radially, the ADS system actively pulls the collet back into a tapered bore as it is tightened.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    This dual-action—radial compression combined with an axial pull—ensures the collet and tool are seated firmly against a stop surface. This results in an exceptionally strong, stable, and rigid grip that minimizes tool movement and enhances overall process security. The pull-back mechanism guarantees a superior concentric grip on the cutting tool, leading to a guaranteed <strong>run-out accuracy of 0.003mm (3µm)</strong>.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The ADS tool holder is meticulously engineered and balanced to a <strong>G2.5 grade</strong>, permitting safe and stable operation at rotational speeds of up to <strong>30,000 RPM</strong>. This high-speed capability allows for the full implementation of modern High-Speed Machining (HSM) strategies, enabling faster material removal rates and reduced cycle times without sacrificing precision.
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
                        <strong>Run-out:</strong> ≤ 0.003mm (3µm)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Balance Grade:</strong> G2.5
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Max Speed:</strong> 30,000 RPM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Interfaces:</strong> BT, HSK, SK Series
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Feature:</strong> Side Locking Mechanism
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
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">{product.pageNumber}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      {product.series && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Series:</span>
                          <span className="text-gray-900">{product.series}</span>
                        </div>
                      )}
                      {product.speedRange && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Speed:</span>
                          <span className="text-gray-900">{product.speedRange}</span>
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
                      <span className="text-sm text-gray-900 text-right">{spec.value}</span>
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
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Industries Served</h3>
                <ul className="space-y-2">
                  {industries.map((industry, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Primary Applications</h3>
                <ul className="space-y-2">
                  {applications.map((application, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Compatible Tools</h3>
                <ul className="space-y-2">
                  {compatibleTools.map((tool, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Important Usage Notes */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Important Usage Notes</h2>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Critical Usage Precaution</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p className="mb-2">
                      To ensure safe and effective clamping, it is <strong>imperative</strong> that the cutting tool shank is inserted to a depth that <strong>extends beyond the effective clamping length of the collet bore</strong>.
                    </p>
                    <p>
                      Failure to do so can lead to improper locking and potential damage to the collet or holder. Always verify proper tool insertion depth before operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Function */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Main Function</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                The main function of the Pull-Back Tool Holder (ADS) is <strong>to provide an ultra-precise, high-speed, and exceptionally stable clamping interface between the cutting tool and the machine spindle</strong>. By leveraging a pull-back collet mechanism, it achieves market-leading run-out of 0.003mm and a G2.5 balance for speeds up to 30,000 RPM, making it the definitive choice for demanding finishing, profiling, and high-precision machining operations, especially where lateral stability is a key concern.
              </p>
            </div>
          </div>

          {/* Related Categories */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">SK High Speed</h3>
                <p className="text-sm text-gray-600 mb-4">High-precision tool holders for demanding applications</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
              <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">HM Hydraulic</h3>
                <p className="text-sm text-gray-600 mb-4">Hydraulic expansion tool holders for maximum precision</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
              <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">SR Shrink Fit</h3>
                <p className="text-sm text-gray-600 mb-4">Thermal shrink fit tool holders for superior grip</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
              <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">ER Tool Holders</h3>
                <p className="text-sm text-gray-600 mb-4">Versatile collet chuck systems for various applications</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Machining Precision?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our technical experts to find the perfect ADS Pull-Back Tool Holder solution for your specific machining requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Request Technical Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
} 