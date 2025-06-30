"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function FilletEndMillsPage() {
  // Fillet End Mills相关的默认图片
  const defaultFilletImages = [
    "/images/2F45CR.png",
    "/images/4F45CR.png", 
    "/images/2F50CR.png",
    "/images/4F50CR.png",
    "/images/2F55CR.png",
    "/images/4F55CR.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/fillet");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Fillet图片
          setGalleryImages(defaultFilletImages);
        }
      } else {
        // API请求失败，使用默认Fillet图片
        setGalleryImages(defaultFilletImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Fillet图片
      setGalleryImages(defaultFilletImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Fillet图片，避免显示无关图片
    setGalleryImages(defaultFilletImages);
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
      id: "fillet-005",
      name: "2 Edge HRC45° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/2F45CR.png",
      description: "Application: Milling the steel hardness under HRC45°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F45CR",
      d: "0.2-3mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC45",
      application: "Application: Milling the steel hardness under HRC45°",
      url: "/standard-tools/milling/fillet/2F45CR",
      page: "F17",
    },
    {
      id: "fillet-006",
      name: "4 Edge HRC45° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/4F45CR.png",
      description: "Application: Milling the steel hardness under HRC45°",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F45CR",
      d: "0.2-3mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC45",
      application: "Application: Milling the steel hardness under HRC45°",
      url: "/standard-tools/milling/fillet/4F45CR",
      page: "F17",
    },
    {
      id: "fillet-007",
      name: "2 Edge HRC50° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/2F50CR.png",
      description: "Application: Milling the steel hardness under HRC50°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F50CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC50",
      application: "Application: Milling the steel hardness under HRC50°",
      url: "/standard-tools/milling/fillet/2F50CR",
      page: "F18",
    },
    {
      id: "fillet-008",
      name: "4 Edge HRC50° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/4F50CR.png",
      description: "Application: Milling the steel hardness under HRC50°",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F50CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC50",
      application: "Application: Milling the steel hardness under HRC50°",
      url: "/standard-tools/milling/fillet/4F50CR",
      page: "F18",
    },
    {
      id: "fillet-009",
      name: "2 Edge HRC55° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/2F55CR.png",
      description: "Application: Milling the steel hardness under HRC55°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F55CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC55",
      application: "Application: Milling the steel hardness under HRC55°",
      url: "/standard-tools/milling/fillet/2F55CR",
      page: "F19",
    },
    {
      id: "fillet-010",
      name: "4 Edge HRC55° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/4F55CR.png",
      description: "Application: Milling the steel hardness under HRC55°",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F55CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC55",
      application: "Application: Milling the steel hardness under HRC55°",
      url: "/standard-tools/milling/fillet/4F55CR",
      page: "F19",
    },
    {
      id: "fillet-011",
      name: "2 Edge HRC65° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/2F65CR.png",
      description: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°",
      flutes: 2,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "2F65CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC65",
      application: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°",
      url: "/standard-tools/milling/fillet/2F65CR",
      page: "F20",
    },
    {
      id: "fillet-012",
      name: "4 Edge HRC65° Coated Tungsten Steel Round Angle End Mill",
      image: "/images/4F65CR.png",
      description: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°",
      flutes: 4,
      material: "Tungsten Steel",
      coating: "Coated",
      series: "4F65CR",
      d: "1-12mm",
      H: "2-24mm",
      L: "50-75mm",
      D: "4-12mm",
      cornerRadius: "R0.2-3mm",
      hardness: "HRC65",
      application: "Application: Milling Stainless Steel And Steel Hardness Under HRC65°",
      url: "/standard-tools/milling/fillet/4F65CR",
      page: "F20",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Enhanced Tool Strength and Durability",
      description: "Corner radius design eliminates stress concentration points, distributing cutting forces evenly across a larger area for superior resistance to chipping and fracturing compared to sharp-cornered end mills.",
    },
    {
      icon: "Zap", 
      title: "Superior Wear Resistance",
      description: "High-quality Tungsten Steel construction with advanced Nano Coating (纳米涂层) technology provides exceptional hardness, lubricity, and thermal barrier properties for extended tool life in demanding applications.",
    },
    {
      icon: "Target",
      title: "Improved Surface Finish",
      description: "Creates precise filleted transitions between surfaces, eliminating sharp internal corners and producing superior surface quality while reducing stress risers in finished parts.",
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
      description: "Solid Tungsten Carbide construction for exceptional hardness, compressive strength, and hot hardness retention. Available in 2-flute and 4-flute configurations. 2-flute offers excellent chip evacuation for slotting and softer materials, while 4-flute provides stable cutting action and finer surface finish for harder materials.",
    },
    {
      title: "Corner Radius & Coating",
      description: "Defining corner radius parameter (R) specified in millimeters (e.g., R0.2, R0.5, R1.0) based on part design requirements. Advanced PVD/CVD Nano Coating provides increased surface hardness, enhanced lubricity, and thermal barrier protection for materials up to HRC65.",
    },
    {
      title: "Dimensional Parameters",
      description: "Key specifications include d (Cutting Diameter), R (Corner Radius), H (Flute Length), L (Overall Length), and D (Shank Diameter). Standard nomenclature example: 4F55C-10R1.0 indicates 4-Flute, HRC55 Coated, 10mm diameter with 1.0mm corner radius.",
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
                  Fillet End Mill Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Fillet End Mill System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  Fillet End Mills, also commonly known as Corner Radius End Mills, Round Angle End Mills (圆角铣刀), or Radius End Mills (圆鼻铣刀), represent a critical and versatile category of cutting tools used in modern CNC milling operations. Distinguished from standard square end mills by their unique geometry, the sharp 90-degree corners are replaced with a precise, rounded corner of a specific radius. This design modification provides significant advantages in tool strength, workpiece quality, and overall machining efficiency.
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
                    alt="MZG Professional Fillet End Mill System"
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
                      The performance of MZG Fillet End Mills is meticulously engineered to overcome the inherent weaknesses of standard square end mills while offering enhanced machining capabilities. The fundamental purpose is derived from its signature <strong>corner radius design</strong>, which dramatically increases structural integrity by distributing cutting forces evenly across a larger area, eliminating the stress concentration points that make sharp corners highly susceptible to chipping.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Our Fillet End Mills are predominantly manufactured from high-quality <strong>Tungsten Steel (solid carbide)</strong>, chosen for its exceptional hardness, high compressive strength, and ability to retain hardness at elevated temperatures. This material foundation ensures cutting edges remain sharp and effective even when machining tough, abrasive materials across hardness ranges from <strong>HRC45° to HRC65°</strong>.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Advanced <strong>Nano Coating technology</strong> further enhances performance through multi-layered PVD/CVD coatings that provide increased surface hardness beyond the carbide substrate, enhanced lubricity to reduce friction and heat generation, and thermal barrier protection for high-speed operations. This combination allows specialized machining of hardened tool steels and stainless steel materials.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The radius geometry creates corresponding fillets on workpieces, eliminating sharp internal corners that act as stress risers while producing visibly smoother, higher-quality surface finishes. This is crucial in applications like mold making and aerospace where surface integrity and part strength are paramount considerations.
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
                      <span className="text-sm"><strong>Material:</strong> Solid Tungsten Carbide</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Flute Options:</strong> 2-flute & 4-flute configurations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Corner Radius:</strong> R0.2 to R3.0mm range</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Hardness Range:</strong> HRC45° to HRC65°</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Coating:</strong> Advanced Nano Coating technology</span>
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
                    src={galleryImages[currentMainImage] || defaultFilletImages[0]}
                    alt="Fillet End Mill Product"
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
                  ? galleryImages[imageIndex] || defaultFilletImages[imageIndex % defaultFilletImages.length]
                  : defaultFilletImages[index % defaultFilletImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Fillet End Mill Product ${index + 1}`}
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
                    case "Corner Radius & Coating":
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
                    <span><strong>Mold & Die Manufacturing:</strong> Primary application for creating precise internal fillets to improve material flow and part strength</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Aerospace Industry:</strong> Components requiring fatigue resistance with filleted corners to eliminate failure points</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>General Engineering:</strong> Creating strong, aesthetically pleasing components with rounded edges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>High-Speed Machining:</strong> Stable geometry ideal for aggressive toolpaths and high feed rates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Medical Device Manufacturing:</strong> Critical applications requiring superior surface integrity</span>
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
                    <span><strong>Fillet Milling:</strong> Direct application for machining specific radius at floor-wall intersections</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Profile Milling & Contouring:</strong> Strength for long, continuous cuts in 2D/3D profiles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Pocket Milling:</strong> Creating specified corner radius in single operation with time savings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Slotting:</strong> Reinforced corners prevent chipping during full-width engagement in harder materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Finishing Operations:</strong> Superior surface finish meeting tight dimensional tolerances</span>
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
                    <span><strong>Enhanced Tool Strength:</strong> Corner radius distributes cutting forces evenly, drastically reducing stress concentration and chipping susceptibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Improved Surface Finish:</strong> Creates corresponding fillets eliminating sharp internal corners and stress risers in finished parts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Increased Tool Life:</strong> Prevention of premature corner wear contributes to longer, more predictable tool performance</span>
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
                    <span><strong>Material Versatility:</strong> Optimized for materials from HRC45 general steel to HRC65 hardened stainless steel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Advanced Coating Technology:</strong> Multi-layered nano coatings for enhanced hardness, lubricity, and thermal protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Economic Efficiency:</strong> Reduced machine downtime and tooling costs through extended tool life and higher speeds</span>
                  </li>
                </ul>
                </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <FAQSectionEn pageUrl="/standard-tools/milling/fillet" />
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
              <h2 className="text-3xl font-bold mb-4">Need Professional Fillet End Mill Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select optimal fillet end mills for specific corner radius machining, mold making, and structural strengthening applications. From HRC45 general steel to HRC65 hardened materials, we provide comprehensive corner radius milling solutions.
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
