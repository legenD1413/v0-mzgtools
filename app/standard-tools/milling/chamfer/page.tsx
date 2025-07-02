"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function ChamferEndMillsPage() {
  // Chamfer相关的默认图片
  const defaultChamferImages = [
    "/images/f32-01.png",
    "/images/f32-02.png", 
    "/images/f33-01.png",
    "/images/f33-02.png",
    "/images/f33-03.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/chamfer");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Chamfer图片
          setGalleryImages(defaultChamferImages);
        }
      } else {
        // API请求失败，使用默认Chamfer图片
        setGalleryImages(defaultChamferImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Chamfer图片
      setGalleryImages(defaultChamferImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Chamfer图片
    setGalleryImages(defaultChamferImages);
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
      id: "F32-01",
      name: "3-Edge tungsten steel chamfering cutter",
      series: "WGDJD",
      image: "/images/f32-01.png",
      description: "",
      specifications: "3-edge tungsten steel, uncoated",
      application: "Use: Aluminum, aluminum alloy, die-cast aluminum",
      page: "F32",
    },
    {
      id: "F32-02",
      name: "3-Edge tungsten steel chamfering cutter",
      series: "WGDJDB",
      image: "/images/f32-02.png",
      description: "",
      specifications: "3-edge tungsten steel, nano coating",
      application: "Use: Die prehardened steel, Quenched steel, Alloy steel, Tool steel, Nonferrous metal, Gray cast iron, Common die steel)",
      page: "F32",
    },
    {
      id: "F33-01",
      name: "SWA 45° Welding edge type ultra-fine particle tungsten steel chamfering cutter",
      series: "SWA",
      image: "/images/f33-01.png",
      description: "",
      specifications: "45° welding edge type, ultra-fine particle tungsten steel",
      application: "Various steel machining applications",
      page: "F33",
    },
    {
      id: "F33-02",
      name: "SWCS 45° Welding edge type ultra-fine particle tungsten steel inner hole chamfering cutter (1 blade hand type",
      series: "SWCS",
      image: "/images/f33-02.png",
      description: "",
      specifications: "45° welding edge type, 1 blade hand type, inner hole chamfering",
      application: "Inner hole chamfering operations",
      page: "F33",
    },
    {
      id: "F33-03",
      name: "SWCS 45° Welding edge type ultra-fine particle tungsten steel inner hole chamfering cutter (3 blade machine type))",
      series: "SWCS", 
      image: "/images/f33-03.png",
      description: "",
      specifications: "45° welding edge type, 3 blade machine type, inner hole chamfering",
      application: "Inner hole chamfering operations",
      page: "F33",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Precision Angle Formation",
      description: "Specialized geometry creates precise angled edges and chamfers on workpieces, enhancing aesthetics while removing sharp burrs that could cause injury or impede assembly operations.",
    },
    {
      icon: "Zap", 
      title: "Advanced Coating Technology",
      description: "Multi-layer coating options including bronze and nano coatings provide enhanced hardness, wear resistance, and thermal protection for materials up to HRC65°.",
    },
    {
      icon: "Target",
      title: "Versatile Material Processing",
      description: "Optimized for diverse materials from soft aluminum alloys to hardened tool steels, with uncoated versions for non-ferrous metals and coated variants for ferrous applications.",
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
      description: "Manufactured from ultra-fine particle tungsten steel providing exceptional hardness and wear resistance. Available in single-edge and three-edge configurations for optimal chip evacuation and cutting stability across different applications.",
    },
    {
      title: "Coating & Surface Treatment",
      description: "Multiple coating options including uncoated for aluminum/non-ferrous metals, bronze coating for general steel applications, and nano coating for hardened steels up to HRC65°. Each coating optimized for specific material compatibility.",
    },
    {
      title: "Geometric Specifications",
      description: "Precision angles including  60°, 90°, and 120° options. Key parameters include outer diameter (D), shank diameter (d), total length (L), flute length (H), and chamfering angle (α°) with tight tolerances for consistent results.",
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
                  Chamfer End Mill Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Chamfer End Mill System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  Chamfer, also known as a chamfering tool, is a specialized milling cutter designed for creating angled edges or chamfers on workpieces. These tools are critical in various machining processes for deburring, preparing edges for assembly, or for aesthetic purposes. A chamfer, in metalworking, refers to a beveled or angled edge created on a workpiece, which contrasts with a sharp, perpendicular edge.
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
                  {!isLoadingImages && galleryImages.length > 0 && (
                    <Image
                      src={galleryImages[currentMainImage]}
                      alt="MZG Professional Chamfer End Mill System"
                      width={563}
                      height={400}
                      className="object-contain"
                    />
                  )}
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
                      Chamfering tools are typically manufactured from <strong>ultra-fine particle tungsten steel</strong>, providing exceptional hardness and wear resistance, which is vital for precise chamfering operations. Many chamfering tools are available with different coatings, such as bronze-colored coating or nano-coating, to enhance their performance and extend tool life.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      <strong>Uncoated versions</strong> are frequently used for milling steel and non-ferrous metals like copper and aluminum. The selection of coating depends on the material being machined and the desired finish. <strong>Nano-coating</strong> is well-suited for hardened steels, alloy steels, and cast iron, whereas uncoated tools are generally recommended for aluminum and its alloys.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      These tools often feature <strong>multiple cutting edges</strong>; commonly, 3-edge designs are used for tungsten steel chamfering cutters. The number of flutes influences chip evacuation and the rigidity of the cutting process. Chamfering tools can be designed with various angles, including <strong> 60°, 90°, and 120°</strong>, allowing for a diverse range of chamfer geometries.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Specialized chamfering tools are engineered for particular applications, including inner hole chamfering and welding edge type ultra-fine particle tungsten steel chamfering cutters for enhanced cutting performance and durability.
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
                      <span className="text-sm"><strong>Material:</strong> Ultra-fine particle tungsten steel</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Edge Options:</strong> Single-edge & 3-edge configurations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Angles:</strong> 45°, 60°, 90°, 120° options</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Hardness Range:</strong> Up to HRC65°</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Coating:</strong> Uncoated, Bronze, Nano coating options</span>
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
                    src={galleryImages[currentMainImage] || defaultChamferImages[0]}
                    alt="Chamfer End Mill Product"
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
                  ? galleryImages[imageIndex] || defaultChamferImages[imageIndex % defaultChamferImages.length]
                  : defaultChamferImages[index % defaultChamferImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Chamfer End Mill Product ${index + 1}`}
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
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">{spec.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{spec.description}</p>
                </div>
              ))}
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
                    <span><strong>Chamfering and Angle Forming:</strong> Primary purpose for creating precise chamfers and specific angles on workpieces for enhanced aesthetics and assembly facilitation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Drill Point Angling/Spot Drilling:</strong> Dual role as chamfering tools and pilot hole creation with specific angles like 60°, 90°, or 120°</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Deburring Operations:</strong> Essential for removing sharp burrs that could cause injury or impede component assembly</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Inner Hole Chamfering:</strong> Specialized tools for creating chamfers inside holes and cavities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Edge Preparation:</strong> Preparing edges for welding, coating, or secondary operations</span>
                  </li>
                </ul>
              </div>

              {/* Machining Operations */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-3" />
                  Material Processing
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Soft Materials (Uncoated):</strong> Aluminum, aluminum alloys, die-cast aluminum, copper, and non-ferrous metals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Medium Hardness (Bronze Coated):</strong> Die prehardened steel, quenched steel, alloy steel up to HRC45°</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Hard Materials (Nano Coated):</strong> Tool steel, gray cast iron, stainless steel up to HRC65°</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>General Steel Processing:</strong> Common die steel, structural steel, and general machining applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Precision Operations:</strong> High-accuracy chamfering for aerospace and medical device manufacturing</span>
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
                    <span><strong>Precise Angle Creation:</strong> Creates accurate chamfers and beveled edges with angles from 45° to 120° for various design requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Edge Deburring:</strong> Removes sharp burrs and dangerous edges to improve safety and facilitate assembly operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Aesthetic Enhancement:</strong> Improves part appearance with clean, professional-looking chamfered edges</span>
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
                    <span><strong>Material Versatility:</strong> Optimized coating options for materials from soft aluminum to hardened steel up to HRC65°</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Multi-Edge Design:</strong> Single and 3-edge configurations for optimal chip evacuation and cutting stability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Extended Tool Life:</strong> Advanced tungsten steel construction and coating technology for enhanced durability</span>
                  </li>
                </ul>
                </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/milling/chamfer" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Chamfer End Mill Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our technical team can help you select optimal chamfering tools for precise angle formation, deburring, and edge preparation applications. From aluminum processing to hardened steel machining up to HRC65°, we provide comprehensive chamfering solutions.
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
                    description: "Corner radius and fillet operations",
                  url: "/standard-tools/milling/fillet",
                },
                {
                  title: "Roughing End Mills",
                    image: "/images/4FS.png",
                    description: "High material removal rate cutters",
                  url: "/standard-tools/milling/roughing",
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
