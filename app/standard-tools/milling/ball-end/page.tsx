import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function BallEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "bem-009",
      name: "2 Edge HRC45° Tungsten Steel Coated Ball End Milling Cutter",
      image: "/images/2F45CRB.png",
      description: "2-flute coated ball end mill for steel machining up to HRC45°",
      flutes: 2,
      coating: "Coated",
      series: "2F45CRB",
      page: "F21",
      // Dimensions as separate fields
      d: "R0.5-R10",
      H: "2-30mm",
      L: "50-200mm",
      D: "4-20mm",
      // Additional specifications
      hardness: "HRC45",
      radius: "R0.5-R10",
      application: "Application: Milling the steel hardness under HRC45°.",
      url: "/standard-tools/milling/ball-end/F21",
    },
    {
      id: "bem-010",
      name: "2 Edge HRC50° Tungsten Steel Coated Ball End Milling Cutter",
      image: "/images/2F50CRB.png",
      description: "2-flute coated ball end mill for steel machining up to HRC50°",
      flutes: 2,
      coating: "Coated",
      series: "2F50CRB",
      page: "F21",
      // Dimensions as separate fields
      d: "R0.5-R10",
      H: "2-30mm",
      L: "50-200mm",
      D: "4-20mm",
      // Additional specifications
      hardness: "HRC50",
      radius: "R0.5-R10",
      application: "Application: Milling the steel hardness under HRC50°.",
      url: "/standard-tools/milling/ball-end/F21",
    },
    {
      id: "bem-011",
      name: "2 Edge HRC55° Tungsten Steel Coated Ball End Milling Cutter",
      image: "/images/2F55CRB.png",
      description: "2-flute coated ball end mill for steel machining up to HRC55°",
      flutes: 2,
      coating: "Coated",
      series: "2F55CRB",
      page: "F22",
      // Dimensions as separate fields
      d: "R0.5-R10",
      H: "2-30mm",
      L: "50-200mm",
      D: "4-20mm",
      // Additional specifications
      hardness: "HRC55",
      radius: "R0.5-R10",
      application: "Application: Milling the steel hardness under HRC55°.",
      url: "/standard-tools/milling/ball-end/F22",
    },
    {
      id: "bem-012",
      name: "2 Edge Tungsten Steel Uncoated Ball End End Milling Cutter",
      image: "/images/AL-2F50CRB.png",
      description: "2-flute uncoated ball end mill for steel and nonferrous metals",
      flutes: 2,
      coating: "unCoated",
      series: "AL-2F50CRB",
      page: "F22",
      // Dimensions as separate fields
      d: "R0.5-R10",
      H: "2-30mm",
      L: "50-200mm",
      D: "4-20mm",
      // Additional specifications
      hardness: "",
      radius: "R0.5-R10",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/ball-end/F22",
    },
    {
      id: "bem-013",
      name: "2 Edge HRC60° Tungsten Steel Coated Ball End Milling Cutter",
      image: "/images/2F60CRB.png",
      description: "2-flute coated ball end mill for stainless steel and hardened steel up to HRC60°",
      flutes: 2,
      coating: "Coated",
      series: "2F60CRB",
      page: "F23",
      // Dimensions as separate fields
      d: "R0.5-R10",
      H: "2-30mm",
      L: "50-200mm",
      D: "4-20mm",
      // Additional specifications
      hardness: "HRC60",
      radius: "R0.5-R10",
      application: "Application: Milling Stainless Steel And Steel Hardness Under HRC60°.",
      url: "/standard-tools/milling/ball-end/F23",
    },
    {
      id: "bem-014",
      name: "2 Edge HRC65° Tungsten Steel Coated Ball End Milling Cutter",
      image: "/images/2F65CRB.png", // Updated to use the new specific image
      description: "2-flute coated ball end mill for extreme hardness stainless steel and hardened steel up to HRC65°",
      flutes: 2,
      coating: "Coated",
      series: "2F65CRB",
      page: "F23",
      // Dimensions as separate fields
      d: "R0.5-R10",
      H: "2-30mm",
      L: "50-200mm",
      D: "4-20mm",
      // Additional specifications
      hardness: "HRC65",
      radius: "R0.5-R10",
      application: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°.",
      url: "/standard-tools/milling/ball-end/F23",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "3D Precision Machining",
      description:
        "Hemispherical cutting end enables smooth 3D contouring, sculpted surfaces, and complex free-form geometries with exceptional accuracy.",
    },
    {
      icon: <Layers className="h-8 w-8 text-red-600" />,
      title: "Superior Surface Finish",
      description:
        "Multi-flute designs and optimized toolpaths deliver mirror-like surface finishes, reducing or eliminating hand polishing requirements.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Advanced Carbide Grades",
      description:
        "Micro-grain and ultra-fine grain tungsten carbide construction provides superior hardness, wear resistance, and edge retention.",
    },
  ]

  // Industries served
  const industries = [
    "Mold and Die Making",
    "Aerospace Industry",
    "Automotive Industry",
    "Medical Device Manufacturing",
    "Tool Manufacturing",
    "Power Generation",
    "Arts and Jewelry",
    "General Engineering",
  ]

  // Machining operations
  const machiningOperations = [
    "3D Contouring and Profiling",
    "Surface Finishing",
    "Fillet Milling",
    "Channel and Groove Milling",
    "Roughing of 3D Shapes",
    "Z-Level Machining",
    "Raster Finishing",
    "Spiral Milling",
    "3D Engraving",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon and Alloy Steels",
    "Tool Steels (Pre-hardened and Hardened)",
    "Stainless Steels (All Grades)",
    "Cast Iron",
    "Aluminum and Alloys",
    "Copper, Brass, Bronze",
    "Titanium Alloys",
    "Nickel-based Superalloys",
    "Plastics and Composites",
    "Graphite",
  ]

  // Flute configurations
  const fluteConfigurations = [
    {
      title: "2-Flute Ball End Mills",
      description:
        "Excellent chip evacuation for roughing operations and softer materials. Ideal for deep cavity machining and aluminum applications.",
      color: "border-red-600",
    },
    {
      title: "3-4 Flute Ball End Mills",
      description:
        "Balanced design offering good surface finish and stability. Perfect for general-purpose 3D machining and finishing operations.",
      color: "border-blue-600",
    },
    {
      title: "6+ Flute Ball End Mills",
      description:
        "Maximum surface finish quality for critical applications. Used in aerospace, medical, and high-precision mold finishing.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Ball End Mill / Ball Nose End Mill" },
    { label: "Material", value: "Solid Tungsten Carbide" },
    { label: "Cutting End", value: "Hemispherical (R = D/2)" },
    { label: "Coating Options", value: "TiN, TiCN, TiAlN, AlTiN, AlCrN" },
    { label: "Helix Angle", value: "30° to 45° (Variable Available)" },
    { label: "Hardness Range", value: "HRC45 to HRC65" },
    { label: "Diameter Range", value: "0.5mm to 25mm+" },
    { label: "Tolerance", value: "±0.005mm (Cutting Diameter)" },
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
              alt="Ball End Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Tungsten Steel Ball End Milling Cutters
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ball End Mills</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  Specialized precision cutting tools with hemispherical cutting ends, engineered for machining complex
                  three-dimensional contours, sculpted surfaces, fillets, and radii. Manufactured from high-quality
                  tungsten carbide with advanced coatings for superior performance in aerospace, medical, and
                  mold-making applications.
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
                    alt="Collection of Ball End Mills and 3D Milling Tools"
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
                    Tungsten Steel Ball End Milling Cutters, also known as ball nose end mills, are specialized
                    precision cutting tools characterized by a hemispherical cutting end. This design makes them
                    exceptionally suited for machining complex three-dimensional (3D) contours, sculpted surfaces,
                    fillets, and radii. Manufactured from high-quality, fine-grain or ultra-fine grain solid tungsten
                    carbide, these end mills offer superior hardness, excellent wear resistance, and the ability to
                    maintain dimensional accuracy and cutting edge integrity at high machining temperatures and cutting
                    speeds.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The core performance of a ball end mill revolves around its ability to produce smooth, continuous
                    cutting paths necessary for achieving high surface quality on complex, non-planar geometries. The
                    full radius at the tool tip (where the radius is equal to half the cutter diameter) allows for
                    smooth transitions and blending of surfaces. Performance is significantly influenced by carbide
                    grade selection, optimized flute geometry, and advanced PVD coatings.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Advanced coatings such as TiN, TiCN, TiAlN, AlTiN, or specialized multi-layer coatings drastically
                    increase surface hardness, reduce friction, enhance wear resistance, and provide thermal barriers,
                    leading to significantly extended tool life and improved productivity.
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
                        <strong>Geometry:</strong> Hemispherical (R = D/2)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material:</strong> Micro-grain Tungsten Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiN, TiCN, TiAlN, AlTiN
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Helix Angle:</strong> 30°-45° (Variable)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Flute Options:</strong> 2, 3, 4, 6+ flutes
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
                      {product.d && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">d:</span> {product.d}
                        </div>
                      )}
                      {product.D && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">D:</span> {product.D}
                        </div>
                      )}
                      {product.H && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">H:</span> {product.H}
                        </div>
                      )}
                      {product.L && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">L:</span> {product.L}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Flute:</span> {product.flutes}
                      </div>
                      {product.hardness && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Hardness:</span> {product.hardness}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Coated:</span> {product.coating}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Page:</span> {product.page}
                      </div>
                      <div className="col-span-2 flex items-center">
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
                  title: "Machining Complex 3D Geometries",
                  description:
                    "Accurately produce intricate three-dimensional contours, free-form surfaces, and sculpted shapes that other end mill types cannot easily create.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Quality Surface Finishing",
                  description:
                    "Achieve smooth and precise surface finishes on curved and complex surfaces, critical for aesthetic and functional requirements.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Profiling and Contouring",
                  description:
                    "Perform a wide range of contouring operations, from rough shaping to fine finishing of complex part profiles.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Creating Fillets and Radii",
                  description:
                    "Machine smooth, rounded transitions (fillets) between intersecting surfaces or along edges with precision.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Advanced Manufacturing Techniques",
                  description:
                    "Facilitate advanced CAM strategies for efficient and precise machining of complex parts in 5-axis applications.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Reducing Hand Finishing",
                  description:
                    "Achieve high-quality machined surfaces directly, significantly reducing or eliminating subsequent manual polishing.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
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
                  description: "Flat end mills for creating 90° corners and flat bottom profiles.",
                  url: "/standard-tools/milling/right-angle-flat",
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
                {
                  title: "Chamfer Mills",
                  image: "/images/product-3.jpg",
                  description: "Specialized tools for creating chamfers and beveled edges.",
                  url: "/standard-tools/milling/chamfer",
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
                Our technical team can help you select the optimal ball end mill configuration for your specific 3D
                machining requirements, material, and surface finish specifications.
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
