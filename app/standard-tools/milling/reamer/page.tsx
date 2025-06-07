import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function ReamersPage() {
  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Precision Finishing",
      description:
        "Achieve tight tolerances (IT5-IT8) and superior surface finishes (Ra 0.4-1.6 μm) for critical hole applications.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Advanced Materials",
      description:
        "Available in HSS, Cobalt HSS, Solid Carbide, Carbide-Tipped, Cermet, and PCD options for optimal performance.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Specialized Designs",
      description:
        "Multiple flute configurations and geometries engineered for specific applications and material types.",
    },
  ]

  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "reamer-013",
      name: "Straight-Edged Tungsten Steel Reamer 55°",
      image: "/images/WGZCJD.png",
      description: "Straight groove coated reamer for precision hole finishing",
      flutes: "4,6",
      material: "Tungsten Steel",
      coating: "Coated",
      series: "WGZCJD",
      // Dimensions as separate fields
      d: "3-12mm",
      H: "50mm",
      L: "100mm",
      D: "3-12mm",
      // Additional specifications
      tolerance: "H7",
      page: "F44",
      application: "Straight groove coated reamer",
      url: "/standard-tools/milling/reamer/tungsten-steel-55",
    },
    {
      id: "reamer-014",
      name: "Straight-Edged Tungsten Steel Reamer 55°",
      image: "/images/WGZCJD.png",
      description: "Uncoated straight groove aluminum reamer for precision hole finishing",
      flutes: "4,6",
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-WGZCJD",
      // Dimensions as separate fields
      d: "3-12mm",
      H: "50mm",
      L: "100mm",
      D: "3-12mm",
      // Additional specifications
      tolerance: "H7",
      page: "F44",
      application: "Uncoated straight groove aluminum",
      url: "/standard-tools/milling/reamer/aluminum-tungsten-steel-55",
    },
    {
      id: "reamer-015",
      name: "Spiral-Edged Tungsten Steel Reamer 55°",
      image: "/images/WGLXJD.png",
      description: "Spiral groove coated reamer for precision hole finishing",
      flutes: "4,6",
      material: "Tungsten Steel",
      coating: "Coated",
      series: "WGLXJD",
      // Dimensions as separate fields
      d: "3-12mm",
      H: "50mm",
      L: "100mm",
      D: "3-12mm",
      // Additional specifications
      tolerance: "H7",
      page: "F44",
      application: "Spiral groove coated reamer",
      url: "/standard-tools/milling/reamer/spiral-tungsten-steel-55",
    },
    {
      id: "reamer-016",
      name: "Spiral-Edged Tungsten Steel Reamer 55°",
      image: "/images/WGLXJD.png",
      description: "Uncoated spiral groove aluminum reamer for precision hole finishing",
      flutes: "4,6",
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-WGLXJD",
      // Dimensions as separate fields
      d: "3-12mm",
      H: "50mm",
      L: "100mm",
      D: "3-12mm",
      // Additional specifications
      tolerance: "H7",
      page: "F44",
      application: "Uncoated spiral groove aluminum",
      url: "/standard-tools/milling/reamer/aluminum-spiral-tungsten-steel-55",
    },
  ]

  // Industries served
  const industries = [
    "Automotive Industry",
    "Aerospace Industry",
    "Tool and Die Making",
    "Machinery Manufacturing",
    "Medical Device Manufacturing",
    "Electronics and Telecommunications",
    "Firearms Manufacturing",
    "General Engineering",
    "Repair, Maintenance, and Overhaul (MRO)",
  ]

  // Reamer types
  const reamerTypes = [
    "Hand Reamers",
    "Machine Reamers (Chucking Reamers)",
    "Straight Flute Reamers",
    "Spiral/Helical Flute Reamers",
    "Solid Reamers",
    "Expansion Reamers",
    "Adjustable Reamers",
    "Carbide Tipped Reamers",
    "Shell Reamers",
    "Taper Reamers",
    "Dowel Pin Reamers",
    "Floating Reamers",
  ]

  // Materials that can be machined
  const machinableMaterials = [
    "Carbon and Alloy Steels",
    "Stainless Steels",
    "Cast Iron",
    "Aluminum and Aluminum Alloys",
    "Copper and Copper Alloys",
    "Titanium and Titanium Alloys",
    "Nickel-based Superalloys",
    "Plastics and Composites",
    "Hardened Steels (with appropriate reamer)",
  ]

  // Main functions
  const mainFunctions = [
    {
      title: "Enlarge Hole Diameter to Exact Size",
      description:
        "Bring a hole to a very precise final diameter by removing a minimal layer of material to achieve the target size.",
      icon: <Target className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Improve Dimensional Accuracy",
      description:
        "Achieve tight diametral tolerances (IT6 to IT8 grade, some capable of IT5 or better) for ensuring correct fits.",
      icon: <Layers className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Enhance Surface Finish",
      description: "Produce smooth, clean internal surfaces with roughness values of Ra 0.4 μm to Ra 1.6 μm or better.",
      icon: <Tool className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Correct Hole Geometry",
      description:
        "Improve roundness, straightness, and cylindrical form of holes, correcting issues from previous machining steps.",
      icon: <Settings className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Produce Specific Hole Fits",
      description:
        "Prepare holes for interference fits, transition fits, or clearance fits required for precision assemblies.",
      icon: <Shield className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Deburring and Minor Chamfering",
      description:
        "Some reamer designs can perform light deburring or create small lead-in chamfers at hole entrances.",
      icon: <Zap className="h-6 w-6 text-red-600" />,
    },
  ]

  // Specifications
  const specifications = [
    { label: "Nominal Diameter (D)", value: "0.1mm to 100mm+" },
    { label: "Shank Type", value: "Straight, Morse Taper" },
    { label: "Number of Flutes (Z)", value: "3 to 16+" },
    { label: "Flute Geometry", value: "Straight, Right-Hand Helix, Left-Hand Helix" },
    { label: "Chamfer Lead Angle", value: "30°, 45°, 60°" },
    { label: "Material Options", value: "HSS, Cobalt HSS, Carbide, Cermet, PCD" },
    { label: "Coating Options", value: "TiN, TiCN, TiAlN, AlCrN, DLC" },
    { label: "Tolerance Class", value: "H7, H6, JS7, etc." },
    { label: "Coolant Options", value: "External, Through Coolant" },
    { label: "Achievable Surface Finish", value: "Ra 0.4 μm to 1.6 μm" },
  ]

  // Operational considerations
  const operationalConsiderations = [
    {
      title: "Correct Pre-Drilled Hole Size",
      description:
        "Critical for proper reaming. Insufficient stock leads to rubbing; excessive stock can overload the reamer.",
      color: "border-red-600",
    },
    {
      title: "Alignment",
      description: "Precise alignment between the reamer's axis and the axis of the pre-existing hole is paramount.",
      color: "border-blue-600",
    },
    {
      title: "Cutting Speed and Feed",
      description: "Speeds generally 1/2 to 2/3 of drilling speeds; feeds often 2-3 times higher than drilling.",
      color: "border-green-600",
    },
    {
      title: "Coolant/Lubrication",
      description: "Essential for cooling, chip flushing, improving surface finish, and extending tool life.",
      color: "border-yellow-600",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section - Enhanced with product-specific information */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
            <Image src="/images/milling-tools.jpg" alt="Reamers Background" fill className="object-cover" priority />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Precision Hole Finishing Tools
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Reamers</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                  High-precision rotary cutting tools designed for enlarging, finishing, and significantly improving the
                  dimensional accuracy, geometric form, and surface finish of existing holes. Available in various
                  materials, coatings, and designs to achieve tight tolerances and superior surface quality.
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
                    src="/placeholder.svg?height=500&width=500"
                    alt="Collection of Precision Reamers"
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
            <div className="prose prose-lg max-w-none">
              <p className="mb-4 text-base leading-normal text-gray-700">
                A reamer is a precision rotary cutting tool meticulously designed for the secondary operation of
                enlarging, finishing, and significantly improving the dimensional accuracy, geometric form, and surface
                finish of existing holes. Unlike drills, which are primarily for hole creation, reamers are intended to
                remove a very small and controlled amount of material from a hole previously made by drilling, boring,
                or coring.
              </p>
              <p className="mb-4 text-base leading-normal text-gray-700">
                This process allows the hole to achieve a highly precise final diameter, excellent roundness
                (circularity), straightness, and a smooth internal surface. Reamers typically feature multiple cutting
                edges (flutes) arranged along their body and operate at lower cutting speeds but often higher feed rates
                compared to drilling operations.
              </p>
              <p className="mb-4 text-base leading-normal text-gray-700">
                Their use is critical in countless manufacturing applications where tight tolerances, superior hole
                quality, and proper component fit are essential. They are available in a vast array of types, sizes,
                materials, and coatings to suit diverse workpiece materials and specific machining requirements.
              </p>
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
                      {product.d && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">d:</span> {product.d}
                        </div>
                      )}
                      {product.D && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">D:</span> {product.D}
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
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Flutes:</span> {product.flutes}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Page:</span> {product.page}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Coating:</span> {product.coating}
                      </div>
                      {product.hardness && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Hardness:</span> {product.hardness}
                        </div>
                      )}
                      <div className="col-span-2 flex items-center">
                        <span className="font-medium mr-1">Series:</span> {product.series}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Functions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Main Functions</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {mainFunctions.map((func, index) => (
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
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reamer Types */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Reamer Types
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {reamerTypes.map((type, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                      <span className="text-sm">{type}</span>
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

          {/* Product Performance */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-sm max-w-none">
                  <h3 className="text-xl font-bold mb-4">Tool Material and Coating</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>High-Speed Steel (HSS):</strong> Remains widely used for hand reamers and general-purpose
                      machine reamers due to its good toughness and cost-effectiveness.
                    </li>
                    <li>
                      <strong>Cobalt HSS (e.g., M35, M42):</strong> Offers increased hot hardness and wear resistance
                      compared to standard HSS, making it suitable for reaming tougher materials like stainless steels
                      and heat-resistant alloys.
                    </li>
                    <li>
                      <strong>Solid Carbide:</strong> Provides superior rigidity (reducing deflection), exceptional wear
                      resistance, and permits higher cutting speeds and significantly longer tool life, especially in
                      abrasive materials, hardened steels, cast iron, and high-volume production.
                    </li>
                    <li>
                      <strong>Carbide Tipped:</strong> HSS body with brazed carbide cutting edges, offering a balance of
                      carbide performance at the cutting edge with the toughness of an HSS body.
                    </li>
                    <li>
                      <strong>Cermet:</strong> Known for producing outstanding surface finishes and offering good wear
                      resistance, often selected for finishing operations in steels and cast irons.
                    </li>
                    <li>
                      <strong>Polycrystalline Diamond (PCD):</strong> The optimal choice for reaming highly abrasive
                      non-ferrous materials such as high-silicon aluminum alloys, metal matrix composites, carbon fiber
                      reinforced plastics, and GRP.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-4">Cutting Geometry</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Number of Flutes:</strong> Typically range from 3 to 16 or more. A higher number of flutes
                      generally provides better guidance within the hole, leading to improved roundness and surface
                      finish, but reduces chip space.
                    </li>
                    <li>
                      <strong>Flute Type:</strong>
                      <ul className="ml-6 mt-2 space-y-2">
                        <li>
                          <strong>Straight Flutes:</strong> Most common for general-purpose reaming, especially in
                          through-holes where chips can pass through.
                        </li>
                        <li>
                          <strong>Helical Flutes:</strong> Right-Hand Helix often used to bridge interruptions like
                          keyways or cross-holes within the bore. Left-Hand Helix designed to push chips forward, away
                          from the shank.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Chamfer Lead / Bevel Lead:</strong> The angled cutting portion at the front of the reamer
                      that performs most of the material removal. The length and angle influence chip thickness, cutting
                      forces, and surface finish.
                    </li>
                    <li>
                      <strong>Margin:</strong> A narrow cylindrical land immediately behind the cutting edge that runs
                      along the flute. It burnishes the hole surface, contributing to a smooth finish and guiding the
                      reamer.
                    </li>
                    <li>
                      <strong>Body Clearance and Back Taper:</strong> A slight decrease in diameter from the cutting end
                      towards the shank, preventing rubbing against the freshly machined surface.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    Performance Indicators
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Achievable Accuracy:</strong> IT5 to IT8 tolerance grades
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Surface Finish:</strong> Ra 0.4 μm to 1.6 μm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Roundness:</strong> Excellent circularity control
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Straightness:</strong> Superior hole alignment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Tool Life:</strong> Varies by material and coating
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-bold mb-3">Rigidity and Stability</h4>
                    <p className="text-sm text-gray-600">
                      The reamer itself, tool holder, workpiece clamping, and machine tool must all be highly rigid to
                      prevent vibration, ensure hole accuracy, and maximize tool life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Parameters */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
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

          {/* Common Types of Reamers */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Common Types of Reamers</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">By Operation Method</h3>
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-base mb-2">Hand Reamers</h4>
                    <p className="text-gray-600 text-sm">
                      Square on the shank for manual use with a tap wrench; long starting taper.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-2">Machine Reamers (Chucking Reamers)</h4>
                    <p className="text-gray-600 text-sm">
                      For use in machine tools; straight or taper shanks for automated precision reaming.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">By Flute Design</h3>
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-base mb-2">Straight Flute</h4>
                    <p className="text-gray-600 text-sm">
                      Most common for general-purpose reaming, especially in through-holes where chips can pass through.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-2">Spiral/Helical Flute</h4>
                    <p className="text-gray-600 text-sm">
                      Available in right-hand and left-hand configurations for specific chip evacuation needs and hole
                      types.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">By Expandability</h3>
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-base mb-2">Solid Reamers</h4>
                    <p className="text-gray-600 text-sm">Fixed diameter for consistent hole sizing.</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-base mb-2">Expansion Reamers</h4>
                    <p className="text-gray-600 text-sm">
                      Slightly adjustable diameter via an internal screw for fine-tuning hole size.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-2">Adjustable Reamers</h4>
                    <p className="text-gray-600 text-sm">
                      Replaceable blades allow significant diameter adjustment for versatility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Specialized Function Reamers</h3>
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-base mb-2">Taper Reamers</h4>
                    <p className="text-gray-600 text-sm">
                      For finishing tapered holes (e.g., Morse Tapers, pipe tapers, pin tapers).
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-base mb-2">Dowel Pin Reamers</h4>
                    <p className="text-gray-600 text-sm">
                      Specifically sized for dowel pin holes (often in sets of undersize/oversize).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-2">Floating Reamers</h4>
                    <p className="text-gray-600 text-sm">
                      Used with floating holders to compensate for minor machine/spindle misalignments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Considerations */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Operational Considerations</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <h3 className="text-lg font-bold p-4 border-b border-gray-100">Critical Factors for Success</h3>
              <div className="p-4 space-y-4">
                {operationalConsiderations.map((config, index) => (
                  <div key={index} className={`border-l-4 ${config.color} pl-4 py-2`}>
                    <h4 className="font-bold text-base mb-1">{config.title}</h4>
                    <p className="text-gray-600 text-sm">{config.description}</p>
                  </div>
                ))}
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
                  title: "Drills",
                  image: "/images/product-1.jpg",
                  description: "Tools for creating initial holes before reaming.",
                  url: "/standard-tools/hole-making/drills",
                },
                {
                  title: "Boring Tools",
                  image: "/images/product-2.jpg",
                  description: "Precision tools for enlarging and finishing holes.",
                  url: "/standard-tools/hole-making/boring",
                },
                {
                  title: "End Mills",
                  image: "/images/product-3.jpg",
                  description: "Versatile cutting tools for various milling operations.",
                  url: "/standard-tools/milling/end-mills",
                },
                {
                  title: "Countersinks",
                  image: "/images/product-4.jpg",
                  description: "Tools for creating conical holes for fastener heads.",
                  url: "/standard-tools/hole-making/countersinks",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Hole Making Tools" />
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
                Our technical team can help you select the optimal reamer configuration for your specific machining
                requirements, material, and application.
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
