import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function SideMillingCutterPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "smc-001",
      name: "Welding edge type ultrafine tungsten steel side milling cutter",
      image: "/images/SWS.png",
      description:
        "Ultra-fine tungsten steel side milling cutter with welding edge technology for large-scale side milling operations",
      application: "D:75-200mm, H:3-7mm, T:14-24",
      series: "SWS",
      page: "F39",
      url: "/standard-tools/milling/side-milling-cutter/sws-series",
      // Additional specifications for the new format
      diameter: "75-200mm",
      width: "3-7mm",
      teeth: "14-24",
    },
    {
      id: "smc-002",
      name: "Welding edge type ultrafine tungsten steel side milling cutter",
      image: "/images/SWSS.png",
      description:
        "Ultra-fine tungsten steel side milling cutter with welding edge technology for enhanced side milling operations",
      application: "D:75-200mm, H:8-12mm, T:14-24",
      series: "SWSS",
      page: "F40",
      url: "/standard-tools/milling/side-milling-cutter/swss-series",
      // Additional specifications for the new format
      diameter: "75-200mm",
      width: "8-12mm",
      teeth: "14-24",
    },
    {
      id: "smc-003",
      name: "Saw Blade Toolholder",
      image: "/images/WGJP.png", // Updated to use the actual WGJP image
      description: "Precision toolholder designed for tungsten steel saw blades with adjustable mounting options",
      application: "tungsten steel saw blade",
      series: "WGJP",
      page: "F41",
      url: "/standard-tools/milling/side-milling-cutter/wgjp-series",
      // Additional specifications for the new format
      diameter: "20-200mm",
      width: "02-5mm",
      innerDiameter: "6-32mm",
      teeth: "20-50",
    },
    {
      id: "smc-004",
      name: "Saw Blade Toolholder",
      image: "/images/JPDG.png",
      description: "Compact saw blade toolholder for precision cutting applications with multiple diameter options",
      application: "",
      series: "JPDG",
      page: "F42",
      url: "/standard-tools/milling/side-milling-cutter/jpdg-series",
      // Additional specifications for the new format
      d1: "4-10mm",
      d: "8-12mm",
      diameter: "8-15mm",
      width: "3.7-4.3mm",
      length: "50-92mm",
    },
    {
      id: "smc-005",
      name: "Single-Edge Acrylic ,Aluminium Milling Cutter",
      image: "/images/YKL-1F55C.png",
      description:
        "Specialized single-edge milling cutter designed for acrylic and aluminum machining with precision cutting performance",
      application: "",
      series: "YKL-1F55C",
      page: "F43",
      url: "/standard-tools/milling/side-milling-cutter/ykl-1f55c-series",
      // Additional specifications for the new format
      d1: "2-12mm",
      l1: "6-32mm",
      diameter: "3.175-12mm",
      length: "50-70mm",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Dual Cutting Action",
      description:
        "Cutting teeth on both periphery and sides enable versatile machining operations including slotting, grooving, and facing in a single setup.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Superior Chip Evacuation",
      description:
        "Staggered tooth designs provide excellent chip clearance and reduced chatter, enabling deeper cuts and higher feed rates for improved productivity.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Parallel Surface Machining",
      description:
        "Gang milling capability allows simultaneous machining of multiple parallel surfaces, significantly reducing cycle times and improving efficiency.",
    },
  ]

  // Industries served
  const industries = [
    "General Machining and Job Shops",
    "Automotive Industry",
    "Aerospace Industry",
    "Heavy Machinery Manufacturing",
    "Tool and Die Making",
    "Power Generation",
    "Railway Industry",
    "Shipbuilding",
  ]

  // Machining operations
  const machiningOperations = [
    "Slotting and Grooving",
    "Facing Operations",
    "Straddle Milling",
    "Gang Milling",
    "Cutting Off/Parting",
    "Step Milling",
    "Shoulder Machining",
    "Profile Milling",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon Steels (Low, Medium, High Carbon)",
    "Alloy Steels",
    "Tool Steels",
    "Stainless Steels",
    "Cast Iron (Grey, Ductile)",
    "Non-ferrous Metals (Aluminum, Copper)",
    "Hardened Steels (with Carbide)",
    "Exotic Alloys (Aerospace Materials)",
  ]

  // Cutter configurations
  const cutterConfigurations = [
    {
      title: "Straight Tooth Design",
      description:
        "Teeth parallel to rotation axis. Ideal for general-purpose slotting and shallower cuts with excellent bottom surface finish.",
      color: "border-red-600",
    },
    {
      title: "Staggered Tooth Design",
      description:
        "Alternating helix angles provide shearing action, better chip evacuation, and reduced chatter for deep slotting operations.",
      color: "border-blue-600",
    },
    {
      title: "Indexable Insert Design",
      description:
        "Replaceable carbide inserts offer economic benefits, application-specific grades, and superior performance at high cutting speeds.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Side Milling Cutter (Disc Type)" },
    { label: "Material Options", value: "HSS, Carbide Tipped, Indexable Carbide" },
    { label: "Coating Options", value: "TiN, TiAlN, AlTiN, TiCN" },
    { label: "Tooth Design", value: "Straight Tooth, Staggered Tooth" },
    { label: "Diameter Range", value: "50mm to 300mm+" },
    { label: "Width Range", value: "4mm to 50mm+" },
    { label: "Bore Sizes", value: "16mm to 50mm (Standard)" },
    { label: "Standards", value: "ISO, DIN, ANSI Compliant" },
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
              alt="Side Milling Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Staggered Tooth / Straight Tooth
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Side Milling Cutters</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  Disc-type milling cutters with cutting teeth on periphery and sides, designed for slotting, grooving,
                  facing, and straddle milling operations. Available in straight tooth and staggered tooth
                  configurations with HSS, carbide tipped, and indexable carbide insert options for maximum versatility
                  and productivity.
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
                    src="/placeholder.svg?height=300&width=500"
                    alt="Collection of Side Milling Cutters"
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
                    Side Milling Cutters, often referred to as Side and Face Cutters or Straddle Mills, are disc-type
                    milling cutters with cutting teeth on their periphery and on one or both sides. The defining
                    characteristic is their ability to cut on their sides as well as their periphery, allowing them to
                    machine slots, grooves, faces, and steps efficiently.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    When used in multiples, they can machine parallel surfaces simultaneously, making them highly
                    efficient for production environments. They are typically mounted on a milling machine arbor and are
                    available in various designs, including straight tooth versions for general-purpose slotting and
                    staggered tooth versions for deeper slots and heavier cuts.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Modern designs incorporate indexable carbide inserts for enhanced productivity and wear resistance,
                    while traditional HSS versions remain popular for their versatility and ability to be resharpened.
                    Advanced coatings such as TiAlN and AlTiN significantly improve performance and tool life.
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
                        <strong>Material Options:</strong> HSS, Carbide Tipped, Indexable
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Tooth Design:</strong> Straight Tooth, Staggered Tooth
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiN, TiAlN, AlTiN, TiCN
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Diameter Range:</strong> 50mm to 300mm+
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Slotting, Facing, Gang Milling
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
                      {/* Conditional rendering based on product specifications */}
                      {product.d1 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">D1:</span> {product.d1}
                        </div>
                      )}
                      {product.d && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">d:</span> {product.d}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium mr-1">D:</span> {product.diameter}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">H:</span> {product.width}
                      </div>
                      {product.length && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">L:</span> {product.length}
                        </div>
                      )}
                      {product.l1 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">L1:</span> {product.l1}
                        </div>
                      )}
                      {product.innerDiameter && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">D1:</span> {product.innerDiameter}
                        </div>
                      )}
                      {product.teeth && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">T:</span> {product.teeth}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Series:</span> {product.series}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Page:</span> {product.page}
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
              {/* Cutter Configurations */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Cutter Configurations</h3>
                <div className="p-4 space-y-4">
                  {cutterConfigurations.map((config, index) => (
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
                  title: "Slotting and Grooving",
                  description:
                    "Primary function for machining slots and grooves of specific widths and depths. Staggered tooth cutters excel in deeper slots with better chip clearance.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Facing Operations",
                  description:
                    "Machine flat surfaces on workpieces, particularly when wide surfaces need coverage or when access for face mills is limited.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Straddle Milling",
                  description:
                    "Simultaneous machining of two or more parallel vertical surfaces using multiple cutters with spacers for high efficiency.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Gang Milling",
                  description:
                    "Multiple cutters of different sizes mounted on same arbor to machine complex profiles or multiple features in single pass.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Step Milling",
                  description:
                    "Create steps or shoulders on workpieces by utilizing both peripheral and side cutting edges for well-defined features.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Cutting Off Operations",
                  description:
                    "Heavy-duty side milling cutters can be used for parting or cutting off material with excellent control and precision.",
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
                  title: "Face Mills",
                  image: "/images/product-1.jpg",
                  description: "Large diameter face milling cutters for efficient surface machining.",
                  url: "/standard-tools/milling/face-mills",
                },
                {
                  title: "End Mills",
                  image: "/images/product-2.jpg",
                  description: "Versatile end mills for general purpose milling applications.",
                  url: "/standard-tools/milling/end-mills",
                },
                {
                  title: "T-Slot Cutters",
                  image: "/images/product-4.jpg",
                  description: "Specialized cutters for machining T-slots and keyways.",
                  url: "/standard-tools/milling/t-slot-cutter",
                },
                {
                  title: "Thread Mills",
                  image: "/images/product-3.jpg",
                  description: "Precision thread milling cutters for internal and external threads.",
                  url: "/standard-tools/milling/thread-mills",
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
                Our technical team can help you select the optimal side milling cutter configuration for your specific
                slotting, grooving, and gang milling requirements.
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
