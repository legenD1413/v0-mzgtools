import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function DrillChuckPage() {
  // Product data based on the Drill Chuck Tool Holder system
  const products = [
    {
      id: "drill-chuck-001",
      name: "APU Milling Machine Tool Holder",
      image: "/images/C59-1.png",
      description: "An integrated drill chuck specifically for milling machine applications",
      series: "APU Series",
      connection: "Integrated Chuck",
      application: "Milling machine applications",
      pageNumber: "C59",
    },
    {
      id: "drill-chuck-002", 
      name: "JM Drill Chuck Milling Machine Tool Holder",
      image: "/images/C60-1.png",
      description: "An integrated drill chuck specifically for milling machine applications",
      series: "JM Series",
      connection: "Integrated Chuck",
      application: "Milling machine applications",
      pageNumber: "C60",
    },
    {
      id: "drill-chuck-003",
      name: "J Keyless Drill Chuck",
      image: "/images/C61-1.png", 
      description: "An automatic keyless drill chuck suitable for various clamping ranges",
      series: "J Series",
      connection: "Keyless Chuck",
      application: "Various clamping ranges",
      pageNumber: "C61",
    },
    {
      id: "drill-chuck-004",
      name: "J Spanner Drill Chuck",
      image: "/images/C62-1.png",
      description: "Suitable for medium and heavy duty drilling use. For milling machine, lathe, drill machine, CNC & wood working machine. High speed drilling can be performed for possessing high cutting power",
      series: "J Series",
      connection: "Spanner Chuck",
      application: "Medium & heavy duty drilling for CNC and woodworking machines",
      pageNumber: "C62",
    },
    {
      id: "drill-chuck-005",
      name: "Three-sided Milling Cutter Arbor (-XS)",
      image: "/images/C62-2.png",
      description: "An arbor specifically for three-sided milling cutters, including saw blade milling cutters",
      series: "Arbor Series",
      connection: "Three-sided Arbor",
      application: "Three-sided milling cutters and saw blade milling cutters",
      pageNumber: "C62",
    },
    {
      id: "drill-chuck-006",
      name: "Morse Taper Drill Chuck Arbors (MT/JT)",
      image: "/images/C63-1.png",
      description: "Arbors featuring a Morse taper, specifically designed for connecting drill chucks",
      series: "Arbor Series",
      connection: "MT/JT",
      application: "Morse taper drill chuck connections",
      pageNumber: "C63",
    },
    {
      id: "drill-chuck-007",
      name: "Cylindrical Drill Chuck Arbors (C/JT)",
      image: "/images/C63-2.png",
      description: "Arbors with cylindrical shanks, used for connecting drill chucks",
      series: "Arbor Series",
      connection: "C/JT",
      application: "Cylindrical shank drill chuck connections",
      pageNumber: "C63",
    },
    {
      id: "drill-chuck-008",
      name: "R8 Drill Chuck Arbors (R8/JT)",
      image: "/images/C63-3.png",
      description: "Arbors with an R8 taper, designed for connecting drill chucks",
      series: "Arbor Series",
      connection: "R8/JT",
      application: "R8 taper drill chuck connections",
      pageNumber: "C63",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Target",
      title: "High-Precision Performance",
      description:
        "APU series delivers exceptional accuracy with concentricity within 0.015mm, crucial for producing precisely located and sized holes even with extended-length drills.",
    },
    {
      icon: "Zap",
      title: "High-Speed & Heavy-Duty Capability",
      description:
        "JM series engineered for high-RPM environments while J31 series provides robust construction for medium and heavy-duty drilling operations.",
    },
    {
      icon: "Shield",
      title: "Versatile & Secure Clamping",
      description:
        "Reliable clamping mechanism with special wrench for firm locking ensures secure grip, preventing slippage during cutting operations.",
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
    "General Manufacturing",
    "Automotive Industry",
    "Aerospace Manufacturing",
    "Mold & Die Manufacturing",
    "Metal Fabrication",
    "Prototyping Shops",
    "CNC Machining Centers",
    "Woodworking Industry",
  ]

  // Drilling operations
  const drillingOperations = [
    "Precision Drilling",
    "Heavy-Duty Drilling",
    "High-Speed Drilling",
    "Light Milling Operations",
    "Reaming Operations",
    "Chamfering",
    "Countersinking",
    "Center Drilling",
  ]

  // Compatible tools
  const compatibleTools = [
    "Twist Drills",
    "Center Drills",
    "Reamers",
    "Straight-Shank End Mills",
    "Chamfer Tools",
    "Countersinks",
    "Spot Drills",
    "Step Drills",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Precision Engineering",
      description:
        "APU series maintains concentricity within 0.015mm even with extended-length drills, ensuring quality in demanding CNC applications.",
      color: "border-red-600",
    },
    {
      title: "Universal Interface Compatibility",
      description:
        "Comprehensive interface support including BT, SK, NT, HSK, CAT, ISO, and Straight Shank configurations for maximum machine compatibility.",
      color: "border-blue-600",
    },
    {
      title: "Adaptive Connection System",
      description:
        "Drill Chuck Arbors enable connection of separate chuck heads to various spindles (MT, R8), facilitating quick changes and maximizing equipment utilization.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Main Types", value: "APU, JM, J Series, Arbor Series" },
    { label: "Concentricity (APU)", value: "0.015mm" },
    { label: "Chuck Types", value: "Integrated, Keyless, Spanner" },
    { label: "Interface Types", value: "BT, SK, NT, HSK, CAT, ISO, C" },
    { label: "Arbor Connections", value: "MT/JT, R8/JT, C/JT, Three-sided" },
    { label: "Clamping Method", value: "Special Wrench + Hand Tightening" },
    { label: "Speed Rating", value: "High-Speed (JM Series)" },
    { label: "Applications", value: "Milling, Lathe, CNC, Woodworking" },
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
                  Drill Chuck Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the Drill Chuck Tool Holder system, a versatile and essential category within the milling tool holder family. These holders are specifically engineered to securely clamp drills, center drills, reamers, and other straight-shank rotating tools.
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
                    src="/images/drill-chuck-hero.png"
                    alt="Professional Drill Chuck Tool Holder System Collection"
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
                    The performance of a Drill Chuck Tool Holder system is defined by its accuracy, clamping strength, and adaptability to different operational demands. A key performance metric for modern drill chucks is their accuracy. The APU series stands out by delivering exceptional precision, maintaining a concentricity (runout) within 0.015mm. This level of accuracy is crucial for producing precisely located and sized holes.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The system is not limited to standard operations. The JM series is specifically designated as a high-speed product, engineered to perform reliably in high-RPM environments. Conversely, the J31 Spanner Drill Chuck is built for medium and heavy-duty drilling, providing the robust construction and powerful clamping force needed to withstand high torque and feed rates.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The core function of clamping is achieved with reliability. The mechanism, typically requiring a special wrench for final firm locking, ensures that the tool is held securely, preventing slippage during cutting. One of the system's most significant performance advantages is its vast compatibility with interfaces like BT, SK, NT, HSK, CAT, ISO, and Straight Shank (C), enabling direct mounting on nearly any milling machine or CNC center.
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
                        <strong>Concentricity:</strong> 0.015mm (APU Series)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Capacity:</strong> Up to 16mm (APU16)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Speed Rating:</strong> High-Speed (JM Series)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Interfaces:</strong> BT, SK, NT, HSK, CAT, ISO
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> Drilling & Light Milling
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
                      {(product as any).capacity && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Capacity:</span>
                          <span className="text-gray-900">{(product as any).capacity}</span>
                        </div>
                      )}
                      {(product as any).concentricity && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Concentricity:</span>
                          <span className="text-gray-900">{(product as any).concentricity}</span>
                        </div>
                      )}
                      {(product as any).type && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Type:</span>
                          <span className="text-gray-900">{(product as any).type}</span>
                        </div>
                      )}
                      {(product as any).features && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Features:</span>
                          <span className="text-gray-900">{(product as any).features}</span>
                        </div>
                      )}
                      {(product as any).connection && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Connection:</span>
                          <span className="text-gray-900">{(product as any).connection}</span>
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

          {/* Critical Operating Instructions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Critical Operating Instructions</h2>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Important Tool Insertion Requirements</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p className="mb-2">
                      <strong>Please insert the cutting tool handle completely after the cartridge, to ensure the handle part insertion into cartridge.</strong> Locks when the cutting tool is properly positioned and the handle diameter part is fully inserted.
                    </p>
                    <p className="mb-2">
                      <strong>Especially in trial situations, please confirm that the precision requirements are met.</strong> Verify concentricity and tool positioning before beginning operations.
                    </p>
                    <p>
                      <strong>When clamping the cutting tool, the cutting tool inserts the cartridge first, turns tight with the hand, finally uses the special spanner force to lock.</strong> This sequence ensures proper tool retention and optimal performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clamping and Removal Procedure */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Clamping and Removal Procedure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Tool className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-green-800">Detailed Clamping Procedure</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p className="mb-2">
                        1. <strong>Insert cutting tool handle completely into the cartridge</strong> - Ensure handle diameter part is fully inserted
                      </p>
                      <p className="mb-2">
                        2. <strong>Hand-tighten the chuck initially</strong> - Turn tight with hand to secure basic positioning
                      </p>
                      <p className="mb-2">
                        3. <strong>Use special spanner for final locking</strong> - Apply proper force to achieve firm lock
                      </p>
                      <p className="mb-2">
                        4. <strong>Confirm precision in trial situations</strong> - Verify runout and concentricity for critical applications
                      </p>
                      <p>
                        5. Validate tool positioning before starting operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Settings className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-blue-800">Removal Procedure</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p className="mb-2">
                        1. Align marks on the chuck
                      </p>
                      <p className="mb-2">
                        2. Gently tap with a hammer to loosen
                      </p>
                      <p className="mb-2">
                        3. Unscrew to remove the tool
                      </p>
                      <p>
                        4. Prevent tool from ejecting unexpectedly
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

              {/* Drilling Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Drilling Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {drillingOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Tools */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
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
              <h2 className="text-3xl font-bold">Primary Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "High-Precision Drilling",
                  description: "APU series maintains 0.015mm concentricity for precisely located and sized holes, even with extended-length drills.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Speed Operations",
                  description: "JM series engineered for high-RPM environments, providing reliable performance in demanding speed applications.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Heavy-Duty Capability",
                  description: "J31 series built for medium to heavy-duty drilling with robust construction and powerful clamping force.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Tool Clamping",
                  description: "Securely holds drills, reamers, center drills, and other straight-shank rotating tools with reliable grip.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Universal Machine Integration",
                  description: "Comprehensive interface support enables direct mounting on virtually any milling machine, CNC center, or lathe.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Adaptive Connection System",
                  description: "Drill Chuck Arbors facilitate quick changes and maximize equipment utilization across different spindle types.",
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

          {/* Main Function Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Main Function</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                The main function of the Drill Chuck Tool Holder system is <strong>to provide a secure, precise, and highly adaptable method for clamping straight-shank rotating tools, primarily for drilling and light milling operations</strong>. It bridges the gap between the machine spindle and the cutting tool, offering a range of solutions that cater to diverse requirements for precision, speed, clamping force, and machine compatibility.
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
                  title: "ER Tool Holders",
                  image: "/images/er-tool-holders.jpg",
                  description: "Versatile collet chuck systems for various applications",
                  url: "/standard-tools/milling-tool-holder/er-tool-holder",
                },
                {
                  title: "SK High Speed",
                  image: "/images/sk-high-speed.jpg", 
                  description: "High-precision tool holders for demanding applications",
                  url: "/standard-tools/milling-tool-holder/sk-high-speed",
                },
                {
                  title: "Tapping Tool Holders",
                  image: "/images/tapping-tool-holders.jpg",
                  description: "Specialized holders for internal threading operations",
                  url: "/standard-tools/milling-tool-holder/tapping-tool-holder",
                },
                {
                  title: "HM Hydraulic",
                  image: "/images/hm-hydraulic.jpg",
                  description: "Hydraulic expansion tool holders for maximum precision",
                  url: "/standard-tools/milling-tool-holder/hm-hydraulic",
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
              <h2 className="text-3xl font-bold mb-4">Need Precision Drilling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal Drill Chuck Tool Holder configuration for your specific drilling applications, precision requirements, and machine compatibility. From high-speed operations to heavy-duty drilling, we provide comprehensive solutions.
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