import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function TaperEndMillsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "taper-009",
      name: "2 Edge Tungsten Steel Coated Tapers End Milling Cutter",
      image: "/images/ZDXD2F45C.png",
      application: "Milling Steel With Hardness Below HRC45°",
      flutes: 2,
      hardness: "HRC45",
      D: "1-10mm",
      a: "0.5°-10°",
      D1: "1.07-22.34mm",
      H: "4-35mm",
      L: "50-100mm",
      d: "4-20mm",
      series: "ZDXD2F45C",
      coated: "Coated",
      page: "F27",
      url: "/standard-tools/milling/taper/ZDXD2F45C",
    },
    {
      id: "taper-010",
      name: "4 Edge Tungsten Steel Coated Tapers End Milling Cutter",
      image: "/images/ZDXD4F55C.png",
      application: "Milling Steel With Hardness Below HRC55°",
      flutes: 4,
      hardness: "HRC55",
      D: "3-10mm",
      a: "0.5°-10°",
      D1: "3.17-22.34mm",
      H: "10-35mm",
      L: "50-100mm",
      d: "4-20mm",
      series: "ZDXD4F55C",
      coated: "Coated",
      page: "F27",
      url: "/standard-tools/milling/taper/ZDXD4F55C",
    },
    {
      id: "taper-011",
      name: "2 Edge Tungsten Steel Coated BallHead Tapers End Milling Cutter",
      image: "/images/ZDXD2F45CR.png",
      application: "Milling Steel With Hardness Below HRC45°",
      flutes: 2,
      hardness: "HRC45",
      D: "0.5-1.5mm",
      a: "0.5°-10°",
      D1: "1.17-24.26mm",
      H: "10-45mm",
      L: "50-100mm",
      d: "4-25mm",
      series: "ZDXD2F45CR",
      coated: "Coated",
      page: "F28",
      url: "/standard-tools/milling/taper/ZDXD2F45CR",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Premium Tungsten Carbide",
      description:
        "Sub-micron grain tungsten carbide construction provides exceptional hardness, rigidity, and wear resistance for extended tool life.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Ball Head Design",
      description:
        "Spherical nose geometry enables smooth 3D contouring, complex surface finishing, and eliminates sharp tool marks.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Tapered Strength",
      description:
        "Tapered body design provides enhanced strength, stability, and clearance for angled wall machining and deep cavity work.",
    },
  ]

  // Industries served
  const industries = [
    "Mold and Die Making",
    "Aerospace Industry",
    "Automotive Industry",
    "Medical Device Manufacturing",
    "3D Carving and Engraving",
    "General Engineering",
    "Prototyping and R&D",
    "Precision Machining",
  ]

  // Machining operations
  const machiningOperations = [
    "3D Contouring and Profiling",
    "Tapered Slotting",
    "Angled Wall Machining",
    "Surface Finishing",
    "Contour Milling",
    "Chamfering and Deburring",
    "Engraving Operations",
    "Complex Geometry Creation",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon Steels",
    "Alloy Steels",
    "Tool Steels",
    "Stainless Steels",
    "Aluminum Alloys",
    "Titanium Alloys",
    "Nickel-based Superalloys",
    "Engineering Plastics",
  ]

  // Taper angle configurations
  const taperConfigurations = [
    {
      title: "1° Taper Angle",
      description:
        "Minimal taper for precision finishing and fine detail work. Ideal for shallow draft angles and high-accuracy applications.",
      color: "border-red-600",
    },
    {
      title: "2° Taper Angle",
      description:
        "Versatile angle for general mold making and moderate draft requirements. Good balance of strength and clearance.",
      color: "border-blue-600",
    },
    {
      title: "5° Taper Angle",
      description:
        "High taper for deep cavities and significant draft angles. Maximum clearance for complex geometry machining.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Ball Head Taper End Mill" },
    { label: "Material", value: "Solid Tungsten Carbide" },
    { label: "Head Type", value: "Ball Nose (Spherical End)" },
    { label: "Body Design", value: "Tapered" },
    { label: "Flute Options", value: "2-Flute, 4-Flute" },
    { label: "Taper Angles", value: "1°, 2°, 3°, 5°, 10°" },
    { label: "Coating Options", value: "Uncoated, TiAlN, AlTiN" },
    { label: "Helix Angle", value: "30°, 35°, 45°" },
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
              alt="Tungsten Steel Ball Head Taper End Mills Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Tungsten Steel Ball Head Taper End Mills
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ball Head Taper End Mills</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  High-performance tungsten steel ball head taper end mills meticulously engineered for precision
                  machining applications. Combining tapered body design with spherical nose geometry for exceptional
                  versatility in creating complex three-dimensional contours, angled surfaces, and superior finishes
                  across demanding industrial applications.
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
                    src="/images/ZDXD4F55C.png"
                    alt="ZDXD4F55C 4-Flute Tungsten Steel Coated Taper End Mill with Dimensional Callouts"
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
                    The performance of the Tungsten Steel Ball Head Taper End Mill is characterized by several key
                    attributes. Firstly, the use of high-quality, often sub-micron (e.g., 0.2μ or 0.4μ) grain tungsten
                    carbide provides outstanding hardness, rigidity, and wear resistance. This ensures a prolonged tool
                    life even under demanding cutting conditions and when machining tough materials, significantly
                    reducing tool changeover frequency and operational costs.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The tapered design of the mill contributes to its enhanced strength and stability, particularly when
                    performing deep-cavity milling or machining features at an angle. This taper also facilitates chip
                    evacuation and reduces the likelihood of tool deflection, thereby improving machining accuracy and
                    surface integrity. The ball nose geometry is crucial for producing smooth, blended surfaces and
                    complex 3D contours without leaving sharp steps, making it ideal for finishing operations and mold
                    making.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    These end mills exhibit excellent cutting mechanics, allowing for optimal cycle parameters. The
                    geometry is often designed to reduce cutting forces, minimize vibration, and manage heat effectively
                    during high-speed machining. Efficient heat dissipation is critical in preventing thermal expansion
                    of both the tool and the workpiece, which helps maintain dimensional accuracy and the integrity of
                    the machined part.
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
                        <strong>Material:</strong> Sub-micron Tungsten Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Head Type:</strong> Ball Nose (Spherical End)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Body Design:</strong> Tapered for Strength
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, TiSiN
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Flute Options:</strong> 2, 4 flutes
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
                        <span className="font-medium mr-1">Flute:</span> {product.flutes}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Hardness:</span> {product.hardness}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">D:</span> {product.D}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">a:</span> {product.a}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">D1:</span> {product.D1}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">H:</span> {product.H}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">L:</span> {product.L}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">d:</span> {product.d}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Coated:</span> {product.coated}
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

          {/* Product Comparison Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Comparison</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* ZDXD2F45C */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-20 h-20 mr-4">
                      <Image src="/images/ZDXD2F45C.png" alt="ZDXD2F45C" fill className="object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">ZDXD2F45C</h3>
                      <p className="text-sm text-gray-600">2-Flute Coated Taper End Mill</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Hardness Capability:</span>
                      <span className="text-blue-600 font-bold">HRC45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Flutes:</span>
                      <span>2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Cutting Diameter:</span>
                      <span>1-10mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Best For:</span>
                      <span className="text-sm">Softer steels, better chip evacuation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ZDXD4F55C */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-20 h-20 mr-4">
                      <Image src="/images/ZDXD4F55C.png" alt="ZDXD4F55C" fill className="object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">ZDXD4F55C</h3>
                      <p className="text-sm text-gray-600">4-Flute Coated Taper End Mill</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Hardness Capability:</span>
                      <span className="text-red-600 font-bold">HRC55</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Flutes:</span>
                      <span>4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Cutting Diameter:</span>
                      <span>3-10mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Best For:</span>
                      <span className="text-sm">Harder steels, superior finish</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dimensional Reference Guide */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Dimensional Reference Guide</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">Understanding Taper End Mill Dimensions</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-bold text-base mb-2">Parameter Definitions</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="font-medium text-red-600 w-8">D:</span>
                          <span>Cutting diameter at the tip</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-red-600 w-8">d:</span>
                          <span>Shank diameter (4-20mm)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-red-600 w-8">H:</span>
                          <span>Cutting length</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-red-600 w-8">L:</span>
                          <span>Overall length (50-100mm)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-red-600 w-8">D1:</span>
                          <span>Maximum diameter at taper transition</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-red-600 w-8">a:</span>
                          <span>Taper angle (0.5°-10°)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md h-64">
                    <Image
                      src="/images/ZDXD4F55C.png"
                      alt="ZDXD4F55C Dimensional Reference"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Parameters - Redesigned for horizontal alignment */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Taper Configurations */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Taper Angle Configurations</h3>
                <div className="p-4 space-y-4">
                  {taperConfigurations.map((config, index) => (
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
                  title: "Complex Geometry Generation",
                  description:
                    "Enables creation of intricate 3D shapes, tapered walls, and smoothly blended surfaces that are difficult or impossible to achieve with standard flat end mills.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Quality Surface Finish",
                  description:
                    "Ball nose design minimizes tool marks and produces smooth surfaces, often reducing the need for secondary finishing processes.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Machining Efficiency",
                  description:
                    "Tapered profile provides inherent strength and clearance for milling angled surfaces and draft angles, improving stability and material removal rates.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Material Application",
                  description:
                    "Excels in metals (steels, aluminum, stainless steel, titanium alloys) and with appropriate grades can machine non-ferrous materials, plastics, and composites.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision and Accuracy",
                  description:
                    "Engineered for tight tolerances, crucial in industries like aerospace, medical, and mold making where dimensional accuracy is paramount.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Extended Tool Life",
                  description:
                    "High-quality tungsten carbide combined with optimized geometry and optional coatings ensures durability and longevity for cost-effective machining.",
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
                  title: "Right Angle Flat End Mills",
                  image: "/images/product-1.jpg",
                  description: "Precision flat end mills for creating perfect 90° corners and flat surfaces.",
                  url: "/standard-tools/milling/right-angle-flat",
                },
                {
                  title: "Chamfer End Mills",
                  image: "/images/product-4.jpg",
                  description: "Specialized tools for creating precise chamfers and beveled edges.",
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
                Our technical team can help you select the optimal ball head taper end mill configuration for your
                specific 3D machining requirements, material, and application demands.
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
