import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function RoughBoringPage() {
  // Product data based on the MZG Rough Boring System
  const products = [
    {
      id: "rough-boring-001",
      name: "TWE Double-Edge Head",
      image: "/images/twe-double-edge-head.png",
      description: "High-efficiency double-edge rough boring head",
      series: "TWE High-Efficiency Series",
      diameter: "Ø20~Ø204mm",
      configuration: "Double-edge, single-edge, stepped boring",
      application: "Maximum material removal with twin-cutter design",
      features: "High/low break difference design, precise side scales",
      pageNumber: "TWE",
    },
    {
      id: "rough-boring-002",
      name: "TWE Large Diameter Head",
      image: "/images/twe-large-diameter.png",
      description: "Large diameter rough boring specialist",
      series: "TWE Large Diameter Series",
      diameter: "Ø200~Ø810mm",
      structure: "New serrated sliding seat design",
      application: "Large diameter heavy-duty rough boring",
      features: "Outstanding rigidity, stable cutting force transmission",
      pageNumber: "TWE-L",
    },
    {
      id: "rough-boring-003",
      name: "RBH Double-Edge Head",
      image: "/images/rbh-double-edge-head.png",
      description: "Robust double-edge boring head",
      series: "RBH Robust Series",
      diameter: "Ø19~Ø204mm",
      configuration: "Double-edge, single-edge, stepped boring",
      application: "Heavy-duty material removal operations",
      features: "Twin-cutter design, high material removal rate",
      pageNumber: "RBH",
    },
    {
      id: "rough-boring-004",
      name: "RBH Large Diameter Head",
      image: "/images/rbh-large-diameter.png",
      description: "Ultra-large diameter boring solution",
      series: "RBH Large Diameter Series",
      diameter: "Ø200~Ø1200mm",
      structure: "Direct component structure",
      application: "Ultra-large diameter rough boring operations",
      features: "Simple and rigid construction, maximum stability",
      pageNumber: "RBH-L",
    },
    {
      id: "rough-boring-005",
      name: "BSA Rough Boring Tool",
      image: "/images/bsa-rough-boring.png",
      description: "Versatile rough boring tool for through-holes",
      series: "BSA Versatile Series",
      diameter: "Ø20~Ø190mm",
      angles: "45°, 90° bevel angles",
      application: "Through-hole and blind-hole machining",
      features: "Multiple angle options, high versatility",
      pageNumber: "BSA",
    },
    {
      id: "rough-boring-006",
      name: "BSB Rough Boring Tool",
      image: "/images/bsb-rough-boring.png",
      description: "Specialized rough boring tool for blind holes",
      series: "BSB Specialized Series",
      diameter: "Ø20~Ø190mm",
      angles: "45°, 90° bevel angles",
      application: "Blind-hole rough boring operations",
      features: "Optimized for blind-hole geometry",
      pageNumber: "BSB",
    },
    {
      id: "rough-boring-007",
      name: "SCT Adjustable Boring Bar",
      image: "/images/sct-adjustable-bar.png",
      description: "Semi-finishing adjustable boring bar",
      series: "SCT Semi-Finishing Series",
      diameter: "Ø10~Ø50mm",
      interface: "Straight shank",
      application: "Semi-finishing operations with better accuracy",
      features: "Adjustable design, improved surface finish",
      pageNumber: "SCT",
    },
    {
      id: "rough-boring-008",
      name: "TBS Insert-Type Bar",
      image: "/images/tbs-insert-bar.png",
      description: "30° angle insert-type rough boring bar",
      series: "TBS Insert-Type Series",
      diameter: "Ø20~Ø190mm",
      angle: "30° angle",
      application: "Insert-type rough boring with 30° geometry",
      features: "Disposable inserts, cost-effective operation",
      pageNumber: "TBS",
    },
    {
      id: "rough-boring-009",
      name: "CBS Insert-Type Bar",
      image: "/images/cbs-insert-bar.png",
      description: "45° angle insert-type rough boring bar",
      series: "CBS Insert-Type Series",
      diameter: "Ø20~Ø190mm",
      angle: "45° angle",
      application: "Insert-type rough boring with 45° geometry",
      features: "Optimized chip evacuation, stable cutting",
      pageNumber: "CBS",
    },
    {
      id: "rough-boring-010",
      name: "SBS Insert-Type Bar",
      image: "/images/sbs-insert-bar.png",
      description: "90° angle insert-type rough boring bar",
      series: "SBS Insert-Type Series",
      diameter: "Ø20~Ø190mm",
      angle: "90° angle",
      application: "Insert-type rough boring with 90° geometry",
      features: "Maximum rigidity, heavy-duty cutting",
      pageNumber: "SBS",
    },
    {
      id: "rough-boring-011",
      name: "TBL Fixed Boring Bar",
      image: "/images/tbl-fixed-bar.png",
      description: "Fixed double-edge boring bar",
      series: "TBL Fixed Series",
      diameter: "Up to Ø50mm",
      type: "Fixed double-edge",
      application: "Small diameter rough boring operations",
      features: "Fixed geometry, reliable performance",
      pageNumber: "TBL",
    },
    {
      id: "rough-boring-012",
      name: "TBC Fixed Boring Head",
      image: "/images/tbc-fixed-head.png",
      description: "Fixed double-edge boring head",
      series: "TBC Fixed Series",
      diameter: "Ø45~Ø130mm",
      type: "Fixed double-edge",
      application: "Medium diameter rough boring operations",
      features: "Robust construction, consistent performance",
      pageNumber: "TBC",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Zap",
      title: "Maximum Material Removal",
      description:
        "TWE and RBH double-edge rough boring heads with twin-cutter design effectively double the material removal rate compared to single-point tools.",
    },
    {
      icon: "Shield",
      title: "Exceptional Rigidity",
      description:
        "New serrated sliding seat design and direct component structures provide outstanding rigidity and stable cutting force transmission under heavy loads.",
    },
    {
      icon: "Layers",
      title: "High Versatility",
      description:
        "Configurable for single-edge, double-edge, and stepped boring with various angles (30°, 45°, 90°) for through-holes and blind-holes.",
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
    "Heavy Equipment Manufacturing",
    "Energy Sector",
    "General Engineering",
    "Automotive Industry",
    "Aerospace Manufacturing",
    "Marine Engineering",
    "Mining Equipment",
    "Construction Machinery",
    "Oil & Gas Equipment",
    "Power Generation",
  ]

  // Primary processes
  const primaryProcesses = [
    "High-Volume Material Removal",
    "Stepped Boring Operations",
    "Preparation for Finishing",
    "Semi-Finishing Operations",
    "Through-Hole Boring",
    "Blind-Hole Boring",
    "Multi-Diameter Boring",
    "Heavy-Duty Roughing",
    "Cast Material Processing",
    "Forged Material Processing",
  ]

  // Applications
  const applications = [
    "Engine Blocks",
    "Hydraulic Cylinders",
    "Large Frame Components",
    "Turbine Components",
    "Pump Housings",
    "Valve Bodies",
    "Casting Preparations",
    "Forging Operations",
    "Pre-Drilled Hole Expansion",
    "Deep Hole Roughing",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Double-Edge Technology",
      description:
        "TWE and RBH systems feature twin-cutter design with high/low break difference for effective chip breaking and doubled material removal rates.",
      color: "border-red-600",
    },
    {
      title: "Comprehensive Size Range",
      description:
        "Complete boring range from Ø10mm (SCT) to Ø1200mm (RBH Large) with specialized solutions for every roughing requirement.",
      color: "border-blue-600",
    },
    {
      title: "Robust Construction",
      description:
        "Serrated sliding seat design, direct component structures, and multiple angle options (30°, 45°, 90°) for maximum stability and versatility.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "TWE Double-Edge Range", value: "Ø20~Ø204mm" },
    { label: "TWE Large Range", value: "Ø200~Ø810mm" },
    { label: "RBH Double-Edge Range", value: "Ø19~Ø204mm" },
    { label: "RBH Large Range", value: "Ø200~Ø1200mm" },
    { label: "BSA/BSB Range", value: "Ø20~Ø190mm" },
    { label: "SCT Range", value: "Ø10~Ø50mm" },
    { label: "TBL Range", value: "Up to Ø50mm" },
    { label: "TBC Range", value: "Ø45~Ø130mm" },
    { label: "Available Angles", value: "30°, 45°, 90°" },
    { label: "Tool Holders", value: "LBK, BST, NBH2084" },
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
                  MZG Rough Boring System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the MZG Rough Boring System, the foundational workhorse of our comprehensive Hole Machining System. This system is engineered with a primary focus on <strong>power, efficiency, and robustness</strong>. Its principal function is the rapid removal of large volumes of material from cast, forged, or pre-drilled holes, covering an exceptionally wide range from <strong>Ø10mm up to Ø1200mm</strong>.
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
                    src="/images/rough-boring-hero.png"
                    alt="Professional MZG Rough Boring System Collection"
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
                    The performance of the MZG Rough Boring System is defined by its <strong>material removal rate, stability under heavy loads, and operational flexibility</strong>. The <strong>TWE and RBH double-edge rough boring heads</strong> are central to this, as their twin-cutter design effectively doubles the material removal rate compared to a single-point tool. The <strong>high/low break difference design</strong> further optimizes this by breaking chips effectively, allowing for higher feed rates and a more stable cutting process.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>TWE Large Rough Boring heads feature a new serrated sliding seat design</strong>, which provides outstanding rigidity and ensures stable transmission of cutting force. This robust construction minimizes vibration and deflection even during heavy cuts. For diameters above 120mm, the system utilizes <strong>direct component structures</strong>, which are inherently simple and rigid, further enhancing stability.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The TWE and RBH systems can be configured for <strong>single-edge boring, double-edge boring, and stepped (high/low-level) boring</strong>. The availability of various boring bars with different angles <strong>(30°, 45°, 90°)</strong> provides solutions for different material entry conditions and the ability to machine both <strong>through-holes and blind-holes</strong>.
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
                        <strong>Diameter Range:</strong> Ø10~Ø1200mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material Removal:</strong> Double-edge design
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Configurations:</strong> Single, double, stepped boring
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Angles:</strong> 30°, 45°, 90° options
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Through-holes & blind-holes
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
                      {product.configuration && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Config:</span>
                          <span className="text-gray-900 text-xs">{product.configuration}</span>
                        </div>
                      )}
                      {product.structure && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Structure:</span>
                          <span className="text-gray-900 text-xs">{product.structure}</span>
                        </div>
                      )}
                      {product.angles && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Angles:</span>
                          <span className="text-gray-900 text-xs">{product.angles}</span>
                        </div>
                      )}
                      {product.angle && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Angle:</span>
                          <span className="text-gray-900 text-xs">{product.angle}</span>
                        </div>
                      )}
                      {product.interface && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Interface:</span>
                          <span className="text-gray-900 text-xs">{product.interface}</span>
                        </div>
                      )}
                      {product.type && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Type:</span>
                          <span className="text-gray-900 text-xs">{product.type}</span>
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
                    <h3 className="text-lg font-medium text-blue-800">Tool Holder Selection</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        For diameters <strong>&gt;200mm use NBH2084 and BST holders</strong>. For diameters <strong>&lt;200mm use LBK series holders</strong> (BT-LBK, SK-LBK, HSK-LBK). LBK extension rods available for deep-hole applications.
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
                    <h3 className="text-lg font-medium text-yellow-800">Cutting Parameters</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        <strong>High/low break difference design</strong> enables higher feed rates and stable cutting. Use <strong>precise side scales</strong> on TWE system for accurate aperture adjustment and quick setup.
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
                  title: "Maximum Material Removal",
                  description: "Double-edge design with twin-cutter configuration effectively doubles material removal rate compared to single-point tools.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Exceptional Rigidity",
                  description: "Serrated sliding seat design and direct component structures provide outstanding stability under heavy cutting loads.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Configuration",
                  description: "Single-edge, double-edge, and stepped boring capabilities with multiple angle options for diverse applications.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Efficient Chip Breaking",
                  description: "High/low break difference design enables effective chip breaking for higher feed rates and stable cutting process.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Quick Setup & Adjustment",
                  description: "Precise side scales and modular design allow quick and reliable diameter setting with easy tool configuration.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Comprehensive Coverage",
                  description: "Complete diameter range from Ø10mm to Ø1200mm covers all rough boring requirements from small to ultra-large holes.",
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
                The main function of the MZG Rough Boring System is <strong>to provide a powerful, highly efficient, and robust tooling solution for the first stage of hole machining, focusing on maximum material removal</strong>. It serves as the foundational step in the production of precision holes, rapidly creating the basic geometry and preparing a stable, concentric surface for subsequent semi-finishing or fine boring operations. By excelling at this high-volume task, the system maximizes overall process efficiency and significantly reduces total cycle time.
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
                  title: "Fine Boring System",
                  image: "/images/fine-boring-system.jpg",
                  description: "Ultra-precision boring for finishing operations",
                  url: "/standard-tools/hole-machining/fine-boring",
                },
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
              <h2 className="text-3xl font-bold mb-4">Need Heavy-Duty Rough Boring Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal MZG Rough Boring System configuration for your specific material removal requirements, hole sizes, and production goals. From double-edge technology to tool holder selection, we provide comprehensive solutions for maximum efficiency and productivity in rough boring operations.
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