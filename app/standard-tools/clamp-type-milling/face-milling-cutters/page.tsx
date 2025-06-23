import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function FaceMillingCuttersPage() {
  // Product data based on Clamp-Type Face Milling Cutters
  const products = [
    {
      id: "face-mill-001",
      name: "90° Face Mill",
      image: "/images/90-degree-face-mill.png",
      description: "True 90-degree shoulder face milling cutter",
      diameter: "Ø40~Ø500mm",
      approachAngle: "90°",
      application: "Vertical wall and shoulder milling",
      features: "True 90° shoulder, high radial force capability",
      insertType: "Square/Triangular",
      pageNumber: "FM90",
    },
    {
      id: "face-mill-002",
      name: "45° Face Mill",
      image: "/images/45-degree-face-mill.png",
      description: "General purpose 45-degree face milling cutter",
      diameter: "Ø50~Ø400mm",
      approachAngle: "45°",
      application: "General face milling with chip thinning effect",
      features: "Reduced radial forces, higher feed rates",
      insertType: "Square/Rhombic",
      pageNumber: "FM45",
    },
    {
      id: "face-mill-003",
      name: "Round Insert Face Mill",
      image: "/images/round-insert-face-mill.png",
      description: "Round insert face mill for heavy roughing",
      diameter: "Ø63~Ø315mm",
      approachAngle: "Variable",
      application: "Heavy roughing of tough materials",
      features: "Strongest cutting edge, maximum chip thinning",
      insertType: "Round",
      pageNumber: "FMR",
    },
    {
      id: "face-mill-004",
      name: "Fine Pitch Face Mill",
      image: "/images/fine-pitch-face-mill.png",
      description: "Fine pitch face mill for finishing operations",
      diameter: "Ø80~Ø250mm",
      pitch: "Fine Pitch",
      application: "Finishing and semi-finishing operations",
      features: "Superior surface finish, high table feeds",
      insertType: "Square/Triangular",
      pageNumber: "FMF",
    },
    {
      id: "face-mill-005",
      name: "Coarse Pitch Face Mill",
      image: "/images/coarse-pitch-face-mill.png",
      description: "Coarse pitch face mill for roughing operations",
      diameter: "Ø100~Ø500mm",
      pitch: "Coarse Pitch",
      application: "Heavy roughing with large depth of cut",
      features: "Large chip gullets, excellent chip evacuation",
      insertType: "Square/Rhombic",
      pageNumber: "FMC",
    },
    {
      id: "face-mill-006",
      name: "Wiper Insert Face Mill",
      image: "/images/wiper-insert-face-mill.png",
      description: "Face mill with wiper inserts for superior finish",
      diameter: "Ø63~Ø200mm",
      specialFeature: "Wiper Insert",
      application: "Mirror-like surface finish operations",
      features: "Eliminates feed marks, mirror finish capability",
      insertType: "Square with Wiper",
      pageNumber: "FMW",
    },
    {
      id: "face-mill-007",
      name: "High-Feed Face Mill",
      image: "/images/high-feed-face-mill.png",
      description: "High-feed face mill for maximum productivity",
      diameter: "Ø50~Ø315mm",
      feedRate: "High Feed",
      application: "Maximum material removal rate operations",
      features: "Extreme feed rates, optimized chip formation",
      insertType: "Specialized High-Feed",
      pageNumber: "FMHF",
    },
    {
      id: "face-mill-008",
      name: "Aluminum Face Mill",
      image: "/images/aluminum-face-mill.png",
      description: "Specialized face mill for aluminum machining",
      diameter: "Ø40~Ø250mm",
      material: "Aluminum Optimized",
      application: "High-speed aluminum machining",
      features: "Sharp cutting edges, excellent chip evacuation",
      insertType: "Positive Rake",
      pageNumber: "FMA",
    },
    {
      id: "face-mill-009",
      name: "Cast Iron Face Mill",
      image: "/images/cast-iron-face-mill.png",
      description: "Heavy-duty face mill for cast iron machining",
      diameter: "Ø80~Ø400mm",
      material: "Cast Iron Optimized",
      application: "Cast iron engine blocks and housings",
      features: "Robust construction, excellent wear resistance",
      insertType: "Negative Rake",
      pageNumber: "FMCI",
    },
    {
      id: "face-mill-010",
      name: "Stainless Steel Face Mill",
      image: "/images/stainless-steel-face-mill.png",
      description: "Face mill optimized for stainless steel",
      diameter: "Ø63~Ø315mm",
      material: "Stainless Steel Optimized",
      application: "Stainless steel components machining",
      features: "Sharp geometry, built-up edge resistance",
      insertType: "Positive Rake",
      pageNumber: "FMSS",
    },
    {
      id: "face-mill-011",
      name: "Titanium Face Mill",
      image: "/images/titanium-face-mill.png",
      description: "Specialized face mill for titanium alloys",
      diameter: "Ø50~Ø200mm",
      material: "Titanium Optimized",
      application: "Aerospace titanium component machining",
      features: "Sharp cutting edges, thermal shock resistance",
      insertType: "Positive Rake",
      pageNumber: "FMTi",
    },
    {
      id: "face-mill-012",
      name: "Coolant-Through Face Mill",
      image: "/images/coolant-through-face-mill.png",
      description: "Face mill with internal coolant delivery",
      diameter: "Ø80~Ø315mm",
      coolant: "Internal Coolant",
      application: "High-performance machining with coolant",
      features: "Direct coolant delivery, extended tool life",
      insertType: "Various",
      pageNumber: "FMCT",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Zap",
      title: "High-Efficiency Machining",
      description:
        "Multiple cutting inserts enable extremely high feed rates and cutting speeds, achieving superior Material Removal Rate (MRR) for rapid stock removal.",
    },
    {
      icon: "Shield",
      title: "Superior Surface Finish",
      description:
        "Wiper inserts create mirror-like finishes by eliminating feed marks, often eliminating the need for secondary grinding or polishing operations.",
    },
    {
      icon: "Target",
      title: "Exceptional Stability",
      description:
        "Massive, rigid steel body effectively dampens vibrations with secure clamping systems ensuring stability during heavy interrupted cuts.",
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
      case "Layers":
        return <Layers className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Industries served
  const industries = [
    "Automotive Manufacturing",
    "Aerospace Industry",
    "Mold & Die Making",
    "Heavy Industry & Energy",
    "General Machining",
    "Marine Engineering",
    "Construction Equipment",
    "Mining Equipment",
    "Power Generation",
    "Machine Tool Manufacturing",
  ]

  // Application processes
  const applicationProcesses = [
    "Roughing Operations",
    "Semi-Finishing",
    "Finishing Operations",
    "Shoulder Milling",
    "Datum Surface Creation",
    "High-Volume Stock Removal",
    "Engine Block Machining",
    "Structural Component Milling",
    "Mold Base Surfacing",
    "Precision Flat Surface Creation",
  ]

  // Applications
  const applications = [
    "Engine Blocks",
    "Cylinder Heads",
    "Transmission Housings",
    "Airframe Components",
    "Wing Spars",
    "Injection Molds",
    "Stamping Dies",
    "Turbine Casings",
    "Gearbox Housings",
    "Machine Tool Bases",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Approach Angle Technology",
      description:
        "90° for true shoulders, 45° for general milling with chip thinning, round inserts for maximum chip thinning and strongest cutting edge.",
      color: "border-red-600",
    },
    {
      title: "Insert Pitch Systems",
      description:
        "Coarse pitch for roughing with large chip gullets, fine pitch for finishing with superior surface quality, differential pitch for vibration control.",
      color: "border-blue-600",
    },
    {
      title: "Advanced Clamping Systems",
      description:
        "Screw-on, wedge and screw, lever systems with internal coolant delivery for optimal performance and extended tool life.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Diameter Range", value: "Ø40~Ø500mm" },
    { label: "Approach Angles", value: "45°, 60°, 75°, 87°, 90°, Round" },
    { label: "Insert Types", value: "Square, Triangular, Rhombic, Round" },
    { label: "Pitch Options", value: "Coarse, Fine, Differential" },
    { label: "Clamping Systems", value: "Screw-on, Wedge, Lever" },
    { label: "Coolant Delivery", value: "Internal/External" },
    { label: "Body Material", value: "Pre-hardened Tool Steel" },
    { label: "Insert Grades", value: "Uncoated, TiN, TiCN, TiAlN" },
    { label: "Applications", value: "Steel, Stainless, Cast Iron, Aluminum" },
    { label: "Surface Finish", value: "Ra 0.1~6.3μm" },
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
                  Clamp Type Milling Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Clamp-Type Face Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Clamp-type face milling cutters, also known as <strong>indexable face mills</strong>, represent a cornerstone of modern metalworking technology. These advanced cutting tools are engineered to machine large, flat surfaces with <strong>exceptional efficiency and precision</strong>. Their robust steel body with multiple pockets housing replaceable carbide inserts provides significant economic advantages, making them indispensable across manufacturing industries.
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
                    src="/images/face-milling-cutters-hero.png"
                    alt="Professional Clamp-Type Face Milling Cutters Collection"
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
                    The performance of a clamp-type face mill is defined by its ability to balance <strong>speed, surface quality, and tool life</strong> under demanding conditions. By utilizing multiple cutting inserts simultaneously, face mills can achieve extremely high feed rates and cutting speeds, enabling <strong>rapid removal of large volumes of material</strong> and drastically reducing cycle times in roughing and semi-finishing operations.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    While powerful in roughing, face mills are also capable of producing <strong>outstanding surface finishes</strong> through the use of specific finishing inserts, particularly <strong>"wiper inserts"</strong>. A wiper insert has a small, flat edge parallel to the machined surface that "wipes" away the feed marks, resulting in a smooth, often mirror-like finish that can eliminate the need for secondary operations.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The cutter body, typically manufactured from <strong>high-strength, pre-hardened tool steel</strong>, provides exceptional stability and rigidity. This massive body effectively dampens vibrations while secure clamping systems lock the inserts firmly in place, ensuring stability even during heavy interrupted cuts or when machining difficult materials.
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
                        <strong>Diameter Range:</strong> Ø40~Ø500mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Approach Angles:</strong> 45°, 90°, Round inserts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Types:</strong> Square, Triangular, Round
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Surface Finish:</strong> Ra 0.1~6.3μm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Steel, Stainless, Cast Iron, Aluminum
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
                      {product.diameter && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Diameter:</span>
                          <span className="text-gray-900">{product.diameter}</span>
                        </div>
                      )}
                      {product.approachAngle && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Angle:</span>
                          <span className="text-gray-900">{product.approachAngle}</span>
                        </div>
                      )}
                      {product.pitch && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Pitch:</span>
                          <span className="text-gray-900 text-xs">{product.pitch}</span>
                        </div>
                      )}
                      {product.specialFeature && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Feature:</span>
                          <span className="text-gray-900 text-xs">{product.specialFeature}</span>
                        </div>
                      )}
                      {product.feedRate && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Feed:</span>
                          <span className="text-gray-900 text-xs">{product.feedRate}</span>
                        </div>
                      )}
                      {product.material && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Material:</span>
                          <span className="text-gray-900 text-xs">{product.material}</span>
                        </div>
                      )}
                      {product.coolant && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Coolant:</span>
                          <span className="text-gray-900 text-xs">{product.coolant}</span>
                        </div>
                      )}
                      {product.insertType && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Insert:</span>
                          <span className="text-gray-900 text-xs">{product.insertType}</span>
                        </div>
                      )}
                      {product.features && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Features:</span>
                          <span className="text-gray-900 text-xs">{product.features}</span>
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
                    <h3 className="text-lg font-medium text-blue-800">Approach Angle Selection</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        <strong>90° for true shoulders</strong>, <strong>45° for general milling</strong> with chip thinning effect and reduced radial forces. <strong>Round inserts</strong> provide strongest cutting edge and maximum chip thinning for tough materials.
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
                    <h3 className="text-lg font-medium text-yellow-800">Insert Pitch Optimization</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Use <strong>coarse pitch for roughing</strong> with large chip gullets, <strong>fine pitch for finishing</strong> with superior surface quality. <strong>Differential pitch</strong> disrupts harmonic vibrations for stable machining.
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
                  Key Industries
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

              {/* Application Processes */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Application Processes
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applicationProcesses.map((process, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{process}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Applications
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
            </div>
          </div>

          {/* Main Functions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Primary Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Creating Flat Surfaces",
                  description: "Primary function to generate flat, planar surfaces on workpieces with exceptional precision and efficiency.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Establishing Datum",
                  description: "Creates primary datum surfaces (Datum A) that serve as reference for all subsequent dimensions and features.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Volume Stock Removal",
                  description: "Efficiently clears large amounts of material from part faces to bring them closer to final dimensions.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Shoulder Milling",
                  description: "90-degree face mills simultaneously machine flat surfaces and adjacent vertical walls with perfect perpendicularity.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
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
              <h2 className="text-3xl font-bold">Main Functions</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                The clamp-type face milling cutter is a <strong>highly engineered, versatile, and economical tool</strong>. Its ability to perform both high-speed roughing and precision finishing makes it an essential asset for achieving productivity and quality in modern manufacturing. The core functions include creating flat surfaces, establishing datum references, high-volume stock removal, and shoulder milling operations with exceptional efficiency and precision.
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
                  title: "Right Angle / Square Shoulder Milling Cutters",
                  image: "/images/right-angle-square-shoulder.jpg",
                  description: "Precision square shoulder milling solutions",
                  url: "/standard-tools/clamp-type-milling/right-angle-square-shoulder",
                },
                {
                  title: "Ball End Milling Cutters",
                  image: "/images/ball-end-milling-cutters.jpg", 
                  description: "3D contour and curved surface machining",
                  url: "/standard-tools/clamp-type-milling/ball-end-milling-cutters",
                },
                {
                  title: "High Feed Milling Cutter",
                  image: "/images/high-feed-milling-cutter.jpg",
                  description: "Maximum productivity milling solutions",
                  url: "/standard-tools/clamp-type-milling/high-feed-milling-cutter",
                },
                {
                  title: "Chamfering Cutters",
                  image: "/images/chamfering-cutters.jpg",
                  description: "Precision chamfering and edge preparation",
                  url: "/standard-tools/clamp-type-milling/chamfering-cutters",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Clamp Type Milling" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need High-Performance Face Milling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal clamp-type face milling cutter configuration for your specific material, surface finish requirements, and productivity goals. From approach angle selection to insert grade optimization, we provide comprehensive solutions for maximum efficiency and quality in face milling operations.
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