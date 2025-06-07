import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function TSlotCutterPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "tsc-005",
      name: "Welding edge type ultra-fine particle tungsten steel T-type milling cutter (flat tooth edge)",
      image: "/images/SWT.png",
      description: "Ultra-fine particle tungsten steel T-type milling cutter with welding edge technology",
      flutes: "4,6,8,10",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWT",
      // Dimensions as separate fields
      d1: "7-30mm",
      d: "12-32mm",
      D: "16-60mm",
      H: "3,4,5,6,8,10,12",
      l1: "15-20mm",
      L: "100-140mm",
      T: "4,6,8,10",
      page: "F35",
      // Additional specifications
      application: "Precision T-slot machining with welding edge technology",
      url: "/standard-tools/milling/t-slot-cutter/swt-series",
    },
    {
      id: "tsc-006",
      name: "Welding edge type ultra-fine particle tungsten steel T-type milling cutter (Thousand Birds)",
      image: "/images/SWTS.png",
      description: "Ultra-fine particle tungsten steel T-type milling cutter with Thousand Birds edge design",
      flutes: "4,6,8,10",
      material: "Tungsten Steel",
      coating: "Welding Edge - Thousand Birds",
      series: "SWTS",
      // Dimensions as separate fields
      d1: "7-30mm",
      d: "12-32mm",
      D: "16-60mm",
      H: "3,4,5,6,8,10,12",
      l1: "15-20mm",
      L: "100-140mm",
      T: "4,6,8,10",
      page: "F35",
      // Additional specifications
      application: "Advanced T-slot machining with Thousand Birds edge technology for enhanced chip evacuation",
      url: "/standard-tools/milling/t-slot-cutter/swts-series",
    },
    {
      id: "tsc-007",
      name: "Welding edge type ultra-fine particle tungsten steel T-type milling cutter (flat tooth edge)",
      image: "/images/SWTI.png",
      description:
        "Ultra-fine particle tungsten steel T-type milling cutter with welding edge technology - Imperial sizing",
      flutes: "4,5,6",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWTI",
      // Dimensions as separate fields - Imperial measurements
      d1: "10-15mm",
      d: '1/2"',
      D: '3/4"-1"1/4',
      H: '1/8"-5/16"',
      l1: "12mm",
      L: '2"1/4-2"3/4',
      T: "4,5,6",
      page: "F35",
      // Additional specifications
      application: "Precision T-slot machining with welding edge technology - Imperial standard sizing",
      url: "/standard-tools/milling/t-slot-cutter/swti-series",
    },
    {
      id: "tsc-008",
      name: "Welding edge type ultra-fine particle tungsten steel T-type milling cutter (flat tooth edge)",
      image: "/images/SWST.png",
      description:
        "Heavy-duty ultra-fine particle tungsten steel T-type milling cutter with welding edge technology - Large diameter",
      flutes: "14,16,18",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWST",
      // Dimensions as separate fields - Mixed measurements
      d1: "55-70mm",
      d: '1"1/4',
      D: "100-150mm",
      H: "16-20mm",
      L: "60mm",
      T: "14,16,18",
      page: "F35",
      // Additional specifications
      application: "Heavy-duty T-slot machining for large workpieces and industrial applications",
      url: "/standard-tools/milling/t-slot-cutter/swst-series",
    },
    {
      id: "tsc-009",
      name: "Tungsten Steel T-Groove Side Milling Cutter Can Cut Steel",
      image: "/images/AL-TXD.png",
      description:
        "Specialized tungsten steel T-groove side milling cutter designed for aluminum machining applications",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Aluminum Optimized",
      series: "AL-TXD..",
      // Dimensions as separate fields - Aluminum specific sizing
      D1: "4-12mm",
      H: "0.5-3mm",
      D2: "1.5-5mm",
      L: "50-75mm",
      // Additional specifications
      application: "T-slot milling cutter for aluminum",
      url: "/standard-tools/milling/t-slot-cutter/al-txd-series",
    },
    {
      id: "tsc-010",
      name: "Tungsten Steel T-Groove Side Milling Cutter Can Cut Steel",
      image: "/images/AL-TXD.png",
      description: "Bronze T-groove coated milling cutter for enhanced performance in steel cutting applications",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Bronze Coating",
      series: "TXD",
      // Dimensions as separate fields - Same as AL-TXD but for steel applications
      D1: "4-12mm",
      H: "0.5-3mm",
      D2: "1.5-5mm",
      L: "50-75mm",
      // Additional specifications
      application: "Bronze T-groove coated milling cutter",
      url: "/standard-tools/milling/t-slot-cutter/txd-series",
    },
    {
      id: "tsc-011",
      name: "Round Head T-Groove Cutter",
      image: "/images/AL-BBTXD.png",
      description: "Specialized round head T-groove cutter designed for aluminum machining applications",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Aluminum Optimized",
      series: "AL-BBTXD",
      // Dimensions as separate fields - Round head specific sizing
      D: "3-12mm",
      R: "1.5-6mm",
      page: "F36",
      // Additional specifications
      application: "T-slot milling cutter for aluminum",
      url: "/standard-tools/milling/t-slot-cutter/al-bbtxd-series",
    },
    {
      id: "tsc-012",
      name: "Round Head T-Groove Cutter",
      image: "/images/BBTXD.png",
      description: "Bronze coated round head T-groove cutter for enhanced performance in steel cutting applications",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Bronze Coating",
      series: "BBTXD",
      // Dimensions as separate fields - Same dimensions as AL-BBTXD but for steel applications
      D: "3-12mm",
      R: "1.5-6mm",
      page: "F36",
      // Additional specifications
      application: "Bronze T-groove coated milling cutter",
      url: "/standard-tools/milling/t-slot-cutter/bbtxd-series",
    },
    {
      id: "tsc-013",
      name: "Welding edge type ultra-fine particle tungsten steel tail groove milling cutter -45°",
      image: "/images/SWD45.png",
      description:
        "Ultra-fine particle tungsten steel tail groove milling cutter with 45° welding edge technology for dovetail slot machining",
      flutes: "4,6",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWD45",
      // Dimensions as separate fields
      D: "20-65mm",
      H: "6-20mm",
      d1: "9-21mm",
      l1: "15,20",
      α: "45°",
      d: "12-25mm",
      L: "95-110mm",
      T: "4,6",
      page: "F37",
      // Additional specifications
      application: "Precision dovetail slot machining with 45° welding edge technology",
      url: "/standard-tools/milling/t-slot-cutter/swd45-series",
    },
    {
      id: "tsc-014",
      name: "Welding edge type ultra-fine particle tungsten steel tail groove milling cutter -60°",
      image: "/images/SWD60.png",
      description:
        "Ultra-fine particle tungsten steel tail groove milling cutter with 60° welding edge technology for wide-angle dovetail slot machining",
      flutes: "4,6",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWD60",
      // Dimensions as separate fields
      D: "20-65mm",
      H: "8-32mm",
      d1: "9-25mm",
      l1: "15,20",
      α: "60°",
      d: "12-32mm",
      L: "90-120mm",
      T: "4,6",
      page: "F37",
      // Additional specifications
      application: "Precision wide-angle dovetail slot machining with 60° welding edge technology",
      url: "/standard-tools/milling/t-slot-cutter/swd60-series",
    },
    {
      id: "tsc-015",
      name: "Welding edge type ultra-fine particle tungsten steel dovetail cylindrical milling cutter -60°",
      image: "/images/SWDT60.png",
      description:
        "Heavy-duty ultra-fine particle tungsten steel dovetail cylindrical milling cutter with 60° welding edge technology for large-scale dovetail slot machining",
      flutes: "8,10,12",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWDT60",
      // Dimensions as separate fields
      D: "80-150mm",
      H: "30-55mm",
      d1: "42-80mm",
      d: '1"-1"1/2',
      L: "60-75mm",
      T: "8,10,12",
      page: "F37",
      // Additional specifications
      application: "Heavy-duty cylindrical dovetail slot machining for large industrial applications",
      url: "/standard-tools/milling/t-slot-cutter/swdt60-series",
      α: "60°",
    },
    {
      id: "tsc-016",
      name: "Tungsten Steel Dovetail Groove Milling Cutter Can Cut Steel Below 60HRC",
      image: "/images/AL-YWD.png",
      description:
        "Specialized tungsten steel dovetail groove milling cutter designed for aluminum applications, capable of cutting steel below 60HRC",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Aluminum Optimized",
      series: "AL-YWD",
      // Dimensions as separate fields
      D1: "4-12mm",
      D2: "1.5-5mm",
      D: "4-12mm",
      L1: "6-12mm",
      L: "50-60mm",
      α: "90°",
      page: "F38",
      // Additional specifications
      application: "Aluminum dovetail groove milling cutter",
      url: "/standard-tools/milling/t-slot-cutter/al-ywd-series",
    },
    {
      id: "tsc-017",
      name: "Tungsten Steel Dovetail Groove Milling Cutter Can Cut Steel Below 60HRC",
      image: "/images/AL-YWD.png",
      description:
        "Bronze coated tungsten steel dovetail groove milling cutter designed for steel cutting applications below 60HRC",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Bronze Coating",
      series: "YWD",
      // Dimensions as separate fields
      D1: "4-12mm",
      D2: "1.5-5mm",
      D: "4-12mm",
      L1: "6-12mm",
      L: "50-60mm",
      α: "90°",
      page: "F38",
      // Additional specifications
      application: "Bronze dovetail groove coated milling cutter",
      url: "/standard-tools/milling/t-slot-cutter/ywd-series",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Precision Engineering",
      description:
        "Meticulously designed geometry with smaller diameter neck and larger cutting head for accurate T-shaped slot creation.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Advanced Materials",
      description:
        "Available in HSS, solid carbide, and indexable designs with specialized coatings for enhanced performance and extended tool life.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Specialized Functionality",
      description:
        "Unique undercutting capability enables creation of T-slots for workholding, fixturing, and component mounting applications.",
    },
  ]

  // Industries served
  const industries = [
    "Machine Tool Manufacturing",
    "Fixture and Jig Design",
    "Automation and Robotics",
    "Aerospace Industry",
    "Automotive Industry",
    "General Engineering",
    "Optical Equipment",
    "Measurement Equipment",
  ]

  // Machining operations
  const machiningOperations = [
    "T-Slot Creation",
    "Workholding Preparation",
    "Guide Rail Machining",
    "Component Mounting Slots",
    "Undercutting Operations",
    "Profile Milling",
    "Fixture Preparation",
    "Assembly Component Machining",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Aluminum and Aluminum Alloys",
    "Mild Steel",
    "Carbon Steels",
    "Alloy Steels",
    "Stainless Steels",
    "Cast Iron",
    "Tool Steels",
    "Hardened Steels",
  ]

  // Cutter configurations
  const cutterConfigurations = [
    {
      title: "Standard T-Slot Cutters",
      description:
        "Traditional design with smaller neck diameter and larger cutting head. Ideal for creating standard T-slots in machine tables and fixtures.",
      color: "border-red-600",
    },
    {
      title: "Dovetail Cutters",
      description:
        "Angled cutting heads (45°, 60°, 90°) for creating dovetail slots and specialized profiles. Perfect for precision fixturing applications.",
      color: "border-blue-600",
    },
    {
      title: "Side Milling Cutters",
      description:
        "Large diameter tools with multiple teeth for efficient side milling operations. Designed for heavy-duty material removal.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "T-Slot Cutter (Various Profiles)" },
    { label: "Material", value: "Tungsten Steel/Solid Carbide" },
    { label: "Coating Options", value: "TiAlN, AlTiN, TiCN, Welding Edge" },
    { label: "Diameter Range", value: "3mm to 200mm" },
    { label: "Angle Options", value: "45°, 60°, 90°, Standard T-Profile" },
    { label: "Shank Type", value: "Straight Shank with Weldon Flat" },
    { label: "Flute Count", value: "2 to 24 Flutes" },
    { label: "Customization", value: "OEM Support Available" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section - Enhanced with product-specific information */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
            <Image
              src="/images/milling-tools.jpg"
              alt="T-Slot Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Specialized Milling Tools
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">T-Slot Cutters</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  Highly specialized milling tools meticulously designed to create T-shaped slots within workpieces.
                  Essential for machine tool table beds, workholding fixtures, and assembly components where adjustable
                  and secure clamping is paramount.
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
                    className="bg-transparent text-white hover:bg-white/10 border-white hover:text-white transition-all duration-300"
                  >
                    Download Catalog <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-[500px] h-[300px] bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Image
                    src="/images/milling.png"
                    alt="T-Slot Cutters Product Showcase"
                    width={450}
                    height={250}
                    className="object-contain rounded-lg"
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
                <div className="mb-4 bg-white inline-flex p-3 rounded-lg shadow-sm">{feature.icon}</div>
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
                    T-Slot Cutters are highly specialized milling tools meticulously designed to create T-shaped slots
                    within a workpiece. These T-slots are a fundamental feature in numerous industrial applications,
                    prominently including machine tool table beds (e.g., on milling machines and drill presses),
                    workholding fixtures, and various assembly components where adjustable and secure clamping is
                    paramount.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The cutter's distinct geometry features a smaller diameter neck positioned behind a larger diameter
                    cutting head. This design allows the tool to first enter a pre-machined straight slot (often created
                    by an end mill or slot drill of appropriate width) and subsequently cut laterally to form the wider,
                    undercut sections that define the characteristic "T" profile.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Advanced coatings such as TiAlN (Titanium Aluminum Nitride), AlTiN (Aluminum Titanium Nitride), or
                    specialized welding edge technology substantially increase surface hardness, reduce friction
                    coefficient, enhance wear resistance, and enable higher cutting speeds and feed rates for increased
                    productivity and reduced cycle times.
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
                        <strong>Diameter Range:</strong> 3mm to 200mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material:</strong> Tungsten Steel/Solid Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, Welding Edge
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Angle Options:</strong> 45°, 60°, 90°, Standard T
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Flute Options:</strong> 2-24 flutes
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
                  <div className="relative w-full bg-white" style={{ height: "176px" }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 border-t">
                    <h3 className="text-base font-bold mb-2 line-clamp-2">{product.name}</h3>
                    {product.application && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.application}</p>
                    )}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                      {product.D && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">D:</span> {product.D}
                        </div>
                      )}
                      {product.D1 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">D1:</span> {product.D1}
                        </div>
                      )}
                      {product.H && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">H:</span> {product.H}
                        </div>
                      )}
                      {product.d1 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">d1:</span> {product.d1}
                        </div>
                      )}
                      {product.d && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">d:</span> {product.d}
                        </div>
                      )}
                      {product.D2 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">D2:</span> {product.D2}
                        </div>
                      )}
                      {product.l1 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">l1:</span> {product.l1}
                        </div>
                      )}
                      {product.L && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">L:</span> {product.L}
                        </div>
                      )}
                      {product.T && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">T:</span> {product.T}
                        </div>
                      )}
                      {product.R && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">R:</span> {product.R}
                        </div>
                      )}
                      {product.α && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">α:</span> {product.α}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Flutes:</span> {product.flutes}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Material:</span> {product.material}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Coating:</span> {product.coating}
                      </div>
                      <div className="col-span-2 flex items-center">
                        <span className="font-medium mr-1">Series:</span> {product.series}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Parameters - Redesigned for horizontal alignment */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Cutter Configurations */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Cutter Configurations</h3>
                <div className="p-4 space-y-4">
                  {cutterConfigurations.map((config, index) => (
                    <div key={index} className={`border-l-4 ${config.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{config.title}</h4>
                      <p className="text-gray-600 text-sm">{config.description}</p>
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

          {/* Combined Application Scenarios and Material Compatibility in one row */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Applications & Materials</h2>
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
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
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
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{operation}</span>
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
                  {machinableMaterials.map((material, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{material}</span>
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
              <h2 className="text-3xl font-bold">Main Functions</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Workholding and Fixturing",
                  description:
                    "T-slots on machine tables, angle plates, and custom fixtures allow T-nuts to be inserted, twisted, and engaged, providing a robust, reliable, and highly versatile system for clamping workpieces or entire fixture assemblies securely.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Creating Guide Rails and Tracks",
                  description:
                    "T-slots can effectively serve as linear guide rails or tracks for moving components within machinery, automation systems, or specialized equipment, facilitating controlled sliding motion.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Mounting and Securing Components",
                  description:
                    "They provide a standardized method for mounting sensors, guards, accessories, and other components onto machine frames or surfaces, especially where adjustability, repositioning, or quick removal is a design requirement.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Specialized Undercutting Operations",
                  description:
                    "The inherent design of a T-Slot Cutter enables it to perform undercutting tasks, where material is removed beneath an overhanging surface, a feat not easily achievable with standard end mills.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Profile Creation",
                  description:
                    "Enable consistent production with high dimensional accuracy, tight geometric tolerances, and excellent surface quality for critical T-slot applications.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Productivity",
                  description:
                    "Contribute to machining efficiency through optimal cutting parameters, durability, and long tool life for reduced downtime and increased throughput.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
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
                  image: "/images/product-1.jpg",
                  description: "General purpose end mills for a wide range of milling applications.",
                  url: "/standard-tools/milling/end-mills",
                },
                {
                  title: "Face Mills",
                  image: "/images/product-2.jpg",
                  description: "Large diameter cutters for efficient face milling operations.",
                  url: "/standard-tools/milling/face-mills",
                },
                {
                  title: "Thread Mills",
                  image: "/images/product-3.jpg",
                  description: "Specialized tools for thread milling in various materials.",
                  url: "/standard-tools/milling/thread-mills",
                },
                {
                  title: "Chamfer Mills",
                  image: "/images/product-4.jpg",
                  description: "Tools for creating chamfers and beveled edges.",
                  url: "/standard-tools/milling/chamfer",
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
              <h2 className="text-3xl font-bold mb-4">Need Expert Guidance?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal T-Slot Cutter configuration for your specific
                machining requirements, material, and application standards.
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
