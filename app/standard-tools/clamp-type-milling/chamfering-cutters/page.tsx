import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function ChamferingCuttersPage() {
  // Product data based on the MZG Clamp Type Chamfering Cutters system
  const products = [
    {
      id: "cc-001",
      name: "ECC-45° Chamfering Cutter",
      image: "/images/ecc-45-chamfering-cutter.png",
      description: "Versatile dual-purpose tool for 45° chamfering and V-groove cutting",
      series: "ECC-45° Series",
      angle: "45°",
      application: "Chamfering, V-grooving",
      features: "Multi-functional design",
      pageNumber: "ECC-45",
    },
    {
      id: "cc-002",
      name: "Inverted Countersunk Head Cutter",
      image: "/images/inverted-countersunk-cutter.png",
      description: "Specialized for back-chamfering and internal countersinking",
      series: "Inverted Series",
      diameter: "18-40mm",
      shank: "16-25mm",
      application: "Back-chamfering, countersinking",
      features: "No spindle reversal required",
      pageNumber: "CE333900",
    },
    {
      id: "cc-003",
      name: "Standard Chamfering Cutter - Small",
      image: "/images/standard-chamfering-small.png",
      description: "Compact design for precision edge breaking and deburring",
      series: "Standard Series",
      diameter: "12-25mm",
      angle: "45°",
      application: "Edge breaking, deburring",
      insertType: "CCMT060204",
      pageNumber: "STD-S",
    },
    {
      id: "cc-004",
      name: "Standard Chamfering Cutter - Medium",
      image: "/images/standard-chamfering-medium.png",
      description: "Medium-sized cutter for general chamfering operations",
      series: "Standard Series",
      diameter: "25-50mm",
      angle: "45°",
      application: "General chamfering",
      insertType: "CCGT09T308",
      pageNumber: "STD-M",
    },
    {
      id: "cc-005",
      name: "Standard Chamfering Cutter - Large",
      image: "/images/standard-chamfering-large.png",
      description: "Heavy-duty cutter for large component chamfering",
      series: "Standard Series",
      diameter: "50-100mm",
      angle: "45°",
      application: "Heavy-duty chamfering",
      insertType: "SEMT inserts",
      pageNumber: "STD-L",
    },
    {
      id: "cc-006",
      name: "Weld Preparation V-Groove Cutter",
      image: "/images/v-groove-cutter.png",
      description: "Specialized for creating precise V-grooves for weld preparation",
      series: "V-Groove Series",
      angle: "Variable angles",
      application: "Weld preparation",
      features: "Precise V-groove cutting",
      pageNumber: "VG-WP",
    },
    {
      id: "cc-007",
      name: "CCMT060204 Insert",
      image: "/images/ccmt-insert.png",
      description: "Standard carbide insert for small to medium chamfering cutters",
      series: "CCMT Insert",
      coating: "PVD/CVD",
      material: "Steel, Cast Iron",
      application: "General chamfering",
      features: "High wear resistance",
      pageNumber: "CCMT060204",
    },
    {
      id: "cc-008",
      name: "CCGT09T308 Insert",
      image: "/images/ccgt-insert.png",
      description: "Precision insert for fine finishing and accurate chamfering",
      series: "CCGT Insert",
      coating: "Advanced PVD",
      material: "Various materials",
      application: "Precision chamfering",
      features: "Sharp cutting edge",
      pageNumber: "CCGT09T308",
    },
    {
      id: "cc-009",
      name: "SEMT Insert",
      image: "/images/semt-insert.png",
      description: "Square insert for heavy-duty chamfering applications",
      series: "SEMT Insert",
      coating: "CVD",
      material: "Steel, Stainless Steel",
      application: "Heavy-duty operations",
      features: "Robust design",
      pageNumber: "SEMT",
    },
    {
      id: "cc-010",
      name: "Spare Parts Kit",
      image: "/images/spare-parts-kit.png",
      description: "Complete spare parts including screws and Torx wrenches",
      series: "Spare Parts",
      screws: "M2.5x6.5, M4x9",
      wrenches: "T8, T15 Torx",
      application: "Maintenance",
      features: "High-quality components",
      pageNumber: "SP-KIT",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Layers",
      title: "Exceptional Versatility and Multi-Functionality",
      description:
        "ECC-45° model performs standard 45° chamfering, edge-breaking, and precise V-groove cutting. Single tool reduces inventory and simplifies setup procedures.",
    },
    {
      icon: "Shield",
      title: "Superior Rigidity and Stability",
      description:
        "Robust construction minimizes deflection and suppresses vibration, ensuring smooth chamfers, extended insert life, and protection for machine spindle bearings.",
    },
    {
      icon: "Zap",
      title: "Enhanced Machining Efficiency",
      description:
        "Indexable design allows worn cutting edge replacement in seconds, drastically reducing machine downtime compared to solid tool re-sharpening processes.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Zap":
        return <Zap className="h-8 w-8 text-red-600" />
      case "Layers":
        return <Layers className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Machine tool compatibility
  const machineCompatibility = [
    "General-Purpose Manual Milling Machines",
    "CNC Machining Centers",
    "CNC Lathes",
    "Drilling Machines",
    "High-Volume Production Centers",
    "Precision Manufacturing Equipment",
    "Multi-Axis Machining Centers",
    "Flexible Manufacturing Systems",
  ]

  // Cutting conditions
  const cuttingConditions = [
    "Stable Cutting Environments",
    "Secure Workholding Conditions",
    "High Machine Rigidity",
    "General Cutting Conditions",
    "Long Tool Overhang Situations",
    "Variable Workpiece Setups",
    "Vibration-Prone Conditions",
    "High-Precision Requirements",
  ]

  // Material groups
  const materialGroups = [
    "P (Steel) - Low/High Carbon, Alloy Steels",
    "M (Stainless Steel) - Austenitic, Ferritic",
    "K (Cast Iron) - Grey, Ductile Cast Irons",
    "N (Non-ferrous) - Aluminum, Copper, Brass, Plastics",
    "S (Superalloys) - Inconel, Titanium, Carbon Fiber",
    "H (Hardened Materials) - Hardened Steels, PM Components",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Indexable System Design",
      description:
        "Durable steel cutter body holds replaceable carbide inserts, significantly reducing tool-changing time and eliminating re-sharpening needs while ensuring consistent performance.",
      color: "border-red-600",
    },
    {
      title: "Precision Engineering",
      description:
        "Fine-tuning mechanisms allow micro-adjustments for highly precise chamfer depths, critical for aerospace and high-precision components with no spindle reversal required.",
      color: "border-blue-600",
    },
    {
      title: "Comprehensive Size Range",
      description:
        "Available in various diameters (D1: 18-40mm) and shank sizes (d: 16-25mm) with standard ISO inserts ensuring wide availability and compatibility.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Cutting Angle", value: "45° Standard" },
    { label: "Cutter Diameter", value: "12-100mm" },
    { label: "Shank Diameter", value: "16-25mm" },
    { label: "Insert Types", value: "CCMT, CCGT, SEMT" },
    { label: "Insert Grades", value: "Carbide, CBN, Ceramic" },
    { label: "Coatings", value: "PVD, CVD" },
    { label: "Screw Sizes", value: "M2.5x6.5, M4x9" },
    { label: "Torx Wrenches", value: "T8, T15" },
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
                  Professional Chamfering Tool Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Clamp Type Chamfering Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG's Clamp Type Chamfering Cutters are high-performance, indexable cutting tools engineered for precision, efficiency, and versatility. These cutters replace solid carbide or HSS chamfering tools with a more economical and flexible indexable solution, featuring specialized tools like the versatile ECC-45° Chamfering Cutter and innovative Inverted Countersunk Head Cutter.
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
                    src="/images/chamfering-cutters-hero.png"
                    alt="Professional MZG Clamp Type Chamfering Cutters System"
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
                    The performance of MZG Chamfering Cutters is defined by their <strong>rigidity, precision, and efficiency</strong>. The core design principle is an indexable system where a durable steel cutter body holds replaceable carbide inserts, significantly reducing tool-changing time and eliminating re-sharpening needs.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    <strong>Tool stability is paramount</strong> for achieving high-quality surface finishes and dimensional accuracy. Our chamfering cutter bodies feature special designs optimized for maximum rigidity, minimizing deflection and suppressing vibration even under general cutting conditions.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>Inverted Countersunk Head cutter</strong> incorporates enhanced reliability features, operating without spindle reversal and equipped with fine-tuning mechanisms for micro-adjustments to achieve highly precise chamfer depths.
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
                        <strong>Cutting Angle:</strong> 45° Standard
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Diameter Range:</strong> 12-100mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Types:</strong> CCMT, CCGT, SEMT
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Chamfering, V-grooving, Countersinking
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>System:</strong> Indexable design
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
                      {product.angle && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Angle:</span>
                          <span className="text-gray-900 text-xs">{product.angle}</span>
                        </div>
                      )}
                      {product.shank && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Shank:</span>
                          <span className="text-gray-900 text-xs">{product.shank}</span>
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
                      {product.screws && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Screws:</span>
                          <span className="text-gray-900 text-xs">{product.screws}</span>
                        </div>
                      )}
                      {product.wrenches && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Wrenches:</span>
                          <span className="text-gray-900 text-xs">{product.wrenches}</span>
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
              {/* Machine Tool Compatibility */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Machine Tool Compatibility
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {machineCompatibility.map((machine, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{machine}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cutting Conditions */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Cutting Conditions
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {cuttingConditions.map((condition, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Groups */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Material Groups
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {materialGroups.map((material, index) => (
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
                  <h3 className="text-xl font-bold mb-4">Machining Functions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Chamfering Processing:</strong> Creating clean, consistent 45° bevels on part edges for safety, aesthetics, and assembly preparation.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>V-Grooving:</strong> Precise V-groove cutting for weld preparation on thick plates and decorative applications.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Countersinking:</strong> Standard and inverted countersinking for fastener heads, ensuring flush surface mounting.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Profile Milling:</strong> Utilizing 45° angle to generate specific angled surfaces as part of component design.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Reduced Tool Inventory</strong> with multi-functional designs
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Eliminates Secondary Processing</strong> with single-pass operations
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Seconds Tool Change</strong> vs lengthy re-sharpening process
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Wide Material Compatibility</strong> with appropriate insert selection
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
                  title: "Edge Breaking & Deburring",
                  description: "Fundamental function to remove sharp, hazardous burrs and create slight bevels on component edges for safety and aesthetics.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Weld Preparation",
                  description: "Creating precise V-grooves on plate edges to ensure proper weld penetration and strength in welding applications.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Countersinking",
                  description: "Machining conical recesses to accommodate screw or rivet heads, ensuring flush surface mounting. Includes back-countersinking capability.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Profile Milling",
                  description: "Utilizing 45° angle to generate specific angled surfaces or profiles as integral part of component design and functionality.",
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
                {
                  title: "Threading Tools",
                  image: "/images/threading-tools.jpg",
                  description: "Complete threading solutions for various applications",
                  url: "/standard-tools/threading/taps",
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
              <h2 className="text-3xl font-bold mb-4">Need Professional Chamfering Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal Chamfering Cutter configuration for your specific applications, from standard edge breaking to complex V-groove preparation and inverted countersinking. We provide comprehensive indexable solutions for all your chamfering needs across various materials and industries.
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