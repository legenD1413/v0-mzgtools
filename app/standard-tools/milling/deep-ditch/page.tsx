import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function DeepDitchMillingCutterPage() {
  // Sample product data for deep ditch milling cutters
  const products = [
    {
      id: "dd-001",
      name: "2 Edge Tungsten Steel Uncoated Deep Ditch End Milling Cutter",
      image: "/images/AL-SG2F60C.png",
      description: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-SG2F60C",
      d: "0.5-4mm",
      H: "0.8-6mm",
      L1: "2-35mm",
      L: "50-75mm",
      D: "4-6mm",
      hardness: "HRC60",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/deep-ditch/AL-SG2F60C",
    },
    {
      id: "dd-002",
      name: "2 Edge Tungsten Steel Coated Deep Ditch End Milling Cutter",
      image: "/images/SG2F60C.png",
      description: "Milling HRC60° steel, cast iron and stainless steel",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "SG2F60C",
      d: "0.5-4mm",
      H: "0.8-6mm",
      L1: "2-35mm",
      L: "50-75mm",
      D: "4-6mm",
      hardness: "HRC60",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      url: "/standard-tools/milling/deep-ditch/SG2F60C",
    },
    {
      id: "dd-003",
      name: "2 Edge Tungsten Steel Uncoated Deep Ditch Ball Head End Milling Cutter",
      image: "/images/AL-SG2F60C-R.png",
      description: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-SG2F60C-R",
      d: "0.25-2mm",
      H: "0.8-6mm",
      L1: "2-35mm",
      L: "50-75mm",
      D: "4-6mm",
      hardness: "HRC60",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/deep-ditch/AL-SG2F60C-R",
    },
    {
      id: "dd-004",
      name: "2 Edge Tungsten Steel Coated Deep Ditch Ball Head End Milling Cutter",
      image: "/images/SG2F60C-R.png",
      description: "Milling HRC60° steel, cast iron and stainless steel",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "SG2F60C-R",
      d: "0.25-2mm",
      H: "0.8-6mm",
      L1: "2-35mm",
      L: "50-75mm",
      D: "4-6mm",
      hardness: "HRC60",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      url: "/standard-tools/milling/deep-ditch/SG2F60C-R",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Extended Reach Design",
      description:
        "Long neck geometry with reduced diameter allows access to deep features while maintaining cutting precision and minimizing deflection in confined spaces.",
    },
    {
      icon: "Zap",
      title: "Superior Chip Evacuation",
      description:
        "Optimized flute geometries and helix angles facilitate efficient chip removal from deep grooves, preventing chip packing and tool failure.",
    },
    {
      icon: "Target",
      title: "Tungsten Carbide Construction",
      description:
        "Solid tungsten carbide provides exceptional hardness, wear resistance, and thermal stability for demanding deep cutting applications.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Zap":
        return <Zap className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Industries served
  const industries = [
    "Mold and Die Making",
    "Aerospace Industry",
    "Automotive Industry",
    "Oil and Gas Industry",
    "Electronics Manufacturing",
    "Medical Device Manufacturing",
    "General Machining and Engineering",
    "Tool and Die Manufacturing",
  ]

  // Machining operations
  const machiningOperations = [
    "Deep Slotting",
    "Deep Pocketing",
    "Deep Wall Milling",
    "Shoulder Milling at Depth",
    "Deep Groove Machining",
    "Trochoidal Milling in Deep Cavities",
    "High-Speed Milling (HSM)",
    "Keyway Cutting",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon Steels",
    "Alloy Steels",
    "Tool Steels (P20, H13, etc.)",
    "Stainless Steels",
    "Cast Iron",
    "Titanium Alloys",
    "Heat-Resistant Superalloys (Inconel)",
    "Aluminum and Copper Alloys",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "2-3 Flute Designs",
      description:
        "Preferred for deep slotting in materials producing long chips (aluminum) with larger flute valleys for excellent chip evacuation.",
      color: "border-red-600",
    },
    {
      title: "4+ Flute Designs",
      description:
        "Offer increased stability, better surface finish, and higher feed rates in wider grooves or rigid setups, particularly in steels.",
      color: "border-blue-600",
    },
    {
      title: "Variable Helix",
      description:
        "Variable helix designs reduce vibration in deep cuts while promoting smoother cutting and better chip evacuation.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Deep Ditch/Deep Groove End Mill" },
    { label: "Material", value: "Solid Tungsten Carbide (WC-Co)" },
    { label: "Coating Options", value: "TiAlN, AlTiN, TiCN, Nano-composite" },
    { label: "Helix Angle", value: "30°-45°, Variable Available" },
    { label: "Flute Count", value: "2, 3, 4, or More Flutes" },
    { label: "Neck Design", value: "Reduced Diameter for Deep Access" },
    { label: "Cutting Diameter", value: "0.1mm to 30mm+" },
    { label: "Hardness", value: "HRC60 and above" },
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
              alt="Deep Ditch Milling Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Tungsten Steel Deep Ditch End Milling Cutters
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Deep Ditch Milling Cutters</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  Engineered for high performance in demanding deep grooving and slotting applications. Featuring solid
                  tungsten carbide construction, extended reach designs, and optimized chip evacuation for accessing
                  confined features and maintaining precision at extreme depths.
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
                    alt="Deep Ditch Milling Cutters Collection"
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
                    Tungsten Steel Deep Ditch End Milling Cutters are engineered for high performance in demanding deep
                    grooving and slotting applications. Their primary construction material, tungsten carbide (often
                    referred to as tungsten steel in this context), provides exceptional hardness, high wear resistance,
                    and good toughness. This allows the cutter to maintain a sharp cutting edge and resist abrasion even
                    when machining hard materials or during prolonged engagement in deep cuts. Compared to High-Speed
                    Steel (HSS) tools, tungsten carbide end mills offer significantly longer tool life and can operate
                    at higher cutting speeds, contributing to increased productivity.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    A key performance aspect for deep ditch milling is the tool's ability to manage chips and maintain
                    stability over an extended reach. These cutters often feature optimized flute geometries, including
                    specific helix angles and flute valley designs, to facilitate efficient chip evacuation from the
                    deep groove, preventing chip packing which can lead to tool breakage or poor surface finish. The
                    inherent rigidity of tungsten carbide, combined with design features like a strong core or
                    specialized neck geometries, helps to minimize deflection and vibration, which is critical when the
                    tool is extended deep into a workpiece.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Many deep ditch end mills are enhanced with advanced coatings (e.g., TiAlN, AlTiN, or other
                    proprietary coatings). These coatings further improve performance by increasing surface hardness,
                    reducing friction (which lowers heat generation), enhancing wear resistance, and providing a thermal
                    barrier. This is particularly beneficial in deep grooving where heat dissipation can be challenging.
                    Some cutters may also undergo treatments like deep cryogenic treatment to further enhance their
                    machinability performance on specific materials like P20 mold steel. The overall design focuses on
                    ensuring rapid, precise processing with neat results even in challenging deep-cut scenarios.
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
                        <strong>Material:</strong> Solid Tungsten Carbide (WC-Co)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, TiCN, Nano-composite
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Helix Angle:</strong> 30°-45° (Variable Available)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Design:</strong> Extended Reach with Reduced Neck
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Hardness:</strong> HRC60 and above
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
                      {product.L1 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">L1:</span> {product.L1}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Flutes:</span> {product.flutes}
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
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className={`border-l-4 ${spec.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{spec.title}</h4>
                      <p className="text-gray-600 text-sm">{spec.description}</p>
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

          {/* Application Scenarios */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios</h2>
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
                  Application Processing
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
                  title: "Efficient Material Removal at Depth",
                  description: "Remove material and create deep grooves, slots, or pockets efficiently and accurately.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Accessing Confined Features",
                  description:
                    "Reach and machine features that are inaccessible to standard length end mills due to their geometry.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Maintaining Dimensional Accuracy at Depth",
                  description:
                    "Produce deep features with precise dimensions and good geometric tolerances, minimizing deflection over long reaches.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Ensuring Good Surface Finish",
                  description:
                    "Achieve the required surface quality on the walls and bottom of deep grooves or pockets.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Facilitating Chip Evacuation",
                  description:
                    "A critical function to prevent tool failure and ensure process stability during deep machining operations.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Overcoming Standard End Mill Limitations",
                  description:
                    "Specifically designed to address the challenges (reach, rigidity, chip control) of milling deep features.",
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
                  description: "High-performance flat end mills for precision milling operations.",
                  url: "/standard-tools/milling/right-angle-flat",
                },
                {
                  title: "End Mills",
                  image: "/images/product-2.jpg",
                  description: "General purpose end mills for a wide range of milling applications.",
                  url: "/standard-tools/milling/end-mills",
                },
                {
                  title: "Ball Nose End Mills",
                  image: "/images/product-3.jpg",
                  description: "Specialized tools for 3D contour machining and curved surfaces.",
                  url: "/standard-tools/milling/ball-nose",
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
                Our technical team can help you select the optimal deep ditch milling cutter configuration for your
                specific deep machining requirements, material, and application depth.
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
