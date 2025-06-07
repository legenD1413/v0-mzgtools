"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, CircleDashed, Drill, Gauge, Layers, Wrench, FileText, Film, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>("milling")

  const handleMenuOpen = (menu: string) => {
    setActiveMenu(menu === activeMenu ? null : menu)

    // 设置默认活动分类
    if (menu === "standard" && activeCategory === null) {
      setActiveCategory("milling")
    } else if (menu === "custom" && activeCategory === null) {
      setActiveCategory("tool-holders")
    } else if (menu === "resources" && activeCategory === null) {
      setActiveCategory("technical")
    } else if (menu === "about" && activeCategory === null) {
      setActiveCategory("company")
    }
  }

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category)
  }

  const handleMenuClose = () => {
    setActiveMenu(null)
    setActiveCategory(null)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/mzg-logo.png" alt="MZG Tools" width={80} height={30} className="h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          {/* Standard Tools */}
          <div className="static">
            <button
              className={`flex items-center ${
                activeMenu === "standard" ? "text-red-600" : "text-gray-700"
              } hover:text-red-600`}
              onClick={() => handleMenuOpen("standard")}
            >
              Standard Tools <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {activeMenu === "standard" && (
              <>
                <div className="fixed inset-0 z-5 bg-black/5" onClick={handleMenuClose}></div>
                <div className="absolute left-0 right-0 top-16 z-30 w-screen border-t border-gray-100 shadow-lg">
                  <div className="w-full bg-white">
                    <div className="container mx-auto flex max-h-[calc(100vh-4rem)] overflow-hidden">
                      {/* 左侧分类菜单 - 深色背景 */}
                      <div className="w-1/4 bg-gray-50 py-6 overflow-y-auto">
                        <div className="px-6">
                          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">Categories</h3>
                          <ul className="space-y-2">
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "milling"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("milling")}
                              >
                                <CircleDashed
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "milling"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">MILLING CUTTING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "threading"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("threading")}
                              >
                                <Gauge
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "threading"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">THREAD MILLING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "inserts"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("inserts")}
                              >
                                <Layers
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "inserts"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">INSERTS</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "turning"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("turning")}
                              >
                                <CircleDashed
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "turning"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">TURNING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "boring"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("boring")}
                              >
                                <Drill
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "boring"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">BORING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "drilling"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("drilling")}
                              >
                                <Drill
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "drilling"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">DRILLING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "tapping"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("tapping")}
                              >
                                <Gauge
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "tapping"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">TAPPING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "grooving"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("grooving")}
                              >
                                <Layers
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "grooving"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">GROOVING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "workholding"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("workholding")}
                              >
                                <Wrench
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "workholding"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">WORKHOLDING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "grinding"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("grinding")}
                              >
                                <CircleDashed
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "grinding"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">GRINDING & POLISHING</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "accessories"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("accessories")}
                              >
                                <Wrench
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "accessories"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">MACHINE TOOL ACCESSORIES</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* 中间内容区域 - 白色背景 */}
                      <div className="w-1/2 bg-white p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
                        {/* 铣削工具子菜单 */}
                        {activeCategory === "milling" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Milling Tools</h3>
                            <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Basic End Mills</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/deep-ditch"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Deep Ditch End Milling Cutter
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/right-angle-flat"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Right Angel Flat End Mill
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/ball-end"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Ball End Mill
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/fillet"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Fillet End Mill
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Mills</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/chamfer"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Chamfer Mills
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/t-slot-cutter"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      T-Slot Cutter
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/side-milling-cutter"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Side Milling Cutter
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Advanced Mills</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/reamer"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Reamer
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/small-diameter"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Small Diameter Milling Cutter
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/rough"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Rough Milling Cutter
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/taper"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Taper End Mill
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling/welding-edge"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Welding Edge Milling Cutter
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Popular Milling Solutions</h4>
                              <p className="text-sm text-gray-600">
                                Discover our high-performance milling tools designed for precision and efficiency in the
                                most demanding applications.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 螺纹加工工具子菜单 */}
                        {activeCategory === "threading" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Thread Milling Tools</h3>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Internal Threading</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/standard-tools/threading/taps"
                                      className="flex items-center hover:text-red-600 py-1 text-xs transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Taps and Adjustable Circular Die
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/threading/integral-thread-milling-cutters"
                                      className="flex items-center hover:text-red-600 py-1 text-xs transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Integral Thread Milling Cutters
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/threading/inserts-type-thread-milling-cutter"
                                      className="flex items-center hover:text-red-600 py-1 text-xs transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Inserts Type Thread Milling Cutter
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Threading Excellence</h4>
                              <p className="text-sm text-gray-600">
                                Our thread milling tools provide precise thread profiles and superior surface finish for
                                all thread types and materials.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 刀片子菜单 */}
                        {activeCategory === "inserts" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Inserts</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Turning & Milling</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/standard-tools/inserts/turning"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Turning Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/inserts/milling"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Milling Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Inserts</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/standard-tools/inserts/threading"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Threading Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/inserts/grooving"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Grooving Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/inserts/drilling"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Drilling Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Advanced Insert Technology</h4>
                              <p className="text-sm text-gray-600">
                                Our inserts feature the latest coating technologies and geometries for maximum tool life
                                and cutting performance.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 右侧产品图片区域 */}
                      <div className="w-1/4 bg-white p-5 flex items-center justify-center border-l border-gray-100">
                        <div className="w-full h-auto max-h-[320px] flex items-center justify-center rounded-lg overflow-hidden">
                          <Image
                            src={`/abstract-geometric-shapes.png?height=400&width=400&query=${activeCategory || "product"}-tools`}
                            alt={activeCategory ? `${activeCategory} Tools` : "Product"}
                            width={400}
                            height={400}
                            className="object-cover w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Custom Tools - 使用相同的结构 */}
          <div className="static">
            <button
              className={`flex items-center ${
                activeMenu === "custom" ? "text-red-600" : "text-gray-700"
              } hover:text-red-600`}
              onClick={() => handleMenuOpen("custom")}
            >
              Custom Tools <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {activeMenu === "custom" && (
              <>
                <div className="fixed inset-0 z-5 bg-black/5" onClick={handleMenuClose}></div>
                <div className="absolute left-0 right-0 top-16 z-30 w-screen border-t border-gray-100 shadow-lg">
                  <div className="w-full bg-white">
                    <div className="container mx-auto flex max-h-[calc(100vh-4rem)] overflow-hidden">
                      {/* 左侧分类菜单 - 深色背景 */}
                      <div className="w-1/4 bg-gray-50 py-6 overflow-y-auto">
                        <div className="px-6">
                          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                            Custom Solutions
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "tool-holders"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("tool-holders")}
                              >
                                <Wrench
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "tool-holders"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">TOOL HOLDERS</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "turning-solutions"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("turning-solutions")}
                              >
                                <CircleDashed
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "turning-solutions"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">TURNING SOLUTIONS</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "special-inserts"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("special-inserts")}
                              >
                                <Layers
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "special-inserts"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">SPECIAL INSERTS</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* 中间内容区域 - 白色背景 */}
                      <div className="w-1/2 bg-white p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
                        {/* 自定义刀柄子菜单 */}
                        {activeCategory === "tool-holders" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Custom Tool Holders</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialized Holders</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/custom-tools/tool-holders/adapters"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Special Adapters
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/tool-holders/boring-bars"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Boring Bars
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Custom Solutions</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/custom-tools/tool-holders/collet-chucks"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Special Collet Chucks
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/tool-holders/extensions"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Tool Extensions
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Custom Engineering</h4>
                              <p className="text-sm text-gray-600">
                                Our engineering team can design and manufacture custom tool holders to meet your
                                specific requirements.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 车削解决方案子菜单 */}
                        {activeCategory === "turning-solutions" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Turning Solutions</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Custom Tools</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/custom-tools/turning-solutions/tools"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Turning Tools
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/turning-solutions/inserts"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Special Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Operations</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/custom-tools/turning-solutions/grooving"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Grooving Tools
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/turning-solutions/threading"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Threading Tools
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Custom Turning Solutions</h4>
                              <p className="text-sm text-gray-600">
                                Our custom turning solutions are designed to optimize your turning operations for
                                maximum productivity and part quality.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 特殊刀片子菜单 */}
                        {activeCategory === "special-inserts" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Special Inserts</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Turning & Milling</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/custom-tools/special-inserts/turning"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Turning Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/special-inserts/milling"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Milling Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Operations</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/custom-tools/special-inserts/grooving"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Grooving Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/special-inserts/threading"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Threading Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Custom Insert Solutions</h4>
                              <p className="text-sm text-gray-600">
                                Our custom inserts are designed to meet your specific machining requirements for
                                challenging materials and complex geometries.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 右侧产品图片区域 */}
                      <div className="w-1/4 bg-white p-5 flex items-center justify-center border-l border-gray-100">
                        <div className="w-full h-auto max-h-[320px] flex items-center justify-center rounded-lg overflow-hidden">
                          <Image
                            src={`/abstract-geometric-shapes.png?height=400&width=400&query=custom-${activeCategory || "product"}`}
                            alt={activeCategory ? `Custom ${activeCategory}` : "Custom Product"}
                            width={400}
                            height={400}
                            className="object-cover w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Resources - 使用相同的结构 */}
          <div className="static">
            <button
              className={`flex items-center ${
                activeMenu === "resources" ? "text-red-600" : "text-gray-700"
              } hover:text-red-600`}
              onClick={() => handleMenuOpen("resources")}
            >
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {activeMenu === "resources" && (
              <>
                <div className="fixed inset-0 z-5 bg-black/5" onClick={handleMenuClose}></div>
                <div className="absolute left-0 right-0 top-16 z-30 w-screen border-t border-gray-100 shadow-lg">
                  <div className="w-full bg-white">
                    <div className="container mx-auto flex max-h-[calc(100vh-4rem)] overflow-hidden">
                      {/* 左侧分类菜单 - 深色背景 */}
                      <div className="w-1/4 bg-gray-50 py-6 overflow-y-auto">
                        <div className="px-6">
                          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">Resources</h3>
                          <ul className="space-y-2">
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "catalogs"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("catalogs")}
                              >
                                <FileText
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "catalogs"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">PRODUCT CATALOGS</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "media"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("media")}
                              >
                                <Film
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "media"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">MEDIA</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "case-studies"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("case-studies")}
                              >
                                <BookOpen
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "case-studies"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">CASE STUDIES</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* 中间内容区域 - 白色背景 */}
                      <div className="w-1/2 bg-white p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
                        {/* 技术资源子菜单 */}
                        {activeCategory === "technical" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Technical Resources</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Guides & Notes</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/resources/technical/guides"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Technical Guides
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/technical/application-notes"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Application Notes
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Material Data</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/resources/technical/material-specs"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Material Specifications
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/technical/hardness-conversion"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Hardness Conversion Charts
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Expert Technical Support</h4>
                              <p className="text-sm text-gray-600">
                                Access our comprehensive technical resources to optimize your machining processes and
                                achieve superior results.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 产品目录子菜单 */}
                        {activeCategory === "catalogs" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Product Catalogs</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Standard Tools</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/resources/catalogs/milling"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Milling Tools Catalog
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/catalogs/turning"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Turning Tools Catalog
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/catalogs/drilling"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Drilling Tools Catalog
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Tools</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/resources/catalogs/threading"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Threading Tools Catalog
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/catalogs/tool-holders"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Tool Holders Catalog
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Download Our Catalogs</h4>
                              <p className="text-sm text-gray-600">
                                Browse our comprehensive product catalogs to find the perfect tools for your
                                applications.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 媒体资源子菜单 */}
                        {activeCategory === "media" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Media</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Videos</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/resources/media/product-demos"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Product Demonstration Videos
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/media/application-examples"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Application Example Videos
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Images</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/resources/media/product-images"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Product Images
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/media/application-images"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Application Images
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Explore Our Media Gallery</h4>
                              <p className="text-sm text-gray-600">
                                View our latest product demonstrations, application examples, and product images.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 案例分析子菜单 */}
                        {activeCategory === "case-studies" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Case Studies</h3>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Success Stories</h4>
                                <ul className="space-y-3">
                                  <li>
                                    <Link
                                      href="/resources/case-studies/automotive"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Automotive Industry Case Study
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/case-studies/aerospace"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Aerospace Industry Case Study
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/case-studies/medical"
                                      className="flex items-center hover:text-red-600 py-1.5 transition-colors"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Medical Device Manufacturing Case Study
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Explore Our Success Stories</h4>
                              <p className="text-sm text-gray-600">
                                Read our case studies to learn how our tools have helped customers achieve their
                                manufacturing goals.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 右侧产品图片区域 */}
                      <div className="w-1/4 bg-white p-5 flex items-center justify-center border-l border-gray-100">
                        <div className="w-full h-auto max-h-[320px] flex items-center justify-center rounded-lg overflow-hidden">
                          <Image
                            src={`/abstract-geometric-shapes.png?height=400&width=400&query=${activeCategory || "resources"}`}
                            alt={activeCategory ? `${activeCategory} Resources` : "Resources"}
                            width={400}
                            height={400}
                            className="object-cover w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Blog */}
          <Link href="/mzgblog" className="text-gray-700 hover:text-red-600">
            Blog
          </Link>

          {/* About Us - moved to second-to-last position */}
          <Link href="/about" className="text-gray-700 hover:text-red-600">
            About Us
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center lg:flex">
          <Button asChild className="bg-red-600 text-white hover:bg-red-700">
            <Link href="/custom-quote">Custom Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-red-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {/* You can use an icon here, e.g., a hamburger icon */}
          Menu
        </button>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 py-2">
          {/* Mobile menu items go here */}
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-red-600">
            Home
          </Link>
          <Link href="/standard-tools" className="block px-4 py-2 text-gray-700 hover:text-red-600">
            Standard Tools
          </Link>
          <Link href="/custom-tools" className="block px-4 py-2 text-gray-700 hover:text-red-600">
            Custom Tools
          </Link>
          <Link href="/resources" className="block px-4 py-2 text-gray-700 hover:text-red-600">
            Resources
          </Link>
          <Link href="/mzgblog" className="block px-4 py-2 text-gray-700 hover:text-red-600">
            Blog
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-red-600">
            About Us
          </Link>
        </div>
      )}
    </header>
  )
}
