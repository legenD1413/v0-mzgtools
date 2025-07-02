"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function TaperEndMillsPage() {
  // Taper End Mills和Reamer相关的默认图片
  const defaultTaperImages = [
    "/images/ZDXD2F45C.png",
    "/images/ZDXD4F55C.png", 
    "/images/ZDXD2F45CR.png",
    "/images/WGZCJD.png",
    "/images/WGLXJD.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/taper");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Taper图片
          setGalleryImages(defaultTaperImages);
        }
      } else {
        // API请求失败，使用默认Taper图片
        setGalleryImages(defaultTaperImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Taper图片
      setGalleryImages(defaultTaperImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Taper图片，避免显示无关图片
    setGalleryImages(defaultTaperImages);
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

  // Product data based on user provided content
  const products = [
    {
      id: "taper-001",
      name: "2 Edge Tungsten Steel Coated Tapers End Milling Cutter",
      image: "/images/ZDXD2F45C.png",
      description: "2-edge tapered cutter for precise tapered holes and inclined surfaces",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "ZDXD2F45C",
      d: "Ø3-10mm",
      taperAngle: "0.5°-10°",
      L: "50-100mm",
      hardness: "HRC45",
      application: "Application: Milling steel with hardness below HRC45°",
      page: "F27",
      url: "/standard-tools/milling/taper/ZDXD2F45C",
    },
    {
      id: "taper-002",
      name: "4 Edge Tungsten Steel Coated Tapers End Milling Cutter",
      image: "/images/ZDXD4F55C.png",
      description: "4-edge tapered cutter for improved stability and surface finish",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "ZDXD4F55C",
      d: "Ø3-10mm",
      taperAngle: "0.5°-10°",
      L: "50-100mm",
      hardness: "HRC55",
      application: "Application: Milling steel with hardness below HRC55°",
      page: "F27",
      url: "/standard-tools/milling/taper/ZDXD4F55C",
    },
    {
      id: "taper-003",
      name: "2 Edge Tungsten Steel Coated Ball Head Tapers End Milling Cutter",
      image: "/images/ZDXD2F45CR.png",
      description: "Ball head taper design for complex 3D contouring and smooth transitions",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "ZDXD2F45CR",
      d: "R0.5-R5",
      taperAngle: "0.5°-10°",
      L: "50-100mm",
      hardness: "HRC45",
      application: "Application: Complex 3D contouring and mold cavity machining",
      page: "F28",
      url: "/standard-tools/milling/taper/ZDXD2F45CR",
    },
    
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

  // Performance features
  const performanceFeatures = [
    {
      icon: "Target",
      title: "Precision Tapered Geometry",
      description: "Tapered cutting edges that gradually narrow along the axial direction, designed for machining tapered holes, inclined surfaces, and draft angles in molds with exceptional accuracy.",
    },
    {
      icon: "Shield", 
      title: "Advanced Coating Technology",
      description: "Premium tungsten steel construction with advanced coating options providing enhanced wear resistance, thermal protection, and extended tool life for steel machining applications.",
    },
    {
      icon: "Zap",
      title: "Versatile Design Options",
      description: "Comprehensive range including 2-edge, 4-edge, ball head tapers, and precision reamers to meet diverse machining requirements from complex contouring to high-precision hole finishing.",
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
      title: "Taper End Mill Technology",
      description: "Advanced tapered cutting edge design with angles ranging from 0.5° to 10°. Available in 2-edge and 4-edge configurations, plus ball head variants for complex 3D contouring. Optimized for steel machining from HRC45° to HRC55° hardness levels.",
    },
    {
      title: "Reamer Precision Engineering",
      description: "Multi-fluted cutting tools designed for precision hole finishing with 55° edge geometry. Available in straight-edged for general through-holes and spiral-edged for enhanced chip evacuation in blind holes and interrupted cuts.",
    },
    {
      title: "Material & Coating Systems",
      description: "Premium tungsten steel construction with optional advanced coating technology. Specialized aluminum versions available for non-ferrous materials. Coating options enhance surface hardness, lubricity, and thermal barrier protection.",
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
                  Taper End Mill & Reamer Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Taper End Mill & Reamer System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  **Taper End Mills** are a type of milling cutter characterized by their **tapered cutting edges**, which gradually narrow along the axial direction. They are primarily used for machining **tapered holes, inclined surfaces, or draft angles in molds**. **Reamers** are **multi-fluted cutting tools** primarily used for the **precision finishing of holes** to improve dimensional accuracy and surface finish.
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
                    src="/images/millingcutter1.png"
                    alt="MZG Professional Taper End Mill & Reamer System"
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
                    <h4 className="text-lg font-bold mb-3 text-gray-900">Taper End Mill Performance</h4>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The **2 Edge Tungsten Steel Coated Tapers End Milling Cutter** features 2 edges made of tungsten steel with coating, designed for **milling steel with hardness below HRC45°**. Available with taper angles from 0.5° to 10°, these cutters are primarily used for **machining tapered holes and inclined surfaces** in various steel components.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The **4 Edge Tungsten Steel Coated Tapers End Milling Cutter** features 4 edges for improved stability and surface finish, optimized for **milling steel with hardness below HRC55°**. The higher number of flutes provides superior surface finish and enhanced machining stability in demanding applications.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Our **2 Edge Tungsten Steel Coated Ball Head Tapers End Milling Cutter** combines a ball nose with a tapered body, featuring ball radius from R0.5 to R5. This tool is particularly useful for **complex 3D contouring** and **mold cavity machining**, providing smooth, rounded transitions and precise geometric features.
                    </p>
                    <h4 className="text-lg font-bold mb-3 mt-4 text-gray-900">Reamer Precision Technology</h4>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The **55° Straight-Edged Tungsten Steel Reamer** provides **general-purpose high-precision finishing of through-holes** with 4-6 teeth configuration. Available in both coated and uncoated versions, with specialized aluminum variants for non-ferrous materials.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The **55° Spiral-Edged Tungsten Steel Reamer** features spiral-shaped cutting edges ideal for **finishing blind holes and interrupted cuts**. The spiral design aids in **chip evacuation** and provides smoother cutting action, reducing chatter and improving hole straightness.
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
                      <span className="text-sm"><strong>Material:</strong> Premium Tungsten Steel</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Taper Range:</strong> 0.5° to 10° angles</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Hardness Range:</strong> HRC45° to HRC55°</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Reamer Precision:</strong> 55° edge geometry</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Coating:</strong> Advanced coating options available</span>
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
                    src={galleryImages[currentMainImage] || defaultTaperImages[0]}
                    alt="Taper End Mill & Reamer Product"
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
                  ? galleryImages[imageIndex] || defaultTaperImages[imageIndex % defaultTaperImages.length]
                  : defaultTaperImages[index % defaultTaperImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Taper End Mill & Reamer Product ${index + 1}`}
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
                    case "Taper End Mill Technology":
                      return <Layers className="h-6 w-6 text-blue-600 mr-3" />
                    case "Reamer Precision Engineering":
                      return <Shield className="h-6 w-6 text-green-600 mr-3" />
                    case "Material & Coating Systems":
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
                    <span><strong>Tapered Hole Machining:</strong> Primary application for creating precise tapered holes and inclined surfaces in steel components with angles from 0.5° to 10°</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Mold Draft Angles:</strong> Essential for mold making applications requiring precise draft angles for part release and material flow optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Complex 3D Contouring:</strong> Ball head variants enable intricate mold cavity machining with smooth rounded transitions and precise geometric features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Precision Hole Finishing:</strong> Reamer applications for high-precision finishing of pre-drilled holes to achieve superior dimensional accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Blind Hole Processing:</strong> Spiral-edged reamers ideal for blind holes and interrupted cuts with enhanced chip evacuation capabilities</span>
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
                    <span><strong>Tapered Surface Creation:</strong> Precision machining of tapered surfaces and angled walls for specialized mechanical applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Draft Angle Machining:</strong> Essential for mold and die manufacturing requiring precise angular features for component release</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>High-Precision Reaming:</strong> Multi-fluted finishing operations for dimensional accuracy and superior surface finish in pre-existing holes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Chip Evacuation Optimization:</strong> Spiral-edged designs provide enhanced chip removal and reduced cutting forces for improved tool life</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Complex Geometry Processing:</strong> Ball head variants enable simultaneous tapered surfaces and curved transitions in single operations</span>
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
                  Taper End Mill Functions
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Precise Tapered Forms:</strong> Create accurate tapered holes, inclined surfaces, and draft angles essential for mold making and specialized components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Complex 3D Contouring:</strong> Ball head variants enable smooth transitions and intricate surface finishing for demanding applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Enhanced Stability:</strong> 4-edge configurations provide improved machining stability and superior surface finish in challenging materials</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-2" />
                  Reamer Functions
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Precision Hole Finishing:</strong> Improve dimensional accuracy and surface finish of pre-drilled holes to tight tolerances</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Enhanced Chip Evacuation:</strong> Spiral-edged designs provide superior chip removal and reduced chatter in blind holes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Material Versatility:</strong> Specialized coated and uncoated versions for steel and aluminum applications up to 55HRC hardness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/milling/taper" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Taper Milling & Reaming Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our technical team can help you select optimal taper end mills and precision reamers for specific applications. From tapered hole machining and draft angle creation to high-precision hole finishing, we provide comprehensive solutions for complex geometries and demanding accuracy requirements.
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
                    title: "Ball End Mills",
                    image: "/images/2F45CRB.png",
                    description: "3D contouring and curved surface machining",
                    url: "/standard-tools/milling/ball-end",
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
                    description: "Corner radius milling for enhanced strength",
                    url: "/standard-tools/milling/fillet",
                  },
                  {
                    title: "Rough End Mills",
                    image: "/images/4FS.png",
                    description: "High material removal rate cutters",
                    url: "/standard-tools/milling/rough",
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

