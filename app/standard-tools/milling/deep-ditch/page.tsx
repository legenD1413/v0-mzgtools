"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function DeepDitchPage() {
  // Gallery images for rotation - will be loaded from API
  const [galleryImages, setGalleryImages] = useState<string[]>([
    "/images/AL-SG2F60C.png",
    "/images/SG2F60C.png",
    "/images/AL-SG2F60C-R.png",
    "/images/SG2F60C-R.png",
    "/images/2F60C.png",
    "/images/2F60C-R.png",
    "/images/2F60CRB.png",
    "/images/2F60CS.png"
  ]);

  // State for rotating images
  const [currentMainImage, setCurrentMainImage] = useState(0);

  // Load gallery images from API
  const loadGalleryImages = async () => {
    try {
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/deep-ditch");
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
      id: "AL-SG2F60C",
      name: "2 Edge Tungsten Steel Uncoated Deep Ditch End Milling Cutter",
      series: "AL-SG2F60C", 
      image: "/images/AL-SG2F60C.png",
      description: "Tungsten steel 2-edge uncoated deep ditch end mill for precision machining",
      specifications: "2-edge, Uncoated tungsten steel",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      pageNumber: "F11",
    },
    {
      id: "SG2F60C",
      name: "2 Edge Tungsten Steel Coated Deep Ditch End Milling Cutter",
      series: "SG2F60C",
      image: "/images/SG2F60C.png",
      description: "Tungsten steel 2-edge coated deep ditch end mill for high-performance machining",
      specifications: "2-edge, Coated tungsten steel",
      application: "Milling HRC60 ° steel, cast iron and stainless steel",
      pageNumber: "F11",
    },
    {
      id: "AL-SG2F60C-R",
      name: "2 Edge Tungsten Steel Uncoated Deep Ditch Ball Head End Milling Cutter",
      series: "AL-SG2F60C-R",
      image: "/images/AL-SG2F60C-R.png",
      description: "Tungsten steel 2-edge uncoated ball head deep ditch end mill for contour machining",
      specifications: "2-edge, Ball head, Uncoated tungsten steel",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      pageNumber: "F12",
    },
    {
      id: "SG2F60C-R",
      name: "2 Edge Tungsten Steel Coated Deep Ditch Ball Head End Milling Cutter",
      series: "SG2F60C-R",
      image: "/images/SG2F60C-R.png",
      description: "Tungsten steel 2-edge coated ball head deep ditch end mill for advanced machining",
      specifications: "2-edge, Ball head, Coated tungsten steel",
      application: "Milling HRC60 ° steel, cast iron and stainless steel",
      pageNumber: "F12",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Deep Cutting Excellence",
      description: "Specialized design for deep grooves, slots, and cavities with extended flute length and optimized helix angles for superior chip evacuation and stability.",
    },
    {
      icon: "Zap", 
      title: "Advanced Geometries",
      description: "Available in flat bottom and ball head configurations with 2-flute and 4-flute options, uncoated and nano-coated variants for different material applications.",
    },
    {
      icon: "Target",
      title: "Precision Performance",
      description: "Diameter range from Ø0.5mm to Ø4mm with deep ditch lengths up to 35mm, suitable for materials from aluminum to HRC60° hardened steel.",
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
      title: "Deep Ditch Flat Bottom End Mills",
      description: "Characterized by extended flute length and often specialized helix angle and core design. Available in uncoated tungsten steel for steel and nonferrous metals (copper, aluminum), and nano-coated versions for HRC60° steel, cast iron, and stainless steel. Diameter range from Ø0.5mm to Ø4mm with flute lengths from 0.8mm to 35mm for deep cavity machining.",
    },
    {
      title: "Deep Ditch Ball Head End Mills",
      description: "Ball head design with tungsten steel construction and two cutting edges. Uncoated versions suitable for steel and nonferrous metals, nano-coated variants designed for HRC60° steel, cast iron, and stainless steel. Available radii from R0.25 to R2 with extended flute lengths up to 35mm for complex contour machining in deep cavities.",
    },
    {
      title: "Performance Parameters",
      description: "Optimized flute design with wider chip gullets and specific helix angles (typically 45-55 degrees) promote upward chip flow. Enhanced rigidity through larger core diameter relative to cutting diameter. Advanced coatings like AlTiN or TiAlN provide superior hardness, heat resistance, and lubricity for extended tool life in demanding deep cutting applications.",
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
                  Deep Ditch End Milling Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Deep Ditch End Milling Cutter System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  The Deep Ditch End Milling Cutter is a specialized cutting tool engineered for efficient and precise machining of deep grooves, slots, and cavities. Characterized by its extended flute length and optimized helix angle and core design, these cutters overcome challenges associated with deep machining including chip accumulation, heat buildup, and deflection. Available in flat bottom and ball head configurations with uncoated and nano-coated variants for materials from aluminum to HRC60° hardened steel.
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
                    alt="MZG Professional Deep Ditch End Milling Cutter System"
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
                      The performance of a <strong>Deep Ditch End Milling Cutter</strong> is primarily driven by its ability to maintain cutting efficiency and dimensional accuracy in deep recesses. It exhibits excellent chip evacuation capabilities due to its optimized flute design, often featuring wider chip gullets and a specific helix angle that promotes upward chip flow. This minimizes chip re-cutting and packing, which are common issues in deep slotting and can lead to tool breakage or surface finish degradation.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      These cutters are engineered for enhanced rigidity and stability, often employing a larger core diameter relative to their cutting diameter or through-tool coolant channels to withstand higher cutting forces and minimize deflection over extended reaches. The cutting edges are typically sharpened to maintain sharp cutting capabilities over long cutting depths, ensuring smooth, precise cuts and preventing excessive burr formation.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Many Deep Ditch End Milling Cutters incorporate advanced coatings like <strong>AlTiN (Aluminum Titanium Nitride)</strong> or <strong>TiAlN (Titanium Aluminum Nitride)</strong> which provide superior hardness, heat resistance, and lubricity, significantly extending tool life, especially when machining tough or abrasive materials. The deep ditch characteristic refers to their design with a long neck and extended flute length, allowing them to reach and mill deep features or slots in a workpiece.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Available in both <strong>flat bottom</strong> and <strong>ball head</strong> configurations, these tools feature tungsten steel construction with two cutting edges. Uncoated versions are designed for milling steel and nonferrous metal materials such as copper and aluminum, while nano-coated versions are specifically applied for milling HRC60° steel, cast iron, and stainless steel.
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
                        <strong>Diameter Range:</strong> Ø0.5mm to Ø4mm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Flute Length:</strong> 0.8mm to 35mm (deep ditch)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Materials:</strong> Tungsten Steel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> Uncoated, Nano-coated
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Configurations:</strong> Flat bottom, Ball head
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
              {technicalSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{spec.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Product Categories */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Deep Ditch End Milling Systems</h2>
            </div>

            {/* Flat Bottom Deep Ditch End Mills */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Deep Ditch Flat Bottom End Mills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Tool className="h-6 w-6 text-blue-600 mr-3" />
                    Uncoated Tungsten Steel
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tungsten steel construction with two cutting edges, specifically designed for milling steel and nonferrous metal materials such as copper and aluminum. These tools feature optimized chip evacuation and excellent dimensional stability.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Diameter range: Ø0.5mm to Ø4mm</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Flute length: 0.8mm to 35mm (deep ditch)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Optimized for steel and nonferrous metals</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Layers className="h-6 w-6 text-green-600 mr-3" />
                    Nano-Coated Tungsten Steel
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Advanced nano-coating technology applied to tungsten steel construction, specifically designed for milling HRC60° steel, cast iron, and stainless steel. Superior wear resistance and extended tool life.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Suitable for materials up to HRC60°</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Enhanced heat resistance and lubricity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Extended tool life in difficult materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ball Head Deep Ditch End Mills */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Deep Ditch Ball Head End Mills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <CircleDot className="h-6 w-6 text-purple-600 mr-3" />
                    Uncoated Ball Head Design
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ball head configuration with tungsten steel construction and two cutting edges. Designed for complex contour machining in steel and nonferrous metal materials like copper and aluminum.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Ball radius range: R0.25 to R2</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Extended flute length up to 35mm</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Ideal for complex contour machining</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Target className="h-6 w-6 text-orange-600 mr-3" />
                    Nano-Coated Ball Head
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Advanced nano-coated ball head design suitable for milling HRC60° steel, cast iron, and stainless steel. Provides superior surface finish and dimensional accuracy in deep cavities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Superior performance in hard materials</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Excellent surface finish capability</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Deep cavity profiling expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Scenarios */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Application Scenarios</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Mold & Die Manufacturing</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Creating deep cavities, cooling channels, or ejector pin slots in molds with precise dimensional control and superior surface finish.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Aerospace Industry</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Machining deep pockets and precise slots in high-strength alloys for aircraft components requiring tight tolerances.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Automotive Industry</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Producing deep grooves for seals, fluid lines, or component assembly in engine blocks and transmission cases.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Medical Device Manufacturing</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Crafting intricate, deep features in surgical instruments or implantable devices with biocompatible materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Applied Machining Operations */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Applied Machining Operations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Deep Slotting</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Creating long, deep channels or grooves in a single pass or with minimal step-downs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Optimized chip evacuation prevents re-cutting and tool damage</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Deep Pocketing</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Machining deep cavities with defined perimeters and precise dimensional control</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Enhanced stability minimizes deflection over extended reaches</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Deep Profiling</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Following complex contours at significant depths with ball head configurations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span>Superior surface finish and dimensional accuracy in deep features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Functions */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Main Functions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Primary Functions</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Efficient Deep Chip Evacuation:</strong> Designed to effectively remove chips from deep cutting zones</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Enhanced Stability and Rigidity:</strong> Minimizes deflection and vibration during long-reach machining</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Extended Reach Capability:</strong> Single-pass deep slotting or high-Z-depth pocketing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Performance Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Improved Surface Finish:</strong> Stable cutting and efficient chip flow produce smoother surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Reduced Tool Wear:</strong> Advanced geometries and coatings extend operational periods</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span><strong>Precision Machining:</strong> Tight tolerances maintained over deep lengths</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/milling/deep-ditch" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Deep Ditch Milling Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our technical team can help you select optimal deep ditch end mills for specific deep machining applications, materials, and precision requirements. From micro-diameter deep slotting to heavy-duty deep pocketing, we provide comprehensive deep machining solutions.
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
                    image: "/images/2F50C.png",
                    description: "Ball nose end mills for 3D profiling",
                    url: "/standard-tools/milling/ball-end",
                  },
                  {
                    title: "End Mills",
                    image: "/images/4F55C.png",
                    description: "Standard end milling cutters",
                    url: "/standard-tools/milling/end-mills",
                  },
                  {
                    title: "Roughing End Mills",
                    image: "/images/4FS.png",
                    description: "High material removal rate cutters",
                    url: "/standard-tools/milling/roughing",
                  },
                  {
                    title: "Corner Radius End Mills",
                    image: "/images/AL-CP4F55C.png",
                    description: "Corner radius milling cutters",
                    url: "/standard-tools/milling/corner-radius",
                  },
                  {
                    title: "Right Angle Flat End Mills",
                    image: "/images/2F45C-JST.png",
                    description: "Flat end mills for precise surfaces",
                    url: "/standard-tools/milling/right-angle-flat",
                  },
                ];
                
                return allMillingCategories.slice(0, 5).map((category, index) => (
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