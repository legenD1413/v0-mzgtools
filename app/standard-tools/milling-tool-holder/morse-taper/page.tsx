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
      name: "BT-MTA Morse Taper Holder",
      image: "/images/bt-mta-holder.png",
      description: "Standard BT spindle holder for Tang-type Morse taper tools",
      series: "BT-MTA Series",
      interface: "BT30/40/50",
      standard: "DIN 228-B",
      concentricity: "Within 0.015mm",
      application: "Tang-type Morse taper tools on BT machines",
      pageNumber: "BT-MTA",
    },
    {
      id: "morse-taper-002",
      name: "BT-MTB Morse Taper Holder",
      image: "/images/bt-mtb-holder.png",
      description: "Standard BT spindle holder for Pull-rod-type Morse taper tools",
      series: "BT-MTB Series",
      interface: "BT30/40/50",
      standard: "DIN 228-A",
      concentricity: "Within 0.015mm",
      application: "Pull-rod-type Morse taper tools on BT machines",
      pageNumber: "BT-MTB",
    },
    {
      id: "morse-taper-003",
      name: "NT/MTA Morse Taper Holder",
      image: "/images/nt-mta-holder.png",
      description: "NT spindle holder for Tang-type tools with high precision",
      series: "NT/MTA Series",
      interface: "NT30/40/50",
      standard: "DIN 228-B",
      concentricity: "Within 0.005mm",
      application: "High-precision Tang-type tools on NT machines",
      pageNumber: "NT-MTA",
    },
    {
      id: "morse-taper-004",
      name: "DAT/MTA Morse Taper Holder",
      image: "/images/dat-mta-holder.png",
      description: "DAT spindle holder for Tang-type Morse taper tools",
      series: "DAT/MTA Series",
      interface: "DAT30/40/50",
      standard: "DIN 228-B",
      concentricity: "Within 0.015mm",
      application: "Tang-type tools on DAT interface machines",
      pageNumber: "DAT-MTA",
    },
    {
      id: "morse-taper-005",
      name: "HSK/MTA High-Speed Morse Taper Holder",
      image: "/images/hsk-mta-holder.png",
      description: "High-precision HSK holder for modern machining centers",
      series: "HSK/MTA Series",
      interface: "HSK40A/50A/63A/100A",
      standard: "DIN 228-B",
      concentricity: "Within 0.005mm",
      balance: "G2.5 @ 25000 RPM",
      application: "High-speed precision machining centers",
      pageNumber: "HSK-MTA",
    },
    {
      id: "morse-taper-006",
      name: "MT1-MT2 Morse Taper Sleeve",
      image: "/images/mt1-mt2-sleeve.png",
      description: "Adapter sleeve for increasing taper size from MT1 to MT2",
      series: "MT Sleeve Series",
      interface: "MT1 to MT2",
      material: "High-grade tool steel",
      treatment: "Complete quenching",
      application: "Adapting smaller MT1 tools to MT2 spindles",
      pageNumber: "MT1-MT2",
    },
    {
      id: "morse-taper-007",
      name: "MT2-MT3 Morse Taper Sleeve",
      image: "/images/mt2-mt3-sleeve.png",
      description: "Adapter sleeve for increasing taper size from MT2 to MT3",
      series: "MT Sleeve Series",
      interface: "MT2 to MT3",
      material: "High-grade tool steel",
      treatment: "Complete quenching",
      application: "Adapting smaller MT2 tools to MT3 spindles",
      pageNumber: "MT2-MT3",
    },
    {
      id: "morse-taper-008",
      name: "R8/MT Adapter Sleeve",
      image: "/images/r8-mt-sleeve.png",
      description: "Connects Morse taper tools to R8 spindle machines",
      series: "R8/MT Series",
      interface: "R8 to MT",
      material: "High-grade tool steel",
      treatment: "Precision grinding",
      application: "Using MT tools on R8 spindle machines",
      pageNumber: "R8-MT",
    },
    {
      id: "morse-taper-009",
      name: "Morse Transfer Toolholder",
      image: "/images/morse-transfer-holder.png",
      description: "General-purpose converter for various applications",
      series: "Transfer Series",
      interface: "Multiple configurations",
      material: "High-grade tool steel",
      treatment: "Complete quenching",
      application: "General-purpose Morse taper conversions",
      pageNumber: "MT-TRANS",
    },
    {
      id: "morse-taper-010",
      name: "Reduction Sleeve Adapter",
      image: "/images/reduction-sleeve.png",
      description: "Variable diameter adjustment for different tool sizes",
      series: "Reduction Series",
      interface: "Various diameter combinations",
      material: "High-grade tool steel",
      treatment: "Precision grinding",
      application: "Diameter adjustments for tool compatibility",
      pageNumber: "RED-SLEEVE",
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
          <div className="relative container mx-auto px-4 py-20 md:py-28">
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
                    The performance of a Morse Taper Tool Holder is defined by its <strong>precision, the immense clamping force generated by the taper lock, its durability, and its unparalleled versatility</strong> through a system of adapters and sleeves. Many holder models can maintain a <strong>concentricity within 0.015mm</strong>, ensuring that the drill or reamer rotates perfectly on its central axis. For even more demanding applications, select adapters (like NT/MTA and HSK/MTA) boast a <strong>true roundness controlled to an exceptional 0.005mm</strong>.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The core performance feature of the Morse taper is its <strong>self-locking nature</strong>. Once a tool is seated correctly—often with a firm tap from a copper hammer—the friction across the large contact area of the taper creates a powerful mechanical lock. The system offers two primary clamping styles: the <strong>MTA (DIN 228-B TANG type)</strong> for flat-tailed drills and the <strong>MTB (DIN 228-A Pull rod type)</strong> for tools designed to be drawn into the holder.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    These tool holders are constructed from <strong>high-grade tool steel</strong> and subjected to a rigorous manufacturing process that includes <strong>complete quenching and precision grinding</strong>. The Morse taper system's greatest strength lies in its modularity. <strong>Morse Taper Sleeves</strong> adapt smaller tapers to larger ones, <strong>R8/MT Sleeves</strong> connect Morse taper tools to popular R8 spindle machines, ensuring virtually any Morse taper tool can be utilized on any machine.
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
                        <strong>Concentricity:</strong> 0.015mm (0.005mm select)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Standards:</strong> DIN 228-A/B
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material:</strong> High-grade tool steel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Interfaces:</strong> BT, NT, DAT, HSK, R8
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> High-Torque Drilling & Reaming
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
                      {product.interface && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Interface:</span>
                          <span className="text-gray-900">{product.interface}</span>
                        </div>
                      )}
                      {product.standard && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Standard:</span>
                          <span className="text-gray-900 text-xs">{product.standard}</span>
                        </div>
                      )}
                      {product.concentricity && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Concentricity:</span>
                          <span className="text-gray-900 text-xs">{product.concentricity}</span>
                        </div>
                      )}
                      {product.balance && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Balance:</span>
                          <span className="text-gray-900 text-xs">{product.balance}</span>
                        </div>
                      )}
                      {product.material && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Material:</span>
                          <span className="text-gray-900 text-xs">{product.material}</span>
                        </div>
                      )}
                      {product.treatment && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Treatment:</span>
                          <span className="text-gray-900 text-xs">{product.treatment}</span>
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

              {/* Morse Taper Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Morse Taper Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {morseTaperOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Equipment */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Compatible Equipment
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {compatibleEquipment.map((equipment, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{equipment}</span>
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