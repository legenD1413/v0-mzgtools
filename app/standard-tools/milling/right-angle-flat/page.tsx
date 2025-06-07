import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function RightAngleFlatEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "raf-007",
      name: "2F Edge HRC45° Tungsten Steel Coated End Milling Cutter",
      image: "/images/2F45C-JST.png",
      description: "",
      flutes: 2,
      material: "Carbide",
      coating: "Coated",
      series: "2F45C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC45",
      page: "F03",
      application: "Milling the steel hardness under HRC45°",
      url: "/standard-tools/milling/right-angle-flat/2F45C",
    },
    {
      id: "raf-008",
      name: "4F Edge HRC45° Tungsten Steel Coated End Milling Cutter",
      image: "/images/4F45C-TSJ.png",
      description: "",
      flutes: 4,
      material: "Carbide",
      coating: "Coated",
      series: "4F45C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC45",
      page: "F03",
      application: "Milling the steel hardness under HRC45°",
      url: "/standard-tools/milling/right-angle-flat/4F45C",
    },
    {
      id: "raf-009",
      name: "2F Edge HRC50° Tungsten Steel Coated End Milling Cutter",
      image: "/images/2F50C.png",
      description: "",
      flutes: 2,
      material: "Carbide",
      coating: "Coated",
      series: "2F50C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC50",
      page: "F03",
      application: "Milling the steel hardness under HRC50°",
      url: "/standard-tools/milling/right-angle-flat/2F50C",
    },
    {
      id: "raf-010",
      name: "4F Edge HRC50° Tungsten Steel Coated End Milling Cutter",
      image: "/images/4F50C.png",
      description: "",
      flutes: 4,
      material: "Carbide",
      coating: "Coated",
      series: "4F50C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC50",
      page: "F03",
      application: "Milling the steel hardness under HRC50°",
      url: "/standard-tools/milling/right-angle-flat/4F50C",
    },
    {
      id: "raf-011",
      name: "2F Edge HRC55° Tungsten Steel Coated End Milling Cutter",
      image: "/images/2F55C.png",
      description: "",
      flutes: 2,
      material: "Carbide",
      coating: "Coated",
      series: "2F55C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC55",
      page: "F03",
      application: "Milling the steel hardness under HRC55°",
      url: "/standard-tools/milling/right-angle-flat/2F55C",
    },
    {
      id: "raf-012",
      name: "4F Edge HRC55° Tungsten Steel Coated End Milling Cutter",
      image: "/images/4F55C.png",
      description: "",
      flutes: 4,
      material: "Carbide",
      coating: "Coated",
      series: "4F55C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC55",
      page: "F03",
      application: "Milling the steel hardness under HRC55°",
      url: "/standard-tools/milling/right-angle-flat/4F55C",
    },
    {
      id: "raf-013",
      name: "2F Edge HRC60° Tungsten Steel Coated End Milling Cutter",
      image: "/images/2F60C.png",
      description: "",
      flutes: 2,
      material: "Carbide",
      coating: "Coated",
      series: "2F60C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC60",
      page: "F03",
      application: "Milling Stainless Steel And Steel Hardness Under HRC60°",
      url: "/standard-tools/milling/right-angle-flat/2F60C",
    },
    {
      id: "raf-014",
      name: "4F Edge HRC60° Tungsten Steel Coated End Milling Cutter",
      image: "/images/4F60C.png",
      description: "",
      flutes: 4,
      material: "Carbide",
      coating: "Coated",
      series: "4F60C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC60",
      page: "F03",
      application: "Milling Stainless Steel And Steel Hardness Under HRC60°",
      url: "/standard-tools/milling/right-angle-flat/4F60C",
    },
    {
      id: "raf-015",
      name: "2F Edge HRC65° Tungsten Steel Coated End Milling Cutter",
      image: "/images/2F65C.png",
      description: "",
      flutes: 2,
      material: "Carbide",
      coating: "Coated",
      series: "2F65C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC65",
      page: "F03",
      application: "Milling Stainless Steel And Steel Hardness Under HRC65°",
      url: "/standard-tools/milling/right-angle-flat/2F65C",
    },
    {
      id: "raf-016",
      name: "4F Edge HRC65° Tungsten Steel Coated End Milling Cutter",
      image: "/images/4F65C.png",
      description: "",
      flutes: 4,
      material: "Carbide",
      coating: "Coated",
      series: "4F65C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC65",
      page: "F03",
      application: "Milling Stainless Steel And Steel Hardness Under HRC65°",
      url: "/standard-tools/milling/right-angle-flat/4F65C",
    },
    {
      id: "raf-017",
      name: "4F Edge HRC50° Tungsten Steel Coated End Milling Cutter-Nothing Coating",
      image: "/images/AL-4F50C.png",
      description: "",
      flutes: 4,
      material: "Carbide",
      coating: "Uncoated",
      series: "AL-4F50C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC50",
      page: "F03",
      application: "Milling the steel hardness under HRC50° and copper and aluminum",
      url: "/standard-tools/milling/right-angle-flat/AL-4F50C",
    },
    {
      id: "raf-018",
      name: "4F Edge HRC55° Tungsten Steel Coated End Milling Cutter-Nothing Coating",
      image: "/images/AL-4F55C.png",
      description: "",
      flutes: 4,
      material: "Carbide",
      coating: "Uncoated",
      series: "AL-4F55C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC55",
      page: "F03",
      application: "Milling the steel hardness under HRC55° and copper and aluminum",
      url: "/standard-tools/milling/right-angle-flat/AL-4F55C",
    },
    {
      id: "raf-019",
      name: "2F Edge HRC50° Tungsten Steel Coated End Milling Cutter-Nothing Coating",
      image: "/images/AL-2F50C.png",
      description: "",
      flutes: 2,
      material: "Carbide",
      coating: "Uncoated",
      series: "AL-2F50C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC50",
      page: "F03",
      application: "Milling the steel hardness under HRC60° and copper and aluminum",
      url: "/standard-tools/milling/right-angle-flat/AL-2F50C",
    },
    {
      id: "raf-020",
      name: "3F Edge HRC50° Tungsten Steel Coated End Milling Cutter-Nothing Coating",
      image: "/images/AL-3F50C.png",
      description: "",
      flutes: 3,
      material: "Carbide",
      coating: "Uncoated",
      series: "AL-3F50C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC50",
      page: "F03",
      application: "Milling the steel hardness under HRC50° and copper and aluminum",
      url: "/standard-tools/milling/right-angle-flat/AL-3F50C",
    },
    {
      id: "raf-021",
      name: "3F Edge HRC55° High gloss end mill for tungsten steel and aluminum",
      image: "/images/AL-3F55C.png",
      description: "",
      flutes: 3,
      material: "Carbide",
      coating: "Uncoated",
      series: "AL-3F55C",
      // Dimensions as separate fields
      d: "1-20mm",
      H: "3-75mm",
      L: "50-200mm",
      D: "3-20mm",
      // Additional specifications
      hardness: "HRC55",
      page: "F03",
      application: "Milling the steel hardness under HRC55° and copper and aluminum",
      url: "/standard-tools/milling/right-angle-flat/AL-3F55C",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Superior Hardness",
      description:
        "HRC45-65 hardness range with tungsten carbide construction for exceptional wear resistance and extended tool life.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Advanced Coatings",
      description:
        "TiAlN, AlTiN, and nano-composite coatings reduce friction, prevent material adhesion, and enable higher cutting speeds.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Precision Engineering",
      description:
        "Sharp cutting edges with optimized helix angles for efficient chip evacuation and prevention of built-up edge formation.",
    },
  ]

  // Industries served
  const industries = [
    "Automotive Industry",
    "Aerospace Industry",
    "Mold and Die Making",
    "Robotics and Automation",
    "New Energy Sector",
    "Electronics Manufacturing",
    "Medical Device Manufacturing",
    "General Engineering",
  ]

  // Machining operations
  const machiningOperations = [
    "End Milling (Face Milling)",
    "Side Milling (Peripheral Milling)",
    "Slotting and Grooving",
    "Profiling/Contouring",
    "Shoulder Milling",
    "Plunging Operations",
    "Ramping/Helical Interpolation",
    "Finish Machining",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Copper and Copper Alloys",
    "Cast Iron (Grey, Ductile)",
    "Carbon Steels (Low, Medium, High Carbon)",
    "Alloy Steels",
    "Tool Steels",
    "Mould Steels (Pre-hardened and Hardened)",
    "Stainless Steels (All Types)",
    "Hardened Steels (up to HRC65)",
  ]

  // Flute configurations
  const fluteConfigurations = [
    {
      title: "2-Flute Designs",
      description:
        "Large flute valleys for excellent chip evacuation. Ideal for slotting operations and non-ferrous materials like aluminum and copper.",
      color: "border-red-600",
    },
    {
      title: "3-Flute End Mills",
      description:
        "Good compromise between chip evacuation and strength. General-purpose tools for various materials including steels and cast iron.",
      color: "border-blue-600",
    },
    {
      title: "4-Flute Designs",
      description:
        "Increased strength and rigidity with higher feed rates. Excellent for profile milling and finishing operations in ferrous materials.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Flat End Mill (Square End)" },
    { label: "Material", value: "Tungsten Steel/Solid Carbide" },
    { label: "Coating Options", value: "TiAlN, AlTiN, TiCN, Nano-composite" },
    { label: "Helix Angle", value: "30°, 35°, 40°, 45°, Variable" },
    { label: "Hardness Range", value: "HRC45 to HRC65" },
    { label: "Shank Type", value: "Straight Shank with Weldon Flat" },
    { label: "Diameter Range", value: "1mm to 25mm+" },
    { label: "Customization", value: "OEM Support Available" },
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
              alt="Right Angle Flat End Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Tungsten Steel End Milling Cutters
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Right Angle Flat End Mills</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  High-performance tungsten steel flat end mills with advanced coatings, engineered for precision
                  milling operations across diverse industries. Featuring exceptional hardness (HRC45-65), superior wear
                  resistance, and optimized geometries for creating perfect 90° corners and flat bottom profiles.
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
                    alt="Collection of Right Angle Flat End Mills and Milling Tools"
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
                    Right Angle Flat End Mills, predominantly manufactured from high-quality tungsten steel or solid
                    carbide, are celebrated for their outstanding performance across a multitude of milling
                    applications. The core material, tungsten carbide, forms a robust and highly wear-resistant
                    foundation that contributes significantly to the tool's extended operational life and capability to
                    retain a sharp, effective cutting edge even under demanding machining conditions and high
                    temperatures.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Advanced coatings such as TiAlN (Titanium Aluminum Nitride), AlTiN (Aluminum Titanium Nitride), or
                    specialized nano-coatings substantially increase surface hardness, reduce friction coefficient,
                    enhance wear resistance, and enable higher cutting speeds and feed rates for increased productivity
                    and reduced cycle times.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The design incorporates exceptionally sharp cutting edges with optimized helix angles to promote
                    efficient chip evacuation and prevent built-up edge (BUE) formation, ensuring consistent cutting
                    efficiency and high-quality surface finishes.
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
                        <strong>Hardness Range:</strong> HRC45 to HRC65
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material:</strong> Tungsten Steel/Solid Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, Nano-composite
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Helix Angle:</strong> 30°-45° (optimized)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Flute Options:</strong> 2, 3, 4flutes
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
                      {product.diameter && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Diameter:</span> {product.diameter}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Flutes:</span> {product.flutes}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Material:</span> {product.material}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Coating:</span> {product.coating}
                      </div>
                      {product.hardness && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Hardness:</span> {product.hardness}
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
                  title: "Precision Material Removal",
                  description:
                    "Efficiently and accurately remove material according to programmed instructions, shaping workpieces to desired geometry with high fidelity.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Flat Surface Generation",
                  description:
                    "Create accurately flat surfaces perpendicular to the machine tool's spindle axis, fundamental for creating datums and functional surfaces.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Right Angle Feature Creation",
                  description:
                    "Produce sharp, well-defined 90-degree corners, shoulders, steps, and orthogonal faces in milled components with precision.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatility in Operations",
                  description:
                    "Perform comprehensive milling tasks including slotting, peripheral milling, face milling, and complex contouring operations.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision & Tolerance Control",
                  description:
                    "Enable consistent production with high dimensional accuracy, tight geometric tolerances, and excellent surface quality.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Productivity",
                  description:
                    "Contribute to machining efficiency through optimal cutting parameters, durability, and long tool life for reduced downtime.",
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
                  title: "End Mills",
                  image: "/images/product-1.jpg",
                  description: "General purpose end mills for a wide range of milling applications.",
                  url: "/standard-tools/milling/end-mills",
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
                  title: "Ball Nose End Mills",
                  image: "/images/product-3.jpg",
                  description: "Specialized tools for 3D contour machining and curved surfaces.",
                  url: "/standard-tools/milling/ball-nose",
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
                Our technical team can help you select the optimal right angle flat end mill configuration for your
                specific machining requirements, material, and application.
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
