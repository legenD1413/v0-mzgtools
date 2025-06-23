import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function FilletCornerRoundingPage() {
  // Product data based on the Clamp Type Fillet / Corner Rounding Milling Cutter system
  const products = [
    {
      id: "fillet-001",
      name: "RPMT Round Insert Corner Rounding Cutter",
      image: "/images/rpmt-corner-rounding.png",
      description: "Round indexable insert for multiple corner usage and extended tool life",
      insertType: "RPMT",
      cornerRadius: "R1-R20mm",
      application: "External corner rounding, multiple indexing positions",
      pageNumber: "FCR-01",
    },
    {
      id: "fillet-002",
      name: "RCMT Round Insert Fillet Milling Cutter",
      image: "/images/rcmt-fillet-cutter.png",
      description: "Round carbide insert with advanced coating for high-speed machining",
      insertType: "RCMT",
      cornerRadius: "R2-R25mm",
      application: "Internal fillet creation, concave radius machining",
      pageNumber: "FCR-02",
    },
    {
      id: "fillet-003",
      name: "HSK Modular Corner Rounding System",
      image: "/images/hsk-corner-rounding.png",
      description: "High-speed modular system with superior rigidity and runout accuracy",
      interface: "HSK40A/50A/63A",
      cornerRadius: "R3-R30mm",
      application: "High-speed corner rounding operations",
      pageNumber: "FCR-03",
    },
    {
      id: "fillet-004",
      name: "BT Shank Fillet Milling Cutter",
      image: "/images/bt-fillet-cutter.png",
      description: "Standard BT interface with robust clamping system",
      interface: "BT30/40/50",
      cornerRadius: "R1-R15mm",
      application: "General purpose fillet and corner rounding",
      pageNumber: "FCR-04",
    },
    {
      id: "fillet-005",
      name: "Weldon Shank Corner Rounding Cutter",
      image: "/images/weldon-corner-rounding.png",
      description: "Cylindrical shank with Weldon flat for secure clamping",
      interface: "Weldon Flat",
      cornerRadius: "R0.5-R10mm",
      application: "Small radius corner rounding, precision work",
      pageNumber: "FCR-05",
    },
    {
      id: "fillet-006",
      name: "TiAlN Coated High-Performance Cutter",
      image: "/images/tialn-fillet-cutter.png",
      description: "Advanced TiAlN coating for extended tool life and thermal stability",
      coating: "TiAlN PVD",
      cornerRadius: "R2-R20mm",
      application: "High-temperature alloys, stainless steel machining",
      pageNumber: "FCR-06",
    },
    {
      id: "fillet-007",
      name: "AlCrN Coated Corner Rounding System",
      image: "/images/alcrn-corner-system.png",
      description: "AlCrN coating for superior wear resistance in difficult materials",
      coating: "AlCrN PVD",
      cornerRadius: "R1.5-R25mm",
      application: "Titanium, Inconel, and superalloy machining",
      pageNumber: "FCR-07",
    },
    {
      id: "fillet-008",
      name: "Multi-Radius Indexable Cutter Set",
      image: "/images/multi-radius-set.png",
      description: "Complete set with multiple radius inserts for versatile applications",
      insertType: "RPMT/RCMT",
      cornerRadius: "R1, R2, R3, R5, R8, R10mm",
      application: "Production flexibility, multiple radius requirements",
      pageNumber: "FCR-08",
    },
    {
      id: "fillet-009",
      name: "Heavy-Duty Aerospace Corner Cutter",
      image: "/images/aerospace-corner-cutter.png",
      description: "Specialized for aerospace structural components and critical parts",
      material: "Titanium/Aluminum",
      cornerRadius: "R5-R50mm",
      application: "Wing spars, ribs, landing gear components",
      pageNumber: "FCR-09",
    },
    {
      id: "fillet-010",
      name: "Automotive Engine Block Fillet Cutter",
      image: "/images/automotive-fillet-cutter.png",
      description: "Optimized for automotive engine block and transmission case machining",
      material: "Cast Iron/Aluminum",
      cornerRadius: "R2-R15mm",
      application: "Engine blocks, transmission cases, manifolds",
      pageNumber: "FCR-10",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Target",
      title: "High-Precision Machining",
      description:
        "Precision-ground inserts and high-rigidity cutter body ensure excellent surface finish and accurate corner radius, often achieving mirror-like finish without secondary operations.",
    },
    {
      icon: "Zap",
      title: "Efficiency and Economy",
      description:
        "Indexable design allows quick replacement of worn cutting edges, dramatically reducing machine downtime. Multi-corner insert design significantly lowers cost per cutting edge.",
    },
    {
      icon: "Shield",
      title: "Stability and Durability",
      description:
        "Robust Torx screw clamping system ensures secure insert retention under heavy cutting forces, preventing micro-movements and guaranteeing process stability.",
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
    "Heavy Machinery",
    "General Engineering",
    "Machine Tool Manufacturing",
    "Precision Machining",
    "Structural Components",
  ]

  // Milling operations
  const millingOperations = [
    "External Corner Rounding",
    "Internal Fillet Milling",
    "Contour Milling",
    "Groove Milling",
    "Deburring Operations",
    "Surface Finishing",
    "Complex Surface Machining",
    "High-Volume Production",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "High-Strength Aluminum",
    "Titanium Alloys",
    "Nickel-Based Superalloys",
    "Stainless Steel",
    "Carbon Steel",
    "Cast Iron",
    "Tool Steel",
    "Copper Alloys",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Precision Manufacturing Standards",
      description:
        "Cutter body made from high-strength alloy steel with precisely machined insert pockets ensuring minimal vibration and deflection even under aggressive cutting conditions.",
      color: "border-red-600",
    },
    {
      title: "Advanced Coating Technology",
      description:
        "PVD TiAlN or AlCrN coatings provide exceptional wear resistance and thermal stability, allowing higher cutting speeds and extended tool life.",
      color: "border-blue-600",
    },
    {
      title: "Versatile Interface Systems",
      description:
        "Available in HSK, BT, Weldon and other interface types. Modular systems provide superior rigidity and runout accuracy for high-speed machining.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Insert Type", value: "RPMT, RCMT (Round Indexable Inserts)" },
    { label: "Corner Radius Range", value: "R0.5-R50mm" },
    { label: "Coating Type", value: "TiAlN, AlCrN PVD Coating" },
    { label: "Interface Type", value: "HSK, BT, Weldon, Straight Shank" },
    { label: "Clamping Method", value: "Torx Screw Clamping System" },
    { label: "Cutter Body Material", value: "High-Strength Alloy Steel" },
    { label: "Compatible Materials", value: "Steel, Stainless Steel, Aluminum, Titanium" },
    { label: "Machining Accuracy", value: "±0.01mm" },
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
                  Professional Milling Tool Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Clamp Type Fillet / Corner Rounding Milling Cutter
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Tool Machine will provide a comprehensive introduction to the Clamp Type Fillet / Corner Rounding Milling Cutter. This tool is a highly specialized and indispensable part of modern precision machining, designed for creating accurate and smooth radial surfaces on workpiece edges.
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
                    src="/images/fillet-corner-rounding-hero.png"
                    alt="Professional Clamp Type Fillet Corner Rounding Milling Cutter System"
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
                    The performance of an indexable fillet/corner rounding milling cutter is defined by its <strong>precision, efficiency, and reliability</strong> in creating accurate and smooth radial surfaces on workpiece edges. The primary performance metric is the ability to generate a highly accurate radius with an excellent surface finish. This is achieved through the synergy of a <strong>high-rigidity cutter body and precision-ground inserts</strong>.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The cutter body, typically made from high-strength alloy steel, is engineered to minimize vibration and deflection even during aggressive cutting. The inserts, secured firmly in precisely machined pockets, feature sharp, optimized cutting edges that <strong>slice material cleanly</strong>, resulting in a smooth, often mirror-like finish that can eliminate the need for secondary operations like grinding or polishing.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>indexable design</strong> is a cornerstone of its high efficiency. Unlike solid carbide end mills, operators can quickly replace a worn cutting edge by simply indexing or changing the insert without removing the entire tool holder from the machine spindle. This drastically reduces machine downtime and setup time.
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
                        <strong>Accuracy:</strong> ±0.01mm machining precision
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Radius Range:</strong> R0.5-R50mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coating:</strong> TiAlN, AlCrN PVD
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Interface:</strong> HSK, BT, Weldon
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> Corner rounding, deburring
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
                      {product.insertType && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Insert Type:</span>
                          <span className="text-gray-900">{product.insertType}</span>
                        </div>
                      )}
                      {product.interface && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Interface:</span>
                          <span className="text-gray-900">{product.interface}</span>
                        </div>
                      )}
                      {product.cornerRadius && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Corner Radius:</span>
                          <span className="text-gray-900 text-xs">{product.cornerRadius}</span>
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

              {/* Milling Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Milling Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {millingOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
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
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
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
                  <h3 className="text-xl font-bold mb-4">Primary Machining Operations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>External Corner Rounding:</strong> This is the tool's principal application, where it machines a convex radius along an external edge of a workpiece.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Fillet Milling:</strong> It can also be used to create a concave radius in an internal corner, such as at the bottom of a pocket where a wall meets the floor.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Contour Milling:</strong> The tool can follow a complex 2D or 3D contour path to apply a constant radius along a curved edge.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Groove Milling:</strong> With specific full-round inserts and appropriate programming, these cutters can machine a semi-circular groove into a flat surface.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Precise tool path control</strong> to generate the correct profile
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Stable clamping system</strong> to prevent vibration during machining
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Optimized cutting parameters</strong> to ensure best surface quality
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Proper cooling and lubrication</strong> to extend tool life
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Stress Concentration Reduction",
                  description: "This is its most important function from an engineering perspective. Sharp internal corners act as stress risers, where forces concentrate and can initiate cracks, leading to catastrophic component failure.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Safety and Ergonomics",
                  description: "Eliminating sharp edges on manufactured parts prevents cuts and injuries during handling, assembly, and maintenance, creating a safer work environment and end product.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Improved Fluid Dynamics",
                  description: "In components for hydraulic or pneumatic systems, or in aerospace applications, smooth fillets can reduce turbulence and improve the efficiency of fluid or air flow.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Aesthetic and Functional Finishing",
                  description: "Rounded corners provide a clean, professional, and finished appearance. They also facilitate better adhesion and uniform thickness of subsequent coatings.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Machining Capability",
                  description: "The synergy of high-rigidity cutter body and precision-ground inserts ensures stability and accuracy even under aggressive cutting conditions.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Efficient Production",
                  description: "Indexable design allows quick replacement of worn cutting edges, multi-corner insert design significantly lowers cost per cutting edge, improving production efficiency.",
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

          {/* Related Categories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "End Mills",
                  image: "/images/end-mills.jpg",
                  description: "High-precision end mills for various milling operations",
                  url: "/standard-tools/milling-tool-holder/end-mills",
                },
                {
                  title: "Face Mills",
                  image: "/images/face-mills.jpg", 
                  description: "Large diameter face mills for surface machining",
                  url: "/standard-tools/milling-tool-holder/face-milling",
                },
                {
                  title: "Drills",
                  image: "/images/drills.jpg",
                  description: "Precision drills for hole machining",
                  url: "/standard-tools/hole-machining/drills",
                },
                {
                  title: "Tool Holder Systems",
                  image: "/images/tool-holders.jpg",
                  description: "Various tool holder systems for tool clamping",
                  url: "/standard-tools/milling-tool-holder",
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
              <h2 className="text-3xl font-bold mb-4">Need Professional Corner Rounding Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal corner rounding milling cutter configuration for your specific applications, materials, and production requirements. From stress concentration reduction to surface quality enhancement, we provide comprehensive corner rounding solutions.
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