"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function IntegralThreadMillingCuttersPage() {
  // Thread milling cutters相关的默认图片
  const defaultThreadMillImages = [
    "/images/L05-1.png",
    "/images/L05-2.png", 
    "/images/L06-1.png",
    "/images/L06-2.png",
    "/images/L07-1.png",
    "/images/L07-2.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/threading/integral-thread-milling-cutters");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认Thread Mill图片
          setGalleryImages(defaultThreadMillImages);
        }
      } else {
        // API请求失败，使用默认Thread Mill图片
        setGalleryImages(defaultThreadMillImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认Thread Mill图片
      setGalleryImages(defaultThreadMillImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认Thread Mill图片，避免显示无关图片
    setGalleryImages(defaultThreadMillImages);
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
      id: "itmc-001",
      name: "Metric Single Tooth Thread Milling Cutter",
      image: "/images/L05-1.png",
      description: "Single cutting edge with pitches from 0.2 mm to 3.5 mm",
      series: "1T-..",
      pitchRange: "0.2-3.5mm",
      bladeDiameter: "0.55-16mm",
      shankDiameter: "1.5-16mm",
      totalLength: "50mm",
      application: "Designed for metric single tooth thread milling operations",
      pageNumber: "L05",
    },
    {
      id: "itmc-002",
      name: "Metric Three Tooth Thread Milling Cutter",
      image: "/images/L05-2.png",
      description: "Enhanced stability with pitches from 0.25 mm to 3.0 mm",
      series: "3T-..",
      pitchRange: "0.25-3.0mm",
      bladeDiameter: "0.7-20mm",
      shankDiameter: "2.8-28mm",
      totalLength: "50-90mm",
      application: "Used for metric three tooth thread milling",
      pageNumber: "L05",
    },
    {
      id: "itmc-003",
      name: "Metric Full Thread Milling Cutter",
      image: "/images/L06-1.png",
      description: "Complete thread profile with pitches from 0.5 mm to 3.0 mm",
      series: "FT-..",
      pitchRange: "0.5-3.0mm",
      bladeDiameter: "2.3-42mm",
      shankDiameter: "4-42mm",
      totalLength: "50-100mm",
      application: "Suitable for metric full thread milling",
      pageNumber: "L06",
    },
    {
      id: "itmc-004",
      name: "Metric Extended Single Tooth Thread Milling Cutter",
      image: "/images/L06-2.png",
      description: "Extended design with pitches from 0.3 mm to 3.5 mm",
      series: "1T-..",
      pitchRange: "0.3-3.5mm",
      bladeDiameter: "1.05-16mm",
      shankDiameter: "4-50mm",
      totalLength: "100mm",
      application: "Designed for extended metric single tooth thread milling operations",
      pageNumber: "L06",
    },
    {
      id: "itmc-005",
      name: "Metric Extended Three Tooth Thread Milling Cutter",
      image: "/images/L07-1.png",
      description: "Extended three tooth with pitches from 0.35 mm to 2.0 mm",
      series: "3T-..",
      pitchRange: "0.35-2.0mm",
      bladeDiameter: "1.2-10mm",
      shankDiameter: "3.2-37mm",
      totalLength: "100mm",
      application: "Used for extended metric three tooth thread milling",
      pageNumber: "L07",
    },
    {
      id: "itmc-006",
      name: "M Metric Hard Alloy Right-Hand Drilling Thread Milling Cutter",
      image: "/images/L07-2.png",
      description: "Co10% material with Balchals Ultra H coating for M2*0.4P to M12*1.75P",
      series: "RT-..",
      material: "Co10%",
      coating: "Balchals Ultra H",
      threadRange: "M2*0.4P to M12*1.75P",
      bladeDiameter: "1.4-9.5mm",
      shankDiameter: "6-10mm",
      application: "Right-hand drilling thread milling for stainless steel, high-temperature alloy, titanium alloy, mold steel, steel parts, and cast iron",
      pageNumber: "L07",
    },
    {
      id: "itmc-007",
      name: "M Metric Hard Alloy Left-Hand Drilling Thread Milling Cutter",
      image: "/images/L08-1.png",
      description: "Co8% high hardness material with Balchals DR coating for M2*0.4P to M12*1.75P",
      series: "FLT-..",
      material: "Co8%",
      coating: "Balchals DR",
      threadRange: "M2*0.4P to M12*1.75P",
      bladeDiameter: "1.4-9mm",
      shankDiameter: "6-10mm",
      application: "Left-hand cutting, drilling, and milling thread milling for heat-treated steel up to HRC60, mold steel, and other high-hardness materials",
      pageNumber: "L08",
    },
    {
      id: "itmc-008",
      name: "M Metric Tungsten Steel Left-Hand Right Cutting Full Thread Milling Cutter",
      image: "/images/L08-2.png",
      description: "Tungsten steel with Co10% material and Balchals Ultra H coating",
      series: "LT-..",
      material: "Tungsten Steel",
      coating: "Balchals Ultra H",
      pitchRange: "0.5-3.0mm",
      bladeDiameter: "4.5-19.7mm",
      shankDiameter: "6-20mm",
      application: "Left-hand right cutting full thread milling for stainless steel, high-temperature alloy, titanium alloy, mold steel, steel parts, and cast iron",
      pageNumber: "L08",
    },
    {
      id: "itmc-009",
      name: "60° Single Tooth Range Thread Milling Cutter",
      image: "/images/L09-1.png",
      description: "Wide range for metric (0.5-3.5mm) and UN (32-56 TPI, 8-12 TPI)",
      series: "1T-..",
      pitchRange: "0.5-3.5mm (Metric), 32-56 TPI, 8-12 TPI (UN)",
      bladeDiameter: "3.9-16mm",
      shankDiameter: "4-16mm",
      totalLength: "50-75mm",
      application: "Single tooth range thread milling for both UN (Unified National) and M (Metric) thread types",
      pageNumber: "L09",
    },
    {
      id: "itmc-010",
      name: "UNC.UNF American Triple Thread Cutter",
      image: "/images/L10-1.png",
      description: "UNC/UNF threads with TPI values ranging from 72 TPI to 14 TPI",
      series: "3T-..",
      threadStandards: "UNC/UNF",
      tpiRange: "72-14 TPI",
      bladeDiameter: "1.4-9.55mm",
      shankDiameter: "3.9-23.3mm",
      application: "American triple thread cutting for UNC and UNF standards",
      pageNumber: "L10",
    },
    {
      id: "itmc-011",
      name: "Full Tooth American UN Internal Thread Milling Cutter",
      image: "/images/L11-1.png",
      description: "UN internal threads covering TPI from 36 TPI down to 8 TPI",
      series: "FT-..",
      threadStandards: "UN (American)",
      tpiRange: "36-8 TPI",
      bladeDiameter: "3-16mm",
      shankDiameter: "8.5-40mm",
      application: "Full tooth American UN internal thread milling",
      pageNumber: "L11",
    },
    {
      id: "itmc-012",
      name: "55° Inch Single Tooth Range Thread Milling Cutter",
      image: "/images/L12-1.png",
      description: "Various pitches including P0.793, P1.058, P1.27, and ranges",
      series: "1T-..",
      threadStandards: "55° Inch",
      pitchOptions: "P0.793, P1.058, P1.27, P0.907-P1.411, P1.336-P1.814, P1.336-P2.54",
      bladeDiameter: "3.1-12mm",
      shankDiameter: "4-38mm",
      application: "Single tooth range thread milling of 55° inch threads",
      pageNumber: "L12",
    },
    {
      id: "itmc-013",
      name: "A80 German Standard PG Tungsten Steel Straight Groove Thread Milling Cutter",
      image: "/images/L13-1.png",
      description: "Co10% material with Balchals Ultra H coating for PG threads",
      series: "PG-..",
      material: "Co10%",
      coating: "Balchals Ultra H",
      threadTypes: "Pg7, PG9,11,13.5,16, PG21,29,36,42,48",
      bladeDiameter: "7.9-11.9mm",
      pitchRange: "1.27-1.588mm",
      shankDiameter: "8-12mm",
      application: "Straight groove thread milling for A80 German standard PG threads, suitable for stainless steel, high-temperature alloy, titanium alloy, mold steel, steel parts, and cast iron",
      pageNumber: "L13",
    },
    {
      id: "itmc-014",
      name: "Inch Cylindrical Pipe Thread Milling Cutter",
      image: "/images/L13-2.png",
      description: "Inch cylindrical pipe threads with TPI values 28, 19, 14, and 11",
      series: "FT-..",
      threadStandards: "Inch Cylindrical Pipe",
      tpiRange: "28, 19, 14, 11",
      bladeDiameter: "6-16mm",
      shankDiameter: "12-22mm",
      totalLength: "60-90mm",
      application: "Inch cylindrical pipe thread milling",
      pageNumber: "L13",
    },
    {
      id: "itmc-015",
      name: "NPT/NPTF American Taper Pipe Thread Milling Cutter",
      image: "/images/L14-1.png",
      description: "NPT/NPTF American taper pipe threads with TPI values 27, 18, 14, 11.5, and 8",
      series: "FT-..",
      threadStandards: "NPT/NPTF",
      tpiRange: "27, 18, 14, 11.5, 8",
      bladeDiameter: "5.2-14.4mm",
      shankDiameter: "12-35mm",
      totalLength: "60-90mm",
      application: "NPT/NPTF American taper pipe thread milling",
      pageNumber: "L14",
    },
    {
      id: "itmc-016",
      name: "BSPT(PT.RC) British Taper Pipe Thread Milling Cutter",
      image: "/images/L14-2.png",
      description: "BSPT British taper pipe threads with 1.783° taper angle",
      series: "FT-..",
      threadStandards: "BSPT/PT/RC",
      taperAngle: "1.783°",
      tpiRange: "28, 19, 14, 11",
      bladeDiameter: "5.24-14.48mm",
      shankDiameter: "12-30mm",
      application: "BSPT (PT.RC) British taper pipe thread milling",
      pageNumber: "L14",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Superior Material Construction",
      description: "Ultra-fine grain tungsten carbide with Co8%-Co10% compositions provides exceptional hardness, wear resistance, and thermal stability for threading the most challenging materials up to HRC65.",
    },
    {
      icon: "Zap", 
      title: "Advanced Coating Systems",
      description: "Balchals Ultra H, Balchals DR, TiAlN, and DLC coating technologies deliver enhanced surface hardness, lubricity, and thermal barrier properties for extended tool life in demanding threading applications.",
    },
    {
      icon: "Target",
      title: "Precision Thread Quality",
      description: "Engineered for producing threads to tight tolerances with excellent surface finish, accurate pitch control, and superior thread form integrity across all thread standards and materials.",
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
      description: "Ultra-fine grain tungsten carbide construction with Co8%-Co10% compositions for maximum hardness and thermal resistance. Available in single-tooth, three-tooth, and full profile configurations. Single-tooth designs offer versatility for multiple pitches, while multi-tooth provide enhanced productivity and stability.",
    },
    {
      title: "Thread Standards & Coatings",
      description: "Comprehensive coverage of metric (M), unified (UN), inch, NPT/NPTF, BSPT, and PG thread standards. Advanced Balchals Ultra H, Balchals DR, TiAlN, and DLC coatings provide enhanced hardness, lubricity, and thermal protection for materials up to HRC65.",
    },
    {
      title: "Dimensional Parameters",
      description: "Key specifications include blade diameter (d1), shank diameter (D), total length (L), effective blade length (L1), pitch ranges, and TPI values. Order nomenclature indicates series (1T-, 3T-, FT-, RT-, etc.) with specific thread parameters and coating designations.",
    },
  ]



  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-white text-gray-900">
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Solid Thread Milling Cutter Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG Integral Thread Milling Cutters
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  **Solid Thread Milling Cutter** refers to a comprehensive category of tools used for creating threads, encompassing various designs optimized for different thread types, sizes, and materials. Our professional range includes 16 distinct types from Metric Single Tooth to BSPT British Taper Pipe Thread Milling Cutters, engineered with ultra-fine grain tungsten carbide construction and advanced coating technologies for superior performance in demanding threading applications across all industries.
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
                    src="/images/Integral-Steel.png"
                    alt="Collection of Integral Thread Milling Cutters"
                    width={500}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
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
          {/* System Performance Analysis */}
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
                      The performance of MZG Solid Thread Milling Cutters is comprehensively engineered to address the complex requirements of precision threading across diverse materials and thread standards. Our **16 distinct types** cover the full spectrum from <strong>Metric Single Tooth</strong> to <strong>BSPT British Taper Pipe</strong> applications, each optimized for specific pitch ranges, thread forms, and material compatibility.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Our cutters are manufactured from high-quality <strong>ultra-fine grain tungsten carbide</strong> with specialized compositions including <strong>Co8% to Co10% content</strong> for enhanced toughness and thermal resistance. This material foundation ensures cutting edges maintain sharpness and effectiveness when threading challenging materials from standard steels to <strong>hardened materials up to HRC65</strong>.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      Advanced <strong>Balchals Ultra H, Balchals DR, TiAlN, and DLC coating technologies</strong> provide multi-layered protection with increased surface hardness, enhanced lubricity for reduced friction, and thermal barrier properties for high-speed threading operations. This enables specialized processing of stainless steel, high-temperature alloys, titanium alloys, and heat-treated materials.
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      The comprehensive range includes single-tooth designs for versatile multi-pitch applications, three-tooth configurations for enhanced stability and productivity, and full-profile cutters for complete thread creation including crest machining. Each type offers specific advantages in thread quality, surface finish, and process reliability across metric, unified, pipe, and specialty thread standards.
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
                      <span className="text-sm"><strong>Material:</strong> Ultra-Fine Grain Tungsten Carbide</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Compositions:</strong> Co8%-Co10% content</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Coatings:</strong> Balchals Ultra H, Balchals DR, TiAlN, DLC</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Hardness Range:</strong> Up to HRC65</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Thread Types:</strong> 16 distinct configurations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-red-600 mr-2 shrink-0 mt-1" />
                      <span className="text-sm"><strong>Standards:</strong> Metric, UN, NPT, BSPT, PG</span>
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
                      {product.description && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-600">{product.description}</p>
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
                    src={galleryImages[currentMainImage] || defaultThreadMillImages[0]}
                    alt="Thread Milling Cutter Product"
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
                  ? galleryImages[imageIndex] || defaultThreadMillImages[imageIndex % defaultThreadMillImages.length]
                  : defaultThreadMillImages[index % defaultThreadMillImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Thread Milling Cutter Product ${index + 1}`}
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
                    case "Thread Standards & Coatings":
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
                    <span><strong>Aerospace Industry:</strong> Critical threading in titanium alloys, Inconel, and hardened materials up to HRC65 for structural components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Medical Device Manufacturing:</strong> Precision threading in stainless steel and biocompatible materials with strict tolerances</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Oil and Gas Industry:</strong> Pipe threading for NPT, NPTF, and BSPT applications in high-strength alloys</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Automotive Industry:</strong> High-volume threading in hardened steels and aluminum alloys with consistent quality</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Mold and Die Making:</strong> Threading in tool steels and heat-treated materials with superior surface finish</span>
                  </li>
                </ul>
              </div>

              {/* Processing Operations */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-3" />
                  Threading Operations
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Internal Threading:</strong> Blind hole threading with excellent chip evacuation and minimal cutting forces</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>External Threading:</strong> Cylindrical and tapered thread creation with both left and right-hand capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Multi-Pitch Threading:</strong> Single-tooth versatility for various pitches and diameters in one tool</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Full Profile Threading:</strong> Complete thread form creation including crest machining in single operation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>High-Precision Threading:</strong> Tight tolerance threading with superior surface finish and form accuracy</span>
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
                    <span><strong>Versatile Thread Creation:</strong> Single-tooth, three-tooth, and full-profile configurations for all thread types and standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Superior Material Compatibility:</strong> Threading capabilities in materials from standard steels to HRC65 hardened alloys</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Process Security:</strong> Non-contact cutting reduces tool breakage risk and provides superior process control</span>
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
                    <span><strong>Advanced Coating Technology:</strong> Balchals Ultra H, Balchals DR, and DLC coatings for enhanced performance and tool life</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Comprehensive Thread Standards:</strong> Coverage of metric, unified, NPT, BSPT, and PG thread specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Economic Efficiency:</strong> Reduced machine downtime and improved productivity through extended tool life and versatility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/threading/integral-thread-milling-cutters" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Thread Milling Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our technical team can help you select optimal solid thread milling cutters for specific thread standards, material requirements, and precision threading applications. From metric and unified threads to specialized pipe and PG standards, we provide comprehensive threading solutions for all industries.
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
                // Define all categories in the same threading directory
                const allThreadingCategories = [
                  {
                    title: "Taps",
                    image: "/images/L15-1.png",
                    description: "High-performance tapping tools for internal threads",
                    url: "/standard-tools/threading/taps",
                  },
                  {
                    title: "Thread Mills",
                    image: "/images/L05-1.png",
                    description: "Precision thread milling cutters",
                    url: "/standard-tools/threading/thread-mills",
                  },
                  {
                    title: "Thread Turning",
                    image: "/images/L16-1.png",
                    description: "Lathe tools for external thread creation",
                    url: "/standard-tools/threading/thread-turning",
                  },
                  {
                    title: "Threading Inserts",
                    image: "/images/L17-1.png",
                    description: "Indexable threading inserts for turning",
                    url: "/standard-tools/inserts/threading",
                  },
                  {
                    title: "Thread Whirling",
                    image: "/images/L18-1.png",
                    description: "High-productivity thread whirling tools",
                    url: "/standard-tools/threading/thread-whirling",
                  },
                ];
                
                return allThreadingCategories.slice(0, 5).map((category, index) => (
                  <ProductCard key={index} image={category.image} title={category.title} category="Threading Tools" url={category.url} />
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
