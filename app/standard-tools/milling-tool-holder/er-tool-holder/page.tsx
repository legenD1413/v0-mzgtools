"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronRight, Download, Info, Zap, Shield, Cog, Wrench, Settings } from "lucide-react"

export default function ERToolHolderPage() {
  const performanceFeatures = [
    {
      icon: "zap",
      title: "Versatility",
      description: "Wide clamping range with ER collets accommodating various tool shank diameters in a single holder"
    },
    {
      icon: "shield", 
      title: "High-Speed Stability",
      description: "Precision balanced designs achieving G6.3 standard and G2.5 high-speed balance grades"
    },
    {
      icon: "cog",
      title: "Optimized Design",
      description: "Non-eccentric round nuts and M-Type small diameter variants for specialized applications"
    }
  ]

  const products = [
    {
      id: 1,
      name: "ISO-ER Milling Machine Tool Holder",
      image: "/images/c41-1.png",
      series: "ISO-ER",
      balanceGrade: "G2.5 @ 25,000 RPM",
      application: "A high-speed tool holder for engraving machines, featuring precision ground threads, external hex nuts for ER16/ER20 collets, and balanced to G2.5, 25000RPM.",
      pageNumber: "C41"
    },
    {
      id: 2,
      name: "BT-GER Milling Machine Tool Holder",
      image: "/images/c42-1.png",
      series: "BT-GER",
      balanceGrade: "Non-eccentric Round Nut",
      application: "A high-speed tool holder for carving and milling machines, equipped with a non-eccentric, full balanced round nut for reduced noise and minimal wind resistance.",
      pageNumber: "C42"
    },
    {
      id: 3,
      name: "BT-ER Milling Machine Tool Holder",
      image: "/images/c43-1.png",
      series: "BT-ER",
      balanceGrade: "G6.3 @ 10,000 RPM",
      application: "Features precision ground threads, with external hex nuts for ER16/ER20 and a standard nut for other sizes (optional strong nuts available); dynamically balanced to G6.3, 10000RPM (higher speeds on request).",
      pageNumber: "C43"
    },
    {
      id: 4,
      name: "BT-ER-M Milling Machine Tool Holder",
      image: "/images/c44-1.png",
      series: "BT-ER-M",
      balanceGrade: "G6.3 @ 10,000 RPM",
      application: "Utilizes small diameter nuts to prevent interference, features precision ground threads, and is balanced to G6.3, 10000RPM.",
      pageNumber: "C44"
    },
    {
      id: 5,
      name: "BT-ER Collet Chuck Group",
      image: "/images/c45-1.png",
      series: "BT-ER Group",
      balanceGrade: "Comprehensive Set",
      application: "A comprehensive set of ER collet chuck tool holders, designed for various clamping ranges.",
      pageNumber: "C45"
    },
    {
      id: 6,
      name: "DAT-ER Milling Machine Tool Holder",
      image: "/images/c46-1.png",
      series: "DAT-ER",
      balanceGrade: "G6.3 @ 10,000 RPM",
      application: "Equipped with precision ground threads, featuring external hex nuts for ER16/ER20 and a standard nut for other sizes (optional strong nuts available); dynamically balanced to G6.3, 10000RPM.",
      pageNumber: "C46"
    },
    {
      id: 7,
      name: "DAT-ER Milling Machine Tool Holder (M Type)",
      image: "/images/c46-2.png",
      series: "DAT-ER-M",
      balanceGrade: "M-Type Design",
      application: "An M-type ER tool holder with small diameter nuts to avoid interference, suitable for milling.",
      pageNumber: "C46"
    },
    {
      id: 8,
      name: "HSK-ER Milling Machine Tool Holder",
      image: "/images/c47-1.png",
      series: "HSK-ER",
      balanceGrade: "G2.5 @ 25,000 RPM",
      application: "The tool holder's rotation undergoes balance testing, capable of achieving G2.5 at 25000RPM; designed to securely clamp various diameter tools.",
      pageNumber: "C47"
    },
    {
      id: 9,
      name: "NT-ER Milling Machine Tool Holder",
      image: "/images/c47-2.png",
      series: "NT-ER",
      balanceGrade: "G2.5 @ 25,000 RPM",
      application: "The tool holder's rotation is balance-tested, achieving G2.5 at 25000RPM; suitable for clamping a wide range of tool diameters.",
      pageNumber: "C47"
    },
    {
      id: 10,
      name: "MT-ER Milling Machine Tool Holder",
      image: "/images/c48-1.png",
      series: "MT-ER",
      balanceGrade: "G2.5 @ 25,000 RPM",
      application: "The tool holder's rotation is balance-tested, achieving G2.5 at 25000RPM; capable of clamping various diameter tools.",
      pageNumber: "C48"
    },
    {
      id: 11,
      name: "R8-ER Milling Machine Tool Holder",
      image: "/images/c48-2.png",
      series: "R8-ER",
      balanceGrade: "G2.5 @ 25,000 RPM",
      application: "The tool holder's rotation is balance-tested, achieving G2.5 at 25000RPM; designed to clamp various diameter tools.",
      pageNumber: "C48"
    },
    {
      id: 12,
      name: "C-ER-M Straight Shank ER Collet Chuck Holder",
      image: "/images/c50-1.png",
      series: "C-ER-M",
      balanceGrade: "M-Type Small Diameter",
      application: "A straight shank ER collet extension rod, where the M-type utilizes small diameter nuts to prevent interference.",
      pageNumber: "C50"
    },
    {
      id: 13,
      name: "C-ER-A Straight Shank ER Collet Chuck Holder",
      image: "/images/c51-1.png",
      series: "C-ER-A",
      balanceGrade: "Standard Extension",
      application: "A straight shank ER collet extension rod.",
      pageNumber: "C51"
    },
    {
      id: 14,
      name: "ER Extension (For Lathe)",
      image: "/images/c50-2.png",
      series: "ER Extension",
      balanceGrade: "Lathe Application",
      application: "An ER extension rod specifically designed for lathe applications.",
      pageNumber: "C50"
    }
  ]

  const technicalSpecs = [
    {
      title: "Balance Grades",
      description: "G6.3 at 8,000 RPM (Standard), G2.5 at 25,000-40,000 RPM (High-Speed)",
      color: "border-red-500"
    },
    {
      title: "Taper Interfaces", 
      description: "ISO, BT, DAT, HSK, NT, MT, R8 - comprehensive compatibility",
      color: "border-blue-500"
    },
    {
      title: "Construction Materials",
      description: "High-grade SCM-21 steel for enhanced rigidity and wear resistance",
      color: "border-green-500"
    },
    {
      title: "Special Features",
      description: "Non-eccentric round nuts, M-Type small diameter variants, plastic ring protection",
      color: "border-purple-500"
    }
  ]

  const specifications = [
    { label: "Collet System", value: "ER11, ER16, ER20, ER25, ER32, ER40" },
    { label: "Clamping Range", value: "1-26mm (varies by collet size)" },
    { label: "Run-out Accuracy", value: "≤0.005mm" },
    { label: "Maximum Speed", value: "Up to 40,000 RPM" },
    { label: "Balance Grade", value: "G6.3 / G2.5" },
    { label: "Material", value: "SCM-21 Steel" },
    { label: "Surface Treatment", value: "Precision Ground" },
    { label: "Temperature Range", value: "-20°C to +150°C" }
  ]

  const renderIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6 text-red-600" }
    
    switch (iconName) {
      case "zap":
        return <Zap {...iconProps} />
      case "shield":
        return <Shield {...iconProps} />
      case "cog":
        return <Cog {...iconProps} />
      case "tool":
        return <Wrench {...iconProps} />
      case "settings":
        return <Settings {...iconProps} />
      default:
        return <Wrench {...iconProps} />
    }
  }

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
                  ER Tool Holder Expert Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  ER Tool Holder System
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  Expert analysis of the ER Tool Holder system. This document provides a detailed technical overview of one of the most ubiquitous and versatile clamping solutions in modern machining, renowned for its broad applicability, reliable precision, and wide range of configurations.
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
                    src="/images/er-tool-holder-hero.png"
                    alt="ER Tool Holder System"
                    width={563}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
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
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The ER Tool Holder system represents the pinnacle of versatile clamping technology, designed to provide exceptional flexibility across diverse machining applications. The system's core strength lies in its use of <strong>ER collets</strong>, which feature a wide clamping range. This allows a single collet to securely clamp various tool shank diameters, making the ER holder a universal solution for holding drills, end mills, reamers, and taps. This adaptability reduces the need for numerous single-size tool holders, streamlining tool inventory and setup processes.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    ER tool holders are engineered for both general and high-performance cutting. They feature <strong>precision balanced designs</strong>, with standard models achieving a balance grade of <strong>G6.3 at 8,000 RPM</strong>. For more demanding applications, specialized high-speed versions (like the ISO-GER and HSK series) are balanced to a superior grade of <strong>G2.5 at speeds up to 40,000 RPM</strong>. This high degree of balance minimizes vibration, ensures stable cutting performance, improves workpiece surface finish, and significantly extends tool life.
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    The system incorporates several design variations tailored for specific needs. High-speed models (ISO-GER, BT-GER) utilize a <strong>non-eccentric, full balanced round nut</strong> that reduces noise and minimizes wind resistance during high RPM operations. Meanwhile, <strong>M-Type variants</strong> feature a <strong>small diameter nut</strong>, designed to prevent interference with the workpiece or fixtures during complex 5-axis or tight-clearance machining. Select series are constructed from high-grade <strong>SCM-21 steel</strong> for enhanced rigidity and wear resistance.
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
                      <span>
                        <strong>Balance Grades:</strong> G6.3 (Standard), G2.5 (High-Speed)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Max Speed:</strong> Up to 40,000 RPM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Interfaces:</strong> ISO, BT, DAT, HSK, NT, MT, R8
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Material:</strong> SCM-21 Steel (Select series)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Protection:</strong> Plastic ring (HSK, NT series)
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
                  <div className="relative w-full bg-white" style={{ height: "200px" }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 border-t">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold line-clamp-2 flex-1 mr-2">{product.name}</h3>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">{product.pageNumber}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      {product.series && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Series:</span>
                          <span className="text-gray-900">{product.series}</span>
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

          {/* Technical Parameters */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technical Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Technical Specifications</h3>
                <div className="p-4 space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className={`border-l-4 ${spec.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{spec.title}</h4>
                      <p className="text-gray-600 text-sm">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Specifications</h3>
                <div className="divide-y divide-gray-100">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-4">
                      <span className="font-medium text-sm text-gray-700">{spec.label}:</span>
                      <span className="text-sm text-gray-900 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Application Scenarios */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6 py-4">
                  <h3 className="text-xl font-bold mb-2">General Purpose Machining</h3>
                  <p className="text-gray-600">
                    Ideal for milling, drilling, reaming, and tapping operations across various materials. The wide clamping range accommodates different tool sizes with a single holder setup.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6 py-4">
                  <h3 className="text-xl font-bold mb-2">High-Speed Precision Work</h3>
                  <p className="text-gray-600">
                    High-speed variants (GER series) excel in precision finishing operations, achieving superior surface quality at speeds up to 40,000 RPM.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h3 className="text-xl font-bold mb-2">5-Axis Complex Machining</h3>
                  <p className="text-gray-600">
                    M-Type small diameter nuts prevent workpiece interference during complex multi-axis operations and tight clearance situations.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6 py-4">
                  <h3 className="text-xl font-bold mb-2">Tool Room Applications</h3>
                  <p className="text-gray-600">
                    Perfect for prototype development and small batch production where tool flexibility and quick changeovers are essential.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6 py-4">
                  <h3 className="text-xl font-bold mb-2">Deep Cavity Machining</h3>
                  <p className="text-gray-600">
                    Extension variants (C-ER series) provide extended reach for deep cavity work while maintaining clamping versatility.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6 py-4">
                  <h3 className="text-xl font-bold mb-2">Production Environments</h3>
                  <p className="text-gray-600">
                    Robust construction and reliable clamping make ER holders suitable for continuous production with minimal maintenance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Usage Notes */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Important Usage Notes</h2>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-500 rounded-full p-1 mt-1">
                  <Info className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">Critical Safety and Performance Guidelines</h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Proper Collet Selection:</strong> Always use the correct ER collet size for your tool shank diameter. Oversized collets reduce clamping force and accuracy.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Tool Insertion Depth:</strong> Ensure tools are inserted to at least 75% of the collet length for optimal clamping force and concentricity.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Nut Tightening:</strong> Use proper ER wrenches and follow specified torque values. Over-tightening can damage collets and reduce accuracy.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Speed Limitations:</strong> Respect maximum RPM ratings for each series. High-speed variants require proper balance verification.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Collet Maintenance:</strong> Regular cleaning and inspection of collets ensures consistent clamping performance and prevents premature wear.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main Function */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Main Function</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                The main function of the ER Tool Holder system is <strong>to provide a highly versatile, reliable, and precise clamping interface between a wide variety of cutting tools and the machine spindle.</strong> It serves as the industry-standard solution for a broad spectrum of machining operations, effectively balancing performance, flexibility, and cost for applications ranging from general-purpose milling to high-speed precision manufacturing.
              </p>
            </div>
          </div>

          {/* Related Categories */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">SK High Speed</h3>
                <p className="text-sm text-gray-600 mb-4">High-precision tool holders for demanding applications</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
              <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">HM Hydraulic</h3>
                <p className="text-sm text-gray-600 mb-4">Hydraulic expansion tool holders for maximum precision</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
              <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">SR Shrink Fit</h3>
                <p className="text-sm text-gray-600 mb-4">Thermal clamping for superior rigidity</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
              <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">Power Tool Holder</h3>
                <p className="text-sm text-gray-600 mb-4">Strong tool holders for heavy-duty operations</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">Ready for Universal Precision Clamping?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our technical experts to find the perfect ER Tool Holder solution for your versatile machining applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Request Technical Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}