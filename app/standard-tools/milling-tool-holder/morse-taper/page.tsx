import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function MorseTaperPage() {
  // Product data based on the Morse Taper Tool Holder system
  const products = [
    {
      id: "morse-taper-001",
      name: "BT-MTA Milling Machine Tool Holder",
      image: "/images/c71-1.png",
      description: "Offers high precision with a 0.015mm concentricity, even with extended drills. It is suitable for flat tail Morse taper drills, designated as MTA (TANG type, DIN 228-B).",
      series: "BT-MTA Series",
      interface: "BT",
      standard: "DIN 228-B (TANG type)",
      concentricity: "0.015mm",
      application: "Flat tail Morse taper drills with high precision requirements",
      pageNumber: "C71",
    },
    {
      id: "morse-taper-002",
      name: "NT-MTA Milling Machine Tool Holder",
      image: "/images/c72-1.png",
      description: "Features hardened and precision ground inner and outer diameters, ensuring a 0.005mm roundness. It is an MTA (TANG type, DIN 228-B) tool holder.",
      series: "NT-MTA Series",
      interface: "NT",
      standard: "DIN 228-B (TANG type)",
      concentricity: "0.005mm roundness",
      material: "Hardened and precision ground",
      application: "High-precision flat tail Morse taper operations",
      pageNumber: "C72",
    },
    {
      id: "morse-taper-003",
      name: "DAT-MTA Milling Machine Tool Holder",
      image: "/images/c73-1.png",
      description: "Provides high precision with a 0.015mm concentricity, making it suitable for flat tail Morse taper drills.",
      series: "DAT-MTA Series",
      interface: "DAT",
      standard: "DIN 228-B (TANG type)",
      concentricity: "0.015mm",
      application: "High-precision flat tail Morse taper drilling operations",
      pageNumber: "C73",
    },
    {
      id: "morse-taper-004",
      name: "HSK-MTA Milling Machine Tool Holder",
      image: "/images/c73-2.png",
      description: "Its rotation is balance-tested, maintaining a 0.005mm roundness. It is an MTA (TANG type, DIN 228-B) tool holder, suitable for flat tail Morse taper drills.",
      series: "HSK-MTA Series",
      interface: "HSK",
      standard: "DIN 228-B (TANG type)",
      concentricity: "0.005mm roundness",
      balance: "Balance-tested rotation",
      application: "High-speed flat tail Morse taper drilling with superior balance",
      pageNumber: "C73",
    },
    {
      id: "morse-taper-005",
      name: "MT Milling Machine Tool Holder",
      image: "/images/c74-1.png",
      description: "Designed to adapt between various Morse taper sizes.",
      series: "MT Adapter Series",
      interface: "Morse Taper",
      material: "High-grade tool steel",
      application: "Adaptation between various Morse taper sizes",
      pageNumber: "C74",
    },
    {
      id: "morse-taper-006",
      name: "R8-MT Milling Machine Tool Holder",
      image: "/images/c74-2.png",
      description: "A sleeve used to adapt an R8 spindle to accommodate Morse taper drills.",
      series: "R8-MT Adapter Series",
      interface: "R8 to Morse Taper",
      material: "Precision machined steel",
      application: "R8 spindle adaptation for Morse taper tools",
      pageNumber: "C74",
    },
    {
      id: "morse-taper-007",
      name: "BT-MTB Milling Machine Tool Holder",
      image: "/images/c75-1.png",
      description: "Delivers high precision with a 0.015mm concentricity, suitable for pull rod type (DIN 228-A) Morse taper drills.",
      series: "BT-MTB Series",
      interface: "BT",
      standard: "DIN 228-A (Pull rod type)",
      concentricity: "0.015mm",
      application: "Pull rod type Morse taper drilling operations",
      pageNumber: "C75",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Target",
      title: "Exceptional Precision",
      description:
        "Maintains concentricity within 0.015mm for most models, with high-precision adapters achieving 0.005mm true roundness for superior hole-making accuracy.",
    },
    {
      icon: "Shield",
      title: "Self-Locking Clamping",
      description:
        "Morse taper's self-locking nature creates powerful mechanical lock through friction, preventing tool slipping even under high torque drilling operations.",
    },
    {
      icon: "Layers",
      title: "Unmatched Versatility",
      description:
        "Comprehensive adapter system allows infinite combinations, ensuring virtually any Morse taper tool can be utilized on any machine interface.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Layers":
        return <Layers className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Industries served
  const industries = [
    "General Manufacturing",
    "Heavy Industry",
    "Automotive Industry",
    "Tool and Die Making",
    "Maintenance & Repair (MRO)",
    "Educational Training",
    "CNC Machining Centers",
    "Traditional Machine Shops",
  ]

  // Morse taper operations
  const morseTaperOperations = [
    "Drilling (Primary)",
    "Reaming Operations",
    "Tapping with Attachments",
    "Countersinking",
    "Counterboring",
    "Boring Operations",
    "Specialty Tool Holding",
    "High-Torque Applications",
  ]

  // Compatible equipment
  const compatibleEquipment = [
    "CNC Machining Centers",
    "Manual Milling Machines",
    "Lathe Tailstocks",
    "Radial Arm Drills",
    "Drill Presses",
    "Boring Machines",
    "Multi-Spindle Heads",
    "Specialty Drilling Equipment",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Precision Manufacturing Standards",
      description:
        "Concentricity within 0.015mm for standard models, with high-precision adapters achieving 0.005mm true roundness through complete quenching and precision grinding.",
      color: "border-red-600",
    },
    {
      title: "International Standard Compliance",
      description:
        "MTA (Tang type) conforms to DIN 228-B, MTB (Pull rod type) conforms to DIN 228-A, ensuring global compatibility and reliability.",
      color: "border-blue-600",
    },
    {
      title: "High-Performance Material Construction",
      description:
        "High-grade tool steel construction with complete quenching and precision internal/external grinding for superior durability and longevity.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Main Holder Types", value: "BT-MTA, BT-MTB, NT/MTA, DAT/MTA, HSK/MTA" },
    { label: "Standard Concentricity", value: "Within 0.015mm" },
    { label: "High-Precision Roundness", value: "0.005mm (Select models)" },
    { label: "Tang Type Standard", value: "DIN 228-B" },
    { label: "Pull Rod Type Standard", value: "DIN 228-A" },
    { label: "Material Construction", value: "High-grade tool steel" },
    { label: "Heat Treatment", value: "Complete quenching" },
    { label: "Balance Grade (HSK)", value: "G2.5 @ 25000 RPM" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-white text-gray-900">
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Tool Holder Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Morse Taper Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the Morse Taper Tool Holder system, a foundational and enduringly relevant category within the broader milling tool holder system. These holders are specifically engineered to interface with tools featuring a Morse taper shank—a standardized, self-locking taper recognized globally for its robust and reliable clamping.
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
                    src="/images/morse-taper-hero.png"
                    alt="Professional Morse Taper Tool Holder System Collection"
                    width={563}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
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
            <div className="flex items-center mb-12">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="prose prose-xs max-w-none">
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The performance of a Morse Taper Tool Holder is defined by its precision, the immense clamping force generated by the taper lock, its durability, and its unparalleled versatility through a system of adapters and sleeves. Many holder models can maintain a concentricity within 0.015mm, ensuring that the drill or reamer rotates perfectly on its central axis. For even more demanding applications, select adapters (like NT/MTA and HSK/MTA) boast a true roundness controlled to an exceptional 0.005mm.
                  </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The core performance feature of the Morse taper is its self-locking nature. Once a tool is seated correctly—often with a firm tap from a copper hammer—the friction across the large contact area of the taper creates a powerful mechanical lock. The system offers two primary clamping styles: the MTA (DIN 228-B TANG type) for flat-tailed drills and the MTB (DIN 228-A Pull rod type) for tools designed to be drawn into the holder.
                  </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      These tool holders are constructed from high-grade tool steel and subjected to a rigorous manufacturing process that includes complete quenching and precision grinding. The Morse taper system's greatest strength lies in its modularity. Morse Taper Sleeves adapt smaller tapers to larger ones, R8/MT Sleeves connect Morse taper tools to popular R8 spindle machines, ensuring virtually any Morse taper tool can be utilized on any machine.
                  </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                      <Info className="h-5 w-5 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Key Performance Indicators</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start py-2">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-3 shrink-0 mt-1" />
                      <div className="text-sm text-gray-700">
                        <span className="text-gray-900">Concentricity:</span> 0.015mm (0.005mm select)
                      </div>
                    </div>
                    <div className="flex items-start py-2">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-3 shrink-0 mt-1" />
                      <div className="text-sm text-gray-700">
                        <span className="text-gray-900">Standards:</span> DIN 228-A/B
                      </div>
                    </div>
                    <div className="flex items-start py-2">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-3 shrink-0 mt-1" />
                      <div className="text-sm text-gray-700">
                        <span className="text-gray-900">Material:</span> High-grade tool steel
                      </div>
                    </div>
                    <div className="flex items-start py-2">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-3 shrink-0 mt-1" />
                      <div className="text-sm text-gray-700">
                        <span className="text-gray-900">Interfaces:</span> BT, NT, DAT, HSK, R8
                      </div>
                    </div>
                    <div className="flex items-start py-2">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-3 shrink-0 mt-1" />
                      <div className="text-sm text-gray-700">
                        <span className="text-gray-900">Application:</span> High-Torque Drilling & Reaming
                      </div>
                    </div>
                  </div>
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
                      {product.description && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-600">{product.description}</p>
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
            <div className="flex items-center mb-12">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Specifications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="p-6 border-b border-gray-100/50">
                  <h3 className="text-xl font-semibold text-gray-900">Technical Specifications</h3>
                </div>
                <div className="p-6 space-y-6">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className={`border-l-4 ${spec.color} pl-6 py-3 bg-gray-50/50 rounded-r-xl hover:bg-gray-50 transition-colors duration-200`}>
                      <h4 className="font-semibold text-base mb-2 text-gray-900">{spec.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="p-6 border-b border-gray-100/50">
                  <h3 className="text-xl font-semibold text-gray-900">Specifications</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                  {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 px-4 bg-white rounded-xl hover:bg-gray-50/30 transition-colors duration-200">
                      <span className="font-medium text-sm text-gray-700">{spec.label}:</span>
                        <span className="text-sm text-right text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Technical Notes */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Important Technical Notes</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-blue-800">Installation Procedure</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        Installation involves <strong>aligning the flat tail (tang)</strong>, tapping with a soft hammer to seat, and using the pull rod or a gentle tap to release. Proper seating is critical for optimal performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Settings className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-yellow-800">Pull Rod Requirements</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        NT/MTA series requires <strong>pull rod thread confirmation</strong> upon ordering. Ensure compatibility between machine spindle and holder thread specifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Scenarios */}
          <div className="mb-16">
            <div className="flex items-center mb-12">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Industries Served */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/50 h-full hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                    <Settings className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Industries Served</h3>
                </div>
                <div className="space-y-1">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center py-1 group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Morse Taper Operations */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/50 h-full hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                    <Tool className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Morse Taper Operations</h3>
                </div>
                <div className="space-y-1">
                  {morseTaperOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1 group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Equipment */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/50 h-full hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                    <Info className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Compatible Equipment</h3>
                </div>
                <div className="space-y-1">
                  {compatibleEquipment.map((equipment, index) => (
                    <div key={index} className="flex items-center py-1 group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{equipment}</span>
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
                  title: "Exceptional Precision",
                  description: "Maintains concentricity within 0.015mm, with select models achieving 0.005mm true roundness for superior hole-making accuracy.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Self-Locking Clamping",
                  description: "Morse taper's friction-based self-locking mechanism creates powerful mechanical lock preventing tool slipping under high torque.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Superior Durability",
                  description: "High-grade tool steel construction with complete quenching and precision grinding ensures long operational life.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Universal Compatibility",
                  description: "Comprehensive adapter system enables use of virtually any Morse taper tool on any machine interface.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Torque Transmission",
                  description: "Robust taper design provides exceptional torque transmission for demanding drilling and reaming operations.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Modular System Design",
                  description: "Extensive range of sleeves and adapters provides infinite combinations for maximum versatility and cost-effectiveness.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
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

          {/* Main Function Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Main Function</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                The main function of the Morse Taper Tool Holder system is <strong>to provide a highly reliable, precise, and universally compatible bridge between tools with a Morse taper shank and the vast array of modern and traditional machine tool spindles</strong>. It leverages the powerful self-locking principle of the taper to deliver exceptional torque transmission for demanding hole-making operations, while a comprehensive system of adapters ensures maximum versatility and utility.
              </p>
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
                  title: "Face Milling",
                  image: "/images/face-milling.jpg",
                  description: "High-precision holders for large surface machining",
                  url: "/standard-tools/milling-tool-holder/face-milling",
                },
                {
                  title: "OZ Tool Holder",
                  image: "/images/oz-tool-holder.jpg", 
                  description: "Heavy-duty tool holders for high-load operations",
                  url: "/standard-tools/milling-tool-holder/oz-tool-holder",
                },
                {
                  title: "Tapping Tool Holder",
                  image: "/images/tapping-tool-holder.jpg",
                  description: "Specialized holders for internal threading operations",
                  url: "/standard-tools/milling-tool-holder/tapping-tool-holder",
                },
                {
                  title: "Drill Chuck",
                  image: "/images/drill-chuck.jpg",
                  description: "Precision chuck systems for drilling operations",
                  url: "/standard-tools/milling-tool-holder/drill-chuck",
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
              <h2 className="text-3xl font-bold mb-4">Need Reliable Morse Taper Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal Morse Taper Tool Holder configuration for your specific drilling, reaming, and high-torque applications. From precision requirements to machine compatibility, we provide comprehensive solutions for traditional and modern machining needs.
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