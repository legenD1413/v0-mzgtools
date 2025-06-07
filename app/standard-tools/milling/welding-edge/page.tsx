import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function WeldingEdgeMillingCuttersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "welding-005",
      name: "Spiral Welding Edge Type Ultra-fine Particle Tungsten Steel MillingCutter-2 BladeOver Center(standardType)",
      image: "/images/SWE2.png",
      description: "2-blade over center milling cutter with spiral welding edge technology for standard applications",
      flutes: "2",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWE2",
      d: "12-25mm",
      H: "30-50mm",
      L: "80-120mm",
      D: "12-25mm",
      application:
        "Application: Over center milling operations with 2-blade design for enhanced chip evacuation and surface finish",
      url: "/standard-tools/milling/welding-edge/swe2",
      page: "F29",
    },
    {
      id: "welding-006",
      name: "Spiral welding edge type ultra-fine particle tungsten steel milling cutter - 2 blade over center (long type)",
      image: "/images/SWEL2.png",
      description:
        "Long-reach 2-blade over center milling cutter with spiral welding edge technology for deep cavities",
      flutes: "2",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWEL2",
      d: "12-25mm",
      H: "40-100mm",
      L: "90-180mm",
      D: "12-25mm",
      application:
        "Application: Deep cavity milling and extended reach applications requiring superior chip evacuation and vibration control",
      url: "/standard-tools/milling/welding-edge/swel2",
      page: "F29",
    },
    {
      id: "welding-007",
      name: "Spiral welding edge type ultra-fine particle tungsten steel milling cutter - 4 blade (standard type)",
      image: "/images/SWE4.png",
      description:
        "4-blade milling cutter with spiral welding edge technology for high-productivity finishing operations",
      flutes: "4",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWE4",
      d: "12-32mm",
      H: "30-70mm",
      L: "80-160mm",
      D: "12-50mm",
      application:
        "Application: High-productivity finishing operations with 4-blade design for superior surface finish and increased feed rates",
      url: "/standard-tools/milling/welding-edge/swe4",
      page: "F29",
    },
    {
      id: "welding-008",
      name: "Spiral welding edge type ultra-fine particle tungsten steel milling cutter - 4 blade (long type)",
      image: "/images/SWEL4.png",
      description:
        "Long-reach 4-blade milling cutter with spiral welding edge technology for deep cavity finishing operations",
      flutes: "4",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWEL4",
      d: "12-32mm",
      H: "40-125mm",
      L: "90-240mm",
      D: "12-50mm",
      application:
        "Application: Deep cavity finishing operations requiring extended reach with superior surface finish and high productivity",
      url: "/standard-tools/milling/welding-edge/swel4",
      page: "F29",
    },
    {
      id: "welding-009",
      name: "Spiral welding edge type ultra-fine particle tungsten steel milling cutter - 4 blade (extra long type)",
      image: "/images/SWELL4.png",
      description:
        "Extra long-reach 4-blade milling cutter with spiral welding edge technology for very deep cavity finishing operations",
      flutes: "4",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWELL4",
      d: "20-32mm",
      H: "100-200mm",
      L: "180-305mm",
      D: "20-50mm",
      application:
        "Application: Very deep cavity finishing operations requiring extreme reach with superior surface finish and high productivity in hard-to-access areas",
      url: "/standard-tools/milling/welding-edge/swell4",
      page: "F29",
    },
    {
      id: "welding-010",
      name: "Spiral welding type ultrafine tungsten steel roughing cutter",
      image: "/images/SWER4.png",
      description:
        "High-performance roughing cutter with spiral welding edge technology for maximum material removal rates",
      flutes: "4,5",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWER4",
      d: "32-42mm",
      H: "60-205mm",
      L: "140-305mm",
      D: "30-50mm",
      application:
        "Application: Heavy-duty roughing operations with enhanced material removal rates and superior chip evacuation",
      url: "/standard-tools/milling/welding-edge/swer4",
      page: "F30",
    },
    {
      id: "welding-011",
      name: "Spiral-welded ultra-fine tungsten steel tubular roughing cutter",
      image: "/images/SWRT.png",
      description:
        "Heavy-duty tubular roughing cutter with spiral-welded ultra-fine tungsten steel inserts for maximum material removal rates",
      flutes: "6,8",
      material: "Steel Body with Ultra-fine Tungsten Carbide Inserts",
      series: "SWRT",
      d: "55-100mm",
      H: '1"-1" 1/4',
      L: "70-115mm",
      D: "60-75mm",
      application:
        "Application: High-volume roughing operations for large workpieces with tubular design for improved rigidity and productivity",
      url: "/standard-tools/milling/welding-edge/swrt",
      page: "F30",
      T: "6,8",
    },
    {
      id: "welding-012",
      name: "Spiral-welded ultra-fine tungsten steel tubular milling cutter (long type)",
      image: "/images/SWT.png",
      description:
        "Extended reach tubular milling cutter with spiral-welded ultra-fine tungsten steel inserts for deep cavity face milling operations",
      flutes: "6,8",
      material: "Steel Body with Ultra-fine Tungsten Carbide Inserts",
      series: "SWT",
      d: "48-100mm",
      H: '1"-1" 1/4',
      L: "65-115mm",
      D: "60-75mm",
      application:
        "Application: Extended reach face milling operations for deep cavities and hard-to-access areas with tubular design for enhanced rigidity and precision",
      url: "/standard-tools/milling/welding-edge/swt",
      page: "F30",
      T: "6,8",
    },
    {
      id: "welding-013",
      name: "Welding edge type ultra-fine particle tungsten steel tubular face milling cutter",
      image: "/images/SWFT.png",
      description:
        "Large diameter tubular face milling cutter with ultra-fine particle tungsten steel inserts for precision face milling operations",
      flutes: "8,10,14,16",
      material: "Steel Body with Ultra-fine Tungsten Carbide Inserts",
      series: "SWFT",
      d: '1"-2"',
      H: "15mm",
      L: "55",
      D: "75-150mm",
      d1: "46-80mm",
      application:
        "Application: Large diameter precision face milling operations with variable tooth count (8,10,14,16) for superior surface finish and high productivity in flat surface machining",
      url: "/standard-tools/milling/welding-edge/swft",
      page: "F30",
      T: "8,10,14,16",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Cost-Effective Construction",
      description:
        "Combines tough steel body with hardened cutting edges made from tungsten carbide or high-speed steel, providing excellent balance of toughness and wear resistance at competitive cost.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Ultra-Fine Particle Technology",
      description:
        "Advanced ultra-fine particle tungsten steel cutting edges deliver superior hardness, wear resistance, and edge strength for extended tool life and higher cutting speeds.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Spiral Edge Design",
      description:
        "Helically arranged cutting edges provide smoother cutting action, reduced vibration, lower cutting forces, and efficient chip evacuation for superior performance.",
    },
  ]

  // Industries served
  const industries = [
    "Automotive Manufacturing",
    "Aerospace Industry",
    "Heavy Equipment Manufacturing",
    "Mold and Die Making",
    "Shipbuilding Industry",
    "Energy Sector",
    "General Engineering",
    "Metal Fabrication",
  ]

  // Machining operations
  const machiningOperations = [
    "Face Milling",
    "Shoulder Milling",
    "Slotting Operations",
    "Rough Pocketing",
    "Contouring (2D and 3D)",
    "Helical Interpolation",
    "Ramping Operations",
    "High-Volume Material Removal",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon Steels and Alloy Steels",
    "Hardened Steels (Above HRC 45)",
    "Stainless Steels (All Grades)",
    "Cast Iron (Grey and Ductile)",
    "Titanium Alloys",
    "Nickel-Based Superalloys (Inconel)",
    "Tool Steels",
    "Aluminum Alloys",
    "Copper and Brass",
  ]

  // Product types
  const productTypes = [
    {
      title: "General Welding Edge Cutters",
      description:
        "Cost-effective solution combining tough steel body with hardened cutting edges. Suitable for general engineering and job shop applications with good material removal rates.",
      color: "border-red-600",
    },
    {
      title: "Spiral Welding Edge Ultra-Fine",
      description:
        "High-performance variant with ultra-fine particle tungsten steel edges. Spiral design provides smoother cutting, reduced vibration, and superior surface finish.",
      color: "border-blue-600",
    },
    {
      title: "Tubular Roughing Cutters",
      description:
        "Optimized for high material removal rates with spiral-welded ultra-fine tungsten steel edges. Shell mill design for heavy-duty roughing operations.",
      color: "border-green-600",
    },
    {
      title: "Tubular Face Milling Cutters",
      description:
        "Designed for producing flat surfaces with excellent finish and accuracy. Ultra-fine particle tungsten steel ensures consistent surface quality and flatness.",
      color: "border-purple-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Construction Type", value: "Welded/Brazed Cutting Edges" },
    { label: "Body Material", value: "High-Strength Steel" },
    { label: "Cutting Edge Material", value: "Ultra-Fine Particle Tungsten Carbide" },
    { label: "Mounting Type", value: "Arbor Mount / Shell Mill Design" },
    { label: "Helix Angle", value: "35° to 45° (Variable)" },
    { label: "Coating Options", value: "TiAlN, AlTiN, PVD Diamond" },
    { label: "Diameter Range", value: "40mm to 300mm+" },
    { label: "Application Focus", value: "High MRR and Surface Quality" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
            <Image
              src="/images/milling-tools.jpg"
              alt="Welding Edge Milling Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Welding Edge Technology
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Welding Edge Milling Cutters</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  Advanced welding edge milling cutters combining cost-effective steel bodies with ultra-fine particle
                  tungsten carbide cutting edges. Engineered for superior performance in demanding applications, from
                  high-volume roughing to precision face milling, with spiral edge designs for enhanced chip evacuation
                  and reduced vibration across diverse materials and industries.
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milling-JvsTK9mKVpWhb6WORtlP22ZwwqQAca.png"
                    alt="Collection of Welding Edge Milling Cutters"
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
                    Welding edge milling cutters are designed for cost-effective machining by combining a tough steel
                    body with hardened cutting edges, typically made from tungsten carbide or high-speed steel, which
                    are welded or brazed onto the body. This construction provides a good balance of toughness from the
                    body and wear resistance from the cutting edges. Performance can vary widely based on the specific
                    grade of cutting edge material, geometry, and the quality of the welding/brazing process.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The spiral welding edge type with ultra-fine particle tungsten steel represents a higher performance
                    variant within this category. The use of ultra-fine particle tungsten steel (carbide) for the
                    cutting edges significantly enhances hardness, wear resistance, and edge strength. This allows for
                    higher cutting speeds, extended tool life even in abrasive materials, and improved surface finishes
                    on the workpiece.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The spiral welding edge design, where cutting edges are arranged helically, contributes to a
                    smoother cutting action, reduced vibration, lower cutting forces, and efficient chip evacuation,
                    especially upwards away from the cut. This makes it particularly effective for deeper axial cuts and
                    higher feed rates per tooth, maximizing material removal rates while maintaining excellent surface
                    quality.
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
                        <strong>Construction:</strong> Welded/Brazed Edges
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Edge Material:</strong> Ultra-Fine Tungsten Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Design:</strong> Spiral Edge Configuration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Mounting:</strong> Arbor/Shell Mill Design
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Roughing to Finishing
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
                      <div className="flex items-center">
                        <span className="font-medium mr-1">D:</span> {product.D}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">d:</span> {product.d}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">H:</span> {product.H}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">L:</span> {product.L}
                      </div>
                      {product.d1 && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">d1:</span> {product.d1}
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium mr-1">T:</span> {product.flutes}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Page:</span> {product.page}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Series:</span> {product.series}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Series Comparison Table */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Series Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border px-4 py-3 text-left text-sm font-medium text-gray-700">Feature</th>
                    <th className="border px-4 py-3 text-left text-sm font-medium text-gray-700">SWE2</th>
                    <th className="border px-4 py-3 text-left text-sm font-medium text-gray-700">SWEL2</th>
                    <th className="border px-4 py-3 text-left text-sm font-medium text-gray-700">SWE4</th>
                    <th className="border px-4 py-3 text-left text-sm font-medium text-gray-700">SWEL4</th>
                    <th className="border px-4 py-3 text-left text-sm font-medium text-gray-700">SWELL4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Flutes</td>
                    <td className="border px-4 py-3 text-sm">2</td>
                    <td className="border px-4 py-3 text-sm">2</td>
                    <td className="border px-4 py-3 text-sm">4</td>
                    <td className="border px-4 py-3 text-sm">4</td>
                    <td className="border px-4 py-3 text-sm">4</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Cutting Diameter (D)</td>
                    <td className="border px-4 py-3 text-sm">12-25mm</td>
                    <td className="border px-4 py-3 text-sm">12-25mm</td>
                    <td className="border px-4 py-3 text-sm">12-50mm</td>
                    <td className="border px-4 py-3 text-sm">12-50mm</td>
                    <td className="border px-4 py-3 text-sm">20-50mm</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Shank Diameter (d)</td>
                    <td className="border px-4 py-3 text-sm">12-25mm</td>
                    <td className="border px-4 py-3 text-sm">12-25mm</td>
                    <td className="border px-4 py-3 text-sm">12-32mm</td>
                    <td className="border px-4 py-3 text-sm">12-32mm</td>
                    <td className="border px-4 py-3 text-sm">20-32mm</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Cutting Length (H)</td>
                    <td className="border px-4 py-3 text-sm">30-50mm</td>
                    <td className="border px-4 py-3 text-sm">40-100mm</td>
                    <td className="border px-4 py-3 text-sm">30-70mm</td>
                    <td className="border px-4 py-3 text-sm">40-125mm</td>
                    <td className="border px-4 py-3 text-sm">100-200mm</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Overall Length (L)</td>
                    <td className="border px-4 py-3 text-sm">80-120mm</td>
                    <td className="border px-4 py-3 text-sm">90-180mm</td>
                    <td className="border px-4 py-3 text-sm">80-160mm</td>
                    <td className="border px-4 py-3 text-sm">90-240mm</td>
                    <td className="border px-4 py-3 text-sm">180-305mm</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Primary Application</td>
                    <td className="border px-4 py-3 text-sm">General milling with good chip evacuation</td>
                    <td className="border px-4 py-3 text-sm">Deep cavity milling with enhanced chip evacuation</td>
                    <td className="border px-4 py-3 text-sm">High-productivity finishing operations</td>
                    <td className="border px-4 py-3 text-sm">Deep cavity finishing operations</td>
                    <td className="border px-4 py-3 text-sm">Very deep cavity finishing operations</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Reach Capability</td>
                    <td className="border px-4 py-3 text-sm">Standard</td>
                    <td className="border px-4 py-3 text-sm">Long</td>
                    <td className="border px-4 py-3 text-sm">Standard</td>
                    <td className="border px-4 py-3 text-sm">Long</td>
                    <td className="border px-4 py-3 text-sm">Extra Long</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Surface Finish</td>
                    <td className="border px-4 py-3 text-sm">Good</td>
                    <td className="border px-4 py-3 text-sm">Good</td>
                    <td className="border px-4 py-3 text-sm">Excellent</td>
                    <td className="border px-4 py-3 text-sm">Excellent</td>
                    <td className="border px-4 py-3 text-sm">Excellent</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 text-sm font-medium bg-gray-50">Chip Evacuation</td>
                    <td className="border px-4 py-3 text-sm">Excellent</td>
                    <td className="border px-4 py-3 text-sm">Excellent</td>
                    <td className="border px-4 py-3 text-sm">Good</td>
                    <td className="border px-4 py-3 text-sm">Good</td>
                    <td className="border px-4 py-3 text-sm">Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Parameters - Product Types */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Types & Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Product Types */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Product Types</h3>
                <div className="p-4 space-y-4">
                  {productTypes.map((type, index) => (
                    <div key={index} className={`border-l-4 ${type.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{type.title}</h4>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Technical Specifications</h3>
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

          {/* Combined Application Scenarios and Material Compatibility */}
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

          {/* Selection Guide */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Selection Guide</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
              <h3 className="text-xl font-bold mb-4">How to Choose the Right Welding Edge Milling Cutter</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-red-600">Flute Selection (2 vs 4)</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">2-Flute Tools (SWE2, SWEL2):</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Ideal for applications requiring excellent chip evacuation, such as slotting, pocketing, and
                          roughing operations. The larger flute space allows for better chip clearance, reducing the
                          risk of chip recutting and tool damage.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">4-Flute Tools (SWE4, SWEL4, SWELL4):</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Best for finishing operations and applications requiring superior surface finish. The
                          additional cutting edges allow for higher feed rates and productivity while maintaining
                          excellent surface quality.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-red-600">
                    Length Selection (Standard vs Long vs Extra Long)
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Standard Length (SWE2, SWE4):</span>
                        <p className="text-sm text-gray-600 mt-1">
                          For general milling applications with standard reach requirements. Offers the best rigidity
                          and stability for most common machining operations.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Long Length (SWEL2, SWEL4):</span>
                        <p className="text-sm text-gray-600 mt-1">
                          For deep cavity milling and applications requiring extended reach. Balances reach capability
                          with reasonable rigidity for deeper features and hard-to-access areas.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Extra Long Length (SWELL4):</span>
                        <p className="text-sm text-gray-600 mt-1">
                          For very deep cavity milling and extreme reach requirements. Specialized for accessing the
                          deepest features in molds, dies, and complex components where other tools cannot reach.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="text-lg font-semibold mb-2">Application-Based Recommendations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-base mb-2">For General Milling:</h5>
                    <p className="text-sm text-gray-600">SWE2 or SWE4 depending on surface finish requirements</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-base mb-2">For Deep Cavity Milling:</h5>
                    <p className="text-sm text-gray-600">SWEL2 (roughing) or SWEL4 (finishing)</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-base mb-2">For Very Deep Cavity Finishing:</h5>
                    <p className="text-sm text-gray-600">SWELL4 with reduced cutting parameters</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-base mb-2">For High Surface Quality:</h5>
                    <p className="text-sm text-gray-600">SWE4 or SWEL4 with appropriate cutting parameters</p>
                  </div>
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
                  title: "High-Efficiency Face Milling",
                  description:
                    "Produce large, flat surfaces with excellent finish and accuracy using tubular face milling cutters with ultra-fine particle tungsten steel edges.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Heavy-Duty Roughing Operations",
                  description:
                    "Maximize material removal rates with spiral-welded tubular roughing cutters designed for aggressive cutting in large workpieces and forgings.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Contouring & Profiling",
                  description:
                    "Achieve smooth cutting action with spiral edge designs that reduce vibration and provide superior chip evacuation for complex geometries.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Cost-Effective Machining",
                  description:
                    "Balance performance and economy with welded edge construction that combines tough steel bodies with high-performance cutting edges.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Material Processing",
                  description:
                    "Machine diverse materials from carbon steels to superalloys with optimized edge geometries and advanced coating options.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Enhanced Tool Life",
                  description:
                    "Achieve extended tool life through ultra-fine particle tungsten carbide technology and optimized welding/brazing processes.",
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
                  title: "Face Mills",
                  image: "/images/product-1.jpg",
                  description: "Large diameter face mills for efficient surface machining operations.",
                  url: "/standard-tools/milling/face-mills",
                },
                {
                  title: "End Mills",
                  image: "/images/product-2.jpg",
                  description: "Solid carbide end mills for precision milling applications.",
                  url: "/standard-tools/milling/end-mills",
                },
                {
                  title: "Roughing End Mills",
                  image: "/images/product-3.jpg",
                  description: "High material removal rate tools for roughing operations.",
                  url: "/standard-tools/milling/roughing",
                },
                {
                  title: "Ball Nose End Mills",
                  image: "/images/product-4.jpg",
                  description: "Specialized tools for 3D contour machining and curved surfaces.",
                  url: "/standard-tools/milling/ball-nose",
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
                Our technical team can help you select the optimal welding edge milling cutter configuration for your
                specific material removal requirements, surface finish needs, and application demands.
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
