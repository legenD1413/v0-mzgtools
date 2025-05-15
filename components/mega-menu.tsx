import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MegaMenuItemProps {
  href: string
  imageSrc: string
  title: string
  className?: string
}

export function MegaMenuItem({ href, imageSrc, title, className }: MegaMenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center rounded-md p-2 text-center transition-colors hover:bg-gray-50",
        className,
      )}
    >
      <div className="mb-2 aspect-square w-full overflow-hidden rounded-md border bg-white p-2">
        <div className="relative h-full w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain transition-transform group-hover:scale-105"
          />
        </div>
      </div>
      <span className="text-sm font-medium group-hover:text-red-600">{title}</span>
    </Link>
  )
}

interface MegaMenuProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
}

export function MegaMenu({ children, className, fullWidth = false }: MegaMenuProps) {
  return <div className={cn("grid gap-3 p-4", className)}>{children}</div>
}

// 新增的全宽菜单组件
export function FullWidthMegaMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 w-full bg-white shadow-lg">
      <div className="container mx-auto px-4">{children}</div>
    </div>
  )
}

// 新增的分类菜单项组件
export function CategoryMenuItem({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  return (
    <div className="py-4">
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="text-gray-700 hover:text-red-600">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
