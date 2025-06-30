"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function BallEndMillsPage() {
  // Ball End Mills相关的默认图片 - 避免显示不相关产品
  const defaultBallEndImages = [
    "/images/2F45CRB.png",
    "/images/2F50CRB.png", 
    "/images/2F55CRB.png",
    "/images/AL-2F50CRB.png",
    "/images/2F60CRB.png",
    "/images/2F65CRB.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/ball-end");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Ball End图片
          setGalleryImages(defaultBallEndImages);
        }
      } else {
        // API请求失败，使用默认Ball End图片
        setGalleryImages(defaultBallEndImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Ball End图片
      setGalleryImages(defaultBallEndImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Ball End图片，避免显示无关图片
    setGalleryImages(defaultBallEndImages);
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

  // Product data based on provided content
  const products = [
    {
      id: "2F45CRB",
      name: "2F Edge HRC45° Tungsten Steel Coated Ball End Milling Cutter",
      series: "2F45CRB Series",
      image: "/images/2F45CRB.png",
      description: "2-edge coated tungsten steel ball end mill for steel machining up to HRC45°",
      specifications: "2-edge, HRC45°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC45°",
      pageNumber: "F21",
    },
    {
      id: "2F50CRB",
      name: "2F Edge HRC50° Tungsten Steel Coated Ball End Milling Cutter",
      series: "2F50CRB",
      image: "/images/2F50CRB.png",
      description: "2-edge coated tungsten steel ball end mill for steel machining up to HRC50°",
      specifications: "2-edge, HRC50°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC50°",
      pageNumber: "F21",
    },
    {
      id: "2F55CRB",
      name: "2F Edge HRC55° Tungsten Steel Coated Ball End Milling Cutter",
      series: "2F55CRB",
      image: "/images/2F55CRB.png",
      description: "2-edge coated tungsten steel ball end mill for steel machining up to HRC55°",
      specifications: "2-edge, HRC55°, Coated tungsten steel",
      application: "Milling the steel hardness under HRC55°",
      pageNumber: "F22",
    },
    {
      id: "AL-2F50CRB",
      name: "2F Edge Tungsten Steel Uncoated Ball End Milling Cutter",
      series: "AL-2F50CRB",
      image: "/images/AL-2F50CRB.png",
      description: "2-edge uncoated tungsten steel ball end mill for steel and nonferrous metals",
      specifications: "2-edge, Uncoated tungsten steel",
      application: "Milling Steel And Nonferrous Metal Materials Such As Copper And Aluminum",
      pageNumber: "F22",
    },
    {
      id: "2F60CRB",
      name: "2F Edge HRC60° Tungsten Steel Nano Coated Ball End Milling Cutter",
      series: "2F60CRB",
      image: "/images/2F60CRB.png",
      description: "2-edge nano coated tungsten steel ball end mill for stainless steel and hardened steel",
      specifications: "2-edge, HRC60°, Nano coated tungsten steel",
      application: "Milling HRC60° steel, cast iron and stainless steel",
      pageNumber: "F23",
    },
    {
      id: "2F65CRB",
      name: "2F Edge HRC65° Tungsten Steel Nano Coated Ball End Milling Cutter",
      series: "2F65CRB",
      image: "/images/2F65CRB.png",
      description: "2-edge nano coated tungsten steel ball end mill for extreme hardness materials",
      specifications: "2-edge, HRC65°, Nano coated tungsten steel",
      application: "Milling HRC65° steel, quenched steel, mold prehardened steel and stainless steel",
      pageNumber: "F23",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Superior 3D Contouring Performance",
      description: "Spherical cutting end enables continuous contact with curved surfaces, achieving precise three-dimensional contours and exceptionally smooth finishes in complex geometries like mold making and artistic sculpting.",
    },
    {
      icon: "Zap", 
      title: "Advanced Material Optimization",
      description: "Tungsten steel construction with HRC45-65 hardness ratings and nano-coating technology for enhanced durability, with specialized uncoated variants for copper, aluminum, and non-ferrous applications.",
    },
    {
      icon: "Target",
      title: "Precision Radius Machining",
      description: "Critical radius parameter ranging from R0.15 to R10+ enables precise circular arc grooves, filleting operations, and smooth profile finishing with consistent dimensional accuracy.",
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
      description: "Predominantly Tungsten Steel construction for superior hardness and wear resistance. Available in 2-flute configurations providing ample chip space, ideal for profiling and softer materials. Nano coating or specialized coatings enhance hardness, wear resistance, and heat resistance for harder steels and stainless steel applications.",
    },
    {
      title: "Hardness & Coating Options",
      description: "Applicable material hardness ranges from HRC45° to HRC65° with corresponding coating options. Coated versions feature Nano Coating for enhanced performance, while uncoated variants are optimized for copper, aluminum, and non-ferrous metals with polished flutes to prevent built-up edge formation.",
    },
    {
      title: "Dimensional Parameters",
      description: "Key dimensions include R (Radius) from R0.15 to R10+, d (Cutting Diameter), H (Flute Length), L (Overall Length), and D (Shank Diameter). Product naming conventions incorporate HRC level, flute count, coating designation, and specific radius for precise tool identification.",
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
                  Ball End Mill Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Ball End Mill System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  The MZG Ball End Mill is a specialized cutting tool engineered for intricate three-dimensional machining. Distinguished by its spherical cutting end, this tool is an indispensable component within our diverse milling cutter portfolio, specifically designed to tackle complex geometries that flat and other end mills cannot. Its unique form factor permits continuous contact with curved surfaces, making it the premier choice for achieving precise contours and exceptionally smooth finishes in demanding applications such as mold making, artistic sculpting, and aerospace component fabrication.
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
                    alt="MZG Professional Ball End Mill System"
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
                      The performance of MZG Ball End Mills is meticulously optimized for precision, surface quality, and efficiency in complex contouring operations, offering tailored solutions for a wide range of materials and hardness levels. The defining feature of the Ball End Mill is its <strong>spherical tip</strong>, which enables it to machine complex ungenerable surfaces, making it ideal for operations like curved surface machining and 3D contour machining.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Unlike flat end mills that leave cusp marks on contoured surfaces, the ball end mill's geometry results in a naturally smoother finish, significantly reducing or eliminating the need for subsequent finishing operations. It is also highly effective for creating <strong>circular arc grooves</strong>, ensuring consistent radius profiling with exceptional dimensional accuracy.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      MZG manufactures Ball End Mills primarily from <strong>Tungsten Steel</strong>, a material renowned for its high hardness, wear resistance, and ability to withstand elevated cutting temperatures. The performance is further stratified by specific HRC ratings, allowing users to precisely select a tool optimized for the workpiece material's hardness, from HRC45° general applications to HRC65° hardened steel and stainless steel machining.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The application of <strong>Nano Coating</strong> on many of our Tungsten Steel Ball End Mills represents a significant performance enhancement, providing extended tool life, higher cutting speeds and feeds, improved chip evacuation, and enhanced surface finish quality. For materials like copper, aluminum, and other non-ferrous metals, MZG offers dedicated uncoated Ball End Mills with specific geometries optimized for these applications.
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
                      <span className="text-sm"><strong>Geometry:</strong> Spherical cutting end (R = D/2)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Material:</strong> Tungsten Steel construction</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Flutes:</strong> Commonly 2-flute design</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Hardness Range:</strong> HRC45° to HRC65°</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Radius Range:</strong> R0.15 to R10+</span>
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
                    src={galleryImages[currentMainImage] || defaultBallEndImages[0]}
                    alt="Ball End Mill Product"
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
                  ? galleryImages[imageIndex] || defaultBallEndImages[imageIndex % defaultBallEndImages.length]
                  : defaultBallEndImages[index % defaultBallEndImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Ball End Mill Product ${index + 1}`}
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
                    case "Hardness & Coating Options":
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
              {/* Primary Processes */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                  Primary Processes
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Curved Surface Machining:</strong> Ideal for creating smooth, flowing curves on molds, dies, and artistic components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>3D Contour Machining:</strong> Essential for generating complex three-dimensional shapes and profiles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Circular Arc Grooves:</strong> Machining U-shaped or hemispherical channels with consistent radius</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Filleting:</strong> Creating smooth transitions between perpendicular surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Profile Finishing:</strong> Achieving high-quality surface finishes on complex profiles</span>
                  </li>
                </ul>
              </div>

              {/* Industry Applications */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-3" />
                  Industry Applications
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Mold & Die Manufacturing:</strong> Intricate mold cavities, cores, and stamping dies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Aerospace Industry:</strong> Turbine blades, impellers, and complex structural components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Medical Device Manufacturing:</strong> Orthopedic implants and surgical tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Automotive Industry:</strong> Stamping dies, engine components, and aesthetic parts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Artistic & Custom Prototyping:</strong> Sculptures and bespoke complex shapes</span>
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
                    <span><strong>Complex 3D Machining:</strong> Precisely machine curved surfaces and intricate 3D contours with superior surface finish</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Spherical Tip Advantage:</strong> Continuous contact with curved surfaces eliminates cusp marks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Radius Profiling:</strong> Create consistent circular arc grooves and smooth profile transitions</span>
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
                    <span><strong>Material Versatility:</strong> Optimized for HRC45-65 hardened steels and non-ferrous materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Advanced Coating:</strong> Nano coating technology for extended tool life and performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Dimensional Accuracy:</strong> Highly accurate geometries with exceptional precision</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <FAQSectionEn pageUrl="/standard-tools/milling/ball-end" />
          </div>

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
                    title: "Right Angle Flat End Mills",
                    image: "/images/2F45C-JST.png",
                    description: "Flat end mills for precise surfaces",
                    url: "/standard-tools/milling/right-angle-flat",
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
              <h2 className="text-3xl font-bold mb-4">Need Professional Ball End Mill Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select optimal ball end mills for specific 3D contouring, curved surface machining, and complex geometry applications. From HRC45 general steel to HRC65 hardened materials, we provide comprehensive ball end milling solutions.
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