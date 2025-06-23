import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Scissors } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function GroovingCutOffTurningInsertsPage() {
  // Product data based on the various grooving/cut-off insert series
  const products = [
    {
      id: "gco-001",
      name: "TGF 300",
      image: "/images/tgf-300-insert.png",
      description: "Triangular shallow grooving insert",
      series: "TGF Series",
      shape: "Triangular",
      width: "3.0mm",
      angle: "0°",
      application: "External grooving, shallow cuts",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "TGF-300",
    },
    {
      id: "gco-002",
      name: "GBA 32R",
      image: "/images/gba-32r-insert.png",
      description: "High-precision grooving insert with chip breaker",
      series: "GBA Series",
      shape: "Rectangular",
      width: "3.2mm",
      angle: "0°",
      application: "Precision grooving, excellent chip control",
      materials: "Steel, Aluminum, Copper",
      pageNumber: "GBA-32R",
    },
    {
      id: "gco-003",
      name: "CTP 2",
      image: "/images/ctp-2-insert.png",
      description: "Small parts cut-off insert for Swiss lathes",
      series: "CTP Series",
      shape: "Compact",
      width: "2.0mm",
      angle: "0°",
      application: "Small parts cut-off, Swiss-type machines",
      materials: "Medical grade, electronics materials",
      pageNumber: "CTP-2",
    },
    {
      id: "gco-004",
      name: "TKF 16",
      image: "/images/tkf-16-insert.png",
      description: "High-efficiency grooving and cut-off insert",
      series: "TKF Series",
      shape: "Profiled",
      width: "1.6mm",
      angle: "7°",
      application: "High-efficiency operations, automated systems",
      materials: "Hardened steel, superalloys",
      pageNumber: "TKF-16",
    },
    {
      id: "gco-005",
      name: "MG 3125",
      image: "/images/mg-3125-insert.png",
      description: "Medium grooving insert for general applications",
      series: "MG Series",
      shape: "Standard",
      width: "3.125mm",
      angle: "15°",
      application: "General grooving, versatile applications",
      materials: "Steel, Cast Iron, Non-ferrous",
      pageNumber: "MG-3125",
    },
    {
      id: "gco-006",
      name: "SP 200",
      image: "/images/sp-200-insert.png",
      description: "Special profiling insert with angled geometry",
      series: "SP Series",
      shape: "Angled",
      width: "2.0mm",
      angle: "45°",
      application: "Profiling, chamfering during grooving",
      materials: "Aluminum, Titanium, Plastics",
      pageNumber: "SP-200",
    },
    {
      id: "gco-007",
      name: "GMM 4",
      image: "/images/gmm-4-insert.png",
      description: "Micro-machining grooving insert",
      series: "GMM Series",
      shape: "Micro",
      width: "0.8mm",
      angle: "0°",
      application: "Micro-grooving, miniature parts",
      materials: "Precision alloys, micro-components",
      pageNumber: "GMM-4",
    },
    {
      id: "gco-008",
      name: "TDT 50",
      image: "/images/tdt-50-insert.png",
      description: "Deep grooving insert for internal applications",
      series: "TDT Series",
      shape: "Deep Profile",
      width: "5.0mm",
      angle: "20°",
      application: "Internal grooving, deep cuts",
      materials: "Steel, Stainless Steel, Cast Iron",
      pageNumber: "TDT-50",
    },
    {
      id: "gco-009",
      name: "Z 32N",
      image: "/images/z-32n-insert.png",
      description: "Heavy-duty cut-off insert for large diameters",
      series: "Z Series",
      shape: "Robust",
      width: "3.2mm",
      angle: "16°",
      application: "Heavy cut-off, large diameter workpieces",
      materials: "Structural steel, large components",
      pageNumber: "Z-32N",
    },
    {
      id: "gco-010",
      name: "T 3E",
      image: "/images/t-3e-insert.png",
      description: "External grooving insert with enhanced edge",
      series: "T Series",
      shape: "Enhanced",
      width: "3.0mm",
      angle: "50°",
      application: "External grooving, enhanced durability",
      materials: "Hardened materials, wear-resistant",
      pageNumber: "T-3E",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Scissors",
      title: "Precision Grooving & Cut-Off",
      description:
        "Engineered for creating precisely dimensioned grooves and complete separation of components from bar stock with unparalleled accuracy and surface finish quality.",
    },
    {
      icon: "Shield",
      title: "Advanced Chip Management",
      description:
        "Diverse chipbreaker geometries tailored for different materials, ensuring effective chip curling, breaking, and evacuation to prevent tool entanglement.",
    },
    {
      icon: "Target",
      title: "Superior Durability",
      description:
        "Built on high-quality carbide substrates with advanced PVD/CVD coatings, providing extreme hardness, wear resistance, and thermal shock resistance.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors className="h-8 w-8 text-red-600" />
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Application materials
  const applicationMaterials = [
    "Low-Carbon Steel",
    "High-Carbon Steel", 
    "Hardened Steel (HRC 46-58)",
    "Stainless Steels (all grades)",
    "Cast Irons (Gray and Ductile)",
    "Aluminum Alloys (HB50-110)",
    "Copper and Bronze",
    "Titanium Alloys",
    "Superalloys (Inconel)",
    "Carbon Fiber Composites",
    "Powder Metallurgy",
    "Filled Plastics",
  ]

  // Application operations
  const applicationOperations = [
    "External Grooving/Cut-off",
    "Internal Grooving",
    "Face Grooving",
    "Small Parts Machining",
    "O-ring Groove Creation",
    "Sealing Grooves",
    "Profiling Operations",
    "Chamfering During Grooving",
  ]

  // Insert series advantages
  const insertAdvantages = [
    "TGF/GBA - Triangular shallow grooving",
    "CTP/TKF - High-efficiency small parts",
    "MG/MR - General purpose applications",
    "SP - Special profiling with angles",
    "GMM - Micro-machining capabilities",
    "TDT - Deep grooving applications",
    "Z Series - Heavy-duty cut-off",
    "Wide width range: <1mm to several mm",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Insert Series & Designations",
      description:
        "Multiple professional series including TGF, GBA, CTP, TKF, MG/MR, SP, GMM, TDT, and Z series, each engineered for specific applications and cutting conditions.",
      color: "border-red-600",
    },
    {
      title: "Precision Dimensions",
      description:
        "Insert width (W) from under 1mm to several millimeters with ±0.03mm precision. Standardized length (L), thickness (B), height (H), and nose radius (R).",
      color: "border-blue-600",
    },
    {
      title: "Geometric Angles",
      description:
        "Various angles including 0°, 7°, 15°, 16°, 20°, 45°, 50° for necessary clearance, cutting force control, and simultaneous profiling operations.",
      color: "border-green-600",
    },
    {
      title: "Installation Compatibility",
      description:
        "Designed with specific tool installation angles (e.g., 2° for TGF/GBA) and dedicated MZG toolholders (B168, B162, AB10, B141) for optimal positioning.",
      color: "border-purple-600",
    },
  ]

  // Cutting parameters
  const cuttingParameters = [
    { label: "Width Range", value: "<1mm to several mm" },
    { label: "Width Precision", value: "±0.03mm" },
    { label: "Available Angles", value: "0°, 7°, 15°, 16°, 20°, 45°, 50°" },
    { label: "Installation Angle", value: "2° (TGF/GBA series)" },
    { label: "Toolholder Series", value: "B168, B162, AB10, B141" },
    { label: "Coating Technology", value: "Advanced PVD/CVD" },
    { label: "Substrate Material", value: "High-Quality Carbide" },
    { label: "Surface Finish", value: "Ra 0.1-0.8 μm" },
  ]

  // Industries served
  const industriesServed = [
    "Automotive Manufacturing",
    "Aerospace Industry", 
    "Mold and Die Making",
    "Medical Device Production",
    "General Engineering",
    "Electronics Manufacturing",
    "Swiss-type Machining",
    "Precision Components",
    "Tool and Die Industry",
    "Small Parts Production",
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
                  Ultimate Precision Machining Solution
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Grooving/Cut-off Turning Inserts
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Grooving/Cut-off Turning Inserts represent the ultimate solution for precision machining. Our professional tooling system is engineered to create precisely dimensioned grooves or completely separate components from bar stock, delivering unparalleled performance in critical industries including automotive, aerospace, mold and die, medical devices, and general engineering.
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
                    src="/images/grooving-cut-off-inserts-hero.png"
                    alt="Professional Grooving Cut-off Turning Inserts Collection"
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
                    The superior performance of MZG's <strong>Grooving/Cut-off inserts</strong> is rooted in a comprehensive design philosophy. We offer not just individual solutions but a complete, systematic family of tools designed to tackle a vast spectrum of machining challenges.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Our inserts deliver <strong>high precision and superior surface finish</strong> through precision-ground cutting edges paired with optimized geometric chipbreakers and nose radii. This ensures tight dimensional tolerances critical for sealing grooves, O-ring grooves, and precise mating surfaces.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    From <strong>micro-machining of miniature parts</strong> to cutting off large-diameter workpieces, our product line covers the full gamut of needs with outstanding durability and stability in even unstable cutting conditions.
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
                        <strong>Precision:</strong> ±0.03mm width tolerance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Range:</strong> Multiple series (TGF, GBA, CTP, TKF)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> External, internal, face grooving
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
                        <strong>Industries:</strong> Automotive, aerospace, medical
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
                      {product.width && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Width:</span>
                          <span className="text-gray-900 text-xs">{product.width}</span>
                        </div>
                      )}
                      {product.angle && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Angle:</span>
                          <span className="text-gray-900 text-xs">{product.angle}</span>
                        </div>
                      )}
                      {product.shape && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Shape:</span>
                          <span className="text-gray-900 text-xs">{product.shape}</span>
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
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Series Specifications</h3>
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
              {/* Application Materials */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
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

              {/* Application Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Application Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applicationOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Served */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Industries Served
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {industriesServed.map((industry, index) => (
                    <div key={index} className="flex items-start py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0 mt-1.5"></div>
                      <span className="text-sm">{industry}</span>
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
                  <h3 className="text-xl font-bold mb-4">Machining Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>External Grooving/Cut-off:</strong> Radial cutting on outer diameter of workpiece, the most common application for creating precise grooves or complete separation.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Internal Grooving:</strong> Machining grooves inside a bore, demanding higher tool rigidity and effective chip evacuation for complex internal features.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Face Grooving:</strong> Axial cutting on workpiece face, often used to create complex annular grooves for sealing applications.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Small Parts Machining:</strong> CTP and TKF series excel on Swiss-type lathes for efficient production of minute, precise parts with complex grooves.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Machining Recommendations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Constant Surface Speed (G96):</strong> Programming with CSS is strongly recommended to prevent premature tool wear and maintain consistent cutting conditions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Cut-off Strategy:</strong> Reduce feed rate to 50% for the last 1-2mm of cut to mitigate parting impact and compensate for insufficient surface speed at center.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Chip Management:</strong> Specialized chipbreaker geometries for different materials ensure effective chip control and prevent surface damage.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Tool Selection:</strong> Match insert series to specific applications - TGF/GBA for general, CTP/TKF for small parts, SP for profiling operations.
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
                  title: "High Precision Grooving",
                  description: "Precision-ground cutting edges with optimized chipbreakers ensure tight dimensional tolerances and exceptional surface finish for sealing grooves and O-ring applications.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Excellent Chip Management",
                  description: "Diverse chipbreaker geometries tailored for different materials effectively curl, break, and evacuate chips, preventing tool entanglement and surface damage.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Outstanding Durability",
                  description: "High-quality carbide substrates with advanced PVD/CVD coatings provide extreme hardness, wear resistance, and thermal shock resistance for extended tool life.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Broad Versatility",
                  description: "Complete product line covers micro-machining to large-diameter cut-off with multiple series for external, internal, face, and small-part applications.",
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
                  title: "Back Turning Inserts",
                  image: "/images/back-turning-inserts.jpg",
                  description: "Specialized inserts for back turning operations",
                  url: "/standard-tools/lathe-turning-inserts/back-turning-inserts",
                },
                {
                  title: "Threading Inserts",
                  image: "/images/threading-inserts.jpg",
                  description: "Precision inserts for thread cutting operations",
                  url: "/standard-tools/lathe-turning-inserts/threading-inserts",
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
              <h2 className="text-3xl font-bold mb-4">Need Precision Grooving & Cut-off Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical experts can help you select the optimal grooving and cut-off insert series for your specific applications. From micro-machining to heavy-duty cut-off operations, we provide comprehensive solutions that combine high precision, superior efficiency, and outstanding stability to maximize your productivity and component quality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                  Contact Grooving Specialists
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