import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function PowerToolHolderPage() {
  // Product data for Strong Tool Holders
  const products = [
    {
      id: "power-001",
      name: "DAT-C Milling Machine Tool Holder",
      image: "/images/c34-1.png",
      description: "Incorporates a slotted inner bore to prevent slippage and enhance clamping force, along with roller bearings to minimize friction and detachment. It is waterproof and dustproof with end face contact clamping, preventing overtightening. Its sealed structure protects against dirt and debris. Dynamic balance is up to G6.3, 8000RPM (customizable for higher performance).",
      series: "DAT-C Series",
      dynamicBalance: "G6.3, 8000RPM",
      application: "High-strength clamping applications with slotted inner bore design",
      pageNumber: "C34",
    },
    {
      id: "power-002",
      name: "BT-MLT Milling Machine Tool Holder",
      image: "/images/c35-1.png",
      description: "Offers waterproof and dustproof capabilities with end face contact clamping. Its design prevents overtightening damage, and a sealed structure eliminates dirt and debris harm. Dynamic balance is achievable up to G6.3, 8000RPM (with options for higher performance).",
      series: "BT-MLT Series",
      dynamicBalance: "G6.3, 8000RPM",
      application: "Waterproof sealed structure applications with overtightening protection",
      pageNumber: "C35",
    },
    {
      id: "power-003",
      name: "DAT-MLT Milling Machine Tool Holder",
      image: "/images/c36-1.png",
      description: "Provides waterproof and dustproof features with end face contact clamping. Its design prevents overtightening, and a sealed structure protects against contamination. Achieves dynamic balance up to G6.3, 8000RPM (with customizable higher levels).",
      series: "DAT-MLT Series",
      dynamicBalance: "G6.3, 8000RPM",
      application: "Contamination-resistant applications with end face contact clamping",
      pageNumber: "C36",
    },
    {
      id: "power-004",
      name: "HSK-MLT Milling Machine Tool Holder",
      image: "/images/c37-1.png",
      description: "Features waterproof and dustproof design with end face contact clamping and a sealed structure to prevent damage. Capable of dynamic balance up to G6.3, 8000RPM (higher options available).",
      series: "HSK-MLT Series",
      dynamicBalance: "G6.3, 8000RPM",
      application: "HSK interface applications with sealed structure protection",
      pageNumber: "C37",
    },
    {
      id: "power-005",
      name: "NT-MLC Milling Machine Tool Holder",
      image: "/images/c37-2.png",
      description: "Utilizes a high-strength brass retainer to guide roller bearings for perfect sliding motion, and employs special hydraulic oil that prevents solidification.",
      series: "NT-MLC Series",
      specialFeature: "High-strength brass retainer with hydraulic oil",
      application: "High-precision sliding motion with special hydraulic system",
      pageNumber: "C37",
    },
    {
      id: "power-006",
      name: "NT-MCST Milling Machine Tool Holder",
      image: "/images/c38-1.png",
      description: "Designed to be waterproof and dustproof with end face contact clamping. Its sealed structure prevents damage from dirt and debris. Achieves dynamic balance up to G6.3, 8000RPM (customizable for higher levels).",
      series: "NT-MCST Series",
      dynamicBalance: "G6.3, 8000RPM",
      application: "NT interface with sealed structure for contamination protection",
      pageNumber: "C38",
    },
    {
      id: "power-007",
      name: "BT-MCST Milling Machine Tool Holder",
      image: "/images/c38-2.png",
      description: "Features a waterproof and dustproof design with end face contact clamping, and a sealed structure to eliminate dirt and debris damage. Capable of dynamic balance up to G6.3, 8000RPM (higher options available).",
      series: "BT-MCST Series",
      dynamicBalance: "G6.3, 8000RPM",
      application: "BT interface with enhanced contamination elimination",
      pageNumber: "C38",
    },
    {
      id: "power-008",
      name: "DAT-MCST Milling Machine Tool Holder",
      image: "/images/c39-1.png",
      description: "Offers waterproof and dustproof properties with end face contact clamping and a sealed structure for protection. Achieves dynamic balance up to G6.3, 8000RPM (customizable for higher performance).",
      series: "DAT-MCST Series",
      dynamicBalance: "G6.3, 8000RPM",
      application: "DAT interface with comprehensive protection features",
      pageNumber: "C39",
    },
    {
      id: "power-009",
      name: "MCST Collets Chuck Kit",
      image: "/images/c40-1.png",
      description: "A comprehensive set of strong type collet chuck tool holders, featuring waterproof and dustproof design, balanced to G6.3, 8000RPM.",
      series: "MCST Kit Series",
      dynamicBalance: "G6.3, 8000RPM",
      application: "Complete collet chuck system for strong type applications",
      pageNumber: "C40",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Exceptional Clamping Force",
      description:
        "Innovative slotted bore design with two-line needle bearings generates immense, evenly distributed pressure to prevent tool slippage under high torque loads.",
    },
    {
      icon: "Target",
      title: "Superior Vibration Damping",
      description:
        "Robust construction and powerful clamping mechanism absorb cutting vibrations, reducing chatter and improving surface finish quality.",
    },
    {
      icon: "Zap",
      title: "Enhanced Durability",
      description:
        "Waterproof and dustproof designs with sealed structures protect internal mechanisms, ensuring long service life in harsh industrial environments.",
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
    "Heavy Machinery Manufacturing",
    "Mold & Die (Roughing Operations)",
    "Energy Sector",
    "Automotive Powertrain",
    "Aerospace Manufacturing",
    "General Manufacturing",
    "Steel & Metal Processing",
    "Industrial Equipment",
  ]

  // Applications
  const applications = [
    "Heavy-Duty Roughing Operations",
    "High-Torque Milling",
    "Machining of Tough Materials",
    "Drilling with Morse Taper Drills",
    "Large Diameter Cutter Operations",
    "Face Milling Applications",
    "Shoulder Milling",
    "Deep Axial and Radial Cuts",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "Stainless Steels",
    "Titanium Alloys",
    "Inconel Superalloys",
    "High-Strength Alloys",
    "Tool Steels",
    "Cast Iron",
    "Carbon Steels",
    "Heat-Resistant Materials",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Advanced Mechanical Design",
      description:
        "6-slot inner bore design with two-line needle bearing mechanism minimizes friction and provides immense, evenly distributed clamping pressure.",
      color: "border-red-600",
    },
    {
      title: "Precision Engineering",
      description:
        "MLT series achieves 0.001-0.005mm concentricity while C series maintains 0.015mm concentricity even with extended drills.",
      color: "border-blue-600",
    },
    {
      title: "Environmental Protection",
      description:
        "Waterproof and dustproof designs with sealed structures prevent contamination damage and ensure consistent performance.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Dynamic Balance Grade", value: "G6.3 at 8,000 RPM (Standard)" },
    { label: "MLT Series Concentricity", value: "0.001-0.005mm" },
    { label: "C Series Concentricity", value: "0.015mm" },
    { label: "Interface Types", value: "BT30/40/50, DAT30/40/50, HSK50A/63A" },
    { label: "Special Interfaces", value: "NT30/40/50, R8, MTB4/5" },
    { label: "Clamping Mechanism", value: "Needle Bearing System" },
    { label: "Environmental Rating", value: "Waterproof/Dustproof" },
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
                  Strong Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the Strong Tool Holder system. This robust category of milling tool holders is specifically engineered for demanding machining applications that require exceptionally high clamping force, superior stability, and vibration damping.
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
                    src="/images/strong-tool-holder-hero.png"
                    alt="Strong Tool Holder System Collection"
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
                    The performance of the Strong Tool Holder system is defined by its mechanical design, which focuses on generating and maintaining immense clamping force to prevent tool slippage under high torque loads. The core performance feature is its powerful grip. In series like the BT-C/DAT-C, this is achieved through an innovative <strong>slotted bore design</strong>, where the inner bore is divided into six slots.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    This design, combined with a <strong>two-line needle bearing mechanism</strong>, minimizes friction and allows for the application of immense, evenly distributed pressure on the tool shank. This design effectively prevents tool slippage even during the most aggressive roughing operations. The robust construction and powerful clamping mechanism work in tandem to absorb and dampen cutting vibrations.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    These tool holders are built for longevity in harsh industrial environments. Features such as <strong>waterproof and dustproof designs</strong>, achieved through sealed structures and clamping end face contact, prevent contaminants like dirt and coolant from damaging the internal needle bearing mechanism. The MLT series achieves high concentricity in the range of <strong>0.001-0.005mm</strong>, while the C series maintains <strong>0.015mm concentricity</strong>.
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
                        <strong>Concentricity:</strong> 0.001-0.005mm (MLT)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Balance Grade:</strong> G6.3 at 8,000 RPM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Design:</strong> 6-Slot Bore, Needle Bearings
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Protection:</strong> Waterproof/Dustproof
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> Heavy-Duty Operations
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
                      {product.dynamicBalance && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Dynamic Balance:</span>
                          <span className="text-gray-900">{product.dynamicBalance}</span>
                        </div>
                      )}
                      {product.specialFeature && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Special Feature:</span>
                          <span className="text-gray-900">{product.specialFeature}</span>
                        </div>
                      )}
                      {product.description && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-600 line-clamp-3">{product.description}</p>
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
                <h3 className="text-xl font-bold mb-4 text-gray-800">Compatible Materials</h3>
                <ul className="space-y-2">
                  {compatibleMaterials.map((material, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{material}</span>
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
                  <h3 className="text-lg font-medium text-yellow-800">Critical Usage Precautions</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p className="mb-2">
                      For all collet-based models, the cutting tool shank <strong>must</strong> be inserted to a depth that extends beyond the collet bore's effective clamping length to prevent improper locking and potential damage.
                    </p>
                    <p>
                      Always use the correct, designated wrench for installation and clamping to ensure proper torque application and safety.
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
                The main function of the Strong Tool Holder system is <strong>to provide the maximum possible clamping force and rigidity for heavy-duty and high-torque milling and drilling operations</strong>. By utilizing advanced mechanical advantages like needle bearings and slotted bores, it ensures absolute process security, prevents tool slippage, minimizes vibration, and extends tool life under the most demanding cutting conditions.
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
                <h3 className="font-bold mb-2">ADS Pull-Back</h3>
                <p className="text-sm text-gray-600 mb-4">Pull-back tool holders with superior stability</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready for Heavy-Duty Machining Excellence?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our technical experts to find the perfect Strong Tool Holder solution for your most demanding machining applications.
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