import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function BallEndMillingCuttersPage() {
  // Product data based on Clamp Type Ball End Milling Cutters
  const products = [
    {
      id: "ball-end-001",
      name: "Ø16mm Ball End Mill",
      image: "/images/16mm-ball-end-mill.png",
      description: "Compact ball end milling cutter for precision work",
      diameter: "Ø16mm",
      flutes: "2 Flutes",
      insertType: "RCMT 0602",
      application: "Small mold details and precision 3D machining",
      features: "High precision insert pocket, excellent runout accuracy",
      maxSpeed: "8000 RPM",
      pageNumber: "BE16",
    },
    {
      id: "ball-end-002",
      name: "Ø20mm Ball End Mill",
      image: "/images/20mm-ball-end-mill.png",
      description: "Standard small diameter ball end milling cutter",
      diameter: "Ø20mm",
      flutes: "2 Flutes",
      insertType: "RCMT 0803",
      application: "General purpose 3D contouring and pocketing",
      features: "Balanced design, versatile performance",
      maxSpeed: "6000 RPM",
      pageNumber: "BE20",
    },
    {
      id: "ball-end-003",
      name: "Ø25mm Ball End Mill",
      image: "/images/25mm-ball-end-mill.png",
      description: "Medium diameter ball end milling cutter",
      diameter: "Ø25mm",
      flutes: "3 Flutes",
      insertType: "RCMT 1003",
      application: "Medium-scale 3D roughing and semi-finishing",
      features: "Enhanced chip evacuation, stable cutting",
      maxSpeed: "5000 RPM",
      pageNumber: "BE25",
    },
    {
      id: "ball-end-004",
      name: "Ø32mm Ball End Mill",
      image: "/images/32mm-ball-end-mill.png",
      description: "Heavy-duty medium diameter ball end mill",
      diameter: "Ø32mm",
      flutes: "3 Flutes",
      insertType: "RCMT 1204",
      application: "Mold cavity roughing and contouring",
      features: "Robust construction, high material removal rate",
      maxSpeed: "4000 RPM",
      pageNumber: "BE32",
    },
    {
      id: "ball-end-005",
      name: "Ø40mm Ball End Mill",
      image: "/images/40mm-ball-end-mill.png",
      description: "Large diameter ball end milling cutter",
      diameter: "Ø40mm",
      flutes: "4 Flutes",
      insertType: "RCMT 1605",
      application: "Large mold and die machining",
      features: "Anti-vibration design, superior stability",
      maxSpeed: "3200 RPM",
      pageNumber: "BE40",
    },
    {
      id: "ball-end-006",
      name: "Ø50mm Ball End Mill",
      image: "/images/50mm-ball-end-mill.png",
      description: "Heavy-duty large diameter ball end mill",
      diameter: "Ø50mm",
      flutes: "4 Flutes",
      insertType: "RCMT 2006",
      application: "Aerospace and automotive component machining",
      features: "High rigidity, excellent surface quality",
      maxSpeed: "2500 RPM",
      pageNumber: "BE50",
    },
    {
      id: "ball-end-007",
      name: "Ø63mm Ball End Mill",
      image: "/images/63mm-ball-end-mill.png",
      description: "Extra large diameter ball end milling cutter",
      diameter: "Ø63mm",
      flutes: "5 Flutes",
      insertType: "RCMT 2508",
      application: "Large structural component machining",
      features: "Maximum stability, heavy-duty construction",
      maxSpeed: "2000 RPM",
      pageNumber: "BE63",
    },
    {
      id: "ball-end-008",
      name: "Ø80mm Ball End Mill",
      image: "/images/80mm-ball-end-mill.png",
      description: "Industrial large diameter ball end mill",
      diameter: "Ø80mm",
      flutes: "5 Flutes",
      insertType: "RCMT 3209",
      application: "Large mold and die manufacturing",
      features: "Industrial grade, maximum material removal",
      maxSpeed: "1600 RPM",
      pageNumber: "BE80",
    },
    {
      id: "ball-end-009",
      name: "Ø100mm Ball End Mill",
      image: "/images/100mm-ball-end-mill.png",
      description: "Maximum diameter ball end milling cutter",
      diameter: "Ø100mm",
      flutes: "6 Flutes",
      insertType: "RCMT 4012",
      application: "Very large component and mold machining",
      features: "Ultimate rigidity, professional grade",
      maxSpeed: "1250 RPM",
      pageNumber: "BE100",
    },
    {
      id: "ball-end-010",
      name: "High-Speed Ball End Mill",
      image: "/images/high-speed-ball-end.png",
      description: "HSM optimized ball end milling cutter",
      diameter: "Ø16~Ø40mm",
      specialFeature: "HSM Optimized",
      application: "High-speed machining applications",
      features: "Advanced insert grades, PVD/CVD coatings",
      maxSpeed: "12000 RPM",
      pageNumber: "BEHS",
    },
    {
      id: "ball-end-011",
      name: "Titanium Ball End Mill",
      image: "/images/titanium-ball-end.png",
      description: "Specialized mill for titanium alloy machining",
      diameter: "Ø20~Ø63mm",
      material: "Titanium Optimized",
      application: "Aerospace titanium component machining",
      features: "Heat resistant inserts, extended tool life",
      specialApplication: "Aerospace",
      pageNumber: "BETI",
    },
    {
      id: "ball-end-012",
      name: "Hardened Steel Ball End Mill",
      image: "/images/hardened-steel-ball-end.png",
      description: "Ball end mill for hardened tool steels",
      diameter: "Ø25~Ø80mm",
      hardness: "45-60 HRC",
      application: "Hardened mold and die machining",
      features: "Specialized insert grades, superior wear resistance",
      specialApplication: "Mold & Die",
      pageNumber: "BEHS",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Target",
      title: "Exceptional Cost-Effectiveness",
      description:
        "Tool body is a long-term investment while only inexpensive carbide inserts are consumed. Drastically reduces tooling costs compared to solid carbide tools.",
    },
    {
      icon: "Zap",
      title: "High Machining Efficiency",
      description:
        "Robust cutter body withstands significant cutting forces, enabling aggressive cutting parameters and high Material Removal Rate (MRR).",
    },
    {
      icon: "Shield",
      title: "Superior Stability & Rigidity",
      description:
        "Steel tool bodies with anti-vibration features provide excellent rigidity, minimizing chatter and extending tool life.",
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
    "Mold & Die Manufacturing",
    "Aerospace Industry",
    "Automotive Industry",
    "Energy Sector",
    "General Mechanical Engineering",
    "Tool & Die Making",
    "Precision Engineering",
    "Prototyping Services",
    "Heavy Industrial Equipment",
    "Marine Engineering",
  ]

  // Application processes
  const applicationProcesses = [
    "3D Roughing",
    "Copy Milling / Contour Milling",
    "Semi-Finishing",
    "Pocketing",
    "Ramping and Helical Interpolation",
    "Channel and Slot Milling",
    "3D Surface Machining",
    "Complex Geometry Machining",
    "High-Speed Machining (HSM)",
    "Material Removal Operations",
  ]

  // Applications
  const applications = [
    "Injection Molds",
    "Stamping Dies",
    "Forging Dies",
    "Die-Casting Molds",
    "Turbine Blades",
    "Impellers",
    "Engine Blocks",
    "Cylinder Heads",
    "Airframe Parts",
    "Large Structural Components",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Modular Insert System",
      description:
        "Durable steel or heavy metal alloy tool body with replaceable carbide inserts. Provides unparalleled flexibility and cost-effectiveness for medium to large-diameter applications.",
      color: "border-red-600",
    },
    {
      title: "Advanced Insert Technology",
      description:
        "Latest insert grades with advanced PVD or CVD coatings enable significantly higher cutting speeds and extended tool life across various materials.",
      color: "border-blue-600",
    },
    {
      title: "High-Precision Design",
      description:
        "High-precision insert pockets and locking systems ensure excellent runout accuracy and insert positioning for superior surface quality.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Cutter Diameter Range", value: "Ø16~Ø100mm" },
    { label: "Number of Flutes", value: "2-6 flutes" },
    { label: "Insert Types", value: "RCMT series (round inserts)" },
    { label: "Insert Grades", value: "Multiple grades for different materials" },
    { label: "Coatings", value: "TiAlN, AlCrN, TiSiN, PVD/CVD" },
    { label: "Shank Types", value: "Cylindrical, Weldon, HSK, SK, CAPTO, BT" },
    { label: "Maximum Hardness", value: "Up to 60 HRC" },
    { label: "Speed Range", value: "1250-12000 RPM" },
    { label: "Applications", value: "3D roughing, semi-finishing, contouring" },
    { label: "Material Compatibility", value: "Steel, stainless, titanium, aluminum" },
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
                  Ball End Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  As a cornerstone of modern machining, particularly in the realm of <strong>3D surface machining</strong>, the Clamp Type Ball End Milling Cutter represents a pinnacle of <strong>efficiency, economy, and performance</strong>. Unlike solid carbide ball nose end mills, these tools consist of a durable steel tool body and <strong>replaceable carbide inserts</strong>, providing unparalleled flexibility and cost-effectiveness for medium to large-diameter applications.
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
                    src="/images/ball-end-milling-cutters-hero.png"
                    alt="Professional Ball End Milling Cutters Collection"
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
                    The performance of an indexable ball nose end mill is defined by its ability to combine <strong>high material removal rates</strong> with acceptable surface finishes in complex machining operations. The most significant performance advantage is <strong>economic</strong> - the tool body is a long-term investment, while only the relatively inexpensive carbide inserts are consumed.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    These cutters are designed for <strong>high-performance machining</strong>. The robust cutter body can withstand significant cutting forces, allowing for aggressive cutting parameters (high feed rates and depths of cut). The ability to use the latest insert grades with advanced <strong>PVD or CVD coatings</strong> enables significantly higher cutting speeds, leading to substantial reduction in cycle times and higher Material Removal Rate (MRR).
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The steel tool bodies, often enhanced with <strong>anti-vibration features</strong>, provide excellent rigidity. This stability minimizes chatter and vibration, crucial for achieving good surface quality and extending the life of both the insert and the machine tool's spindle. A single cutter body can be adapted for machining a wide range of materials simply by changing the insert.
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
                        <strong>Diameter Range:</strong> Ø16~Ø100mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Flutes:</strong> 2-6 flute configuration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Types:</strong> RCMT series (round)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Hardness Range:</strong> Up to 60 HRC
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Speed Range:</strong> 1250-12000 RPM
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
                      {product.flutes && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Flutes:</span>
                          <span className="text-gray-900">{product.flutes}</span>
                        </div>
                      )}
                      {product.insertType && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Insert:</span>
                          <span className="text-gray-900 text-xs">{product.insertType}</span>
                        </div>
                      )}
                      {product.maxSpeed && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Max Speed:</span>
                          <span className="text-gray-900 text-xs">{product.maxSpeed}</span>
                        </div>
                      )}
                      {product.specialFeature && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Feature:</span>
                          <span className="text-gray-900 text-xs">{product.specialFeature}</span>
                        </div>
                      )}
                      {product.material && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Material:</span>
                          <span className="text-gray-900 text-xs">{product.material}</span>
                        </div>
                      )}
                      {product.hardness && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Hardness:</span>
                          <span className="text-gray-900 text-xs">{product.hardness}</span>
                        </div>
                      )}
                      {product.specialApplication && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Application:</span>
                          <span className="text-gray-900 text-xs">{product.specialApplication}</span>
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
                    <h3 className="text-lg font-medium text-blue-800">Insert Selection & Grades</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        <strong>RCMT series round inserts</strong> are optimized for different materials. Use <strong>toughness-oriented grades</strong> for interrupted cuts and <strong>hardness-oriented grades</strong> for continuous machining. Advanced coatings (TiAlN, AlCrN, TiSiN) provide thermal resistance and extended tool life.
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
                    <h3 className="text-lg font-medium text-yellow-800">Shank & Mounting Systems</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Choose appropriate shank type: <strong>Cylindrical/Straight</strong> for standard applications, <strong>Weldon</strong> for higher torque, or <strong>modular systems (HSK, SK, CAPTO, BT)</strong> for superior rigidity and precision in high-performance machining.
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

          {/* Application Machining */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Machining</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
              {[
                {
                  title: "3D Roughing",
                  description: "Remove bulk material quickly to get close to final part geometry with high material removal rates.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Copy Milling / Contour Milling",
                  description: "Tool path follows 3D model contours with smooth, continuous contact for flowing surfaces.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Semi-Finishing",
                  description: "Refine surface after roughing, reduce scallops, leave consistent material for final finishing.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Pocketing",
                  description: "Create large internal pockets with filleted corners at the bottom using ball nose geometry.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Ramping & Helical Interpolation",
                  description: "Enter workpiece gradually using linear zig-zag or circular spiral paths to reach required depth.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Channel & Slot Milling",
                  description: "Machine wide slots or channels with full radius bottom profile for complex geometries.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
              ].map((machining, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-50 p-2 rounded-lg mr-4">{machining.icon}</div>
                    <h3 className="text-lg font-bold">{machining.title}</h3>
                  </div>
                  <p className="text-gray-600">{machining.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Functions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Main Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Efficient 3D Material Removal",
                  description: "Primary function is to efficiently and economically machine complex three-dimensional surfaces, particularly in roughing and semi-finishing stages.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Economic Viability in Large-Scale Machining",
                  description: "Provides cost-effective solution for machining with diameters where solid carbide tools are prohibitively expensive and technically impractical.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Flexibility and Adaptability",
                  description: "Functions as modular tooling system, allowing single tool body to be optimized for different materials and conditions by swapping inserts.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enabling High-Speed Machining (HSM)",
                  description: "Rigid design combined with advanced insert technology enables HSM strategies with high spindle speeds and fast feed rates for superior productivity.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
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
                  title: "Face Milling Cutters",
                  image: "/images/face-milling-cutters.jpg",
                  description: "High-performance indexable face milling solutions",
                  url: "/standard-tools/clamp-type-milling/face-milling-cutters",
                },
                {
                  title: "Right Angle / Square Shoulder",
                  image: "/images/right-angle-square-shoulder.jpg", 
                  description: "Precise 90-degree shoulder machining solutions",
                  url: "/standard-tools/clamp-type-milling/right-angle-square-shoulder",
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
              <h2 className="text-3xl font-bold mb-4">Need Advanced 3D Machining Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal ball end milling cutter configuration for your specific 3D machining requirements, material types, and surface quality demands. From insert grade selection to HSM optimization, we provide comprehensive solutions for maximum efficiency and cost-effectiveness in complex surface machining operations.
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