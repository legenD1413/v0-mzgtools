import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function FastDrillingPage() {
  // Product data based on the MZG Fast Drilling System
  const products = [
    {
      id: "fast-drill-001",
      name: "WC Type Fast Drilling Bit (U-Drill, Through Hole)",
      image: "/images/k05-1.png",
      description: "High-efficiency indexable drill for through-holes",
      series: "U-Drill WC Series",
      diameter: "Ø14~Ø65mm",
      inserts: "WCMX",
      application: "For through hole drilling; cutting diameter Ø14~Ø65",
      features: "Internal coolant, optimized geometry",
      pageNumber: "K05",
    },
    {
      id: "fast-drill-002",
      name: "SP Type Fast Drilling Bit (U-Drill, Flat Bottom Hole)",
      image: "/images/k07-1.png",
      description: "Specialized drill for flat-bottom holes",
      series: "U-Drill SP Series",
      diameter: "Ø13~Ø60mm",
      inserts: "SPMG",
      application: "For flat bottom hole drilling; cutting diameter Ø13~Ø60",
      features: "Precise flat bottom, internal cooling",
      pageNumber: "K07",
    },
    {
      id: "fast-drill-003",
      name: "SO Type Fast Drilling Bit (U-Drill, Flat Bottom Hole)",
      image: "/images/k09-1.png",
      description: "Low resistance drill for flat-bottom holes",
      series: "U-Drill SO Series",
      diameter: "Ø10~Ø50mm",
      inserts: "SOMT",
      application: "For flat bottom hole drilling; cutting diameter Ø10~Ø50; low resistance",
      features: "Low resistance, deep hole capability",
      pageNumber: "K09",
    },
    {
      id: "fast-drill-004",
      name: "XO Type Fast Drilling Bit (U-Drill, Flat Bottom Hole)",
      image: "/images/k11-1.png",
      description: "Advanced low resistance flat-bottom drill",
      series: "U-Drill XO Series",
      diameter: "Ø13~Ø60mm",
      inserts: "XOMT,SPMT",
      application: "For flat bottom hole drilling; cutting diameter Ø13~Ø60; low resistance",
      features: "Enhanced chip control, internal coolant",
      pageNumber: "K11",
    },
    {
      id: "fast-drill-005",
      name: "WD Type Fast Drilling Bit (U-Drill, Flat Bottom Hole)",
      image: "/images/k13-1.png",
      description: "Heavy rough machining specialist",
      series: "U-Drill WD Series",
      diameter: "Ø13~Ø65mm",
      inserts: "WDXT",
      application: "For flat bottom hole drilling; cutting diameter Ø13~Ø65; for heavy rough machining",
      features: "Optimized for heavy roughing operations",
      pageNumber: "K13",
    },
    {
      id: "fast-drill-006",
      name: "TAF Discard Quick Drill (U-Drill, Flat Bottom Hole)",
      image: "/images/k16-1.png",
      description: "Quick drill for flat-bottom holes",
      series: "TAF Quick Drill Series",
      diameter: "Ø12~Ø56mm",
      inserts: "GCMT,GPMT",
      application: "For flat bottom hole drilling; cutting diameter Ø12~Ø56",
      features: "High-feed application, internal cooling",
      pageNumber: "K16",
    },
    {
      id: "fast-drill-007",
      name: "Spade Drill / Spade Drill Bar",
      image: "/images/k18-1.png",
      description: "Deep hole drilling specialist for fast drilling",
      series: "Spade Drill Series",
      diameter: "Ø9~Ø65mm",
      depths: "Up to 5xD ratio",
      inserts: "CZDP..",
      application: "For fast deep hole drilling (through hole); cutting diameter Ø9~Ø65; self-centering, suitable for deep holes within 5xD ratio; high precision",
      features: "Self-centering, one-shot drilling capability, center water hole for high-pressure coolant",
      specialNotes: "Upgraded replacement for traditional twist drills, suitable for CNC and conventional equipment. HSS and carbide inserts available for different applications.",
      pageNumber: "K18",
    },
    {
      id: "fast-drill-008",
      name: "SP Type Centering Fast Drilling Bit",
      image: "/images/k19-1.png",
      description: "High-precision centering and positioning drill",
      series: "Centering Drill SP Series",
      inserts: "SPMG",
      application: "Precision centering and positioning operations",
      features: "High-precision positioning, chamfering capability",
      pageNumber: "K19",
    },
    {
      id: "fast-drill-009",
      name: "WC Type Centering Fast Drilling Bit",
      image: "/images/k19-2.png",
      description: "High-precision centering and positioning drill",
      series: "Centering Drill WC Series",
      inserts: "WCMX",
      application: "Precision centering and positioning operations",
      features: "High-precision positioning, chamfering capability",
      pageNumber: "K19",
    },
    {
      id: "fast-drill-010",
      name: "VMD Large Drill Bit",
      image: "/images/k20-1.png",
      description: "Large diameter drilling solution with center guide",
      series: "VMD Large Drill Series",
      diameter: "Up to Ø105mm+",
      structure: "Modular with center guide",
      inserts: "WCMX",
      application: "Large diameter hole machining for oil, coal and other machine industries",
      features: "Center guide drill structure for better centering, replaceable clamps, adjustable external clamp (0-5mm), modular structure, center water hole",
      specialNotes: "Machining φ105mm depth 550mm possible. Improved security with chip breaker design. Automatic continuous feed without tool back-off.",
      pageNumber: "K20",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Zap",
      title: "Extreme Processing Efficiency",
      description:
        "Optimized geometries support high feed rates and cutting speeds, drastically reducing cycle times with one-shot drilling capability for deep holes.",
    },
    {
      icon: "Target",
      title: "Versatility & Superior Quality",
      description:
        "Distinguishes between through-hole and flat-bottom drilling, with center guide structures ensuring excellent centering and hole straightness.",
    },
    {
      icon: "Shield",
      title: "Outstanding Cost-Effectiveness",
      description:
        "Interchangeable carbide inserts reduce long-term tooling costs, with modular designs minimizing required inventory and simplifying tool management.",
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
    "Steels and Cast Iron",
    "Stainless Steels",
    "Aluminum & Non-Ferrous Metals",
    "Hardened Materials",
    "Powder Metallurgy",
    "Titanium & Superalloys",
    "Composite Materials",
    "Carbon Fiber",
  ]

  // Primary processes
  const primaryProcesses = [
    "High-Speed Through-Hole Drilling",
    "Flat-Bottom Hole Drilling",
    "Deep Hole Drilling",
    "Large Diameter Boring",
    "Precision Centering",
    "Trepanning Operations",
    "Chamfering",
    "Multi-Diameter Processing",
  ]

  // Applications
  const applications = [
    "Structural Steel Components",
    "Machine Frames",
    "Mold Making (Coolant Lines)",
    "Aerospace (Landing Gear)",
    "Energy Sector (Driveshafts)",
    "Valve Bodies",
    "Engine Blocks",
    "Heavy Machinery Components",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Advanced Insert Technology",
      description:
        "Interchangeable carbide inserts (WCMX, SPMG, SOMT, XOMT, WDXT, GCMT/GPMT, CZDP) with enhanced edge treatment for extended tool life and superior performance.",
      color: "border-red-600",
    },
    {
      title: "Comprehensive Size Range",
      description:
        "Complete diameter coverage from Ø9mm to Ø105mm+ with depth ratios up to 5xD for spade drill applications, suitable for various hole machining requirements.",
      color: "border-blue-600",
    },
    {
      title: "Intelligent Cooling Systems",
      description:
        "Internal coolant holes deliver high-pressure coolant directly to cutting zone for critical cooling and powerful chip evacuation.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "U-Drill Diameter Range", value: "Ø10~Ø65mm" },
    { label: "Spade Drill Range", value: "Ø9~Ø65mm" },
    { label: "VMD Large Drill Range", value: "Up to Ø105mm+" },
    { label: "TAF Quick Drill Range", value: "Ø12~Ø56mm" },
    { label: "Centering Drill Range", value: "Various sizes" },
    { label: "Maximum Depth Ratio", value: "5xD (Spade Drills)" },
    { label: "Insert Types", value: "WCMX, SPMG, SOMT, XOMT, WDXT, GCMT/GPMT, CZDP" },
    { label: "Cooling System", value: "Internal coolant holes" },
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
                  Hole Machining Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Fast Drilling System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the MZG Fast Drilling System, a cornerstone of our comprehensive Hole Machining System. This system is not merely a collection of drills; it is an integrated ecosystem of tooling engineered to deliver maximum efficiency, precision, and cost-effectiveness in hole creation through advanced indexable insert technology.
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
                    src="/images/Hole Machining Systems.png"
                    alt="Professional MZG Fast Drilling System Collection"
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
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="prose prose-xs max-w-none">
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The performance of the MZG Fast Drilling System is defined by its <strong>exceptional metal removal rates, superior hole quality, extended tool life, and outstanding economic efficiency</strong>. Tools like the <strong>U-Drills and Spade Drills</strong> are designed with optimized geometries that support <strong>high feed rates and cutting speeds</strong>, drastically reducing cycle times compared to traditional solid drills. The Spade Drill's ability to perform <strong>one-shot drilling without retraction for chip evacuation</strong> represents a monumental leap in productivity.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The system offers unparalleled application versatility, distinguishing between <strong>through-hole drilling (WC Type U-Drills)</strong> and <strong>flat-bottom hole drilling (SP, SO, and XO Type U-Drills)</strong>. For large-diameter applications, the <strong>VMD Large Drill Bit</strong> utilizes a <strong>center guide drill structure</strong> to guarantee excellent centering and hole straightness, preventing tool "walk" and ensuring accuracy over long depths.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The use of <strong>interchangeable carbide inserts</strong> means that only the small, worn cutting edge needs to be replaced, not the entire expensive tool body. Nearly all tools feature <strong>internal coolant holes</strong> that deliver high-pressure coolant directly to the cutting zone, providing critical cooling and powerfully flushing chips out of the hole.
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
                        <strong>Diameter Range:</strong> Ø9~Ø105mm+
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Depth Capability:</strong> Up to 5xD (Spade Drills)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Technology:</strong> WCMX, SPMG, SOMT, XOMT, WDXT, GCMT/GPMT, CZDP
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Cooling:</strong> Internal coolant holes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> Through-hole & Flat-bottom
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
                          <span className="text-gray-900">{product.series}</span>
                    </div>
                      )}
                      {product.inserts && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Inserts:</span>
                          <span className="text-gray-900">{product.inserts}</span>
                    </div>
                      )}
                      {product.description && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-600">{product.description}</p>
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
                    <h3 className="text-lg font-medium text-blue-800">Insert Selection</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        Choose appropriate insert grades and geometries based on material: <strong>WCMX for through-holes, SPMG/SOMT/XOMT for flat-bottom holes</strong>. Enhanced edge treatment significantly extends tool life.
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
                    <h3 className="text-lg font-medium text-yellow-800">Cooling Requirements</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        <strong>High-pressure coolant is essential</strong> for optimal performance. Internal coolant holes deliver coolant directly to cutting zone for critical cooling and chip evacuation.
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
                  title: "Extreme Processing Efficiency",
                  description: "High feed rates and cutting speeds with one-shot drilling capability drastically reduce cycle times and maximize productivity.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Superior Hole Quality",
                  description: "Distinguishes between through-hole and flat-bottom drilling with center guide structures ensuring excellent centering.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Cost-Effective Operation",
                  description: "Interchangeable carbide inserts reduce tooling costs while modular designs minimize inventory requirements.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Exceptional Chip Control",
                  description: "Internal coolant holes and optimized spiral designs ensure smooth operation and prevent chip jamming.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Extended Tool Life",
                  description: "Enhanced edge treatment and effective cooling significantly extend insert life and improve predictability.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Comprehensive Coverage",
                  description: "Complete diameter range from Ø0.4mm to Ø220mm with depth capabilities up to 12D for all applications.",
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
                The main function of the MZG Fast Drilling System is <strong>to provide a comprehensive, modular, and highly efficient toolkit for creating holes across an extensive range of diameters, depths, and materials</strong>. It masterfully combines the speed and economy of indexable insert technology with the rigidity and precision required by modern manufacturing, thereby empowering industries to reduce cycle times, lower tooling costs, and improve the overall quality and consistency of their machined products.
              </p>
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
                // 从本分类产品中随机获取图片的函数
                const getRandomProductImage = () => {
                  const randomIndex = Math.floor(Math.random() * products.length);
                  return products[randomIndex].image;
                };
                
                // 定义同目录下的所有分类
                const allHoleMachiningCategories = [
                  {
                    title: "Drill Bit",
                    image: getRandomProductImage(),
                    description: "标准钻头，适用于各种孔加工需求",
                    url: "/standard-tools/hole-machining/drill-bit",
                  },
                  {
                    title: "Rough Boring",
                    image: getRandomProductImage(),
                    description: "粗镗刀具，大直径孔粗加工",
                    url: "/standard-tools/hole-machining/rough-boring",
                  },
                  {
                    title: "Fine Boring",
                    image: getRandomProductImage(),
                    description: "精镗刀具，高精度孔加工",
                    url: "/standard-tools/hole-machining/fine-boring",
                  },
                ];
                
                // 随机选择最多5个分类（排除当前分类）
                const shuffled = [...allHoleMachiningCategories].sort(() => 0.5 - Math.random());
                const selectedCategories = shuffled.slice(0, Math.min(3, allHoleMachiningCategories.length));
                
                return selectedCategories.map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Hole Machining" url={category.url} />
                ));
              })()}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need High-Efficiency Drilling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal MZG Fast Drilling System configuration for your specific hole-making applications, material requirements, and productivity goals. From insert selection to cooling requirements, we provide comprehensive solutions for maximum efficiency and cost-effectiveness.
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