import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function DrillBitPage() {
  // Product data based on the MZG Drill Bit System
  const products = [
    {
      id: "drill-bit-001",
      name: "WC Type U-Drill",
      image: "/images/wc-type-u-drill.png",
      description: "High-efficiency indexable drill for through-holes",
      series: "Fast Drill WC Series",
      diameter: "Ø14~Ø65mm",
      inserts: "WCMX",
      depths: "2D to 10D",
      application: "Through-hole drilling with aggressive cutting speeds",
      features: "Indexable carbide inserts, internal coolant",
      pageNumber: "WC-FD",
    },
    {
      id: "drill-bit-002",
      name: "SP Type U-Drill",
      image: "/images/sp-type-u-drill.png",
      description: "Specialized drill for flat-bottom holes",
      series: "Fast Drill SP Series",
      diameter: "Ø10~Ø60mm",
      inserts: "SPMG",
      depths: "2D to 10D",
      application: "Clean, precise flat-bottom hole creation",
      features: "Flat-bottom geometry, internal cooling",
      pageNumber: "SP-FD",
    },
    {
      id: "drill-bit-003",
      name: "SO Type U-Drill",
      image: "/images/so-type-u-drill.png",
      description: "Low resistance flat-bottom drill",
      series: "Fast Drill SO Series",
      diameter: "Ø10~Ø60mm",
      inserts: "SOMT",
      depths: "2D to 10D",
      application: "Low resistance flat-bottom drilling",
      features: "Optimized chip evacuation, reduced cutting forces",
      pageNumber: "SO-FD",
    },
    {
      id: "drill-bit-004",
      name: "XO Type U-Drill",
      image: "/images/xo-type-u-drill.png",
      description: "Advanced flat-bottom drill system",
      series: "Fast Drill XO Series",
      diameter: "Ø10~Ø60mm",
      inserts: "XOMT",
      depths: "2D to 10D",
      application: "High-performance flat-bottom drilling",
      features: "Enhanced precision, superior surface finish",
      pageNumber: "XO-FD",
    },
    {
      id: "drill-bit-005",
      name: "Spade Drill System",
      image: "/images/spade-drill-system.png",
      description: "Deep hole drilling specialist",
      series: "Spade Drill Series",
      diameter: "Ø12~Ø33.5mm",
      depths: "1.5D, 3D, 5D, 8D, 12D",
      application: "One-shot deep hole drilling without retraction",
      features: "Self-centering, double symmetric stress distribution",
      pageNumber: "SPADE",
    },
    {
      id: "drill-bit-006",
      name: "VMD Large Drill Bit",
      image: "/images/vmd-large-drill.png",
      description: "Large diameter boring solution",
      series: "VMD Large Drill Series",
      diameter: "Ø18~Ø180mm",
      structure: "Modular with center guide",
      application: "Large-scale boring operations",
      features: "Replaceable clamps, adjustable diameter (0-5mm)",
      pageNumber: "VMD",
    },
    {
      id: "drill-bit-007",
      name: "Hollow Drill Bit",
      image: "/images/hollow-drill-bit.png",
      description: "Large core removal specialist",
      series: "Hollow Drill Series",
      diameter: "Ø50~Ø220mm",
      application: "Large core removal with central water supply",
      features: "Central cooling, efficient material removal",
      pageNumber: "HOLLOW",
    },
    {
      id: "drill-bit-008",
      name: "Carbide Drill",
      image: "/images/carbide-drill.png",
      description: "Difficult materials specialist",
      series: "Solid Carbide Series",
      diameter: "Various sizes",
      hardness: "Up to HRC55°",
      application: "Hardened steels and nonferrous metals",
      features: "Advanced coatings, superior wear resistance",
      pageNumber: "CARBIDE",
    },
    {
      id: "drill-bit-009",
      name: "Powder HSS Drill",
      image: "/images/powder-hss-drill.png",
      description: "High performance with Nano coating",
      series: "Powder HSS Series",
      diameter: "Wide range",
      depths: "3D & 5D series",
      application: "Wide range of steels and alloys",
      features: "Nano coating, enhanced performance",
      pageNumber: "P-HSS",
    },
    {
      id: "drill-bit-010",
      name: "HSS Drill",
      image: "/images/hss-drill.png",
      description: "General purpose drilling solution",
      series: "HSS General Series",
      diameter: "Ø0.2~Ø50mm",
      types: "Standard & Extra-long series",
      application: "General purpose drilling applications",
      features: "Wide diameter range, cost-effective",
      pageNumber: "HSS",
    },
    {
      id: "drill-bit-011",
      name: "Centering Drill",
      image: "/images/centering-drill.png",
      description: "High-precision positioning specialist",
      series: "Centering Drill Series",
      diameter: "Ø0.4~Ø10mm",
      angles: "60°, 90°, 120°",
      application: "Perfect starting point creation",
      features: "Tungsten steel, various coatings",
      pageNumber: "CENTER",
    },
    {
      id: "drill-bit-012",
      name: "Swordtooth Drill Shank",
      image: "/images/swordtooth-drill.png",
      description: "High-efficiency replaceable blade system",
      series: "Swordtooth Series",
      diameter: "Ø12~Ø33.5mm",
      depths: "Up to 12D",
      application: "High-efficiency deep hole drilling",
      features: "Replaceable blades, high-rigidity holders",
      pageNumber: "SWORD",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Zap",
      title: "Exceptional Machining Speed",
      description:
        "Fast Drill Bits with indexable carbide inserts achieve aggressive cutting speeds and feed rates, while Spade Drills perform one-shot drilling without retraction.",
    },
    {
      icon: "Target",
      title: "Uncompromising Precision",
      description:
        "Multiple layers of precision control from Centering Drills to EZ Guide Sleeve accessories ensure perfect hole quality and dimensional accuracy.",
    },
    {
      icon: "Shield",
      title: "Outstanding Cost-Effectiveness",
      description:
        "Interchangeable inserts and modular designs minimize long-term operational costs while maximizing tool utilization and inventory efficiency.",
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

  // Materials compatibility
  const materials = [
    "Carbon Steel",
    "Alloy Steel",
    "Die Steel",
    "Tempered Steel",
    "Stainless Steels",
    "Gray Cast Iron",
    "Alloyed Cast Iron",
    "Aluminum Alloys",
    "Copper Alloys",
    "Magnesium Alloys",
    "Zinc Alloys",
    "Titanium Alloys",
    "Heat-Resistant Superalloys",
    "Carbon Fiber Composites",
  ]

  // Primary processes
  const primaryProcesses = [
    "High-Volume Production Drilling",
    "Deep Hole Manufacturing",
    "Large-Scale Boring",
    "High-Precision Hole-Making",
    "Hard Material Drilling",
    "Through-Hole Creation",
    "Flat-Bottom Hole Drilling",
    "Core Removal Operations",
    "Precision Centering",
    "Multi-Diameter Processing",
  ]

  // Applications
  const applications = [
    "Mold Coolant Channels",
    "Aerospace Structural Parts",
    "Energy Sector Components",
    "Machine Bases",
    "Engine Blocks",
    "Large Hydraulic Manifolds",
    "Hardened Steel Molds",
    "Dies and Tooling",
    "Superalloy Components",
    "Precision Machinery Parts",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Advanced Insert Technology",
      description:
        "Comprehensive range of indexable inserts (WCMX, SPMG, SOMT, XOMT, WDXT, GCMT/GPMT) with enhanced coatings (TIN, TIALN, Nano) for superior performance.",
      color: "border-red-600",
    },
    {
      title: "Complete Size Coverage",
      description:
        "Extensive diameter range from Ø0.2mm (HSS) to Ø220mm (Hollow Drills) with depth capabilities up to 12D for comprehensive application coverage.",
      color: "border-blue-600",
    },
    {
      title: "Intelligent Cooling Systems",
      description:
        "Internal coolant holes in high-performance drills deliver coolant directly to cutting edge for thermal control and powerful chip evacuation.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Fast Drill Range", value: "Ø10~Ø65mm" },
    { label: "Spade Drill Range", value: "Ø12~Ø33.5mm" },
    { label: "VMD Large Drill Range", value: "Ø18~Ø180mm" },
    { label: "Hollow Drill Range", value: "Ø50~Ø220mm" },
    { label: "HSS Drill Range", value: "Ø0.2~Ø50mm" },
    { label: "Centering Drill Range", value: "Ø0.4~Ø10mm" },
    { label: "Maximum Depth Ratio", value: "12D" },
    { label: "Hardness Capability", value: "Up to HRC55°" },
    { label: "Insert Types", value: "WCMX, SPMG, SOMT, XOMT, WDXT" },
    { label: "Coating Options", value: "TIN, TIALN, Nano" },
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
                  MZG Drill Bit System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the MZG Drill Bit portfolio, a foundational pillar of our comprehensive Hole Machining System. This system represents a holistic approach to drilling, engineered to address virtually every industrial requirement with a focus on <strong>High Efficiency Drilling</strong> and <strong>High Precision Hole Machining</strong> through advanced material science and optimized tool geometries.
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
                    src="/images/drill-bit-hero.png"
                    alt="Professional MZG Drill Bit System Collection"
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
                    The performance of the MZG Drill Bit system is defined by its ability to deliver <strong>superior speed, accuracy, reliability, and economic value</strong> across its entire range. <strong>Fast Drill Bits</strong>, particularly the <strong>U-Drills</strong>, are the workhorses of high-efficiency production, utilizing indexable carbide inserts to achieve aggressive cutting speeds and feed rates. The <strong>Spade Drill</strong> line's ability to perform <strong>one-shot drilling without retraction</strong> under proper coolant conditions eliminates time-consuming pecking cycles.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The system provides multiple layers of precision control. <strong>Centering Drills and Fixed-Point Drills</strong> create a perfect starting point, eliminating drill wander. The <strong>Spade Drill's self-centering function and double symmetric stress distribution</strong> ensures excellent straightness in deep holes. For large-diameter applications, the <strong>VMD Large Drill Bits</strong> employ a <strong>center guide drill structure</strong> to guarantee concentricity.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The widespread use of <strong>interchangeable inserts</strong> means that only the small, worn cutting edge is replaced, not the entire tool body. The integration of <strong>internal coolant holes</strong> delivers coolant directly to the cutting edge, preventing thermal breakdown while powerfully evacuating chips to prevent jamming and tool failure.
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
                        <strong>Diameter Range:</strong> Ø0.2~Ø220mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Depth Capability:</strong> Up to 12D
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Hardness Range:</strong> Up to HRC55°
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Technology:</strong> Indexable carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Cooling:</strong> Internal coolant holes
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
                      {product.inserts && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Inserts:</span>
                          <span className="text-gray-900 text-xs">{product.inserts}</span>
                        </div>
                      )}
                      {product.depths && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Depths:</span>
                          <span className="text-gray-900 text-xs">{product.depths}</span>
                        </div>
                      )}
                      {product.structure && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Structure:</span>
                          <span className="text-gray-900 text-xs">{product.structure}</span>
                        </div>
                      )}
                      {product.hardness && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Hardness:</span>
                          <span className="text-gray-900 text-xs">{product.hardness}</span>
                        </div>
                      )}
                      {product.angles && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Angles:</span>
                          <span className="text-gray-900 text-xs">{product.angles}</span>
                        </div>
                      )}
                      {product.types && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Types:</span>
                          <span className="text-gray-900 text-xs">{product.types}</span>
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
                    <h3 className="text-lg font-medium text-blue-800">Insert Selection & Coatings</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        Choose appropriate insert grades (WCMX, SPMG, SOMT, XOMT) and coatings (TIN, TIALN, Nano) based on material and application. <strong>Enhanced edge treatments</strong> provide robust barrier against abrasion and wear.
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
                    <h3 className="text-lg font-medium text-yellow-800">EZ Guide Sleeve System</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        <strong>EZ Guide Sleeve</strong> allows fine-tuning of diameter (+0.6~-0.2 mm) and center height (+0.3~-0.2 mm) for micro-adjustments and machine variance compensation.
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
              {/* Materials Compatibility */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Materials Compatibility
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {materials.map((material, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{material}</span>
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
                  title: "High-Efficiency Production",
                  description: "Fast Drill Bits with indexable inserts achieve aggressive cutting speeds while Spade Drills eliminate pecking cycles for maximum productivity.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Control",
                  description: "Multiple precision layers from centering drills to EZ Guide Sleeve ensure perfect hole quality and dimensional accuracy.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Cost-Effective Operation",
                  description: "Interchangeable inserts and modular designs minimize tooling costs while maximizing tool utilization and inventory efficiency.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Superior Tool Life",
                  description: "Advanced coatings, enhanced edge treatments, and internal cooling systems ensure extended tool life and reliable performance.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Comprehensive Coverage",
                  description: "Complete diameter range from Ø0.2mm to Ø220mm with specialized solutions for every material and application requirement.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Advanced Technology",
                  description: "Self-centering functions, center guide structures, and intelligent cooling systems deliver unmatched drilling performance.",
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
                The main function of the MZG Drill Bit system is <strong>to provide a comprehensive, technologically advanced, and economically sound solution for every conceivable hole machining task</strong>. It empowers manufacturers by delivering a highly integrated and versatile portfolio of tools that reduce cycle times, lower operational costs, and enhance the precision and quality of the final product, regardless of the material, diameter, depth, or production volume.
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
                {
                  title: "Boring Tools",
                  image: "/images/boring-tools.jpg",
                  description: "Large diameter and precision boring solutions",
                  url: "/standard-tools/hole-machining/boring",
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
              <h2 className="text-3xl font-bold mb-4">Need Comprehensive Drilling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal MZG Drill Bit System configuration for your specific hole-making applications, material requirements, and precision goals. From insert selection to coating options and cooling requirements, we provide comprehensive solutions for maximum efficiency and cost-effectiveness.
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