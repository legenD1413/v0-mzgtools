import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function ScrewedModularToolHoldersPage() {
  // Product data based on the Screwed / Modular Tool Holders system
  const products = [
    {
      id: "smth-001",
      name: "Standard Modular Tool Holder - M8",
      image: "/images/modular-holder-m8.png",
      description: "Compact modular holder for small to medium applications",
      series: "Standard Series",
      threadSpec: "M8",
      shankDiameter: "16-20mm",
      application: "Small to medium machining",
      features: "High rigidity connection",
      pageNumber: "MTH-M8",
    },
    {
      id: "smth-002",
      name: "Standard Modular Tool Holder - M10",
      image: "/images/modular-holder-m10.png",
      description: "Medium-sized holder for general machining applications",
      series: "Standard Series",
      threadSpec: "M10",
      shankDiameter: "20-25mm",
      application: "General machining",
      features: "Versatile connection",
      pageNumber: "MTH-M10",
    },
    {
      id: "smth-003",
      name: "Standard Modular Tool Holder - M12",
      image: "/images/modular-holder-m12.png",
      description: "Heavy-duty holder for demanding applications",
      series: "Standard Series",
      threadSpec: "M12",
      shankDiameter: "25-32mm",
      application: "Heavy-duty machining",
      features: "Maximum strength",
      pageNumber: "MTH-M12",
    },
    {
      id: "smth-004",
      name: "Long-Reach Modular Holder",
      image: "/images/long-reach-holder.png",
      description: "Extended length holder for deep cavity machining",
      series: "Long-Reach Series",
      threadSpec: "M10/M12",
      length: "Extended length",
      application: "Deep cavity machining",
      features: "Long reach capability",
      pageNumber: "LR-MTH",
    },
    {
      id: "smth-005",
      name: "Through-Coolant Modular Holder",
      image: "/images/through-coolant-holder.png",
      description: "Internal coolant channels for optimal cooling",
      series: "Coolant Series",
      threadSpec: "M10/M12",
      cooling: "Through-coolant",
      application: "High-speed machining",
      features: "Internal coolant delivery",
      pageNumber: "TC-MTH",
    },
    {
      id: "smth-006",
      name: "Square Shoulder End Mill Head",
      image: "/images/square-shoulder-head.png",
      description: "Precision head for 90-degree shoulder milling",
      series: "Cutter Head",
      cutterType: "Square Shoulder",
      insertType: "CCMT, WDMT",
      application: "Shoulder milling",
      features: "90-degree precision",
      pageNumber: "SSH-HEAD",
    },
    {
      id: "smth-007",
      name: "Ball Nose End Mill Head",
      image: "/images/ball-nose-head.png",
      description: "Spherical head for 3D contouring and surfacing",
      series: "Cutter Head",
      cutterType: "Ball Nose",
      insertType: "CCMT, WDMT",
      application: "3D contouring",
      features: "Spherical geometry",
      pageNumber: "BN-HEAD",
    },
    {
      id: "smth-008",
      name: "High-Feed Milling Head",
      image: "/images/high-feed-head.png",
      description: "Specialized head for maximum material removal rates",
      series: "Cutter Head",
      cutterType: "High-Feed",
      insertType: "Specialized HFM",
      application: "High MRR operations",
      features: "Maximum efficiency",
      pageNumber: "HF-HEAD",
    },
    {
      id: "smth-009",
      name: "Inverted Countersinking Head",
      image: "/images/inverted-countersink-head.png",
      description: "Specialized head for back-chamfering operations",
      series: "Cutter Head",
      cutterType: "Inverted Countersink",
      insertType: "CCMT",
      application: "Back-chamfering",
      features: "No spindle reversal",
      pageNumber: "IC-HEAD",
    },
    {
      id: "smth-010",
      name: "Modular System Accessories",
      image: "/images/modular-accessories.png",
      description: "Complete accessory kit including torque wrenches and screws",
      series: "Accessories",
      components: "Torque wrenches, screws",
      threadSpec: "M8/M10/M12",
      application: "System maintenance",
      features: "Complete kit",
      pageNumber: "MOD-ACC",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "High Rigidity and Stability",
      description:
        "Precision-engineered thread provides strong, secure connection between holder and cutter head, minimizing vibration during high-load cutting for consistent performance.",
    },
    {
      icon: "Layers",
      title: "Exceptional Modularity and Flexibility",
      description:
        "Single modular tool holder pairs with vast array of cutter heads - from square shoulder to ball nose end mills, drastically reducing setup times and increasing uptime.",
    },
    {
      icon: "Target",
      title: "Outstanding Machining Accuracy",
      description:
        "Manufacturing precision of threads and mating surfaces ensures excellent concentricity and minimal run-out, critical for finishing operations and tight tolerances.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Layers":
        return <Layers className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Application industries
  const applicationIndustries = [
    "Mold and Die Manufacturing",
    "Aerospace Industry",
    "General Machining and Job Shops",
    "Automotive Manufacturing",
    "Medical Device Manufacturing",
    "Energy Sector",
    "Precision Engineering",
    "Tool and Die Making",
  ]

  // Application processing types
  const processingTypes = [
    "Face Milling",
    "Shoulder Milling",
    "Profile and Copy Milling",
    "Chamfering and Countersinking",
    "High-Feed Milling (HFM)",
    "Slotting and Plunging",
    "3D Contouring",
    "Deep Cavity Machining",
  ]

  // System advantages
  const systemAdvantages = [
    "Economic Efficiency - Replace heads only",
    "Process Optimization - Best tool for job",
    "Inventory Consolidation - Fewer complete tools",
    "Quick Tool Changes - Reduced setup times",
    "Versatile Applications - Multiple operations",
    "High Precision - Excellent concentricity",
    "Cost-Effective - Lower long-term costs",
    "Simplified Management - Easy tool control",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Precision Connection Interface",
      description:
        "Thread specifications (M8, M10, M12, M16) define size and strength of connection, ensuring compatibility between holders and heads within same system size.",
      color: "border-red-600",
    },
    {
      title: "Advanced Tool Holder Design",
      description:
        "Available in various lengths, shank diameters for different machine spindle tapers (BT, SK, HSK), manufactured from high-tensile alloy steel for maximum durability.",
      color: "border-blue-600",
    },
    {
      title: "Specialized Cutter Heads",
      description:
        "Each interchangeable head features specific cutting diameter, insert types (CCMT, WDMT), optimized geometry for applications like high-feed, shoulder, or profile milling.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Thread Specifications", value: "M8, M10, M12, M16" },
    { label: "Shank Diameters", value: "16-32mm" },
    { label: "Spindle Tapers", value: "BT, SK, HSK" },
    { label: "Holder Material", value: "High-Tensile Alloy Steel" },
    { label: "Insert Types", value: "CCMT, WDMT, HFM" },
    { label: "Cooling Options", value: "Through-coolant Available" },
    { label: "Connection Type", value: "Precision Thread" },
    { label: "Accessories", value: "Torque Wrenches, Screws" },
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
                  Professional Modular Tool System Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Screwed / Modular Tool Holders
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Screwed / Modular Tool Holders represent a highly advanced and flexible tooling system. The fundamental concept separates the tool into standardized tool holder (shank) and interchangeable, screw-on cutter heads, offering significant advantages in cost-effectiveness, versatility, and performance across wide range of milling applications.
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
                    src="/images/modular-tool-holders-hero.png"
                    alt="Professional Screwed / Modular Tool Holders System"
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
                    The core of the modular system's performance lies in its <strong>precision-engineered connection interface</strong>. The robust thread provides a strong, secure, and stable connection between the holder and cutter head, minimizing vibration during high-load cutting and ensuring high machining accuracy.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    <strong>Exceptional modularity and flexibility</strong> is the most significant performance attribute. A single modular tool holder can be paired with vast array of cutter heads - square shoulder end mills, ball nose end mills, radius mills, high-feed cutters, and chamfering tools.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>manufacturing precision of threads and mating surfaces</strong> ensures excellent concentricity and minimal run-out, critical for finishing operations and machining components with tight tolerances.
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
                        <strong>Thread Specs:</strong> M8, M10, M12, M16
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Shank Diameter:</strong> 16-32mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Types:</strong> CCMT, WDMT
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Modular milling operations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>System:</strong> Interchangeable heads
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
                      {product.threadSpec && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Thread Spec:</span>
                          <span className="text-gray-900 text-xs">{product.threadSpec}</span>
                        </div>
                      )}
                      {product.shankDiameter && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Shank Diameter:</span>
                          <span className="text-gray-900 text-xs">{product.shankDiameter}</span>
                        </div>
                      )}
                      {product.length && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Length:</span>
                          <span className="text-gray-900 text-xs">{product.length}</span>
                        </div>
                      )}
                      {product.cutterType && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Cutter Type:</span>
                          <span className="text-gray-900 text-xs">{product.cutterType}</span>
                        </div>
                      )}
                      {product.insertType && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Insert Type:</span>
                          <span className="text-gray-900 text-xs">{product.insertType}</span>
                        </div>
                      )}
                      {product.cooling && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Cooling:</span>
                          <span className="text-gray-900 text-xs">{product.cooling}</span>
                        </div>
                      )}
                      {product.components && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Components:</span>
                          <span className="text-gray-900 text-xs">{product.components}</span>
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

              {/* System Advantages */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  System Advantages
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {systemAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0 mt-1.5"></div>
                      <span className="text-sm">{advantage}</span>
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
                        <strong>Face Milling:</strong> Using high-feed or large-diameter shoulder milling heads for efficient material removal operations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Shoulder Milling:</strong> Creating precise 90-degree shoulders with square shoulder end mill heads for accurate machining.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Profile and Copy Milling:</strong> Utilizing ball nose and radius (torus) heads for 3D contouring and surfacing operations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Chamfering and Countersinking:</strong> Employing dedicated chamfering and inverted countersinking heads for edge preparation.
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
                        <strong>Enhanced Productivity</strong> with specialized heads streamlining operations
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Economic Efficiency</strong> replacing only inexpensive cutter heads
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Process Optimization</strong> selecting absolute best tool for each job
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Inventory Consolidation</strong> reducing complete tools needed in stock
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
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Economic Efficiency",
                  description: "When cutting edge is worn or tool is damaged, only the relatively inexpensive cutter head needs replacement, not the entire expensive tool holder assembly, significantly reducing long-term tooling costs.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Process Optimization",
                  description: "Allows engineers and machinists to select the absolute best tool for the job, matching optimal head geometry, insert grade, and holder length to specific features, maximizing performance and tool life.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Inventory Consolidation",
                  description: "Drastically reduces the number of complete tools a workshop needs to keep in inventory and manage in CNC machine tool carousel, leading to lower carrying costs and simplified tool management.",
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
                  title: "Corn / Roughing",
                  image: "/images/corn-roughing.jpg",
                  description: "Heavy-duty tools for high material removal rates",
                  url: "/standard-tools/clamp-type-milling/corn-roughing",
                },
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
              <h2 className="text-3xl font-bold mb-4">Need Professional Modular Tool Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you design the optimal Screwed / Modular Tool Holder configuration for your specific applications. From mold manufacturing to aerospace machining, we provide comprehensive modular solutions that maximize efficiency, reduce costs, and simplify tool management across your entire operation.
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