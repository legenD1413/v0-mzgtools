import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function HMHydraulicPage() {
  // Product data for HM Hydraulic Tool Holders
  const products = [
    {
      id: "hm-001",
      name: "BT30 Hydraulic Chucks",
      image: "/images/C09-1.png",
      description: "BT30 interface hydraulic chuck for precise tool holding and superior clamping force distribution",
      series: "BT30-HM",
      application: "Medium-duty precision machining, compact tool holders",
      runout: "≤ 3µm",
      pageNumber: "C09",
    },
    {
      id: "hm-002",
      name: "BT50 Hydraulic Chucks",
      image: "/images/C10-1.png",
      description: "BT50 interface hydraulic chuck designed for heavy-duty applications with exceptional rigidity",
      series: "BT50-HM",
      application: "Heavy-duty machining, high-torque applications",
      runout: "≤ 3µm",
      pageNumber: "C10",
    },
    {
      id: "hm-003",
      name: "HSK63A Hydraulic Chucks",
      image: "/images/C11-1.png",
      description: "HSK63A interface hydraulic chuck for high-speed applications with superior balance and precision",
      series: "HSK63A-HM",
      application: "High-speed machining, precision applications",
      runout: "≤ 3µm",
      pageNumber: "C11",
    },
    {
      id: "hm-004",
      name: "HSK100A Hydraulic Chucks",
      image: "/images/C12-1.png",
      description: "HSK100A interface hydraulic chuck for heavy-duty high-speed machining with maximum stability",
      series: "HSK100A-HM",
      application: "Heavy-duty high-speed machining, large tool applications",
      runout: "≤ 3µm",
      pageNumber: "C12",
    },

  ]

  // Performance features based on the provided content
  const performanceFeatures = [
    {
      title: "Exceptional High-Speed Capability",
      description: "Precision balanced to G2.5 grade, certified for stable operation up to 25,000 RPM for modern high-speed machining strategies.",
      icon: "Zap",
    },
    {
      title: "Ultra-High Precision Clamping",
      description: "Hydraulic clamping system provides uniform 360-degree pressure, guaranteeing runout of 3µm or less for superior accuracy.",
      icon: "Target",
    },
    {
      title: "Superior Vibration Damping",
      description: "Internal fluid chamber acts as shock absorber, absorbing micro-vibrations for remarkably stable cutting and superior surface finishes.",
      icon: "Shield",
    },
  ]

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
    "Mold & Die Industry",
    "Aerospace & Automotive",
    "Medical & Precision Engineering",
    "High-Speed CNC Machining",
    "Precision Manufacturing",
    "Tool & Die Making",
    "Advanced Materials Processing",
    "Critical Component Manufacturing",
  ]

  // Applications
  const applications = [
    "High-Speed Finishing",
    "Precision Reaming & Boring",
    "Profile Milling",
    "Complex 3D Surface Contouring",
    "Mirror-Like Surface Achievement",
    "Tight Tolerance Machining",
    "Vibration-Sensitive Operations",
    "Critical Component Production",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "Tool Steels",
    "Hardened Steels",
    "Stainless Steels",
    "Aluminum Alloys",
    "Titanium Alloys",
    "Inconel & Superalloys",
    "Precision Mold Materials",
    "Medical Grade Materials",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Ultra-High Precision",
      description:
        "Guaranteed runout of ≤3µm (0.00012 inches) through uniform 360-degree hydraulic pressure on tool shank with h6 tolerance requirement.",
      color: "border-red-600",
    },
    {
      title: "High-Speed Performance",
      description:
        "Precision balanced to G2.5 grade for stable operation up to 25,000 RPM, ideal for modern high-speed machining strategies.",
      color: "border-blue-600",
    },
    {
      title: "Hydraulic Clamping System",
      description:
        "Internal hydraulic expansion system provides consistent, secure clamping with superior vibration damping for enhanced surface finish.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Hydraulic Milling Tool Holder" },
    { label: "Runout Accuracy (TIR)", value: "≤ 3µm" },
    { label: "Dynamic Balance Grade", value: "G2.5" },
    { label: "Maximum Speed", value: "25,000 RPM" },
    { label: "Tool Shank Tolerance", value: "h6" },
    { label: "Clamping Mechanism", value: "Internal Hydraulic Expansion" },
    { label: "Available Interfaces", value: "BT30/50-EHC, HSK63A/100A-EHC" },
    { label: "Standards", value: "JIS B6339-AD" },
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
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Hydraulic Precision Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  HM Hydraulic Milling Tool Holder
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the HM Hydraulic Milling Tool Holder system. Engineered as a high-performance solution for demanding machining operations where both high rotational speed and exceptional precision are critical requirements.
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
                    src="/images/hm-hydraulic-holder.png"
                    alt="HM Hydraulic Milling Tool Holder System"
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
                    The performance of the HM Hydraulic Tool Holder is defined by its ability to maintain extreme accuracy even while operating at high RPMs. This is achieved through a unique internal hydraulic clamping mechanism that provides distinct advantages. The entire system is engineered and balanced for high-speed machining (HSM) with a standard <strong>precision balance grade of G2.5</strong> and is certified for stable, safe operation at rotational speeds of <strong>up to 25,000 RPM</strong>.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The core of the HM holder is its hydraulic clamping system that exerts perfectly uniform, 360-degree pressure on the tool shank, resulting in exceptional centering accuracy. This translates to a guaranteed runout of <strong>3µm (0.00012 inches)</strong> or less. This level of precision ensures even cutting load on all tool flutes, leading to superior workpiece accuracy and significantly extended tool life.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    A key intrinsic benefit of the hydraulic design is its vibration-damping effect. The internal fluid chamber acts as a shock absorber, absorbing micro-vibrations generated at the tool's cutting edge. This dampening leads to a remarkably stable cutting process, directly resulting in superior surface finishes that can reduce or eliminate the need for secondary polishing operations.
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
                        <strong>Runout:</strong> ≤ 3µm (0.00012")
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Balance Grade:</strong> G2.5
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Max Speed:</strong> 25,000 RPM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Tool Tolerance:</strong> h6
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Clamping:</strong> Hydraulic Expansion
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
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Technical Specifications</h3>
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
              <h2 className="text-3xl font-bold">Application Scenarios & Processing</h2>
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
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Application Processing
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{application}</span>
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
                  {compatibleMaterials.map((material, index) => (
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
              <h2 className="text-3xl font-bold">Main Function</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">Primary Function</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      The main function of the HM Hydraulic Milling Tool Holder is <strong>to provide an ultra-precise, high-speed interface between the cutting tool and the machine spindle.</strong> By leveraging a hydraulic clamping system, it achieves a market-leading runout of 3µm and a G2.5 balance for speeds up to 25,000 RPM, making it the definitive choice for demanding finishing and high-precision machining operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Ultra-High Precision",
                  description: "Hydraulic clamping system provides uniform 360-degree pressure, guaranteeing exceptional centering accuracy with ≤3µm runout.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Speed Capability",
                  description: "Precision balanced to G2.5 grade for stable operation up to 25,000 RPM, ideal for modern high-speed machining strategies.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Vibration Damping",
                  description: "Internal fluid chamber acts as shock absorber, absorbing micro-vibrations for remarkably stable cutting and superior surface finish.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Consistent Clamping",
                  description: "Hydraulic mechanism provides powerful and reliable grip on h6 tolerance tool shanks, preventing tool pull-out and ensuring process stability.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Extended Tool Life",
                  description: "Even cutting load distribution across all tool flutes leads to superior workpiece accuracy and significantly extended tool life.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Surface Quality Enhancement",
                  description: "Superior vibration damping directly results in mirror-like surface finishes, reducing or eliminating secondary polishing operations.",
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
                  title: "SK High Speed",
                  image: "/images/sk-high-speed.jpg",
                  description: "High-speed precision tool holders with SK collet system",
                  url: "/standard-tools/milling-tool-holder/sk-high-speed",
                },
                {
                  title: "SR Shrink Fit",
                  image: "/images/sr-shrink-fit.jpg", 
                  description: "Shrink fit tool holders for maximum rigidity",
                  url: "/standard-tools/milling-tool-holder/sr-shrink-fit",
                },
                {
                  title: "ER Tool Holder",
                  image: "/images/er-tool-holder.jpg",
                  description: "Versatile ER collet system tool holders",
                  url: "/standard-tools/milling-tool-holder/er-tool-holder",
                },
                {
                  title: "Power Tool Holder",
                  image: "/images/power-tool-holder.jpg",
                  description: "Heavy-duty tool holders for demanding applications",
                  url: "/standard-tools/milling-tool-holder/power-tool-holder",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Tool Holders" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Ultra-Precision Hydraulic Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal hydraulic tool holders for your specific applications, materials, and precision requirements. From ultra-high precision to vibration damping, we provide comprehensive hydraulic solutions.
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