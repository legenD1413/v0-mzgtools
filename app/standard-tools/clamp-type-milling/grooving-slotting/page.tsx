import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function GroovingSlottingPage() {
  // Product data based on the Grooving & Slotting Milling Cutter system
  const products = [
    {
      id: "gs-001",
      name: "Standard Three-Face Slotting Cutter",
      image: "/images/three-face-slotting-cutter.png",
      description: "High-rigidity cutter body with robust insert clamping system",
      series: "Standard Series",
      diameter: "50-300mm",
      slotWidth: "2-25mm",
      application: "General slotting operations",
      insertType: "Indexable carbide",
      pageNumber: "STD-SF",
    },
    {
      id: "gs-002",
      name: "Heavy-Duty Grooving Cutter",
      image: "/images/heavy-duty-grooving.png",
      description: "Designed for deep slotting and high material removal rates",
      series: "Heavy-Duty Series",
      diameter: "80-250mm",
      slotWidth: "5-20mm",
      application: "Deep slotting, high MRR",
      features: "Coarse pitch teeth",
      pageNumber: "HD-GC",
    },
    {
      id: "gs-003",
      name: "Fine Pitch Slotting Cutter",
      image: "/images/fine-pitch-slotting.png",
      description: "More teeth for higher feed rates and superior surface finish",
      series: "Fine Pitch Series",
      diameter: "60-200mm",
      slotWidth: "3-15mm",
      application: "High feed rates, fine finish",
      features: "Fine pitch teeth",
      pageNumber: "FP-SC",
    },
    {
      id: "gs-004",
      name: "Adjustable Width Slotting Cutter",
      image: "/images/adjustable-slotting.png",
      description: "Adjustable system for non-standard slot widths",
      series: "Adjustable Series",
      diameter: "70-180mm",
      slotWidth: "Variable 2-30mm",
      application: "Custom slot widths",
      features: "Adjustable width system",
      pageNumber: "ADJ-SC",
    },
    {
      id: "gs-005",
      name: "T-Slot Preparation Cutter",
      image: "/images/t-slot-prep.png",
      description: "Specialized for initial T-slot groove preparation",
      series: "T-Slot Series",
      diameter: "50-150mm",
      slotWidth: "6-18mm",
      application: "T-slot preparation",
      features: "Precision ground inserts",
      pageNumber: "TS-PC",
    },
    {
      id: "gs-006",
      name: "Keyway Milling Cutter",
      image: "/images/keyway-milling.png",
      description: "Precision cutter for standard-compliant keyways",
      series: "Keyway Series",
      diameter: "40-120mm",
      slotWidth: "2-12mm",
      application: "Keyway milling",
      features: "Standard compliant",
      pageNumber: "KW-MC",
    },
    {
      id: "gs-007",
      name: "Through-Coolant Slotting Cutter",
      image: "/images/through-coolant-slotting.png",
      description: "High-pressure coolant delivery for deep slot machining",
      series: "Coolant Series",
      diameter: "60-250mm",
      slotWidth: "4-20mm",
      application: "Deep slots with cooling",
      features: "Through-coolant capability",
      pageNumber: "TC-SC",
    },
    {
      id: "gs-008",
      name: "Titanium Grade Insert",
      image: "/images/titanium-insert.png",
      description: "Specialized inserts for titanium and superalloy machining",
      series: "Ti-Grade Insert",
      coating: "Advanced PVD",
      material: "Titanium, Inconel",
      application: "Aerospace materials",
      features: "Heat-resistant coating",
      pageNumber: "TI-INS",
    },
    {
      id: "gs-009",
      name: "General Purpose Insert",
      image: "/images/general-purpose-insert.png",
      description: "Versatile insert with robust chipbreaker geometry",
      series: "GP Insert",
      coating: "CVD/PVD",
      material: "Steel, Cast Iron",
      application: "General machining",
      features: "Robust chipbreaker",
      pageNumber: "GP-INS",
    },
    {
      id: "gs-010",
      name: "Finishing Insert",
      image: "/images/finishing-insert.png",
      description: "Flat-bottom insert for superior surface finish",
      series: "Finishing Insert",
      coating: "PVD",
      material: "Various",
      application: "Finishing operations",
      features: "Flat-bottom geometry",
      pageNumber: "FIN-INS",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Maximum Rigidity and Stability",
      description:
        "High-quality heat-treated alloy steel cutter body effectively dampens vibrations during heavy cutting operations, maintaining tight tolerances and excellent surface finishes.",
    },
    {
      icon: "Target",
      title: "Exceptional Versatility",
      description:
        "Extensive range of indexable inserts with various grades, geometries, corner radii, and materials to optimize performance for specific workpiece materials.",
    },
    {
      icon: "Zap",
      title: "Outstanding Economic Performance",
      description:
        "Indexable insert design allows quick edge rotation or replacement in minutes, with durable cutter body significantly reducing cost per part compared to solid carbide tools.",
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
    "General Machinery",
    "Automotive Industry",
    "Mold and Die Manufacturing",
    "Aerospace Industry",
    "Energy Sector",
    "Oil & Gas Equipment",
    "Power Generation",
    "Manufacturing",
  ]

  // Machining operations
  const machiningOperations = [
    "Full Slotting",
    "Grooving",
    "Parting / Slitting",
    "Side Milling",
    "Shoulder Milling",
    "T-Slot Milling",
    "Keyway Milling",
    "Through-Slotting",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "Common Steels",
    "Cast Irons",
    "Stainless Steel",
    "Titanium Alloys",
    "Heat-Resistant Superalloys",
    "Inconel",
    "Aluminum Alloys",
    "Tool Steels",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Robust Insert Clamping System",
      description:
        "Strong screw-down mechanism ensures indexable inserts are held securely even under high cutting forces, preventing micro-movements and extending tool life.",
      color: "border-red-600",
    },
    {
      title: "Efficient Chip Evacuation",
      description:
        "Meticulously designed gullets and chip channels facilitate smooth chip flow. Through-coolant capabilities deliver high-pressure coolant directly to cutting edges.",
      color: "border-blue-600",
    },
    {
      title: "Comprehensive Size Range",
      description:
        "Cutter diameters from 50mm to over 300mm, slot widths from 2mm to 25mm+, with standard metric and imperial bore sizes for universal compatibility.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Cutter Diameter (Dc)", value: "50-300+ mm" },
    { label: "Cutting Width (ap)", value: "2-25+ mm" },
    { label: "Bore Diameter (d)", value: "Metric & Imperial" },
    { label: "Number of Teeth (Z)", value: "Coarse & Fine Pitch" },
    { label: "Insert Types", value: "Carbide, Cermet" },
    { label: "Coatings", value: "PVD, CVD" },
    { label: "Corner Radius (RE)", value: "Various" },
    { label: "Machine Types", value: "Horizontal, Vertical, Gantry" },
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
                  MZG Grooving & Slotting Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Tool Machine provide a comprehensive introduction to our Grooving & Slotting Milling Cutters, a key product line within our Clamp Type Milling Cutter series. Also known as Three-face Milling Cutters, these tools are engineered for superior performance in slotting and grooving applications.
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
                    src="/images/grooving-slotting-hero.png"
                    alt="Professional MZG Grooving & Slotting Milling Cutter System"
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
                    MZG's Grooving & Slotting Milling Cutters are engineered for <strong>superior performance in a wide range of slotting and grooving applications</strong>. The cutter body is designed for maximum rigidity and stability, manufactured from high-quality, heat-treated alloy steel that effectively dampens vibrations during heavy cutting operations.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>insert clamping system is exceptionally robust</strong>, utilizing a strong screw-down mechanism that ensures indexable inserts are held securely in the pocket, even under high cutting forces and feed rates. This secure seating prevents micro-movements of the insert, vital for process security and extending tool life.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    <strong>Versatility is a core performance feature</strong>. We offer an extensive range of indexable inserts with various grades (advanced PVD or CVD coatings), geometries, corner radii, and materials. This allows optimization for specific workpiece materials, from common steels to challenging materials like titanium and heat-resistant superalloys.
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
                        <strong>Diameter Range:</strong> 50-300+ mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Slot Width:</strong> 2-25+ mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Types:</strong> Carbide, Cermet
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> PVD, CVD
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> Three-face cutting action
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
                      {product.slotWidth && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Slot Width:</span>
                          <span className="text-gray-900 text-xs">{product.slotWidth}</span>
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

              {/* Machining Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Machining Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {machiningOperations.map((operation, index) => (
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
                  <h3 className="text-xl font-bold mb-4">Primary Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Full Slotting:</strong> Most common application where a slot is machined from solid material in one or more passes using three-face cutting action.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Grooving:</strong> Cutting specific grooves on part surfaces without cutting through the material completely.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Parting / Slitting:</strong> Used to cut workpieces into separate pieces or slit thin materials with minimal waste.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>T-Slot Milling:</strong> Creating initial straight groove before dedicated T-slot cutter is used for final profile.
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
                        <strong>High Material Removal Rates</strong> compared to solid end mills
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Excellent stability</strong> on horizontal milling machines
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Efficient chip evacuation</strong> with through-coolant capability
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Versatile applications</strong> from keyways to complex slots
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
                  title: "Efficient Slot Machining",
                  description: "Primary function to efficiently and accurately machine grooves and slots of specified width and depth with three-face cutting action.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Exceptional Versatility",
                  description: "Modular system accommodating various insert types allows wide range of applications with minimal tool inventory, reducing setup times.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Productivity Enhancement",
                  description: "Significantly higher metal removal rates compared to solid end mills, drastically reducing cycle times in mass production environments.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Quality Assurance",
                  description: "Rigid design and precision-ground inserts ensure high dimensional accuracy, excellent perpendicularity, and superior surface finish.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Cost Reduction",
                  description: "Indexable nature significantly lowers tooling cost per part by replacing only small, inexpensive inserts instead of entire expensive tools.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Process Reliability",
                  description: "Robust clamping system and stable cutting process ensure consistent performance even in challenging aerospace and energy applications.",
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
                  title: "Face Milling Holders",
                  image: "/images/face-milling-holders.jpg",
                  description: "Precision holders for face milling operations",
                  url: "/standard-tools/milling-tool-holder/face-milling",
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
              <h2 className="text-3xl font-bold mb-4">Need Professional Grooving & Slotting Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal Grooving & Slotting Milling Cutter configuration for your specific applications, from keyway milling to complex T-slot preparation. We provide comprehensive solutions for all your slotting needs across various industries.
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