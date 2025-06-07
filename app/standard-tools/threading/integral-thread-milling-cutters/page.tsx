import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function IntegralThreadMillingCuttersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "itmc-007",
      name: "Metric Single Tooth Thread Milling Cutter",
      image: "/images/1T-.png",
      description: "Versatile single tooth design for metric threads with wide pitch range",
      p: "0.2-3.5mm",
      d1: "0.55-16mm",
      d2: "0.29-11.45mm",
      L1: "1.5-50mm",
      D: "4-16mm",
      L: "50-90mm",
      bladeCount: "2,3,4,5",
      series: "1T-",
      page: "L05",
      application: "",
      url: "/standard-tools/threading/integral-thread-milling-cutters/1T-metric",
    },
    {
      id: "itmc-008",
      name: "Metric Three Tooth Thread Milling Cutter",
      image: "/images/3T-.png",
      description: "High-performance three tooth design for enhanced stability and productivity",
      p: "0.2-3.5mm",
      d1: "0.7-16mm",
      d2: "0.375-12.1mm",
      L1: "2.8-45mm",
      D: "4-16mm",
      L: "50-90mm",
      bladeCount: "3,4",
      series: "3T-",
      page: "L05",
      application: "",
      url: "/standard-tools/threading/integral-thread-milling-cutters/3T-metric",
    },
    {
      id: "itmc-009",
      name: "Metric Full Thread Milling Cutter",
      image: "/images/FT-.png",
      description: "Full profile thread milling cutter for complete thread machining in single operation",
      p: "0.5-3mm",
      d1: "2.3-16mm",
      d2: "",
      L1: "6-42mm",
      D: "4-16mm",
      L: "50-100mm",
      bladeCount: "3,4",
      series: "FT-",
      page: "L06",
      application: "",
      url: "/standard-tools/threading/integral-thread-milling-cutters/FT-metric",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Superior Material",
      description:
        "Ultra-fine grain tungsten carbide construction provides exceptional hardness, wear resistance, and heat resistance for demanding applications.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Advanced Coatings",
      description:
        "TiAlN, AlTiN, TiSiN, and DLC coatings enhance surface hardness, thermal stability, and reduce friction for extended tool life.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Precision Threading",
      description:
        "Capable of producing threads to tight tolerances with excellent surface finish and accurate pitch control in challenging materials.",
    },
  ]

  // Industries served
  const industries = [
    "Aerospace Industry",
    "Automotive Industry",
    "Medical Device Manufacturing",
    "Oil and Gas Industry",
    "Mold and Die Making",
    "General Machining",
    "High-Volume Production",
    "Precision Engineering",
  ]

  // Thread forms and applications
  const threadForms = [
    "Metric (M) Threads",
    "Unified (UN, UNC, UNF, UNEF)",
    "Pipe Threads (NPT, NPTF, G/BSPP)",
    "Trapezoidal (Tr) Threads",
    "Acme Threads",
    "Fine Pitch Threads",
    "Custom Thread Profiles",
    "Multi-Start Threads",
  ]

  // Material compatibility
  const machinableMaterials = [
    "Hardened Steels (HRC 50-65)",
    "Stainless Steels (All Grades)",
    "Titanium Alloys",
    "Inconel and Superalloys",
    "Aluminum Alloys (DLC Coated)",
    "Tool Steels",
    "High-Strength Alloys",
    "Medical Grade Materials",
  ]

  // Thread mill configurations
  const threadMillConfigurations = [
    {
      title: "Multi-Tooth Designs",
      description:
        "3-6+ flutes provide stability and productivity. Ideal for specific pitch applications with excellent surface finish and process security.",
      color: "border-red-600",
    },
    {
      title: "Single-Tooth Designs",
      description:
        "Versatile design handles multiple pitches and diameters. Often DLC coated for aluminum applications with superior flexibility.",
      color: "border-blue-600",
    },
    {
      title: "Full Profile Cutters",
      description:
        "Machine complete thread profile including crest in single operation. Ensures accurate thread depth and profile geometry.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Material", value: "Ultra-Fine Grain Tungsten Carbide" },
    { label: "Coating Options", value: "TiAlN, AlTiN, TiSiN, DLC" },
    { label: "Hardness Range", value: "Up to HRC65" },
    { label: "Thread Forms", value: "Metric, Unified, NPT, Trapezoidal, Acme" },
    { label: "Flute Options", value: "Single-tooth to 6+ flutes" },
    { label: "Coolant Delivery", value: "External/Internal coolant capable" },
    { label: "Shank Type", value: "Straight shank (h6 tolerance)" },
    { label: "Profile Types", value: "Full profile (topping) & Partial profile" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
            <Image
              src="/images/threading-tools.jpg"
              alt="Integral Thread Milling Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Solid Carbide Thread Mills
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Integral Thread Milling Cutters</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  High-performance solid carbide thread mills engineered for precision threading in the most challenging
                  materials. Featuring advanced coatings, multi-tooth and single-tooth designs, capable of machining
                  hardened steels up to HRC65 with superior thread quality and process security.
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
                    src="/images/thread-mills-hero.png"
                    alt="Collection of Integral Thread Milling Cutters"
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
          {/* Introduction Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Introduction</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    An Integral Tungsten Steel Thread Milling Cutter, more commonly referred to in English as a Solid
                    Carbide Thread Mill, is a high-performance precision cutting tool made entirely from a metallurgical
                    alloy of tungsten carbide. It is designed for creating internal or external threads efficiently and
                    precisely using a milling process on a CNC machine capable of helical interpolation.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Unlike traditional tapping or thread turning, thread milling offers several advantages, including
                    the ability to machine threads in difficult and hardened materials (e.g., up to 60-65 HRC), produce
                    various thread pitches and diameters with a single tool, achieve better thread quality and surface
                    finish, and offer greater process security.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    These tools typically feature multiple cutting teeth arranged in a helical or straight pattern
                    (multi-tooth designs), but single-tooth thread milling cutters also exist, which can be very
                    versatile for a range of pitches and are sometimes specifically DLC coated for materials like
                    aluminum.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    Key Advantages
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>Machine hardened materials up to HRC65</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>Superior thread quality and surface finish</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>Greater process security vs. tapping</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>Versatile pitch and diameter capability</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>Excellent chip control and evacuation</span>
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
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm mb-4">
                      <div className="flex items-center">
                        <span className="font-medium mr-1">p:</span> {product.p}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">d1:</span> {product.d1}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">d2:</span> {product.d2 || "N/A"}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">L1:</span> {product.L1}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">D:</span> {product.D}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">L:</span> {product.L}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Blade count:</span> {product.bladeCount}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Series:</span> {product.series}
                      </div>
                      <div className="flex items-center col-span-2 justify-center">
                        <span className="font-medium mr-1">Page:</span> {product.page}
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
              {/* Thread Mill Configurations */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Thread Mill Configurations</h3>
                <div className="p-4 space-y-4">
                  {threadMillConfigurations.map((config, index) => (
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

              {/* Thread Forms */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Thread Forms
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {threadForms.map((form, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{form}</span>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Internal Thread Milling",
                  description:
                    "Creating threads inside pre-drilled holes. Ideal for blind holes where chip evacuation is critical and through holes requiring precision.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "External Thread Milling",
                  description:
                    "Machining threads on outside diameter of cylindrical features such as bosses, studs, and external threaded components.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Various Thread Forms",
                  description:
                    "Capable of milling Metric, Unified, Pipe threads, Trapezoidal, Acme, and other standard and non-standard thread profiles.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Full & Partial Profile Threading",
                  description:
                    "Full profile cutters machine complete thread including crest. Partial profile cutters handle multiple pitches with programming flexibility.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Difficult Material Threading",
                  description:
                    "Excel in hardened steels, stainless steels, titanium alloys, Inconel, and superalloys where traditional tapping fails.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High Thread Quality",
                  description:
                    "Produces threads with excellent surface finish, accurate pitch, good form integrity, and precise depth control.",
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

          {/* Product Performance */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Tool Material and Coating */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                    <Shield className="h-6 w-6 text-red-600 mr-3" />
                    Tool Material and Coating (Inserts)
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">Carbide Inserts:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Excellent wear resistance, hardness at high temperatures, maintains sharp cutting edge. Specific
                        grades for workpiece material.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">Coatings (e.g., TiAlN, AlTiN, TiCN):</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Enhance hardness, reduce friction, improve heat resistance, extend tool life. Critical for tough
                        materials and high speeds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tool Body Material */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                    <Settings className="h-6 w-6 text-red-600 mr-3" />
                    Tool Body Material
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    High-quality tool steel, heat-treated for strength and rigidity to securely hold inserts and
                    withstand cutting forces.
                  </p>
                </div>

                {/* Cutting Geometry */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                    <Tool className="h-6 w-6 text-red-600 mr-3" />
                    Cutting Geometry (Inserts)
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">Insert Design:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Single-point (one tooth/edge) or multi-point/multi-tooth (several teeth/edge). Multi-tooth
                        reduces passes, shortening cycle times.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">Chip Breakers:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Optimized geometries control chip formation and evacuation.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">Rake and Relief Angles:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Precisely ground for efficient cutting and reduced forces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Machining Parameters */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                    <Zap className="h-6 w-6 text-red-600 mr-3" />
                    Machining Parameters
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">Cutting Speed (Vc):</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Depends on insert grade, coating, workpiece. Higher than HSS taps.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">Feed per Tooth (fz):</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Balances productivity with surface finish, tool life. CNC programming defines helical path feed.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-gray-900 mb-2">Depth of Cut:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">Usually one or multiple radial passes.</p>
                    </div>
                  </div>
                </div>

                {/* Thread Quality and Accuracy */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                    <Target className="h-6 w-6 text-red-600 mr-3" />
                    Thread Quality and Accuracy
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-gray-900">Surface Finish:</span>
                        <span className="text-gray-700 text-sm ml-2">Very smooth thread flanks.</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-gray-900">Dimensional Accuracy:</span>
                        <span className="text-gray-700 text-sm ml-2">
                          Tight tolerances on pitch, major, minor diameters.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-gray-900">No Taper:</span>
                        <span className="text-gray-700 text-sm ml-2">Inherently produces straight threads.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tool Life and Economy */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                    <Layers className="h-6 w-6 text-red-600 mr-3" />
                    Tool Life and Economy
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-gray-900">Insert Life:</span>
                        <span className="text-gray-700 text-sm ml-2">
                          Replaceable inserts are cost-effective. Multi-edge inserts enhance economy.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-gray-900">Process Security:</span>
                        <span className="text-gray-700 text-sm ml-2">
                          Lower cutting forces reduce tool breakage risk. Broken insert less damaging than broken tap.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Versatility */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                    <Info className="h-6 w-6 text-red-600 mr-3" />
                    Versatility
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    One tool body handles range of pitches/diameters by changing inserts. Cuts different thread forms
                    with same holder.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Considerations */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Operational Considerations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Machine Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                    <span className="text-sm">CNC machine with helical interpolation capability</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                    <span className="text-sm">High-precision, rigid tool holders essential</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                    <span className="text-sm">Accurate CNC programming for helical path</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                    <span className="text-sm">Flood coolant recommended; internal coolant advantageous</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Target className="h-5 w-5 text-red-600 mr-2" />
                  Critical Parameters
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                    <span className="text-sm">Cutter diameter: 50-70% of thread diameter (optimal)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                    <span className="text-sm">Never exceed 85% of pre-drilled hole diameter</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                    <span className="text-sm">Critical pre-drilled hole size for thread formation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                    <span className="text-sm">Climb milling preferred for surface finish</span>
                  </li>
                </ul>
              </div>
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
                  title: "Thread Mills",
                  image: "/images/threading-tools.jpg",
                  description: "Standard thread mills for various thread forms and applications.",
                  url: "/standard-tools/threading/thread-mills",
                },
                {
                  title: "Thread Milling Cutters",
                  image: "/images/threading-tools.jpg",
                  description: "Specialized cutters for thread milling operations.",
                  url: "/standard-tools/threading/thread-milling-cutters",
                },
                {
                  title: "Taps",
                  image: "/images/threading-tools.jpg",
                  description: "High-performance taps for internal threading applications.",
                  url: "/standard-tools/threading/taps",
                },
                {
                  title: "Thread Turning Tools",
                  image: "/images/threading-tools.jpg",
                  description: "Precision tools for external thread turning operations.",
                  url: "/standard-tools/threading/thread-turning",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Threading Tools" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Expert Threading Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal integral thread milling cutter configuration for your
                specific threading requirements, material hardness, and application demands.
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
