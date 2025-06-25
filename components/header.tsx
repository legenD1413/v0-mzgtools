"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, CircleDashed, Drill, Gauge, Layers, Wrench, FileText, Film, BookOpen, Settings, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>("milling")

  // 添加 ESC 键关闭菜单和点击外部关闭菜单的功能
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleMenuClose()
        setMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      
      // 检查是否点击了菜单按钮
      const isMenuButton = target.closest('button[data-menu]')
      if (isMenuButton) {
        return // 不关闭菜单，让按钮处理逻辑
      }
      
      // 检查是否点击了下拉菜单内容
      const isDropdownContent = target.closest('[data-dropdown-content]')
      if (isDropdownContent) {
        return // 不关闭菜单
      }
      
      // 如果点击了其他地方，关闭所有菜单
      if (activeMenu) {
        handleMenuClose()
      }
      
      // 检查移动端菜单
      if (mobileMenuOpen) {
        const mobileMenu = document.querySelector('[data-mobile-menu]')
        const menuButton = document.querySelector('[data-mobile-menu-button]')
        
        if (mobileMenu && !mobileMenu.contains(target) && menuButton && !menuButton.contains(target)) {
          setMobileMenuOpen(false)
        }
      }
    }

    // 添加事件监听器
    document.addEventListener('keydown', handleEscapeKey)
    document.addEventListener('mousedown', handleClickOutside)

    // 清理事件监听器
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeMenu, mobileMenuOpen])

  const handleMenuOpen = (menu: string) => {
    setActiveMenu(menu === activeMenu ? null : menu)

    // 设置默认活动分类
    if (menu === "standard" && activeCategory === null) {
      setActiveCategory("milling")
    } else if (menu === "custom" && activeCategory === null) {
      setActiveCategory("tool-holders")
    } else if (menu === "resources" && activeCategory === null) {
      setActiveCategory("catalogs")
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-gray-100/50 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/mzg-logo.png" alt="MZG Tools" width={80} height={30} className="h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          {/* Standard Tools */}
          <div className="static">
            <button
              className={`flex items-center font-medium text-sm px-3 py-2 rounded-full transition-all duration-200 ${
                activeMenu === "standard" 
                  ? "text-red-600 bg-red-50" 
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
              }`}
              onClick={() => handleMenuOpen("standard")}
              data-menu="standard"
            >
              Standard Tools <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {activeMenu === "standard" && (
              <>
                <div className="fixed inset-0 z-10 bg-black/5" onClick={handleMenuClose}></div>
                <div className="absolute left-0 right-0 top-16 z-40 w-screen border-t border-gray-100 shadow-lg" data-dropdown-content="standard">
                  <div className="w-full bg-white">
                    <div className="container mx-auto flex max-h-[calc(100vh-4rem)] overflow-hidden">
                      {/* 左侧分类菜单 - 深色背景 */}
                      <div className="w-1/4 bg-gray-50 py-6 overflow-y-auto">
                        <div className="px-6">
                          <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-500">Categories</h3>
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
                                <span className="text-[14px] font-medium">Milling Cutting Tools</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "clamp-type-milling"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("clamp-type-milling")}
                              >
                                <Settings
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "clamp-type-milling"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">Clamp Type Milling Cutter</span>
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
                                <span className="text-[14px] font-medium">Thread Milling System</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "milling-tool-holder"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("milling-tool-holder")}
                              >
                                <Wrench
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "milling-tool-holder"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">Milling Tool Holder</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "hole-machining"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("hole-machining")}
                              >
                                <Drill
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "hole-machining"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">Hole Machining Systems</span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`group flex w-full items-center rounded-md py-2 px-3 transition-colors ${
                                  activeCategory === "lathe-turning-inserts"
                                    ? "bg-white text-red-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleCategoryHover("lathe-turning-inserts")}
                              >
                                <RotateCcw
                                  className={`mr-3 h-5 w-5 ${
                                    activeCategory === "lathe-turning-inserts"
                                      ? "text-red-600"
                                      : "text-gray-600 group-hover:text-red-500"
                                  }`}
                                />
                                <span className="text-[14px] font-medium">Lathe Turning Inserts</span>
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
                                <span className="text-[14px] font-medium">Machine Tool Accessories</span>
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

                        {/* Clamp Type Milling Cutter 子菜单 */}
                        {activeCategory === "clamp-type-milling" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Clamp Type Milling Cutter</h3>
                            <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Face & Shoulder Mills</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/face-milling-cutters"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Face Milling Cutters
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/right-angle-square-shoulder"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Right Angle / Square Shoulder Milling Cutters
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/ball-end-milling-cutters"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Ball End Milling Cutters
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Mills</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/fillet-corner-rounding"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Fillet / Corner Rounding Milling Cutter
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/high-feed-milling-cutter"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      High Feed Milling Cutter
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/grooving-slotting"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Grooving & Slotting Milling Cutters
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Advanced Mills</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/chamfering-cutters"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Chamfering Cutters
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/corn-roughing"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Corn / Roughing Milling Cutter
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/clamp-type-milling/screwed-modular-tool-holders"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Screwed / Modular Tool Holders
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Advanced Clamp Type Milling Solutions</h4>
                              <p className="text-sm text-gray-600">
                                Our clamp type milling cutters provide superior performance with indexable inserts for cost-effective machining and extended tool life.
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
                                <ul className="space-y-2">
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



                        {/* 孔加工系统子菜单 */}
                        {activeCategory === "hole-machining" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Hole Machining Systems</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Drilling Solutions</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/hole-machining/fast-drilling"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Fast Drilling
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/hole-machining/drill-bit"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Drill Point and Drill Pipe
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Boring Solutions</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/hole-machining/boring-machining"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Boring Machining
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/hole-machining/fine-boring"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Fine Boring
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/hole-machining/rough-boring"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Rough Boring
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Complete Hole Machining Solutions</h4>
                              <p className="text-sm text-gray-600">
                                Our comprehensive hole machining systems provide precision drilling and boring solutions for all your manufacturing needs.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 铣削刀柄子菜单 */}
                        {activeCategory === "milling-tool-holder" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Milling Tool Holder</h3>
                            <div className="grid grid-cols-3 gap-x-6 gap-y-6">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">High Precision Series</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/sk-high-speed"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      SK High Speed High Precision
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/hm-hydraulic"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      HM Hydraulic Tool Holder
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/sr-shrink-fit"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      SR Shrink Fit Tool Holder
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/power-tool-holder"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Strong Tool Holder
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Standard Series</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/ads-pull-back"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Pull Back Tool Holder
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/er-tool-holder"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      ER Tool Holder
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/oz-tool-holder"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      OZ Tool Holder
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/morse-taper"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Morse Taper Tool Holder
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty & Application</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/tapping-tool-holder"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Tapping Tool Holder
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/drill-chuck"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Drill Chuck Tool Holder
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/face-milling"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Face Milling Tool Holder
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/milling-tool-holder/side-lock"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Side Lock Tool Holder
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Precision Tool Holding Solutions</h4>
                              <p className="text-sm text-gray-600">
                                Our comprehensive range of milling tool holders provides superior clamping force and precision for all your machining applications.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Lathe Turning Inserts 子菜单 */}
                        {activeCategory === "lathe-turning-inserts" && (
                          <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-800">Lathe Turning Inserts</h3>
                            <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Basic Turning</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/lathe-turning-inserts/turning-inserts"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Turning Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/lathe-turning-inserts/back-turning-inserts"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Back Turning Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Grooving & Threading</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/lathe-turning-inserts/grooving-cut-off-turning-inserts"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Grooving/Cut-off Turning Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/lathe-turning-inserts/internal-grooving-inserts"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Internal Grooving Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/lathe-turning-inserts/threading-inserts"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Threading Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Inserts</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/standard-tools/lathe-turning-inserts/milling-inserts"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Milling Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/standard-tools/lathe-turning-inserts/drilling-inserts"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Drilling Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Complete Lathe Turning Solutions</h4>
                              <p className="text-sm text-gray-600">
                                Our comprehensive range of lathe turning inserts provides superior cutting performance and precision for all your turning applications, from basic turning to specialized operations.
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
              className={`flex items-center font-medium text-sm px-3 py-2 rounded-full transition-all duration-200 ${
                activeMenu === "custom" 
                  ? "text-red-600 bg-red-50" 
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
              }`}
              onClick={() => handleMenuOpen("custom")}
              data-menu="custom"
            >
              Custom Tools <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {activeMenu === "custom" && (
              <>
                <div className="fixed inset-0 z-10 bg-black/5" onClick={handleMenuClose}></div>
                <div className="absolute left-0 right-0 top-16 z-40 w-screen border-t border-gray-100 shadow-lg" data-dropdown-content="custom">
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
                                <span className="text-sm font-medium">Tool Holders</span>
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
                                <span className="text-sm font-medium">TURNING SOLUTIONS</span>
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
                                <span className="text-sm font-medium">SPECIAL INSERTS</span>
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
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/custom-tools/tool-holders/adapters"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Special Adapters
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/tool-holders/boring-bars"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                                      Custom Boring Bars
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Custom Solutions</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/custom-tools/tool-holders/collet-chucks"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Special Collet Chucks
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/tool-holders/extensions"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
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
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/custom-tools/turning-solutions/tools"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Turning Tools
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/turning-solutions/inserts"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Special Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Operations</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/custom-tools/turning-solutions/grooving"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Grooving Tools
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/turning-solutions/threading"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
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
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/custom-tools/special-inserts/turning"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Turning Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/special-inserts/milling"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Milling Inserts
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Operations</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/custom-tools/special-inserts/grooving"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Custom Grooving Inserts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/custom-tools/special-inserts/threading"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
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
              className={`flex items-center font-medium text-sm px-3 py-2 rounded-full transition-all duration-200 ${
                activeMenu === "resources" 
                  ? "text-red-600 bg-red-50" 
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
              }`}
              onClick={() => handleMenuOpen("resources")}
              data-menu="resources"
            >
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {activeMenu === "resources" && (
              <>
                <div className="fixed inset-0 z-10 bg-black/5" onClick={handleMenuClose}></div>
                <div className="absolute left-0 right-0 top-16 z-40 w-screen border-t border-gray-100 shadow-lg" data-dropdown-content="resources">
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
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/resources/technical/guides"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Technical Guides
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/technical/application-notes"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Application Notes
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Material Data</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/resources/technical/material-specs"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Material Specifications
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/technical/hardness-conversion"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
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
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/resources/catalogs/milling"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Milling Tools Catalog
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/catalogs/turning"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Turning Tools Catalog
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/catalogs/drilling"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Drilling Tools Catalog
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Specialty Tools</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/resources/catalogs/threading"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Threading Tools Catalog
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/catalogs/tool-holders"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
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
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/resources/media/product-demos"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Product Demonstration Videos
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/media/application-examples"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Application Example Videos
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-700 border-b pb-2 mb-3">Images</h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/resources/media/product-images"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Product Images
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/media/application-images"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
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
                                <ul className="space-y-2">
                                  <li>
                                    <Link
                                      href="/resources/case-studies/automotive"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Automotive Industry Case Study
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/case-studies/aerospace"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                                      Aerospace Industry Case Study
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/resources/case-studies/medical"
                                      className="flex items-center hover:text-red-600 py-1 transition-colors text-xs whitespace-nowrap overflow-hidden text-ellipsis"
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
          <Link href="/mzgblog" className="font-medium text-sm px-3 py-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200">
            Blog
          </Link>

          {/* About Us */}
          <Link href="/about" className="font-medium text-sm px-3 py-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200">
            About Us
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center lg:flex">
          <Button asChild className="bg-red-600 text-white hover:bg-red-700 rounded-full px-6 py-2 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200">
            <Link href="/custom-quote">Custom Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-red-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-mobile-menu-button
        >
          {/* You can use an icon here, e.g., a hamburger icon */}
          Menu
        </button>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-10 bg-black/20 lg:hidden" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="lg:hidden bg-gray-50 py-2 relative z-20" data-mobile-menu>
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
        </>
      )}
    </header>
  )
}
