import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function TappingToolHolderPage() {
  // Product data based on the Tapping Tool Holder system
  const products = [
    {
      id: "tap-holder-001",
      name: "GTP Torsion Telescopic Tapping Holder",
      image: "/images/gtp-tapping-holder.png",
      description: "Provides both axial compensation and torque overload protection",
      series: "GTP Series",
      features: "Axial Compensation + Torque Protection",
      application: "Non-synchronous tapping with maximum protection",
      pageNumber: "GTP",
    },
    {
      id: "tap-holder-002",
      name: "G Flexible Telescopic Tapping Holder",
      image: "/images/g-tapping-holder.png",
      description: "Offers flexible axial compensation and protection",
      series: "G Series",
      features: "Flexible Axial Compensation + Protection",
      application: "General purpose tapping with compensation",
      pageNumber: "G",
    },
    {
      id: "tap-holder-003",
      name: "SVER Micro Telescopic Synchronous Holder",
      image: "/images/sver-tapping-holder.png",
      description: "Designed for high-speed synchronous tapping with minimal axial float",
      series: "SVER Series",
      features: "Micro Telescopic + High-Speed Synchronous",
      application: "High-speed synchronous tapping operations",
      pageNumber: "SVER",
    },
    {
      id: "tap-holder-004",
      name: "VER Micro Telescopic Tapping Holder",
      image: "/images/ver-tapping-holder.png",
      description: "Features fine axial compensation with protection for precision applications",
      series: "VER Series",
      features: "Fine Axial Compensation + Protection",
      application: "Precision tapping with micro compensation",
      pageNumber: "VER",
    },
    {
      id: "tap-holder-005",
      name: "TER Rigid Tapping Protection Holder",
      image: "/images/ter-tapping-holder.png",
      description: "Primarily for synchronous tapping with rigid connection and telescopic safety",
      series: "TER Series",
      features: "Rigid Connection + Telescopic Safety",
      application: "Synchronous tapping on modern CNC machines",
      pageNumber: "TER",
    },
    {
      id: "tap-holder-006",
      name: "FDG Radial Floating Tapping Holder",
      image: "/images/fdg-tapping-holder.png",
      description: "Provides compensation for radial (X-Y) misalignment",
      series: "FDG Series",
      features: "Radial Floating + Misalignment Compensation",
      application: "Correcting spindle-to-hole misalignment",
      pageNumber: "FDG",
    },
    {
      id: "tap-holder-007",
      name: "BT Interface Tapping Holder",
      image: "/images/bt-tapping-holder.png",
      description: "Battle Creek Taper interface for CNC machining centers",
      series: "BT Series",
      interface: "BT30/40/50",
      application: "Modern CNC machining centers",
      pageNumber: "BT-TAP",
    },
    {
      id: "tap-holder-008",
      name: "HSK Interface Tapping Holder",
      image: "/images/hsk-tapping-holder.png",
      description: "HSK interface for high-speed machining applications",
      series: "HSK Series",
      interface: "HSK50A/63A/100A",
      application: "High-speed machining centers",
      pageNumber: "HSK-TAP",
    },
    {
      id: "tap-holder-009",
      name: "CAT Interface Tapping Holder",
      image: "/images/cat-tapping-holder.png",
      description: "Caterpillar Taper interface for American machine tools",
      series: "CAT Series",
      interface: "CAT30/40/50",
      application: "American CNC machines and machining centers",
      pageNumber: "CAT-TAP",
    },
    {
      id: "tap-holder-010",
      name: "NT Interface Tapping Holder",
      image: "/images/nt-tapping-holder.png",
      description: "National Taper interface for traditional milling machines",
      series: "NT Series",
      interface: "NT30/40/50",
      application: "Traditional milling and drilling machines",
      pageNumber: "NT-TAP",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Intelligent Protection",
      description:
        "Advanced mechanical features including axial compensation, torque overload protection, and radial floating to safeguard taps and ensure process security.",
    },
    {
      icon: "Target",
      title: "Precision Compensation",
      description:
        "Telescopic and floating mechanisms compensate for synchronization errors and misalignment, ensuring accurate thread production and preventing tool breakage.",
    },
    {
      icon: "Zap",
      title: "Versatile Compatibility",
      description:
        "Supports both synchronous and non-synchronous tapping across modern CNC systems and legacy machines with comprehensive interface options.",
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
    "Mold & Die Manufacturing",
    "Heavy Machinery",
    "General Precision Engineering",
    "CNC Machining Centers",
    "Traditional Machine Shops",
  ]

  // Tapping operations
  const tappingOperations = [
    "Synchronous Tapping",
    "Non-Synchronous (Floating) Tapping",
    "Blind Hole Tapping",
    "High-Speed Threading",
    "Precision Thread Creation",
    "Misalignment Correction",
    "Torque-Sensitive Operations",
    "Multi-Axis Tapping",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "General Steels",
    "Stainless Steels",
    "Aluminum Alloys",
    "Cast Iron",
    "Titanium Alloys",
    "Copper Alloys",
    "Tool Steels",
    "Heat-Resistant Materials",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Functional Type Diversity",
      description:
        "Six distinct functional types (GTP, G, SVER, VER, TER, FDG) each engineered for specific tapping requirements from basic compensation to high-speed synchronous operations.",
      color: "border-red-600",
    },
    {
      title: "Universal Interface Support",
      description:
        "Comprehensive interface compatibility including BT, HSK, CAT, NT, MTA, MTB, JT, and straight shank configurations for maximum machine compatibility.",
      color: "border-blue-600",
    },
    {
      title: "Advanced Protection Mechanisms",
      description:
        "Integrated axial compensation, torque overload protection, and radial floating capabilities ensure process security and prevent costly tool breakage.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Functional Types", value: "GTP, G, SVER, VER, TER, FDG" },
    { label: "Interface Types", value: "BT, HSK, CAT, NT, MTA, MTB, JT, C" },
    { label: "Compensation Types", value: "Axial, Radial, Torque Protection" },
    { label: "Tapping Modes", value: "Synchronous, Non-Synchronous" },
    { label: "Machine Compatibility", value: "CNC Centers, Traditional Mills" },
    { label: "Collet Systems", value: "ER, Custom Collet Configurations" },
    { label: "Naming Convention", value: "Shank-Function-Collet-Length" },
    { label: "Critical Requirement", value: "Tool Insertion Beyond Collet Bore" },
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
                  Tapping Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the Tapping Tool Holder system, a highly specialized and critical category within the broader family of milling tool holders. Unlike general-purpose holders, tapping holders are engineered with unique mechanical features designed exclusively for the creation of internal threads.
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
                    src="/images/tapping-tool-holder-hero.png"
                    alt="Professional Tapping Tool Holder System Collection"
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
                    The performance of a Tapping Tool Holder is not measured by rigidity alone, but by its <strong>intelligent mechanical functions that safeguard the tool and the workpiece</strong>. The various models (GTP, G, SVER, VER, TER, FDG) exhibit a range of performance characteristics tailored to different machine capabilities and application requirements. A core performance feature is the <strong>"telescopic" or axial float capability</strong>, which allows the holder to extend and retract slightly along its axis.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    This is critical for non-synchronous tapping, where minor mismatches between the machine's feed rate and the tap's natural pitch could instantly cause excessive axial force, leading to tap breakage or thread damage. The holder's compensation absorbs this synchronization error, ensuring the tap advances smoothly at its own pitch. The <strong>"protection" feature found in GTP, G, SVER, and VER holders</strong> is a form of built-in torque clutch that prevents torque from exceeding the tap's breaking point.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>FDG series features unique "radial floating" capability</strong>, allowing the tap to shift slightly in the X-Y plane. This performance is crucial when there is slight misalignment between the machine spindle center and the pre-drilled hole center. The floating mechanism allows the tap to self-center and follow the existing hole, preventing oversized or damaged threads and reducing stress on the tap.
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
                        <strong>Functional Types:</strong> GTP, G, SVER, VER, TER, FDG
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Compensation:</strong> Axial, Radial, Torque Protection
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Interfaces:</strong> BT, HSK, CAT, NT, MTA, MTB, JT
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Tapping Modes:</strong> Synchronous & Non-Synchronous
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> Internal Thread Creation
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
                      {product.features && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Features:</span>
                          <span className="text-gray-900 text-xs">{product.features}</span>
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

          {/* Critical Usage Precautions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Critical Usage Precautions</h2>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Important Collet System Requirements</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p className="mb-2">
                      For all tool holders in this category that utilize a collet system for clamping, it is <strong>imperative that the tool shank must be inserted to a depth that extends beyond the effective clamping length of the collet bore</strong>.
                    </p>
                    <p>
                      Failure to adhere to this guideline can result in improper locking, tool slippage, and potential damage to the holder or tap.
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

              {/* Tapping Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Tapping Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {tappingOperations.map((operation, index) => (
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
                  title: "Axial Compensation",
                  description: "Telescopic function allows extension and retraction along axis, critical for non-synchronous tapping to absorb synchronization errors.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Torque Overload Protection",
                  description: "Built-in torque clutch mechanism disengages when tap encounters excessive resistance, preventing tool breakage and machine damage.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Radial Floating Capability",
                  description: "FDG series allows tap to shift in X-Y plane, compensating for misalignment between spindle center and pre-drilled hole.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Synchronous Tapping Support",
                  description: "SVER and TER series designed for high-speed synchronous operations with micro telescopic features for perfect synchronization.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Universal Machine Integration",
                  description: "Comprehensive interface support spanning modern CNC standards and legacy systems for maximum workshop compatibility.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Process Security Assurance",
                  description: "Intelligent mechanical functions safeguard both tool and workpiece, ensuring reliable and consistent internal thread production.",
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
                The main function of the Tapping Tool Holder system is <strong>to securely connect a tap to a machine spindle while providing a suite of mechanical protections—including axial compensation, torque overload control, and radial float—to ensure the reliable and safe production of accurate internal threads</strong>. It acts as an intelligent intermediary that mitigates the inherent risks of the tapping process, thereby preventing tool breakage, protecting the workpiece, and guaranteeing process consistency.
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
                  title: "Taps and Dies",
                  image: "/images/taps-dies.jpg",
                  description: "Professional threading tools for internal and external threads",
                  url: "/standard-tools/threading/taps",
                },
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
                  title: "Thread Mills",
                  image: "/images/thread-mills.jpg",
                  description: "CNC thread milling tools for complex threading operations",
                  url: "/standard-tools/threading/thread-mills",
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
              <h2 className="text-3xl font-bold mb-4">Need Specialized Tapping Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal Tapping Tool Holder configuration for your specific threading applications, machine compatibility, and operational requirements. From axial compensation to torque protection, we provide comprehensive tapping solutions.
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