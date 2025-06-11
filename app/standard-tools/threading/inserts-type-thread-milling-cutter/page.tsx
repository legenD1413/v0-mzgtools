import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Download,
  Info,
  Layers,
  Zap,
  Target,
  Replace,
  GitCompareArrows,
  Combine,
  Shapes,
  Scaling,
  Award,
  ArrowDownToDot,
  Repeat,
  PlusSquare,
  ShieldCheck,
  PenToolIcon as Tool,
  Cpu,
  Recycle,
  Wrench,
  Settings,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function InsertTypeThreadMillingCuttersPage() {
  const performanceFeatures = [
    {
      icon: "Replace",
      title: "Replaceable Inserts",
      description:
        "Cost-effective solution where only worn cutting edges are replaced, not the entire tool body. Multi-edge inserts further enhance economy.",
    },
    {
      icon: "Layers",
      title: "Advanced Coatings",
      description:
        "Modern multi-layer coatings (TiAlN, AlTiN, TiCN) on carbide inserts enhance hardness, reduce friction, and improve heat resistance for extended tool life.",
    },
    {
      icon: "GitCompareArrows",
      title: "High Versatility",
      description:
        "One tool body can often handle a range of thread pitches and diameters by changing inserts. Capable of cutting various thread forms.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Replace":
        return <Replace className="h-8 w-8 text-red-600" />
      case "Layers":
        return <Layers className="h-8 w-8 text-red-600" />
      case "GitCompareArrows":
        return <GitCompareArrows className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  const products = [
    {
      id: "itmc-blade-60-004",
      name: "Threaded Blade 60°",
      image: "/images/THB60.png",
      description:
        "Precision 60° threaded blade insert for various thread profiles. Optimized geometry for superior thread quality and extended tool life.",
      params: [{ label: "Page", value: "L15" }],
      url: "/productdetails/placeholder-product",
    },
    {
      id: "itmc-blade-55-005",
      name: "Threaded Blade 55°",
      image: "/images/THB55.png",
      description:
        "Precision 55° threaded blade insert designed for British Standard and pipe thread profiles. Engineered for optimal performance in BSW, BSF, BSP, and NPT applications.",
      params: [{ label: "Page", value: "L16" }],
      url: "/productdetails/placeholder-product",
    },
    {
      id: "itmc-blade-80-006",
      name: "Threaded Blade 80°",
      image: "/images/THB80.png",
      description:
        "Precision 80° threaded blade insert designed for PG thread profiles according to DIN 40430 standard. Engineered for optimal performance in cable gland and conduit applications.",
      params: [{ label: "Page", value: "L16" }],
      url: "/productdetails/placeholder-product",
    },
    {
      id: "itmc-toolholder-001",
      name: "Single insert toolholders",
      image: "/images/SIT1218.png",
      description:
        "Versatile toolholders designed for single conic inserts, suitable for NPT, NPTF, and BSPT thread profiles. Ideal for precise threading operations.",
      params: [{ label: "Page", value: "L18" }],
      url: "/productdetails/placeholder-product",
    },
    {
      id: "itmc-toolholder-003",
      name: "Twin insert toolholders",
      image: "/images/TIT01.png",
      description:
        "High-performance toolholders designed for twin inserts, featuring internal coolant bore for enhanced productivity and stability in various threading operations.",
      params: [{ label: "Page", value: "L18" }],
      url: "/productdetails/placeholder-product",
    },
    {
      id: "itmc-toolholder-004",
      name: "Multi Insert Toolholders",
      image: "/images/MIT01.png",
      description:
        "Robust toolholders designed to accommodate multiple inserts, maximizing material removal rates and efficiency for demanding threading applications.",
      params: [{ label: "Page", value: "L18" }],
      url: "/productdetails/placeholder-product",
    },
    {
      id: "itmc-insert-fullprofile-001",
      name: "Full Profile Inserts",
      image: "/images/FP01.png",
      description:
        "Full profile inserts designed to create the complete thread form, including crest and root. Suitable for various standards: ISO, UN-60° American UN, BSPT-55°, W-55° Whitworth, NPT-60° National Pipe Threads, and NPTF (Dry seal).",
      params: [{ label: "Page", value: "L19-L20" }],
      url: "/productdetails/placeholder-product",
    },
  ]

  const mainFunctions = [
    {
      title: "Internal & External Threads",
      description: "Machines threads in holes (internal) and on cylindrical parts (external).",
      icon: <Combine className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Various Thread Profiles",
      description: "Produces M, UN, NPT, BSP, Tr, Acme threads by selecting appropriate inserts.",
      icon: <Shapes className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Flexible Pitch Capability",
      description: "One tool body often accommodates inserts for various pitches, enhancing flexibility.",
      icon: <Scaling className="h-6 w-6 text-red-600" />,
    },
    {
      title: "High Thread Quality",
      description: "Achieves excellent surface finish, precise form, and correct pitch diameter.",
      icon: <Award className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Full Depth in Blind Holes",
      description: "Cuts full, usable threads very close to the bottom of blind holes.",
      icon: <ArrowDownToDot className="h-6 w-6 text-red-600" />,
    },
    {
      title: "RH/LH Thread Control",
      description: "CNC program determines thread hand (RH/LH), allowing one tool for both.",
      icon: <Repeat className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Combined Operations",
      description: "Some designs perform chamfering in the same operation, saving cycle time.",
      icon: <PlusSquare className="h-6 w-6 text-red-600" />,
    },
  ]

  const applicationData = {
    industries: [
      "Aerospace Industry (high-strength alloys, titanium)",
      "Oil and Gas Industry (pipes, connectors, API threads)",
      "Automotive Manufacturing (engine, transmission components)",
      "Medical Device Manufacturing (implants, instruments)",
      "General Machining & Job Shops (difficult materials, large diameters)",
      "Mold and Die Making (mold components)",
      "Heavy Machinery and Equipment (robust connections)",
      "Prototyping & Small Batch Production (flexibility)",
    ],
    materials: [
      "Hardened Steels (up to HRC 65)",
      "Stainless Steels (300 & 400 series, Duplex)",
      "Titanium Alloys",
      "Inconel & other Superalloys",
      "Cast Iron & Ductile Iron",
      "Aluminum Alloys",
      "Copper, Brass, & Bronze",
      "Non-metallic materials (with special grades)",
    ],
    threadForms: [
      "Metric (M) & Metric Fine (MF)",
      "Unified (UNC, UNF, UNEF)",
      "Pipe Threads (NPT, NPTF, BSPP, BSPT)",
      "Trapezoidal (Tr) & Acme",
      "Whitworth (BSW, BSF)",
      "Round (Rd) Knuckle Threads",
      "Buttress Threads",
      "Custom-designed profiles",
    ],
  }

  const relatedCategories = [
    {
      title: "Integral Thread Mills",
      image: "/images/integral-thread-mills.jpg",
      description: "Solid carbide thread mills for precision threading",
      url: "/standard-tools/threading/integral-thread-milling-cutters",
    },
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
  ]

  const technicalSpecs = [
    {
      title: "Thread Profile/Standard",
      description: "Inserts specific to M, UNC, NPTF, Tr etc. and pitch ranges.",
      color: "border-red-600",
    },
    {
      title: "Insert Design & Pockets",
      description: "Single-point or multi-point inserts. Tool body has specific number of pockets/flutes.",
      color: "border-blue-600",
    },
    {
      title: "Coolant Delivery",
      description: "Many tool bodies feature through-tool coolant for optimal performance.",
      color: "border-green-600",
    },
  ]

  const specifications = [
    { label: "Pitch (P) or TPI", value: "Specific to insert; multi-tooth inserts have fixed pitch" },
    { label: "Cutter Diameter (Dc)", value: "Nominal cutting diameter of tool body with inserts" },
    { label: "Insert Size & Designation", value: "Standardized or proprietary (e.g., ISO, IC)" },
    { label: "Edges per Insert", value: "Multiple, indexable edges (e.g., 2, 3+)" },
    { label: "Overall Length (OAL) & Cutting Length", value: "Defines tool reach and max thread length" },
    { label: "Shank Type & Diameter", value: "Cylindrical, Weldon, Modular interfaces" },
    { label: "Workpiece Compatibility", value: "Optimized grades/coatings for Steel, SS, CI, Al, Superalloys" },
    { label: "Max Thread Depth", value: "Related to insert cutting length & tool body rigidity" },
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
                  Indexable Thread Mills
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Insert Type Thread Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Sophisticated cutting tools with replaceable carbide inserts for producing high-quality internal and
                  external threads. Offers flexibility, superior tool life, and capability to machine difficult
                  materials.
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
                    src="/images/insert-thread-mills.png"
                    alt="Professional Insert Type Thread Milling Cutters Collection"
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
                  Insert type thread milling cutters, also known as indexable thread mills, are sophisticated cutting
                  tools used to produce internal and external threads in a workpiece. Unlike traditional tapping or
                  thread cutting on a lathe, thread milling uses a rotating multi-fluted cutter where each cutting edge
                  is a replaceable insert.
                </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                  The tool travels in a helical path (simultaneous three-axis movement: X, Y, and Z) around or inside
                  the diameter being threaded. This method offers significant advantages in terms of flexibility, thread
                  quality, tool life, and the ability to machine difficult materials. The inserts are typically made of
                  carbide and can have multiple cutting teeth, often designed for specific thread profiles and pitches.
                </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Modern insert thread mills feature replaceable carbide inserts with advanced coatings such as TiAlN,
                    AlTiN, and TiCN that enhance hardness, reduce friction, and improve heat resistance for extended tool
                    life. This cost-effective solution allows only worn cutting edges to be replaced, not the entire tool body.
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
                        <strong>Materials:</strong> Carbide Inserts, Tool Steel Bodies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiAlN, AlTiN, TiCN, Uncoated
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Thread Forms:</strong> Metric, Unified, NPT, BSP, Acme
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Types:</strong> Single-point, Multi-point
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Applications:</strong> Internal & External Threading
                      </span>
                    </li>
                </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main Functions */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Primary Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainFunctions.map((func, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-red-600 border border-gray-100"
                >
                  <div className="flex items-start mb-3">
                    <div className="mr-4 mt-1">{func.icon}</div>
                    <h3 className="text-lg font-bold text-gray-800">{func.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{func.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
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
                        {product.params[0].value}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-3">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Parameters */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
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
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold mb-3 text-red-600 flex items-center">
                  <Cpu className="h-5 w-5 mr-2" />
                  Industries Served
                </h3>
                <ul className="space-y-2">
                  {applicationData.industries.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <ChevronRight className="h-3 w-3 mr-2 text-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold mb-3 text-blue-600 flex items-center">
                  <Tool className="h-5 w-5 mr-2" />
                  Machinable Materials
                </h3>
                <ul className="space-y-2">
                  {applicationData.materials.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                    </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold mb-3 text-green-600 flex items-center">
                  <Shapes className="h-5 w-5 mr-2" />
                  Thread Forms
                </h3>
                <ul className="space-y-2">
                  {applicationData.threadForms.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <ChevronRight className="h-3 w-3 mr-2 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              {relatedCategories.map((category, index) => (
                <ProductCard 
                  key={index} 
                  image={category.image} 
                  title={category.title} 
                  category="Threading Tools" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
