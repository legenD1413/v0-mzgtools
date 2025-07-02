"use client"

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
  Shield,
  Drill,
  CircleDot,
  Crosshair,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function InsertTypeThreadMillingCuttersPage() {
  // Thread Milling Inserts相关的默认图片
  const defaultInsertImages = [
    "/images/L15-1.png",
    "/images/L15-2.png", 
    "/images/L16-1.png",
    "/images/L16-2.png",
    "/images/L18-1.png",
    "/images/L19-1.png"
  ];

  // Gallery images for rotation - will be loaded from API
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  // State for rotating images
  const [currentMainImage, setCurrentMainImage] = useState(0);

  // Load gallery images from API
  const loadGalleryImages = async () => {
    try {
      setIsLoadingImages(true);
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/threading/inserts-type-thread-milling-cutter");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认图片
          setGalleryImages(defaultInsertImages);
        }
      } else {
        // API请求失败，使用默认图片
        setGalleryImages(defaultInsertImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认图片
      setGalleryImages(defaultInsertImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认图片，避免显示无关图片
    setGalleryImages(defaultInsertImages);
    setIsLoadingImages(false);
    
    // 然后异步加载API图片
    loadGalleryImages();
  }, []);

  // 单独的useEffect处理图片轮播
  useEffect(() => {
    if (galleryImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentMainImage((prev) => (prev + 1) % galleryImages.length);
    }, 20000); // 每20秒轮换一次

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Replaceable Insert System",
      description: "Cost-effective solution with replaceable carbide inserts featuring multiple cutting edges. Advanced TiAlN, AlTiN, and TiCN coatings provide enhanced hardness, reduced friction, and superior heat resistance for extended tool life.",
    },
    {
      icon: "Zap",
      title: "Comprehensive Thread Standards",
      description: "Complete coverage of ISO metric, UN, NPT/NPTF, BSPT, PG, and specialty thread standards with precise 55°, 60°, and 80° profiles. Single-sided and double-sided insert configurations for maximum versatility.",
    },
    {
      icon: "Target",
      title: "Precision Threading Performance",
      description: "Superior thread quality with excellent surface finish, accurate pitch control, and precise thread form. Capable of machining internal and external threads in materials up to HRC65 with exceptional dimensional accuracy.",
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

  const products = [
    {
      id: "itmc-001",
      name: "ISO Standard Threaded Insert",
      image: "/images/L15-1.png",
      description: "ISO standard metric threads with 60° profile for pitches from 0.5 mm to 6.0 mm",
      series: "ISO",
      pageNumber: "L15",
    },
    {
      id: "itmc-002",
      name: "UN-60° American UN Standard Threaded Insert",
      image: "/images/L15-2.png",
      description: "American unified standard threads (UN, UNC, UNF, UNEF, UNS) with 60° profile",
      series: "UN-60°",
      pageNumber: "L15",
    },
    {
      id: "itmc-003",
      name: "W-55° British Whitworth Thread Cutter",
      image: "/images/L16-1.png",
      description: "British Whitworth threads (BSW, BSF, BSP) with 55° profile for pitches from 4.5 to 28 TPI",
      series: "W-55°",
      pageNumber: "L16",
    },
    {
      id: "itmc-004",
      name: "BSPT-55° British Standard Taper Pipe Thread Cutter",
      image: "/images/L16-2.png",
      description: "BSPT (PT, RC) British taper pipe threads with 55° profile for TPI 19, 14, and 11",
      series: "BSPT-55°",
      pageNumber: "L16",
    },
    {
      id: "itmc-005",
      name: "NPT-60° American Standard Taper Pipe Thread Insert",
      image: "/images/L16-3.png",
      description: "NPT American taper pipe threads with 60° profile for TPI 8, 11.5, 14, and 18",
      series: "NPT-60°",
      pageNumber: "L16",
    },
    {
      id: "itmc-006",
      name: "PG Thread Insert",
      image: "/images/L16-4.png",
      description: "PG threads (DIN 40430) with 80° profile for double-sided use",
      series: "PG",
      pageNumber: "L16",
    },
    {
      id: "itmc-007",
      name: "Single Insert Toolholders",
      image: "/images/L18-1.png",
      description: "SR series toolholders for single thread milling inserts with internal coolant bore",
      series: "SR",
      pageNumber: "L18",
    },
    {
      id: "itmc-008",
      name: "Single Insert Toolholders (Long Shank)",
      image: "/images/L18-2.png",
      description: "Extended SR series for deep hole applications with longer reach capability",
      series: "SR-Long",
      pageNumber: "L18",
    },
    {
      id: "itmc-009",
      name: "ISO Metric Full Profile Thread Milling Inserts",
      image: "/images/L19-1.png",
      description: "TM series inserts for ISO metric full profile threads with 60° profile, pitches 0.5-6.0mm",
      series: "TM-ISO",
      pageNumber: "L19",
    },
    {
      id: "itmc-010",
      name: "UN-60° American UN Full Profile Thread Milling Inserts",
      image: "/images/L19-2.png",
      description: "TM series for American UN full profile threads with 60° profile, TPI 4-48",
      series: "TM-UN",
      pageNumber: "L19",
    },
    {
      id: "itmc-011",
      name: "UNJ Aviation Thread Milling Inserts",
      image: "/images/L20-1.png",
      description: "TM series for UNJ aviation threads with 60° profile, TPI 11-24",
      series: "TM-UNJ",
      pageNumber: "L20",
    },
    {
      id: "itmc-012",
      name: "W-55° Whitworth Full Profile Thread Milling Inserts",
      image: "/images/L20-2.png",
      description: "TM series for Whitworth full profile threads with 55° profile, TPI 4.5-28",
      series: "TM-W",
      pageNumber: "L20",
    },
    {
      id: "itmc-013",
      name: "NPT-60° National Pipe Thread Milling Inserts",
      image: "/images/L20-3.png",
      description: "TM series for NPT National Pipe Threads with 60° profile, TPI 8, 11.5, 14, 18",
      series: "TM-NPT",
      pageNumber: "L20",
    },
    {
      id: "itmc-014",
      name: "BSPT-55° British Standard Pipe Taper Thread Milling Inserts",
      image: "/images/L20-4.png",
      description: "TM series for BSPT threads with 55° profile, TPI 11, 14, 19",
      series: "TM-BSPT",
      pageNumber: "L20",
    },
    {
      id: "itmc-015",
      name: "NPTF (Dry seal) American Taper Pipe Thread Milling Inserts",
      image: "/images/L20-5.png",
      description: "TM series for NPTF dry seal threads with 60° profile, TPI 8, 11.5, 14",
      series: "TM-NPTF",
      pageNumber: "L20",
    },
    {
      id: "itmc-016",
      name: "Threading Milling Tool Holders",
      image: "/images/L21-1.png",
      description: "STM, SBTM, STML series toolholders with various designs for different insert types",
      series: "STM",
      pageNumber: "L21",
    },
    {
      id: "itmc-017",
      name: "Thread Milling Holders for Deep Holes (U-type)",
      image: "/images/L23-1.png",
      description: "SMT.SC series U-type holders for deep hole applications, suitable for large pitches",
      series: "U-Type",
      pageNumber: "L23",
    },
    {
      id: "itmc-018",
      name: "Thread Milling Holders for Deep Holes (A-type)",
      image: "/images/L23-2.png",
      description: "SMT.SC series A-type holders for small pitches and short relief grooves",
      series: "A-Type",
      pageNumber: "L23",
    },
    {
      id: "itmc-019",
      name: "60° Thread Mill for Deep Holes Inserts",
      image: "/images/L23-3.png",
      description: "Deep hole inserts with 60° profile for pitches 0.5-8.0mm and TPI 4-48",
      series: "Deep-60°",
      pageNumber: "L23",
    },
    {
      id: "itmc-020",
      name: "Indexable Threading Mills",
      image: "/images/L24-1.png",
      description: "SMT series mills using indexable inserts for external and internal thread milling",
      series: "SMT",
      pageNumber: "L24",
    },
    {
      id: "itmc-021",
      name: "Partial Profile Thread Milling Inserts (60°)",
      image: "/images/L25-1.png",
      description: "60° partial profile inserts made from ZK 110, ZP 153, and ZP 15 materials",
      series: "Partial-60°",
      pageNumber: "L25",
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
      title: "Insert Design & Materials",
      description: "Carbide inserts with TiAlN, AlTiN, and TiCN coatings for enhanced performance. Single-point and multi-point configurations with standardized ISO and proprietary designations. Multiple indexable edges per insert for cost efficiency.",
    },
    {
      title: "Thread Standards & Profiles",
      description: "Comprehensive coverage including ISO metric (60°), UN/UNC/UNF (60°), NPT/NPTF (60°), BSPT (55°), Whitworth (55°), and PG (80°) thread standards. Pitch ranges from 0.5mm to 6.0mm and TPI from 4 to 48.",
    },
    {
      title: "Toolholder Systems",
      description: "Various toolholder designs including single insert (SR series), twin insert, multi-insert, and specialized deep hole configurations (U-type, A-type). Internal coolant delivery and modular interfaces for maximum flexibility.",
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
                <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Thread Milling Cutter Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Insert Type Thread Milling Cutters
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  **Thread Milling Cutter Toolholders & Inserts** represent a comprehensive precision machining system for creating high-quality internal and external threads. Our professional range encompasses sophisticated cutting tools with replaceable carbide inserts, offering superior flexibility, extended tool life, and capability to machine challenging materials across all thread standards including ISO metric, UN, NPT, BSPT, and specialty configurations.
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
                    src="/images/insert-thread-hero.png"
                    alt="Collection of Insert Type Thread Milling Cutters"
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
          {/* System Performance Analysis */}
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
                      Thread milling is a precision machining process that uses **rotating multi-fluted cutters with replaceable carbide inserts** to create high-quality internal and external threads. Unlike traditional tapping or threading on lathes, thread milling employs a **helical interpolation path** combining simultaneous X, Y, and Z axis movements for superior thread creation.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Our comprehensive system includes **Thread Milling Inserts** available in various configurations for specific thread standards, and **Thread Milling Toolholders** designed to securely hold inserts while enabling precise milling operations. Insert types range from **ISO Standard** and **UN-60° American** to specialized **NPT**, **BSPT**, and **PG thread configurations**.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      **Advanced carbide inserts** feature multi-layer coatings including **TiAlN, AlTiN, and TiCN** that enhance surface hardness, reduce friction, and provide thermal barrier properties. This enables processing of challenging materials from standard steels to **hardened alloys up to HRC65**, stainless steels, titanium alloys, and superalloys.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The system offers **exceptional versatility** with single-point and multi-point insert designs, various toolholder configurations including single insert (SR series), twin insert, multi-insert, and specialized deep hole types (U-type, A-type). **Internal coolant delivery** and modular interfaces ensure optimal performance across all threading applications.
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
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Materials:</strong> Carbide Inserts with Multi-Layer Coatings</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Coatings:</strong> TiAlN, AlTiN, TiCN</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Thread Profiles:</strong> 55°, 60°, 80°</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Standards:</strong> ISO, UN, NPT, BSPT, PG</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Pitch Range:</strong> 0.5-6.0mm, 4-48 TPI</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Material Hardness:</strong> Up to HRC65</span>
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
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Series:</span>
                        <span className="text-gray-900 text-right">{product.series}</span>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-600">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Gallery */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Gallery</h2>
              {isLoadingImages && (
                <div className="ml-4 flex items-center text-sm text-gray-500">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2"></div>
                  Loading latest images...
                </div>
              )}
            </div>
            <div className="grid grid-cols-6 grid-rows-4 gap-3 h-[300px]">
              {/* Large center-left image - 主要轮播图 */}
              <div className="col-span-2 row-span-4 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center overflow-hidden group">
                {galleryImages.length > 0 ? (
                  <Image
                    src={galleryImages[currentMainImage] || defaultInsertImages[0]}
                    alt="Thread Milling Insert Product"
                    width={480}
                    height={480}
                    quality={100}
                    priority
                    className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <div className="animate-pulse">Loading...</div>
                  </div>
                )}
              </div>

              {/* Middle section and Right section - 小图片网格 */}
              {Array.from({ length: 8 }, (_, index) => {
                const imageIndex = (currentMainImage + index + 1) % galleryImages.length;
                const imageSrc = galleryImages.length > 0 
                  ? galleryImages[imageIndex] || defaultInsertImages[imageIndex % defaultInsertImages.length]
                  : defaultInsertImages[index % defaultInsertImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Thread Milling Insert Product ${index + 1}`}
                      width={280}
                      height={280}
                      quality={100}
                      className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Specifications</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => {
                const getIcon = (title: string) => {
                  switch (title) {
                    case "Insert Design & Materials":
                      return <Layers className="h-6 w-6 text-blue-600 mr-3" />
                    case "Thread Standards & Profiles":
                      return <Shield className="h-6 w-6 text-green-600 mr-3" />
                    case "Toolholder Systems":
                      return <Settings className="h-6 w-6 text-purple-600 mr-3" />
                    default:
                      return <Tool className="h-6 w-6 text-gray-600 mr-3" />
                  }
                }
                
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                      {getIcon(spec.title)}
                      {spec.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{spec.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Application Scenarios & Processing */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios & Processing</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Application Scenarios */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                  Application Scenarios
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {applicationData.industries.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Threading Operations */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-3" />
                  Threading Operations
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {applicationData.threadForms.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Functions */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Main Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                  <Target className="h-5 w-5 text-red-600 mr-2" />
                  Primary Functions
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Versatile Thread Creation:</strong> Single-tooth, three-tooth, and full-profile configurations for all thread types and standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Superior Material Compatibility:</strong> Threading capabilities in materials from standard steels to HRC65 hardened alloys</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Process Security:</strong> Non-contact cutting reduces tool breakage risk and provides superior process control</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-2" />
                  Performance Benefits
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Advanced Coating Technology:</strong> Balchals Ultra H, Balchals DR, and DLC coatings for enhanced performance and tool life</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Comprehensive Thread Standards:</strong> Coverage of metric, unified, NPT, BSPT, and PG thread specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Economic Efficiency:</strong> Reduced machine downtime and improved productivity through extended tool life and versatility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/threading/inserts-type-thread-milling-cutter" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Thread Milling Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our technical team specializes in insert-type thread milling systems for all thread standards and challenging materials. From ISO metric and unified threads to specialized pipe and aviation applications, we provide comprehensive threading solutions with replaceable insert technology for maximum efficiency and economy.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 shadow-sm hover:shadow-md">
                    Contact Technical Support
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-gray-900 hover:bg-gray-50 border-gray-300 hover:border-gray-400 transition-all duration-300"
                  >
                    Request Custom Solutions
                  </Button>
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
            <div className="grid grid-cols-5 gap-6">
              {(() => {
                // Define related threading categories
                const relatedThreadingCategories = [
                  {
                    title: "Integral Thread Mills",
                    image: "/images/L05-1.png",
                    description: "Solid carbide thread mills for precision threading",
                    url: "/standard-tools/threading/integral-thread-milling-cutters",
                  },
                  {
                    title: "Taps",
                    image: "/images/L15-1.png",
                    description: "High-performance tapping tools for internal threads",
                    url: "/standard-tools/threading/taps",
                  },
                  {
                    title: "Thread Turning",
                    image: "/images/L16-1.png",
                    description: "Lathe tools for external thread creation",
                    url: "/standard-tools/threading/thread-turning",
                  },
                  {
                    title: "Threading Inserts",
                    image: "/images/L17-1.png",
                    description: "Indexable threading inserts for turning",
                    url: "/standard-tools/inserts/threading",
                  },
                  {
                    title: "Thread Whirling",
                    image: "/images/L18-1.png",
                    description: "High-productivity thread whirling tools",
                    url: "/standard-tools/threading/thread-whirling",
                  },
                ];
                
                return relatedThreadingCategories.slice(0, 5).map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Threading Tools" url={category.url} />
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
