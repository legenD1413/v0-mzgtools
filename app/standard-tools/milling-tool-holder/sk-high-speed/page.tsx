import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function SKHighSpeedPage() {
  // Product data for SK High-Speed Tool Holders
  const products = [
    {
      id: "sk-001",
      name: "ISO-GSK Milling Machine Tool Holder",
      image: "/images/C05-1.png",
      description: "Designed for high-speed engraving and milling machines, featuring a 4° SK collet for higher repeat clamping accuracy and full circle nuts for low noise and minimal wind resistance.",
      series: "ISO-GSK",
      application: "High-speed engraving and milling machines",
      speedRange: "15,000-25,000 RPM",
      pageNumber: "C05",
    },
    {
      id: "sk-002",
      name: "NBT-GSK Milling Machine Tool Holder",
      image: "/images/C05-2.png",
      description: "Optimized for high-speed carving and milling machines, equipped with non-eccentric, full balanced round nuts for reduced noise and wind resistance.",
      series: "NBT-GSK",
      application: "High-speed carving and milling machines",
      speedRange: "15,000-25,000 RPM",
      pageNumber: "C05",
    },
    {
      id: "sk-003",
      name: "BT-GSK Milling Machine Tool Holder",
      image: "/images/C06-1.png",
      description: "Ideal for high-speed, high-precision cutting, enhancing tool life and ensuring stable cutting performance with reduced vibration; requires the tool to extend beyond the collet's effective clamping length to prevent damage.",
      series: "BT-GSK",
      application: "High-speed, high-precision cutting applications",
      speedRange: "15,000-30,000 RPM",
      pageNumber: "C06",
    },
    {
      id: "sk-004",
      name: "BT-SK Milling Machine Tool Holder",
      image: "/images/C07-1.png",
      description: "Provides high repeat clamping accuracy utilizing a 4° SK collet.",
      series: "BT-SK",
      application: "Precision milling and engraving operations",
      speedRange: "15,000-25,000 RPM",
      pageNumber: "C07",
    },
    {
      id: "sk-005",
      name: "C-GSK Milling Machine Tool Holder",
      image: "/images/C08-1.png",
      description: "Suited for high-speed, high-precision cutting, incorporating 4° SK collets and full circle nuts for stable performance.",
      series: "C-GSK",
      application: "High-speed, high-precision cutting operations",
      speedRange: "15,000-25,000 RPM",
      pageNumber: "C08",
    },
    {
      id: "sk-006",
      name: "C-SK Milling Machine Tool Holder",
      image: "/images/C08-2.png",
      description: "Delivers high repeat clamping accuracy through its 4° SK collets, contributing to stable cutting.",
      series: "C-SK",
      application: "Stable cutting operations with high precision",
      speedRange: "15,000-25,000 RPM",
      pageNumber: "C08",
    },
  
  ]

  // Performance features based on the provided content
  const performanceFeatures = [
    {
      title: "Exceptional High-Speed Stability",
      description: "Precision-balanced Full Circle Nut design reduces noise and minimizes wind resistance at high rotational speeds, ensuring superior stability and accuracy.",
      icon: "Zap",
    },
    {
      title: "High Clamping Accuracy",
      description: "SK collets with 4° taper provide large surface contact area, resulting in higher and more consistent clamping forces with superior repeat accuracy.",
      icon: "Target",
    },
    {
      title: "Vibration Reduction",
      description: "Robust holder body combined with precision-balanced components effectively reduces vibration, leading to exceptionally stable cutting performance.",
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
    "Mold & Die Finishing",
    "Prototyping & Fine Engraving",
    "Medical & Dental Manufacturing",
    "Electronics & Aerospace",
    "High-Speed Machining Centers",
    "CNC Engraving Operations",
    "Precision Manufacturing",
    "Advanced Materials Processing",
  ]

  // Applications
  const applications = [
    "High-Speed Finishing",
    "3D Contouring and Engraving",
    "Micro-Milling Operations",
    "Mirror Surface Finishing",
    "Complex Multi-Axis Toolpaths",
    "Small Feature Machining",
    "Precision Detail Work",
    "High-RPM Cutting Operations",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "Tool Steels",
    "Hardened Steels",
    "Stainless Steels",
    "Aluminum Alloys",
    "Titanium Alloys",
    "Copper Alloys",
    "Advanced Composites",
    "Precision Mold Materials",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Dynamic Balance Grade",
      description:
        "Precision balanced to G2.5 standard. Operational range typically 15,000-25,000 RPM, with specific models calibrated for up to 40,000 RPM.",
      color: "border-red-600",
    },
    {
      title: "SK Collet System",
      description:
        "Utilizes SK collets with 4° taper for high-precision clamping, providing large surface contact area and superior repeat accuracy.",
      color: "border-blue-600",
    },
    {
      title: "Full Circle Nut Design",
      description:
        "Non-eccentric, fully balanced round nut with keyless slot design significantly reduces noise and minimizes wind resistance at high speeds.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "High-Speed, High-Precision Tool Holder" },
    { label: "Balance Grade", value: "G2.5 (up to G1.0 available)" },
    { label: "Speed Range", value: "15,000-40,000 RPM" },
    { label: "Collet System", value: "SK Collets with 4° Taper" },
    { label: "Nut Design", value: "Full Circle Balanced Nut" },
    { label: "Primary Application", value: "High-Speed Engraving & Milling" },
    { label: "Series Available", value: "ISO-GSK, BT-GSK, NBT-GSK, BT-SK, C-GSK, C-SK" },
    { label: "Special Features", value: "Keyless Slot, Low Noise, Minimal Wind Resistance" },
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
                  High-Speed Precision Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  SK High-Speed, High-Precision Milling Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the SK High-Speed, High-Precision Milling Tool Holder System. Specifically engineered for advanced CNC machining applications, primarily high-speed engraving and milling, where rotational speed, precision, and stability are paramount.
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
                    src="/images/toolhoder-1.png"
                    alt="SK High-Speed, High-Precision Milling Tool Holder System"
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
                      The performance of this tool holder system is defined by its specialized design features that synergize to deliver superior results in high-RPM environments. The system is engineered and precision-balanced for high-speed operation, utilizing a <strong>Full Circle Nut</strong> with a keyless slot design that significantly reduces noise and minimizes wind resistance at high rotational speeds, which is essential for maintaining stability and accuracy.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The system utilizes <strong>SK collets</strong> with a distinct <strong>4° taper</strong> angle that provides a large surface contact area with the tool shank, resulting in higher and more consistent clamping forces. This directly translates to higher repeat clamping accuracy, ensuring that tool runout remains minimal even after multiple tool changes. The combination of robust holder body, precision-balanced full circle nut, and high-concentricity SK collet system works to effectively reduce vibration during processing.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      By minimizing vibration and ensuring the tool runs true with low runout, the system distributes cutting forces evenly across the tool's cutting edges. This prevents premature, uneven wear and significantly contributes to increased tool service life, reducing long-term operational costs while maintaining exceptional cutting stability and fine surface finishes.
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
                        <strong>Balance Grade:</strong> G2.5 (up to G1.0)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Speed Range:</strong> 15,000-40,000 RPM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Collet System:</strong> SK with 4° Taper
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Design:</strong> Full Circle Balanced Nut
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Features:</strong> Low Noise, Minimal Wind Resistance
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
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
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
                      {product.description && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-600">{product.description}</p>
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

          {/* Important Usage Notes */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Important Usage Notes</h2>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Safety and Performance Guidelines</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Tool Insertion Depth:</strong> When inserting a cutting tool, it is imperative that the tool shank extends beyond the effective clamping length of the collet bore. Failure to ensure sufficient insertion depth can lead to improper locking, tool slippage, and potential damage to the collet, nut, and holder.
                      </li>
                      <li>
                        <strong>Balance Grade and Speed:</strong> Always operate the tool holder within its specified balanced speed limit. While the standard balance grade is G2.5 for speeds up to 25,000 RPM, users should confirm the rating for their specific holder. Requesting a higher balance certification for speeds like 40,000 RPM typically incurs an additional charge.
                      </li>
                    </ul>
                  </div>
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
                      The main function of the SK High-Speed, High-Precision Milling Tool Holder System is <strong>to provide an exceptionally stable, accurate, and low-vibration interface between a cutting tool and a high-speed machine spindle.</strong> It achieves this through a specialized system of SK (4°) collets and a full circle balanced nut, enabling high-quality engraving and finishing operations at very high RPMs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "High-Speed Stability",
                  description: "Precision-balanced design with Full Circle Nut provides exceptional stability at high RPMs, reducing noise and wind resistance for superior performance.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Superior Clamping Accuracy",
                  description: "SK collets with 4° taper provide large surface contact area, ensuring higher and more consistent clamping forces with exceptional repeat accuracy.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Vibration Reduction",
                  description: "Robust holder body combined with precision-balanced components effectively reduces vibration, leading to stable cutting performance and extended tool life.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Extended Tool Life",
                  description: "Low runout and even force distribution across cutting edges prevents premature wear, significantly contributing to increased tool service life.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Precision Interface",
                  description: "Provides an exceptionally stable, accurate, and low-vibration interface between cutting tool and high-speed machine spindle.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Advanced Engineering",
                  description: "Specialized system of SK collets and full circle balanced nut enables high-quality engraving and finishing operations at very high RPMs.",
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {(() => {
                // 从本分类产品中随机获取图片的函数
                const getRandomProductImage = () => {
                  const randomIndex = Math.floor(Math.random() * products.length);
                  return products[randomIndex].image;
                };
                
                // 定义同目录下的所有分类（排除当前的sk-high-speed）
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
                    title: "Face Milling",
                    image: getRandomProductImage(),
                    description: "面铣刀柄，大型面加工",
                    url: "/standard-tools/milling-tool-holder/face-milling",
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
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need High-Speed Precision Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal high-speed tool holders for your specific applications, materials, and production requirements. From SK high-speed systems to precision balancing, we provide comprehensive high-performance solutions.
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