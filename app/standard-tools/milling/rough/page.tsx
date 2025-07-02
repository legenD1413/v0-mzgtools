"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function RoughMillingCuttersPage() {
  // Rough Milling Cutters相关的默认图片
  const defaultRoughImages = [
    "/images/AL-CP4F55C.png",
    "/images/4FSU.png", 
    "/images/CP4F55C.png",
    "/images/4FSI.png",
    "/images/2FS.png",
    "/images/4FS.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/rough");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Rough图片
          setGalleryImages(defaultRoughImages);
        }
      } else {
        // API请求失败，使用默认Rough图片
        setGalleryImages(defaultRoughImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Rough图片
      setGalleryImages(defaultRoughImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Rough图片，避免显示无关图片
    setGalleryImages(defaultRoughImages);
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
      id: "rough-009",
      name: "3 Edge Tungsten Steel Uncoated Rough Machining End Milling Cutter",
      image: "/images/AL-CP4F55C.png",
      description: "Uncoated design optimized for nonferrous materials",
      flutes: 4,
      material: "Tungsten Carbide",
      coating: "Uncoated",
      series: "AL-CP4F55C",
      d: "4-20mm",
      H: "12-55mm",
      L: "50-100mm",
      D: "4-20mm",
      hardness: "HRC55",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F25",
      url: "/standard-tools/milling/rough/AL-CP4F55C",
    },
    {
      id: "rough-010",
      name: "Milling cutter for rough machining of high speed steel",
      image: "/images/4FSU.png",
      description: "High speed steel rough milling cutter for general machining",
      flutes: 4,
      material: "High Speed Steel",
      coating: "",
      series: "4FSU",
      d: "6-25mm",
      H: "20-50mm",
      L: "60-120mm",
      D: "6-25mm",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F25",
      url: "/standard-tools/milling/rough/4FSU",
    },
    {
      id: "rough-011",
      name: "4 Edge Tungsten Steel Coated Rough Machining End Milling Cutter",
      image: "/images/CP4F55C.png",
      description: "Coated design for enhanced performance in stainless steel",
      flutes: 4,
      material: "Tungsten Carbide",
      coating: "Coated",
      series: "CP4F55C",
      d: "4-20mm",
      H: "12-55mm",
      L: "50-100mm",
      D: "4-20mm",
      hardness: "HRC55",
      application: "Application: Milling Stainless Steel And Steel Hardness Under HRC55°",
      page: "F25",
      url: "/standard-tools/milling/rough/CP4F55C",
    },
    {
      id: "rough-012",
      name: "4 Edge High Speed Steel Vertical Milling Cutter Made By Holistic Grinding-Inch",
      image: "/images/4FSI.png",
      description: "Holistic grinding HSS vertical milling cutter in inch sizes",
      flutes: 4,
      material: "High Speed Steel",
      coating: "",
      series: "4FSI",
      d: '1/4"-1"',
      H: '3/16"-4"',
      L: '2"-6-1/2"',
      D: 'Ø1/16"-Ø1"',
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F25",
      url: "/standard-tools/milling/rough/4FSI",
    },
    {
      id: "rough-013",
      name: "2 Edge High Speed Steel Vertical Milling Cutter Made By Holistic Grinding",
      image: "/images/2FS.png",
      description: "2-flute HSS vertical milling cutter with holistic grinding precision",
      flutes: 2,
      material: "High Speed Steel",
      coating: "",
      series: "2FS",
      d: "6-20mm",
      H: "2.5-90mm",
      L: "50-165mm",
      D: "1-25mm",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F26",
      url: "/standard-tools/milling/rough/2FS",
    },
    {
      id: "rough-014",
      name: "4 Edge High Speed Steel Vertical Milling Cutter Made By Holistic Grinding",
      image: "/images/4FS.png",
      description: "4-flute HSS vertical milling cutter with holistic grinding precision",
      flutes: 4,
      material: "High Speed Steel",
      coating: "",
      series: "4FS",
      d: "6-20mm",
      H: "2.5-90mm",
      L: "50-165mm",
      D: "1-25mm",
      application: "Application: Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      page: "F26",
      url: "/standard-tools/milling/rough/4FS",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Zap",
      title: "Maximum Material Removal",
      description: "Chipbreaker geometry and coarse pitch design enable aggressive material removal rates while maintaining tool stability and reducing cutting forces.",
    },
    {
      icon: "Layers", 
      title: "Superior Chip Management",
      description: "Serrated cutting edges and chipbreaker grooves break chips into manageable segments, preventing chip clogging and enabling efficient evacuation.",
    },
    {
      icon: "Shield",
      title: "Enhanced Tool Life",
      description: "Premium tungsten carbide construction with advanced coatings provides exceptional wear resistance and thermal stability in demanding applications.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Zap":
        return <Zap className="h-8 w-8 text-red-600" />
      case "Layers":
        return <Layers className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Material & Construction",
      description: "Available in both Tungsten Steel (solid carbide) and High Speed Steel construction. Tungsten Steel provides exceptional hardness, compressive strength, and hot hardness retention for demanding applications. High Speed Steel offers good toughness and cost-effectiveness for general machining operations.",
    },
    {
      title: "Coating & Surface Treatment",
      description: "Advanced coating options include nano coatings for tungsten steel versions, providing increased surface hardness, enhanced lubricity, and thermal barrier protection. Uncoated versions available for aluminum and copper machining to prevent coating reactions.",
    },
    {
      title: "Dimensional Parameters",
      description: "Key specifications include d (Cutting Diameter), H (Flute Length), L (Overall Length), and D (Shank Diameter). Available in both metric and inch specifications. Standard flute configurations from 2-flute to 4-flute designs for different applications.",
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
                  Rough Milling Cutter Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Rough Milling Cutter System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  **Rough Milling Cutter** (also known as Roughing End Mill) is a type of milling cutter designed for **high-efficiency material removal with large allowances**. They are primarily used for preliminary cutting in machining processes to quickly remove the majority of material, preparing the workpiece for subsequent finishing operations. The cutting edges of rough milling cutters often feature special designs to facilitate chip breaking and evacuation.
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
                    alt="MZG Professional Rough Milling Cutter System"
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
                      Rough milling cutters are categorized based on their material, number of edges, and coating status. These tools are specifically designed for **high-efficiency material removal with large allowances** and are primarily used for preliminary cutting in machining processes to quickly remove the majority of material, preparing the workpiece for subsequent finishing operations.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The **3 Edge Tungsten Steel Uncoated Rough Machining End Milling Cutter** is made of tungsten steel and features 3 cutting edges without any coating. It is designed for milling steel and nonferrous metal materials, such as copper and aluminum. The uncoated design is typically suitable for these materials to avoid coating reactions with aluminum or affecting surface finish.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Our **High Speed Steel (HSS)** milling cutters provide good toughness, making them perform well in machining softer materials or in applications requiring higher impact resistance. The **4 Edge Tungsten Steel Coated** versions feature nano coating that significantly enhances the tool's hardness, wear resistance, and heat resistance, allowing them to handle harder and more abrasive materials effectively.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The cutting edge geometry is specifically designed to facilitate **large allowance cutting** to quickly remove excess material from workpieces at the initial stage of machining, setting the foundation for subsequent finishing operations with **efficient rough machining of steel, copper, and aluminum parts**.
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
                      <span className="text-sm"><strong>Material:</strong> Tungsten Steel & High Speed Steel</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Flute Options:</strong> 2-flute & 4-flute configurations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Diameter Range:</strong> Ø1mm to Ø25mm</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Hardness Range:</strong> Up to HRC55°</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Coating:</strong> Nano coating & Uncoated options</span>
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
                    src={galleryImages[currentMainImage] || defaultRoughImages[0]}
                    alt="Rough Milling Cutter Product"
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
                  ? galleryImages[imageIndex] || defaultRoughImages[imageIndex % defaultRoughImages.length]
                  : defaultRoughImages[index % defaultRoughImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Rough Milling Cutter Product ${index + 1}`}
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
                    case "Coating & Surface Treatment":
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
                    <span><strong>Large Allowance Cutting:</strong> Primary application for quickly removing excess material from workpieces at initial machining stages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Steel & Stainless Steel Machining:</strong> Optimized for steel hardness under HRC55° and stainless steel processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Nonferrous Metal Processing:</strong> Excellent performance when machining copper, aluminum, and their alloys</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Heavy-Duty Rough Machining:</strong> Capable of withstanding significant cutting loads for rapid material removal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Preparation for Finishing:</strong> Setting foundation for subsequent finishing operations with consistent material removal</span>
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
                    <span><strong>Rough Machining:</strong> Efficient high-feed rough cutting for rapid removal of large quantities of workpiece material</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Surface Milling:</strong> General milling operations for creating flat surfaces and removing material efficiently</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Slotting Operations:</strong> Creating slots and grooves with efficient material removal rates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Profile Milling:</strong> Contouring operations with stable cutting performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Heavy Material Removal:</strong> Aggressive cutting with enhanced tool life through superior design</span>
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
                    <span><strong>Enhanced Tool Strength:</strong> Superior design distributes cutting forces evenly for increased tool durability and performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Efficient Material Removal:</strong> Optimized geometry for maximum material removal rates in preliminary cutting operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Versatile Material Processing:</strong> Suitable for processing various materials from soft aluminum to hardened steel up to HRC55°</span>
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
                    <span><strong>Material Versatility:</strong> Optimized for steel, stainless steel, copper, aluminum and their alloys across different hardness ranges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Advanced Construction:</strong> Available in both tungsten steel and high speed steel with coating options for enhanced performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Economic Efficiency:</strong> Cost-effective solution for rapid material removal with excellent tool life and reliability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/milling/rough" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Rough Milling Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our technical team can help you select optimal rough milling cutters for specific high-efficiency material removal, large allowance cutting, and preliminary machining applications. From steel and stainless steel to aluminum and copper alloys, we provide comprehensive rough machining solutions.
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
                    title: "Corner Radius End Mills",
                    image: "/images/4F45CR.png",
                    description: "Enhanced corner strength and finish",
                    url: "/standard-tools/milling/corner-radius",
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
