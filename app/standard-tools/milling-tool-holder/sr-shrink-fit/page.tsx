import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Thermometer, Wrench } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function SRShrinkFitPage() {
  // Product data for SR Shrink Fit Tool Holders
  const products = [
    {
      id: "sr-001",
      name: "SR Thick-walled Standard",
      image: "/images/sr-thick-walled.png",
      description: "Standard robust design for general-purpose high-performance use",
      series: "SR",
      application: "General high-performance machining, heavy-duty cutting",
      clamping: "Thermal expansion",
      pageNumber: "S11",
    },
    {
      id: "sr-002", 
      name: "SRS Thin-walled",
      image: "/images/srs-thin-walled.png",
      description: "Thinner walls for improved clearance and extended reach",
      series: "SRS",
      application: "Complex machining areas, extended reach applications",
      clamping: "Thermal expansion",
      pageNumber: "S12",
    },
    {
      id: "sr-003",
      name: "SRC Strong Type", 
      image: "/images/src-strong-type.png",
      description: "Engineered for increased clamping strength for heavy-duty cutting",
      series: "SRC",
      application: "Heavy-duty cutting, maximum clamping force",
      clamping: "Enhanced thermal",
      pageNumber: "S13",
    },
    {
      id: "sr-004",
      name: "SRV Enhanced Type",
      image: "/images/srv-enhanced.png", 
      description: "Performance enhancements for the most demanding applications",
      series: "SRV",
      application: "Most demanding applications, ultra-precision",
      clamping: "Advanced thermal",
      pageNumber: "S14",
    },
    {
      id: "sr-005",
      name: "SW-SRS Tungsten Carbide Extension",
      image: "/images/sw-srs-extension.png",
      description: "Tungsten carbide anti-vibration extension rod",
      series: "SW-SRS",
      application: "Long-reach applications, maximum rigidity",
      clamping: "Thermal + Anti-vibration",
      pageNumber: "S15",
    },
    {
      id: "sr-006",
      name: "ST-SRS Steel Extension",
      image: "/images/st-srs-extension.png",
      description: "High-performance steel extension rod",
      series: "ST-SRS", 
      application: "Extended reach, high-performance steel",
      clamping: "Thermal expansion",
      pageNumber: "S16",
    },
    {
      id: "sr-007",
      name: "BBT Dual-Contact SR",
      image: "/images/bbt-dual-contact.png",
      description: "Dual-contact design for enhanced rigidity",
      series: "BBT-SR",
      application: "Enhanced rigidity, dual-contact interface",
      clamping: "Thermal + Dual contact", 
      pageNumber: "S17",
    },
    {
      id: "sr-008",
      name: "HSK Shrink Fit Series",
      image: "/images/hsk-shrink-fit.png",
      description: "Comprehensive HSK range for various applications",
      series: "HSK-SR",
      application: "HSK interface applications, high-speed machining",
      clamping: "Thermal expansion",
      pageNumber: "S18",
    },
  ]

  // Performance features based on the provided content
  const performanceFeatures = [
    {
      title: "Extreme Rigidity & Clamping Force",
      description: "Thermal clamping creates powerful, uniform 360-degree grip with monolithic rigidity for maximum stability during cutting.",
      icon: "Shield",
    },
    {
      title: "High Precision & Run-out Accuracy",
      description: "Eliminates intermediate elements like collets, achieving exceptional accuracy critical for high-speed machining and tight tolerances.",
      icon: "Target",
    },
    {
      title: "Enhanced Stability & Tool Life",
      description: "Immense rigidity minimizes micro-vibrations, leading to stable cutting performance and significantly increased tool life.",
      icon: "Zap",
    },
  ]

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Zap":
        return <Zap className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      case "Thermometer":
        return <Thermometer className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Industries served
  const industries = [
    "Mold & Die Industry",
    "Aerospace Manufacturing",
    "Automotive Industry",
    "Precision Engineering",
    "High-Speed Machining Centers",
    "Tool & Die Making",
    "Medical Device Manufacturing",
    "Advanced Materials Processing",
  ]

  // Applications
  const applications = [
    "High-Speed Milling (HSM)",
    "Heavy-Duty Roughing",
    "Precision Finishing",
    "Deep Cavity Milling",
    "Precision Drilling & Reaming",
    "PCD Milling Operations",
    "Solid Carbide Milling",
    "Complex Geometry Machining",
  ]

  // Compatible tools
  const compatibleTools = [
    "Drills",
    "Reamers",
    "PCD Milling Cutters",
    "Solid Carbide Milling Cutters",
    "High-Performance End Mills",
    "Precision Boring Tools",
    "Complex Geometry Tools",
    "Specialty Cutting Tools",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Thermal Clamping Principle",
      description:
        "Heating expands the bore for tool insertion, cooling contracts and shrinks around tool shank creating powerful 360-degree uniform clamp.",
      color: "border-red-600",
    },
    {
      title: "Design Variations",
      description:
        "Multiple designs available: Thick-walled (SR), Thin-walled (SRS), Strong Type (SRC), and Enhanced Type (SRV) for specific applications.",
      color: "border-blue-600",
    },
    {
      title: "Extension Rod Options",
      description:
        "Tungsten Carbide Anti-Vibration (SW-SRS) and Special Steel (ST-SRS) extension rods for long-reach applications.",
      color: "border-green-600",
    },
  ]

  // Heating machines specifications
  const heatingMachines = [
    {
      model: "H2800",
      description: "Compact, cost-effective AC 220V machine",
      capacity: "φ3-φ12mm",
      features: "Basic heating functionality",
    },
    {
      model: "H2800A",
      description: "Versatile model with wider heating capacity",
      capacity: "φ3-φ20mm", 
      features: "Enhanced heating range",
    },
    {
      model: "FAX-15",
      description: "Fully Automatic Intelligent Water-Cooled",
      capacity: "Advanced system",
      features: "2s heating, 15s cooling, 24h operation",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Shrink Fit Tool Holder System" },
    { label: "Clamping Principle", value: "Thermal Expansion & Contraction" },
    { label: "Design Variations", value: "SR, SRS, SRC, SRV" },
    { label: "Extension Options", value: "SW-SRS, ST-SRS" },
    { label: "Taper Interfaces", value: "BT, BBT, ISO, HSK, Straight Shank" },
    { label: "HSK Forms", value: "HSK32E, HSK40E, HSK50E, HSK63A, HSK100A" },
    { label: "Heating Equipment", value: "H2800, H2800A, FAX-15" },
    { label: "Key Advantage", value: "Extreme Rigidity & Precision" },
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
                  Thermal Clamping Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  SR Shrink Fit Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Comprehensive technical overview of the Shrink Fit Tool Holder System (SR). Engineered around thermal expansion principles, delivering extremely rigid, high-precision connections between cutting tools and machine spindles with exceptional clamping force.
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
                    src="/images/sr-shrink-fit-system.png"
                    alt="SR Shrink Fit Tool Holder System"
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
                    The core performance characteristics of the Shrink Fit system are derived directly from its unique thermal clamping method. The system operates by heating the tool holder bore, which expands to allow tool insertion. As it cools, the holder contracts and shrinks around the tool shank, creating a <strong>powerful, uniform 360-degree clamp</strong>. This monolithic grip is exceptionally rigid, providing superior clamping force that ensures maximum stability during cutting.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    This rigid, concentric clamping inherently results in <strong>excellent run-out precision</strong>. By eliminating the need for intermediate elements like collets or screws, the system achieves a very high level of accuracy, which is critical for high-speed machining and applications requiring tight dimensional tolerances. This accuracy is preserved through the use of advanced heating machines that prevent carbon deposition and ensure consistent clamping.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The immense rigidity of the shrink fit connection significantly minimizes micro-vibrations at the cutting edge. This leads to exceptionally stable cutting performance and a marked reduction in chatter. As a direct result, <strong>tool life is increased</strong>, and superior workpiece surface finishes are achieved. The system is highly effective for diverse cutting tools, including drills, reamers, PCD milling cutters, and solid carbide milling cutters.
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
                        <strong>Clamping:</strong> Thermal Expansion
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Rigidity:</strong> Extreme Monolithic Grip
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Precision:</strong> High Run-out Accuracy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Stability:</strong> Minimal Vibrations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Versatility:</strong> Wide Tool Range
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
                      {product.clamping && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Clamping:</span>
                          <span className="text-gray-900">{product.clamping}</span>
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

          {/* Heating Machines */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Supporting Equipment - Heating Machines</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {heatingMachines.map((machine, index) => (
                <div key={index} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Thermometer className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold">{machine.model}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{machine.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Capacity:</span>
                      <span className="text-gray-900">{machine.capacity}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm text-gray-600">{machine.features}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Critical Usage Precaution</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      The cutting tool's shank <strong>must</strong> be inserted to a depth that extends beyond the bore's effective clamping length to prevent damage to the holder during the clamping process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Scenarios */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios & Processing</h2>
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

              {/* Applications */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Application Processing
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Tools */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Wrench className="h-5 w-5 text-red-600 mr-2" />
                  Compatible Tools
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {compatibleTools.map((tool, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{tool}</span>
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
              <h2 className="text-3xl font-bold">Main Function</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">Primary Function</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      The main function of the Shrink Fit Tool Holder System is <strong>to provide an exceptionally rigid, highly accurate, and balanced connection between the cutting tool and the spindle via thermal clamping.</strong> This method maximizes stability, reduces vibration, and ensures concentricity, making it an indispensable solution for high-performance and high-precision machining operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Thermal Clamping Technology",
                  description: "Heating expands bore for tool insertion, cooling creates powerful 360-degree uniform clamp with monolithic rigidity.",
                  icon: <Thermometer className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Extreme Rigidity",
                  description: "Monolithic grip provides superior clamping force ensuring maximum stability during cutting operations.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High Precision Accuracy",
                  description: "Eliminates intermediate elements achieving exceptional run-out precision critical for high-speed machining.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Vibration Minimization",
                  description: "Immense rigidity significantly minimizes micro-vibrations leading to stable cutting and reduced chatter.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Extended Tool Life",
                  description: "Superior stability and reduced vibrations result in increased tool life and superior workpiece surface finishes.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Applications",
                  description: "Effective for diverse cutting tools including drills, reamers, PCD milling cutters, and solid carbide tools.",
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
                  title: "SK High Speed",
                  image: "/images/sk-high-speed.jpg",
                  description: "High-speed precision tool holders with SK collet system",
                  url: "/standard-tools/milling-tool-holder/sk-high-speed",
                },
                {
                  title: "HM Hydraulic",
                  image: "/images/hm-hydraulic.jpg", 
                  description: "Hydraulic tool holders for ultra-high precision",
                  url: "/standard-tools/milling-tool-holder/hm-hydraulic",
                },
                {
                  title: "ER Tool Holder",
                  image: "/images/er-tool-holder.jpg",
                  description: "Versatile ER collet system tool holders",
                  url: "/standard-tools/milling-tool-holder/er-tool-holder",
                },
                {
                  title: "Power Tool Holder",
                  image: "/images/power-tool-holder.jpg",
                  description: "Heavy-duty tool holders for demanding applications",
                  url: "/standard-tools/milling-tool-holder/power-tool-holder",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Tool Holders" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Extreme Rigidity Thermal Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal shrink fit tool holders and heating equipment for your specific applications. From thermal clamping technology to precision machining, we provide comprehensive shrink fit solutions.
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