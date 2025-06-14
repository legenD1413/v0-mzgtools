import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function IntegralThreadMillingCuttersPage() {
  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "itmc-010",
      name: "Metric Single Tooth Thread Milling Cutter",
      image: "/images/L05-1.png",
      description: "Single tooth thread milling cutter for versatile thread milling processing",
      threadStandards: "Metric",
      application: "For thread milling processing, specifically a single tooth type",
      pageNumber: "L05",
    },
    {
      id: "itmc-011",
      name: "Metric Three Tooth Thread Milling Cutter",
      image: "/images/L05-2.png",
      description: "Three tooth thread milling cutter for enhanced stability and productivity",
      threadStandards: "Metric",
      application: "For thread milling processing, specifically a three tooth type",
      pageNumber: "L05",
    },
    {
      id: "itmc-012",
      name: "Metric Full Thread Milling Cutter",
      image: "/images/L06-1.png",
      description: "Full thread milling cutter for complete thread profile machining",
      threadStandards: "Metric",
      application: "For thread milling processing, specifically a full tooth type",
      pageNumber: "L06",
    },
    {
      id: "itmc-013",
      name: "Metric Extended Single Tooth Thread Milling Cutter",
      image: "/images/L06-2.png",
      description: "Extended single tooth design for deeper thread milling applications",
      threadStandards: "Metric",
      application: "For thread milling processing, specifically an extended single tooth type",
      pageNumber: "L06",
    },
    {
      id: "itmc-014",
      name: "Metric Extended Three Tooth Thread Milling Cutter",
      image: "/images/L07-1.png",
      description: "Extended three tooth design for deeper thread milling with enhanced stability",
      threadStandards: "Metric",
      application: "For thread milling processing, specifically an extended three tooth type",
      pageNumber: "L07",
    },
    {
      id: "itmc-015",
      name: "M Metric Hard Alloy Right-Hand Drilling Thread Milling Cutter",
      image: "/images/L07-2.png",
      description: "Hard alloy right-hand drilling thread milling cutter with advanced coating",
      threadStandards: "Metric",
      application: "For thread milling processing, specifically a right-hand drilling type. Made of Co10% material, coated with Balchals Ultra H, suitable for processing stainless steel, high-temperature alloy, titanium alloy, mold steel, steel parts, and cast iron",
      pageNumber: "L07",
    },
    {
      id: "itmc-016",
      name: "M Metric Hard Alloy Left-Hand Drilling Thread Milling Cutter",
      image: "/images/L08-1.png",
      description: "Hard alloy left-hand drilling thread milling cutter for specialized applications",
      threadStandards: "Metric",
      application: "For thread milling processing, specifically a left-hand drilling type",
      pageNumber: "L08",
    },
    {
      id: "itmc-017",
      name: "M Metric Tungsten Steel Left-Hand Right Cutting Full Thread Milling Cutter",
      image: "/images/L08-2.png",
      description: "Tungsten steel left-hand right cutting full thread milling cutter",
      threadStandards: "Metric",
      application: "For thread milling processing, specifically a left-hand right cutting full tooth type",
      pageNumber: "L08",
    },
    {
      id: "itmc-018",
      name: "60° Single Tooth Range Thread Milling Cutter",
      image: "/images/L09-1.png",
      description: "60° single tooth range thread milling cutter for UN.M. threads",
      threadStandards: "UN.M.",
      application: "For thread milling processing, specifically a single tooth type, suitable for UN.M. threads",
      pageNumber: "L09",
    },
    {
      id: "itmc-019",
      name: "UNC.UNF American Triple Thread Cutter",
      image: "/images/L10-1.png",
      description: "American standard triple thread cutter for UNC/UNF applications",
      threadStandards: "UNC/UNF",
      application: "For thread milling processing, specifically a three tooth type for American UNC/UNF threads",
      pageNumber: "L10",
    },
    {
      id: "itmc-020",
      name: "Full Tooth American UN Internal Thread Milling Cutter",
      image: "/images/L11-1.png",
      description: "Full tooth internal thread milling cutter for American UN threads",
      threadStandards: "UN (American)",
      application: "For thread milling processing, specifically an internal thread type for American UN threads",
      pageNumber: "L11",
    },
    {
      id: "itmc-021",
      name: "55° Inch Single Tooth Range Thread Milling Cutter",
      image: "/images/L12-1.png",
      description: "55° inch single tooth range thread milling cutter for British threads",
      threadStandards: "British Inch",
      application: "For thread milling processing, specifically a single tooth range type for British threads",
      pageNumber: "L12",
    },
    {
      id: "itmc-022",
      name: "A80 German Standard PG Tungsten Steel Straight Groove Thread Milling Cutter",
      image: "/images/L13-1.png",
      description: "German standard PG tungsten steel straight groove thread milling cutter with advanced coating",
      threadStandards: "PG (German)",
      application: "For thread milling processing, specifically a straight groove type for German PG threads. Made of Co10% material, coated with Balchals Ultra H, suitable for processing stainless steel, high-temperature alloy, titanium alloy, mold steel, steel parts, and cast iron",
      pageNumber: "L13",
    },
    {
      id: "itmc-023",
      name: "Inch Cylindrical Pipe Thread Milling Cutter",
      image: "/images/L13-2.png",
      description: "Inch cylindrical pipe thread milling cutter for British pipe threads",
      threadStandards: "British Pipe",
      application: "For thread milling processing, specifically a cylindrical type for British pipe threads",
      pageNumber: "L13",
    },
    {
      id: "itmc-024",
      name: "NPT/NPTF American Taper Pipe Thread Milling Cutter",
      image: "/images/L14-1.png",
      description: "American taper pipe thread milling cutter for NPT/NPTF applications",
      threadStandards: "NPT/NPTF",
      application: "For thread milling processing, specifically a taper type for American NPT/NPTF pipe threads",
      pageNumber: "L14",
    },
    {
      id: "itmc-025",
      name: "BSPT(PT.RC) British Taper Pipe Thread Milling Cutter",
      image: "/images/L14-2.png",
      description: "British taper pipe thread milling cutter for BSPT/PT/RC applications",
      threadStandards: "BSPT/PT/RC",
      application: "For thread milling processing, specifically a taper type for British BSPT/PT/RC pipe threads",
      pageNumber: "L14",
    },
  ]

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Superior Material",
      description:
        "Ultra-fine grain tungsten carbide construction provides exceptional hardness, wear resistance, and heat resistance for demanding applications.",
    },
    {
      icon: "Zap",
      title: "Advanced Coatings",
      description:
        "TiAlN, AlTiN, TiSiN, and DLC coatings enhance surface hardness, thermal stability, and reduce friction for extended tool life.",
    },
    {
      icon: "Target",
      title: "Precision Threading",
      description:
        "Capable of producing threads to tight tolerances with excellent surface finish and accurate pitch control in challenging materials.",
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
    "Aerospace Industry",
    "Automotive Industry",
    "Medical Device Manufacturing",
    "Oil and Gas Industry",
    "Mold and Die Making",
    "General Machining",
    "High-Volume Production",
    "Precision Engineering",
  ]

  // Threading operations
  const threadingOperations = [
    "Internal Threading in Blind Holes",
    "External Thread Milling",
    "Full Profile Thread Creation",
    "Multi-Start Thread Milling",
    "Left & Right-Hand Threading",
    "Fine Pitch Threading",
    "Thread Repair Operations",
    "High-Precision Threading",
  ]

  // Material compatibility
  const machinableMaterials = [
    "Hardened Steels (HRC 50-65)",
    "Stainless Steels (All Grades)",
    "Titanium Alloys",
    "Inconel and Superalloys",
    "Aluminum Alloys (DLC Coated)",
    "Tool Steels",
    "High-Strength Alloys",
    "Medical Grade Materials",
  ]

  // Thread mill configurations
  const threadMillConfigurations = [
    {
      title: "Multi-Tooth Designs",
      description:
        "3-6+ flutes provide stability and productivity. Ideal for specific pitch applications with excellent surface finish and process security.",
      color: "border-red-600",
    },
    {
      title: "Single-Tooth Designs",
      description:
        "Versatile design handles multiple pitches and diameters. Often DLC coated for aluminum applications with superior flexibility.",
      color: "border-blue-600",
    },
    {
      title: "Full Profile Cutters",
      description:
        "Machine complete thread profile including crest in single operation. Ensures accurate thread depth and profile geometry.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Material", value: "Ultra-Fine Grain Tungsten Carbide" },
    { label: "Coating Options", value: "TiAlN, AlTiN, TiSiN, DLC" },
    { label: "Hardness Range", value: "Up to HRC65" },
    { label: "Thread Forms", value: "Metric, Unified, NPT, Trapezoidal, Acme" },
    { label: "Flute Options", value: "Single-tooth to 6+ flutes" },
    { label: "Coolant Delivery", value: "External/Internal coolant capable" },
    { label: "Shank Type", value: "Straight shank (h6 tolerance)" },
    { label: "Profile Types", value: "Full profile (topping) & Partial profile" },
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
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4 text-white">
                  Solid Carbide Thread Mills
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                  Integral Thread Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  High-performance solid carbide thread mills engineered for precision threading in the most challenging
                  materials. Featuring advanced coatings, multi-tooth and single-tooth designs, capable of machining
                  hardened steels up to HRC65 with superior thread quality and process security.
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
                    src="/images/Integral-Steel.png"
                    alt="Collection of Integral Thread Milling Cutters"
                    width={500}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
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
                    An Integral Tungsten Steel Thread Milling Cutter, more commonly referred to in English as a Solid
                    Carbide Thread Mill, is a high-performance precision cutting tool made entirely from a metallurgical
                    alloy of tungsten carbide. It is designed for creating internal or external threads efficiently and
                    precisely using a milling process on a CNC machine capable of helical interpolation.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Unlike traditional tapping or thread turning, thread milling offers several advantages, including
                    the ability to machine threads in difficult and hardened materials (e.g., up to 60-65 HRC), produce
                    both left-hand and right-hand threads with the same tool, and achieve excellent surface finishes.
                    The non-contact nature of the process reduces cutting forces, making it ideal for thin-walled
                    components and minimizing the risk of tool breakage.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Our solid carbide thread mills are engineered with ultra-fine grain tungsten carbide for maximum
                    hardness and wear resistance. They are available with advanced coatings like TiAlN, AlTiN, and DLC
                    to further enhance performance and extend tool life, especially in abrasive or high-temperature
                    alloys. From versatile single-tooth designs to high-productivity multi-tooth and full-profile
                    cutters, our portfolio provides a comprehensive solution for precision threading needs.
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
                        <strong>Materials:</strong> Ultra-Fine Grain Tungsten Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, TiSiN, DLC
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Hardness:</strong> Up to HRC65
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Thread Forms:</strong> Metric, Unified, Pipe, Trapezoidal
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Profile:</strong> Full & Partial Profile
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
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                        {product.pageNumber}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      {product.threadStandards && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Standards:</span>
                          <span className="text-gray-900">{product.threadStandards}</span>
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

              {/* Threading Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Threading Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {threadingOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
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

          {/* Primary Functions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Primary Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Internal Thread Milling",
                  description: "Creating precise internal threads in pre-drilled holes with superior chip evacuation and minimal cutting forces, ideal for thin-walled components.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "External Thread Milling",
                  description: "Machining external threads on cylindrical features with excellent surface finish and dimensional accuracy, suitable for both left and right-hand threads.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Hardened Material Threading",
                  description: "Capable of threading materials up to HRC65 including hardened steels, titanium alloys, and superalloys where traditional tapping fails.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Multi-Pitch Versatility",
                  description: "Single-tooth designs handle multiple pitches and diameters with one tool, while multi-tooth cutters provide enhanced productivity for specific applications.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Full Profile Threading",
                  description: "Full profile cutters machine complete thread including crest in single operation, ensuring accurate thread depth and form integrity.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Process Security",
                  description: "Non-contact cutting reduces tool breakage risk and provides better process control compared to conventional tapping operations.",
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

                    {/* Technical Parameters */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Specifications */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Thread Mill Configurations</h3>
                <div className="space-y-4">
                  {threadMillConfigurations.map((spec, index) => (
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

          {/* Related Categories */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Taps",
                  image: "/images/taps.jpg",
                  description: "High-performance tapping tools for internal threads",
                  url: "/standard-tools/threading/taps",
                },
                {
                  title: "Drills",
                  image: "/images/drills.jpg",
                  description: "Precision drilling tools for hole preparation",
                  url: "/standard-tools/hole-making/drills",
                },
                {
                  title: "Thread Turning Tools",
                  image: "/images/thread-turning.jpg",
                  description: "Lathe tools for external thread creation",
                  url: "/standard-tools/threading/thread-turning",
                },
                {
                  title: "Reamers",
                  image: "/images/reamers.jpg",
                  description: "Precision hole finishing for tight tolerances",
                  url: "/standard-tools/hole-making/reamers",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Threading Tools" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Expert Threading Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal threading tools for your specific applications,
                materials, and production requirements. From solid carbide thread mills to precision gauges, we provide
                comprehensive threading solutions.
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
