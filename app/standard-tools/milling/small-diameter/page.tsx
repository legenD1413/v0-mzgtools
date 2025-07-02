"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Download,
  ChevronRight,
  Info,
  PenToolIcon as Tool,
  Settings,
  Layers,
  Zap,
  Shield,
  Target,
  Drill,
  Wrench,
  Cog,
  CircleDot,
  Crosshair,
  Microscope,
  Cpu,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function SmallDiameterMillingPage() {
  // Small Diameter相关的默认图片
  const defaultSmallDiameterImages = [
    "/images/AL-2F60C.png",
    "/images/2F60CS.png", 
    "/images/AL-2F60C-R.png",
    "/images/2F60C-R.png",
    "/images/AL-4F55CS.png",
    "/images/4F55CS.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/small-diameter");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Small Diameter图片
          setGalleryImages(defaultSmallDiameterImages);
        }
      } else {
        // API请求失败，使用默认Small Diameter图片
        setGalleryImages(defaultSmallDiameterImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Small Diameter图片
      setGalleryImages(defaultSmallDiameterImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Small Diameter图片，避免显示无关图片
    setGalleryImages(defaultSmallDiameterImages);
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

  // Product data based on existing content
  const products = [
    {
      id: "sd-005",
      name: "2 Edge Tungsten Steel Uncoated Small Diameter End Milling Cutter",
      image: "/images/AL-2F60C.png",
      description: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-2F60C",
      d: "0.3-13mm",
      H: "0.6-26mm",
      L1: "2-35mm",
      L: "50-100mm",
      D: "3-14mm",
      hardness: "HRC60",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/small-diameter/AL-2F60C",
      page: "F25",
    },
    {
      id: "sd-006",
      name: "2 Edge Tungsten Steel Coated Small Diameter End Milling Cutter",
      image: "/images/2F60CS.png",
      description: "Milling HRC60° steel, cast iron and stainless steel",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F60CS",
      d: "0.3-13mm",
      H: "0.6-26mm",
      L1: "2-35mm",
      L: "50-100mm",
      D: "3-14mm",
      hardness: "HRC60",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      url: "/standard-tools/milling/small-diameter/2F60CS",
      page: "F26",
    },
    {
      id: "sd-007",
      name: "2 Edge Tungsten Steel Uncoated Small Diameter Ball Head End Milling Cutter",
      image: "/images/AL-2F60C-R.png",
      description: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-2F60C-R",
      d: "0.15-6.5mm",
      H: "0.6-26mm",
      L: "50-100mm",
      D: "3-14mm",
      hardness: "HRC60",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/small-diameter/AL-2F60C-R",
      page: "F27",
    },
    {
      id: "sd-008",
      name: "2 Edge Tungsten Steel Coated Small Diameter Ball Head End Milling Cutter",
      image: "/images/2F60C-R.png",
      description: "Milling Stainless Steel And Steel Hardness Under HRC60°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F60C-R",
      d: "0.15-6.5mm",
      H: "0.6-26mm",
      L: "50-100mm",
      D: "3-14mm",
      hardness: "HRC60",
      application: "Milling Stainless Steel And Steel Hardness Under HRC60°",
      url: "/standard-tools/milling/small-diameter/2F60C-R",
      page: "F28",
    },
    {
      id: "sd-009",
      name: "4 Edge Tungsten Steel Uncoated End Milling Cutter",
      image: "/images/AL-4F55CS.png",
      description: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Uncoated",
      series: "AL-4F55CS",
      d: "1.1-13mm",
      H: "2.2-26mm",
      L: "50-100mm",
      D: "4-14mm",
      hardness: "HRC60",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      url: "/standard-tools/milling/small-diameter/AL-4F55CS",
      page: "F29",
    },
    {
      id: "sd-010",
      name: "4 Edge Tungsten Steel Coated End Milling Cutter",
      image: "/images/4F55CS.png",
      description: "Milling HRC60° steel, cast iron and stainless steel",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F55CS",
      d: "1.1-13mm",
      H: "2.2-26mm",
      L: "50-100mm",
      D: "4-14mm",
      hardness: "HRC60",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      url: "/standard-tools/milling/small-diameter/4F55CS",
      page: "F30",
    },
  ];

  // Performance features for the feature section
  const performanceFeatures = [
    {
      icon: <Microscope className="h-8 w-8 text-red-600" />,
      title: "Ultra-Precision Engineering",
      description:
        "Micro-grain tungsten carbide construction with tolerances in the micron range for exceptional accuracy in miniature feature creation.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Advanced PVD Coatings",
      description:
        "TiAlN, AlTiN, TiSiN, and DLC coatings provide superior wear resistance, reduced friction, and thermal protection for micro-machining.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "High-Speed Capability",
      description:
        "Optimized for high RPM operations with exceptional balance and minimal runout for vibration-free micro-machining.",
    },
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Material & Construction",
      description: "Micro-grain and ultra-fine grain solid tungsten carbide construction ensuring maximum hardness, wear resistance, and dimensional stability for precision micro-machining applications. Manufactured using advanced powder metallurgy techniques for consistent quality.",
    },
    {
      title: "Coating & Surface Technology",
      description: "Advanced PVD coatings including TiAlN, AlTiN, TiSiN, and DLC nano-composite layers providing superior hardness, reduced friction coefficient, thermal barriers, and improved chip flow characteristics for demanding micro-machining operations.",
    },
    {
      title: "Dimensional Parameters",
      description: "Diameter range from 0.1mm to 13mm with micron-level tolerances. Available in 2-flute and 4-flute configurations with optimized helix angles from 30° to 45°. Standardized shank diameters (3mm, 4mm, 1/8\") for universal compatibility.",
    },
  ]

  const renderIcon = (iconName: string) => {
    const iconProps = { className: "h-5 w-5 text-blue-600" };
    switch (iconName) {
      case "Target":
        return <Target {...iconProps} />;
      case "Drill":
        return <Drill {...iconProps} />;
      case "Wrench":
        return <Wrench {...iconProps} />;
      case "Cog":
        return <Cog {...iconProps} />;
      case "CircleDot":
        return <CircleDot {...iconProps} />;
      case "Crosshair":
        return <Crosshair {...iconProps} />;
      default:
        return <Tool {...iconProps} />;
    }
  };

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-white text-black">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Micro-Precision Cutting Tools
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">Small Diameter Milling Cutters</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
                  Ultra-precision tungsten steel small diameter flat end milling cutters engineered for micro-machining
                  applications. Featuring micro-grain carbide construction, advanced PVD coatings, and exceptional
                  dimensional accuracy for creating intricate details and miniature features in electronics, medical
                  devices, and precision manufacturing.
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
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  >
                    Download Catalog <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-[500px] h-[300px] bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center">
                  <Image
                    src={galleryImages[currentMainImage] || "/images/2F60CS.png"}
                    alt="Small Diameter End Mill Technical Diagram"
                    width={400}
                    height={200}
                    className="object-contain rounded-lg transition-opacity duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>
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
                    <strong>Small Diameter Milling Cutters</strong> are a specialized category of milling cutters designed for <strong>precision machining</strong>, including the fabrication of <strong>micro-components</strong> or highly <strong>detailed features</strong>. They are also sometimes referred to as "Decimal Point End Mills" when their cutting diameter is less than 1mm. These tools are primarily made of <strong>tungsten steel</strong>, a material known for its high hardness and wear resistance.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Tungsten Steel Small Diameter Flat End Milling Cutters are precision-engineered cutting tools, indispensable for machining intricate details, micro-features, and small-scale components with utmost accuracy. Manufactured from high-quality micro-grain or ultra-fine grain solid tungsten carbide, these end mills exhibit exceptional hardness and superior wear resistance.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The performance of these small diameter cutters is defined by their capacity to achieve exceptionally high precision, create features with high aspect ratios, and produce excellent surface finishes on micro-parts. Due to their small physical size, achieving optimal cutting speeds necessitates operation at very high rotational speeds (RPMs), often in High-Speed Cutting (HSC) applications.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Microscope className="h-5 w-5 text-red-600 mr-2" />
                    Micro-Machining Specifications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Diameter Range:</strong> 0.1mm to 3.0mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material:</strong> Micro-grain Tungsten Carbide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Tolerances:</strong> Micron-level precision
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
                        <strong>Applications:</strong> MEMS, Electronics, Medical
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Products */}
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
                    src={galleryImages[currentMainImage] || defaultSmallDiameterImages[0]}
                    alt="Small Diameter End Mill Product"
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
                  ? galleryImages[imageIndex] || defaultSmallDiameterImages[imageIndex % defaultSmallDiameterImages.length]
                  : defaultSmallDiameterImages[index % defaultSmallDiameterImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Small Diameter End Mill Product ${index + 1}`}
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
                    case "Coating & Surface Technology":
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
                    <span><strong>Electronics Industry:</strong> Precision machining of circuit boards, connectors, and micro-components requiring exceptional dimensional accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Medical Device Manufacturing:</strong> Critical applications for surgical instruments, implants, and micro-medical devices with biocompatible surface requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Watchmaking and Jewelry:</strong> Ultra-fine detail work for precision timepieces and intricate jewelry components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Optics and Photonics:</strong> Manufacturing of lens components, fiber optic connectors, and precision optical assemblies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Research and Development (MEMS/NEMS):</strong> Micro and nano-scale manufacturing for advanced research applications</span>
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
                    <span><strong>Micro-Milling & Fine Detail:</strong> Primary application for creating extremely small features with micron-level precision in miniature components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Engraving & Marking:</strong> High-precision engraving operations for product identification, decorative marking, and micro-text applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Small Slotting & Keyway Cutting:</strong> Creating narrow slots, micro-keyways, and precision grooves in small-scale assemblies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Precision Pocketing:</strong> Micro-pocket milling for complex internal geometries and thin-walled component manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>High Aspect Ratio Features:</strong> Machining deep, narrow features where conventional tools cannot achieve required precision</span>
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
                    <span><strong>Ultra-High-Precision Feature Creation:</strong> Machine extremely small and intricate features with micron-level dimensional accuracy and tight geometric tolerances for advanced manufacturing applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Superior Surface Finish Generation:</strong> Produce excellent, smooth surface quality on miniature parts, often eliminating the need for subsequent finishing operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Micro-Scale Geometry Machining:</strong> Enable fabrication of components with features in the sub-millimeter range, pushing manufacturing technology boundaries</span>
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
                    <span><strong>Minimized Cutting Forces:</strong> Allow precise machining of delicate, fragile, or thin-walled parts without causing distortion, stress, or damage to critical components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Miniaturization Enablement:</strong> Support the ongoing trend towards smaller, lighter, and more complex parts across advanced industries including electronics and medical devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Versatile Micro-Machining:</strong> Perform comprehensive milling operations including slotting, pocketing, profiling, and contouring at micro-scale with exceptional precision</span>
                  </li>
                </ul>
                </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/milling/small-diameter" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Small Diameter End Mill Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our micro-machining specialists can help you select the optimal small diameter end mill configuration for your precision manufacturing requirements. From electronics to medical devices, we provide comprehensive micro-machining solutions with exceptional dimensional accuracy.
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
                // Define all categories in the same milling directory (excluding current page)
                const allMillingCategories = [
                  {
                    title: "Ball End Mills",
                    image: "/images/2F45CRB.png",
                    description: "2-4 flute ball end mills for 3D machining",
                    url: "/standard-tools/milling/ball-end",
                  },
                  {
                    title: "Ball Nose End Mills", 
                    image: "/images/2F45CRB.png",
                    description: "3D contour machining and curved surfaces",
                    url: "/standard-tools/milling/ball-nose",
                  },
                  {
                    title: "Chamfer Cutters",
                    image: "/images/f32-01.png", 
                    description: "Angular cutting tools for chamfering operations",
                    url: "/standard-tools/milling/chamfer",
                  },
                  {
                    title: "Corner Radius End Mills",
                    image: "/images/2F45CR.png",
                    description: "Corner radius end mills for enhanced tool life",
                    url: "/standard-tools/milling/corner-radius",
                  },
                {
                  title: "Deep Ditch End Mills",
                    image: "/images/SG2F60C.png",
                    description: "Deep groove and cavity milling operations",
                  url: "/standard-tools/milling/deep-ditch",
                },
                  {
                    title: "Face Mills",
                    image: "/images/4F45C-TSJ.png",
                    description: "Face milling cutters for flat surface machining",
                    url: "/standard-tools/milling/face-mills",
                  },
                  {
                    title: "Fillet End Mills",
                    image: "/images/2F45CR.png",
                    description: "Corner radius end mills for enhanced strength",
                    url: "/standard-tools/milling/fillet",
                  },
                  {
                    title: "Reamers",
                    image: "/images/AL-2F50C.png",
                    description: "Precision hole finishing reamers",
                    url: "/standard-tools/milling/reamer",
                },
                {
                  title: "Right Angle Flat End Mills",
                    image: "/images/2F45C-JST.png",
                    description: "Flat end mills for precise square cuts",
                  url: "/standard-tools/milling/right-angle-flat",
                },
                {
                    title: "Roughing End Mills",
                    image: "/images/4F45CR.png",
                    description: "High-efficiency rough machining end mills",
                    url: "/standard-tools/milling/roughing",
                  },
                  {
                    title: "Side Milling Cutters",
                    image: "/images/SWST.png",
                    description: "Side face and slotting operations",
                    url: "/standard-tools/milling/side-milling-cutter",
                },
                {
                    title: "T-Slot Cutters", 
                    image: "/images/SWD60.png",
                    description: "T-slot and dovetail groove cutting tools",
                    url: "/standard-tools/milling/t-slot-cutter",
                  },
                  {
                    title: "Taper End Mills",
                    image: "/images/AL-2F60C.png",
                    description: "Tapered end mills for angled surfaces",
                    url: "/standard-tools/milling/taper",
                  },
                  {
                    title: "Thread Mills",
                    image: "/images/AL-2F60C-R.png",
                    description: "Thread milling cutters for internal/external threads",
                    url: "/standard-tools/milling/thread-mills",
                  },
                ];
                
                // Select first 5 categories to avoid hydration mismatch
                const selectedCategories = allMillingCategories.slice(0, 5);
                
                return selectedCategories.map((category, index) => (
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
