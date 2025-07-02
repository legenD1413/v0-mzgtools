"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function SideMillingCutterPage() {
  // Side Milling Cutters相关的默认图片
  const defaultSideMillingImages = [
    "/images/SWS.png",
    "/images/SWSS.png", 
    "/images/WGJP.png",
    "/images/JPDG.png",
    "/images/YKL-1F55C.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/side-milling-cutter");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Side Milling图片
          setGalleryImages(defaultSideMillingImages);
        }
      } else {
        // API请求失败，使用默认Side Milling图片
        setGalleryImages(defaultSideMillingImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Side Milling图片
      setGalleryImages(defaultSideMillingImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Side Milling图片，避免显示无关图片
    setGalleryImages(defaultSideMillingImages);
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

  // Sample product data - preserving original content
  const products = [
    {
      id: "smc-001",
      name: "Welding edge type ultrafine tungsten steel side milling cutter",
      image: "/images/SWS.png",
      description:
        "Ultra-fine tungsten steel side milling cutter with welding edge technology for large-scale side milling operations",
      application: "D:75-200mm, H:3-7mm, T:14-24",
      series: "SWS",
      page: "F39",
      url: "/standard-tools/milling/side-milling-cutter/sws-series",
      // Additional specifications for the new format
      diameter: "75-200mm",
      width: "3-7mm",
      teeth: "14-24",
    },
    {
      id: "smc-002",
      name: "Welding edge type ultrafine tungsten steel side milling cutter",
      image: "/images/SWSS.png",
      description:
        "Ultra-fine tungsten steel side milling cutter with welding edge technology for enhanced side milling operations",
      application: "D:75-200mm, H:8-12mm, T:14-24",
      series: "SWSS",
      page: "F40",
      url: "/standard-tools/milling/side-milling-cutter/swss-series",
      // Additional specifications for the new format
      diameter: "75-200mm",
      width: "8-12mm",
      teeth: "14-24",
    },
    {
      id: "smc-003",
      name: "Saw Blade Toolholder",
      image: "/images/WGJP.png",
      description: "Precision toolholder designed for tungsten steel saw blades with adjustable mounting options",
      application: "tungsten steel saw blade",
      series: "WGJP",
      page: "F41",
      url: "/standard-tools/milling/side-milling-cutter/wgjp-series",
      // Additional specifications for the new format
      diameter: "20-200mm",
      width: "02-5mm",
      innerDiameter: "6-32mm",
      teeth: "20-50",
    },
    {
      id: "smc-004",
      name: "Saw Blade Toolholder",
      image: "/images/JPDG.png",
      description: "Compact saw blade toolholder for precision cutting applications with multiple diameter options",
      application: "",
      series: "JPDG",
      page: "F42",
      url: "/standard-tools/milling/side-milling-cutter/jpdg-series",
      // Additional specifications for the new format
      d1: "4-10mm",
      d: "8-12mm",
      diameter: "8-15mm",
      width: "3.7-4.3mm",
      length: "50-92mm",
    },
    {
      id: "smc-005",
      name: "Single-Edge Acrylic ,Aluminium Milling Cutter",
      image: "/images/YKL-1F55C.png",
      description:
        "Specialized single-edge milling cutter designed for acrylic and aluminum machining with precision cutting performance",
      application: "",
      series: "YKL-1F55C",
      page: "F43",
      url: "/standard-tools/milling/side-milling-cutter/ykl-1f55c-series",
      // Additional specifications for the new format
      d1: "2-12mm",
      l1: "6-32mm",
      diameter: "3.175-12mm",
      length: "50-70mm",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Dual Cutting Action for Multiple Surfaces",
      description: "Cutting edges on both periphery and sides enable simultaneous side and end milling operations. Three-sided edge design provides versatile machining capabilities for complex geometric requirements in a single setup.",
    },
    {
      icon: "Zap", 
      title: "Advanced Chip Evacuation Technology",
      description: "Staggered tooth (Thousand Birds) design features offset teeth arrangement that efficiently breaks chips, reduces cutting resistance, and improves chip evacuation for heavy-duty cutting operations and sticky materials.",
    },
    {
      icon: "Target",
      title: "Welding Edge Construction",
      description: "Ultra-fine particle tungsten steel with welded cutting inserts provides exceptional durability and precision. Tubular side milling design offers superior stability and rigidity for demanding machining applications.",
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
      title: "Material & Construction",
      description: "Ultra-fine particle Tungsten Steel construction with welded cutting inserts for exceptional hardness and wear resistance. Available in saw blade three-sided edge design and tubular side milling configurations. Cutting edges on periphery and both sides enable simultaneous multi-surface machining operations.",
    },
    {
      title: "Tooth Design & Geometry",
      description: "Two primary tooth configurations: Flat Teeth for general cutting operations and Staggered Teeth (Thousand Birds) for enhanced chip breaking and evacuation. Staggered design features offset teeth arrangement that reduces cutting resistance and improves performance in heavy-duty applications.",
    },
    {
      title: "Dimensional Parameters",
      description: "Comprehensive size range from 75mm to 200mm outer diameter for welding edge cutters, with blade heights from 3mm to 20mm. Saw blade toolholders accommodate various mounting configurations. Models include SWST series with 14-18 teeth and precise tolerance specifications (+1.0/+0 for diameter, +0.02/+0 for height).",
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
                  Side Milling Cutter Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Side Milling Cutter System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  Side Milling Cutters are a type of milling cutter used primarily for side milling operations. They are designed with cutting edges on their periphery, allowing for efficient material removal along the side of a workpiece. Our comprehensive system includes saw blade three-sided edge side milling cutters with cutting edges on both sides and circumference for simultaneous side and end milling, welding edge type ultra-fine particle tungsten steel tubular side milling cutters (SWST) with welded cutting inserts, and precision saw blade toolholders for secure mounting and stability.
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
                    src="/images/milling.png"
                    alt="MZG Professional Side Milling Cutter System"
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
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-sm max-w-none">
                  <h3 className="text-xl font-bold mb-3">I. Saw Blade Three-Sided Edge Side Milling Cutter</h3>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    This specialized cutter, often referred to as a "Saw Blade Three-sided Edge Side Milling Cutter," features 
                    <strong> cutting edges on both its sides and its circumference</strong>. This design enables it to perform 
                    <strong> simultaneous side and end milling</strong> operations. The cutters are characterized by their ability to perform 
                    <strong> simultaneous cutting on three faces</strong> (periphery and two sides) with different tooth geometries: 
                    <strong>Flat Teeth (平齿)</strong> for general cutting operations and <strong>Staggered Teeth (错齿/千鸟刃)</strong> 
                    with interspersed or offset arrangement that helps efficiently break chips, reduce cutting resistance, and improve chip evacuation.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">II. Welding Edge Type Ultra-Fine Particle Tungsten Steel Tubular Side Milling Cutter (SWST)</h3>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    This is a specific type of <strong>welded edge milling cutter</strong> designed for side milling, known as "焊刃式超微粒钨钢筒状侧铣刀". 
                    It is constructed from <strong>ultra-fine particle tungsten steel</strong>, a material prized for its high hardness and wear resistance. 
                    The "welding edge" characteristic implies suitability for <strong>heavy-duty cutting and machining of special shapes</strong> with 
                    cutting inserts welded onto the tool body.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">III. Saw Blade Toolholder (锯片刀杆)</h3>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The <strong>Saw Blade Toolholder</strong> is an accessory designed to <strong>mount and secure saw blades</strong>. 
                    Its primary performance characteristic is its <strong>ability to securely hold saw blades</strong>, ensuring stability and precision during cutting. 
                    The toolholder's role is to <strong>interface the saw blade with the milling machine spindle</strong>, providing a 
                    <strong>stable and precise clamping mechanism</strong> for various cutting operations.
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
                      <span className="text-sm"><strong>Material:</strong> Ultra-fine particle tungsten steel</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Diameter Range:</strong> 75mm to 200mm</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Blade Height:</strong> 3mm to 20mm</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Teeth Count:</strong> 14-24 teeth</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Design Types:</strong> Flat teeth, Staggered (Thousand Birds)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Applications:</strong> Side milling, Slotting, Gang milling</span>
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
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">{product.page}</span>
                        </div>
                    <div className="space-y-2 text-xs">
                      {product.series && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Series:</span>
                          <span className="text-gray-900 text-right">{product.series}</span>
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
                    src={galleryImages[currentMainImage] || defaultSideMillingImages[0]}
                    alt="Side Milling Cutter Product"
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
                  ? galleryImages[imageIndex] || defaultSideMillingImages[imageIndex % defaultSideMillingImages.length]
                  : defaultSideMillingImages[index % defaultSideMillingImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Side Milling Cutter Product ${index + 1}`}
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
                    case "Material & Construction":
                      return <Layers className="h-6 w-6 text-blue-600 mr-3" />
                    case "Tooth Design & Geometry":
                      return <Shield className="h-6 w-6 text-green-600 mr-3" />
                    case "Dimensional Parameters":
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
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>General Machining and Job Shops:</strong> Versatile side milling operations for slotting, grooving, and facing in diverse manufacturing environments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Heavy Machinery Manufacturing:</strong> Welding edge type cutters ideal for heavy-duty cutting operations and processing of special shapes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Automotive & Aerospace Industry:</strong> Precision side milling for component manufacturing requiring tight tolerances and superior surface finish</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Tool and Die Making:</strong> Saw blade three-sided edge cutters for simultaneous side and end milling in mold and die applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Tungsten Steel Saw Blade Operations:</strong> Specialized toolholders for secure mounting and precision cutting applications</span>
                  </li>
                </ul>
              </div>

              {/* Machining Operations */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-3" />
                  Machining Operations
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Side Milling & Slotting:</strong> Primary application for efficient material removal along workpiece sides with various tooth configurations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Gang Milling Operations:</strong> Simultaneous machining of multiple parallel surfaces for reduced cycle times and improved productivity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Straddle Milling:</strong> Cutting on both sides of workpiece simultaneously using appropriate cutter spacing and toolholder setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Face Milling & Grooving:</strong> Three-sided edge design enables complex operations including facing, grooving, and step milling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Heavy-duty Processing:</strong> Staggered tooth design for sticky materials and high material removal rate applications</span>
                  </li>
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
                    <span><strong>Simultaneous Multi-Surface Cutting:</strong> Three-sided edge design with cutting edges on periphery and both sides enables complex milling operations in a single setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Efficient Side Material Removal:</strong> Optimized geometry for side milling operations with superior chip evacuation and reduced cutting resistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Secure Saw Blade Mounting:</strong> Precision toolholders provide stable interface between saw blade and machine spindle for accurate cutting operations</span>
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
                    <span><strong>Enhanced Productivity:</strong> Gang milling capability allows parallel processing of multiple surfaces, significantly reducing cycle times</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Superior Chip Control:</strong> Staggered tooth (Thousand Birds) design breaks chips effectively and improves evacuation for sticky materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Welding Edge Durability:</strong> Ultra-fine particle tungsten steel with welded inserts provides exceptional tool life in demanding applications</span>
                  </li>
                </ul>
                </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/milling/side-milling-cutter" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Side Milling Cutter Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Discover how our advanced side milling cutter solutions can improve your productivity and precision. From saw blade three-sided edge cutters to tungsten steel SWST series, we provide comprehensive side milling solutions for all industrial applications.
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
                // Define all categories in the same milling directory
                const allMillingCategories = [
                  {
                    title: "T-Slot Cutters",
                    image: "/images/SWT.png",
                    description: "Specialized T-slot milling cutters",
                    url: "/standard-tools/milling/t-slot-cutter",
                  },
                  {
                    title: "Right Angle Flat End Mills",
                    image: "/images/2F45C-JST.png",
                    description: "Flat end mills for precise surfaces",
                    url: "/standard-tools/milling/right-angle-flat",
                  },
                  {
                    title: "Deep Ditch End Mills",
                    image: "/images/SG2F60C.png",
                    description: "Deep groove and cavity milling",
                    url: "/standard-tools/milling/deep-ditch",
                  },
                  {
                    title: "Fillet End Mills",
                    image: "/images/2F45CR.png",
                    description: "Corner radius end mills for enhanced strength",
                    url: "/standard-tools/milling/fillet",
                  },
                  {
                    title: "Ball End Mills",
                    image: "/images/2F45CRB.png",
                    description: "3D contouring and curved surface machining",
                    url: "/standard-tools/milling/ball-end",
                  },
                ];
                
                return allMillingCategories.map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Milling Tools" url={category.url} />
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
