import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function BoringMachiningPage() {
  // Product data based on provided content
  const products = [
    {
      id: "boring-001",
      name: "NBH2084 Boring Cutter Toolholder",
      series: "NBH Heavy-Duty Toolholder Series",
      image: "/images/k36-1.png",
      description: "Heavy-duty tool holder for large-diameter boring applications",
      specifications: "Ø>200mm",
      application: "For boring cutters with diameters greater than 200mm; compatible with various machine interfaces",
      pageNumber: "K36",
    },
    {
      id: "boring-002", 
      name: "BST Boring Cutter Toolholder",
      series: "BST Heavy-Duty Toolholder Series",
      image: "/images/k36-2.png",
      description: "Heavy-duty tool holder for large-diameter boring applications",
      specifications: "Ø>200mm",
      application: "For boring cutters with diameters greater than 200mm; compatible with various machine interfaces",
      pageNumber: "K36",
    },
    {
      id: "boring-003",
      name: "LBK Series Boring Cutter Toolholders", 
      series: "LBK Universal Toolholder Series",
      image: "/images/k38-1.png",
      description: "Comprehensive tool holder series for various machine interfaces",
      specifications: "BT-LBK, SK-LBK, HSK-LBK, NT-LBK, MT-LBK, C-LBK",
      application: "Universal tool holder family including BT-LBK, SK-LBK, HSK-LBK, Straight Shank LBK, NT-LBK, MT-LBK, C-LBK, MT-DCK",
      pageNumber: "K38",
    },
    {
      id: "boring-004",
      name: "HBOR Fine Boring Head (System)",
      series: "HBOR Ultra-Precision Series",
      image: "/images/k39-1.png", 
      description: "Ultra-precision boring system with 0.002mm micro-adjustment",
      specifications: "Ø2-160mm",
      application: "Provides micro-adjustment of 0.002mm for high precision boring; boring range 2~160mm; includes reverse boring and small carbide boring cutters",
      pageNumber: "K39",
    },
    {
      id: "boring-005",
      name: "CBH Fine Boring Head (System)",
      series: "CBH High-Precision Series",
      image: "/images/k44-1.png",
      description: "High-precision boring system with dynamic balance features",
      specifications: "Ø20-1250mm",
      application: "Provides micro-adjustment of 0.01mm for precision boring; boring range 20~1250mm (large CBH); features dynamic balance and supports reverse boring",
      pageNumber: "K44",
    },
    {
      id: "boring-006",
      name: "CBI Small Diameter Fine Boring (System)",
      series: "CBI Small Diameter Series",
      image: "/images/k45-1.png",
      description: "Precision boring system for small diameter holes",
      specifications: "Ø3-50mm", 
      application: "Provides micro-adjustment of 0.01mm for small hole precision machining; boring range 3~50mm",
      pageNumber: "K45",
    },
    {
      id: "boring-007",
      name: "NBJ NBH Boring Set",
      series: "NBJ NBH Boring Set Series",
      image: "/images/k48-1.png",
      description: "Comprehensive boring set with NBJ16 and NBH2084 components",
      specifications: "NBJ16: Ø8-50mm, NBH2084: Ø8-280mm",
      application: "NBJ16 boring range 8~50mm; NBH2084 boring range 8~280mm",
      pageNumber: "K48",
    },
    {
      id: "boring-008", 
      name: "TWE Double Edge Rough Boring",
      series: "TWE Double-Edge Rough Boring Series",
      image: "/images/k50-1.png",
      description: "High-efficiency double edge rough boring system",
      specifications: "Ø20-810mm",
      application: "For rough boring; boring range 20~204mm (large TWE 200-810mm); suitable for single, double, and high-low level boring",
      pageNumber: "K50",
    },
    {
      id: "boring-009",
      name: "RBH Double Edge Rough Boring", 
      series: "RBH Double-Edge Rough Boring Series",
      image: "/images/k51-1.png",
      description: "Large-capacity double edge rough boring system",
      specifications: "Ø19-1200mm",
      application: "For rough boring; boring range 19~204mm (large RBH 200-1200mm)",
      pageNumber: "K51",
    },
    {
      id: "boring-010",
      name: "BSA/BSB Rough Boring",
      series: "BSA/BSB Rough Boring Series",
      image: "/images/k52-1.png",
      description: "Versatile rough boring tools for various hole types",
      specifications: "Ø20-190mm", 
      application: "For rough boring; boring range 20~190mm; suitable for both through hole and blind hole machining",
      pageNumber: "K52",
    },
    {
      id: "boring-011",
      name: "TBL Fixed Double Edge Rough Boring Bar",
      series: "TBL Fixed Boring Series",
      image: "/images/k56-1.png",
      description: "Fixed geometry double edge rough boring bar",
      specifications: "Ø8-50mm",
      application: "For fixed rough boring; boring range 8~50mm",
      pageNumber: "K56",
    },
    {
      id: "boring-012",
      name: "TBC Fixed Rough Boring Cutter Head",
      series: "TBC Fixed Boring Series",
      image: "/images/k56-2.png", 
      description: "Fixed geometry rough boring cutter head",
      specifications: "Ø45-130mm",
      application: "For fixed rough boring; boring range 45~130mm",
      pageNumber: "K56",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Three-Tier Architecture",
      description: "Seamless workflow integration of tool holder interface systems, rough boring systems, and fine boring systems, ensuring comprehensive coverage from Ø2mm to Ø1250mm.",
    },
    {
      icon: "Zap", 
      title: "Modular Compatibility",
      description: "Modular approach allows manufacturers to configure optimal tooling solutions for any application while maintaining compatibility across the entire system range.",
    },
    {
      icon: "Target",
      title: "Precision & Efficiency",
      description: "Micro-adjustment capabilities ranging from 0.002mm (HBOR) to 0.01mm (CBH/CBI/NBJ/NBH), enabling manufacturers to meet the most stringent tolerance requirements.",
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
    "Aerospace and Defense",
    "Automotive Manufacturing", 
    "Heavy Machinery",
    "Precision Manufacturing",
    "Energy Sector",
    "Mold Manufacturing",
    "Medical Equipment",
    "General Machinery",
  ]

  // Boring operations
  const boringOperations = [
    "Precision Hole Machining",
    "Deep Hole Boring",
    "Large Diameter Boring", 
    "Blind Hole Machining",
    "Step Boring",
    "Back Boring",
    "High Speed Boring",
    "Heavy Duty Boring",
  ]

  // Machinable materials
  const machineableMaterials = [
    "General Steels",
    "Stainless Steels", 
    "Cast Iron",
    "Titanium Alloys",
    "Aluminum Alloys",
    "Heat-Resistant Superalloys",
    "Tool Steels",
    "Non-Ferrous Metals",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "System Architecture Integration",
      description: "Three-tier architecture ensures seamless workflow integration between tool holder interface systems, rough boring systems, and fine boring systems, achieving a complete ecosystem from initial material removal to final finishing operations.",
      color: "border-red-600",
    },
    {
      title: "Precision and Range Coverage",
      description: "Total system capability spans from Ø2mm to Ø1250mm with micro-adjustment precision ranging from 0.002mm (HBOR) to 0.01mm (CBH/CBI/NBJ/NBH), accommodating virtually any industrial boring requirement.",
      color: "border-blue-600", 
    },
    {
      title: "Modular Design Advantages",
      description: "Through modular design architecture, dynamic balance structures, anti-vibration technologies, and rigid construction methodologies, ensures stable operation across all speed ranges and cutting conditions.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Modular Boring System" },
    { label: "Material", value: "HSS, Carbide, Tool Steel" },
    { label: "Coating Options", value: "TiN, TiCN, TiAlN, Uncoated" },
    { label: "Diameter Range", value: "Ø2mm - Ø1250mm" },
    { label: "Precision Level", value: "0.002mm - 0.01mm" },
    { label: "Interface Types", value: "BT, SK, HSK, MT, NT, C" },
    { label: "Application Types", value: "Rough, Fine, Adjustable Boring" },
    { label: "Cooling Methods", value: "Internal, External, Dry" },
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
                  Boring Machining Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Boring Machining System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  The MZG Boring Machining System represents the pinnacle of modular tooling engineering, designed as a complete ecosystem for precision hole machining from initial material removal through final finishing operations. Comprehensive solutions covering from Ø2mm small precision holes to Ø1250mm massive industrial bores.
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
                    src="/images/Boring-Machining-System.png"
                    alt="MZG Professional Boring Machining System"
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
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">System Performance Analysis</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="prose prose-xs max-w-none">
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The MZG Boring Machining System represents the pinnacle of modular tooling engineering, designed as a complete ecosystem for precision hole machining from initial material removal through final finishing operations. This system is not simply a collection of individual tools, but rather an integrated architecture where tool holders, rough boring components, and fine boring systems work in perfect synergy to deliver exceptional performance across the entire spectrum of boring applications. From small precision holes of Ø2mm to massive industrial bores reaching Ø1250mm, this system provides manufacturers with unparalleled flexibility, accuracy, and efficiency.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The system architecture is built on a three-tier foundation that ensures seamless workflow integration: Tier 1 is the Tool Holder Interface Systems — the foundation that connects cutting tools to machine spindles; Tier 2 is the Rough Boring Systems — high-efficiency material removal tools for primary hole creation; Tier 3 is the Fine Boring Systems — ultra-precision finishing tools for final dimensional accuracy and surface quality. This modular approach allows manufacturers to configure optimal tooling solutions for any application while maintaining compatibility across the entire system range.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The tool holder systems form the critical mechanical interface between the machine spindle and cutting tools, ensuring optimal rigidity, concentricity, and versatility. The LBK Series Boring Cutter Toolholders represent the most versatile tool holder family in the system, primarily designed for boring tools with diameters below 200mm, accommodating virtually every machine spindle interface standard worldwide including ISO, DIN, and ANSI configurations. The rough boring category encompasses powerful tools designed for rapid stock removal and primary hole creation, with TWE and RBH double edge systems representing the pinnacle of rough boring efficiency. The fine boring category represents the apex of boring precision, with HBOR fine boring head systems featuring extraordinary 0.002mm micro-adjustment capability covering Ø2mm to Ø160mm range.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The primary function of the MZG Boring Machining System is to provide a complete, integrated solution for precision hole machining that combines maximum efficiency in material removal with ultimate accuracy in final finishing. The system's modular architecture enables manufacturers to configure optimal tooling solutions for any application while maintaining compatibility and interchangeability across the entire product range. Key competitive advantages include unparalleled precision capabilities, comprehensive diameter coverage, exceptional stability and rigidity, operational flexibility through modular design, and universal machine compatibility through diverse tool holder options. This integrated approach significantly reduces inventory requirements, simplifies tooling management, and ensures consistent quality across all boring operations.
                    </p>
                  </div>
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
                        <strong>Materials:</strong> HSS, Carbide, Tool Steel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiN, TiCN, TiAlN, Uncoated
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Precision Range:</strong> 0.002mm-0.01mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Diameter Range:</strong> Ø2mm-Ø1250mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Interface Standards:</strong> BT, SK, HSK, MT, NT, C
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
                  <div className="relative w-full bg-white" style={{ height: "160px" }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 border-t">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold line-clamp-2 flex-1 mr-2">{product.name}</h3>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">{product.pageNumber}</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      {product.series && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Series:</span>
                          <span className="text-gray-900 text-right">{product.series}</span>
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

              {/* Boring Operations */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/50 h-full hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                    <Tool className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Boring Operations</h3>
                </div>
                <div className="space-y-1">
                  {boringOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1 group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Compatibility */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/50 h-full hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                    <Info className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Material Compatibility</h3>
                </div>
                <div className="space-y-1">
                  {machineableMaterials.map((material, index) => (
                    <div key={index} className="flex items-center py-1 group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{material}</span>
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
              <h2 className="text-3xl font-bold">Main Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "System Architecture Integration",
                  description: "Three-tier architecture ensures seamless workflow integration between tool holder interface systems, rough boring systems, and fine boring systems, from initial material removal to final finishing operations.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Excellence Performance",
                  description: "System provides industry-leading precision with micro-adjustment capabilities from 0.002mm (HBOR) to 0.01mm (CBH/CBI/NBJ/NBH), enabling manufacturers to meet the most stringent tolerance requirements.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Comprehensive Range Coverage",
                  description: "Total system capability spans from Ø2mm to Ø1250mm, accommodating virtually any industrial boring requirement, from precision instrument components to large mechanical housings.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Stability",
                  description: "Integrated dynamic balance structures, anti-vibration technologies, and rigid construction methodologies ensure stable operation across all speed ranges and cutting conditions.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Operational Efficiency Optimization",
                  description: "Features such as internal coolant supply, back boring capability, and modular design architecture maximize productivity while minimizing setup time and tool change requirements.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Modular Design",
                  description: "Universal machine compatibility through diverse tool holder options significantly reduces inventory requirements, simplifies tool management, and ensures consistent quality across all boring operations.",
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

          {/* Detailed Technical Analysis */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">MZG Boring System Comprehensive Analysis</h2>
            </div>
            
            {/* System Architecture and Integration */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">System Architecture and Integration</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The MZG Boring Machining System is built on a three-tier architecture ensuring seamless workflow integration:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-600 mb-2">Tier 1: Tool Holder Interface Systems</h4>
                      <p className="text-sm text-gray-700">Foundation that connects cutting tools to machine spindles</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-600 mb-2">Tier 2: Rough Boring Systems</h4>
                      <p className="text-sm text-gray-700">High-efficiency material removal tools for primary hole creation</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-600 mb-2">Tier 3: Fine Boring Systems</h4>
                      <p className="text-sm text-gray-700">Ultra-precision finishing tools for final dimensional accuracy and surface quality</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    This modular approach allows manufacturers to configure optimal tooling solutions for any application while maintaining compatibility across the entire system range.
                  </p>
                </div>
              </div>
            </div>

            {/* Tool Holder Systems */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Tool Holder Systems: Universal Connection Foundation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">LBK Series Boring Cutter Toolholders</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The LBK Series represents the most versatile toolholder family in the system, primarily designed for boring tools with diameters below 200mm. This comprehensive series accommodates virtually every machine spindle interface standard worldwide, including ISO, DIN, and ANSI configurations.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Modular design includes extension bar compatibility, allowing deep hole applications while maintaining rigidity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Precision-ground interfaces ensure maximum concentricity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Robust construction suitable for heavy-duty applications</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">NBH2084 & BST Heavy-Duty Boring Toolholders</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These heavy-duty toolholders are specifically designed for large-diameter boring applications exceeding 200mm. The NBH2084 and BST systems provide exceptional torsional rigidity and stability required for high-torque rough boring operations.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Robust construction effectively suppresses vibration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Maintains tool path accuracy even under the most demanding cutting conditions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Optimized for TWE and RBH large-diameter boring systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rough Boring Systems */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Rough Boring Systems: High-Efficiency Material Removal</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">TWE & RBH Double-Edge Rough Boring Systems</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These double-cutter systems represent the pinnacle of rough boring efficiency, featuring dual cutting edges that effectively double material removal rates compared to single-point tools. The TWE system covers diameters from Ø20mm to Ø810mm, while the RBH system extends this range to Ø1200mm, making it ideal for large-scale industrial applications.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">TWE System Features</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Diameter Range: Ø20mm - Ø810mm</li>
                      <li>• Innovative high/low break design</li>
                      <li>• Rigid toothed sliding seat design</li>
                      <li>• Configurable single-edge, double-edge or step boring</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">RBH System Features</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Diameter Range: Ø20mm - Ø1200mm</li>
                      <li>• Ideal for large-scale industrial applications</li>
                      <li>• Direct component structure for diameters above 120mm</li>
                      <li>• Maximum rigidity design</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">BSA/BSB Rough Boring Cutters</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    These dedicated rough boring cutters cover the Ø20mm to Ø190mm range, offering 45° and 90° configurations to accommodate different entry angles and material entry conditions.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Excellent performance in through-hole and blind hole applications</li>
                    <li>• Sliding groove parallel to cutting edge</li>
                    <li>• Optimized chip evacuation and surface finish consistency</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">TBL & TBC Fixed Rough Boring Systems</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Designed for high-volume production environments, these fixed geometry tools provide maximum rigidity and repeatability. The TBL system handles diameters up to Ø50mm, while TBC systems cover Ø45mm to Ø130mm.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Non-adjustable design eliminates setup variables</li>
                    <li>• Ensures consistent results in repetitive production scenarios</li>
                    <li>• TBC also available for rough boring operations with different sizes and cutting edge quantities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fine Boring Systems */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Fine Boring Systems: Ultimate Precision and Surface Quality</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">HBOR Fine Boring Head System</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The HBOR system is the ultimate precision tool in the MZG portfolio, featuring extraordinary 0.002mm micro-adjustment capability. This system covers Ø2mm to Ø160mm (expandable to Ø280mm with BM140 holders) and includes back boring capability.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Specialized carbide small boring cutters</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Precision adjustment mechanism designed for the most demanding tolerance requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Enhanced versatility with back boring capability</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">CBH Fine Boring Head System</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This highly versatile system offers 0.01mm micro-adjustment precision across an impressive range from Ø20mm to Ø1250mm, including specialized large-diameter heads designed for major industrial applications.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Modular design flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Internal coolant supply enhances tool life and chip evacuation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Dynamic balance structure for stable high-speed operation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Scenarios and Industrial Implementation */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Application Scenarios and Industrial Implementation</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-semibold mb-3 text-blue-900">Aerospace and Defense</h4>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Precision engine components, landing gear assemblies, and structural elements requiring strict tolerances and excellent surface finishes.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold mb-3 text-green-900">Automotive Manufacturing</h4>
                  <p className="text-sm text-green-800 leading-relaxed">
                    Engine blocks, transmission housings, hydraulic components, and precision gear assemblies machining.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                  <h4 className="text-lg font-semibold mb-3 text-red-900">Heavy Machinery</h4>
                  <p className="text-sm text-red-800 leading-relaxed">
                    Large frame components, hydraulic cylinders, turbine housings, and industrial gearbox machining.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <h4 className="text-lg font-semibold mb-3 text-purple-900">Precision Manufacturing</h4>
                  <p className="text-sm text-purple-800 leading-relaxed">
                    Die and mold applications, measuring instruments, and high-precision mechanical assemblies machining.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <h4 className="text-lg font-semibold mb-3 text-orange-900">Energy Industry</h4>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    Power generation equipment, oil and gas industry components, and renewable energy system parts machining.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">General Manufacturing</h4>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Wide range of industrial applications requiring reliable, precise, and efficient boring solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {(() => {
                // Function to randomly get images from current category products
                const getRandomProductImage = () => {
                  const randomIndex = Math.floor(Math.random() * products.length);
                  return products[randomIndex].image;
                };
                
                // Define all categories in the same directory
                const allHoleMachiningCategories = [
                  {
                    title: "Drill Bit",
                    image: getRandomProductImage(),
                    description: "Drill bit tools for hole machining",
                    url: "/standard-tools/hole-machining/drill-bit",
                  },
                  {
                    title: "Fast Drilling",
                    image: getRandomProductImage(),
                    description: "Fast drilling tools",
                    url: "/standard-tools/hole-machining/fast-drilling",
                  },
                  {
                    title: "Fine Boring",
                    image: getRandomProductImage(),
                    description: "Fine boring machining tools",
                    url: "/standard-tools/hole-machining/fine-boring",
                  },
                  {
                    title: "Rough Boring",
                    image: getRandomProductImage(),
                    description: "Rough boring machining tools",
                    url: "/standard-tools/hole-machining/rough-boring",
                  },
                ];
                
                // Randomly select up to 4 categories
                const shuffled = [...allHoleMachiningCategories].sort(() => 0.5 - Math.random());
                const selectedCategories = shuffled.slice(0, 4);
                
                return selectedCategories.map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Hole Machining Tools" url={category.url} />
                ));
              })()}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-16 animate-gradient-xy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Professional Boring Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select optimal boring tools for specific applications, materials, and production requirements. From tool holder systems to precision boring systems, we provide comprehensive boring solutions.
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
                  Request Custom Solutions
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