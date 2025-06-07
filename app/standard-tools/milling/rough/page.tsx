import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function RoughMillingCuttersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "rough-009",
      name: "3 Edge Tungsten Steel Uncoated Rough Machining End Milling Cutter",
      image: "/images/AL-CP4F55C.png",
      description: "Uncoated design optimized for nonferrous materials",
      flutes: 4,
      material: "Tungsten Carbide",
      coating: "Uncoated",
      series: "AL-CP4F55C",
      d: "4-20mm",
      H: "12-55mm",
      L: "50-100mm",
      D: "4-20mm",
      hardness: "HRC55",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F25",
      url: "/standard-tools/milling/rough/AL-CP4F55C",
    },
    {
      id: "rough-010",
      name: "Milling cutter for rough machining of high speed steel",
      image: "/images/4FSU.png",
      description: "High speed steel rough milling cutter for general machining",
      flutes: 4,
      material: "High Speed Steel",
      coating: "",
      series: "4FSU",
      d: "6-25mm",
      H: "20-50mm",
      L: "60-120mm",
      D: "6-25mm",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F25",
      url: "/standard-tools/milling/rough/4FSU",
    },
    {
      id: "rough-011",
      name: "4 Edge Tungsten Steel Coated Rough Machining End Milling Cutter",
      image: "/images/CP4F55C.png",
      description: "Coated design for enhanced performance in stainless steel",
      flutes: 4,
      material: "Tungsten Carbide",
      coating: "Coated",
      series: "CP4F55C",
      d: "4-20mm",
      H: "12-55mm",
      L: "50-100mm",
      D: "4-20mm",
      hardness: "HRC55",
      application: "Application: Milling Stainless Steel And Steel Hardness Under HRC55°",
      page: "F25",
      url: "/standard-tools/milling/rough/CP4F55C",
    },
    {
      id: "rough-012",
      name: "4 Edge High Speed Steel Vertical Milling Cutter Made By Holistic Grinding-Inch",
      image: "/images/4FSI.png",
      description: "Holistic grinding HSS vertical milling cutter in inch sizes",
      flutes: 4,
      material: "High Speed Steel",
      coating: "",
      series: "4FSI",
      d: '1/4"-1"',
      H: '3/16"-4"',
      L: '2"-6-1/2"',
      D: 'Ø1/16"-Ø1"',
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F25",
      url: "/standard-tools/milling/rough/4FSI",
    },
    {
      id: "rough-013",
      name: "2 Edge High Speed Steel Vertical Milling Cutter Made By Holistic Grinding",
      image: "/images/2FS.png",
      description: "2-flute HSS vertical milling cutter with holistic grinding precision",
      flutes: 2,
      material: "High Speed Steel",
      coating: "",
      series: "2FS",
      d: "6-20mm",
      H: "2.5-90mm",
      L: "50-165mm",
      D: "1-25mm",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F26",
      url: "/standard-tools/milling/rough/2FS",
    },
    {
      id: "rough-014",
      name: "4 Edge High Speed Steel Vertical Milling Cutter Made By Holistic Grinding",
      image: "/images/4FS.png",
      description: "4-flute HSS vertical milling cutter with holistic grinding precision",
      flutes: 4,
      material: "High Speed Steel",
      coating: "",
      series: "4FS",
      d: "6-20mm",
      H: "2.5-90mm",
      L: "50-165mm",
      D: "1-25mm",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F26",
      url: "/standard-tools/milling/rough/4FS",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Maximum Material Removal",
      description:
        "Chipbreaker geometry and coarse pitch design enable aggressive material removal rates while maintaining tool stability and reducing cutting forces.",
    },
    {
      icon: <Layers className="h-8 w-8 text-red-600" />,
      title: "Superior Chip Management",
      description:
        "Serrated cutting edges and chipbreaker grooves break chips into manageable segments, preventing chip clogging and enabling efficient evacuation.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Enhanced Tool Life",
      description:
        "Premium tungsten carbide construction with advanced coatings provides exceptional wear resistance and thermal stability in demanding applications.",
    },
  ]

  // Industries served
  const industries = [
    "Heavy Machinery Manufacturing",
    "Mold and Die Making",
    "Aerospace Industry",
    "Automotive Industry",
    "Shipbuilding and Marine",
    "Energy Sector (Oil & Gas)",
    "Construction Equipment",
    "General Engineering",
    "Foundries and Forges",
  ]

  // Machining operations
  const machiningOperations = [
    "Heavy Slotting",
    "Aggressive Pocketing",
    "Rough Contouring/Profiling",
    "Peripheral Rough Milling",
    "Plunge Roughing",
    "High-Feed Milling",
    "Bulk Stock Removal",
    "Deep Cavity Roughing",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon Steels",
    "Alloy Steels",
    "Tool Steels (Annealed & Hardened)",
    "Stainless Steels (All Types)",
    "Cast Iron (Grey & Ductile)",
    "Titanium Alloys",
    "Nickel-based Superalloys",
    "Aluminum Alloys",
  ]

  // Flute configurations
  const fluteConfigurations = [
    {
      title: "2 Flute Designs",
      description:
        "Maximum chip evacuation with large flute valleys. Perfect for aluminum, copper, and soft materials where chip removal is critical.",
      color: "border-green-600",
    },
    {
      title: "3-4 Flute Designs",
      description:
        "Excellent chip evacuation with large flute valleys. Ideal for general-purpose roughing and heavy material removal in steel and cast iron.",
      color: "border-red-600",
    },
    {
      title: "5-6 Flute Designs",
      description:
        "Increased strength and higher feed rates. Optimized for stable machining conditions and improved productivity in aerospace applications.",
      color: "border-blue-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Rough Milling Cutter / Hog Mill / Corn Cob End Mill" },
    { label: "Material", value: "Solid Tungsten Carbide (Ultra-Grain®)" },
    { label: "Cutting Edge", value: "Serrated / Waved / Sinusoidal Geometry" },
    { label: "Pitch Options", value: "Coarse Pitch (NKR) / Fine Pitch (NKR-M)" },
    { label: "Coating Options", value: "TiAlN, AlTiN, TiCN, Multi-layer PVD" },
    { label: "Helix Angle", value: "30°-45° (35° Fast-helix typical)" },
    { label: "Flute Count", value: "3-8 Flutes (4-6 most common)" },
    { label: "End Type", value: "Square End, Center-Cutting" },
    { label: "Chip Load", value: "1-2.75x higher than finishing end mills" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
            <Image
              src="/images/milling-tools.jpg"
              alt="Rough Milling Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Tungsten Steel Rough Machining End Mills
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Rough Milling Cutters</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  High-performance tungsten steel rough milling cutters with advanced chipbreaker geometry, engineered
                  for maximum material removal rates in demanding roughing operations. Featuring serrated cutting edges,
                  coarse pitch design, and premium coatings for superior chip management and extended tool life.
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
                    alt="Collection of Rough Milling Cutters and Chipbreaker End Mills"
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
                    Tungsten Steel Rough Machining End Milling Cutters, commonly referred to as Roughing End Mills, "Hog
                    Mills," or "Corn Cob" End Mills (due to the visual resemblance of their cutting edges to a corn
                    cob), are specialized cutting tools precision-engineered for aggressive, high-volume material
                    removal in the initial stages of machining operations. Their primary performance characteristic is
                    the ability to achieve exceptionally high Material Removal Rates (MRR), significantly reducing
                    overall machining time for bulk stock removal.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Manufactured from premium, high-quality solid tungsten carbide (often designated as "Ultra-Grain®"
                    or similar micro-grain/sub-micron grades for superior toughness and wear resistance under heavy
                    loads), these cutters are designed to withstand the substantial cutting forces and thermal stresses
                    associated with heavy roughing operations.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The key to their superior roughing performance lies in their unique cutting edge geometry featuring
                    <strong> serrated or waved cutting edges</strong>. Unlike the continuous, smooth cutting edges of
                    finishing end mills, roughing end mills feature specially designed profiles with serrations,
                    notches, or wave patterns along the flute length. This design effectively breaks chips into smaller,
                    more manageable segments, reducing chip recutting, heat buildup, and the risk of flute clogging.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The chip-breaking geometry leads to a significant{" "}
                    <strong>reduction in cutting forces, tool pressure, and vibration (chatter)</strong> compared to
                    solid-edge tools removing the same volume of material. This allows for deeper axial depths of cut
                    (ADOC) and wider radial depths of cut (RDOC), further enhancing MRR while contributing to a more
                    stable machining process.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Advanced PVD coatings such as TiAlN, AlTiN, or specialized multi-layer coatings provide enhanced
                    surface hardness, reduced friction, and thermal barrier properties, ensuring excellent wear
                    resistance and edge strength under demanding roughing conditions.
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
                        <strong>Serrated Cutting Edges:</strong> Corn cob pattern for chip breaking
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material:</strong> Ultra-Grain® Tungsten Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>High MRR:</strong> Maximum material removal rates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, Multi-layer PVD
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Reduced Forces:</strong> Lower cutting forces and vibration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>High Chip Load:</strong> 1-2.75x higher than finishing tools
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
                        <span className="font-medium mr-1">Flutes:</span> {product.flutes}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Coating:</span> {product.coating}
                      </div>
                      {product.helixAngle && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Helix:</span> {product.helixAngle}
                        </div>
                      )}
                      {product.page && (
                        <div className="col-span-2 flex items-center">
                          <span className="font-medium mr-1">Page:</span> {product.page}
                        </div>
                      )}
                      <div className="col-span-2 flex items-center">
                        <span className="font-medium mr-1">Series:</span> {product.series}
                      </div>
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

          {/* Applications & Materials */}
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
                  title: "Maximum Material Removal Rate",
                  description:
                    "Remove the largest possible volume of material in the shortest amount of time through aggressive cutting parameters and optimized geometry.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Efficient Chip Management",
                  description:
                    "Break chips into small, manageable segments for easy evacuation, preventing chip clogging and recutting that can lead to tool failure.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Reduced Cutting Forces",
                  description:
                    "Chip-breaking geometry helps lower overall cutting pressures and power required compared to solid-flute end mills removing the same volume.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Preparation for Finishing",
                  description:
                    "Quickly bring workpieces closer to final dimensions, leaving consistent material for subsequent finishing passes and reducing finishing tool wear.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Machining Stability",
                  description:
                    "Reduce vibration and chatter through controlled chip formation, contributing to a more stable and predictable machining process.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Cost-Effectiveness",
                  description:
                    "Speed up initial material removal stages, significantly reduce overall cycle times and lower tool replacement costs in high-volume operations.",
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

          {/* Related Categories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "End Mills",
                  image: "/images/product-1.jpg",
                  description: "General purpose end mills for finishing operations.",
                  url: "/standard-tools/milling/end-mills",
                },
                {
                  title: "Right Angle Flat End Mills",
                  image: "/images/product-2.jpg",
                  description: "Precision flat end mills for accurate 90° corners.",
                  url: "/standard-tools/milling/right-angle-flat",
                },
                {
                  title: "Ball Nose End Mills",
                  image: "/images/product-3.jpg",
                  description: "Specialized tools for 3D contour machining.",
                  url: "/standard-tools/milling/ball-nose",
                },
                {
                  title: "Corner Radius End Mills",
                  image: "/images/product-4.jpg",
                  description: "End mills with rounded corners for improved tool life.",
                  url: "/standard-tools/milling/corner-radius",
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
              <h2 className="text-3xl font-bold mb-4">Optimize Your Roughing Operations</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal rough milling cutter configuration for maximum
                material removal rates, improved chip management, and enhanced productivity in your specific
                applications.
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
