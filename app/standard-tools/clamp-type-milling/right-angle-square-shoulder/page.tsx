import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function RightAngleSquareShoulderPage() {
  // Product data based on Right Angle / Square Shoulder Milling Cutters
  const products = [
    {
      id: "square-shoulder-001",
      name: "Ø63mm Square Shoulder Mill",
      image: "/images/63mm-square-shoulder-mill.png",
      description: "Compact square shoulder milling cutter",
      diameter: "Ø63mm",
      rakeAngle: "+13°",
      flutes: "4 Flutes",
      application: "Small component precision machining",
      features: "High positive rake, excellent chip evacuation",
      maxSpeed: "320 RPM",
      pageNumber: "SS63",
    },
    {
      id: "square-shoulder-002",
      name: "Ø80mm Square Shoulder Mill",
      image: "/images/80mm-square-shoulder-mill.png",
      description: "Standard 80mm square shoulder milling cutter",
      diameter: "Ø80mm",
      rakeAngle: "+10°",
      flutes: "4 Flutes",
      application: "General purpose square shoulder machining",
      features: "Balanced rake angle, versatile performance",
      maxSpeed: "250 RPM",
      pageNumber: "SS80",
    },
    {
      id: "square-shoulder-003",
      name: "Ø100mm Square Shoulder Mill",
      image: "/images/100mm-square-shoulder-mill.png",
      description: "Heavy-duty 100mm square shoulder milling cutter",
      diameter: "Ø100mm",
      rakeAngle: "+5°",
      flutes: "5 Flutes",
      application: "Medium-scale industrial machining",
      features: "Enhanced stability, multi-flute design",
      maxSpeed: "200 RPM",
      pageNumber: "SS100",
    },
    {
      id: "square-shoulder-004",
      name: "Ø125mm Square Shoulder Mill",
      image: "/images/125mm-square-shoulder-mill.png",
      description: "Large diameter square shoulder milling cutter",
      diameter: "Ø125mm",
      rakeAngle: "0°",
      flutes: "5 Flutes",
      application: "Large component machining",
      features: "Neutral rake, heavy-duty construction",
      maxSpeed: "160 RPM",
      pageNumber: "SS125",
    },
    {
      id: "square-shoulder-005",
      name: "Ø160mm Square Shoulder Mill",
      image: "/images/160mm-square-shoulder-mill.png",
      description: "Heavy-duty large diameter milling cutter",
      diameter: "Ø160mm",
      rakeAngle: "-3°",
      flutes: "5 Flutes",
      application: "Heavy industrial machining",
      features: "Negative rake, maximum stability",
      maxSpeed: "125 RPM",
      pageNumber: "SS160",
    },
    {
      id: "square-shoulder-006",
      name: "Ø200mm Square Shoulder Mill",
      image: "/images/200mm-square-shoulder-mill.png",
      description: "Large scale square shoulder milling cutter",
      diameter: "Ø200mm",
      rakeAngle: "-5°",
      flutes: "6 Flutes",
      application: "Large scale planar milling",
      features: "Multi-flute design, superior rigidity",
      maxSpeed: "100 RPM",
      pageNumber: "SS200",
    },
    {
      id: "square-shoulder-007",
      name: "Ø250mm Square Shoulder Mill",
      image: "/images/250mm-square-shoulder-mill.png",
      description: "Maximum diameter square shoulder milling cutter",
      diameter: "Ø250mm",
      rakeAngle: "-7°",
      flutes: "6 Flutes",
      application: "Gantry machine large component machining",
      features: "Maximum negative rake, ultimate stability",
      maxSpeed: "80 RPM",
      pageNumber: "SS250",
    },
    {
      id: "square-shoulder-008",
      name: "High-Speed Square Shoulder Mill",
      image: "/images/high-speed-square-shoulder.png",
      description: "High-speed optimized square shoulder cutter",
      diameter: "Ø63~Ø100mm",
      specialFeature: "High Speed",
      application: "High-speed precision machining",
      features: "Optimized for high RPM, reduced vibration",
      maxSpeed: "400 RPM",
      pageNumber: "SSHS",
    },
    {
      id: "square-shoulder-009",
      name: "Coolant-Through Square Shoulder Mill",
      image: "/images/coolant-through-square-shoulder.png",
      description: "Square shoulder mill with integrated coolant",
      diameter: "Ø80~Ø200mm",
      coolant: "Axial Coolant",
      application: "Extended operation machining",
      features: "Integrated coolant channels, thermal management",
      cooling: "Internal Coolant",
      pageNumber: "SSCT",
    },
    {
      id: "square-shoulder-010",
      name: "Superalloy Square Shoulder Mill",
      image: "/images/superalloy-square-shoulder.png",
      description: "Specialized mill for superalloy machining",
      diameter: "Ø80~Ø160mm",
      material: "Superalloy Optimized",
      application: "Turbine component machining",
      features: "Heat resistant design, extended tool life",
      specialApplication: "Aerospace",
      pageNumber: "SSSU",
    },
    {
      id: "square-shoulder-011",
      name: "Cast Iron Square Shoulder Mill",
      image: "/images/cast-iron-square-shoulder.png",
      description: "Heavy-duty mill for cast iron machining",
      diameter: "Ø100~Ø250mm",
      material: "Cast Iron Optimized",
      application: "Cast iron sprue removal and machining",
      features: "Interrupted cutting capability, robust design",
      specialApplication: "Foundry",
      pageNumber: "SSCI",
    },
    {
      id: "square-shoulder-012",
      name: "Modular Square Shoulder Mill",
      image: "/images/modular-square-shoulder.png",
      description: "Modular design for rapid tool change",
      diameter: "Ø80~Ø200mm",
      specialFeature: "Modular Design",
      application: "High-efficiency production machining",
      features: "Rapid insert replacement, minimal downtime",
      toolChange: "< 2 minutes",
      pageNumber: "SSM",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Target",
      title: "Advanced Geometric Design",
      description:
        "Variable rake angle geometry calibrated to cutter diameter - positive rake for smaller diameters reducing cutting forces, negative rake for larger diameters providing stronger cutting edge.",
    },
    {
      icon: "Shield",
      title: "Maximum Structural Integrity",
      description:
        "Machined from high-strength, pre-hardened tool steel offering maximum rigidity to withstand immense axial and radial cutting forces.",
    },
    {
      icon: "Zap",
      title: "Optimized Cooling System",
      description:
        "Integrated through-coolant channels with high-pressure coolant directed precisely at cutting zone, drastically reducing thermal load and extending insert life.",
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
      case "Layers":
        return <Layers className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Industries served
  const industries = [
    "3-axis and 5-axis CNC Machining Centers",
    "General-purpose Manual Milling Machines",
    "CNC Lathes with Live Tooling",
    "Heavy-duty Gantry Mills",
    "Mold and Die Industry",
    "Aerospace Sector",
    "Automotive Manufacturing",
    "Heavy Equipment Engineering",
    "General Engineering",
    "Mass Production Lines",
  ]

  // Application processes
  const applicationProcesses = [
    "Shoulder Milling",
    "Face Milling (Planing)",
    "Slotting",
    "Ramping and Helical Interpolation",
    "Steel (P) Machining",
    "Stainless Steel (M) Machining",
    "Cast Iron (K) Machining",
    "Superalloys & Titanium (S) Machining",
    "High-Speed Machining",
    "Material-Specific Operations",
  ]

  // Applications
  const applications = [
    "Precise Cavities and Cores",
    "Pockets with Sharp 90° Corners",
    "Structural Components",
    "Wing Spars and Engine Casings",
    "Engine Blocks",
    "Transmission Housings",
    "Chassis Components",
    "Steel Fabrications",
    "Cast-iron Housings",
    "Large Component Squaring",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Diameter-Dependent Rake Angle Geometry",
      description:
        "+13° for DC=63mm, -9° for DC=80mm, -8° for DC=100mm, -7.5° for DC=125mm, -7° for DC=160-250mm. Optimized for each diameter range.",
      color: "border-red-600",
    },
    {
      title: "Multi-Edge Insert System",
      description:
        "High-performance SEMT type square-shaped or double-sided inserts offering up to 8 cutting edges per insert, significantly reducing cost per edge.",
      color: "border-blue-600",
    },
    {
      title: "Robust Clamping & Cooling",
      description:
        "M5.0×14 high-tensile tightening screw with T15H torque spanner. Integrated through-coolant channels deliver coolant directly to cutting edge.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Cutter Body Diameter", value: "Ø63~Ø250mm" },
    { label: "Popular Models", value: "MFWN90080R (80mm), MFWN90100R (100mm)" },
    { label: "Rake Angle Geometry", value: "+13° to -7° (diameter dependent)" },
    { label: "Blade Configuration", value: "Standard, dense, extra-dense pitch" },
    { label: "Insert System", value: "SEMT type, up to 8 cutting edges" },
    { label: "Clamping Mechanism", value: "M5.0×14 high-tensile screw" },
    { label: "Torque Spanner", value: "T15H torque spanner" },
    { label: "Mounting Interface", value: "Metric and imperial arbor mounting" },
    { label: "Cooling System", value: "Integrated through-coolant channels" },
    { label: "Material Compatibility", value: "Steel, stainless, cast iron, superalloys" },
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
                  Clamp Type Milling Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Right Angle / Square Shoulder Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  The Right Angle / Square Shoulder Milling Cutters from MZG Tool Machine company represent the <strong>pinnacle of milling technology</strong>, engineered for unparalleled precision, efficiency, and stability. Their core performance characteristic is the ability to generate a <strong>true 90-degree shoulder in a single pass</strong>, creating a perfectly perpendicular wall-to-floor interface with exceptional surface finish and dimensional accuracy.
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
                    src="/images/right-angle-square-shoulder-hero.png"
                    alt="Professional Right Angle Square Shoulder Milling Cutters Collection"
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
                    The performance is fundamentally driven by an <strong>advanced geometric design</strong>. The cutter bodies feature a variable rake angle geometry that is meticulously calibrated to the cutter's diameter. For smaller diameters, a more positive rake angle is employed to reduce cutting forces, minimizing tool deflection and making them ideal for less rigid machine setups or delicate workpieces.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Conversely, larger diameter cutters feature a <strong>negative rake angle</strong>, which provides a stronger cutting edge, enhances stability during high-load roughing operations on powerful machining centers, and effectively dampens vibrations. The structural integrity of the cutter body is paramount, machined from <strong>high-strength, pre-hardened tool steel</strong> offering maximum rigidity.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    These cutters are designed with <strong>optimized flute spaces and integrated through-coolant channels</strong>. This dual system guarantees efficient chip evacuation, even in deep slotting or pocketing operations, preventing chip jamming and re-cutting. The high-pressure coolant directed precisely at the cutting zone drastically reduces thermal load, mitigating heat-related wear and extending insert life.
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
                        <strong>Diameter Range:</strong> Ø63~Ø250mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Popular Models:</strong> MFWN90080R, MFWN90100R
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert System:</strong> SEMT type, up to 8 cutting edges
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Clamping:</strong> M5.0×14 screw with T15H spanner
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Cooling:</strong> Integrated through-coolant channels
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
                      {product.diameter && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Diameter:</span>
                          <span className="text-gray-900">{product.diameter}</span>
                        </div>
                      )}
                      {product.rakeAngle && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Rake Angle:</span>
                          <span className="text-gray-900">{product.rakeAngle}</span>
                        </div>
                      )}
                      {product.flutes && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Flutes:</span>
                          <span className="text-gray-900 text-xs">{product.flutes}</span>
                        </div>
                      )}
                      {product.maxSpeed && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Max Speed:</span>
                          <span className="text-gray-900 text-xs">{product.maxSpeed}</span>
                        </div>
                      )}
                      {product.specialFeature && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Feature:</span>
                          <span className="text-gray-900 text-xs">{product.specialFeature}</span>
                        </div>
                      )}
                      {product.coolant && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Coolant:</span>
                          <span className="text-gray-900 text-xs">{product.coolant}</span>
                        </div>
                      )}
                      {product.material && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Material:</span>
                          <span className="text-gray-900 text-xs">{product.material}</span>
                        </div>
                      )}
                      {product.cooling && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Cooling:</span>
                          <span className="text-gray-900 text-xs">{product.cooling}</span>
                        </div>
                      )}
                      {product.specialApplication && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Application:</span>
                          <span className="text-gray-900 text-xs">{product.specialApplication}</span>
                        </div>
                      )}
                      {product.toolChange && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Tool Change:</span>
                          <span className="text-gray-900 text-xs">{product.toolChange}</span>
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
                    <h3 className="text-lg font-medium text-blue-800">Diameter-Dependent Rake Angle</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        <strong>+13° for DC=63mm</strong> reduces cutting forces for delicate workpieces. <strong>-9° for DC=80mm, -8° for DC=100mm, -7.5° for DC=125mm, -7° for DC=160-250mm</strong> provides stronger cutting edge and enhanced stability for high-load operations.
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
                    <h3 className="text-lg font-medium text-yellow-800">Insert System & Clamping</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        <strong>SEMT type square-shaped inserts</strong> offer up to 8 cutting edges per insert. Use <strong>M5.0×14 high-tensile screws with T15H torque spanner</strong> for secure clamping. Available in standard, dense, and extra-dense tooth configurations for different applications.
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
                  Key Industries
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

              {/* Application Processes */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Application Processes
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applicationProcesses.map((process, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{process}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Applications
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Application Machining */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Machining</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "Shoulder Milling",
                  description: "Primary function delivering high-quality perpendicular shoulder with precision ground inserts ensuring burr-free, smooth wall and floor finish.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Face Milling (Planing)",
                  description: "Produces superior, flat surface finish with multiple inserts distributing cutting load for high feed rates and wide cutting widths.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Slotting",
                  description: "Capable of machining full slots from solid material with optimized flute design and through-coolant for effective chip removal.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Ramping & Helical Interpolation",
                  description: "Strong cutter design allows ramping into material at specified angle or performing helical interpolation for complex pockets.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Material-Specific Machining",
                  description: "With appropriate insert grade and geometry, efficiently machines steel, stainless steel, cast iron, superalloys and titanium.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
              ].map((machining, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-50 p-2 rounded-lg mr-4">{machining.icon}</div>
                    <h3 className="text-lg font-bold">{machining.title}</h3>
                  </div>
                  <p className="text-gray-600">{machining.description}</p>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "High-Precision Wall & Floor Generation",
                  description: "Core function is to produce geometrically perfect 90° shoulders, which is fundamental to component accuracy and assembly requirements.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Multi-Operation Versatility",
                  description: "Single tool effectively performs shoulder milling, face milling, slotting, and ramping, reducing tool inventory and changeover times.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Economic Machining Solution",
                  description: "Utilizing indexable, multi-edge inserts offers significantly lower cost per cutting edge compared to solid carbide tools, maximizing cost-efficiency.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Maximized Productivity",
                  description: "Combination of rigid body, optimized geometry, and dense-tooth options enables high feed rates and aggressive depth of cut, drastically reducing cycle times.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Unwavering Process Reliability",
                  description: "Secure clamping system, stable body, and effective cooling work in synergy to provide predictable and secure machining process with extended, consistent tool life.",
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
                  title: "Face Milling Cutters",
                  image: "/images/face-milling-cutters.jpg",
                  description: "High-performance indexable face milling solutions",
                  url: "/standard-tools/clamp-type-milling/face-milling-cutters",
                },
                {
                  title: "Ball End Milling Cutters",
                  image: "/images/ball-end-milling-cutters.jpg", 
                  description: "3D contour and curved surface machining",
                  url: "/standard-tools/clamp-type-milling/ball-end-milling-cutters",
                },
                {
                  title: "High Feed Milling Cutter",
                  image: "/images/high-feed-milling-cutter.jpg",
                  description: "Maximum productivity milling solutions",
                  url: "/standard-tools/clamp-type-milling/high-feed-milling-cutter",
                },
                {
                  title: "Chamfering Cutters",
                  image: "/images/chamfering-cutters.jpg",
                  description: "Precision chamfering and edge preparation",
                  url: "/standard-tools/clamp-type-milling/chamfering-cutters",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Clamp Type Milling" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need High-Performance Square Shoulder Milling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal MZG Right Angle / Square Shoulder Milling Cutter configuration for your specific machining requirements. From diameter-dependent rake angle geometry to multi-edge insert systems, we provide comprehensive solutions for maximum productivity, cost-efficiency, and process reliability in precision shoulder machining operations.
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