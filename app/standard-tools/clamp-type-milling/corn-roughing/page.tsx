import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function CornRoughingPage() {
  // Product data based on the MZG Clamp Type Corn / Roughing Milling Cutters system
  const products = [
    {
      id: "cr-001",
      name: "Standard Corn Roughing Cutter - Small",
      image: "/images/corn-roughing-small.png",
      description: "Compact design for small cavity roughing and precision applications",
      series: "Standard Series",
      diameter: "25-50mm",
      shankType: "Weldon Shank",
      application: "Small cavity roughing",
      insertType: "SEET, SPKN",
      pageNumber: "CR-S",
    },
    {
      id: "cr-002",
      name: "Standard Corn Roughing Cutter - Medium",
      image: "/images/corn-roughing-medium.png",
      description: "Medium-sized cutter for general roughing operations",
      series: "Standard Series",
      diameter: "50-80mm",
      shankType: "Morse Taper",
      application: "General roughing",
      insertType: "SEET, SPKN",
      pageNumber: "CR-M",
    },
    {
      id: "cr-003",
      name: "Standard Corn Roughing Cutter - Large",
      image: "/images/corn-roughing-large.png",
      description: "Heavy-duty cutter for large-scale face milling and roughing",
      series: "Standard Series",
      diameter: "80-125mm",
      shankType: "Modular Screw-on",
      application: "Large-scale roughing",
      insertType: "SEET, SPKN",
      pageNumber: "CR-L",
    },
    {
      id: "cr-004",
      name: "High-Efficiency Corn Cutter",
      image: "/images/high-efficiency-corn.png",
      description: "Optimized for maximum material removal rates",
      series: "High-Efficiency Series",
      diameter: "40-100mm",
      features: "Maximum MRR design",
      application: "High-volume production",
      insertType: "SEET, SPKN",
      pageNumber: "HE-CR",
    },
    {
      id: "cr-005",
      name: "Deep Cavity Corn Cutter",
      image: "/images/deep-cavity-corn.png",
      description: "Extended length for deep cavity and pocket machining",
      series: "Deep Cavity Series",
      diameter: "30-70mm",
      length: "Extended length",
      application: "Deep cavity machining",
      features: "Long reach capability",
      pageNumber: "DC-CR",
    },
    {
      id: "cr-006",
      name: "Through-Coolant Corn Cutter",
      image: "/images/through-coolant-corn.png",
      description: "Internal coolant channels for optimal cooling and chip evacuation",
      series: "Coolant Series",
      diameter: "35-90mm",
      features: "Internal coolant channels",
      application: "High-speed machining",
      cooling: "Through-coolant",
      pageNumber: "TC-CR",
    },
    {
      id: "cr-007",
      name: "SEET Insert - P Series",
      image: "/images/seet-p-insert.png",
      description: "Square insert optimized for steel machining",
      series: "SEET Insert",
      coating: "PVD/CVD",
      material: "Steel (P-Series)",
      application: "Steel machining",
      features: "Optimized chipbreaker",
      pageNumber: "SEET-P",
    },
    {
      id: "cr-008",
      name: "SPKN Insert - M Series",
      image: "/images/spkn-m-insert.png",
      description: "Rhombic insert for stainless steel applications",
      series: "SPKN Insert",
      coating: "Advanced PVD",
      material: "Stainless Steel (M-Series)",
      application: "Stainless steel machining",
      features: "Heat-resistant coating",
      pageNumber: "SPKN-M",
    },
    {
      id: "cr-009",
      name: "SEET Insert - K Series",
      image: "/images/seet-k-insert.png",
      description: "Square insert designed for cast iron machining",
      series: "SEET Insert",
      coating: "CVD",
      material: "Cast Iron (K-Series)",
      application: "Cast iron machining",
      features: "Sharp cutting edge",
      pageNumber: "SEET-K",
    },
    {
      id: "cr-010",
      name: "Modular Extension System",
      image: "/images/modular-extension.png",
      description: "Flexible extension system for various machining depths",
      series: "Modular System",
      interface: "Screw-on connection",
      length: "Various lengths",
      application: "Deep machining flexibility",
      features: "Modular design",
      pageNumber: "MOD-EXT",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Zap",
      title: "Exceptional Material Removal Efficiency",
      description:
        "Multiple layers of inserts densely packed on cutter body achieve maximum material removal in shortest time, with large axial depth of cut and high feed rates.",
    },
    {
      icon: "Shield",
      title: "Outstanding Cutting Stability",
      description:
        "Spiral or staggered insert arrangement provides vibration-dampening effect, with sequential cutting engagement creating smooth cutting force distribution.",
    },
    {
      icon: "Target",
      title: "Optimized Chip Evacuation",
      description:
        "Spacious chip gullets and helical cutting edge arrangement ensure effective chip guidance and evacuation, with optional internal coolant channels.",
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

  // Application industries
  const applicationIndustries = [
    "Mold & Die Industry",
    "Heavy Machinery Manufacturing",
    "Aerospace Sector",
    "Energy Industry",
    "Shipbuilding Industry",
    "Automotive Manufacturing",
    "General Engineering",
    "Tool & Die Making",
  ]

  // Application processing types
  const processingTypes = [
    "Shoulder and Side Milling",
    "Full Slotting",
    "Plunge Milling (Z-axis Feed)",
    "Helical Interpolation",
    "Ramping Operations",
    "Cavity Roughing",
    "Face Milling",
    "Contour Machining",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "Steel (P-Series Inserts)",
    "Stainless Steel (M-Series Inserts)",
    "Cast Iron (K-Series Inserts)",
    "Aluminum Alloys",
    "Titanium Alloys",
    "High-Temperature Alloys",
    "Tool Steels",
    "Pre-hardened Steels",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "High Rigidity Cutter Body",
      description:
        "Manufactured from high-strength 42CrMo alloy steel with precision heat treatment and surface treatments (nitriding/coating) for maximum rigidity and wear resistance.",
      color: "border-red-600",
    },
    {
      title: "Advanced Insert Clamping",
      description:
        "High-strength screws securely clamp inserts in precision-machined pockets, ensuring accurate positioning and high repeatability upon installation.",
      color: "border-blue-600",
    },
    {
      title: "Flexible Interface Options",
      description:
        "Multiple shank types available: Weldon Shank, Morse Taper, and Modular Screw-on Interface for maximum machine compatibility and application flexibility.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Diameter Range (DC)", value: "25-125mm" },
    { label: "Effective Cutting Length", value: "Variable" },
    { label: "Cutter Body Material", value: "42CrMo Alloy Steel" },
    { label: "Insert Types", value: "SEET, SPKN" },
    { label: "Insert Series", value: "P, M, K Series" },
    { label: "Shank Types", value: "Weldon, Morse Taper, Modular" },
    { label: "Cooling Options", value: "Through-coolant Available" },
    { label: "Surface Treatment", value: "Nitriding, Coating" },
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
                  Professional Roughing Tool Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                   Corn / Roughing Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG's Corn / Roughing Milling Cutters are heavy-duty, high-efficiency tools engineered for metal cutting applications demanding high material removal rates (MRR). The distinctive corncob-like appearance features multiple rows of indexable inserts arranged spirally, delivering exceptional cutting performance and stability.
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
                    src="/images/corn-roughing-hero.png"
                    alt="Professional MZG Clamp Type Corn / Roughing Milling Cutters System"
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
                    The fundamental design philosophy behind the corn milling cutter is to <strong>remove the maximum amount of material in the shortest possible time</strong>. By densely packing multiple layers of inserts on the cutter body, it achieves very large axial depth of cut (Ap) in a single pass, coupled with high feed rates.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>inserts are arranged in a spiral or segmented, staggered pattern</strong> with significant vibration-dampening effect. Multiple inserts enter and exit the cut sequentially and smoothly, creating a "cutting force smoothing" effect that maintains stable cutting even with long tool overhangs.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>cutter body is manufactured from high-strength 42CrMo alloy steel</strong> with precision heat treatment and surface treatments, achieving extremely high rigidity and wear resistance to withstand immense cutting forces without deformation.
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
                        <strong>Diameter Range:</strong> 25-125mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Types:</strong> SEET, SPKN
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material:</strong> 42CrMo Alloy Steel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> High MRR Roughing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Design:</strong> Corncob-like structure
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
                      {product.diameter && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Diameter:</span>
                          <span className="text-gray-900 text-xs">{product.diameter}</span>
                        </div>
                      )}
                      {product.shankType && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Shank Type:</span>
                          <span className="text-gray-900 text-xs">{product.shankType}</span>
                        </div>
                      )}
                      {product.length && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Length:</span>
                          <span className="text-gray-900 text-xs">{product.length}</span>
                        </div>
                      )}
                      {product.insertType && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Insert Type:</span>
                          <span className="text-gray-900 text-xs">{product.insertType}</span>
                        </div>
                      )}
                      {product.coating && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Coating:</span>
                          <span className="text-gray-900 text-xs">{product.coating}</span>
                        </div>
                      )}
                      {product.material && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Material:</span>
                          <span className="text-gray-900 text-xs">{product.material}</span>
                        </div>
                      )}
                      {product.interface && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Interface:</span>
                          <span className="text-gray-900 text-xs">{product.interface}</span>
                        </div>
                      )}
                      {product.cooling && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Cooling:</span>
                          <span className="text-gray-900 text-xs">{product.cooling}</span>
                        </div>
                      )}
                      {product.features && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Features:</span>
                          <span className="text-gray-900 text-xs">{product.features}</span>
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
              <h2 className="text-3xl font-bold">Application Scenarios</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Application Industries */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Application Industries
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applicationIndustries.map((industry, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processing Types */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Processing Types
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {processingTypes.map((type, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Materials */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Compatible Materials
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {compatibleMaterials.map((material, index) => (
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
                  <h3 className="text-xl font-bold mb-4">Primary Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Shoulder and Side Milling:</strong> Most common application for efficiently machining step surfaces and sidewalls of workpieces.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Full Slotting:</strong> Capable of milling full-width slot equal to tool diameter in single pass with reduced cutting load.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Plunge Milling:</strong> Z-axis feed milling for roughing deep or closed pockets, removing material layer by layer.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Helical Interpolation:</strong> Combined with machine helical function for creating large-diameter holes or circular pockets.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Ultimate Roughing Efficiency</strong> with maximum material removal rates
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Enhanced Process Security</strong> with stable cutting and minimal vibrations
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Cost-Effectiveness</strong> with indexable insert design and flexibility
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Simplified Process Planning</strong> replacing multiple smaller tools
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Ultimate Roughing Efficiency",
                  description: "Primary purpose to achieve high-volume, high-efficiency metal removal, serving as the true 'pioneer' in production line operations.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Cost-Effectiveness & Flexibility",
                  description: "Indexable insert design means only inexpensive inserts need replacement, with different grades adapting to wide range of materials.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Process Security",
                  description: "Stable cutting process minimizes vibrations, preventing insert chipping and workpiece damage, improving reliability in automated environments.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Simplified Process Planning",
                  description: "Powerful cutting capability replaces multiple smaller solid end mills, simplifying tool library management and reducing production costs.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
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
                  title: "Chamfering Cutters",
                  image: "/images/chamfering-cutters.jpg",
                  description: "Indexable chamfering tools for edge breaking",
                  url: "/standard-tools/clamp-type-milling/chamfering-cutters",
                },
                {
                  title: "Grooving & Slotting",
                  image: "/images/grooving-slotting.jpg",
                  description: "Three-face milling cutters for slotting operations",
                  url: "/standard-tools/clamp-type-milling/grooving-slotting",
                },
                {
                  title: "High Feed Milling Cutters",
                  image: "/images/high-feed-milling.jpg",
                  description: "High-efficiency cutters for rapid material removal",
                  url: "/standard-tools/clamp-type-milling/high-feed-milling-cutter",
                },
                {
                  title: "Fillet Corner Rounding",
                  image: "/images/fillet-corner-rounding.jpg", 
                  description: "Specialized cutters for corner rounding operations",
                  url: "/standard-tools/clamp-type-milling/fillet-corner-rounding",
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
              <h2 className="text-3xl font-bold mb-4">Need Professional Corn / Roughing Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal Corn / Roughing Milling Cutter configuration for your specific high-volume material removal applications. From mold cavity roughing to large component machining, we provide comprehensive indexable solutions for maximum efficiency and productivity.
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