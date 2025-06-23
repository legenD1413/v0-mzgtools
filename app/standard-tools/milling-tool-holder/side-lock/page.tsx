import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function SideLockPage() {
  // Product data based on the Side Lock Tool Holder system
  const products = [
    {
      id: "side-lock-001",
      name: "BT-SLN Side Lock End Mill Holder",
      image: "/images/c78-1.png",
      description: "Features an H5 inner hole tolerance, side locking screws, and central cooling. Dynamically balanced to G6.3, 8000RPM (higher speeds on request).",
      series: "BT-SLN Series",
      tolerance: "Inner Bore: H5",
      balance: "G6.3 @ 8000 RPM",
      cooling: "Central Cooling",
      locking: "Side Locking Screws",
      application: "Features an H5 inner hole tolerance, side locking screws, and central cooling",
      pageNumber: "C78",
    },
    {
      id: "side-lock-002",
      name: "NT-SLN Milling Machine Tool Holder",
      image: "/images/c79-1.png",
      description: "Features an H5 inner hole tolerance, side locking screws, and central cooling. Dynamically balanced to G6.3, 8000RPM (higher speeds on request).",
      series: "NT-SLN Series",
      tolerance: "Inner Bore: H5",
      balance: "G6.3 @ 8000 RPM",
      cooling: "Central Cooling",
      locking: "Side Locking Screws",
      application: "Features an H5 inner hole tolerance, side locking screws, and central cooling",
      pageNumber: "C79",
    },
    {
      id: "side-lock-003",
      name: "DAT-SLN Milling Machine Tool Holder",
      image: "/images/c80-1.png",
      description: "Features an H5 inner hole tolerance. The shank diameter's dynamic balance complies with DIN-1835-B (h6~h7 tolerance); includes side locking screws. Dynamically balanced to G6.3, 8000RPM (higher speeds on request).",
      series: "DAT-SLN Series",
      tolerance: "Inner Bore: H5, Shank: h6~h7",
      balance: "G6.3 @ 8000 RPM",
      standard: "DIN-1835-B",
      locking: "Side Locking Screws",
      application: "Features an H5 inner hole tolerance with DIN-1835-B compliant dynamic balance",
      pageNumber: "C80",
    },
    {
      id: "side-lock-004",
      name: "HSK-SLN Milling Machine Tool Holder",
      image: "/images/c81-1.png",
      description: "Features an H5 inner hole tolerance. The shank diameter's dynamic balance complies with DIN-1835-B (h6~h7 tolerance); includes side locking screws. Dynamically balanced to G6.3, 8000RPM (higher speeds on request).",
      series: "HSK-SLN Series",
      tolerance: "Inner Bore: H5, Shank: h6~h7",
      balance: "G6.3 @ 8000 RPM",
      standard: "DIN-1835-B",
      locking: "Side Locking Screws",
      application: "Features an H5 inner hole tolerance with DIN-1835-B compliant dynamic balance",
      pageNumber: "C81",
    },
    {
      id: "side-lock-005",
      name: "Small Diameter Side Fixed Extended Connecting Rod",
      image: "/images/c82-1.png",
      description: "Extension rods featuring side locking, available for various diameters.",
      series: "Extension Series",
      locking: "Side Locking",
      feature: "Various Diameters Available",
      application: "Extension rods featuring side locking, available for various diameters",
      pageNumber: "C82",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Positive Drive Security",
      description:
        "Direct mechanical engagement with tool's Weldon flat eliminates rotation and pull-out, providing unparalleled process security for heavy cutting operations.",
    },
    {
      icon: "Target",
      title: "High Rigidity & Stability",
      description:
        "Immense side locking pressure creates extremely rigid connection, minimizing tool deflection and dampening vibration for dimensional accuracy.",
    },
    {
      icon: "Zap",
      title: "High-Speed Capability",
      description:
        "Standard G6.3 dynamic balance at 8000 RPM enables high-speed operation while maintaining stability and surface finish quality.",
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
    "Aerospace Industry",
    "Automotive Manufacturing",
    "Energy Sector",
    "Heavy Machinery",
    "CNC Machining Centers",
    "Boring Mills",
    "Heavy-Duty Milling",
  ]

  // Side lock operations
  const sideLockOperations = [
    "Heavy Roughing (Primary)",
    "Slotting Operations",
    "Pocketing",
    "Side Milling",
    "Contouring",
    "U-Drill Operations",
    "Deep Cutting",
    "High-Torque Applications",
  ]

  // Compatible equipment
  const compatibleEquipment = [
    "CNC Vertical Machining Centers",
    "CNC Horizontal Machining Centers",
    "Heavy-Duty Milling Machines",
    "Boring Mills",
    "Portal Milling Machines",
    "Multi-Axis Machining Centers",
    "High-Power Spindles",
    "Industrial Milling Equipment",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Precision Manufacturing Standards",
      description:
        "Inner bore tolerance maintained at tight H5 for snug tool fit, with standard G6.3 dynamic balance at 8000 RPM for high-speed capability.",
      color: "border-red-600",
    },
    {
      title: "Positive Locking Mechanism",
      description:
        "Side-mounted screws press directly against tool's Weldon flat, creating mechanically positive lock that eliminates rotation and pull-out.",
      color: "border-blue-600",
    },
    {
      title: "Advanced Cooling Integration",
      description:
        "Central cooling system compliant with DIN69871-AD delivers high-pressure coolant directly to cutting zone for optimal performance.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Holder Series", value: "BT-SLN, DAT-SLN, NT-SLN, HSK-SLN" },
    { label: "Inner Bore Tolerance", value: "H5" },
    { label: "Dynamic Balance", value: "G6.3 @ 8000 RPM" },
    { label: "Interface Types", value: "BT, DAT, NT, HSK" },
    { label: "Cooling System", value: "Central Cooling (DIN69871-AD)" },
    { label: "Tool Shank Standard", value: "DIN-1835-B" },
    { label: "Clamping Method", value: "Side Locking Screws" },
    { label: "Pull Rod (NT)", value: "Metric/Imperial confirmation required" },
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
                  Side Lock Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the Side Lock Tool Holder system, a workhorse of the milling industry. This holder type is universally recognized for its straightforward, powerful, and highly reliable method of clamping cutting tools, particularly end mills. Its design centers on using side-mounted screws to press directly against a ground flat on the tool's shank.
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
                    src="/images/side-lock-hero.png"
                    alt="Professional Side Lock Tool Holder System Collection"
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
                    The performance of a Side Lock Tool Holder is defined by its <strong>exceptional clamping strength, rigidity, and reliability under demanding machining conditions</strong>. The direct mechanical engagement of the locking screw with the tool's flat eliminates any possibility of the tool rotating within the holder or being pulled out during heavy axial cuts. This powerful, non-slip grip provides an <strong>unparalleled level of process security</strong>, especially in roughing operations where cutting forces can be unpredictable and extreme.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The immense pressure exerted by the side locking screw creates an <strong>extremely rigid connection between the holder and the tool</strong>. This stability minimizes tool deflection and dampens vibration, which is crucial for maintaining dimensional accuracy during aggressive material removal. The holder's <strong>inner bore tolerance is maintained at a tight H5</strong>, ensuring a snug and accurate fit for the tool shank before the locking screw is even engaged.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    To meet the needs of modern CNC machines, these holders are engineered with a standard <strong>dynamic balance of G6.3 at 8000 RPM</strong>. The integration of <strong>central cooling (conforming to DIN69871-AD)</strong> delivers high-pressure coolant directly through the center of the holder to the cutting zone, efficiently cooling the cutting edges and significantly extending tool life.
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
                        <strong>Tolerance:</strong> Inner Bore H5
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Balance:</strong> G6.3 @ 8000 RPM
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
                        <strong>Interfaces:</strong> BT, DAT, NT, HSK
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> Heavy Roughing & High-Torque
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
                    <h3 className="text-lg font-medium text-blue-800">Weldon Flat Alignment</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        It is crucial to confirm the position of the <strong>side locking screw aligns with the specific tool's Weldon flat</strong>, as variations exist between different tool manufacturers and standards.
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
                    <h3 className="text-lg font-medium text-yellow-800">Tool Shank Standards</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Tool shanks must conform to standards like <strong>DIN-1835-B</strong> to ensure proper fit and balance. NT series requires confirmation of pull rod screw specification (metric or imperial).
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

              {/* Side Lock Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Side Lock Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {sideLockOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Equipment */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Compatible Equipment
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {compatibleEquipment.map((equipment, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{equipment}</span>
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
                  title: "Positive Drive Security",
                  description: "Direct mechanical engagement eliminates tool rotation and pull-out, providing unparalleled process security for heavy operations.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High Rigidity Connection",
                  description: "Immense side locking pressure creates extremely rigid connection, minimizing deflection and dampening vibration.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Foundation",
                  description: "H5 inner bore tolerance ensures snug tool fit with excellent initial positioning and support for consistent results.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Speed Capability",
                  description: "G6.3 dynamic balance at 8000 RPM enables high-speed operation while protecting spindle and reducing noise.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Effective Tool Cooling",
                  description: "Central cooling system delivers high-pressure coolant directly to cutting zone for extended tool life.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Heavy-Duty Performance",
                  description: "Designed for aggressive material removal with exceptional stability under unpredictable cutting forces.",
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
                The main function of the Side Lock Tool Holder is <strong>to provide a supremely secure, rigid, and positive-drive connection for milling tools equipped with a Weldon flat shank</strong>. It is specifically engineered to excel in high-torque and heavy-duty machining operations, guaranteeing tool retention and stability when material removal rates and cutting forces are at their highest.
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
                
                // 定义同目录下的所有分类（milling-tool-holder目录下的其他分类，排除当前的side-lock）
                const allMillingToolHolderCategories = [
                {
                  title: "Face Milling",
                    image: getRandomProductImage(),
                    description: "面铣刀夹头，用于大面积表面加工",
                  url: "/standard-tools/milling-tool-holder/face-milling",
                },
                {
                  title: "Morse Taper",
                    image: getRandomProductImage(),
                    description: "莫氏锥度夹头，自锁式锥度系统",
                  url: "/standard-tools/milling-tool-holder/morse-taper",
                },
                  {
                    title: "Drill Chuck",
                    image: getRandomProductImage(),
                    description: "钻夹头，精密钻孔作业系统",
                    url: "/standard-tools/milling-tool-holder/drill-chuck",
                  },
                  {
                    title: "ER Tool Holder",
                    image: getRandomProductImage(),
                    description: "ER夹头，多规格刀具夹持系统",
                    url: "/standard-tools/milling-tool-holder/er-tool-holder",
                  },
                  {
                    title: "Power Tool Holder",
                    image: getRandomProductImage(),
                    description: "强力夹头，重载高扭矩应用",
                    url: "/standard-tools/milling-tool-holder/power-tool-holder",
                  },
                  {
                    title: "Tapping Tool Holder",
                    image: getRandomProductImage(),
                    description: "攻丝夹头，专用螺纹加工夹具",
                    url: "/standard-tools/milling-tool-holder/tapping-tool-holder",
                  },
                {
                  title: "OZ Tool Holder",
                    image: getRandomProductImage(),
                    description: "OZ夹头，重型工件加工夹具",
                  url: "/standard-tools/milling-tool-holder/oz-tool-holder",
                },
                {
                    title: "Shrink Fit",
                    image: getRandomProductImage(),
                    description: "热装夹头，高精度收缩配合系统",
                    url: "/standard-tools/milling-tool-holder/sr-shrink-fit",
                  },
                  {
                    title: "Hydraulic Chuck",
                    image: getRandomProductImage(),
                    description: "液压夹头，超精密液压夹持技术",
                    url: "/standard-tools/milling-tool-holder/hm-hydraulic",
                  },
                  {
                    title: "High-Speed Chuck",
                    image: getRandomProductImage(),
                    description: "高速夹头，高速加工专用夹具",
                    url: "/standard-tools/milling-tool-holder/sk-high-speed",
                  },
                  {
                    title: "Pull Back System",
                    image: getRandomProductImage(),
                    description: "拉爪系统，先进拉回机构夹持",
                    url: "/standard-tools/milling-tool-holder/ads-pull-back",
                  }
                ];
                
                // 随机选择最多5个分类
                const shuffled = [...allMillingToolHolderCategories].sort(() => 0.5 - Math.random());
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
              <h2 className="text-3xl font-bold mb-4">Need Powerful Side Lock Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal Side Lock Tool Holder configuration for your specific heavy roughing, high-torque applications, and demanding machining operations. From Weldon flat alignment to cooling requirements, we provide comprehensive solutions for maximum process security.
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