import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function DrillBitPage() {
  // Product data based on the MZG Drill Point and Drill Pipe System
  const products = [
    {
      id: "drill-point-001",
      name: "Drill Point (QuickDrill Cutting Head)",
      image: "/images/k22-1.png",
      description: "Modular fast precision drilling solution for through holes",
      series: "QuickDrill Series",
      diameter: "Ø8~Ø26mm",
      structure: "Modular with quick-change head",
      application: "For fast precision drilling (through hole); cutting diameter Ø8~Ø26; modular structure with quick-change head and internal coolant hole",
      features: "Quick-change head, internal coolant hole, modular structure",
      pageNumber: "K22",
    },
    {
      id: "drill-point-002",
      name: "Swordtooth Drill Shank",
      image: "/images/k25-1.png",
      description: "Interchangeable blade drilling system with high rigidity",
      series: "Swordtooth Series",
      diameter: "Ø12~Ø33.5mm",
      depths: "1.5D, 3D, 5D, 8D, 12D",
      application: "Blade diameter range 12-33.5mm with depth capabilities up to 12D. Features interchangeable hard composite blades with 1.5-3mm grinding allowance for cost reduction. Radial tooth profile design ensures high precision while enabling fast blade changes without machine removal.",
      features: "Interchangeable blades, grinding allowance 1.5-3mm, radial tooth profiles, internal cooling",
      pageNumber: "K25",
    },
    {
      id: "drill-point-003",
      name: "Side Solid Fast Hollow Bit",
      image: "/images/k29-1.png",
      description: "Specialized hollow drilling solution",
      series: "Hollow Bit Series",
      application: "Specialized hollow drilling applications",
      features: "Side solid construction, fast drilling capability",
      pageNumber: "K29",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Zap",
      title: "Exceptional Machining Speed",
      description:
        "Fast Drill Bits with indexable carbide inserts achieve aggressive cutting speeds and feed rates, while Spade Drills perform one-shot drilling without retraction.",
    },
    {
      icon: "Target",
      title: "Uncompromising Precision",
      description:
        "Multiple layers of precision control from Centering Drills to EZ Guide Sleeve accessories ensure perfect hole quality and dimensional accuracy.",
    },
    {
      icon: "Shield",
      title: "Outstanding Cost-Effectiveness",
      description:
        "Interchangeable inserts and modular designs minimize long-term operational costs while maximizing tool utilization and inventory efficiency.",
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

  // Materials compatibility
  const materials = [
    "Carbon Steel",
    "Alloy Steel",
    "Die Steel",
    "Tempered Steel",
    "Stainless Steels",
    "Gray Cast Iron",
    "Alloyed Cast Iron",
    "Aluminum Alloys",
    "Copper Alloys",
    "Magnesium Alloys",
    "Zinc Alloys",
    "Titanium Alloys",
    "Heat-Resistant Superalloys",
    "Carbon Fiber Composites",
  ]

  // Primary processes
  const primaryProcesses = [
    "High-Volume Production Drilling",
    "Deep Hole Manufacturing",
    "Large-Scale Boring",
    "High-Precision Hole-Making",
    "Hard Material Drilling",
    "Through-Hole Creation",
    "Flat-Bottom Hole Drilling",
    "Core Removal Operations",
    "Precision Centering",
    "Multi-Diameter Processing",
  ]

  // Applications
  const applications = [
    "Mold Coolant Channels",
    "Aerospace Structural Parts",
    "Energy Sector Components",
    "Machine Bases",
    "Engine Blocks",
    "Large Hydraulic Manifolds",
    "Hardened Steel Molds",
    "Dies and Tooling",
    "Superalloy Components",
    "Precision Machinery Parts",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Modular QuickDrill Technology",
      description:
        "Innovative modular structure with quick-change cutting heads (Ø8~Ø26mm) featuring internal coolant holes for fast precision drilling through holes with minimal setup time.",
      color: "border-red-600",
    },
    {
      title: "Interchangeable Blade System",
      description:
        "Swordtooth system with interchangeable blades (Ø12~Ø33.5mm) featuring 1.5-3mm grinding allowance, radial tooth profiles, and optimized spiral design for superior precision and cost-effectiveness.",
      color: "border-blue-600",
    },
    {
      title: "Advanced Cooling & Chip Control",
      description:
        "Internal cooling hole design ensures sufficient coolant delivery during drilling operations, promoting longer tool life and enhanced chip removal for smooth operation.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "QuickDrill Range", value: "Ø8~Ø26mm" },
    { label: "Swordtooth Blade Range", value: "Ø12~Ø33.5mm" },
    { label: "Maximum Depth Ratio", value: "1.5D, 3D, 5D, 8D, 12D" },
    { label: "Grinding Allowance", value: "1.5mm-3mm" },
    { label: "Structure Type", value: "Modular with quick-change head" },
    { label: "Cooling System", value: "Internal coolant holes" },
    { label: "Blade Design", value: "Radial tooth profiles" },
    { label: "Spiral Design", value: "Optimized for soft materials" },
    { label: "Tool Compatibility", value: "Various tool handle systems" },
    { label: "Edge Treatment", value: "Enhanced for extended life" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-white text-gray-900">
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Hole Machining Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Drill Point and Drill Pipe System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the MZG Drill Point and Drill Pipe portfolio, featuring innovative modular drilling solutions. This system combines <strong>QuickDrill cutting head technology</strong>, <strong>Swordtooth interchangeable blade systems</strong>, and <strong>specialized hollow drilling solutions</strong> to deliver exceptional precision, efficiency, and cost-effectiveness in modern hole machining applications.
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
                    src="/images/k22-1.png"
                    alt="Professional MZG Drill Point and Drill Pipe System Collection"
                    width={563}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
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
                      The performance of the MZG Drill Point and Drill Pipe system is defined by its <strong>modular design flexibility, precision engineering, and cost-effective operation</strong>. The <strong>QuickDrill cutting head</strong> features a modular structure with quick-change capability, enabling fast precision drilling through holes with diameters from Ø8~Ø26mm. This innovative design incorporates internal coolant holes for optimal thermal management and chip evacuation.
                  </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The <strong>Swordtooth Drill Shank</strong> system revolutionizes drilling economics through its <strong>interchangeable blade technology</strong>. With blade diameters ranging from 12-33.5mm and depth capabilities up to 12 times diameter, the system features a reserved grinding allowance of 1.5-3mm for extended tool life. The radial tooth profile design ensures high precision and strength while enabling rapid blade changes without removing the tool holder from the machine.
                  </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The system's <strong>optimized spiral design</strong> improves chip control for soft materials, while enhanced edge treatment significantly extends machining life. Internal cooling holes ensure sufficient coolant delivery, promoting longer tool life and smoother chip removal across all drilling operations.
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
                        <strong>QuickDrill Range:</strong> Ø8~Ø26mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Swordtooth Range:</strong> Ø12~Ø33.5mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Depth Capability:</strong> Up to 12D
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Modular Design:</strong> Quick-change heads
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Cooling:</strong> Internal coolant holes
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
            <div className="flex items-center mb-12">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Specifications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="p-6 border-b border-gray-100/50">
                  <h3 className="text-xl font-semibold text-gray-900">Technical Specifications</h3>
                </div>
                <div className="p-6 space-y-6">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className={`border-l-4 ${spec.color} pl-6 py-3 bg-gray-50/50 rounded-r-xl hover:bg-gray-50 transition-colors duration-200`}>
                      <h4 className="font-semibold text-base mb-2 text-gray-900">{spec.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="p-6 border-b border-gray-100/50">
                  <h3 className="text-xl font-semibold text-gray-900">Specifications</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                  {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 px-4 bg-white rounded-xl hover:bg-gray-50/30 transition-colors duration-200">
                      <span className="font-medium text-sm text-gray-700">{spec.label}:</span>
                        <span className="text-sm text-right text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                  </div>
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
                    <h3 className="text-lg font-medium text-blue-800">Insert Selection & Coatings</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        Choose appropriate insert grades (WCMX, SPMG, SOMT, XOMT) and coatings (TIN, TIALN, Nano) based on material and application. <strong>Enhanced edge treatments</strong> provide robust barrier against abrasion and wear.
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
                    <h3 className="text-lg font-medium text-yellow-800">EZ Guide Sleeve System</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        <strong>EZ Guide Sleeve</strong> allows fine-tuning of diameter (+0.6~-0.2 mm) and center height (+0.3~-0.2 mm) for micro-adjustments and machine variance compensation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Scenarios */}
          <div className="mb-16">
            <div className="flex items-center mb-12">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Materials Compatibility */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/50 h-full hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                    <Settings className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Materials Compatibility</h3>
                </div>
                <div className="space-y-1">
                  {materials.map((material, index) => (
                    <div key={index} className="flex items-center py-1 group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{material}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Processes */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/50 h-full hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                    <Tool className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Primary Processes</h3>
                </div>
                <div className="space-y-1">
                  {primaryProcesses.map((process, index) => (
                    <div key={index} className="flex items-center py-1 group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{process}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/50 h-full hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                    <Info className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Applications</h3>
                </div>
                <div className="space-y-1">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center py-1 group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{application}</span>
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
                  title: "Modular Quick-Change System",
                  description: "QuickDrill cutting heads enable fast precision drilling with modular structure and quick-change capability for minimal setup time.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Engineering",
                  description: "Radial tooth profile design ensures high precision and strength while maintaining excellent hole quality and dimensional accuracy.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Cost-Effective Blade System",
                  description: "Interchangeable blades with 1.5-3mm grinding allowance reduce tool costs while enabling rapid blade changes without machine removal.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Tool Life",
                  description: "Enhanced edge treatment and internal cooling design significantly improve machining life and ensure smoother chip removal.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Compatibility",
                  description: "Handle design suitable for various tool handle systems with same tool holder accommodating different diameter blades.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Optimized Chip Control",
                  description: "Optimized spiral design improves chip control for soft materials while maintaining excellent drilling performance.",
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
                The main function of the MZG Drill Point and Drill Pipe system is <strong>to provide innovative modular drilling solutions that combine precision, efficiency, and cost-effectiveness</strong>. Through QuickDrill cutting head technology and Swordtooth interchangeable blade systems, it empowers manufacturers to achieve fast precision drilling, reduce tool costs through blade interchangeability, and maintain high accuracy through radial tooth profile design across diverse drilling applications.
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
                
                // 定义同目录下的所有分类
                const allHoleMachiningCategories = [
                {
                  title: "Fast Drilling",
                    image: getRandomProductImage(),
                    description: "高效快速钻孔解决方案",
                  url: "/standard-tools/hole-machining/fast-drilling",
                },
                {
                    title: "Rough Boring",
                    image: getRandomProductImage(),
                    description: "粗镗刀具，大直径孔粗加工",
                    url: "/standard-tools/hole-machining/rough-boring",
                },
                {
                    title: "Fine Boring",
                    image: getRandomProductImage(),
                    description: "精镗刀具，高精度孔加工",
                    url: "/standard-tools/hole-machining/fine-boring",
                },
                ];
                
                // 随机选择最多5个分类（排除当前分类）
                const shuffled = [...allHoleMachiningCategories].sort(() => 0.5 - Math.random());
                const selectedCategories = shuffled.slice(0, Math.min(5, allHoleMachiningCategories.length));
                
                return selectedCategories.map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Hole Machining" url={category.url} />
                ));
              })()}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Modular Drilling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal MZG Drill Point and Drill Pipe System configuration for your specific drilling applications. From QuickDrill cutting heads to Swordtooth blade systems, we provide comprehensive modular solutions for maximum precision, efficiency, and cost-effectiveness.
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