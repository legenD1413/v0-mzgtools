import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, RotateCw } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function DrillingInsertsPage() {
  // Product data based on various drilling insert series and grades
  const products = [
    {
      id: "di-001",
      name: "SPMG 090408",
      image: "/images/spmg-090408-insert.png",
      description: "Square insert for robust indexable drilling",
      series: "SPMG Series",
      geometry: "Square",
      edges: "4",
      application: "General-purpose drilling, U-Drills",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "SPMG-090408",
    },
    {
      id: "di-002",
      name: "WCMX 080412",
      image: "/images/wcmx-080412-insert.png",
      description: "Trigon-shaped insert for strong cutting edge",
      series: "WCMX Series",
      geometry: "Trigon",
      edges: "3",
      application: "Heavy-duty drilling, U-Drills",
      materials: "Steel, Cast Iron, Hard Materials",
      pageNumber: "WCMX-080412",
    },
    {
      id: "di-003",
      name: "SOMT 120408",
      image: "/images/somt-120408-insert.png",
      description: "Modern geometry for high-performance drilling",
      series: "SOMT Series",
      geometry: "Square",
      edges: "4",
      application: "High-feed drilling, difficult materials",
      materials: "Stainless Steel, Titanium, Superalloys",
      pageNumber: "SOMT-120408",
    },
    {
      id: "di-004",
      name: "XOMT 080304",
      image: "/images/xomt-080304-insert.png",
      description: "Specialized geometry for precision drilling",
      series: "XOMT Series",
      geometry: "Special",
      edges: "4",
      application: "Precision hole-making, finishing",
      materials: "Steel, Aluminum, Non-ferrous",
      pageNumber: "XOMT-080304",
    },
    {
      id: "di-005",
      name: "SPMT 120408",
      image: "/images/spmt-120408-insert.png",
      description: "High-performance insert for modern drilling systems",
      series: "SPMT Series",
      geometry: "Square",
      edges: "4",
      application: "High-speed drilling, production",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "SPMT-120408",
    },
    {
      id: "di-006",
      name: "WDXT 170408-G",
      image: "/images/wdxt-170408-g-insert.png",
      description: "Application-specific geometry for high-speed finishing",
      series: "WDXT Series",
      geometry: "Special",
      edges: "Multiple",
      application: "High-speed finishing drilling",
      materials: "Steel, Stainless Steel, Aluminum",
      pageNumber: "WDXT-170408-G",
    },
    {
      id: "di-007",
      name: "WDXT 170408-H",
      image: "/images/wdxt-170408-h-insert.png",
      description: "Heavy-duty geometry for rough machining",
      series: "WDXT Series",
      geometry: "Special",
      edges: "Multiple",
      application: "Medium-to-heavy rough drilling",
      materials: "Cast Iron, Steel, Hard Materials",
      pageNumber: "WDXT-170408-H",
    },
    {
      id: "di-008",
      name: "880-LM",
      image: "/images/880-lm-insert.png",
      description: "Light machining insert for center cutting",
      series: "880 Series",
      geometry: "Central",
      edges: "Multiple",
      application: "Center cutting, light machining",
      materials: "Steel, Stainless Steel, Aluminum",
      pageNumber: "880-LM",
    },
    {
      id: "di-009",
      name: "880-GM",
      image: "/images/880-gm-insert.png",
      description: "General machining insert for peripheral cutting",
      series: "880 Series",
      geometry: "Peripheral",
      edges: "Multiple",
      application: "Peripheral cutting, general machining",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "880-GM",
    },
    {
      id: "di-010",
      name: "880-GR",
      image: "/images/880-gr-insert.png",
      description: "General roughing insert for high-feed drilling",
      series: "880 Series",
      geometry: "Peripheral",
      edges: "Multiple",
      application: "High-feed drilling, deep holes",
      materials: "Steel, Cast Iron, Hard Materials",
      pageNumber: "880-GR",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "RotateCw",
      title: "Exceptional Cutting Speeds",
      description:
        "Optimized insert geometries, advanced coatings, and robust drill body designs enable cutting speeds and feed rates that far surpass traditional drilling methods.",
    },
    {
      icon: "Target",
      title: "Superior Hole Quality",
      description:
        "Balanced system design with central and peripheral inserts ensures excellent hole straightness, circularity, and surface finish with minimal vibration.",
    },
    {
      icon: "Shield",
      title: "Unmatched Process Security",
      description:
        "Precisely machined insert pockets and advanced grades provide secure assembly that withstands high loads with predictable stability and reliability.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "RotateCw":
        return <RotateCw className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Insert series and geometries
  const insertSeries = [
    "SPMG / WCMX Series - Robust workhorses for U-Drills",
    "SOMT / XOMT / SPMT Series - Modern high-performance geometries",
    "WDXT Series - Application-specific geometries (-G, -H)",
    "880 Series - Premier high-performance system",
    "Central/Peripheral concept - Balanced cutting forces",
    "Advanced chipbreaker designs - Optimized chip control",
    "Multi-edge inserts - Maximum value and economy",
    "Precision-machined pockets - Secure tool assembly",
  ]

  // Application operations
  const applicationOperations = [
    "High-Rate Hole Production",
    "Versatile Hole-Making",
    "Economical Drilling",
    "Deep-Hole Drilling",
    "High-Feed Drilling",
    "Precision Hole-Making",
    "Large-Diameter Drilling",
    "Through-Tool Coolant Drilling",
  ]

  // Industry applications
  const industryApplications = [
    "General Engineering",
    "Automotive Manufacturing",
    "Heavy Industry & Energy",
    "Mold & Die Making",
    "Aerospace Industry",
    "Oil & Gas Sector",
    "Medical Device Production",
    "Precision Machining",
  ]

  // Material grades
  const materialGrades = [
    {
      grade: "ZC32S",
      description: "High-speed grade for steels",
      applications: "Carbon steel, Alloy steel, High-speed drilling",
      coating: "CVD",
    },
    {
      grade: "ZP152",
      description: "General grade for stainless steel",
      applications: "Stainless steel, Combat BUE, Work-hardening",
      coating: "PVD",
    },
    {
      grade: "ZP153",
      description: "High-speed grade for stainless steel",
      applications: "Stainless steel, High-speed applications",
      coating: "PVD",
    },
    {
      grade: "ZK50/ZK50S",
      description: "CVD coated for cast iron",
      applications: "Gray cast iron, Ductile cast iron, Abrasive materials",
      coating: "CVD",
    },
    {
      grade: "CBN-S",
      description: "CBN for hardened materials",
      applications: "Hardened steel (HRC46-58), Eliminates annealing",
      coating: "CBN",
    },
    {
      grade: "PCD/ZK01",
      description: "Diamond/Uncoated for non-ferrous",
      applications: "Aluminum, Copper, Composites, Ultra-sharp edges",
      coating: "PCD/Uncoated",
    },
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Systematic Insert Series",
      description:
        "Comprehensive range from robust SPMG/WCMX for U-Drills to premier 880-Series for high-performance central/peripheral drilling systems.",
      color: "border-red-600",
    },
    {
      title: "Advanced Geometries",
      description:
        "Precisely engineered chipbreakers (-PM, -ZK, -SU, -DP, -U2) tailored for specific material groups ensuring optimal chip control and evacuation.",
      color: "border-blue-600",
    },
    {
      title: "Cutting-Edge Material Grades",
      description:
        "Extensive grade portfolio: ZC32S (steel), ZP152/153 (stainless), ZK50/ZK50S (cast iron), CBN-S (hardened), PCD/ZK01 (non-ferrous).",
      color: "border-green-600",
    },
    {
      title: "System Integration",
      description:
        "Hardened steel drill bodies with helical coolant channels, precisely machined insert pockets, and high-pressure coolant delivery systems.",
      color: "border-purple-600",
    },
  ]

  // Cutting parameters
  const cuttingParameters = [
    { label: "Insert Series", value: "SPMG, WCMX, SOMT, XOMT, SPMT, WDXT, 880" },
    { label: "Cutting Edges", value: "3, 4, Multiple" },
    { label: "Geometries", value: "Square, Trigon, Central, Peripheral" },
    { label: "Material Grades", value: "ZC32S, ZP152/153, ZK50/50S, CBN-S, PCD" },
    { label: "Coating Technology", value: "CVD, PVD, CBN, PCD, Uncoated" },
    { label: "Applications", value: "General, High-speed, Deep-hole, Precision" },
    { label: "Hole Quality", value: "Superior straightness and circularity" },
    { label: "Economic Advantage", value: "Multi-edge indexable system" },
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
                  The Apex of Hole-Making Productivity and Precision
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Drilling Inserts
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Drilling Inserts represent the pinnacle of modern hole-making technology, offering a powerful and economical alternative to solid carbide or HSS drills. These inserts are the high-performance cutting components of an integrated drilling system, designed for exceptional speed, accuracy, and process reliability in large-diameter and high-volume production environments.
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
                    src="/images/drilling-inserts-hero.png"
                    alt="Professional Drilling Inserts Collection"
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
                    The performance of MZG <strong>Drilling Inserts</strong> is defined by speed, stability, and the quality of holes produced. Our systems are designed for aggressive performance through optimized insert geometries, advanced coatings, and robust drill body designs.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Our drilling systems deliver <strong>exceptional cutting speeds and feeds</strong> that far surpass traditional drilling methods. This performance is rooted in balanced cutting forces and superior chip formation provided by proprietary chipbreaker designs.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>indexable concept is inherently economical</strong> - instead of replacing an expensive solid drill, only the small, inexpensive insert is indexed to a new edge or replaced, maximizing value and minimizing downtime.
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
                        <strong>Speed:</strong> Exceptional cutting speeds and feeds
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Quality:</strong> Superior hole straightness and finish
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Economy:</strong> Multi-edge indexable system
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Versatility:</strong> Single body, multiple materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Reliability:</strong> Predictable process security
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
              {/* Insert Series */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Insert Series & Geometries
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {insertSeries.map((series, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{series}</span>
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
              <h2 className="text-3xl font-bold">Cutting-Edge Material Grades</h2>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-6">Material Grade Selection System</h3>
                <div className="grid md:grid-cols-1 lg:grid-cols-6 gap-4">
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
                  <h3 className="text-xl font-bold mb-4">Applied Machining</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>CNC Lathes:</strong> Indexable drilling where workpiece rotates, ideal for large-diameter holes and high-volume production applications.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Machining Centers:</strong> Tool rotation drilling on CNC milling centers with high-pressure through-tool coolant for optimal chip evacuation.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Deep-Hole Drilling:</strong> Critical for holes deeper than 2-3 times diameter, utilizing high-pressure coolant and optimized chip flow.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Material Spectrum:</strong> Proven across low/high-carbon steels, hardened steels, cast iron, stainless steels, titanium, and non-ferrous metals.
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
                        <strong>General Engineering:</strong> Creating clearance holes for bolts, pre-drilling for tapping/boring in machine frames and components.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Automotive:</strong> High-volume drilling of engine blocks, transmission cases, and chassis components with exceptional productivity.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Heavy Industry:</strong> Machining large-diameter holes in heat exchanger tube sheets, flanges, and structural steel plates.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Mold & Die:</strong> Efficiently drilling deep cooling channels in hardened tool steels with superior hole quality and precision.
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
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "High-Rate Hole Production",
                  description: "Achieving the highest possible penetration rates and metal removal rates, drastically reducing cycle times in production environments through optimized geometries and advanced coatings.",
                  icon: <RotateCw className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Hole-Making",
                  description: "Providing a flexible system where a single drill body can machine different materials by simply changing the insert grade and geometry, maximizing tool utilization.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Economical Drilling",
                  description: "Lowering cost-per-hole by using tough, multi-edged inserts that can be indexed or replaced, preserving the expensive drill body and minimizing downtime.",
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
                  title: "Milling Inserts",
                  image: "/images/milling-inserts.jpg",
                  description: "Precision inserts for milling operations",
                  url: "/standard-tools/lathe-turning-inserts/milling-inserts",
                },
                {
                  title: "Threading Inserts",
                  image: "/images/threading-inserts.jpg",
                  description: "Specialized inserts for thread cutting operations",
                  url: "/standard-tools/lathe-turning-inserts/threading-inserts",
                },
                {
                  title: "Grooving/Cut-off Inserts",
                  image: "/images/grooving-cut-off-inserts.jpg",
                  description: "Specialized inserts for grooving and cut-off operations",
                  url: "/standard-tools/lathe-turning-inserts/grooving-cut-off-turning-inserts",
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
              <h2 className="text-3xl font-bold mb-4">Need Advanced Drilling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our drilling specialists can help you select the optimal insert series and material grades for your specific hole-making operations. From high-rate production drilling to precision deep-hole applications, we provide comprehensive solutions that maximize productivity, ensure superior hole quality, and deliver unmatched economic advantage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                  Contact Drilling Specialists
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