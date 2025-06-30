"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function RightAngleFlatEndMillsPage() {
  // Gallery images for rotation - will be loaded from API
  const [galleryImages, setGalleryImages] = useState<string[]>([
    "/images/2F45C-JST.png",
    "/images/4F45C-TSJ.png",
    "/images/2F50C.png",
    "/images/4F50C.png",
    "/images/2F55C.png",
    "/images/4F55C.png",
    "/images/2F60C.png",
    "/images/4F60C.png"
  ]);

  // State for rotating images
  const [currentMainImage, setCurrentMainImage] = useState(0);

  // Load gallery images from API
  const loadGalleryImages = async () => {
    try {
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/right-angle-flat");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        }
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 保持默认图片
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // Load images from API
    loadGalleryImages();
    
    const interval = setInterval(() => {
      setCurrentMainImage((prev) => (prev + 1) % galleryImages.length);
    }, 20000); // 每20秒轮换一次

    return () => clearInterval(interval);
  }, [galleryImages.length]);
  // Product data based on provided content
  const products = [
    {
      id: "2F45C",
      name: "2F Edge HRC45° Tungsten Steel Coated End Milling Cutter",
      series: "2F45C Series",
      image: "/images/2F45C-JST.png",
      description: "2-edge coated tungsten steel end mill for general steel machining",
      specifications: "2-edge, HRC45°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC45°",
      pageNumber: "F03",
    },
    {
      id: "4F45C",
      name: "4F Edge HRC45° Tungsten Steel Coated End Milling Cutter",
      series: "4F45C",
      image: "/images/4F45C-TSJ.png",
      description: "4-edge coated tungsten steel end mill for general steel machining",
      specifications: "4-edge, HRC45°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC45°",
      pageNumber: "F03",
    },
    {
      id: "2F50C",
      name: "2F Edge HRC50° Tungsten Steel Coated End Milling Cutter",
      series: "2F50Cs",
      image: "/images/2F50C.png",
      description: "2-edge coated tungsten steel end mill for medium hardness steel",
      specifications: "2-edge, HRC50°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC50°",
      pageNumber: "F04",
    },
    {
      id: "4F50C",
      name: "4F Edge HRC50° Tungsten Steel Coated End Milling Cutter",
      series: "4F50C",
      image: "/images/4F50C.png",
      description: "4-edge coated tungsten steel end mill for medium hardness steel",
      specifications: "4-edge, HRC50°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC50°",
      pageNumber: "F04",
    },
    {
      id: "2F55C",
      name: "2F Edge HRC55° Tungsten Steel Coated End Milling Cutter",
      series: "2F55C",
      image: "/images/2F55C.png",
      description: "2-edge coated tungsten steel end mill for harder steel machining",
      specifications: "2-edge, HRC55°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC55°",
      pageNumber: "F05",
    },
    {
      id: "4F55C",
      name: "4F Edge HRC55° Tungsten Steel Coated End Milling Cutter",
      series: "4F55C",
      image: "/images/4F55C.png",
      description: "4-edge coated tungsten steel end mill for harder steel machining",
      specifications: "4-edge, HRC55°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC55°",
      pageNumber: "F05",
    },
    {
      id: "2F60C",
      name: "2F Edge HRC60° Tungsten Steel Nano Coated End Milling Cutter",
      series: "2F60C",
      image: "/images/2F60C.png",
      description: "2-edge nano coated tungsten steel end mill for high hardness steel and stainless steel",
      specifications: "2-edge, HRC60°, Nano coated tungsten steel",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      pageNumber: "F06",
    },
    {
      id: "4F60C",
      name: "4F Edge HRC60° Tungsten Steel Nano Coated End Milling Cutter",
      series: "4F60C",
      image: "/images/4F60C.png",
      description: "4-edge nano coated tungsten steel end mill for high hardness steel and stainless steel",
      specifications: "4-edge, HRC60°, Nano coated tungsten steel",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      pageNumber: "F06",
    },
    {
      id: "2F65C",
      name: "2F Edge HRC65° Tungsten Steel Nano Coated End Milling Cutter",
      series: "2F65C",
      image: "/images/2F65C.png",
      description: "2-edge nano coated tungsten steel end mill for extremely hard steel and stainless steel",
      specifications: "2-edge, HRC65°, Nano coated tungsten steel",
      application: "Milling HRC65° steel, quenched steel, mold prehardened steel and stainless steel",
      pageNumber: "F07",
    },
    {
      id: "4F65C",
      name: "4F Edge HRC65° Tungsten Steel Nano Coated End Milling Cutter",
      series: "4F65C",
      image: "/images/4F65C.png",
      description: "4-edge nano coated tungsten steel end mill for extremely hard steel and stainless steel",
      specifications: "4-edge, HRC65°, Nano coated tungsten steel",
      application: "Milling HRC65° steel, quenched steel, mold prehardened steel and stainless steel",
      pageNumber: "F07",
    },
    {
      id: "AL-2F50C",
      name: "2F Edge Tungsten Steel Uncoated End Milling Cutter",
      series: "AL-2F50C",
      image: "/images/AL-2F50C.png",
      description: "2-edge uncoated tungsten steel end mill for non-ferrous metals",
      specifications: "2-edge, Uncoated tungsten steel",
      application: "Milling copper, aluminum and general steel under HRC50°",
      pageNumber: "F08",
    },
    {
      id: "AL-3F50C",
      name: "3F Edge Tungsten Steel Uncoated End Milling Cutter",
      series: "AL-3F50C",
      image: "/images/AL-3F50C.png",
      description: "3-edge uncoated tungsten steel end mill for non-ferrous metals",
      specifications: "3-edge, Uncoated tungsten steel",
      application: "Milling copper, aluminum and non-ferrous metals",
      pageNumber: "F09",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Superior Material Performance",
      description: "Tungsten steel construction with HRC45-65 hardness range featuring 90-degree corners for precise flat surfaces, groove machining, and stepped surface creation across diverse workpiece materials.",
    },
    {
      icon: "Zap", 
      title: "Advanced Coating Technology",
      description: "Nano-coated versions for HRC60° and HRC65° materials provide superior wear resistance, while uncoated variants excel in copper, aluminum, and non-ferrous applications.",
    },
    {
      icon: "Target",
      title: "Versatile Flute Configurations",
      description: "Available in 2-flute, 3-flute, and 4-flute designs optimized for different materials, from softer non-ferrous metals to extremely hard steel and stainless steel.",
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
      title: "Coated Tungsten Steel End Mills",
      description: "Available in HRC45, HRC50, HRC55, HRC60, and HRC65 ratings with nano-coating technology. Designed for steel, cast iron, and stainless steel applications with superior wear resistance and thermal stability. 2-flute and 4-flute configurations optimize chip evacuation and cutting performance.",
    },
    {
      title: "Uncoated Tungsten Steel End Mills",
      description: "Specifically designed for copper, aluminum, and non-ferrous metal applications. Available in 2-flute and 3-flute configurations with polished flutes to prevent built-up edge (BUE) formation and achieve excellent surface finishes in sticky materials.",
    },
    {
      title: "Performance Parameters",
      description: "90-degree corner geometry for precise flat surfaces and sharp corners. Optimized helix angles promote efficient chip evacuation. Enhanced core strength provides stability during deep cutting operations. Advanced geometries ensure consistent dimensional accuracy and surface quality.",
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
                  Right Angle Flat End Mill Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Right Angle Flat End Mill System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  The MZG Right Angle Flat End Mill is characterized by its distinct cutting geometry: a flat end with sharp, 90-degree corners where the end cutting edges meet the peripheral cutting edges. This specialized tool is optimized for plane milling, groove machining, and stepped surface creation. Available in coated variants for HRC45-65° materials and uncoated versions for copper, aluminum, and non-ferrous metals, featuring 2-flute, 3-flute, and 4-flute configurations.
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
                    src={galleryImages[currentMainImage]}
                    alt="MZG Professional Right Angle Flat End Mill System"
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
                      The performance of MZG's <strong>Right Angle Flat End Mills</strong> is systematically optimized to deliver superior results in general and high-precision milling operations, focusing on productivity, surface finish, and tool longevity. These end mills are primarily designed for <strong>plane milling</strong>, efficiently creating flat surfaces with high accuracy.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      MZG offers a highly specialized range tailored to workpiece material hardness, indicated by HRC values. Our <strong>Nano-coated Tungsten Steel End Mills</strong> for HRC60° and HRC65° provide superior wear resistance and thermal stability when machining hardened steels, mold prehardened steel, quenched steel, alloy steel, tool steel, and stainless steel.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      For softer, non-ferrous materials such as copper, aluminum, and their alloys, MZG offers dedicated <strong>uncoated Tungsten Steel End Mills</strong>. These tools are designed with specific geometries that prevent built-up edge (BUE) and promote smooth chip flow, crucial for achieving excellent surface finishes.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Available in 2-flute (for increased chip space and softer materials), 3-flute (for non-ferrous metals), and 4-flute (for higher rigidity and better surface finish in harder materials) configurations, providing optimal performance for specific applications.
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
                        <strong>Hardness Range:</strong> HRC45 to HRC65
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Materials:</strong> Tungsten Steel Construction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> Nano-coated, Uncoated
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Configurations:</strong> 2, 3, 4-flute designs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Geometry:</strong> 90-degree corners, flat end
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
                  <div className="relative w-full bg-white" style={{ height: "176px" }}>
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

          {/* Product Showcase - Compact Grid Layout */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Gallery</h2>
            </div>
            <div className="grid grid-cols-6 grid-rows-4 gap-3 h-[300px]">
              {/* Large center-left image - 主要轮播图 */}
              <div className="col-span-2 row-span-4 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center overflow-hidden group">
                <Image
                  src={galleryImages[currentMainImage]}
                  alt="Product"
                  width={480}
                  height={480}
                  quality={100}
                  priority
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
              
              {/* Middle section - 2 containers spanning full height */}
              <div 
                className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                onClick={() => setCurrentMainImage((currentMainImage + 1) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 1) % galleryImages.length]}
                  alt="Product"
                  width={280}
                  height={280}
                  quality={100}
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
              
              <div 
                className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                onClick={() => setCurrentMainImage((currentMainImage + 2) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 2) % galleryImages.length]}
                  alt="Product"
                  width={280}
                  height={280}
                  quality={100}
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
              
              <div 
                className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                onClick={() => setCurrentMainImage((currentMainImage + 3) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 3) % galleryImages.length]}
                  alt="Product"
                  width={280}
                  height={280}
                  quality={100}
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
              
              <div 
                className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                onClick={() => setCurrentMainImage((currentMainImage + 4) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 4) % galleryImages.length]}
                  alt="Product"
                  width={280}
                  height={280}
                  quality={100}
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
              
              {/* Right section - 4 containers with same height as middle section */}
              <div 
                className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                onClick={() => setCurrentMainImage((currentMainImage + 5) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 5) % galleryImages.length]}
                  alt="Product"
                  width={280}
                  height={280}
                  quality={100}
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
              
              <div 
                className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                onClick={() => setCurrentMainImage((currentMainImage + 6) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 6) % galleryImages.length]}
                  alt="Product"
                  width={280}
                  height={280}
                  quality={100}
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
              <div 
                className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                onClick={() => setCurrentMainImage((currentMainImage + 7) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 7) % galleryImages.length]}
                  alt="Product"
                  width={280}
                  height={280}
                  quality={100}
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
              
              <div 
                className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                onClick={() => setCurrentMainImage((currentMainImage + 8) % galleryImages.length)}
              >
                <Image
                  src={galleryImages[(currentMainImage + 8) % galleryImages.length]}
                  alt="Product"
                  width={280}
                  height={280}
                  quality={100}
                  className="object-contain w-full h-full transition-all duration-500 group-hover:scale-125"
                />
              </div>
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
                    case "Coated Tungsten Steel End Mills":
                      return <Layers className="h-6 w-6 text-blue-600 mr-3" />
                    case "Uncoated Tungsten Steel End Mills":
                      return <Drill className="h-6 w-6 text-green-600 mr-3" />
                    case "Performance Parameters":
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
                    <span><strong>Plane Milling:</strong> Creating flat surfaces with high accuracy and precision</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Groove Machining:</strong> Cutting slots, keyways, and grooves with sharp 90-degree corners</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Stepped Surface Creation:</strong> Machining multi-level features and shoulders</span>
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
                    <span><strong>Material Versatility:</strong> Optimized for HRC45-65 steel and non-ferrous materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Superior Tool Life:</strong> Advanced coating and geometry design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Precision Machining:</strong> Sharp 90-degree corners and flat surfaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSectionEn pageUrl="/standard-tools/milling/right-angle-flat" className="mb-16" />

          {/* Related Categories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(() => {
                // Define all categories in the same milling directory
                const allMillingCategories = [
                  {
                    title: "Deep Ditch End Mills",
                    image: "/images/SG2F60C.png",
                    description: "Deep groove and cavity milling",
                    url: "/standard-tools/milling/deep-ditch",
                  },
                  {
                    title: "Ball End Mills",
                    image: "/images/2F50CR.png",
                    description: "Ball nose end mills for 3D profiling",
                    url: "/standard-tools/milling/ball-end",
                  },
                  {
                    title: "Corner Radius End Mills",
                    image: "/images/2F50CRB.png",
                    description: "Corner radius milling cutters",
                    url: "/standard-tools/milling/corner-radius",
                  },
                  {
                    title: "Roughing End Mills",
                    image: "/images/4FS.png",
                    description: "High material removal rate cutters",
                    url: "/standard-tools/milling/roughing",
                  },
                ];
                
                return allMillingCategories.map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Milling Tools" url={category.url} />
                ));
              })()}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-16 animate-gradient-xy">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Professional Right Angle Flat End Mill Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select optimal right angle flat end mills for specific plane milling, groove machining, and stepped surface applications. From HRC45 general steel to HRC65 hardened materials, we provide comprehensive flat end milling solutions.
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
