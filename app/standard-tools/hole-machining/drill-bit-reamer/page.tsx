"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { useState, useEffect } from "react"

export default function DrillBitReamerPage() {
  // Gallery images for rotation
  const galleryImages = [
    "/images/K-PG01.PNG",
    "/images/K-PG02.PNG", 
    "/images/K-PG03.PNG",
    "/images/K-PG04.PNG",
    "/images/K-PG06.PNG",
    "/images/K-PG07.PNG",
    "/images/K-PG08.PNG",
    "/images/K-PG09.PNG",
    "/images/K-PG10.PNG",
    "/images/K-PG11.PNG",
    "/images/K-PG12.PNG",
    "/images/K-PG13.PNG",
    "/images/K-PG14.PNG"
  ];

  // State for rotating images
  const [currentMainImage, setCurrentMainImage] = useState(0);

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMainImage((prev) => (prev + 1) % galleryImages.length);
    }, 20000); // 每20秒轮换一次

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Product data based on provided content
  const products = [
    {
      id: "K57-1",
      name: "Straight Shank Drill (L6542 M35)",
      series: "HSS Drill Series",
      image: "/images/K57-1.png",
      description: "High-efficiency drilling with M35 HSS material",
      specifications: "L6542 M35",
      application: "High-efficiency drilling applications",
      pageNumber: "K57",
    },
    {
      id: "K59-1", 
      name: "Oblique Shank Drill (DIN345 HSS L6542 M35)",
      series: "DIN345 Series",
      image: "/images/K59-1.png",
      description: "General purpose oblique shank drill with DIN345 standard",
      specifications: "DIN345 HSS L6542 M35",
      application: "General purpose drilling applications",
      pageNumber: "K59",
    },
    {
      id: "K60-1",
      name: "Oblique Shank Extension Drill (DIN345 HSS)", 
      series: "DIN345 Extension Series",
      image: "/images/K60-1.png",
      description: "General purpose extension drill with DIN345 standard",
      specifications: "DIN345 HSS",
      application: "General purpose extended reach drilling",
      pageNumber: "K60",
    },
    {
      id: "K61-1",
      name: "Tungsten Steel Fixed-Point Drill (WGDDZ)",
      series: "Fixed-Point Drill Series",
      image: "/images/K61-1.png", 
      description: "For aluminum and steel with various coating options and drill point angles",
      specifications: "90°, 60°, 120° angles",
      application: "Aluminum, aluminum alloy, die-cast aluminum; Die prehardened steel, quenched steel",
      pageNumber: "K61",
    },
    {
      id: "K62-2",
      name: "Tungsten Steel Mechanical Reamer (H7)",
      series: "H7 Precision Reamer Series",
      image: "/images/K62-2.png",
      description: "For hard materials up to HRC55 with H7 tolerance",
      specifications: "H7 Tolerance",
      application: "HRC55 steel, stainless steel, titanium, cast iron and other hard materials",
      pageNumber: "K62",
    },
    {
      id: "K62-1",
      name: "Tungsten Steel Fixed Point Drill, Center Drill",
      series: "Center Drill Series",
      image: "/images/K62-1.png",
      description: "Tungsten steel center drill for precision centering",
      specifications: "Center Drill",
      application: "Precision centering operations",
      pageNumber: "K62",
    },
    {
      id: "K63-1",
      name: "Powder High Speed Steel Drill Bit 3D (FMZT)",
      series: "Powder HSS Series",
      image: "/images/K63-1.png",
      description: "High precision drilling with nano coating and powder HSS material",
      specifications: "3D Length",
      application: "Steel, carbon steel, alloy steel, stainless steel, aluminum alloy, copper alloy",
      pageNumber: "K63",
    },
    {
      id: "K64-1",
      name: "Powder High Speed Steel Drill Bit 5D (FMZT)",
      series: "Powder HSS Series",
      image: "/images/K63-1.png",
      description: "Extended length high precision drilling with nano coating",
      specifications: "5D Length",
      application: "Steel, carbon steel, alloy steel, stainless steel, aluminum alloy, copper alloy",
      pageNumber: "K64",
    },
    {
      id: "K65-1",
      name: "HSS Straight Shank Drill",
      series: "HSS Standard Series",
      image: "/images/K65-1.png",
      description: "Standard HSS drill for general material processing",
      specifications: "HSS Material",
      application: "Copper, aluminum, steel, cast iron processing",
      pageNumber: "K65",
    },
    {
      id: "K67-1",
      name: "HRC45° Tungsten Steel Fixed Shank Drill Bit (DBWGZT45C)",
      series: "Fixed Shank Drill Series",
      image: "/images/K67-1.png",
      description: "Nano coating tungsten steel drill for general materials",
      specifications: "HRC45° with nano coating",
      application: "Nonferrous metal, gray cast iron, stainless steel, heat resistant alloy steel",
      pageNumber: "K67",
    },
    {
      id: "K67-2",
      name: "Aluminum-Use Fixed Shank Tungsten Steel Drill-3D/5D (DBWGZT-AL)",
      series: "Aluminum Specialist Series",
      image: "/images/K67-2.png",
      description: "Specialized tungsten steel drill designed specifically for aluminum",
      specifications: "3D/5D Length",
      application: "Specifically designed for aluminum processing",
      pageNumber: "K67",
    },
    {
      id: "K68-1",
      name: "55° Bronze Colored Coating Tungsten Steel Drill-3D/5D (DBWGZT55C)",
      series: "Bronze Coated Series",
      image: "/images/K68-1.png",
      description: "Bronze coating for difficult-to-cut materials",
      specifications: "55° with bronze coating, 3D/5D",
      application: "Hardened steel, high temperature alloy, difficult processing materials",
      pageNumber: "K68",
    },
    {
      id: "K69-1",
      name: "Carbide Drill (Uncoated)",
      series: "Carbide Drill Series",
      image: "/images/K69-1.png",
      description: "Uncoated carbide drill for general material processing",
      specifications: "Uncoated Carbide",
      application: "Copper, aluminum, steel, cast iron processing",
      pageNumber: "K69",
    },
    {
      id: "K69-2",
      name: "Carbide Drill (Coated) HRC≤50°",
      series: "Coated Carbide Series",
      image: "/images/K69-2.png",
      description: "Coated carbide drill for materials up to HRC50",
      specifications: "Coated, HRC≤50°",
      application: "Steel, stainless steel, cast iron and other materials processing",
      pageNumber: "K69",
    },
    {
      id: "K69-3",
      name: "50° 2F Aluminum Carbide Drill",
      series: "Aluminum Carbide Series",
      image: "/images/K69-3.png",
      description: "Uncoated 2-flute carbide drill specifically for aluminum",
      specifications: "50° 2F, Uncoated",
      application: "Aluminum, aluminum alloy, die-cast aluminum",
      pageNumber: "K69",
    },
    {
      id: "K71-1",
      name: "Spiral Welded Edge Ultrafine Tungsten Steel Left-handed Mechanical Reamer - Morse Taper Shank (SWRMT,SWRIMT)",
      series: "Morse Taper Reamer Series",
      image: "/images/K71-1.png",
      description: "Precision spiral welded edge reamer with Morse taper shank",
      specifications: "Morse Taper Shank, Metric",
      application: "Precision reaming applications with Morse taper compatibility",
      pageNumber: "K71",
    },
    {
      id: "K71-2",
      name: "Spiral-Welded Ultrafine Particles Tungsten Steel Left-hand Mechanical Reamer - Straight Shank (SWRM)",
      series: "Straight Shank Reamer Series",
      image: "/images/K71-2.png",
      description: "Spiral welded ultrafine tungsten steel reamer with straight shank",
      specifications: "Straight Shank, Imperial",
      application: "Precision reaming with straight shank configuration",
      pageNumber: "K71",
    },
    {
      id: "K72-1",
      name: "Butt-Welded Ultra-fine Tungsten Steel Head Left-handed Mechanical Reamer - Straight Shank (SWRI)",
      series: "Butt-Welded Reamer Series",
      image: "/images/K72-1.png",
      description: "Butt-welded ultra-fine tungsten steel reamer",
      specifications: "Straight Shank, Imperial",
      application: "High-precision reaming with butt-welded construction",
      pageNumber: "K72",
    },
    {
      id: "K72-2",
      name: "Welding Edge Type Ultrafine Tungsten Steel Unequal Left-handed Mechanical Reamer - Straight Shank (SWM)",
      series: "Welding Edge Reamer Series",
      image: "/images/K72-2.png",
      description: "Welding edge type ultrafine tungsten steel reamer with unequal spacing",
      specifications: "Straight Shank, Unequal spacing",
      application: "Specialized reaming with welding edge construction",
      pageNumber: "K72",
    },
    {
      id: "K72-3",
      name: "Welding Edge Type Ultrafine Tungsten Steel Unequal Left-handed Mechanical Reamer - Mo-style Taper Shank (SWMT)",
      series: "Mo-style Taper Reamer Series",
      image: "/images/K72-3.png",
      description: "Welding edge type reamer with Mo-style taper shank",
      specifications: "Mo-style Taper Shank, Unequal spacing",
      application: "Precision reaming with Mo-style taper shank compatibility",
      pageNumber: "K72",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Comprehensive Range",
      description: "Complete drilling and reaming solutions from precision centering drills to large diameter hollow drills, covering Ø0.2mm to Ø220mm applications.",
    },
    {
      icon: "Zap", 
      title: "Advanced Technologies",
      description: "Self-centering functions, micro-adjustment capabilities, indexable inserts, and internal coolant systems for maximum efficiency and precision.",
    },
    {
      icon: "Target",
      title: "Material Versatility",
      description: "Specialized tools for various materials including HSS, carbide, with nano coatings suitable for steel, aluminum, titanium, and superalloys.",
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

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Drill Bit Performance",
      description: "High-performance drills with materials including High-Speed Steel (HSS), HSS-Co, and Solid Carbide. Coatings include TiN, TiCN, TiAlN, nano, bronze, and black coatings. Geometry features point angles of 118° for soft materials, 135° or 140° for harder materials. Fast drills cover Ø10~65mm with depths of 2x to 10x diameter. VMD large bits handle Ø18~180mm with indexable technology and replaceable tool holders.",
    },
    {
      title: "Precision Finishing Tools",
      description: "Reamers achieve H7 tolerance capability for high-precision hole processing. Tungsten steel mechanical reamers suitable for difficult-to-cut materials including alloy steel, stainless steel, titanium alloy, and cast iron up to HRC55°. Available in taper shank (Ø12-60mm) and straight shank (Ø6-20mm) configurations. Center drills create 60° conical holes with diameters from Ø0.4mm to Ø10mm in HSS and tungsten steel materials.",
    },
    {
      title: "Specialized Applications",
      description: "Fixed-point drills (spotting drills) with 90°, 120°, and 142° angles for precise centering, made from solid carbide for maximum rigidity. Fixed shank drill bits with precision h6/h7 tolerances designed for CNC environments, available in HRC45° and HRC55° variants. Point angles typically 35° for fixed shank bits. Internal coolant channels available for deep-hole drilling applications with pressurized coolant delivery.",
    },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-white text-gray-900">
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Drill Bit & Reamer Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Drill Bit & Reamer System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  Drill bits are fundamental cutting tools used to create, originate, or enlarge cylindrical holes in a workpiece. Their function is a primary machining operation and serves as a prerequisite for many other processes, such as reaming, tapping, or boring. The MZG Drill Bit & Reamer System represents a comprehensive solution covering Fast Drills, Spade Drills, VMD Large Bits, Fixed-Point Drills, Reamers, Center Drills, and Fixed Shank Drill Bits for the complete spectrum of hole machining from Ø0.2mm to Ø220mm applications.
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
                    src="/images/drilling-calculator-interface.png"
                    alt="MZG Professional Drill Bit & Reamer System"
                    width={563}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
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
              <h2 className="text-3xl font-bold">System Performance Analysis</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="prose prose-xs max-w-none">
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      <strong>Drill Bits</strong> are cutting tools primarily used for high efficiency drilling to create cylindrical holes. Key performance indicators include cutting speed, feed rate, hole quality (dimensional accuracy, straightness, and surface finish), and tool life. High-performance drills feature excellent chip evacuation, high rigidity, and wear-resistant coatings for prolonged life under demanding conditions.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      <strong>Fast Drills</strong> are available for through hole drilling and flat bottom hole drilling, utilizing various inserts such as WCMX, SPMG, SOMT, and XOMT. <strong>Spade Drills</strong> are upgraded replacements for traditional twist drills, featuring self-centering function and double-edge symmetrical uniform stress design, suitable for deep hole drilling with high-pressure internal coolant. <strong>VMD Large Bits</strong> are indexable drills that significantly improve machining efficiency with center guide drill structure for good centering and hole straightness.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      <strong>Fixed-Point Drills</strong> (spotting drills) are specialized tools designed to provide better centering effect and ensure good straightness for subsequent drilling operations. <strong>Reamers</strong> are precision finishing tools used for high-precision hole processing, designed to enlarge and finish pre-drilled holes to achieve H7 tolerance capability. <strong>Center Drills</strong> are combined drill and countersink tools for creating 60° conical holes in lathe work, ensuring perfect concentricity between headstock and tailstock operations.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      <strong>Fixed Shank Drill Bits</strong> are high-performance drills with precision straight shanks manufactured to tight cylindrical tolerances (h6/h7), designed for high-precision drilling in CNC environments. The precision shank minimizes tool runout, resulting in improved hole quality, dimensional accuracy, and extended tool life through even cutting load distribution across all cutting edges.
                    </p>
                  </div>
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
                        <strong>Materials:</strong> HSS, Carbide, Tool Steel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> Nano, TiN, TiCN, Bronze, Black
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Precision Range:</strong> H7 tolerance, 0.002mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Diameter Range:</strong> Ø0.2mm-Ø220mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Insert Types:</strong> WCMX, SPMG, SOMT, XOMT
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
                  <div className="relative w-full bg-white" style={{ height: "160px" }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 border-t">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold line-clamp-2 flex-1 mr-2">{product.name}</h3>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">{product.pageNumber}</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      {product.series && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Series:</span>
                          <span className="text-gray-900 text-right">{product.series}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-3 line-clamp-2">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Specifications</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => {
                // Define icons for each spec
                const icons = [
                  <Drill className="h-8 w-8 text-blue-600" />,
                  <Target className="h-8 w-8 text-green-600" />,
                  <Settings className="h-8 w-8 text-purple-600" />
                ];
                
                return (
                  <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl mr-4 group-hover:from-red-50 group-hover:to-red-100 transition-all duration-300">
                        {icons[index]}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">{spec.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Product Categories */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Categories</h2>
            </div>

            {/* Drill Bit Systems */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Drill Bit Systems: High-Efficiency Hole Creation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Drill className="h-6 w-6 text-blue-600 mr-3" />
                    Fast Drills & Spade Drills
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Fast drills are available for through hole drilling and flat bottom hole drilling, utilizing various inserts such as WCMX, SPMG, SOMT, and XOMT. Spade drills are considered an upgraded replacement for traditional twist drills, featuring self-centering function and double-edge symmetrical uniform stress, making them suitable for deep hole drilling.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Self-centering function for improved accuracy and good straightness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Center water holes with high-pressure internal coolant capability</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Suitable for CNC equipment and conventional machines</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Cog className="h-6 w-6 text-green-600 mr-3" />
                    VMD Large & Hollow Drills
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    VMD large indexable drills significantly improve machining efficiency with center guide drill structure ensuring good centering and hole straightness. They feature replaceable small tool holders for internal and external cutting edges, which saves tool costs. Hollow drills are described as side solid fast hollow bits with effective lengths of 150mm, 200mm, or 250mm.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Replaceable small tool holders for cost savings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Modular structure with adjustable machining size (0-5mm range)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Central water holes for effective cooling and chip evacuation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Tool className="h-6 w-6 text-blue-600 mr-3" />
                    Multi-function Drill Pipes & QD Series
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Multi-function drill pipes combine turning, boring, and drilling functions into a single tool holder, thereby saving installation time and reducing overall tool costs. QD Series employ a new self-locking clamping method between the cutting head and toolholder, enabling quick changing of cutting heads without removing the tool body from the machine spindle.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Perfectly polished tool body with internal coolant holes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>High interchangeability and flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Quick tool changes without removing body from spindle</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Settings className="h-6 w-6 text-green-600 mr-3" />
                    Swordtooth Drill Shanks
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Available for drill diameters 12-33.5mm with depths of 1.5x to 12x diameter. Features interchangeable carbide inserts and high-rigidity alloy tool holders with radial tooth profiles design.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Reserved grinding allowance (1.5mm-3mm) to reduce tool costs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Enhanced edge treatment for extended machining life</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Internal cold hole design for sufficient cooling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reamer Systems */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Reamer Systems: Precision Finishing Excellence</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                    Tungsten Steel Mechanical Reamers H7
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    High-precision reamers specifically designed for H7 tolerance holes, suitable for difficult-to-cut materials including alloy steel, stainless steel, titanium alloy, and cast iron with hardness up to HRC55°.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>H7 tolerance capability for high-precision hole processing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Suitable for materials up to HRC55° hardness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Tungsten steel construction for maximum durability</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Layers className="h-6 w-6 text-orange-600 mr-3" />
                    Tungsten Steel Welded Edge Reamers
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Available in taper shank and straight shank configurations, these reamers provide excellent performance in alloy steels, stainless steels, and titanium alloys through advanced welded edge technology.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Taper shank: Ø12-60mm diameter range</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Straight shank: Ø6-20mm diameter range</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Spiral welded edge ultrafine tungsten steel construction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specialized Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Specialized Tools: Centering and Precision</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Crosshair className="h-6 w-6 text-green-600 mr-3" />
                    Fixed-Point Drills (Spotting Drills)
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Specialized tools whose primary function is for centering. They are designed to provide a better centering effect and ensure good straightness of the hole site for subsequent drilling operations, preventing drill "walking" or deflecting off-center upon entry.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Available with 90°, 120°, and 142° angles</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Made from solid carbide for maximum rigidity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Prevents drill "walking" and ensures accurate hole location</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <CircleDot className="h-6 w-6 text-green-600 mr-3" />
                    Center Drills
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A specialized type of drill bit used to create a small, conical hole, known as a center hole, which provides a precise starting point for larger drills or to support a workpiece between centers in a lathe. Used primarily in lathe work to create a starting hole in the end of a workpiece.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Diameter range from Ø0.4mm to Ø10mm</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Standard 60° included angle for lathe centers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Creates precise starting point for larger drills</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Target className="h-6 w-6 text-green-600 mr-3" />
                    Fixed Shank Drill Bits
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    High-performance drill bits with straight shanks manufactured to very tight cylindrical tolerances (h6/h7). The precision shank is designed to be clamped in high-accuracy tool holders like hydraulic chucks, shrink-fit holders, or precision collets, designed for high-precision drilling in CNC environments.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Precision shank tolerances (h6/h7) minimize tool runout</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Improved hole quality and dimensional accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Internal coolant channels available for deep-hole drilling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Parameters Table */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Technical Parameters and Processing Methods</h3>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Tool Type</th>
                        <th className="px-4 py-3 text-left font-semibold">Materials</th>
                        <th className="px-4 py-3 text-left font-semibold">Coatings</th>
                        <th className="px-4 py-3 text-left font-semibold">Geometry</th>
                        <th className="px-4 py-3 text-left font-semibold">Shank Type</th>
                        <th className="px-4 py-3 text-left font-semibold">Applications</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Drill Bits (General)</td>
                        <td className="px-4 py-3">HSS, HSS-Co, Solid Carbide</td>
                        <td className="px-4 py-3">TiN, TiCN, TiAlN, Nano</td>
                        <td className="px-4 py-3">Point Angle: 118°, 135°, 140°</td>
                        <td className="px-4 py-3">Straight, Taper</td>
                        <td className="px-4 py-3">General purpose drilling</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Fixed-Point Drills</td>
                        <td className="px-4 py-3">Tungsten Steel (Carbide)</td>
                        <td className="px-4 py-3">Nano, Bronze, Uncoated</td>
                        <td className="px-4 py-3">Point Angle: 60°, 90°, 120°</td>
                        <td className="px-4 py-3">Straight Shank</td>
                        <td className="px-4 py-3">Precise centering operations</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Reamers</td>
                        <td className="px-4 py-3">HSS, HSS-Co, Solid Carbide</td>
                        <td className="px-4 py-3">Carbide-tipped, TiN</td>
                        <td className="px-4 py-3">Straight/Spiral Flutes, 6-8+ flutes</td>
                        <td className="px-4 py-3">Straight, Taper</td>
                        <td className="px-4 py-3">H7 tolerance finishing</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Center Drills</td>
                        <td className="px-4 py-3">HSS, Solid Carbide</td>
                        <td className="px-4 py-3">Standard coatings</td>
                        <td className="px-4 py-3">60° included angle</td>
                        <td className="px-4 py-3">Straight Shank</td>
                        <td className="px-4 py-3">Lathe center hole creation</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Fixed Shank Drills</td>
                        <td className="px-4 py-3">Tungsten Steel</td>
                        <td className="px-4 py-3">Nano coating</td>
                        <td className="px-4 py-3">Point Angle: 35°</td>
                        <td className="px-4 py-3">Precision Straight (h6/h7)</td>
                        <td className="px-4 py-3">High-precision CNC drilling</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Application Processing Methods */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Application Processing Methods</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Drill Bit Processing</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Fast Drills:</strong> Through hole and flat bottom hole drilling with proper cutting parameter selection based on workpiece material</span>
                    </li>
                                         <li className="flex items-start">
                       <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                       <span><strong>Spade Drills:</strong> Recommended for L/D ratios {'>'}5x with high-pressure internal coolant for chip evacuation</span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                       <span><strong>Deep Hole Drilling:</strong> Use guide holes for depths {'>'}8x diameter, start with 1.5D or 3D drill</span>
                     </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Reaming Processing</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Pre-drilling:</strong> Hole must be drilled slightly undersize with proper reaming allowance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Speed/Feed:</strong> Slow speed with higher feed rate compared to drilling operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>H7 Tolerance:</strong> Achievable with tungsten steel mechanical reamers for precision applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Scenarios */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Application Scenarios and Industrial Implementation</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-semibold mb-3 text-blue-900">Aerospace Manufacturing</h4>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Precision drilling in aluminum and composite fuselages, engine components requiring tight tolerances and excellent surface finishes for critical aerospace applications.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold mb-3 text-green-900">Automotive Industry</h4>
                  <p className="text-sm text-green-800 leading-relaxed">
                    Engine blocks, transmission housings, chassis components requiring high-volume production with consistent quality and dimensional accuracy.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                  <h4 className="text-lg font-semibold mb-3 text-red-900">Electronics Manufacturing</h4>
                  <p className="text-sm text-red-800 leading-relaxed">
                    PCB drilling, precision holes in electronic components and assemblies requiring micro-precision capabilities and excellent surface finish.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <h4 className="text-lg font-semibold mb-3 text-purple-900">Mold and Die Making</h4>
                  <p className="text-sm text-purple-800 leading-relaxed">
                    Precision drilling and reaming in tool steels, creating cooling channels and mounting holes with H7 tolerances for critical tooling applications.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <h4 className="text-lg font-semibold mb-3 text-orange-900">Medical Equipment</h4>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    Surgical instruments, implant components requiring biocompatible materials and ultra-precise tolerances for medical device manufacturing.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">General Manufacturing</h4>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Wide range of industrial applications requiring reliable, precise drilling and reaming solutions for various materials and specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Showcase - Compact Grid Layout */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Gallery</h2>
            </div>
                        <div className="grid grid-cols-6 grid-rows-5 gap-3 h-[500px]">
              {/* Large center-left image - 主要轮播图 */}
              <div className="col-span-2 row-span-3 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center">
                <Image
                  src={galleryImages[currentMainImage]}
                  alt="Product"
                  width={240}
                  height={240}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Medium center image */}
              <div 
                className="col-span-2 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 1) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 1) % galleryImages.length]}
                  alt="Product"
                  width={180}
                  height={180}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Small top-right */}
              <div 
                className="col-span-1 row-span-1 bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 2) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 2) % galleryImages.length]}
                  alt="Product"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Small top-right 2 */}
              <div 
                className="col-span-1 row-span-1 bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 3) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 3) % galleryImages.length]}
                  alt="Product"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Medium right */}
              <div 
                className="col-span-2 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 4) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 4) % galleryImages.length]}
                  alt="Product"
                  width={180}
                  height={180}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Small bottom-left */}
              <div 
                className="col-span-1 row-span-1 bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 5) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 5) % galleryImages.length]}
                  alt="Product"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Small bottom-center */}
              <div 
                className="col-span-1 row-span-1 bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 6) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 6) % galleryImages.length]}
                  alt="Product"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Bottom row - 4 equal containers, each 1/4 width and 2 rows high */}
              
              {/* Container 1 - 1.5 columns wide, 2 rows high */}
              <div 
                className="col-span-1 col-start-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 7) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 7) % galleryImages.length]}
                  alt="Product"
                  width={120}
                  height={120}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Container 2 - 1.5 columns wide, 2 rows high */}
              <div 
                className="col-span-1 col-start-2 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 8) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 8) % galleryImages.length]}
                  alt="Product"
                  width={120}
                  height={120}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Container 3 - 1.5 columns wide, 2 rows high */}
              <div 
                className="col-span-1 col-start-3 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 9) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 9) % galleryImages.length]}
                  alt="Product"
                  width={120}
                  height={120}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Container 4 - 1.5 columns wide, 2 rows high */}
              <div 
                className="col-span-1 col-start-4 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 10) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 10) % galleryImages.length]}
                  alt="Product"
                  width={120}
                  height={120}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Container 5 - 1.5 columns wide, 2 rows high */}
              <div 
                className="col-span-1 col-start-5 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 11) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 11) % galleryImages.length]}
                  alt="Product"
                  width={120}
                  height={120}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
              
              {/* Container 6 - 1.5 columns wide, 2 rows high */}
              <div 
                className="col-span-1 col-start-6 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300"
                onClick={() => setCurrentMainImage((currentMainImage + 12) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 12) % galleryImages.length]}
                  alt="Product"
                  width={120}
                  height={120}
                  className="object-contain w-full h-full transition-opacity duration-500"
                />
              </div>
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(() => {
                // Define all categories in the same directory with fixed images
                const allHoleMachiningCategories = [
                  {
                    title: "Boring Machining System",
                    image: "/images/K69-1.png", // 使用固定图片避免hydration错误
                    description: "Complete boring machining solutions",
                    url: "/standard-tools/hole-machining/boring-machining",
                  },
                  {
                    title: "Fast Drilling",
                    image: "/images/K72-1.png", // 使用固定图片避免hydration错误
                    description: "Fast drilling tools",
                    url: "/standard-tools/hole-machining/fast-drilling",
                  },
                ];
                
                return allHoleMachiningCategories.map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Hole Machining Tools" url={category.url} />
                ));
              })()}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-16 animate-gradient-xy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Professional Drilling & Reaming Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select optimal drill bits and reamers for specific applications, materials, and precision requirements. From high-speed drilling to H7 tolerance reaming, we provide comprehensive hole machining solutions.
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
                  Request Custom Solutions
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