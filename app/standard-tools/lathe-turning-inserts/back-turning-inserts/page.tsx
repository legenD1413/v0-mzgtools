import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, RotateCcw } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function BackTurningInsertsPage() {
  // Product data based on the TBP and TKFB series
  const products = [
    {
      id: "bti-001",
      name: "TBP 55FR",
      image: "/images/tbp-55fr-insert.png",
      description: "80° negative angle back turning insert with chip breaker",
      series: "TBP Series",
      shape: "Peach Shape",
      angle: "80° Negative",
      chipbreaker: "FR - Fine Finish",
      application: "Back turning, pip removal",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "TBP-55",
    },
    {
      id: "bti-002",
      name: "TBP 60FR",
      image: "/images/tbp-60fr-insert.png",
      description: "Peach shape insert for general back turning operations",
      series: "TBP Series",
      shape: "Peach Shape",
      angle: "80° Negative",
      chipbreaker: "FR - General Purpose",
      application: "Back facing, profiling",
      materials: "Steel, Aluminum, Cast Iron",
      pageNumber: "TBP-60",
    },
    {
      id: "bti-003",
      name: "TBPA 60FR",
      image: "/images/tbpa-60fr-insert.png",
      description: "Advanced TBP series with enhanced performance",
      series: "TBPA Series",
      shape: "Peach Shape",
      angle: "80° Negative + 15°",
      chipbreaker: "FR - Advanced",
      application: "Precision back turning",
      materials: "Hardened Steel, Superalloys",
      pageNumber: "TBPA-60",
    },
    {
      id: "bti-004",
      name: "TBP 55FR00",
      image: "/images/tbp-55fr00-insert.png",
      description: "Fine finishing back turning insert",
      series: "TBP Series",
      shape: "Peach Shape",
      angle: "80° Negative",
      chipbreaker: "FR00 - Ultra Fine",
      application: "Ultra-fine finishing",
      materials: "Aluminum, Copper, Soft Steel",
      pageNumber: "TBP-55FR00",
    },
    {
      id: "bti-005",
      name: "TBP 55FR10",
      image: "/images/tbp-55fr10-insert.png",
      description: "Light cutting back turning insert",
      series: "TBP Series",
      shape: "Peach Shape",
      angle: "80° Negative",
      chipbreaker: "FR10 - Light Cutting",
      application: "Light cutting, thin walls",
      materials: "Thin-walled parts, Soft materials",
      pageNumber: "TBP-55FR10",
    },
    {
      id: "bti-006",
      name: "TKFB12R 15005M",
      image: "/images/tkfb12r-15005m-insert.png",
      description: "Right-hand precision back turning insert",
      series: "TKFB Series",
      shape: "Elongated Profile",
      angle: "4° Top Angle",
      chipbreaker: "M - Medium Cutting",
      application: "Precision profiling",
      materials: "Medical grade materials",
      pageNumber: "TKFB12R",
    },
    {
      id: "bti-007",
      name: "TKFB12L 15005M",
      image: "/images/tkfb12l-15005m-insert.png",
      description: "Left-hand precision back turning insert",
      series: "TKFB Series",
      shape: "Elongated Profile",
      angle: "4° Top Angle",
      chipbreaker: "M - Medium Cutting",
      application: "Left-hand operations",
      materials: "Electronics components",
      pageNumber: "TKFB12L",
    },
    {
      id: "bti-008",
      name: "TKFB16R 28010M",
      image: "/images/tkfb16r-28010m-insert.png",
      description: "Larger right-hand precision insert",
      series: "TKFB Series",
      shape: "Elongated Profile",
      angle: "4° Top Angle",
      chipbreaker: "M - Medium Cutting",
      application: "Back grooving, undercutting",
      materials: "Titanium, Superalloys",
      pageNumber: "TKFB16R",
    },
    {
      id: "bti-009",
      name: "TKFB16L 38005M",
      image: "/images/tkfb16l-38005m-insert.png",
      description: "Large left-hand precision insert",
      series: "TKFB Series",
      shape: "Elongated Profile",
      angle: "4° Top Angle",
      chipbreaker: "M - Medium Cutting",
      application: "Complex back profiling",
      materials: "Aerospace materials",
      pageNumber: "TKFB16L",
    },
    {
      id: "bti-010",
      name: "TBP 60FR20",
      image: "/images/tbp-60fr20-insert.png",
      description: "General purpose back turning insert",
      series: "TBP Series",
      shape: "Peach Shape",
      angle: "80° Negative",
      chipbreaker: "FR20 - General Purpose",
      application: "General back turning",
      materials: "Steel, Cast Iron, Stainless Steel",
      pageNumber: "TBP-60FR20",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "RotateCcw",
      title: "Specialized Back Turning Design",
      description:
        "Engineered specifically for back turning operations on Swiss-type lathes and CNC turning centers, providing exceptional stability and precision in secondary machining operations.",
    },
    {
      icon: "Shield",
      title: "Robust Peach Shape Geometry",
      description:
        "TBP series features strong 80° negative angle geometry with peach-shaped design, delivering exceptional edge strength and resistance to chipping in demanding applications.",
    },
    {
      icon: "Target",
      title: "Precision TKFB Technology",
      description:
        "TKFB series provides high-precision finishing with positive rake geometry and integrated chip breakers, ensuring superior surface quality and dimensional accuracy.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "RotateCcw":
        return <RotateCcw className="h-8 w-8 text-red-600" />
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Application scenarios
  const applicationScenarios = [
    "Swiss-type automatic lathes",
    "Multi-spindle turning centers",
    "Compact CNC turning centers",
    "Secondary spindle operations",
    "Back-working tool posts",
    "Small parts production",
    "Medical device manufacturing",
    "Electronics component production",
    "Automotive precision parts",
    "Aerospace components",
  ]

  // Application operations
  const applicationOperations = [
    "Back Facing and Turning",
    "Back Chamfering and Profiling",
    "Pip Removal Operations",
    "Back Grooving and Undercutting",
    "Fine Back Turning",
    "Complex Back Profiling",
    "Secondary Surface Finishing",
    "Reverse Turning Operations",
  ]

  // Material capabilities
  const materialCapabilities = [
    "High-Carbon Steel",
    "Stainless Steel (all grades)",
    "Cast Iron (Gray and Ductile)",
    "Hardened Steels (up to HRC 58)",
    "Titanium Alloys",
    "Superalloys (Inconel, Hastelloy)",
    "Aluminum Alloys",
    "Copper Alloys",
    "Medical Grade Materials",
    "Aerospace Materials",
  ]

  // Technical specifications for TBP and TKFB series
  const technicalSpecs = [
    {
      title: "TBP Series - Peach Shape Design",
      description:
        "80° negative angle geometry with rhombic-like peach shape providing exceptional strength. Multiple cutting edges with optional chip breakers for demanding back turning operations.",
      color: "border-red-600",
    },
    {
      title: "TBPA Series - Advanced Performance",
      description:
        "Enhanced TBP series with additional 15° angle for improved clearance and profiling capabilities. Optimized for precision back turning in automated environments.",
      color: "border-blue-600",
    },
    {
      title: "TKFB Series - Precision Profiling",
      description:
        "Elongated shape with 4° top angle and positive rake geometry. Integrated chip breakers with right-hand and left-hand configurations for maximum versatility.",
      color: "border-green-600",
    },
    {
      title: "Toolholder Compatibility",
      description:
        "Compatible with AB14, AB19, AB35-AB36, AB37 series for TBP and AB47-AB48 series for TKFB, optimized for compact machining envelopes and angle head cutters.",
      color: "border-purple-600",
    },
  ]

  // Cutting parameters
  const cuttingParameters = [
    { label: "TBP Series Angle", value: "80° Negative" },
    { label: "TKFB Series Angle", value: "4° Top Angle" },
    { label: "Chip Breaker Types", value: "FR00, FR10, FR20, M" },
    { label: "Mounting Type", value: "Central Hole Screw-down" },
    { label: "Tool Holders", value: "AB14-AB48 Series" },
    { label: "Applications", value: "Back Turning, Profiling" },
    { label: "Machine Types", value: "Swiss Lathes, CNC Centers" },
    { label: "Surface Finish", value: "Ra 0.1-0.8 μm" },
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
                <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Specialized Back Turning Solutions
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Back Turning Inserts
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Tool Machine provides comprehensive and professional Back Turning Inserts, focusing on TBP and TKFB series. These highly specialized inserts are indispensable for modern precision machining, particularly in automated environments like Swiss-type lathes and CNC turning centers for secondary or reverse turning operations.
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
                    src="/images/back-turning-inserts-hero.png"
                    alt="Professional Back Turning Inserts Collection"
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
                    <strong>Back turning</strong>, also known as secondary or reverse turning, is an external machining operation performed on the spindle side of a workpiece. This technique is critical when conventional turning from the tailstock end is impractical or impossible.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Common scenarios include <strong>machining features close to the collet</strong>, finishing a part before cutoff to eliminate a residual pip, or when the component's geometry obstructs a standard tool path. Back turning inserts are engineered to excel in these unique conditions.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Our <strong>TBP and TKFB series</strong> provide exceptional stability, precision, and superior surface finishes in automated environments like Swiss-type lathes and multi-spindle turning centers.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    Key Applications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>TBP Series:</strong> Heavy-duty back turning
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>TKFB Series:</strong> Precision finishing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Swiss lathes, CNC centers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Operations:</strong> Pip removal, profiling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Industries:</strong> Medical, automotive, aerospace
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
                      {product.shape && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Shape:</span>
                          <span className="text-gray-900 text-xs">{product.shape}</span>
                        </div>
                      )}
                      {product.angle && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Angle:</span>
                          <span className="text-gray-900 text-xs">{product.angle}</span>
                        </div>
                      )}
                      {product.chipbreaker && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Chipbreaker:</span>
                          <span className="text-gray-900 text-xs">{product.chipbreaker}</span>
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
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Series Specifications</h3>
                <div className="p-4 space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className={`border-l-4 ${spec.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{spec.title}</h4>
                      <p className="text-gray-600 text-sm">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cutting Parameters */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Technical Specifications</h3>
                <div className="divide-y divide-gray-100">
                  {cuttingParameters.map((param, index) => (
                    <div key={index} className="flex justify-between items-center p-4">
                      <span className="font-medium text-sm text-gray-700">{param.label}:</span>
                      <span className="text-sm text-right text-gray-900">{param.value}</span>
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
              {/* Application Scenarios */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Machine Applications
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applicationScenarios.map((scenario, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{scenario}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applicationOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Capabilities */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Material Capabilities
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {materialCapabilities.map((material, index) => (
                    <div key={index} className="flex items-start py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0 mt-1.5"></div>
                      <span className="text-sm">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Application Processing */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Processing</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">TBP Series Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>High-Performance Back Turning:</strong> 80° negative angle geometry provides exceptional stability and versatility across extensive material ranges and cutting conditions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Robust Edge Design:</strong> Incredible strength and resistance to chipping, suitable for unstable and interrupted cutting environments with workpiece vibration.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Chip Control Options:</strong> Available with and without chip breakers for tailored performance, excellent for automated processes preventing chip entanglement.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">TKFB Series Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Precision Finishing:</strong> Positive rake geometry and sharp cutting edge result in lower cutting forces and superior dimensional accuracy.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Integrated Chip Management:</strong> Meticulously designed chip breakers manage chips effectively across wide ranges of feed rates and depths of cut.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Versatile Configurations:</strong> Available in both right-hand and left-hand versions for different spindle rotations and complex back-working operations.
                      </div>
                    </li>
                  </ul>
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
            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "TBP Series",
                  description: "High-performance external back turning with 80° negative angle peach shape geometry. Provides exceptional stability, multiple cutting edges, and optional chip breakers for demanding automated environments.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "TBPA Series", 
                  description: "Advanced TBP series with additional 15° angle for enhanced clearance and profiling capabilities. Optimized for precision back turning in complex geometries and automated production.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "TKFB Series",
                  description: "Precision back turning and profiling with positive rake geometry and 4° top angle. Features integrated chip breakers and right/left-hand configurations for superior finishing operations.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Specialized Applications",
                  description: "Designed for Swiss-type lathes, multi-spindle centers, and compact CNC machines. Ideal for medical, electronics, and aerospace industries requiring flawless surface finish and tight tolerances.",
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
                  title: "Turning Inserts",
                  image: "/images/turning-inserts.jpg",
                  description: "Standard turning inserts for general applications",
                  url: "/standard-tools/lathe-turning-inserts/turning-inserts",
                },
                {
                  title: "Grooving/Cut-off Turning Inserts",
                  image: "/images/grooving-cut-off-inserts.jpg",
                  description: "Specialized inserts for grooving and parting",
                  url: "/standard-tools/lathe-turning-inserts/grooving-cut-off-turning-inserts",
                },
                {
                  title: "Threading Inserts",
                  image: "/images/threading-inserts.jpg",
                  description: "Precision inserts for thread cutting operations",
                  url: "/standard-tools/lathe-turning-inserts/threading-inserts",
                },
                {
                  title: "Internal Grooving Inserts",
                  image: "/images/internal-grooving-inserts.jpg",
                  description: "Specialized inserts for internal grooving",
                  url: "/standard-tools/lathe-turning-inserts/internal-grooving-inserts",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Turning Inserts" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Specialized Back Turning Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical experts can help you select the optimal TBP or TKFB series back turning inserts for your specific Swiss-type lathe or CNC turning center applications. From pip removal to precision profiling, we provide comprehensive back turning solutions that eliminate secondary operations and maximize productivity in automated environments.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                  Contact Swiss Lathe Specialists
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10 border-white hover:text-white transition-all duration-300"
                >
                  Request Application Analysis
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