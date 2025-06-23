import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function FineBoringPage() {
  // Product data based on the MZG Fine Boring System
  const products = [
    {
      id: "fine-boring-001",
      name: "HBOR Fine Boring Head",
      image: "/images/hbor-fine-boring-head.png",
      description: "Ultra-precision boring head with industry-leading accuracy",
      series: "HBOR Ultra-Precision Series",
      diameter: "Ø2~Ø160mm",
      precision: "0.002mm micro-adjustment",
      extension: "Up to Ø280mm with BM140 holders",
      application: "Ultra-precision finishing operations",
      features: "Industry-leading micro-adjustment capability",
      pageNumber: "HBOR",
    },
    {
      id: "fine-boring-002",
      name: "HBOR Reverse Boring Head",
      image: "/images/hbor-reverse-boring.png",
      description: "Ultra-precision reverse boring specialist",
      series: "HBOR Reverse Series",
      diameter: "Ø2~Ø160mm",
      precision: "0.002mm micro-adjustment",
      application: "Back-bore and internal groove machining",
      features: "Reverse boring without re-fixturing",
      pageNumber: "HBOR-R",
    },
    {
      id: "fine-boring-003",
      name: "CBI Small Diameter Head",
      image: "/images/cbi-small-diameter.png",
      description: "Modular small diameter boring solution",
      series: "CBI Modular Series",
      diameter: "Ø3~Ø50mm",
      precision: "0.01mm micro-adjustment",
      application: "Small diameter precision boring",
      features: "Modular design, high interchangeability",
      pageNumber: "CBI",
    },
    {
      id: "fine-boring-004",
      name: "CBH Standard Boring Head",
      image: "/images/cbh-standard-head.png",
      description: "Versatile standard boring head with internal coolant",
      series: "CBH Standard Series",
      diameter: "Ø20~Ø203mm",
      precision: "0.01mm micro-adjustment",
      application: "Standard precision boring operations",
      features: "Internal coolant supply, modular design",
      pageNumber: "CBH",
    },
    {
      id: "fine-boring-005",
      name: "CBH Large Diameter Head",
      image: "/images/cbh-large-diameter.png",
      description: "Large diameter boring with dynamic balance",
      series: "CBH Large Diameter Series",
      diameter: "Ø200~Ø1250mm",
      precision: "0.01mm micro-adjustment",
      application: "Large diameter high-speed boring",
      features: "Dynamic balance structure, high-speed stability",
      pageNumber: "CBH-L",
    },
    {
      id: "fine-boring-006",
      name: "CBH Reverse Boring Head",
      image: "/images/cbh-reverse-head.png",
      description: "Modular reverse boring solution",
      series: "CBH Reverse Series",
      diameter: "Ø20~Ø203mm",
      precision: "0.01mm micro-adjustment",
      application: "Reverse boring and internal features",
      features: "Internal coolant, reverse capability",
      pageNumber: "CBH-R",
    },
    {
      id: "fine-boring-007",
      name: "NBJ16 Boring Set",
      image: "/images/nbj16-boring-set.png",
      description: "Convenient small diameter boring set",
      series: "NBJ Boring Set Series",
      diameter: "Ø8~Ø50mm",
      precision: "0.01mm micro-adjustment",
      application: "Small diameter precision boring",
      features: "Complete set, convenient operation",
      pageNumber: "NBJ16",
    },
    {
      id: "fine-boring-008",
      name: "NBH2084 Boring Set",
      image: "/images/nbh2084-boring-set.png",
      description: "Comprehensive boring set for wide range",
      series: "NBH Boring Set Series",
      diameter: "Ø8~Ø280mm",
      precision: "0.01mm micro-adjustment",
      application: "Wide range precision boring",
      features: "Comprehensive coverage, complete solution",
      pageNumber: "NBH2084",
    },
    {
      id: "fine-boring-009",
      name: "ST Anti-Vibration Bar",
      image: "/images/st-anti-vibration-bar.png",
      description: "Tungsten steel anti-vibration boring bar",
      series: "ST Stability Series",
      material: "Tungsten Steel",
      application: "Deep hole boring with vibration damping",
      features: "Superior vibration damping, stable cutting",
      pageNumber: "ST-AVB",
    },
    {
      id: "fine-boring-010",
      name: "BE Small Boring Head",
      image: "/images/be-small-boring-head.png",
      description: "Compact boring head for tight spaces",
      series: "BE Compact Series",
      application: "Small space boring operations",
      features: "Compact design, high precision",
      pageNumber: "BE",
    },
    {
      id: "fine-boring-011",
      name: "CBH-M Outer Circle Head",
      image: "/images/cbh-m-outer-circle.png",
      description: "Specialized outer diameter boring head",
      series: "CBH-M Outer Series",
      application: "Outer circle boring and turning",
      features: "Outer diameter machining capability",
      pageNumber: "CBH-M",
    },
    {
      id: "fine-boring-012",
      name: "Carbide Small Boring Cutter",
      image: "/images/carbide-small-cutter.png",
      description: "High-performance carbide boring cutter",
      series: "Carbide Cutter Series",
      material: "Carbide",
      application: "High-performance small diameter boring",
      features: "Superior wear resistance, sharp cutting edge",
      pageNumber: "CARBIDE",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Target",
      title: "Ultimate Machining Precision",
      description:
        "Industry-leading 0.002mm micro-adjustment capability in HBOR system enables diameter control at near-atomic level for perfect geometry and mirror-like surface finish.",
    },
    {
      icon: "Shield",
      title: "Exceptional Stability",
      description:
        "Dynamic balance structure and ST anti-vibration tungsten steel bars ensure stable, chatter-free machining even at high speeds and large diameters.",
    },
    {
      icon: "Layers",
      title: "Unparalleled Modularity",
      description:
        "Modular design allows flexible combination of heads, shanks, and extension bars with universal tool holder compatibility for maximum adaptability.",
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
    "Aerospace",
    "Automotive",
    "Mold & Die",
    "Heavy Machinery",
    "Energy Sector",
    "Precision Manufacturing",
    "Medical Devices",
    "Defense & Military",
    "Machine Tools",
    "Hydraulic Systems",
  ]

  // Primary processes
  const primaryProcesses = [
    "Finishing Pre-drilled Holes",
    "High-Precision Bearing Seats",
    "Hydraulic Valve Bores",
    "Reverse (Back) Boring",
    "Stepped Bore Machining",
    "Outer Circle Boring",
    "Internal Groove Machining",
    "Multi-Diameter Boring",
    "Surface Finishing",
    "Tolerance-Critical Operations",
  ]

  // Applications
  const applications = [
    "Engine Components",
    "Landing Gear Cylinders",
    "Actuator Housings",
    "Engine Block Cylinders",
    "Transmission Components",
    "Precision Gear Seats",
    "Guide Pin Bores",
    "Ejector Pin Holes",
    "Cooling Channels",
    "Turbine Housings",
    "Gearboxes",
    "Hydraulic Manifolds",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Ultra-Precision Adjustment",
      description:
        "HBOR system offers industry-leading 0.002mm micro-adjustment capability, while CBI/CBH and NBH/NBJ systems provide exceptional 0.01mm precision control.",
      color: "border-red-600",
    },
    {
      title: "Comprehensive Size Range",
      description:
        "Complete boring range from Ø2mm (HBOR) to Ø1250mm (CBH Large) with modular extension capabilities up to Ø280mm using BM140 holders.",
      color: "border-blue-600",
    },
    {
      title: "Advanced Stability Features",
      description:
        "Dynamic balance structure for large heads, ST anti-vibration tungsten steel bars, and internal coolant supply for optimal performance.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "HBOR Range", value: "Ø2~Ø160mm (ext. Ø280mm)" },
    { label: "CBI Small Range", value: "Ø3~Ø50mm" },
    { label: "CBH Standard Range", value: "Ø20~Ø203mm" },
    { label: "CBH Large Range", value: "Ø200~Ø1250mm" },
    { label: "NBJ16 Set Range", value: "Ø8~Ø50mm" },
    { label: "NBH2084 Set Range", value: "Ø8~Ø280mm" },
    { label: "HBOR Precision", value: "0.002mm" },
    { label: "CBH/CBI Precision", value: "0.01mm" },
    { label: "Tool Holders", value: "LBK, BST, BT, SK, HSK, NT, MT" },
    { label: "Stability Enhancement", value: "ST Anti-vibration bars" },
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
                  Hole Machining Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Fine Boring System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the MZG Fine Boring System, the pinnacle of precision within our comprehensive Hole Machining System. This system is engineered not merely to create holes, but to perfect them, delivering exceptional dimensional accuracy, superior surface quality, and uncompromising repeatability with <strong>extreme micro-adjustment capabilities</strong> and <strong>highly modular design</strong>.
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
                    src="/images/fine-boring-hero.png"
                    alt="Professional MZG Fine Boring System Collection"
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
                    The performance of the MZG Fine Boring System is measured in microns, defined by its ability to achieve the highest levels of accuracy and stability in final hole machining. The <strong>HBOR system</strong>, with its industry-leading <strong>0.002mm micro-adjustment capability</strong>, allows for diameter control at a near-atomic level. The CBI/CBH and NBH/NBJ systems also offer exceptional <strong>0.01mm micro-adjustment</strong>, providing the fine control necessary for parts with stringent tolerance requirements.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>CBH large diameter heads</strong> are engineered with a <strong>dynamic balance structure</strong>, a critical feature that counteracts vibrational forces during high-speed rotation. This ensures stable, chatter-free machining even on very large bores. The system incorporates <strong>ST anti-vibration tungsten steel bars</strong>, which significantly dampen vibration to ensure a smooth, stable cut and superior hole quality.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The availability of <strong>reverse boring heads</strong> enables the machining of back-bores and internal grooves without needing to re-fixture the workpiece. The inclusion of <strong>internal coolant holes</strong> in the CBH heads ensures that high-pressure coolant is delivered directly to the cutting edge, extending insert life and preventing surface scratching.
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
                        <strong>Diameter Range:</strong> Ø2~Ø1250mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Ultra Precision:</strong> 0.002mm (HBOR)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>High Precision:</strong> 0.01mm (CBH/CBI)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Stability:</strong> Dynamic balance & anti-vibration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Modularity:</strong> Universal tool holder compatibility
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
                      {product.diameter && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Diameter:</span>
                          <span className="text-gray-900">{product.diameter}</span>
                        </div>
                      )}
                      {product.precision && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Precision:</span>
                          <span className="text-gray-900 text-xs">{product.precision}</span>
                        </div>
                      )}
                      {product.extension && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Extension:</span>
                          <span className="text-gray-900 text-xs">{product.extension}</span>
                        </div>
                      )}
                      {product.material && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Material:</span>
                          <span className="text-gray-900 text-xs">{product.material}</span>
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
                    <h3 className="text-lg font-medium text-blue-800">Micro-Adjustment Precision</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        <strong>HBOR system offers 0.002mm precision</strong> for ultra-critical applications, while <strong>CBI/CBH systems provide 0.01mm precision</strong> for standard high-precision work. Precision adjustment screws are internally located for protection.
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
                    <h3 className="text-lg font-medium text-yellow-800">Stability Recommendations</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        <strong>Small diameter boring bars</strong> should be used with stick-out length no more than <strong>3 times the diameter</strong> for optimal stability. Use ST anti-vibration bars for enhanced performance.
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

              {/* Primary Processes */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Primary Processes
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {primaryProcesses.map((process, index) => (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Ultra-Precision Control",
                  description: "Industry-leading 0.002mm micro-adjustment capability enables diameter control at near-atomic level for perfect geometry.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Dynamic Stability",
                  description: "Dynamic balance structure and anti-vibration technology ensure stable, chatter-free machining even at high speeds.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Modular Flexibility",
                  description: "Highly modular design allows flexible combination of components with universal tool holder compatibility.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Reverse Boring Capability",
                  description: "Specialized reverse boring heads enable back-bore and internal groove machining without re-fixturing.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Process Efficiency",
                  description: "Internal coolant supply and optimized chip evacuation ensure continuous, reliable operation with extended tool life.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Comprehensive Coverage",
                  description: "Complete diameter range from Ø2mm to Ø1250mm covers virtually every precision boring requirement.",
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
                The main function of the MZG Fine Boring System is <strong>to provide an ultra-precise, modular, and universally adaptable tooling solution for the final machining of holes to extremely tight tolerances and superior surface finishes</strong>. It empowers manufacturers to achieve micron-level accuracy across an immense diameter range (from Ø2mm to Ø1250mm). By integrating advanced features like reverse boring, dynamic balancing, and anti-vibration technology, the system not only guarantees the highest quality but also enhances process efficiency and reliability, making it an essential asset for any modern precision manufacturing environment.
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
                  title: "Drill Bit System",
                  image: "/images/drill-bit-system.jpg",
                  description: "Comprehensive drilling solutions for all materials",
                  url: "/standard-tools/hole-machining/drill-bit",
                },
                {
                  title: "Fast Drilling",
                  image: "/images/fast-drilling.jpg", 
                  description: "High-efficiency indexable drilling solutions",
                  url: "/standard-tools/hole-machining/fast-drilling",
                },
                {
                  title: "Threading Taps",
                  image: "/images/threading-taps.jpg",
                  description: "Comprehensive threading solutions for internal threads",
                  url: "/standard-tools/threading/taps",
                },
                {
                  title: "Reaming Tools",
                  image: "/images/reaming-tools.jpg",
                  description: "Precision hole finishing and sizing solutions",
                  url: "/standard-tools/hole-machining/reaming",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Hole Machining" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Ultra-Precision Boring Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal MZG Fine Boring System configuration for your specific precision requirements, tolerance goals, and application needs. From micro-adjustment capabilities to stability enhancement features, we provide comprehensive solutions for the most demanding precision manufacturing environments.
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