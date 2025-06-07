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
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function InsertTypeThreadMillingCuttersPage() {
  const performanceFeatures = [
    {
      icon: <Replace className="h-8 w-8 text-red-600" />,
      title: "Replaceable Inserts",
      description:
        "Cost-effective solution where only worn cutting edges are replaced, not the entire tool body. Multi-edge inserts further enhance economy.",
    },
    {
      icon: <Layers className="h-8 w-8 text-red-600" />,
      title: "Advanced Coatings",
      description:
        "Modern multi-layer coatings (TiAlN, AlTiN, TiCN) on carbide inserts enhance hardness, reduce friction, and improve heat resistance for extended tool life.",
    },
    {
      icon: <GitCompareArrows className="h-8 w-8 text-red-600" />,
      title: "High Versatility",
      description:
        "One tool body can often handle a range of thread pitches and diameters by changing inserts. Capable of cutting various thread forms.",
    },
  ]

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

  const applicationScenarios = [
    {
      text: "Aerospace Industry (high-strength alloys, titanium)",
      icon: <Cpu className="h-4 w-4 text-red-500 mr-2 shrink-0" />,
    },
    {
      text: "Oil and Gas Industry (pipes, connectors, API threads)",
      icon: <Cpu className="h-4 w-4 text-red-500 mr-2 shrink-0" />,
    },
    {
      text: "Automotive Manufacturing (engine, transmission components)",
      icon: <Cpu className="h-4 w-4 text-red-500 mr-2 shrink-0" />,
    },
    {
      text: "Medical Device Manufacturing (implants, instruments)",
      icon: <Cpu className="h-4 w-4 text-red-500 mr-2 shrink-0" />,
    },
    {
      text: "General Machining & Job Shops (difficult materials, large diameters)",
      icon: <Cpu className="h-4 w-4 text-red-500 mr-2 shrink-0" />,
    },
    { text: "Mold and Die Making (mold components)", icon: <Cpu className="h-4 w-4 text-red-500 mr-2 shrink-0" /> },
    {
      text: "Heavy Machinery and Equipment (robust connections)",
      icon: <Cpu className="h-4 w-4 text-red-500 mr-2 shrink-0" />,
    },
    {
      text: "Prototyping & Small Batch Production (flexibility)",
      icon: <Cpu className="h-4 w-4 text-red-500 mr-2 shrink-0" />,
    },
  ]

  const productPerformanceData = {
    leftColumn: [
      {
        icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
        title: "Tool Material and Coating (Inserts)",
        items: [
          {
            subtitle: "Carbide Inserts",
            description:
              "Most commonly used due to their excellent wear resistance, hardness at high temperatures, and ability to maintain a sharp cutting edge. Specific carbide grades are selected based on the workpiece material.",
            color: "border-red-500",
          },
          {
            subtitle: "Coatings (e.g., TiAlN, AlTiN, TiCN)",
            description:
              "Modern multi-layer coatings are applied to inserts to enhance hardness, reduce friction, improve heat resistance, and significantly extend tool life. Coatings are critical for performance in tough materials and at higher cutting speeds.",
            color: "border-red-500",
          },
        ],
      },
      {
        icon: <Wrench className="h-6 w-6 text-blue-600" />,
        title: "Tool Body Material",
        items: [
          {
            description:
              "Tool bodies are typically made of high-quality tool steel, heat-treated for strength and rigidity to securely hold the inserts and withstand cutting forces.",
            color: "border-blue-500",
          },
        ],
      },
      {
        icon: <Tool className="h-6 w-6 text-green-600" />,
        title: "Cutting Geometry (Inserts)",
        items: [
          {
            subtitle: "Insert Design",
            description:
              "Inserts can be single-point (one cutting tooth per edge) or multi-point/multi-tooth (several teeth on each cutting edge). Multi-tooth inserts reduce the number of helical passes required, shortening cycle times.",
            color: "border-green-500",
          },
          {
            subtitle: "Chip Breakers",
            description:
              "Optimized chip breaker geometries on the inserts help in controlling chip formation and evacuation, which is crucial for thread quality and process security.",
            color: "border-green-500",
          },
          {
            subtitle: "Rake and Relief Angles",
            description: "Precisely ground angles ensure efficient cutting action and reduce cutting forces.",
            color: "border-green-500",
          },
        ],
      },
    ],
    rightColumn: [
      {
        icon: <Zap className="h-6 w-6 text-yellow-600" />,
        title: "Machining Parameters",
        items: [
          {
            subtitle: "Cutting Speed (Vc)",
            description:
              "Depends on the insert grade, coating, and workpiece material. Higher speeds are possible compared to HSS taps.",
            color: "border-yellow-500",
          },
          {
            subtitle: "Feed per Tooth (fz)",
            description:
              "Carefully selected to balance productivity with surface finish and tool life. CNC programming is essential to define the correct helical path feed rate.",
            color: "border-yellow-500",
          },
          {
            subtitle: "Depth of Cut",
            description:
              "Usually, threads are milled in one or multiple radial passes depending on the thread depth and material.",
            color: "border-yellow-500",
          },
        ],
      },
      {
        icon: <Target className="h-6 w-6 text-purple-600" />,
        title: "Thread Quality and Accuracy",
        items: [
          {
            subtitle: "Surface Finish",
            description: "Capable of producing very smooth thread flanks.",
            color: "border-purple-500",
          },
          {
            subtitle: "Dimensional Accuracy",
            description: "Achieves tight tolerances on pitch diameter, major diameter, and minor diameter.",
            color: "border-purple-500",
          },
          {
            subtitle: "No Taper",
            description:
              "Thread milling inherently produces straight threads without the slight taper that can occur with self-starting taps.",
            color: "border-purple-500",
          },
        ],
      },
      {
        icon: <Recycle className="h-6 w-6 text-teal-600" />,
        title: "Tool Life and Economy",
        items: [
          {
            subtitle: "Insert Life",
            description:
              "Replaceable inserts mean that only the worn cutting edge needs to be changed, not the entire tool body. This is cost-effective in the long run. Multi-edge inserts further enhance economy.",
            color: "border-teal-500",
          },
          {
            subtitle: "Process Security",
            description:
              "Lower cutting forces compared to tapping reduce the risk of tool breakage, especially in small diameters or difficult materials. If an insert breaks, it is less likely to damage the workpiece extensively compared to a broken tap.",
            color: "border-teal-500",
          },
        ],
      },
      {
        icon: <Info className="h-6 w-6 text-indigo-600" />,
        title: "Versatility",
        items: [
          {
            description:
              "One tool body can often handle a range of thread pitches and diameters by changing inserts. Ability to cut different thread forms with the same holder.",
            color: "border-indigo-500",
          },
        ],
      },
    ],
  }

  const technicalParametersConfig = [
    {
      title: "Thread Profile/Standard",
      description: "Inserts specific to M, UNC, NPTF, Tr etc. and pitch ranges.",
      color: "border-red-500",
    },
    {
      title: "Insert Design & Pockets",
      description: "Single-point or multi-point inserts. Tool body has specific number of pockets/flutes.",
      color: "border-blue-500",
    },
    {
      title: "Coolant Delivery",
      description: "Many tool bodies feature through-tool coolant for optimal performance.",
      color: "border-green-500",
    },
  ]

  const technicalParametersSpecs = [
    { label: "Pitch (P) or TPI", value: "Specific to insert; multi-tooth inserts have fixed pitch" },
    { label: "Cutter Diameter (Dc)", value: "Nominal cutting diameter of tool body with inserts" },
    { label: "Insert Size & Designation", value: "Standardized or proprietary (e.g., ISO, IC)" },
    { label: "Edges per Insert", value: "Multiple, indexable edges (e.g., 2, 3+)" },
    { label: "Overall Length (OAL) & Cutting Length (APMX/L)", value: "Defines tool reach and max thread length" },
    { label: "Shank Type & Diameter", value: "Cylindrical, Weldon, Modular interfaces" },
    { label: "Workpiece Compatibility", value: "Optimized grades/coatings for Steel, SS, CI, Al, Superalloys" },
    { label: "Max Thread Depth", value: "Related to insert cutting length & tool body rigidity" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <Image
              src="/images/threading-tools.jpg"
              alt="Insert Type Thread Milling Cutters Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-red-600/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow">
                  Indexable Thread Mills
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Insert Type Thread Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                  Sophisticated cutting tools with replaceable carbide inserts for producing high-quality internal and
                  external threads. Offers flexibility, superior tool life, and capability to machine difficult
                  materials.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl px-8 py-3"
                    asChild
                  >
                    <Link href="/custom-quote">Request Quote</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white hover:bg-white/10 border-white/80 hover:text-white transition-colors duration-300 px-8 py-3"
                    asChild
                  >
                    <Link href="/placeholder-catalog.pdf" target="_blank">
                      Download Catalog <Download className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center lg:justify-end">
                <div className="w-full max-w-md h-auto bg-white/5 rounded-xl border border-white/10 p-6 shadow-2xl backdrop-blur-md">
                  <Image
                    src="/placeholder.svg?width=400&height=250"
                    alt="Collection of Insert Type Thread Milling Cutters and Inserts"
                    width={400}
                    height={250}
                    className="object-contain rounded-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {performanceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col items-start"
                >
                  <div className="mb-4 bg-red-100 p-3 rounded-lg text-red-600">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 py-16">
          {/* Introduction Section */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <span className="w-10 h-1 bg-red-600 mr-4"></span>
              <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 prose prose-gray max-w-none text-gray-700 leading-relaxed">
                <p>
                  Insert type thread milling cutters, also known as indexable thread mills, are sophisticated cutting
                  tools used to produce internal and external threads in a workpiece. Unlike traditional tapping or
                  thread cutting on a lathe, thread milling uses a rotating multi-fluted cutter where each cutting edge
                  is a replaceable insert.
                </p>
                <p>
                  The tool travels in a helical path (simultaneous three-axis movement: X, Y, and Z) around or inside
                  the diameter being threaded. This method offers significant advantages in terms of flexibility, thread
                  quality, tool life, and the ability to machine difficult materials. The inserts are typically made of
                  carbide and can have multiple cutting teeth, often designed for specific thread profiles and pitches.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-red-700">
                  <Info className="h-5 w-5 mr-2 shrink-0" />
                  Key Advantages
                </h3>
                <ul className="space-y-2 text-sm text-red-900/90">
                  {[
                    "Flexibility in machining difficult materials",
                    "Superior thread quality & tool life",
                    "Machine various thread profiles",
                    "Full thread depth in blind holes",
                    "Cost-effective with replaceable inserts",
                  ].map((adv, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="h-4 w-4 mr-2 shrink-0 mt-0.5 text-red-500" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Main Functions Section */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <span className="w-10 h-1 bg-red-600 mr-4"></span>
              <h2 className="text-3xl font-semibold text-gray-800">Main Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainFunctions.map((func, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start mb-3">
                    <div className="bg-red-100 p-2.5 rounded-lg mr-4 text-red-600">{func.icon}</div>
                    <h3 className="text-md font-semibold text-gray-800 mt-1">{func.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{func.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <span className="w-10 h-1 bg-red-600 mr-4"></span>
              <h2 className="text-3xl font-semibold text-gray-800">Our Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col max-w-sm mx-auto w-full"
                >
                  <div className="relative w-full h-44 bg-white p-4">
                    <div className="flex items-center justify-center h-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={
                          product.id === "itmc-toolholder-001"
                            ? `Image of ${product.name} with technical drawing`
                            : product.id === "itmc-toolholder-003"
                              ? `Technical drawing and photo of ${product.name}`
                              : product.id === "itmc-toolholder-004"
                                ? `Photo and technical drawing of ${product.name}`
                                : product.id === "itmc-insert-fullprofile-001"
                                  ? `Technical diagram and photo of Full Profile Inserts showing 60° thread geometry, dimensions, and 3D view`
                                  : `Technical diagram of ${product.name} showing thread profile and dimensions`
                        }
                        width={280}
                        height={100}
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-5 border-t border-gray-200 flex flex-col flex-grow">
                    <h3 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-3 flex-grow">{product.description}</p>
                    <div className="space-y-1 text-xs text-gray-700 mb-4">
                      {product.params.map((param) => (
                        <div key={param.label} className="flex justify-between">
                          <span className="font-medium text-gray-500">{param.label}:</span>
                          <span>{param.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Scenarios Section */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <span className="w-10 h-1 bg-red-600 mr-4"></span>
              <h2 className="text-3xl font-semibold text-gray-800">Application Scenarios</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {applicationScenarios.map((scenario, index) => (
                  <div key={index} className="flex items-center py-1.5">
                    {scenario.icon}
                    <span className="text-sm text-gray-700">{scenario.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Performance Section - Styled like integral page */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <span className="w-10 h-1 bg-red-600 mr-4"></span>
              <h2 className="text-3xl font-semibold text-gray-800">Product Performance</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column */}
              <div className="space-y-8">
                {productPerformanceData.leftColumn.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="bg-white p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600">{section.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">{section.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className={`p-4 rounded-lg ${item.color}`}>
                          {item.subtitle && (
                            <h4 className="text-md font-semibold mb-2 text-gray-800">{item.subtitle}</h4>
                          )}
                          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className="space-y-8">
                {productPerformanceData.rightColumn.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="bg-white p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-3 rounded-lg text-red-600">{section.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">{section.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className={`p-4 rounded-lg ${item.color}`}>
                          {item.subtitle && (
                            <h4 className="text-md font-semibold mb-2 text-gray-800">{item.subtitle}</h4>
                          )}
                          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
