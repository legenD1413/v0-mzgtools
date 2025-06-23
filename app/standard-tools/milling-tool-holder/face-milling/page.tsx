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
      name: "BT-FMA Milling Machine Tool Holder",
      image: "/images/c65-1.png",
      description: "Designed for face milling operations, featuring h6 tolerance, side locking screws, and central cooling. Dynamically balanced to G6.3, 8000RPM (higher speeds on request).",
      series: "BT-FMA Series",
      interface: "BT",
      tolerance: "h6",
      balance: "G6.3 @ 8000 RPM",
      features: "Side locking screws, Central cooling",
      application: "Face milling operations with high precision requirements",
      pageNumber: "C65",
    },
    {
      id: "face-mill-002",
      name: "BT-FMB Milling Machine Tool Holder",
      image: "/images/c66-1.png",
      description: "Intended for face milling operations, with h6 tolerance, side locking screws, and central cooling. Dynamically balanced to G6.3, 8000RPM (higher speeds on request).",
      series: "BT-FMB Series",
      interface: "BT",
      tolerance: "h6",
      balance: "G6.3 @ 8000 RPM",
      features: "Side locking screws, Central cooling",
      application: "High-performance face milling with enhanced cooling",
      pageNumber: "C66",
    },
    {
      id: "face-mill-003",
      name: "HSK-FMB Milling Machine Tool Holder",
      image: "/images/c67-1.png",
      description: "Used for face milling operations, featuring h6 tolerance and balanced to G6.3, 3000RPM.",
      series: "HSK-FMB Series",
      interface: "HSK",
      tolerance: "h6",
      balance: "G6.3 @ 3000 RPM",
      application: "High-speed face milling operations on HSK machines",
      pageNumber: "C67",
    },
    {
      id: "face-mill-004",
      name: "DAT-FMB Milling Machine Tool Holder",
      image: "/images/c68-1.png",
      description: "Applicable for face milling operations, with h6 tolerance and a 7/24 taper tolerance of AT3. Dynamically balanced to G6.3, 8000RPM.",
      series: "DAT-FMB Series",
      interface: "DAT",
      tolerance: "h6, 7/24 Taper: AT3",
      balance: "G6.3 @ 8000 RPM",
      application: "Ultra-precision face milling with strict tolerance requirements",
      pageNumber: "C68",
    },
    {
      id: "face-mill-005",
      name: "NT-FMA Milling Machine Tool Holder",
      image: "/images/c69-1.png",
      description: "Utilized for face milling operations, featuring h6 tolerance, and includes a plastic ring at the shank end to protect the spindle.",
      series: "NT-FMA Series",
      interface: "NT",
      tolerance: "h6",
      features: "Plastic ring for spindle protection",
      application: "Traditional face milling with spindle protection",
      pageNumber: "C69",
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
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="prose prose-xs max-w-none">
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                    The performance of a Face Milling Tool Holder is measured by its ability to provide a <strong>stable, precise, and reliable connection between the machine spindle and the large face mill</strong>. The system guarantees exceptional accuracy through its <strong>D1 tolerance of h6</strong>. This tight tolerance on the mounting diameter ensures a precise, snug fit for the face mill cutter, minimizing runout and eliminating any potential for wobble or vibration at the tool-holder interface.
                  </p>
                                        <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        A key performance characteristic is the standard <strong>dynamic balance of G6.3 at 8000 RPM</strong> (or G6.3 at 3000 RPM for HSK models). This pre-balancing is vital for modern high-speed machining, drastically reducing vibrations throughout the spindle-holder-tool assembly. The inclusion of <strong>side locking screws </strong> provides a powerful and reliable clamping mechanism, ensuring the face mill is locked rigidly against the holder's face and pilot diameter.
                      </p>
                                        <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        The presence of <strong>central cooling </strong>, conforming to the DIN69871-AD standard, is a significant performance-enhancing feature. By delivering coolant directly through the holder to the center of the cutter, it effectively cools the cutting inserts at the point of action. Certain models, such as the <strong>NT/FM series</strong>, incorporate a <strong>plastic ring</strong> at the end of the shank to protect the machine's spindle taper from accidental damage.
                      </p>
                    </div>
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
                  <div className="relative w-full bg-white" style={{ height: "160px" }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 border-t">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold line-clamp-2 flex-1 mr-2">{product.name}</h3>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">{product.pageNumber}</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      {product.series && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Series:</span>
                          <span className="text-gray-900">{product.series}</span>
                        </div>
                      )}
                        <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-600">{product.description}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {(() => {
                // 从本分类产品中随机获取图片的函数
                const getRandomProductImage = () => {
                  const randomIndex = Math.floor(Math.random() * products.length);
                  return products[randomIndex].image;
                };
                
                // 定义同目录下的所有分类（排除当前的face-milling）
                const allToolHolderCategories = [
                  {
                    title: "Side Lock",
                    image: getRandomProductImage(),
                    description: "侧锁刀柄，快速更换工具",
                    url: "/standard-tools/milling-tool-holder/side-lock",
                  },
                  {
                    title: "Morse Taper",
                    image: getRandomProductImage(),
                    description: "莫氏锥度刀柄，标准锥度连接",
                    url: "/standard-tools/milling-tool-holder/morse-taper",
                  },
                  {
                    title: "Drill Chuck",
                    image: getRandomProductImage(),
                    description: "钻夹头，钻削加工专用",
                    url: "/standard-tools/milling-tool-holder/drill-chuck",
                  },
                  {
                    title: "Tapping Tool Holder",
                    image: getRandomProductImage(),
                    description: "攻丝刀柄，螺纹加工专用",
                    url: "/standard-tools/milling-tool-holder/tapping-tool-holder",
                  },
                  {
                    title: "OZ Tool Holder",
                    image: getRandomProductImage(),
                    description: "OZ刀柄系统，高精度应用",
                    url: "/standard-tools/milling-tool-holder/oz-tool-holder",
                  },
                  {
                    title: "ER Tool Holder",
                    image: getRandomProductImage(),
                    description: "ER夹头系统刀柄，多功能应用",
                    url: "/standard-tools/milling-tool-holder/er-tool-holder",
                  },
                  {
                    title: "Power Tool Holder",
                    image: getRandomProductImage(),
                    description: "强力刀柄，适用于重载加工",
                    url: "/standard-tools/milling-tool-holder/power-tool-holder",
                  },
                  {
                    title: "ADS Pull Back",
                    image: getRandomProductImage(),
                    description: "ADS拉钉刀柄，自动换刀",
                    url: "/standard-tools/milling-tool-holder/ads-pull-back",
                  },
                  {
                    title: "SK High Speed",
                    image: getRandomProductImage(),
                    description: "SK高速刀柄，高速精密加工",
                    url: "/standard-tools/milling-tool-holder/sk-high-speed",
                  },
                  {
                    title: "SR Shrink Fit",
                    image: getRandomProductImage(),
                    description: "热缩刀柄，用于精密应用",
                    url: "/standard-tools/milling-tool-holder/sr-shrink-fit",
                  },
                  {
                    title: "HM Hydraulic",
                    image: getRandomProductImage(),
                    description: "液压刀柄，提供最大夹紧力",
                    url: "/standard-tools/milling-tool-holder/hm-hydraulic",
                  },
                ];
                
                // 随机选择最多5个分类
                const shuffled = [...allToolHolderCategories].sort(() => 0.5 - Math.random());
                const selectedCategories = shuffled.slice(0, 5);
                
                return selectedCategories.map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Tool Holders" url={category.url} />
                ));
              })()}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-16 animate-gradient-xy">
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