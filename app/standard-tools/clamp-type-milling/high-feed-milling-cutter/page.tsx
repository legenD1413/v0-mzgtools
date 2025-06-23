import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function HighFeedMillingCutterPage() {
  // Product data based on the High Feed Milling Cutter system
  const products = [
    {
      id: "hf-001",
      name: "R217.96 High Feed Face Mill",
      image: "/images/r217-96-face-mill.png",
      description: "Double-sided hexagonal inserts with 12 cutting edges per insert",
      series: "R217.96 Series",
      insertType: "WNMU (Hexagonal)",
      cuttingEdges: "12 edges per insert",
      application: "Heavy face milling operations",
      feedRate: "0.08-0.60 mm/t",
      pageNumber: "R217.96",
    },
    {
      id: "hf-002",
      name: "HEP Series Face Mill",
      image: "/images/hep-face-mill.png",
      description: "Seven-sided inserts for maximum economy in large-scale face milling",
      series: "HEP Series",
      insertType: "XDMT (Heptagonal)",
      cuttingEdges: "14 edges per insert",
      application: "Large-scale face milling",
      economy: "Good economy",
      pageNumber: "HEP",
    },
    {
      id: "hf-003",
      name: "TXP High Precision End Mill",
      image: "/images/txp-end-mill.png",
      description: "Blade runout accuracy within 5μm for precision roughing",
      series: "TXP Series",
      insertType: "Square Insert",
      runoutAccuracy: "≤5μm",
      application: "Precision roughing operations",
      feedRate: "0.08-0.45 mm/t",
      pageNumber: "TXP",
    },
    {
      id: "hf-004",
      name: "MFH03R Modular End Mill",
      image: "/images/mfh03r-end-mill.png",
      description: "Double-sided square inserts with modular screw-in head design",
      series: "MFH03R Series",
      insertType: "LNMU (Square)",
      cuttingEdges: "8 edges per insert",
      design: "Modular Screw-In Head",
      application: "Pocketing and cavity milling",
      pageNumber: "MFH03R",
    },
    {
      id: "hf-005",
      name: "EXN03R High Feed Cutter",
      image: "/images/exn03r-cutter.png",
      description: "Robust double-sided square inserts for heavy-duty operations",
      series: "EXN03R Series",
      insertType: "LNMU (Square)",
      cuttingEdges: "8 strong cutting edges",
      design: "Locking Bit Type",
      application: "Heavy-duty roughing",
      pageNumber: "EXN03R",
    },
    {
      id: "hf-006",
      name: "ZP153 Grade Insert",
      image: "/images/zp153-insert.png",
      description: "Advanced carbide substrate with coating for optimal performance",
      series: "ZP153 Grade",
      substrate: "Advanced Carbide",
      coating: "PVD Coating",
      materials: "Steel, Stainless Steel, Cast Iron",
      application: "Wide spectrum machining",
      pageNumber: "ZP153",
    },
    {
      id: "hf-007",
      name: "WNMU Hexagonal Insert",
      image: "/images/wnmu-insert.png",
      description: "Double-sided hexagonal insert for R217.96 series",
      series: "WNMU Type",
      shape: "Hexagonal",
      sides: "Double-sided",
      cuttingEdges: "12 edges total",
      application: "Face milling operations",
      pageNumber: "WNMU",
    },
    {
      id: "hf-008",
      name: "XDMT Heptagonal Insert",
      image: "/images/xdmt-insert.png",
      description: "Seven-sided insert for HEP series face mills",
      series: "XDMT Type",
      shape: "Heptagonal",
      sides: "Double-sided",
      cuttingEdges: "14 edges total",
      application: "Large-scale face milling",
      pageNumber: "XDMT",
    },
    {
      id: "hf-009",
      name: "LNMU Square Insert",
      image: "/images/lnmu-insert.png",
      description: "Robust double-sided square insert for end mills",
      series: "LNMU Type",
      shape: "Square",
      sides: "Double-sided",
      cuttingEdges: "8 edges total",
      application: "End mill operations",
      pageNumber: "LNMU",
    },
    {
      id: "hf-010",
      name: "WPMW Trigon Insert",
      image: "/images/wpmw-insert.png",
      description: "Trigon-style insert for specialized applications",
      series: "WPMW Type",
      shape: "Trigon",
      sides: "Double-sided",
      cuttingEdges: "6 edges total",
      application: "Specialized milling",
      pageNumber: "WPMW",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Zap",
      title: "High Feed, High Efficiency",
      description:
        "Unique cutting geometry with large lead angle enables dramatically increased feed rates while maintaining shallow depth of cut for exceptional productivity.",
    },
    {
      icon: "Shield",
      title: "Outstanding Economic Viability",
      description:
        "Multi-edge, double-sided inserts provide up to 14 cutting edges per insert, significantly lowering cost per edge and reducing tooling expenditure.",
    },
    {
      icon: "Target",
      title: "High Precision and Reliability",
      description:
        "Blade runout accuracy within 5μm combined with inherent cutting stability results in consistent tool life and predictable performance.",
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
    "Mold & Die Industry",
    "Aerospace Industry",
    "General Engineering",
    "Heavy Machinery",
    "Automotive Industry",
    "Power Generation",
    "Construction Equipment",
    "Manufacturing",
  ]

  // Milling operations
  const millingOperations = [
    "Face Milling",
    "Pocketing and Cavity Milling",
    "Plunging and Ramping",
    "Contour Milling",
    "3D Roughing",
    "Helical Interpolation",
    "Z-axis Milling",
    "Semi-roughing Operations",
  ]

  // Compatible materials
  const compatibleMaterials = [
    "Tool Steels (Hardened)",
    "Aluminum Alloys",
    "Titanium Alloys",
    "Heat-Resistant Superalloys",
    "Cast Iron",
    "Carbon Steel",
    "Stainless Steel",
    "Exotic Alloys",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Exceptional Productivity Design",
      description:
        "Large lead angle geometry thins the chip and directs cutting forces axially, minimizing radial deflection and vibration for stable cutting even with long overhangs.",
      color: "border-red-600",
    },
    {
      title: "Multi-Edge Insert Technology",
      description:
        "Double-sided inserts with up to 14 cutting edges per insert (heptagonal XDMT type) maximize tool life and provide outstanding economic viability.",
      color: "border-blue-600",
    },
    {
      title: "Advanced Carbide Grades",
      description:
        "ZP153 grade inserts with advanced carbide substrates and PVD coatings provide optimal performance across a wide spectrum of materials.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Feed Per Tooth (Fz)", value: "0.08-0.60 mm/t" },
    { label: "Depth of Cut (Ap)", value: "0.6-6.0 mm" },
    { label: "Cutting Speed (Vc)", value: "100-260 m/min" },
    { label: "Runout Accuracy", value: "≤5μm (TXP Series)" },
    { label: "Insert Types", value: "WNMU, LNMU, XDMT, WPMW" },
    { label: "Cutting Edges", value: "6-14 edges per insert" },
    { label: "Body Types", value: "Face Mills, End Mills, Modular" },
    { label: "Clamping System", value: "High-strength Torx screws" },
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
                  MZG High Feed Milling Cutters
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  MZG Tool Machine will provide a comprehensive introduction to our High Feed Milling Cutter series, a key product line within our clamp-type (indexable) milling cutter portfolio. These tools are engineered to redefine productivity in modern machining operations.
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
                    src="/images/high-feed-milling-hero.png"
                    alt="Professional MZG High Feed Milling Cutter System"
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
                    The core characteristic of MZG's High Feed Milling Cutters is their ability to achieve <strong>High Feed, High Efficiency</strong>. This is the guiding principle behind their design and performance, enabling workshops to achieve unprecedented Metal Removal Rates (MRR) and significantly reduce cycle times.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    <strong>Exceptional Productivity:</strong> The fundamental design advantage of a high-feed cutter lies in its unique cutting geometry. By employing a <strong>large lead angle (small entry angle)</strong>, the cutter thins the chip, allowing for dramatically increased feed rates (Fz) at a shallow depth of cut (Ap). This geometry directs the majority of the cutting force axially, up into the spindle.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    <strong>Outstanding Economic Viability:</strong> Our high-feed cutter series features <strong>multi-edge, double-sided inserts</strong>. The R217.96 series utilizes double-sided hexagonal inserts offering 12 cutting edges per insert, while the HEP series uses seven-sided inserts providing exceptional economy for large-scale operations.
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
                        <strong>Feed Rate:</strong> 0.08-0.60 mm/t
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Depth of Cut:</strong> 0.6-6.0 mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Cutting Speed:</strong> 100-260 m/min
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Accuracy:</strong> ≤5μm runout (TXP)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Application:</strong> High-efficiency roughing
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
                      {product.insertType && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Insert Type:</span>
                          <span className="text-gray-900 text-xs">{product.insertType}</span>
                        </div>
                      )}
                      {product.cuttingEdges && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Cutting Edges:</span>
                          <span className="text-gray-900 text-xs">{product.cuttingEdges}</span>
                        </div>
                      )}
                      {product.feedRate && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Feed Rate:</span>
                          <span className="text-gray-900 text-xs">{product.feedRate}</span>
                        </div>
                      )}
                      {product.runoutAccuracy && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Accuracy:</span>
                          <span className="text-gray-900 text-xs">{product.runoutAccuracy}</span>
                        </div>
                      )}
                      {product.design && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Design:</span>
                          <span className="text-gray-900 text-xs">{product.design}</span>
                        </div>
                      )}
                      {product.economy && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Economy:</span>
                          <span className="text-gray-900 text-xs">{product.economy}</span>
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

              {/* Milling Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Milling Operations
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {millingOperations.map((operation, index) => (
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
              <h2 className="text-3xl font-bold">Main Functions and Application Processing</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Primary Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Face Milling:</strong> Large-diameter face mills ideal for rapidly clearing material from large, flat surfaces on castings, forgings, and block materials.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Pocketing and Cavity Milling:</strong> End mill versions excel at 3D roughing of pockets and cavities using high feed rates to quickly excavate material.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Plunging and Ramping:</strong> Axial force direction makes these cutters highly effective for plunge milling and aggressive ramping operations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Contour Milling:</strong> Capable of performing 3D contour roughing on complex surfaces, indispensable in mold and die manufacturing.
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
                        <strong>High Material Removal Rates</strong> through optimized cutting geometry
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Stable cutting process</strong> even with long tool overhangs
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Reduced cycle times</strong> and increased productivity
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <strong>Versatile solution</strong> for various machine rigidity levels
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
                  title: "High Feed Capability",
                  description: "Unique cutting geometry enables feed rates up to 0.60 mm/t while maintaining excellent surface quality and tool life.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Exceptional Productivity",
                  description: "Large lead angle design directs cutting forces axially, minimizing vibration and enabling unprecedented material removal rates.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Economic Efficiency",
                  description: "Multi-edge inserts with up to 14 cutting edges per insert significantly reduce cost per edge and tooling expenditure.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Roughing",
                  description: "Blade runout accuracy within 5μm ensures consistent performance and provides excellent foundation for finishing operations.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Versatile Design",
                  description: "Available in face mills, end mills, and modular configurations to suit various machining requirements and applications.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Advanced Materials",
                  description: "ZP153 grade inserts with advanced carbide substrates and PVD coatings for optimal performance across material spectrum.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
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
                  title: "End Mill Holders",
                  image: "/images/end-mill-holders.jpg",
                  description: "High-precision holders for end mill applications",
                  url: "/standard-tools/milling-tool-holder/end-mill-holder",
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
              <h2 className="text-3xl font-bold mb-4">Need High Feed Milling Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal High Feed Milling Cutter configuration for your specific roughing applications, material requirements, and productivity goals. From exceptional material removal rates to economic viability, we provide comprehensive high-feed solutions.
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