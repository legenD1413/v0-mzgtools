import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function OZToolHolderPage() {
  // Product data based on the OZ Tool Holder system
  const products = [
    {
      id: "oz-001",
      name: "OZ25 Collet Chuck Kit - 7 Piece Set",
      image: "/images/oz25-7piece.png",
      description: "Metric collet chuck kit with 7 essential sizes for general applications",
      series: "OZ25 Series",
      sizes: "6, 8, 10, 12, 16, 20, 25mm",
      application: "General heavy-duty cutting operations with standard tool sizes",
      pageNumber: "OZ25-7",
    },
    {
      id: "oz-002",
      name: "OZ25 Collet Chuck Kit - 15 Piece Set",
      image: "/images/oz25-15piece.png",
      description: "Comprehensive metric collet chuck kit with incremental size stepping",
      series: "OZ25 Series",
      sizes: "3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 18, 20, 25mm",
      application: "Maximum flexibility for non-standard and reground tool shanks",
      pageNumber: "OZ25-15",
    },
    {
      id: "oz-003",
      name: "OZ32 Collet Chuck Kit - 8 Piece Set",
      image: "/images/oz32-8piece.png",
      description: "Heavy-duty collet chuck kit for larger diameter tools",
      series: "OZ32 Series",
      sizes: "6, 8, 10, 12, 16, 20, 25, 32mm",
      application: "Large diameter tool operations and heavy material removal",
      pageNumber: "OZ32-8",
    },
    {
      id: "oz-004",
      name: "OZ32 Collet Chuck Kit - 15 Piece Set",
      image: "/images/oz32-15piece.png",
      description: "Complete heavy-duty collet chuck kit with comprehensive size range",
      series: "OZ32 Series",
      sizes: "6, 8, 10, 12, 13, 14, 15, 16, 18, 20, 22, 25, 26, 30, 32mm",
      application: "Maximum versatility for heavy-duty operations with various tool sizes",
      pageNumber: "OZ32-15",
    },
    {
      id: "oz-005",
      name: "NT Interface OZ Tool Holder",
      image: "/images/oz-nt.png",
      description: "National Taper interface for traditional milling machines",
      series: "NT Series",
      interface: "NT30/40/50",
      application: "Traditional turret mills and manual machining centers",
      pageNumber: "NT-OZ",
    },
    {
      id: "oz-006",
      name: "MTB Interface OZ Tool Holder",
      image: "/images/oz-mtb.png",
      description: "Morse Taper with Tang Drive for secure connection",
      series: "MTB Series",
      interface: "MTB4/5",
      application: "Morse taper machines with tang drive requirements",
      pageNumber: "MTB-OZ",
    },
    {
      id: "oz-007",
      name: "R8 Interface OZ Tool Holder",
      image: "/images/oz-r8.png",
      description: "R8 interface for Bridgeport-style milling machines",
      series: "R8 Series",
      interface: "R8",
      application: "Bridgeport and compatible milling machines",
      pageNumber: "R8-OZ",
    },
    {
      id: "oz-008",
      name: "BT Interface OZ Tool Holder",
      image: "/images/oz-bt.png",
      description: "Battle Creek Taper interface for CNC machining centers",
      series: "BT Series",
      interface: "BT30/40/50",
      application: "Modern CNC machining centers and automated systems",
      pageNumber: "BT-OZ",
    },
    {
      id: "oz-009",
      name: "SK Interface OZ Tool Holder",
      image: "/images/oz-sk.png",
      description: "Steep Taper interface for European machine tools",
      series: "SK Series",
      interface: "SK30/40/50",
      application: "European CNC machines and high-precision applications",
      pageNumber: "SK-OZ",
    },
    {
      id: "oz-010",
      name: "CAT Interface OZ Tool Holder",
      image: "/images/oz-cat.png",
      description: "Caterpillar Taper interface for American machine tools",
      series: "CAT Series",
      interface: "CAT30/40/50",
      application: "American CNC machines and heavy-duty operations",
      pageNumber: "CAT-OZ",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Exceptional Robustness",
      description:
        "Engineered specifically for heavy-duty cutting operations with superior clamping integrity and durability under high cutting forces and torque.",
    },
    {
      icon: "Target",
      title: "Broad Machine Compatibility",
      description:
        "Supports NT, MTB, R8, BT, SK, and CAT tapers, providing exceptional adaptability across diverse machinery from manual mills to modern CNC centers.",
    },
    {
      icon: "Zap",
      title: "Comprehensive Kit Solutions",
      description:
        "Extensive OZ25 and OZ32 collet chuck kits with incremental size stepping ensure maximum flexibility for various tool shanks and applications.",
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
    "General Metal Fabrication",
    "Repair Shops",
    "Traditional Machine Shops",
    "CNC Machining Centers",
    "Manual Turret Mills",
  ]

  // Heavy-duty operations
  const heavyDutyOperations = [
    "Heavy Roughing Operations",
    "Deep Axial and Radial Cuts",
    "Face Milling with Shell Mills",
    "Large Diameter End Mill Operations",
    "High Stock Removal",
    "Drilling with Large Drills",
    "Boring Head Operations",
    "High-Torque Milling",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "General Steels",
    "Stainless Steels",
    "Cast Iron",
    "Tool Steels",
    "Aluminum Alloys",
    "Copper Alloys",
    "Heat-Resistant Materials",
    "High-Strength Alloys",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Universal Interface Support",
      description:
        "Comprehensive support for NT, MTB, R8, BT, SK, and CAT tapers enables deployment across vast spectrum of machinery from legacy to modern CNC systems.",
      color: "border-red-600",
    },
    {
      title: "Robust Collet System",
      description:
        "OZ25 and OZ32 collet series provide secure clamping for tools from 3mm to 32mm diameter with incremental size stepping for maximum flexibility.",
      color: "border-blue-600",
    },
    {
      title: "Pull Rod Compatibility",
      description:
        "Supports both metric (M12, M16, M24) and imperial (1/2\"-12, 5/8\"-11, 1\"-8, 7/16\"-20) pull rod specifications for secure machine integration.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "System Designation", value: "OZ Heavy Duty Cutting Tool Holder" },
    { label: "Primary Collet Series", value: "OZ25, OZ32" },
    { label: "Interface Types", value: "NT, MTB, R8, BT, SK, CAT" },
    { label: "Metric Pull Rod Threads", value: "M12×1.75P, M16×2.0P, M24×3.0P" },
    { label: "Imperial Pull Rod Threads", value: "1/2\"-12, 5/8\"-11, 1\"-8, 7/16\"-20" },
    { label: "OZ25 Size Range", value: "3-25mm (15-piece set)" },
    { label: "OZ32 Size Range", value: "6-32mm (15-piece set)" },
    { label: "Application Focus", value: "Heavy-Duty Cutting Operations" },
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
                  OZ Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the OZ Tool Holder system, also known as the OZ Heavy Duty Cutting Tool Holder . This system is engineered specifically for demanding, high-load machining operations where rigidity, robust clamping, and process security are the primary requirements.
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
                    src="/images/oz-tool-holder-hero.png"
                    alt="OZ Heavy Duty Tool Holder System Collection"
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
                    The performance of the OZ Tool Holder system is centered on delivering <strong>strength and reliability for aggressive machining tasks</strong>. Its design philosophy prioritizes durability and clamping integrity over the high-speed characteristics found in other systems. The fundamental performance characteristic is its suitability for heavy-duty applications, where the entire holder is designed to withstand high cutting forces and torque generated during roughing, deep slotting, and large-diameter tool usage.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    A key performance advantage is its <strong>exceptional range of available interfaces</strong>. With support for NT, MTB, R8, BT, SK, and CAT tapers, the OZ system can be deployed across a vast spectrum of machinery, from older manual turret mills to modern CNC machining centers. This makes it a highly adaptable solution for workshops with diverse equipment, ensuring stable and secure machining while reducing the risk of tool slippage under load.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The availability of extensive <strong>OZ25 and OZ32 Collets Chuck Kits</strong> significantly enhances operational performance. These kits provide a wide range of collet sizes in a single package, ensuring that operators have the correct size on hand for various jobs without delay. The 15-piece sets, with incremental size stepping, offer unparalleled flexibility for clamping non-standard or reground tool shanks, maximizing tool utilization and operational efficiency.
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
                        <strong>Interface Types:</strong> NT, MTB, R8, BT, SK, CAT
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Collet Series:</strong> OZ25, OZ32
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Size Range:</strong> 3-32mm (Comprehensive)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Pull Rod:</strong> Metric & Imperial Options
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
                      {product.sizes && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Sizes:</span>
                          <span className="text-gray-900 text-xs">{product.sizes}</span>
                        </div>
                      )}
                      {product.interface && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Interface:</span>
                          <span className="text-gray-900">{product.interface}</span>
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

              {/* Heavy-Duty Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Heavy-Duty Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {heavyDutyOperations.map((operation, index) => (
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
                  {compatibleMaterials.map((material, index) => (
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
                  title: "Supreme Robustness",
                  description: "Engineered to provide maximum clamping force and rigidity for heavy-duty and high-torque milling operations, ensuring absolute process security.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Universal Machine Compatibility",
                  description: "Supports NT, MTB, R8, BT, SK, and CAT tapers, enabling deployment across vast spectrum of machinery from legacy to modern CNC systems.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Comprehensive Kit Solutions",
                  description: "OZ25 and OZ32 collet chuck kits provide wide range of sizes with incremental stepping for maximum operational flexibility.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Secure Machine Integration",
                  description: "Supports both metric and imperial pull rod specifications ensuring perfect, secure connection between tool holder and machine drawbar.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High Stock Removal",
                  description: "Optimized for operations where primary goal is to remove large volume of material quickly and efficiently with maximum reliability.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Tool Utilization Maximization",
                  description: "Incremental size stepping in 15-piece sets ensures optimal clamping for non-standard and reground tool shanks, maximizing tool life.",
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
                The main function of the OZ Tool Holder system is <strong>to provide a supremely robust and reliable clamping solution engineered specifically for heavy-duty cutting and high-torque milling operations</strong>. It ensures process security under significant load and offers maximum compatibility across a wide range of new and legacy machine tools, making it a foundational component for powerful and efficient metal removal.
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
                  title: "Strong Tool Holders",
                  image: "/images/strong-tool-holders.jpg",
                  description: "Heavy-duty tool holders with maximum clamping force",
                  url: "/standard-tools/milling-tool-holder/power-tool-holder",
                },
                {
                  title: "SK High Speed",
                  image: "/images/sk-high-speed.jpg", 
                  description: "High-precision tool holders for demanding applications",
                  url: "/standard-tools/milling-tool-holder/sk-high-speed",
                },
                {
                  title: "HM Hydraulic",
                  image: "/images/hm-hydraulic.jpg",
                  description: "Hydraulic expansion tool holders for maximum precision",
                  url: "/standard-tools/milling-tool-holder/hm-hydraulic",
                },
                {
                  title: "ER Tool Holders",
                  image: "/images/er-tool-holders.jpg",
                  description: "Versatile collet chuck systems for various applications",
                  url: "/standard-tools/milling-tool-holder/er-tool-holders",
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
              <h2 className="text-3xl font-bold mb-4">Need Heavy-Duty Tool Holding Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal OZ Tool Holder configuration for your specific heavy-duty machining applications, equipment compatibility, and operational requirements. From collet kit selection to pull rod specifications, we provide comprehensive solutions.
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