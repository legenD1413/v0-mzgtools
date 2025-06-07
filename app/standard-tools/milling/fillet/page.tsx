import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function FilletEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "fillet-005",
      name: "2 Edge HRC45° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/2F45CR.png",
      description: "Application: Milling the steel hardness under HRC45°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F45CR",
      d: "0.2-3mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC45",
      application: "Application: Milling the steel hardness under HRC45°",
      url: "/standard-tools/milling/fillet/2F45CR",
      page: "F17",
    },
    {
      id: "fillet-006",
      name: "4 Edge HRC45° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/4F45CR.png",
      description: "Application: Milling the steel hardness under HRC45°",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F45CR",
      d: "0.2-3mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC45",
      application: "Application: Milling the steel hardness under HRC45°",
      url: "/standard-tools/milling/fillet/4F45CR",
      page: "F17",
    },
    {
      id: "fillet-007",
      name: "2 Edge HRC50° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/2F50CR.png",
      description: "Application: Milling the steel hardness under HRC50°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F50CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC50",
      application: "Application: Milling the steel hardness under HRC50°",
      url: "/standard-tools/milling/fillet/2F50CR",
      page: "F18",
    },
    {
      id: "fillet-008",
      name: "4 Edge HRC50° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/4F50CR.png",
      description: "Application: Milling the steel hardness under HRC50°",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F50CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC50",
      application: "Application: Milling the steel hardness under HRC50°",
      url: "/standard-tools/milling/fillet/4F50CR",
      page: "F18",
    },
    {
      id: "fillet-009",
      name: "2 Edge HRC55° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/2F55CR.png",
      description: "Application: Milling the steel hardness under HRC55°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F55CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC55",
      application: "Application: Milling the steel hardness under HRC55°",
      url: "/standard-tools/milling/fillet/2F55CR",
      page: "F19",
    },
    {
      id: "fillet-010",
      name: "4 Edge HRC55° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/4F55CR.png",
      description: "Application: Milling the steel hardness under HRC55°",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F55CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC55",
      application: "Application: Milling the steel hardness under HRC55°",
      url: "/standard-tools/milling/fillet/4F55CR",
      page: "F19",
    },
    {
      id: "fillet-011",
      name: "2 Edge HRC65° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/2F65CR.png",
      description: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F65CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC65",
      application: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°",
      url: "/standard-tools/milling/fillet/2F65CR",
      page: "F20",
    },
    {
      id: "fillet-012",
      name: "4 Edge HRC65° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/4F65CR.png",
      description: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F65CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC65",
      application: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°",
      url: "/standard-tools/milling/fillet/4F65CR",
      page: "F20",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Superior Corner Radius Design",
      description:
        "Precision-ground corner radii distribute cutting forces evenly, significantly enhancing tool life and reducing chipping compared to sharp-cornered end mills.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Advanced Tungsten Carbide",
      description:
        "High-quality solid tungsten carbide construction with optional PVD coatings (TiAlN, AlTiN, TiCN) for enhanced hardness, wear resistance, and thermal protection.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Stress Reduction Engineering",
      description:
        "Creates filleted corners that reduce stress concentrations in workpieces, improving part strength, fatigue resistance, and overall durability.",
    },
  ]

  // Industries served
  const industries = [
    "Mold and Die Making",
    "Aerospace Industry",
    "Automotive Industry",
    "General Machining and Engineering",
    "Medical Device Manufacturing",
    "Power Generation",
    "Electronics Manufacturing",
    "Tool and Fixture Making",
  ]

  // Machining operations
  const machiningOperations = [
    "Pocket Milling",
    "Slotting Operations",
    "Contour Milling/Profiling",
    "Shoulder Milling",
    "Plunge Milling",
    "Ramping and Helical Interpolation",
    "Corner Radius Creation",
    "Stress Relief Machining",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon Steels and Alloy Steels",
    "Tool Steels (Including Hardened)",
    "Stainless Steels (All Grades)",
    "Cast Iron (Grey and Ductile)",
    "Aluminum and Aluminum Alloys",
    "Copper and Brass",
    "Titanium Alloys",
    "High-Temperature Superalloys",
    "Plastics and Composites",
  ]

  // Flute configurations
  const fluteConfigurations = [
    {
      title: "2-Flute Designs",
      description:
        "Excellent chip evacuation for softer materials like aluminum and slotting operations. Ideal for deep pockets and high material removal rates.",
      color: "border-red-600",
    },
    {
      title: "3-Flute End Mills",
      description:
        "Balanced design offering good chip evacuation with increased stability. Suitable for general-purpose applications across various materials.",
      color: "border-blue-600",
    },
    {
      title: "4+ Flute Designs",
      description:
        "Maximum stability and superior surface finish for harder materials and profiling applications. Higher feed rates and better dimensional accuracy.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Fillet End Mill / Corner Radius End Mill" },
    { label: "Material", value: "Solid Tungsten Carbide (Micro-grain)" },
    { label: "Corner Radius (CR)", value: '0.1mm to 3mm+ (0.005" to 0.125"+)' },
    { label: "Coating Options", value: "TiN, TiCN, TiAlN, AlTiN, CrN, Multi-layer" },
    { label: "Helix Angle", value: "30° to 45° (Variable helix available)" },
    { label: "End Geometry", value: "Flat bottom with radiused corners" },
    { label: "Flute Count", value: "2, 3, 4, or more flutes" },
    { label: "Tolerances", value: "High precision on diameter and radius" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section - Enhanced with product-specific information */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
            <Image
              src="/images/milling-tools.jpg"
              alt="Fillet End Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Tungsten Steel Corner Radius End Mills
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Fillet End Mills</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  Precision tungsten steel fillet end mills designed to create specific corner radii while enhancing
                  tool life and part strength. Engineered for superior performance across diverse materials, from
                  aluminum to high-temperature superalloys, with advanced coatings and optimized geometries for stress
                  reduction and improved fatigue resistance.
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
                    className="bg-transparent text-white hover:bg-white/10 border-white hover:text-white transition-all duration-300"
                  >
                    Download Catalog <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-[500px] h-[300px] bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milling-JvsTK9mKVpWhb6WORtlP22ZwwqQAca.png"
                    alt="Collection of Fillet End Mills and Corner Radius Cutting Tools"
                    width={500}
                    height={300}
                    className="object-contain rounded-lg"
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
                <div className="mb-4 bg-white inline-flex p-3 rounded-lg shadow-sm">{feature.icon}</div>
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
                    Tungsten Steel Fillet End Mills, often referred to as Corner Radius End Mills, are precision cutting
                    tools designed to create a specific radius (fillet) at the intersection of two machined surfaces,
                    such as the bottom of a slot and its wall, or a pocket floor and its vertical wall. Manufactured
                    from high-quality solid tungsten carbide, these end mills offer excellent hardness, superior wear
                    resistance, and the ability to maintain cutting edge integrity at high machining temperatures and
                    cutting speeds.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The key performance advantage of a fillet end mill lies in its corner radius. This rounded corner
                    significantly enhances tool life compared to a sharp-cornered (square) end mill, especially in
                    demanding applications or when machining abrasive materials. The radius distributes cutting forces
                    more evenly across the corner, reducing chipping and premature wear of this vulnerable part of the
                    tool.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Performance is further enhanced by optimized flute geometries for efficient chip evacuation,
                    advanced PVD coatings like TiAlN, AlTiN, TiCN, or specialized multi-layer coatings, and precision
                    grinding that ensures high accuracy of the corner radius, cutting diameter, and overall tool
                    geometry for consistent machining results.
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
                        <strong>Material:</strong> Solid Tungsten Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Corner Radius:</strong> 0.1mm to 3mm+
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, TiCN, Multi-layer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Helix Angle:</strong> 30°-45° (Variable available)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Flute Options:</strong> 2, 3, 4+ flutes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid - Empty for now, will be populated when products are added */}
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
                  <div className="relative w-full bg-white" style={{ height: "176px" }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 border-t">
                    <h3 className="text-base font-bold mb-2 line-clamp-2">{product.name}</h3>
                    {product.application && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.application}</p>
                    )}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                      <div className="flex items-center">
                        <span className="font-medium mr-1">R:</span> {product.cornerRadius}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">d:</span> {product.d}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">D:</span> {product.D}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">H:</span> {product.H}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">L:</span> {product.L}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Flutes:</span> {product.flutes}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Coating:</span> {product.coating}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Hardness:</span> {product.hardness}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Page:</span> {product.page}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Series:</span> {product.series}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Parameters - Redesigned for horizontal alignment */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Flute Configurations */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Flute Configurations</h3>
                <div className="p-4 space-y-4">
                  {fluteConfigurations.map((config, index) => (
                    <div key={index} className={`border-l-4 ${config.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{config.title}</h4>
                      <p className="text-gray-600 text-sm">{config.description}</p>
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

          {/* Combined Application Scenarios and Material Compatibility in one row */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Applications & Materials</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Industries Served */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Industries Served
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Machining Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Machining Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {machiningOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Compatibility */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Material Compatibility
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {machinableMaterials.map((material, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{material}</span>
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
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Creating Defined Corner Radii",
                  description:
                    "Accurately produce specific radius at internal corners of machined features, meeting precise design specifications and engineering requirements.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Stress Concentration Reduction",
                  description:
                    "Create fillets instead of sharp corners to distribute stress more evenly, increasing part strength, fatigue resistance, and overall durability.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Tool Life",
                  description:
                    "Corner radius design strengthens cutting edges, making them more resistant to chipping and wear compared to sharp-cornered square end mills.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Surface Finish Improvement",
                  description:
                    "Provide smoother transitions between floor and wall of machined features compared to sharp corners, enhancing overall surface quality.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Milling Operations",
                  description:
                    "Capable of performing slotting, pocketing, and profiling operations where corner radius is specified, offering operational flexibility.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Design Requirement Compliance",
                  description:
                    "Meet engineering drawings that explicitly call for specific internal radii for functional, structural, or manufacturing reasons.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
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
                  title: "Right Angle Flat End Mills",
                  image: "/images/product-1.jpg",
                  description: "Precision flat end mills for creating sharp 90-degree corners and flat surfaces.",
                  url: "/standard-tools/milling/right-angle-flat",
                },
                {
                  title: "Ball Nose End Mills",
                  image: "/images/product-3.jpg",
                  description: "Specialized tools for 3D contour machining and curved surfaces.",
                  url: "/standard-tools/milling/ball-nose",
                },
                {
                  title: "Corner Radius End Mills",
                  image: "/images/product-2.jpg",
                  description: "End mills with rounded corners for improved tool life and surface finish.",
                  url: "/standard-tools/milling/corner-radius",
                },
                {
                  title: "Roughing End Mills",
                  image: "/images/product-4.jpg",
                  description: "High material removal rate end mills for efficient roughing operations.",
                  url: "/standard-tools/milling/roughing",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Milling Tools" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Expert Guidance?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal fillet end mill configuration for your specific
                corner radius requirements, material, and application needs.
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
