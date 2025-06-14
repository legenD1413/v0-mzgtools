import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function FaceMillingPage() {
  // Product data based on the Face Milling Tool Holder system
  const products = [
    {
      id: "face-mill-001",
      name: "BT-FMA Face Milling Holder",
      image: "/images/bt-fma-holder.png",
      description: "Standard holder for BT interface machines with h6 tolerance",
      series: "BT-FMA Series",
      interface: "BT30/40/50",
      tolerance: "D1: h6",
      balance: "G6.3 @ 8000 RPM",
      application: "Standard face milling operations on BT machines",
      pageNumber: "BT-FMA",
    },
    {
      id: "face-mill-002",
      name: "BT-FMB Face Milling Holder",
      image: "/images/bt-fmb-holder.png",
      description: "Enhanced BT interface holder with central cooling system",
      series: "BT-FMB Series",
      interface: "BT30/40/50",
      tolerance: "D1: h6",
      balance: "G6.3 @ 8000 RPM",
      cooling: "Central Cooling (DIN69871-AD)",
      application: "High-performance face milling with cooling",
      pageNumber: "BT-FMB",
    },
    {
      id: "face-mill-003",
      name: "HSK/FMB High-Speed Face Milling Holder",
      image: "/images/hsk-fmb-holder.png",
      description: "Designed for high-speed HSK interface machines",
      series: "HSK/FMB Series",
      interface: "HSK40A/50A/63A/100A",
      tolerance: "D1: h6",
      balance: "G6.3 @ 3000 RPM",
      cooling: "Central Cooling (DIN69871-AD)",
      application: "High-speed face milling operations",
      pageNumber: "HSK-FMB",
    },
    {
      id: "face-mill-004",
      name: "DAT/FMB High-Precision Face Milling Holder",
      image: "/images/dat-fmb-holder.png",
      description: "High-precision 7/24 taper with AT3 tolerance",
      series: "DAT/FMB Series",
      interface: "DAT30/40/50",
      tolerance: "7/24 Taper: AT3, D1: h6",
      balance: "G6.3 @ 8000 RPM",
      cooling: "Central Cooling (DIN69871-AD)",
      application: "Ultra-precision face milling applications",
      pageNumber: "DAT-FMB",
    },
    {
      id: "face-mill-005",
      name: "NT/FM Face Milling Holder",
      image: "/images/nt-fm-holder.png",
      description: "NT interface holder with spindle protection ring",
      series: "NT/FM Series",
      interface: "NT30/40/50",
      tolerance: "D1: h6",
      balance: "G6.3 @ 8000 RPM",
      features: "Plastic Ring Protection",
      application: "Traditional milling machines with NT interface",
      pageNumber: "NT-FM",
    },
    {
      id: "face-mill-006",
      name: "BT40-FMA-25.4-60 Face Mill Holder",
      image: "/images/bt40-fma-25-60.png",
      description: "Specific configuration for 25.4mm mounting diameter",
      series: "BT-FMA Series",
      interface: "BT40",
      mountingDiameter: "25.4mm",
      length: "60mm",
      application: "Medium-diameter face mills on BT40 machines",
      pageNumber: "BT40-FMA-25",
    },
    {
      id: "face-mill-007",
      name: "BT50-FMB-32-80 Face Mill Holder",
      image: "/images/bt50-fmb-32-80.png",
      description: "Large diameter configuration with central cooling",
      series: "BT-FMB Series",
      interface: "BT50",
      mountingDiameter: "32mm",
      length: "80mm",
      cooling: "Central Cooling",
      application: "Large face mills with cooling requirements",
      pageNumber: "BT50-FMB-32",
    },
    {
      id: "face-mill-008",
      name: "HSK63A-FMB-40-100 High-Speed Holder",
      image: "/images/hsk63a-fmb-40-100.png",
      description: "High-speed configuration for large face mills",
      series: "HSK/FMB Series",
      interface: "HSK63A",
      mountingDiameter: "40mm",
      length: "100mm",
      balance: "G6.3 @ 3000 RPM",
      application: "High-speed large diameter face milling",
      pageNumber: "HSK63A-FMB-40",
    },
    {
      id: "face-mill-009",
      name: "DAT40-FMB-27-70 Precision Holder",
      image: "/images/dat40-fmb-27-70.png",
      description: "Ultra-precision holder with AT3 taper tolerance",
      series: "DAT/FMB Series",
      interface: "DAT40",
      mountingDiameter: "27mm",
      length: "70mm",
      tolerance: "AT3",
      application: "Ultra-precision face milling operations",
      pageNumber: "DAT40-FMB-27",
    },
    {
      id: "face-mill-010",
      name: "NT50-FM-35-90 Traditional Holder",
      image: "/images/nt50-fm-35-90.png",
      description: "Traditional NT interface with spindle protection",
      series: "NT/FM Series",
      interface: "NT50",
      mountingDiameter: "35mm",
      length: "90mm",
      features: "Spindle Protection Ring",
      application: "Traditional heavy-duty face milling",
      pageNumber: "NT50-FM-35",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Target",
      title: "High-Precision Mounting",
      description:
        "D1 tolerance of h6 ensures precise, snug fit for face mill cutters, minimizing runout and eliminating vibration at the tool-holder interface.",
    },
    {
      icon: "Zap",
      title: "Exceptional High-Speed Stability",
      description:
        "Standard dynamic balance of G6.3 at 8000 RPM (3000 RPM for HSK) reduces vibrations and enables high-speed operation without sacrificing quality.",
    },
    {
      icon: "Shield",
      title: "Secure Rigid Clamping",
      description:
        "Side locking screws provide powerful, reliable clamping mechanism preventing cutter shifting under immense torque and cutting forces.",
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
    "Mold & Die Manufacturing",
    "Automotive Industry",
    "Aerospace Manufacturing",
    "Energy Sector",
    "General Heavy Machinery",
    "CNC Machining Centers",
    "Portal Milling Operations",
    "Heavy-Duty Manufacturing",
  ]

  // Face milling operations
  const faceMillingOperations = [
    "Face Milling (Primary)",
    "Shoulder Milling",
    "Large Surface Machining",
    "Roughing Operations",
    "Finishing Operations",
    "High Material Removal",
    "Flatness Creation",
    "Surface Quality Enhancement",
  ]

  // Compatible applications
  const compatibleApplications = [
    "Mold Bases and Plates",
    "Engine Blocks",
    "Cylinder Heads",
    "Structural Frames",
    "Turbine Components",
    "Machine Beds",
    "Large Workpieces",
    "Flat Surface Creation",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Precision Manufacturing Standards",
      description:
        "D1 tolerance of h6 and 7/24 taper tolerance of AT3 (DAT series) ensure exceptional accuracy and precise mounting for face mill cutters.",
      color: "border-red-600",
    },
    {
      title: "Dynamic Balance Excellence",
      description:
        "Standard G6.3 balance at 8000 RPM (3000 RPM for HSK) with customization available for specialized high-RPM applications.",
      color: "border-blue-600",
    },
    {
      title: "Advanced Cooling Integration",
      description:
        "Central cooling system compliant with DIN69871-AD standard delivers coolant directly to cutting inserts for enhanced performance.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Holder Series", value: "BT-FMA, BT-FMB, HSK/FMB, DAT/FMB, NT/FM" },
    { label: "Mounting Tolerance (D1)", value: "h6" },
    { label: "Dynamic Balance", value: "G6.3 @ 8000 RPM (3000 RPM for HSK)" },
    { label: "Interface Types", value: "BT, HSK, DAT, NT" },
    { label: "Cooling System", value: "Central Cooling (DIN69871-AD)" },
    { label: "7/24 Taper Tolerance", value: "AT3 (DAT Series)" },
    { label: "Clamping Method", value: "Side Locking Screws" },
    { label: "Spindle Protection", value: "Plastic Ring (NT Series)" },
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
                  Tool Holder Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Face Milling Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the Face Milling Tool Holder system, a robust and high-precision category within the milling tool holder family. These holders are engineered for a singular, critical purpose: to securely mount large-diameter face milling cutters for efficient machining of large, flat surfaces.
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
                    src="/images/face-milling-hero.png"
                    alt="Professional Face Milling Tool Holder System Collection"
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
                    The performance of a Face Milling Tool Holder is measured by its ability to provide a <strong>stable, precise, and reliable connection between the machine spindle and the large face mill</strong>. The system guarantees exceptional accuracy through its <strong>D1 tolerance of h6</strong>. This tight tolerance on the mounting diameter ensures a precise, snug fit for the face mill cutter, minimizing runout and eliminating any potential for wobble or vibration at the tool-holder interface.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    A key performance characteristic is the standard <strong>dynamic balance of G6.3 at 8000 RPM</strong> (or G6.3 at 3000 RPM for HSK models). This pre-balancing is vital for modern high-speed machining, drastically reducing vibrations throughout the spindle-holder-tool assembly. The inclusion of <strong>side locking screws </strong> provides a powerful and reliable clamping mechanism, ensuring the face mill is locked rigidly against the holder's face and pilot diameter.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The presence of <strong>central cooling </strong>, conforming to the DIN69871-AD standard, is a significant performance-enhancing feature. By delivering coolant directly through the holder to the center of the cutter, it effectively cools the cutting inserts at the point of action. Certain models, such as the <strong>NT/FM series</strong>, incorporate a <strong>plastic ring</strong> at the end of the shank to protect the machine's spindle taper from accidental damage.
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
                        <strong>Tolerance:</strong> D1: h6, 7/24 Taper: AT3
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Balance:</strong> G6.3 @ 8000/3000 RPM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Cooling:</strong> Central (DIN69871-AD)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Interfaces:</strong> BT, HSK, DAT, NT
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> Large Flat Surface Machining
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
                      {product.interface && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Interface:</span>
                          <span className="text-gray-900">{product.interface}</span>
                        </div>
                      )}
                      {product.tolerance && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Tolerance:</span>
                          <span className="text-gray-900 text-xs">{product.tolerance}</span>
                        </div>
                      )}
                      {product.balance && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Balance:</span>
                          <span className="text-gray-900 text-xs">{product.balance}</span>
                        </div>
                      )}
                      {product.cooling && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Cooling:</span>
                          <span className="text-gray-900 text-xs">{product.cooling}</span>
                        </div>
                      )}
                      {product.mountingDiameter && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Diameter:</span>
                          <span className="text-gray-900">{product.mountingDiameter}</span>
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

          {/* Important Technical Notes */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Important Technical Notes</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-blue-800">D1 Parameter Definition</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        The D1 parameter in model names (e.g., BT40-FMA-25.4-60) refers to the <strong>outer mounting diameter</strong> for the face mill cutter, not the holder's shank diameter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Settings className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-yellow-800">NT Series Requirements</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Pull rod threads for NT series must be specified as <strong>metric or imperial</strong> upon ordering to ensure proper machine compatibility.
                      </p>
                    </div>
                  </div>
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
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Face Milling Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Face Milling Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {faceMillingOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Applications */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Compatible Applications
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {compatibleApplications.map((application, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{application}</span>
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
              <h2 className="text-3xl font-bold">Primary Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "High-Precision Mounting",
                  description: "D1 tolerance of h6 ensures precise, snug fit for face mill cutters, minimizing runout and eliminating vibration.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Dynamic Balance Excellence",
                  description: "G6.3 balance at 8000 RPM reduces vibrations, protects spindle bearings, and enables high-speed operation.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Secure Rigid Clamping",
                  description: "Side locking screws provide powerful clamping mechanism preventing cutter shifting under immense cutting forces.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Thermal Management",
                  description: "Central cooling system delivers coolant directly to cutting inserts, extending tool life and improving performance.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Spindle Protection",
                  description: "Plastic ring protection (NT series) prevents accidental damage to machine spindle taper during tool changes.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Large Surface Machining",
                  description: "Optimized for efficient machining of large, flat surfaces with superior surface finish and dimensional accuracy.",
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

          {/* Main Function Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Main Function</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                The main function of the Face Milling Tool Holder is <strong>to provide an exceptionally rigid, precise, and stable interface between the machine spindle and a large-diameter face milling cutter</strong>. By doing so, it enables high-performance machining of large flat surfaces, maximizing material removal rates, ensuring workpiece quality, and protecting both the cutting tool and the machine spindle through features like dynamic balance and secure clamping.
              </p>
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
                  title: "OZ Tool Holder",
                  image: "/images/oz-tool-holder.jpg",
                  description: "Heavy-duty tool holders for high-load operations",
                  url: "/standard-tools/milling-tool-holder/oz-tool-holder",
                },
                {
                  title: "Tapping Tool Holder",
                  image: "/images/tapping-tool-holder.jpg", 
                  description: "Specialized holders for internal threading operations",
                  url: "/standard-tools/milling-tool-holder/tapping-tool-holder",
                },
                {
                  title: "Drill Chuck",
                  image: "/images/drill-chuck.jpg",
                  description: "Precision chuck systems for drilling operations",
                  url: "/standard-tools/milling-tool-holder/drill-chuck",
                },
                {
                  title: "ER Tool Holders",
                  image: "/images/er-tool-holders.jpg",
                  description: "Versatile collet chuck systems for various applications",
                  url: "/standard-tools/milling-tool-holder/er-tool-holder",
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
              <h2 className="text-3xl font-bold mb-4">Need High-Performance Face Milling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal Face Milling Tool Holder configuration for your specific large surface machining applications, precision requirements, and machine compatibility. From dynamic balance to cooling systems, we provide comprehensive solutions.
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