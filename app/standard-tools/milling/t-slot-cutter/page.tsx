"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target, Drill, Wrench, Cog, CircleDot, Crosshair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FAQSectionEn from "@/components/faq-section-en"
import { useState, useEffect } from "react"

export default function TSlotCutterPage() {
  // T-Slot Cutters相关的默认图片
  const defaultTSlotImages = [
    "/images/SWT.png",
    "/images/SWTS.png", 
    "/images/SWTI.png",
    "/images/SWST.png",
    "/images/AL-TXD.png",
    "/images/SWD45.png",
    "/images/SWD60.png",
    "/images/SWDT60.png"
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
      const response = await fetch("/api/admin-mzg/product-gallery?pagePath=/standard-tools/milling/t-slot-cutter");
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.images.length > 0) {
          const imageUrls = data.images.map((img: any) => img.imageUrl);
          setGalleryImages(imageUrls);
        } else {
          // API返回成功但没有图片，使用默认T-Slot图片
          setGalleryImages(defaultTSlotImages);
        }
      } else {
        // API请求失败，使用默认T-Slot图片
        setGalleryImages(defaultTSlotImages);
      }
    } catch (error) {
      console.error("加载图片失败:", error);
      // 网络错误或其他异常，使用默认T-Slot图片
      setGalleryImages(defaultTSlotImages);
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Auto-rotate effect
  useEffect(() => {
    // 首先设置默认T-Slot图片，避免显示无关图片
    setGalleryImages(defaultTSlotImages);
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
      id: "tsc-005",
      name: "Welding edge type ultra-fine particle tungsten steel T-type milling cutter (flat tooth edge)",
      image: "/images/SWT.png",
      description: "Ultra-fine particle tungsten steel T-type milling cutter with welding edge technology",
      flutes: "4,6,8,10",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWT",
      // Dimensions as separate fields
      d1: "7-30mm",
      d: "12-32mm",
      D: "16-60mm",
      H: "3,4,5,6,8,10,12",
      l1: "15-20mm",
      L: "100-140mm",
      T: "4,6,8,10",
      page: "F35",
      // Additional specifications
      application: "Precision T-slot machining with welding edge technology",
      url: "/standard-tools/milling/t-slot-cutter/swt-series",
    },
    {
      id: "tsc-006",
      name: "Welding edge type ultra-fine particle tungsten steel T-type milling cutter (Thousand Birds)",
      image: "/images/SWTS.png",
      description: "Ultra-fine particle tungsten steel T-type milling cutter with Thousand Birds edge design",
      flutes: "4,6,8,10",
      material: "Tungsten Steel",
      coating: "Welding Edge - Thousand Birds",
      series: "SWTS",
      // Dimensions as separate fields
      d1: "7-30mm",
      d: "12-32mm",
      D: "16-60mm",
      H: "3,4,5,6,8,10,12",
      l1: "15-20mm",
      L: "100-140mm",
      T: "4,6,8,10",
      page: "F35",
      // Additional specifications
      application: "Advanced T-slot machining with Thousand Birds edge technology for enhanced chip evacuation",
      url: "/standard-tools/milling/t-slot-cutter/swts-series",
    },
    {
      id: "tsc-007",
      name: "Welding edge type ultra-fine particle tungsten steel T-type milling cutter (flat tooth edge)",
      image: "/images/SWTI.png",
      description:
        "Ultra-fine particle tungsten steel T-type milling cutter with welding edge technology - Imperial sizing",
      flutes: "4,5,6",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWTI",
      // Dimensions as separate fields - Imperial measurements
      d1: "10-15mm",
      d: '1/2"',
      D: '3/4"-1"1/4',
      H: '1/8"-5/16"',
      l1: "12mm",
      L: '2"1/4-2"3/4',
      T: "4,5,6",
      page: "F35",
      // Additional specifications
      application: "Precision T-slot machining with welding edge technology - Imperial standard sizing",
      url: "/standard-tools/milling/t-slot-cutter/swti-series",
    },
    {
      id: "tsc-008",
      name: "Welding edge type ultra-fine particle tungsten steel T-type milling cutter (flat tooth edge)",
      image: "/images/SWST.png",
      description:
        "Heavy-duty ultra-fine particle tungsten steel T-type milling cutter with welding edge technology - Large diameter",
      flutes: "14,16,18",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWST",
      // Dimensions as separate fields - Mixed measurements
      d1: "55-70mm",
      d: '1"1/4',
      D: "100-150mm",
      H: "16-20mm",
      L: "60mm",
      T: "14,16,18",
      page: "F35",
      // Additional specifications
      application: "Heavy-duty T-slot machining for large workpieces and industrial applications",
      url: "/standard-tools/milling/t-slot-cutter/swst-series",
    },
    {
      id: "tsc-009",
      name: "Tungsten Steel T-Groove Side Milling Cutter Can Cut Steel",
      image: "/images/AL-TXD.png",
      description:
        "Specialized tungsten steel T-groove side milling cutter designed for aluminum machining applications",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Aluminum Optimized",
      series: "AL-TXD..",
      // Dimensions as separate fields - Aluminum specific sizing
      D1: "4-12mm",
      H: "0.5-3mm",
      D2: "1.5-5mm",
      L: "50-75mm",
      // Additional specifications
      application: "T-slot milling cutter for aluminum",
      page: "F36",
      url: "/standard-tools/milling/t-slot-cutter/al-txd-series",
    },
    {
      id: "tsc-010",
      name: "Tungsten Steel T-Groove Side Milling Cutter Can Cut Steel",
      image: "/images/AL-TXD.png",
      description: "Bronze T-groove coated milling cutter for enhanced performance in steel cutting applications",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Bronze Coating",
      series: "TXD",
      // Dimensions as separate fields - Same as AL-TXD but for steel applications
      D1: "4-12mm",
      H: "0.5-3mm",
      D2: "1.5-5mm",
      L: "50-75mm",
      page: "F36",
      // Additional specifications
      application: "Bronze T-groove coated milling cutter",
      url: "/standard-tools/milling/t-slot-cutter/txd-series",
    },
    {
      id: "tsc-011",
      name: "Round Head T-Groove Cutter",
      image: "/images/AL-BBTXD.png",
      description: "Specialized round head T-groove cutter designed for aluminum machining applications",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Aluminum Optimized",
      series: "AL-BBTXD",
      // Dimensions as separate fields - Round head specific sizing
      D: "3-12mm",
      R: "1.5-6mm",
      page: "F36",
      // Additional specifications
      application: "T-slot milling cutter for aluminum",
      url: "/standard-tools/milling/t-slot-cutter/al-bbtxd-series",
    },
    {
      id: "tsc-012",
      name: "Round Head T-Groove Cutter",
      image: "/images/BBTXD.png",
      description: "Bronze coated round head T-groove cutter for enhanced performance in steel cutting applications",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Bronze Coating",
      series: "BBTXD",
      // Dimensions as separate fields - Same dimensions as AL-BBTXD but for steel applications
      D: "3-12mm",
      R: "1.5-6mm",
      page: "F36",
      // Additional specifications
      application: "Bronze T-groove coated milling cutter",
      url: "/standard-tools/milling/t-slot-cutter/bbtxd-series",
    },
    {
      id: "tsc-013",
      name: "Welding edge type ultra-fine particle tungsten steel tail groove milling cutter -45°",
      image: "/images/SWD45.png",
      description:
        "Ultra-fine particle tungsten steel tail groove milling cutter with 45° welding edge technology for dovetail slot machining",
      flutes: "4,6",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWD45",
      // Dimensions as separate fields
      D: "20-65mm",
      H: "6-20mm",
      d1: "9-21mm",
      l1: "15,20",
      α: "45°",
      d: "12-25mm",
      L: "95-110mm",
      T: "4,6",
      page: "F37",
      // Additional specifications
      application: "Precision dovetail slot machining with 45° welding edge technology",
      url: "/standard-tools/milling/t-slot-cutter/swd45-series",
    },
    {
      id: "tsc-014",
      name: "Welding edge type ultra-fine particle tungsten steel tail groove milling cutter -60°",
      image: "/images/SWD60.png",
      description:
        "Ultra-fine particle tungsten steel tail groove milling cutter with 60° welding edge technology for wide-angle dovetail slot machining",
      flutes: "4,6",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWD60",
      // Dimensions as separate fields
      D: "20-65mm",
      H: "8-32mm",
      d1: "9-25mm",
      l1: "15,20",
      α: "60°",
      d: "12-32mm",
      L: "90-120mm",
      T: "4,6",
      page: "F37",
      // Additional specifications
      application: "Precision wide-angle dovetail slot machining with 60° welding edge technology",
      url: "/standard-tools/milling/t-slot-cutter/swd60-series",
    },
    {
      id: "tsc-015",
      name: "Welding edge type ultra-fine particle tungsten steel dovetail cylindrical milling cutter -60°",
      image: "/images/SWDT60.png",
      description:
        "Heavy-duty ultra-fine particle tungsten steel dovetail cylindrical milling cutter with 60° welding edge technology for large-scale dovetail slot machining",
      flutes: "8,10,12",
      material: "Tungsten Steel",
      coating: "Welding Edge",
      series: "SWDT60",
      // Dimensions as separate fields
      D: "80-150mm",
      H: "30-55mm",
      d1: "42-80mm",
      d: '1"-1"1/2',
      L: "60-75mm",
      T: "8,10,12",
      page: "F37",
      // Additional specifications
      application: "Heavy-duty cylindrical dovetail slot machining for large industrial applications",
      url: "/standard-tools/milling/t-slot-cutter/swdt60-series",
      α: "60°",
    },
    {
      id: "tsc-016",
      name: "Tungsten Steel Dovetail Groove Milling Cutter Can Cut Steel Below 60HRC",
      image: "/images/AL-YWD.png",
      description:
        "Specialized tungsten steel dovetail groove milling cutter designed for aluminum applications, capable of cutting steel below 60HRC",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Aluminum Optimized",
      series: "AL-YWD",
      // Dimensions as separate fields
      D1: "4-12mm",
      D2: "1.5-5mm",
      D: "4-12mm",
      L1: "6-12mm",
      L: "50-60mm",
      α: "90°",
      page: "F38",
      // Additional specifications
      application: "Aluminum dovetail groove milling cutter",
      url: "/standard-tools/milling/t-slot-cutter/al-ywd-series",
    },
    {
      id: "tsc-017",
      name: "Tungsten Steel Dovetail Groove Milling Cutter Can Cut Steel Below 60HRC",
      image: "/images/AL-YWD.png",
      description:
        "Bronze coated tungsten steel dovetail groove milling cutter designed for steel cutting applications below 60HRC",
      flutes: "2,3,4",
      material: "Tungsten Steel",
      coating: "Bronze Coating",
      series: "YWD",
      // Dimensions as separate fields
      D1: "4-12mm",
      D2: "1.5-5mm",
      D: "4-12mm",
      L1: "6-12mm",
      L: "50-60mm",
      α: "90°",
      page: "F38",
      // Additional specifications
      application: "Bronze dovetail groove coated milling cutter",
      url: "/standard-tools/milling/t-slot-cutter/ywd-series",
    },
  ]

  // Technical specifications - matching fillet page structure
  const technicalSpecs = [
    {
      title: "Material & Construction",
      description: "Ultra-fine particle Tungsten Steel construction with exceptional hardness and wear resistance. Welding T-type cutters feature cutting inserts welded onto tool body for mold processing applications. Available in multiple flute configurations (2-24 flutes) optimized for different material removal rates and surface finish requirements.",
    },
    {
      title: "Cutter Profiles & Coating",
      description: "Three main categories: Welding T-type with flat tooth edge or Thousand Birds edge, Tungsten steel T-groove side cutters with bronze/nano coatings, and Dovetail groove cutters (45°, 60°, 90°). Advanced coating technologies including welding edge technology, bronze coating for enhanced lubricity, and nano coating for thermal protection.",
    },
    {
      title: "Dimensional Parameters",
      description: "Comprehensive size range from 3mm to 200mm diameter. Standard nomenclature includes: d1 (neck diameter), d (head diameter), D (shank diameter), H (slot height), L (overall length), T (flute count). Imperial sizing available for SWTI series. Custom dimensions and OEM support available for specialized applications.",
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
                  T-Slot Cutter Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MZG T-Slot Cutter System
                </h1>
                <p className="text-sm mb-8 text-gray-600 leading-relaxed">
                  T-slot cutters are a specialized type of milling cutter specifically designed for machining T-slots. These slots are widely used in machine tables, fixtures, and other components for inserting and securing T-head bolts. Our comprehensive T-slot cutter system includes Welding T-type milling cutters for mold processing, Tungsten steel T-groove side milling cutters for general applications, and Dovetail groove milling cutters for precision mechanical connections with various angle configurations (45°, 60°, 90°).
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
                    src="/images/milling.png"
                    alt="MZG Professional T-Slot Cutter System"
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
                    <strong>T-slot cutters</strong> are a specialized type of milling cutter specifically designed for machining T-slots. 
                    These slots are widely used in machine tables, fixtures, and other components for inserting and securing T-head bolts. 
                    T-slots are a fundamental feature in numerous industrial applications, prominently including machine tool table beds 
                    (e.g., on milling machines and drill presses), workholding fixtures, and various assembly components where adjustable 
                    and secure clamping is paramount.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The cutter's distinct geometry features a smaller diameter neck positioned behind a larger diameter cutting head. 
                    This design allows the tool to first enter a pre-machined straight slot (often created by an end mill or slot drill 
                    of appropriate width) and subsequently cut laterally to form the wider, undercut sections that define the characteristic "T" profile.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Our T-slot cutters include three main categories: <strong>Welding T-type milling cutters</strong> featuring cutting inserts 
                    welded onto the tool body for mold processing, <strong>Tungsten steel T-groove side milling cutters</strong> for general 
                    T-slot machining in steel and non-ferrous metals, and <strong>Dovetail groove milling cutters</strong> specifically designed 
                    for machining dovetail slots with various angle configurations (45°, 60°, 90°).
                  </p>
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
                      <span className="text-sm"><strong>Material:</strong> Ultra-fine particle tungsten steel</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Diameter Range:</strong> 3mm to 200mm</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Coatings:</strong> Welding Edge, Bronze, Nano coating</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Angle Options:</strong> 45°, 60°, 90°, Standard T</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Applications:</strong> Steel below HRC60°, Aluminum, Copper</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Special Features:</strong> Flat tooth edge, Thousand Birds edge</span>
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
                    src={galleryImages[currentMainImage] || defaultTSlotImages[0]}
                    alt="T-Slot Cutter Product"
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
                  ? galleryImages[imageIndex] || defaultTSlotImages[imageIndex % defaultTSlotImages.length]
                  : defaultTSlotImages[index % defaultTSlotImages.length];
                
                return (
                  <div 
                    key={index}
                    className="col-span-1 row-span-2 bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors duration-300 overflow-hidden group"
                    onClick={() => galleryImages.length > 0 && setCurrentMainImage((currentMainImage + index + 1) % galleryImages.length)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`T-Slot Cutter Product ${index + 1}`}
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
                    case "Cutter Profiles & Coating":
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
                    <span><strong>Mold Processing:</strong> Primary application for welding T-type milling cutters in creating precise T-slots for mold assembly and clamping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Machine Tool Manufacturing:</strong> Creating T-slots on machine tables, angle plates, and workholding fixtures for versatile clamping systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Automation & Robotics:</strong> T-slots serve as linear guide rails and mounting points for sensors, guards, and positioning equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Aerospace & Automotive:</strong> Precision T-slots and dovetail slots for component mounting and structural connections requiring high accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>General Engineering:</strong> Fixture preparation, assembly component machining, and specialized undercutting operations</span>
                  </li>
                </ul>
              </div>

              {/* Application Processing */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Settings className="h-6 w-6 text-green-600 mr-3" />
                  Application Processing
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Steel Processing (HRC55-60°):</strong> Bronze-coated and nano-coated T-groove cutters for enhanced wear resistance and heat protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Aluminum & Non-ferrous Metals:</strong> Uncoated specialized cutters (AL-TXD, AL-YWD series) optimized for non-reactive processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Welding Edge Technology:</strong> Ultra-fine particle tungsten steel with welded cutting inserts for superior chip evacuation and heavy-duty cutting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Dovetail Slot Machining:</strong> Specialized 45°, 60° angle cutters for precision sliding connections and mechanical positioning structures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Thousand Birds Edge Design:</strong> Advanced chip breaking geometry for improved chip evacuation in deep slot milling applications</span>
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
                    <span><strong>Workholding and Fixturing:</strong> T-slots on machine tables and fixtures allow T-nuts to be engaged, providing robust and versatile clamping systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Guide Rails and Tracks:</strong> T-slots serve as linear guide systems for moving components within machinery and automation equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Specialized Undercutting:</strong> Unique ability to remove material beneath overhanging surfaces, not achievable with standard end mills</span>
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
                    <span><strong>Precision Profile Creation:</strong> Consistent production with high dimensional accuracy and tight geometric tolerances for critical applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Enhanced Productivity:</strong> Optimal cutting parameters, superior durability, and extended tool life for reduced downtime</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span><strong>Component Mounting:</strong> Standardized method for mounting sensors, guards, and accessories with adjustability and quick removal capability</span>
                  </li>
                </ul>
                </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-5">
            <FAQSectionEn pageUrl="/standard-tools/milling/t-slot-cutter" />
          </div>

          {/* CTA Section */}
          <div className="bg-white py-5">
            <div className="container mx-auto px-4 border border-gray-200 rounded-2xl shadow-sm">
              <div className="mx-auto text-center px-8 py-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional T-Slot Cutter Solutions?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our technical team can help you select optimal T-slot cutters for specific machining requirements, from welding T-type milling cutters for mold processing to dovetail groove cutters for precision mechanical connections. We provide comprehensive T-slot and dovetail machining solutions for all materials and applications.
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
                    title: "Fillet End Mills",
                    image: "/images/2F45CR.png",
                    description: "Corner radius end mills for enhanced strength",
                    url: "/standard-tools/milling/fillet",
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
                  title: "Chamfer Mills",
                    image: "/images/f32-01.png",
                    description: "Tools for creating chamfers and beveled edges",
                  url: "/standard-tools/milling/chamfer",
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
