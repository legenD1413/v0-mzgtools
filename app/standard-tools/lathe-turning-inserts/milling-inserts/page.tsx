import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, RotateCw } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function MillingInsertsPage() {
  // Product data based on various milling insert geometries and grades
  const products = [
    {
      id: "mi-001",
      name: "APKT 1604",
      image: "/images/apkt-1604-insert.png",
      description: "Square shoulder milling insert with 4 cutting edges",
      series: "APKT Series",
      geometry: "Square",
      edges: "4",
      application: "Shoulder milling, 90° operations",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "APKT-1604",
    },
    {
      id: "mi-002",
      name: "RDKW 1204",
      image: "/images/rdkw-1204-insert.png",
      description: "Round insert for heavy-duty face milling",
      series: "RDKW Series",
      geometry: "Round",
      edges: "Multiple",
      application: "Face milling, 3D profiling",
      materials: "Steel, Cast Iron, Hardened Materials",
      pageNumber: "RDKW-1204",
    },
    {
      id: "mi-003",
      name: "OFKN 0804",
      image: "/images/ofkn-0804-insert.png",
      description: "Octagonal insert for economical face milling",
      series: "OFKN Series",
      geometry: "Octagonal",
      edges: "8",
      application: "Pure face milling operations",
      materials: "Steel, Cast Iron, General purpose",
      pageNumber: "OFKN-0804",
    },
    {
      id: "mi-004",
      name: "LNMU 0604",
      image: "/images/lnmu-0604-insert.png",
      description: "High-feed milling insert with large lead angle",
      series: "LNMU Series",
      geometry: "High-Feed",
      edges: "4",
      application: "High-feed roughing, pockets",
      materials: "Steel, Stainless Steel, Titanium",
      pageNumber: "LNMU-0604",
    },
    {
      id: "mi-005",
      name: "SDKN 1204",
      image: "/images/sdkn-1204-insert.png",
      description: "Square insert for shoulder and face milling",
      series: "SDKN Series",
      geometry: "Square",
      edges: "4",
      application: "Shoulder milling, flat surfaces",
      materials: "Steel, Cast Iron, Alloy Steel",
      pageNumber: "SDKN-1204",
    },
    {
      id: "mi-006",
      name: "RCKT 1204",
      image: "/images/rckt-1204-insert.png",
      description: "Round insert for 3D profiling and contouring",
      series: "RCKT Series",
      geometry: "Round",
      edges: "Multiple",
      application: "Ball-nose milling, complex surfaces",
      materials: "Hardened Steel, Superalloys",
      pageNumber: "RCKT-1204",
    },
    {
      id: "mi-007",
      name: "SEKN 1203",
      image: "/images/sekn-1203-insert.png",
      description: "Square insert with wiper geometry for finishing",
      series: "SEKN Series",
      geometry: "Square",
      edges: "4",
      application: "Precision finishing, smooth surfaces",
      materials: "Steel, Stainless Steel, Aluminum",
      pageNumber: "SEKN-1203",
    },
    {
      id: "mi-008",
      name: "RNMN 1204",
      image: "/images/rnmn-1204-insert.png",
      description: "Round negative insert for heavy roughing",
      series: "RNMN Series",
      geometry: "Round",
      edges: "Multiple",
      application: "Heavy-duty roughing, interrupted cuts",
      materials: "Cast Iron, Steel, Hard Materials",
      pageNumber: "RNMN-1204",
    },
    {
      id: "mi-009",
      name: "XPMT 1604",
      image: "/images/xpmt-1604-insert.png",
      description: "Special geometry for plunging and slotting",
      series: "XPMT Series",
      geometry: "Special",
      edges: "4",
      application: "Plunging, slotting, chamfering",
      materials: "Steel, Stainless Steel, Cast Iron",
      pageNumber: "XPMT-1604",
    },
    {
      id: "mi-010",
      name: "RPKN 1204",
      image: "/images/rpkn-1204-insert.png",
      description: "Round insert with positive geometry for aluminum",
      series: "RPKN Series",
      geometry: "Round",
      edges: "Multiple",
      application: "High-speed aluminum milling",
      materials: "Aluminum, Copper, Non-ferrous",
      pageNumber: "RPKN-1204",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "RotateCw",
      title: "Maximum Metal Removal Rate",
      description:
        "Innovative high-feed geometries, strong negative-rake inserts, and advanced coatings enable extreme feed rates and higher cutting speeds for faster chip making.",
    },
    {
      icon: "Shield",
      title: "Exceptional Process Security",
      description:
        "Ultra-fine grain carbide substrates with proprietary PVD/CVD coatings provide long, predictable tool life and reliable unattended machining capabilities.",
    },
    {
      icon: "Target",
      title: "Superior Surface Finish",
      description:
        "Specialized wiper flat geometries strategically positioned on inserts effectively smooth surfaces, allowing doubled feed rates while achieving better finishes.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "RotateCw":
        return <RotateCw className="h-8 w-8 text-red-600" />
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Insert geometries and shapes
  const insertGeometries = [
    "Square Inserts (S-Type) - 4 or 8 cutting edges",
    "Round Inserts (R-Type) - Strongest cutting edge",
    "High-Feed Inserts - Parallelogram, bone-shaped",
    "Octagonal Inserts (O-Type) - 8 or 16 cutting edges",
    "Positive-rake geometries - Lower cutting forces",
    "Negative-rake geometries - Stronger cutting edge",
    "Wiper flat geometries - Superior surface finish",
    "Ball-nose geometries - Complex 3D surfaces",
  ]

  // Application operations
  const applicationOperations = [
    "Face Milling",
    "Shoulder Milling",
    "Slot Milling",
    "High-Feed Milling (HFM)",
    "Profiling and 3D Machining",
    "Pocket Milling",
    "Plunging Operations",
    "Chamfering",
  ]

  // Industry applications
  const industryApplications = [
    "Mold & Die Manufacturing",
    "Aerospace Industry",
    "Automotive Manufacturing",
    "General Engineering",
    "Medical Device Production",
    "Energy Sector",
    "Tool and Die Making",
    "Precision Machining",
  ]

  // Material grades
  const materialGrades = [
    {
      grade: "ZC-Series",
      description: "CVD coated for steel applications",
      applications: "Carbon steel, Alloy steel, High-speed milling",
      coating: "CVD",
    },
    {
      grade: "ZP-Series",
      description: "PVD coated for stainless steel",
      applications: "Stainless steel, Low-carbon steel, Prevents BUE",
      coating: "PVD",
    },
    {
      grade: "ZK-Series",
      description: "CVD coated for cast iron",
      applications: "Gray cast iron, Ductile cast iron, High-speed milling",
      coating: "CVD",
    },
    {
      grade: "ZH-Series",
      description: "CBN for hardened materials",
      applications: "Hardened steel (HRC 55+), Hardened cast iron",
      coating: "CBN",
    },
    {
      grade: "ZL-Series",
      description: "PCD/Uncoated for aluminum",
      applications: "Aluminum, Copper, Composites, Non-ferrous",
      coating: "PCD/Uncoated",
    },
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Insert Geometries & Shapes",
      description:
        "Complete range from square (4/8 edges) and round (strongest edge) to high-feed (extreme rates) and octagonal (economical) geometries for all applications.",
      color: "border-red-600",
    },
    {
      title: "Cutting Edge Geometry",
      description:
        "Full range of positive-rake (lower forces, stainless/superalloys) and negative-rake (stronger edge, cast iron/interrupted cuts) geometries.",
      color: "border-blue-600",
    },
    {
      title: "Advanced Material Grades",
      description:
        "Five specialized series: ZC (CVD steel), ZP (PVD stainless), ZK (CVD cast iron), ZH (CBN hardened), ZL (PCD aluminum) for optimal performance.",
      color: "border-green-600",
    },
    {
      title: "Chip Management System",
      description:
        "Sophisticated press-formed or ground chipbreaker geometries engineered to curl and break chips into manageable sizes for clean evacuation.",
      color: "border-purple-600",
    },
  ]

  // Cutting parameters
  const cuttingParameters = [
    { label: "Insert Shapes", value: "Square, Round, Octagonal, High-Feed" },
    { label: "Cutting Edges", value: "4, 8, 16, Multiple" },
    { label: "Rake Angles", value: "Positive, Negative, Neutral" },
    { label: "Material Grades", value: "ZC, ZP, ZK, ZH, ZL Series" },
    { label: "Coating Technology", value: "CVD, PVD, CBN, PCD" },
    { label: "Applications", value: "Face, Shoulder, Slot, High-Feed" },
    { label: "Surface Finish", value: "Ra 0.1-3.2 μm" },
    { label: "Metal Removal Rate", value: "Up to 500% increase" },
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
                  The Pinnacle of Metal Removal Technology
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Milling Inserts
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Milling Inserts represent the pinnacle of metal removal technology. Our inserts are not merely cutting edges; they are a complete, systematic solution designed to maximize productivity, ensure process security, and achieve unparalleled component quality across all industrial sectors. From high-efficiency roughing to precision finishing, our advanced insert portfolio delivers exceptional performance.
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
                    src="/images/milling-inserts-hero.png"
                    alt="Professional Milling Inserts Collection"
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
                    The performance of MZG <strong>Milling Inserts</strong> is built upon a foundation of state-of-the-art technology and meticulous design, delivering tangible benefits to the workshop floor through maximum metal removal rates and exceptional process security.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Our primary goal is to empower customers to <strong>make chips faster</strong> through innovative high-feed geometries, strong negative-rake inserts for heavy roughing, and advanced coating technologies that reduce friction and enable higher cutting speeds.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    <strong>Predictability is key</strong> in modern manufacturing. Our inserts feature ultra-fine grain carbide substrates with proprietary PVD and CVD coatings, creating long, predictable tool life and enabling reliable "lights-out" unattended machining.
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
                        <strong>MRR:</strong> Maximum metal removal rates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Geometries:</strong> Square, Round, High-Feed, Octagonal
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Operations:</strong> Face, shoulder, slot, 3D profiling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Materials:</strong> Steel to hardened materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Industries:</strong> Mold & die, aerospace, automotive
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
                      {product.geometry && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Geometry:</span>
                          <span className="text-gray-900 text-xs">{product.geometry}</span>
                        </div>
                      )}
                      {product.edges && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Edges:</span>
                          <span className="text-gray-900 text-xs">{product.edges}</span>
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
              {/* Insert Geometries */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Insert Geometries & Shapes
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {insertGeometries.map((geometry, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{geometry}</span>
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
              <h2 className="text-3xl font-bold">Advanced Material Grades</h2>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-6">Material Grade Selection System</h3>
                <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-4">
                  {materialGrades.map((grade, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                        <h4 className="font-bold text-sm text-red-600">{grade.grade}</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{grade.description}</p>
                      <p className="text-xs text-gray-600 mb-2">{grade.applications}</p>
                      <div className="flex items-center">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {grade.coating}
                        </span>
                      </div>
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
                  <h3 className="text-xl font-bold mb-4">Applied Machining Operations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Face Milling:</strong> Creating flat surfaces using octagonal, round, and 45-degree lead angle cutters for maximum productivity and surface quality.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Shoulder Milling:</strong> Machining flat surface and perpendicular wall in single pass using APKT and SDKN-style square shoulder milling systems.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>High-Feed Milling (HFM):</strong> Premier strategy for roughing pockets, cores, and cavities in mold & die and aerospace manufacturing.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>3D Profiling:</strong> Using ball-nose and torus cutters with round inserts for complex, free-form surfaces and intricate geometries.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Industry-Specific Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Mold & Die:</strong> Machining hardened tool steels (HRC46-58+) using tough CBN grades and precision ball-nose cutters for complex cavity work.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Aerospace:</strong> Machining difficult materials like Titanium and Inconel using super-sharp PVD-coated inserts for extreme heat management.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Automotive:</strong> High-volume face milling of cast iron engine blocks and aluminum cylinder heads using ZK and ZL-series solutions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>General Engineering:</strong> Flexible and economical solutions for milling wide range of components from mild steel to stainless steel.
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
                  title: "High-Efficiency Roughing",
                  description: "Rapidly removing large volumes of material with exceptional Metal Removal Rates using robust insert geometries and advanced grades.",
                  icon: <RotateCw className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Finishing",
                  description: "Achieving superior surface finishes and tight dimensional tolerances through precision-ground inserts and specialized wiper geometries.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Profiling",
                  description: "Machining complex 2D and 3D surfaces using ball-nose and round-insert cutters for mold & die and aerospace applications.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Specialized Solutions",
                  description: "Optimized tools for specific operations including high-feed milling, slotting, plunging, and chamfering applications.",
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
                  title: "Threading Inserts",
                  image: "/images/threading-inserts.jpg",
                  description: "Precision inserts for thread cutting operations",
                  url: "/standard-tools/lathe-turning-inserts/threading-inserts",
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
              <h2 className="text-3xl font-bold mb-4">Need Advanced Milling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our milling specialists can help you select the optimal insert geometries and material grades for your specific machining operations. From high-efficiency roughing to precision finishing and complex 3D profiling, we provide comprehensive solutions that maximize productivity, ensure process security, and deliver unparalleled component quality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                  Contact Milling Specialists
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