'use client'

import { useEffect, useState } from 'react'

interface HydrationBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

/**
 * HydrationBoundary 组件
 * 用于包装可能导致 hydration 错误的组件
 * 确保只在客户端完全挂载后才渲染内容
 */
export function HydrationBoundary({ 
  children, 
  fallback 
}: HydrationBoundaryProps) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // 使用 setTimeout 确保在下一个 tick 中设置状态
    // 这有助于避免在 hydration 过程中的竞争条件
    const timer = setTimeout(() => {
      setIsHydrated(true)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  // 在 hydration 完成前显示 fallback 或空内容
  if (!isHydrated) {
    return <div suppressHydrationWarning>{fallback}</div>
  }

  return <>{children}</>
}

export default HydrationBoundary 