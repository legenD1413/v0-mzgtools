import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Download,
  ChevronRight,
  Info,
  PenToolIcon as Tool,
  Layers,
  Zap,
  Shield,
  Target,
  Microscope,
  Cpu,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function SmallDiameterMillingPage() {
  // Sample product data - representative small diameter end mills
  const products = [
    {
      id: "sd-005",
      name: "2 Edge Tungsten Steel Uncoated Small Diameter End Milling Cutter",
      image: "/images/AL-2F60C.png",
      description: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-2F60C",
      d: "0.3-13mm",
      H: "0.6-26mm",
      L1: "2-35mm",
      L: "50-100mm",
      D: "3-14mm",
      hardness: "HRC60",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/small-diameter/AL-2F60C",
    },
    {
      id: "sd-006",
      name: "2 Edge Tungsten Steel Coated Small Diameter End Milling Cutter",
      image: "/images/2F60CS.png",
      description: "Milling HRC60° steel, cast iron and stainless steel",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F60CS",
      d: "0.3-13mm",
      H: "0.6-26mm",
      L1: "2-35mm",
      L: "50-100mm",
      D: "3-14mm",
      hardness: "HRC60",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      url: "/standard-tools/milling/small-diameter/2F60CS",
    },
    {
      id: "sd-007",
      name: "2 Edge Tungsten Steel Uncoated Small Diameter Ball Head End Milling Cutter",
      image: "/images/AL-2F60C-R.png",
      description: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-2F60C-R",
      d: "0.15-6.5mm",
      H: "0.6-26mm",
      L: "50-100mm",
      D: "3-14mm",
      hardness: "HRC60",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/small-diameter/AL-2F60C-R",
    },
    {
      id: "sd-008",
      name: "2 Edge Tungsten Steel Coated Small Diameter Ball Head End Milling Cutter",
      image: "/images/2F60C-R.png",
      description: "Milling Stainless Steel And Steel Hardness Under HRC60°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F60C-R",
      d: "0.15-6.5mm",
      H: "0.6-26mm",
      L: "50-100mm",
      D: "3-14mm",
      hardness: "HRC60",
      application: "Milling Stainless Steel And Steel Hardness Under HRC60°",
      url: "/standard-tools/milling/small-diameter/2F60C-R",
    },
    {
      id: "sd-009",
      name: "4 Edge Tungsten Steel Uncoated End Milling Cutter",
      image: "/images/AL-4F55CS.png",
      description: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-4F55CS",
      d: "1.1-13mm",
      H: "2.2-26mm",
      L: "50-100mm",
      D: "4-14mm",
      hardness: "HRC60",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/small-diameter/AL-4F55CS",
    },
    {
      id: "sd-010",
      name: "4 Edge Tungsten Steel Coated End Milling Cutter",
      image: "/images/4F55CS.png",
      description: "Milling HRC60° steel, cast iron and stainless steel",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F55CS",
      d: "1.1-13mm",
      H: "2.2-26mm",
      L: "50-100mm",
      D: "4-14mm",
      hardness: "HRC60",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      url: "/standard-tools/milling/small-diameter/4F55CS",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Microscope className="h-8 w-8 text-red-600" />,
      title: "Ultra-Precision Engineering",
      description:
        "Micro-grain tungsten carbide construction with tolerances in the micron range for exceptional accuracy in miniature feature creation.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Advanced PVD Coatings",
      description:
        "TiAlN, AlTiN, TiSiN, and DLC coatings provide superior wear resistance, reduced friction, and thermal protection for micro-machining.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "High-Speed Capability",
      description:
        "Optimized for high RPM operations with exceptional balance and minimal runout for vibration-free micro-machining.",
    },
  ]

  // Industries served
  const industries = [
    "Electronics Industry",
    "Medical Device Manufacturing",
    "Watchmaking and Jewelry",
    "Optics and Photonics",
    "Micro-Mold and Die Making",
    "Aerospace (Miniature Components)",
    "Research and Development (MEMS/NEMS)",
    "Automotive (Miniature Parts)",
    "Prototyping",
  ]

  // Machining operations
  const machiningOperations = [
    "Micro-Milling / Fine Detail Milling",
    "Engraving",
    "Small Slotting and Keyway Cutting",
    "Precision Pocketing",
    "Thin Wall Machining",
    "High Aspect Ratio Feature Milling",
    "Edge Deburring and Fine Chamfering",
    "Micro-Contouring",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Plastics and Polymers (PEEK, PMMA, Acetal)",
    "Non-ferrous Metals (Aluminum, Brass, Copper)",
    "Carbon Steels and Alloy Steels",
    "Stainless Steels (Various Grades)",
    "Tool Steels",
    "Titanium and Alloys",
    "Graphite",
    "Composite Materials (CFRP, GFRP)",
    "Precious Metals (Gold, Silver, Platinum)",
  ]

  // Technical specifications
  const technicalSpecs = [
    { label: "Type", value: "Small Diameter Flat End Mill (Micro End Mill)" },
    { label: "Material", value: "Micro-grain/Ultra-fine Grain Tungsten Carbide" },
    { label: "Coating Options", value: "TiAlN, AlTiN, TiSiN, DLC, Nano-composite" },
    { label: "Diameter Range", value: "0.1mm to 3.0mm" },
    { label: "Flute Options", value: "2, 3, 4 flutes" },
    { label: "Helix Angle", value: "30° to 45°" },
    { label: "Shank Diameter", value: '3mm, 4mm, 1/8" (standardized)' },
    { label: "Tolerances", value: "Micron-level precision" },
  ]

  // Coating technologies
  const coatingTechnologies = [
    {
      title: "TiAlN (Titanium Aluminum Nitride)",
      description:
        "Excellent for general micro-machining with high hardness and thermal stability. Ideal for steels and stainless steels.",
      color: "border-red-600",
    },
    {
      title: "AlTiN (Aluminum Titanium Nitride)",
      description:
        "Superior heat resistance for high-speed applications. Excellent for hardened materials and high-temperature alloys.",
      color: "border-blue-600",
    },
    {
      title: "DLC (Diamond-Like Carbon)",
      description:
        "Ultra-low friction coating perfect for non-ferrous materials like aluminum, graphite, and composites. Prevents material adhesion.",
      color: "border-green-600",
    },
    {
      title: "TiSiN (Titanium Silicon Nitride)",
      description:
        "Advanced nano-composite coating with exceptional wear resistance and thermal stability for demanding micro-machining.",
      color: "border-purple-600",
    },
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
              alt="Small Diameter Milling Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Micro-Precision Cutting Tools
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Small Diameter Milling Cutters</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  Ultra-precision tungsten steel small diameter flat end milling cutters engineered for micro-machining
                  applications. Featuring micro-grain carbide construction, advanced PVD coatings, and exceptional
                  dimensional accuracy for creating intricate details and miniature features in electronics, medical
                  devices, and precision manufacturing.
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
                    src="/images/2F60CS.png"
                    alt="Small Diameter End Mill Technical Diagram"
                    width={400}
                    height={200}
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
                    Tungsten Steel Small Diameter Flat End Milling Cutters are precision-engineered cutting tools,
                    indispensable for machining intricate details, micro-features, and small-scale components with
                    utmost accuracy. Manufactured from high-quality micro-grain or ultra-fine grain solid tungsten
                    carbide, these end mills exhibit exceptional hardness and superior wear resistance.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The performance of these small diameter cutters is defined by their capacity to achieve
                    exceptionally high precision, create features with high aspect ratios, and produce excellent surface
                    finishes on micro-parts. Due to their small physical size, achieving optimal cutting speeds
                    necessitates operation at very high rotational speeds (RPMs), often in High-Speed Cutting (HSC)
                    applications.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Advanced PVD coatings such as TiAlN, AlTiN, TiSiN, or specialized nano-composite coatings
                    substantially increase surface hardness, reduce friction coefficient, provide thermal barriers, and
                    improve chip flow - critical factors for successful micro-machining operations.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Microscope className="h-5 w-5 text-red-600 mr-2" />
                    Micro-Machining Specifications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Diameter Range:</strong> 0.1mm to 3.0mm
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
                        <strong>Tolerances:</strong> Micron-level precision
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, TiSiN, DLC
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> MEMS, Electronics, Medical
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
                        <span className="font-medium mr-1">Material:</span> {product.material}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Coating:</span> {product.coating}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Hardness:</span> {product.hardness}
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

          {/* Technical Parameters */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Coating Technologies */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Coating Technologies</h3>
                <div className="p-4 space-y-4">
                  {coatingTechnologies.map((coating, index) => (
                    <div key={index} className={`border-l-4 ${coating.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{coating.title}</h4>
                      <p className="text-gray-600 text-sm">{coating.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Technical Specifications</h3>
                <div className="divide-y divide-gray-100">
                  {technicalSpecs.map((spec, index) => (
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
                  <Cpu className="h-5 w-5 text-red-600 mr-2" />
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
                  title: "Ultra-High-Precision Feature Creation",
                  description:
                    "Machine extremely small and intricate features with micron-level dimensional accuracy and tight geometric tolerances.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Superior Surface Finish Generation",
                  description:
                    "Produce excellent, smooth surface quality on miniature parts, often eliminating the need for subsequent finishing operations.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Micro-Scale Geometry Machining",
                  description:
                    "Enable fabrication of components with features in the sub-millimeter range, pushing manufacturing technology boundaries.",
                  icon: <Microscope className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Minimized Cutting Forces",
                  description:
                    "Allow precise machining of delicate, fragile, or thin-walled parts without causing distortion, stress, or damage.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Miniaturization Enablement",
                  description:
                    "Support the ongoing trend towards smaller, lighter, and more complex parts across advanced industries.",
                  icon: <Cpu className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Micro-Machining",
                  description:
                    "Perform comprehensive milling operations including slotting, pocketing, profiling, and contouring at micro-scale.",
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
                  title: "Deep Ditch End Mills",
                  image: "/images/product-1.jpg",
                  description: "Specialized end mills for deep groove and narrow slot machining.",
                  url: "/standard-tools/milling/deep-ditch",
                },
                {
                  title: "Right Angle Flat End Mills",
                  image: "/images/product-2.jpg",
                  description: "Standard flat end mills for general milling applications.",
                  url: "/standard-tools/milling/right-angle-flat",
                },
                {
                  title: "Ball Nose End Mills",
                  image: "/images/product-3.jpg",
                  description: "Specialized tools for 3D contour machining and curved surfaces.",
                  url: "/standard-tools/milling/ball-nose",
                },
                {
                  title: "Engraving Tools",
                  image: "/images/product-4.jpg",
                  description: "Precision tools for engraving, marking, and fine detail work.",
                  url: "/standard-tools/milling/engraving",
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
              <h2 className="text-3xl font-bold mb-4">Need Micro-Machining Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our micro-machining specialists can help you select the optimal small diameter end mill configuration
                for your precision manufacturing requirements, from MEMS to medical devices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                  Contact Micro-Machining Experts
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10 border-white hover:text-white transition-all duration-300"
                >
                  Request Custom Micro Tools
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
