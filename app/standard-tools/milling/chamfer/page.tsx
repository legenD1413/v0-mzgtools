import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function ChamferAngleFormingToolsPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "caf-007",
      name: "Tungsten Steel Fixed-Point Drill",
      image: "/images/WGDDZ.png",
      description: "",
      flutes: 2, // Default value for display
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "WGDDZ",
      // Dimensions as separate fields
      d: "4-12mm",
      H: "2-24mm", // Using L1 for H (cutting length)
      L: "50-75mm",
      D: "1-12mm", // Using D for tool diameter
      // Additional specifications
      angle: "60°, 90°, 120°",
      page: "F31",
      application: "Aluminum, aluminum alloy, die-cast aluminum",
      url: "/standard-tools/milling/chamfer/WGDDZ",
    },
    {
      id: "caf-008",
      name: "Tungsten Steel Fixed-Point Drill",
      image: "/images/WGDDZB.png", // Updated to use the new image
      description: "",
      flutes: 2, // Default value for display
      material: "Tungsten Steel",
      coating: "Coated",
      series: "WGDDZB",
      // Dimensions as separate fields
      d: "4-20mm",
      H: "2-40mm", // Using L1 for H (cutting length)
      L: "50-100mm",
      D: "1-20mm", // Using D for tool diameter
      // Additional specifications
      angle: "60°, 90°, 120°",
      page: "F31",
      application:
        "Die prehardened steel, Quenched steel, Alloy steel, Tool steel, Nonferrous metal, Gray cast iron, Common die steel",
      url: "/standard-tools/milling/chamfer/WGDDZB",
    },
    {
      id: "caf-009",
      name: "Tungsten Steel Fixed-Point Drill",
      image: "/images/WGDDZT.png", // Updated to use the new WGDDZT image
      description: "",
      flutes: 2, // Default value for display
      material: "Tungsten Steel",
      coating: "Coated",
      series: "WGDDZT",
      // Dimensions as separate fields
      d: "4-12mm",
      H: "2-24mm", // Using L1 for H (cutting length)
      L: "50-75mm",
      D: "1-12mm", // Using D for tool diameter
      // Additional specifications
      angle: "60°, 90°, 120°",
      page: "F31",
      application:
        "Die prehardened steel, Quenched steel, Alloy steel, Tool steel, Nonferrous metal, Gray cast iron, Common die steel",
      url: "/standard-tools/milling/chamfer/WGDDZT",
    },
    {
      id: "caf-010",
      name: "3-Edge Tungsten Steel Chamfering Cutter",
      image: "/images/WGDJD.png", // Updated to use the new WGDJD image
      description: "",
      flutes: 3, // 3-edge cutter
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "WGDJD",
      // Dimensions as separate fields
      d: "4-12mm",
      H: "2-24mm", // Using L1 for H (cutting length)
      L: "50-75mm",
      D: "1-12mm", // Using D for tool diameter
      // Additional specifications
      angle: "30°, 90°, 120°", // Updated angles based on the technical drawing
      page: "F32",
      application: "Aluminum, aluminum alloy, die-cast aluminum",
      url: "/standard-tools/milling/chamfer/WGDJD",
    },
    {
      id: "caf-011",
      name: "3-Edge Tungsten Steel Chamfering Cutter",
      image: "/images/WGDJDB.png", // Updated to use the new WGDJDB image
      description: "",
      flutes: 3, // 3-edge cutter
      material: "Tungsten Steel",
      coating: "Coated",
      series: "WGDJDB",
      // Dimensions as separate fields
      d: "4-12mm",
      H: "2-24mm", // Using L1 for H (cutting length)
      L: "50-75mm",
      D: "1-12mm", // Using D for tool diameter
      // Additional specifications
      angle: "60°, 90°, 120°",
      page: "F32",
      application:
        "Die prehardened steel, Quenched steel, Alloy steel, Tool steel, Nonferrous metal, Gray cast iron, Common die steel",
      url: "/standard-tools/milling/chamfer/WGDJDB",
    },
    {
      id: "caf-012",
      name: "3-Edge Tungsten Steel Chamfering Cutter",
      image: "/images/WGDJDT.png", // Updated to use the new WGDJDT image
      description: "",
      flutes: 3, // 3-edge cutter
      material: "Tungsten Steel",
      coating: "Coated",
      series: "WGDJDT",
      // Dimensions as separate fields
      d: "4-12mm",
      H: "2-24mm", // Using L1 for H (cutting length)
      L: "50-75mm",
      D: "1-12mm", // Using D for tool diameter
      // Additional specifications
      angle: "60°, 90°, 120°",
      page: "F32",
      application:
        "Die prehardened steel, Quenched steel, Alloy steel, Tool steel, Nonferrous metal, Gray cast iron, Common die steel",
      url: "/standard-tools/milling/chamfer/WGDJDT",
    },
    {
      id: "caf-013",
      name: "Welding edge type ultra-fine particle tungsten steel chamfering cutter",
      image: "/images/SWA45.png",
      description: "",
      flutes: "2,4,6", // Multiple flute options
      material: "Ultra-fine particle tungsten steel",
      coating: "Welding edge type",
      series: "SWA 45°",
      // Dimensions as separate fields
      D: "20-60mm",
      H: "10-30mm",
      h: "16-32mm",
      L: "90-120mm",
      T: "2,4,6", // Add the T parameter (tooth count)
      // Additional specifications
      angle: "45°",
      alpha: "45°", // Add the α parameter
      page: "F33",
      application: "",
      url: "/standard-tools/milling/chamfer/SWA45",
    },
    {
      id: "caf-015",
      name: "Welding edge type ultra-fine particle tungsten steel inclined milling cutter",
      image: "/images/SWA.png",
      description: "",
      flutes: 3, // 3-blade machine type
      material: "Ultra-fine particle tungsten steel",
      coating: "Welding edge type",
      series: "SWA",
      // Dimensions as separate fields
      D: "6-10mm",
      H: "30-40mm",
      h: "10-16mm",
      L: "70-90mm",
      // Additional specifications
      angle: "5°-15°",
      alpha: "5°-15°", // Variable angle range
      page: "F33",
      application: "",
      url: "/standard-tools/milling/chamfer/SWA-3blade",
    },
    {
      id: "caf-014",
      name: "Welding edge type ultra-fine particle tungsten steel Inner hole chamfering cutter",
      image: "/images/SWCS45.png",
      description: "",
      flutes: "1,3", // Multiple flute options
      material: "Ultra-fine particle tungsten steel",
      coating: "Welding edge type",
      series: "SWCS 45°",
      // Dimensions as separate fields
      D: "12-50mm",
      d: "8-12mm",
      L: "60-85mm",
      T: "1,3", // Add the T parameter (tooth count)
      // Additional specifications
      angle: "45°",
      alpha: "45°", // Add the α parameter
      page: "F33",
      application: "",
      url: "/standard-tools/milling/chamfer/SWCS45",
    },
    {
      id: "caf-016",
      name: "Tungsten Steel Inner R Milling Cutter Can Cut Steel for aluminum",
      image: "/images/AL-NRXD.png",
      description: "",
      flutes: 2, // Default value for display
      material: "Tungsten Steel",
      coating: "Coated",
      series: "AL-NRXD",
      // Dimensions as separate fields
      D: "4-12mm",
      R: "0.5-5mm", // Added R parameter
      L: "50-60mm",
      // Additional specifications
      page: "F34",
      application: "Internal R milling cutter for aluminum",
      url: "/standard-tools/milling/chamfer/AL-NRXD",
    },
    {
      id: "caf-017",
      name: "Welding edge type ultra-fine particle tungsten steel outer corner R milling cutter",
      image: "/images/SWCR.png", // Updated to use the actual SWCR image
      description:
        "Precision outer corner radius milling cutter with welded carbide edges for superior finish and durability",
      flutes: 4, // T parameter indicates 4 teeth
      material: "Ultra-fine particle tungsten steel",
      coating: "Welding edge type",
      series: "SWCR",
      // Dimensions as separate fields
      D: "18-64mm",
      d1: "10-22mm", // Add d1 parameter
      R: "3.0R-20R", // Add R parameter for corner radius
      d: "16-22mm",
      L: "100-170mm",
      T: "4", // Add the T parameter (tooth count)
      // Additional specifications
      page: "F34",
      application: "Precision outer corner radius milling for molds, dies and precision components",
      url: "/standard-tools/milling/chamfer/SWCR",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Precision Angle Control",
      description:
        "Accurate chamfer angles from 15° to 90° with tight tolerances for consistent edge breaking and deburring operations.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Superior Edge Quality",
      description:
        "Sharp cutting edges with optimized geometries produce smooth, burr-free chamfered surfaces with excellent finish quality.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Versatile Applications",
      description:
        "Suitable for edge breaking, deburring, lead-in creation, and stress concentration reduction across multiple materials.",
    },
  ]

  // Industries served
  const industries = [
    "Automotive Industry",
    "Aerospace Industry",
    "Mold and Die Making",
    "Electronics Manufacturing",
    "Heavy Machinery",
    "Medical Device Manufacturing",
    "General Machining",
    "Tool and Die Making",
  ]

  // Machining operations
  const machiningOperations = [
    "Edge Breaking and Deburring",
    "Creating Lead-ins",
    "Countersinking Operations",
    "Angle Milling",
    "Chamfer Profiling",
    "Stress Relief Chamfering",
    "Weld Preparation",
    "Aesthetic Edge Finishing",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon Steels",
    "Alloy Steels",
    "Stainless Steels",
    "Tool Steels",
    "Cast Iron",
    "Aluminum Alloys",
    "Copper Alloys",
    "Plastics and Composites",
  ]

  // Tool configurations
  const toolConfigurations = [
    {
      title: "Solid Carbide Tools",
      description:
        "Excellent wear resistance and high-temperature hardness. Ideal for high-speed operations and hard materials with superior surface finish.",
      color: "border-red-600",
    },
    {
      title: "HSS Tools",
      description:
        "Good toughness and cost-effective for general-purpose applications. Suitable for lower cutting speeds and softer materials.",
      color: "border-blue-600",
    },
    {
      title: "Indexable Insert Tools",
      description:
        "Economic advantages in high-volume production with replaceable cutting edges. Combines steel body toughness with carbide insert performance.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Chamfer Angles", value: "15°, 30°, 45°, 60°, 75°, 90° Included" },
    { label: "Tool Materials", value: "HSS, Solid Carbide, Indexable Insert" },
    { label: "Coating Options", value: "TiN, TiAlN, AlCrN, Uncoated" },
    { label: "Flute Count", value: "1, 2, 3, 4, 6 Flutes" },
    { label: "Diameter Range", value: "2mm to 32mm+" },
    { label: "Shank Types", value: "Straight Shank, Weldon Shank" },
    { label: "Coolant Supply", value: "Through-coolant Available" },
    { label: "Customization", value: "Special Angles Available" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section - Enhanced with product-specific information */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
            <Image
              src="/images/chamfer-mills-hero.png"
              alt="Chamfer and Angle Forming Tools Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Chamfer & Angle Forming Tools
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Chamfer / Angle Forming Tools</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  Specialized cutting tools designed for creating precise beveled edges and angled surfaces. Our chamfer
                  and angle forming tools excel in edge breaking, deburring, and creating functional lead-ins across
                  diverse materials and applications, ensuring superior edge quality and enhanced part functionality.
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
                    src="/images/WGDJD.png"
                    alt="3-Edge Tungsten Steel Chamfering Cutter Technical Drawing"
                    width={500}
                    height={300}
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
          {/* Introduction Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Introduction</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Chamfer and Angle Forming tools are specialized cutting tools used in machining operations to create
                    a bevel or an angled surface on the edge of a workpiece or around a hole. This process, known as
                    chamfering or angle milling, is crucial for various functional and aesthetic purposes. These tools
                    remove a precise amount of material to form a sloped edge, replacing a sharp 90-degree corner with
                    an angled one.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    They are available in a wide variety of designs, including solid carbide tools, High-Speed Steel
                    (HSS) tools, and indexable insert cutters, catering to different materials and application
                    requirements. The versatility of these tools makes them indispensable in modern manufacturing
                    processes where precision edge finishing is critical.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Precision Angles:</strong> 15° to 90° range
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Multiple Materials:</strong> HSS, Carbide, Indexable
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Advanced Coatings:</strong> TiN, TiAlN, AlCrN
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Flute Options:</strong> 1-6 flutes available
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Drawing Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Drawing</h2>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-3xl h-[300px] mb-6">
                  <Image
                    src="/images/WGDJD.png"
                    alt="WGDJD 3-Edge Tungsten Steel Chamfering Cutter Technical Drawing"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="max-w-3xl text-center">
                  <h3 className="text-xl font-bold mb-2">WGDJD Series - 3-Edge Tungsten Steel Chamfering Cutter</h3>
                  <p className="text-gray-600 mb-4">
                    Technical drawing showing the dimensions and available angle options (30°, 90°, 120°) for the WGDJD
                    series. These 3-edge chamfering cutters are specifically designed for aluminum and aluminum alloy
                    applications.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Diameter (D)</span>
                      <span className="font-medium">1-12mm</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Shank (d)</span>
                      <span className="font-medium">4-12mm</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Cutting Length (L1)</span>
                      <span className="font-medium">2-24mm</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Overall Length (L)</span>
                      <span className="font-medium">50-75mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SWCR Technical Drawing Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">SWCR Series - Outer Corner R Milling Cutter</h2>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-3xl h-[300px] mb-6">
                  <Image
                    src="/images/SWCR.png"
                    alt="SWCR Series - Welding edge type ultra-fine particle tungsten steel outer corner R milling cutter"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="max-w-3xl text-center">
                  <h3 className="text-xl font-bold mb-2">SWCR Series - Outer Corner R Milling Cutter</h3>
                  <p className="text-gray-600 mb-4">
                    Technical drawing showing the dimensions of the SWCR series outer corner radius milling cutter.
                    These specialized tools feature welded ultra-fine particle tungsten steel cutting edges for
                    precision outer corner radius milling in mold and die applications.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Diameter (D)</span>
                      <span className="font-medium">18-64mm</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Inner Diameter (d1)</span>
                      <span className="font-medium">10-22mm</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Shank (d)</span>
                      <span className="font-medium">16-22mm</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Overall Length (L)</span>
                      <span className="font-medium">100-170mm</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Corner Radius (R)</span>
                      <span className="font-medium">3.0R-20R</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="block text-sm text-gray-500">Tooth Count (T)</span>
                      <span className="font-medium">4</span>
                    </div>
                  </div>
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
                      {product.R && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">R:</span> {product.R}
                        </div>
                      )}
                      {product.H && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">H:</span> {product.H}
                        </div>
                      )}
                      {product.L && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">L:</span> {product.L}
                        </div>
                      )}
                      {product.h && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">h:</span> {product.h}
                        </div>
                      )}
                      {product.T && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">T:</span> {product.T}
                        </div>
                      )}
                      {product.alpha && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">α:</span> {product.alpha}
                        </div>
                      )}
                      {product.d && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">d:</span> {product.d}
                        </div>
                      )}
                      {product.d1 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">d1:</span> {product.d1}
                        </div>
                      )}
                      {product.page && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Page:</span> {product.page}
                        </div>
                      )}
                      {product.series && (
                        <div className="col-span-2 flex items-center">
                          <span className="font-medium mr-1">Series:</span> {product.series}
                        </div>
                      )}
                    </div>
                    {product.coatingOptions && (
                      <div className="col-span-2 mt-2 pt-2 border-t border-gray-100">
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Coating Options:</span>
                          <div className="flex gap-1">
                            {product.coatingOptions.map((option, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-gray-100 text-xs rounded-full">
                                {option}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Series Comparison Section - Updated to include WGDJD */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Series Comparison</h2>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-[180px] mb-4">
                    <Image
                      src="/images/WGDDZ.png"
                      alt="WGDDZ Series Technical Drawing"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">WGDDZ Series</h3>
                  <p className="text-gray-600 mb-4 text-center text-sm">
                    Uncoated tungsten steel fixed-point drills optimized for aluminum and aluminum alloy applications.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-[180px] mb-4">
                    <Image
                      src="/images/WGDDZB.png"
                      alt="WGDDZB Series Technical Drawing"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">WGDDZB Series</h3>
                  <p className="text-gray-600 mb-4 text-center text-sm">
                    Coated tungsten steel fixed-point drills with extended size range for harder materials.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-[180px] mb-4">
                    <Image src="/images/SWCR.png" alt="SWCR Series Technical Drawing" fill className="object-contain" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">SWCR Series</h3>
                  <p className="text-gray-600 mb-4 text-center text-sm">
                    Welding edge type ultra-fine particle tungsten steel outer corner R milling cutter for precision
                    mold and die work.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-[180px] mb-4">
                    <Image
                      src="/images/WGDJD.png"
                      alt="WGDJD Series Technical Drawing"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">WGDJD Series</h3>
                  <p className="text-gray-600 mb-4 text-center text-sm">
                    3-edge tungsten steel chamfering cutters for superior surface finish in aluminum applications.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Series Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Feature
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          WGDDZ Series
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          WGDDZB Series
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          SWCR Series
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          WGDJD Series
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tool Type</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">2-Flute Drill</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">2-Flute Drill</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">4-Tooth R Cutter</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">3-Edge Cutter</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Diameter Range (D)
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">1-12mm</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">1-20mm</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">18-64mm</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">1-12mm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Special Feature
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Fixed-Point</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Fixed-Point, Coated</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Corner Radius (3.0R-20R)</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">3-Edge Design</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Primary Application
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Aluminum, aluminum alloy</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          Steel, alloy steel, cast iron (Extended range)
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          Mold and die making, precision outer corner radius
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          Aluminum, aluminum alloy (Superior finish)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Parameters - Redesigned for horizontal alignment */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tool Configurations */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Tool Configurations</h3>
                <div className="p-4 space-y-4">
                  {toolConfigurations.map((config, index) => (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Edge Breaking and Deburring",
                  description:
                    "Remove sharp edges and burrs left by previous machining operations, improving part handling safety and preventing interference with assembly.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Creating Lead-ins",
                  description:
                    "Act as lead-ins to guide parts during assembly, making the process smoother and preventing damage to components during mating operations.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Improving Aesthetics",
                  description:
                    "Provide a more finished and professional appearance to parts compared to sharp, unfinished edges, enhancing overall product quality.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Reducing Stress Concentrations",
                  description:
                    "Help distribute stress more evenly by removing sharp corners, reducing crack initiation and enhancing the part's fatigue life.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Edge Protection",
                  description:
                    "Chamfered edges are less prone to chipping or damage during handling, transport, or use compared to sharp corners.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Process Preparation",
                  description:
                    "Prepare edges for subsequent processes like welding, painting, or coating, ensuring better adhesion and coverage.",
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

          {/* Product Performance */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The performance of chamfer and angle forming tools is influenced by several factors, crucial for
                    achieving desired results and efficiency. Tool material selection plays a critical role, with
                    High-Speed Steel (HSS) offering good toughness and cost-effectiveness for general-purpose
                    applications, while solid carbide provides excellent wear resistance and high-temperature hardness
                    for demanding operations.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Indexable insert tools combine the toughness of steel tool bodies with the wear resistance of
                    carbide inserts, offering economic advantages in high-volume production. Advanced coatings such as
                    TiN, TiAlN, and AlCrN enhance lubricity, reduce friction, and improve heat and wear resistance.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    Performance Factors
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Cutting Speed:</strong> 200-300 m/min typical
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Feed Rate:</strong> 0.1 mm/tooth typical
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Surface Finish:</strong> High-quality, smooth
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Tool Life:</strong> Extended with proper parameters
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
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
                  title: "Engraving Tools",
                  image: "/images/engraving-tools-hero.png",
                  description: "Precision tools for engraving and fine detail work.",
                  url: "/standard-tools/milling/engraving",
                },
                {
                  title: "Thread Mills",
                  image: "/images/thread-mills-hero.png",
                  description: "Specialized tools for thread milling operations.",
                  url: "/standard-tools/milling/thread-mills",
                },
                {
                  title: "Face Mills",
                  image: "/images/product-4.jpg",
                  description: "Large diameter tools for face milling operations.",
                  url: "/standard-tools/milling/face-mills",
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
                Our technical team can help you select the optimal chamfer and angle forming tool configuration for your
                specific edge finishing requirements, material, and application.
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
