import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function TurningInsertsPage() {
  // Product data based on the Turning Inserts series
  const products = [
    {
      id: "ti-001",
      name: "CNMG 120408-PR",
      image: "/images/cnmg-pr-insert.png",
      description: "80° Rhombic negative rake insert for heavy roughing",
      series: "CNMG Series",
      shape: "80° Rhombic",
      chipbreaker: "PR - Heavy Roughing",
      application: "Heavy roughing, interrupted cuts",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "CNMG-PR",
    },
    {
      id: "ti-002",
      name: "CNMG 120408-PM",
      image: "/images/cnmg-pm-insert.png",
      description: "80° Rhombic insert for medium to semi-finishing",
      series: "CNMG Series",
      shape: "80° Rhombic",
      chipbreaker: "PM - Medium Operations",
      application: "Medium to semi-finishing",
      materials: "Steel, Cast Iron, Hardened Steel",
      pageNumber: "CNMG-PM",
    },
    {
      id: "ti-003",
      name: "DNMG 150608-FG1",
      image: "/images/dnmg-fg1-insert.png",
      description: "55° Rhombic insert for finishing operations",
      series: "DNMG Series",
      shape: "55° Rhombic",
      chipbreaker: "FG1 - Finishing",
      application: "Finishing, profiling",
      materials: "Steel, Aluminum, Copper",
      pageNumber: "DNMG-FG1",
    },
    {
      id: "ti-004",
      name: "DNMG 150608-MM1",
      image: "/images/dnmg-mm1-insert.png",
      description: "55° Rhombic insert for semi-finishing",
      series: "DNMG Series",
      shape: "55° Rhombic",
      chipbreaker: "MM1 - Semi-finishing",
      application: "Semi-finishing, copy turning",
      materials: "Stainless Steel, Superalloys",
      pageNumber: "DNMG-MM1",
    },
    {
      id: "ti-005",
      name: "SNMG 120408-PR",
      image: "/images/snmg-pr-insert.png",
      description: "90° Square insert for heavy-duty roughing",
      series: "SNMG Series",
      shape: "90° Square",
      chipbreaker: "PR - Heavy Roughing",
      application: "Heavy roughing, facing",
      materials: "Steel, Cast Iron, PM Parts",
      pageNumber: "SNMG-PR",
    },
    {
      id: "ti-006",
      name: "SNMG 120408-PM",
      image: "/images/snmg-pm-insert.png",
      description: "90° Square insert for semi-finishing",
      series: "SNMG Series",
      shape: "90° Square",
      chipbreaker: "PM - Semi-finishing",
      application: "Semi-finishing, shoulder turning",
      materials: "Steel, Stainless Steel",
      pageNumber: "SNMG-PM",
    },
    {
      id: "ti-007",
      name: "TNMG 160408-PF",
      image: "/images/tnmg-pf-insert.png",
      description: "60° Triangular insert for finishing",
      series: "TNMG Series",
      shape: "60° Triangular",
      chipbreaker: "PF - Finishing",
      application: "Finishing, general turning",
      materials: "Aluminum, Copper, Steel",
      pageNumber: "TNMG-PF",
    },
    {
      id: "ti-008",
      name: "TNMG 160408-PM",
      image: "/images/tnmg-pm-insert.png",
      description: "60° Triangular insert for general purpose",
      series: "TNMG Series",
      shape: "60° Triangular",
      chipbreaker: "PM - General Purpose",
      application: "General turning, facing",
      materials: "Steel, Cast Iron, Titanium",
      pageNumber: "TNMG-PM",
    },
    {
      id: "ti-009",
      name: "TNMG 160408-MA1",
      image: "/images/tnmg-ma1-insert.png",
      description: "60° Triangular insert for medium operations",
      series: "TNMG Series",
      shape: "60° Triangular",
      chipbreaker: "MA1 - Medium Operations",
      application: "Medium turning, profiling",
      materials: "Hardened Steel, Superalloys",
      pageNumber: "TNMG-MA1",
    },
    {
      id: "ti-010",
      name: "TNMG 160408-PR",
      image: "/images/tnmg-pr-insert.png",
      description: "60° Triangular insert for roughing",
      series: "TNMG Series",
      shape: "60° Triangular",
      chipbreaker: "PR - Roughing",
      application: "Roughing to semi-finishing",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "TNMG-PR",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Advanced Carbide Substrates",
      description:
        "Engineered from advanced carbide substrates with specialized PVD/CVD coatings providing exceptional wear resistance, thermal stability, and toughness for high-speed cutting.",
    },
    {
      icon: "Layers",
      title: "Multiple Cutting Edges",
      description:
        "Double-sided design with multiple cutting edges per insert delivers exceptional cost-effectiveness and extended tool life for various turning operations.",
    },
    {
      icon: "Target",
      title: "Precision Geometry",
      description:
        "Optimized geometry, grade, and chipbreaker design tailored for specific materials and cutting conditions, ensuring superior surface quality and dimensional accuracy.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Layers":
        return <Layers className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Application materials
  const applicationMaterials = [
    "Low and High-Carbon Steels",
    "Stainless Steels",
    "Cast Irons (Gray and Chilled)",
    "Hardened Steel (up to HRC58)",
    "Powder Metallurgy Components",
    "Aluminum Alloys",
    "Copper Alloys",
    "Superalloys",
    "Titanium",
    "Zinc Alloys",
  ]

  // Application operations
  const applicationOperations = [
    "External Longitudinal Turning",
    "Facing Operations",
    "Taper Turning",
    "Profiling (Copy Turning)",
    "Heavy Roughing",
    "Semi-finishing",
    "Finishing Operations",
    "Shoulder Turning",
  ]

  // Insert series advantages
  const insertAdvantages = [
    "CNMG - Exceptional strength for heavy roughing",
    "DNMG - Versatile profiling and finishing capability",
    "SNMG - Maximum strength for heavy-duty operations",
    "TNMG - Perfect balance of strength and versatility",
    "Double-sided design for cost-effectiveness",
    "Multiple chipbreaker geometries available",
    "Wide material compatibility range",
    "Stable to unstable cutting conditions",
  ]

  // Technical specifications for different series
  const technicalSpecs = [
    {
      title: "CNMG Series - 80° Rhombic",
      description:
        "Robust design with 80° corner angle for exceptional strength. Negative rake angle reinforces cutting edge for higher feed rates and enhanced tool life in demanding operations.",
      color: "border-red-600",
    },
    {
      title: "DNMG Series - 55° Rhombic",
      description:
        "Acute 55° corner angle for greater versatility in profiling and finishing. Balances strength with ability to create complex geometries and access tight corners.",
      color: "border-blue-600",
    },
    {
      title: "SNMG Series - 90° Square",
      description:
        "Strongest possible corner design for heavy-duty turning. Square shape provides maximum strength for high-volume metal removal and demanding environments.",
      color: "border-green-600",
    },
    {
      title: "TNMG Series - 60° Triangular",
      description:
        "Most versatile design offering perfect balance between strength and profiling capability. Six cutting edges per insert for maximum economy and flexibility.",
      color: "border-purple-600",
    },
  ]

  // Cutting parameters
  const cuttingParameters = [
    { label: "Cutting Speed (Vc)", value: "60-1500 m/min" },
    { label: "Depth of Cut (ap)", value: "0.5-2.5 mm" },
    { label: "Feed Rate (f)", value: "0.05-0.25 mm/rev" },
    { label: "Corner Angles", value: "55°, 60°, 80°, 90°" },
    { label: "Relief Angle", value: "Negative Rake" },
    { label: "Coating", value: "PVD/CVD" },
    { label: "Substrate", value: "Advanced Carbide" },
    { label: "Cutting Edges", value: "6-8 per insert" },
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
                  Professional Turning Insert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Turning Inserts
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Tool Machine provides a comprehensive range of Turning Inserts - the core cutting components in lathe or turning center operations. These replaceable, multi-tipped cutting tools are designed for high-precision material removal, engineered from advanced carbide substrates with specialized PVD/CVD coatings for exceptional performance.
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
                    src="/images/turning-inserts-hero.png"
                    alt="Professional Turning Inserts Collection"
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
                    Turning inserts are the <strong>core cutting components</strong> in lathe or turning center operations, designed as replaceable, multi-tipped cutting tools for high-precision material removal. The performance and longevity of these inserts are critical for manufacturing efficiency, surface quality, and cost-effectiveness.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Our inserts are <strong>engineered from advanced carbide substrates</strong> and enhanced with specialized PVD (Physical Vapor Deposition) or CVD (Chemical Vapor Deposition) coatings. This combination provides exceptional wear resistance, thermal stability (hot hardness), and toughness.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>selection of a turning insert</strong> is dictated by its geometry, grade, and chipbreaker design, each tailored for specific materials and cutting conditions, allowing them to withstand extreme temperatures and forces during high-speed cutting.
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
                        <strong>Shapes:</strong> 55°, 60°, 80°, 90°
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coating:</strong> PVD/CVD
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Substrate:</strong> Advanced Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Turning, Facing, Profiling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Design:</strong> Double-sided, Multiple edges
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
                      {product.shape && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Shape:</span>
                          <span className="text-gray-900 text-xs">{product.shape}</span>
                        </div>
                      )}
                      {product.chipbreaker && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Chipbreaker:</span>
                          <span className="text-gray-900 text-xs">{product.chipbreaker}</span>
                        </div>
                      )}
                      {product.materials && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Materials:</span>
                          <span className="text-gray-900 text-xs">{product.materials}</span>
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
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Insert Series Specifications</h3>
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
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Cutting Parameters</h3>
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
                  Machined Materials
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

              {/* Insert Advantages */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Insert Advantages
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {insertAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0 mt-1.5"></div>
                      <span className="text-sm">{advantage}</span>
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
                  <h3 className="text-xl font-bold mb-4">Insert Series Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>CNMG Series:</strong> Robust 80° rhombic design for heavy roughing, semi-finishing, and interrupted cuts with exceptional strength and edge security for demanding operations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>DNMG Series:</strong> Versatile 55° rhombic design for profiling, finishing, and copy turning with superior surface quality.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>SNMG Series:</strong> Maximum strength 90° square design for heavy-duty turning, capable of withstanding immense cutting forces for high-volume metal removal.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>TNMG Series:</strong> Most versatile 60° triangular design for general-purpose turning, facing, and profiling operations.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Advanced Coatings</strong> with PVD/CVD technology for superior wear resistance
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Thermal Stability</strong> withstanding extreme temperatures during high-speed cutting
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Multiple Chipbreakers</strong> optimized for specific materials and cutting conditions
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Cost-Effective Design</strong> with multiple cutting edges per insert for maximum economy
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
                  title: "CNMG Series",
                  description: "80° rhombic negative rake inserts for robust general-purpose turning, heavy roughing to semi-finishing with exceptional strength and edge security for demanding operations.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "DNMG Series",
                  description: "55° rhombic inserts designed for versatility in profiling and finishing, balancing strength with ability to create complex geometries and access tight corners.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "SNMG Series",
                  description: "90° square inserts providing maximum strength for heavy-duty turning, capable of withstanding immense cutting forces for high-volume metal removal.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "TNMG Series",
                  description: "60° triangular inserts offering perfect balance between strength and versatility, suitable for nearly any standard turning operation with six cutting edges.",
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
                  title: "Grooving/Cut-off Turning Inserts",
                  image: "/images/grooving-cut-off-inserts.jpg",
                  description: "Specialized inserts for grooving and parting operations",
                  url: "/standard-tools/lathe-turning-inserts/grooving-cut-off-turning-inserts",
                },
                {
                  title: "Back Turning Inserts",
                  image: "/images/back-turning-inserts.jpg",
                  description: "Inserts designed for back turning operations",
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
                  description: "Specialized inserts for internal grooving operations",
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
              <h2 className="text-3xl font-bold mb-4">Need Professional Turning Insert Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal turning insert geometry, grade, and chipbreaker design for your specific applications. From heavy roughing to precision finishing, we provide comprehensive turning solutions that maximize efficiency, tool life, and surface quality across your entire operation.
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