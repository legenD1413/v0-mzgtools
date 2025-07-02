"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function WeldingEdgeMillingCuttersPage() {
  // Welding Edge Milling Cutters相关的默认图片
  const defaultWeldingEdgeImages = [
    "/images/SWE2.png",
    "/images/SWEL2.png", 
    "/images/SWE4.png",
    "/images/SWEL4.png",
    "/images/SWELL4.png",
    "/images/SWER4.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/welding-edge");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Welding Edge图片
          setGalleryImages(defaultWeldingEdgeImages);
        }
      } else {
        // API请求失败，使用默认Welding Edge图片
        setGalleryImages(defaultWeldingEdgeImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Welding Edge图片
      setGalleryImages(defaultWeldingEdgeImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Welding Edge图片，避免显示无关图片
    setGalleryImages(defaultWeldingEdgeImages);
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

  // Sample product data - in a real application, this would come from a database or API
  const products = [
    {
      id: "welding-005",
      name: "Spiral Welding Edge Type Ultra-fine Particle Tungsten Steel MillingCutter-2 BladeOver Center(standardType)",
      image: "/images/SWE2.png",
      description: "2-blade over center milling cutter with spiral welding edge technology for standard applications",
      flutes: "2",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWE2",
      d: "12-25mm",
      H: "30-50mm",
      L: "80-120mm",
      D: "12-25mm",
      application:
        "Over center milling operations with 2-blade design for enhanced chip evacuation and surface finish",
      url: "/standard-tools/milling/welding-edge/swe2",
      page: "F29",
    },
    {
      id: "welding-006",
      name: "Spiral welding edge type ultra-fine particle tungsten steel milling cutter - 2 blade over center (long type)",
      image: "/images/SWEL2.png",
      description:
        "Long-reach 2-blade over center milling cutter with spiral welding edge technology for deep cavities",
      flutes: "2",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWEL2",
      d: "12-25mm",
      H: "40-100mm",
      L: "90-180mm",
      D: "12-25mm",
      application:
        " Deep cavity milling and extended reach applications requiring superior chip evacuation and vibration control",
      url: "/standard-tools/milling/welding-edge/swel2",
      page: "F29",
    },
    {
      id: "welding-007",
      name: "Spiral welding edge type ultra-fine particle tungsten steel milling cutter - 4 blade (standard type)",
      image: "/images/SWE4.png",
      description:
        "4-blade milling cutter with spiral welding edge technology for high-productivity finishing operations",
      flutes: "4",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWE4",
      d: "12-32mm",
      H: "30-70mm",
      L: "80-160mm",
      D: "12-50mm",
      application:
        "High-productivity finishing operations with 4-blade design for superior surface finish and increased feed rates",
      url: "/standard-tools/milling/welding-edge/swe4",
      page: "F29",
    },
    {
      id: "welding-008",
      name: "Spiral welding edge type ultra-fine particle tungsten steel milling cutter - 4 blade (long type)",
      image: "/images/SWEL4.png",
      description:
        "Long-reach 4-blade milling cutter with spiral welding edge technology for deep cavity finishing operations",
      flutes: "4",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWEL4",
      d: "12-32mm",
      H: "40-125mm",
      L: "90-240mm",
      D: "12-50mm",
      application:
        "Deep cavity finishing operations requiring extended reach with superior surface finish and high productivity",
      url: "/standard-tools/milling/welding-edge/swel4",
      page: "F29",
    },
    {
      id: "welding-009",
      name: "Spiral welding edge type ultra-fine particle tungsten steel milling cutter - 4 blade (extra long type)",
      image: "/images/SWELL4.png",
      description:
        "Extra long-reach 4-blade milling cutter with spiral welding edge technology for very deep cavity finishing operations",
      flutes: "4",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWELL4",
      d: "20-32mm",
      H: "100-200mm",
      L: "180-305mm",
      D: "20-50mm",
      application:
        "Very deep cavity finishing operations requiring extreme reach with superior surface finish and high productivity in hard-to-access areas",
      url: "/standard-tools/milling/welding-edge/swell4",
      page: "F29",
    },
    {
      id: "welding-010",
      name: "Spiral welding type ultrafine tungsten steel roughing cutter",
      image: "/images/SWER4.png",
      description:
        "High-performance roughing cutter with spiral welding edge technology for maximum material removal rates",
      flutes: "4,5",
      material: "Steel Body with Ultra-fine Tungsten Carbide Edges",
      series: "SWER4",
      d: "32-42mm",
      H: "60-205mm",
      L: "140-305mm",
      D: "30-50mm",
      application:
        "Heavy-duty roughing operations with enhanced material removal rates and superior chip evacuation",
      url: "/standard-tools/milling/welding-edge/swer4",
      page: "F30",
    },
    {
      id: "welding-011",
      name: "Spiral-welded ultra-fine tungsten steel tubular roughing cutter",
      image: "/images/SWRT.png",
      description:
        "Heavy-duty tubular roughing cutter with spiral-welded ultra-fine tungsten steel inserts for maximum material removal rates",
      flutes: "6,8",
      material: "Steel Body with Ultra-fine Tungsten Carbide Inserts",
      series: "SWRT",
      d: "55-100mm",
      H: '1"-1" 1/4',
      L: "70-115mm",
      D: "60-75mm",
      application:
        "High-volume roughing operations for large workpieces with tubular design for improved rigidity and productivity",
      url: "/standard-tools/milling/welding-edge/swrt",
      page: "F30",
      T: "6,8",
    },
    {
      id: "welding-012",
      name: "Spiral-welded ultra-fine tungsten steel tubular milling cutter (long type)",
      image: "/images/SWT.png",
      description:
        "Extended reach tubular milling cutter with spiral-welded ultra-fine tungsten steel inserts for deep cavity face milling operations",
      flutes: "6,8",
      material: "Steel Body with Ultra-fine Tungsten Carbide Inserts",
      series: "SWT",
      d: "48-100mm",
      H: '1"-1" 1/4',
      L: "65-115mm",
      D: "60-75mm",
      application:
        "Extended reach face milling operations for deep cavities and hard-to-access areas with tubular design for enhanced rigidity and precision",
      url: "/standard-tools/milling/welding-edge/swt",
      page: "F30",
      T: "6,8",
    },
    {
      id: "welding-013",
      name: "Welding edge type ultra-fine particle tungsten steel tubular face milling cutter",
      image: "/images/SWFT.png",
      description:
        "Large diameter tubular face milling cutter with ultra-fine particle tungsten steel inserts for precision face milling operations",
      flutes: "8,10,14,16",
      material: "Steel Body with Ultra-fine Tungsten Carbide Inserts",
      series: "SWFT",
      d: '1"-2"',
      H: "15mm",
      L: "55",
      D: "75-150mm",
      d1: "46-80mm",
      application:
        "Large diameter precision face milling operations with variable tooth count (8,10,14,16) for superior surface finish and high productivity in flat surface machining",
      url: "/standard-tools/milling/welding-edge/swft",
      page: "F30",
      T: "8,10,14,16",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Cost-Effective Construction",
      description: "Combines tough steel body with hardened cutting edges made from tungsten carbide or high-speed steel, providing excellent balance of toughness and wear resistance at competitive cost.",
    },
    {
      icon: "Zap", 
      title: "Ultra-Fine Particle Technology",
      description: "Advanced ultra-fine particle tungsten steel cutting edges deliver superior hardness, wear resistance, and edge strength for extended tool life and higher cutting speeds.",
    },
    {
      icon: "Target",
      title: "Spiral Edge Design",
      description: "Helically arranged cutting edges provide smoother cutting action, reduced vibration, lower cutting forces, and efficient chip evacuation for superior performance.",
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
      description: "Steel body construction with welded ultra-fine particle tungsten steel cutting edges. This design provides exceptional toughness and shock resistance from the steel body while delivering superior cutting performance from the tungsten carbide edges. Available in 2-flute, 4-flute, and multiple tooth configurations.",
    },
    {
      title: "Welding Edge Technology",
      description: "The cutting inserts or blades are welded onto the cutter body, creating a permanent bond that enables heavy-duty cutting operations and machining of special shapes. This construction method provides superior strength for demanding applications while maintaining precision.",
    },
    {
      title: "Dimensional Parameters",
      description: "Comprehensive range of sizes with outer diameters from Ø12mm to Ø150mm, flute lengths from 15mm to 205mm, and overall lengths from 55mm to 305mm. Special tubular designs available with hole diameters from 1\" to 2\" for specific applications.",
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
                  Welding Edge Milling Cutter Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Welding Edge Milling Cutter System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  Welding edge milling cutters are a type of milling cutter where the cutting inserts or blades are welded onto the cutter body. This design is often employed for heavy-duty cutting and for machining special shapes. These cutters are primarily made of ultra-fine particle tungsten steel, which provides high hardness, wear resistance, and heat resistance. They are generally suitable for processing a wide range of materials, including various hardness steels and non-ferrous metals.
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
                    alt="MZG Professional Welding Edge Milling Cutter System"
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
                      The performance of MZG Welding Edge Milling Cutters is engineered around the fundamental principle of <strong>welded cutting edge construction</strong>, where ultra-fine particle tungsten steel cutting edges are permanently welded onto a robust steel body. This hybrid design combines the toughness and shock resistance of steel with the exceptional cutting performance of tungsten carbide, creating tools capable of withstanding the most demanding machining applications.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Our Welding Edge Milling Cutters feature <strong>ultra-fine particle tungsten steel</strong> cutting edges that provide superior hardness, wear resistance, and heat resistance. This advanced material composition ensures cutting edges remain sharp and effective even when machining tough, abrasive materials across a wide range of <strong>hardness steels and non-ferrous metals</strong>, delivering consistent performance in challenging applications.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The <strong>spiral welding edge design</strong> creates helically arranged cutting edges that provide smoother cutting action, reduced vibration, and lower cutting forces. This configuration enables efficient chip evacuation and superior surface finish while distributing cutting loads evenly across the tool body, resulting in extended tool life and enhanced machining stability.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      These cutters are specifically designed for <strong>heavy-duty cutting operations and special shape machining</strong>, where standard end mills would fail due to excessive cutting forces or complex geometries. The welded construction provides the strength needed for aggressive material removal while maintaining precision for finishing operations.
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
                      <span className="text-sm"><strong>Material:</strong> Ultra-fine Particle Tungsten Steel Edges</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Construction:</strong> Welded Edge Technology</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Configurations:</strong> 2-flute, 4-flute, Tubular designs</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Applications:</strong> Heavy-duty cutting & special shapes</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Materials:</strong> Steel & non-ferrous metals</span>
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
                    src={galleryImages[currentMainImage] || defaultWeldingEdgeImages[0]}
                    alt="Welding Edge Milling Cutter Product"
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
                  ? galleryImages[imageIndex] || defaultWeldingEdgeImages[imageIndex % defaultWeldingEdgeImages.length]
                  : defaultWeldingEdgeImages[index % defaultWeldingEdgeImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Welding Edge Milling Cutter Product ${index + 1}`}
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
                    case "Welding Edge Technology":
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
                    <span><strong>Mold & Die Manufacturing:</strong> Creating precise internal features and complex shapes where standard tools cannot reach</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Large Component Manufacturing:</strong> Heavy-duty material removal in aerospace and automotive structural components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>High-Volume Production:</strong> Continuous operation environments requiring robust tools with extended life</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Deep Cavity Machining:</strong> Extended reach applications in deep molds and complex geometries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Special Shape Machining:</strong> Custom profile creation and non-standard geometries requiring specialized tooling</span>
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
                    <span><strong>Heavy-Duty Roughing:</strong> Maximum material removal rates with exceptional tool life in demanding applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Tubular Face Milling:</strong> Large diameter operations with superior surface finish and high productivity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Deep Pocket Milling:</strong> Extended reach capabilities for complex cavities and hard-to-access areas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Plunge Cutting:</strong> Over center designs enable direct plunge cutting for efficient slot creation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Contouring Operations:</strong> Smooth cutting action for complex 3D profiles and surface finishing</span>
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
                    <span><strong>Enhanced Tool Strength:</strong> Welded construction provides exceptional toughness and shock resistance for heavy-duty applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Superior Cutting Performance:</strong> Ultra-fine particle tungsten steel edges deliver exceptional hardness and wear resistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Extended Tool Life:</strong> Robust construction and quality materials ensure long-lasting performance in demanding conditions</span>
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
                    <span><strong>Material Versatility:</strong> Suitable for various hardness steels and non-ferrous metals across wide application range</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Heat Resistance:</strong> Superior thermal properties maintain cutting edge integrity at elevated temperatures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Cost Effectiveness:</strong> Balanced construction provides excellent performance-to-cost ratio for production environments</span>
                  </li>
                </ul>
                </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/milling/welding-edge" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Welding Edge Milling Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our technical team can help you select optimal welding edge milling cutters for heavy-duty cutting operations, special shape machining, and demanding production environments. From standard configurations to custom tubular designs, we provide comprehensive solutions.
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
                  title: "Roughing End Mills",
                    image: "/images/4FS.png",
                    description: "High material removal rate cutters",
                  url: "/standard-tools/milling/roughing",
                },
                {
                  title: "Fillet End Mills",
                    image: "/images/2F45CR.png",
                    description: "Enhanced corner strength and finish",
                  url: "/standard-tools/milling/fillet",
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
