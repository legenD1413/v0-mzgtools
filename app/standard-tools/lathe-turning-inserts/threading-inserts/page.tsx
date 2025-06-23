import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Gauge } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function ThreadingInsertsPage() {
  // Product data based on various threading insert series
  const products = [
    {
      id: "ti-001",
      name: "16ER ISO60",
      image: "/images/16er-iso60-insert.png",
      description: "External right-hand ISO metric threading insert",
      series: "ER Series",
      standards: "ISO Metric",
      angle: "60°",
      application: "General fastening threads",
      materials: "Steel, Stainless Steel, Cast Iron",
      pageNumber: "16ER-ISO",
    },
    {
      id: "ti-002",
      name: "16IR UN60",
      image: "/images/16ir-un60-insert.png",
      description: "Internal right-hand UN threading insert",
      series: "IR Series",
      standards: "UN (UNC/UNF)",
      angle: "60°",
      application: "Internal threading, fasteners",
      materials: "Steel, Aluminum, Brass",
      pageNumber: "16IR-UN",
    },
    {
      id: "ti-003",
      name: "22ER NPT",
      image: "/images/22er-npt-insert.png",
      description: "External NPT tapered pipe threading insert",
      series: "ER Series",
      standards: "NPT",
      angle: "60°",
      application: "Tapered pipe threads, sealing",
      materials: "Steel, Stainless Steel",
      pageNumber: "22ER-NPT",
    },
    {
      id: "ti-004",
      name: "27IR BSPT",
      image: "/images/27ir-bspt-insert.png",
      description: "Internal BSPT tapered pipe threading insert",
      series: "IR Series",
      standards: "BSPT",
      angle: "55°",
      application: "British standard pipe threads",
      materials: "Steel, Cast Iron, Brass",
      pageNumber: "27IR-BSPT",
    },
    {
      id: "ti-005",
      name: "16ER ACME",
      image: "/images/16er-acme-insert.png",
      description: "External ACME trapezoidal threading insert",
      series: "ER Series",
      standards: "ACME",
      angle: "29°",
      application: "Power transmission, lead screws",
      materials: "Steel, Bronze, Cast Iron",
      pageNumber: "16ER-ACME",
    },
    {
      id: "ti-006",
      name: "22ER UNJ",
      image: "/images/22er-unj-insert.png",
      description: "External UNJ aerospace threading insert",
      series: "ER Series",
      standards: "UNJ",
      angle: "60°",
      application: "Aerospace fasteners, high fatigue",
      materials: "Titanium, Superalloys, Steel",
      pageNumber: "22ER-UNJ",
    },
    {
      id: "ti-007",
      name: "16IR TR30",
      image: "/images/16ir-tr30-insert.png",
      description: "Internal trapezoidal threading insert",
      series: "IR Series",
      standards: "TR (Trapezoidal)",
      angle: "30°",
      application: "Machine tool slides, valve stems",
      materials: "Steel, Cast Iron, Bronze",
      pageNumber: "16IR-TR",
    },
    {
      id: "ti-008",
      name: "27ER BUTTRESS",
      image: "/images/27er-buttress-insert.png",
      description: "External buttress threading insert",
      series: "ER Series",
      standards: "BUTTRESS",
      angle: "7°/45°",
      application: "High axial load applications",
      materials: "Steel, Hardened Steel",
      pageNumber: "27ER-BUT",
    },
    {
      id: "ti-009",
      name: "22IR API RD",
      image: "/images/22ir-api-rd-insert.png",
      description: "Internal API round threading insert",
      series: "IR Series",
      standards: "API RD",
      angle: "Round",
      application: "Oil & gas industry, casing",
      materials: "Steel, Alloy Steel",
      pageNumber: "22IR-API",
    },
    {
      id: "ti-010",
      name: "16ER PG",
      image: "/images/16er-pg-insert.png",
      description: "External PG conduit threading insert",
      series: "ER Series",
      standards: "PG (DIN405)",
      angle: "80°",
      application: "Electrical conduit threads",
      materials: "Steel, Aluminum, Brass",
      pageNumber: "16ER-PG",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Gauge",
      title: "Unmatched Profile Accuracy",
      description:
        "Ground to achieve full and highly accurate tooth profiles for 60° V-threads, 55° BSPT, 29° trapezoidal ACME, and complex buttress threads with guaranteed geometric integrity.",
    },
    {
      icon: "Target",
      title: "Superior Surface Finish",
      description:
        "Sharp, precision-ground cutting edges with advanced coatings minimize friction and heat, delivering superior thread surface finish free from burrs and tears.",
    },
    {
      icon: "Shield",
      title: "Exceptional Durability",
      description:
        "Premium micro-grain carbide substrates with specialized PVD/CVD coatings provide outstanding wear resistance and significantly longer tool life.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Gauge":
        return <Gauge className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Thread standards coverage
  const threadStandards = [
    "ISO (Metric) - General fastening",
    "UN (UNC, UNF, UNEF) - Imperial fastening",
    "NPT, NPTF - Tapered pipe threads",
    "BSPT - British standard pipe",
    "PG (DIN405) - Conduit threads",
    "RND (Round) - Special applications",
    "ACME, STUB ACME - Power transmission",
    "TR (Trapezoidal) - Linear motion",
    "SAGE (Sawtooth) - High axial loads",
    "UNJ - Aerospace applications",
    "API RD, BUT, EL - Oil & gas industry",
    "ABUT, BBUT - Buttress threads",
  ]

  // Application materials
  const applicationMaterials = [
    "Low-Carbon Steel",
    "High-Carbon Steel",
    "Hardened Steel (HRC 46-58+)",
    "Stainless Steel (all grades)",
    "Gray Cast Iron",
    "Ductile Cast Iron",
    "Aluminum Alloys",
    "Copper and Brass",
    "Titanium Alloys",
    "Superalloys (Inconel, Hastelloy)",
    "Plastics and Composites",
    "Non-metallic Materials",
  ]

  // Industry applications
  const industryApplications = [
    "Oil & Gas Industry",
    "Aerospace Manufacturing",
    "Power Transmission",
    "Hydraulics & Pneumatics",
    "General Engineering",
    "Automotive Industry",
    "Machine Tool Manufacturing",
    "Valve and Fitting Production",
  ]

  // Material grades
  const materialGrades = [
    {
      grade: "ZN60/ZN90",
      description: "Excellent surface finishes for general applications",
      applications: "Steel, Cast Iron, General threading",
    },
    {
      grade: "ZC250/ZC251",
      description: "Robust CVD-coated grades for steel applications",
      applications: "Steel, High-performance threading",
    },
    {
      grade: "ZP153",
      description: "High-speed solution for stainless steel",
      applications: "Stainless Steel, High-speed operations",
    },
    {
      grade: "ZP152/ZM856",
      description: "Excel in machining stainless steel, prevent BUE",
      applications: "Stainless Steel, Built-up-edge prevention",
    },
    {
      grade: "ZK50",
      description: "CVD grade with outstanding wear resistance",
      applications: "Cast Iron, Wear-resistant applications",
    },
    {
      grade: "CBN-S",
      description: "For turning hardened steels (HRC46-58+)",
      applications: "Hardened Steel, Extreme applications",
    },
    {
      grade: "PCD",
      description: "Premium grade for non-ferrous materials",
      applications: "Aluminum, Copper, Non-ferrous metals",
    },
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Comprehensive Standards Coverage",
      description:
        "Complete coverage of ISO, UN, NPT, BSPT, ACME, TR, UNJ, API, and specialized thread standards for global manufacturing requirements.",
      color: "border-red-600",
    },
    {
      title: "Insert Designation System",
      description:
        "Intuitive system: 16ER (External Right-hand), 16IR (Internal Right-hand) with clear size and application identification for streamlined tool selection.",
      color: "border-blue-600",
    },
    {
      title: "Material Grade Selection",
      description:
        "Rich palette from ZN60/ZN90 for surface finish to CBN-S for hardened materials, allowing perfect grade-to-material matching.",
      color: "border-green-600",
    },
    {
      title: "Toolholder Compatibility",
      description:
        "Designed for dedicated external toolholders (B115, B126) and internal boring bars (B121, B127, B128) for optimal stability and performance.",
      color: "border-purple-600",
    },
  ]

  // Cutting parameters
  const cuttingParameters = [
    { label: "IC Size Range", value: "16mm - 27mm" },
    { label: "Thread Angles", value: "29°, 55°, 60°, 80°, Variable" },
    { label: "Standards Covered", value: "ISO, UN, NPT, BSPT, ACME, TR, UNJ, API" },
    { label: "External Toolholders", value: "B115, B126, B137" },
    { label: "Internal Toolholders", value: "B121, B127, B128" },
    { label: "Coating Technology", value: "PVD, CVD, Specialized" },
    { label: "Substrate Material", value: "Micro-grain Carbide, CBN, PCD" },
    { label: "Threading Accuracy", value: "±0.02mm profile tolerance" },
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
                  Engineering Excellence for Perfect Threads
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Threading Inserts
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Threading Inserts represent engineering excellence for perfect threads. Threading is one of the most critical and precise operations in modern manufacturing, forming essential helical ridges for fastening, power transmission, and fluid sealing. Our specialized inserts deliver impeccable accuracy, superior surface quality, and exceptional tool life across all international thread standards.
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
                    src="/images/threading-inserts-hero.png"
                    alt="Professional Threading Inserts Collection"
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
                    The performance of an MZG <strong>Threading Insert</strong> is defined by its precision, durability, and versatility. We leverage cutting-edge manufacturing processes and material science to create tools that consistently exceed expectations.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Our threading inserts are ground to achieve a <strong>full and highly accurate tooth profile</strong>. Whether it's a 60° V-thread for ISO and UN standards, a 55° profile for BSPT, a 29° trapezoidal for ACME, or a complex buttress thread, the geometric integrity is guaranteed.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>sharp, precision-ground cutting edge</strong>, combined with advanced coatings, minimizes friction and heat generation during the cut, ensuring perfect thread engagement, maximum holding strength, and leak-proof sealing critical for high-stakes applications.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    Key Performance Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Accuracy:</strong> Full accurate tooth profiles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Standards:</strong> ISO, UN, NPT, ACME, UNJ, API
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> External & internal threading
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Materials:</strong> Steel to superalloys
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Industries:</strong> Aerospace, oil & gas, automotive
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
                      {product.standards && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Standard:</span>
                          <span className="text-gray-900 text-xs">{product.standards}</span>
                        </div>
                      )}
                      {product.angle && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Angle:</span>
                          <span className="text-gray-900 text-xs">{product.angle}</span>
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
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">System Specifications</h3>
                <div className="p-4 space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className={`border-l-4 ${spec.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{spec.title}</h4>
                      <p className="text-gray-600 text-sm">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cutting Parameters */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Technical Specifications</h3>
                <div className="divide-y divide-gray-100">
                  {cuttingParameters.map((param, index) => (
                    <div key={index} className="flex justify-between items-center p-4">
                      <span className="font-medium text-sm text-gray-700">{param.label}:</span>
                      <span className="text-sm text-right text-gray-900">{param.value}</span>
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
              {/* Thread Standards */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Thread Standards Coverage
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {threadStandards.map((standard, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Materials */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Applicable Materials
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applicationMaterials.map((material, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{material}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Applications */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Industry Applications
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {industryApplications.map((industry, index) => (
                    <div key={index} className="flex items-start py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0 mt-1.5"></div>
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Material Grades */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Material Grades</h2>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-6">Cutter Material Grades Selection</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {materialGrades.map((grade, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                        <h4 className="font-bold text-sm text-red-600">{grade.grade}</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{grade.description}</p>
                      <p className="text-xs text-gray-600">{grade.applications}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Application Processing */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Processing</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Applied Machining</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Standard Turning Centers:</strong> Designed for use in standard turning centers and lathes with dedicated external and internal toolholders for optimal performance.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>External Threading:</strong> Mounted in dedicated external toolholders (B115, B126) for creating precise external threads on shafts, bolts, and fasteners.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Internal Threading:</strong> Used with internal boring bars (B121, B127, B128) for machining internal threads in holes and bores.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Multi-pass Threading:</strong> Recommended multi-pass threading cycle allows gradual thread profile formation for improved chip control and surface finish.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Industry Specific Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Oil & Gas:</strong> API, BUT, and EL series for producing reliable threads on pipes, casings, and couplings used in drilling and extraction operations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Aerospace:</strong> UNJ series provides specific root radius required for threads on high-fatigue components like fasteners and engine parts.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Power Transmission:</strong> ACME, STUB ACME, and TR inserts for manufacturing lead screws, machine tool slides, and valve stems.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Hydraulics & Pneumatics:</strong> NPT, NPTF, and BSPT inserts create pressure-tight seals for pipes and fittings in hydraulic systems.
                      </div>
                    </li>
                  </ul>
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
            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Precise External Threading",
                  description: "Machine precise external (male) threads on shafts, bolts, and fasteners adhering to international standards with guaranteed geometric integrity.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Accurate Internal Threading",
                  description: "Create precise internal (female) threads in holes and bores with perfect thread engagement and maximum holding strength for critical applications.",
                  icon: <Gauge className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Multi-Standard Compatibility",
                  description: "Support for ISO, UN, NPT, ACME, UNJ, API and other international thread standards covering aerospace, oil & gas, and general engineering applications.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Superior Tool Life",
                  description: "Premium micro-grain carbide substrates with specialized coatings deliver exceptional durability and significantly longer tool life in demanding applications.",
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

          {/* Related Categories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Turning Inserts",
                  image: "/images/turning-inserts.jpg",
                  description: "Standard turning inserts for general applications",
                  url: "/standard-tools/lathe-turning-inserts/turning-inserts",
                },
                {
                  title: "Grooving/Cut-off Inserts",
                  image: "/images/grooving-cut-off-inserts.jpg",
                  description: "Specialized inserts for grooving and cut-off operations",
                  url: "/standard-tools/lathe-turning-inserts/grooving-cut-off-turning-inserts",
                },
                {
                  title: "Back Turning Inserts",
                  image: "/images/back-turning-inserts.jpg",
                  description: "Specialized inserts for back turning operations",
                  url: "/standard-tools/lathe-turning-inserts/back-turning-inserts",
                },
                {
                  title: "Internal Grooving Inserts",
                  image: "/images/internal-grooving-inserts.jpg",
                  description: "Specialized inserts for internal grooving",
                  url: "/standard-tools/lathe-turning-inserts/internal-grooving-inserts",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Turning Inserts" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Perfect Threading Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our threading specialists can help you select the optimal threading insert series and material grades for your specific thread standards and applications. From aerospace UNJ to oil & gas API threads, we provide comprehensive solutions that ensure perfect thread engagement, maximum holding strength, and leak-proof sealing for every critical application.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                  Contact Threading Specialists
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10 border-white hover:text-white transition-all duration-300"
                >
                  Request Technical Consultation
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