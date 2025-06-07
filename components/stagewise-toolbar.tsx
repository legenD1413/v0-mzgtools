'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// stagewise 配置
const stagewiseConfig = {
  plugins: []
}

export function StagewiseDevToolbar() {
  const [StagewiseToolbar, setStagewiseToolbar] = useState<any>(null)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // 只在开发模式下动态加载 stagewise
    if (process.env.NODE_ENV === 'development') {
      // 创建独立的容器元素
      const container = document.createElement('div')
      container.id = 'stagewise-portal'
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999;
        pointer-events: none;
      `
      document.body.appendChild(container)
      setPortalContainer(container)

      // 动态加载 stagewise
      import('@stagewise/toolbar-next')
        .then((module) => {
          setStagewiseToolbar(() => module.StagewiseToolbar)
        })
        .catch((error) => {
          console.warn('Failed to load stagewise toolbar:', error)
        })

      // 清理函数
      return () => {
        if (container && document.body.contains(container)) {
          document.body.removeChild(container)
        }
      }
    }
  }, [])

  // 只在开发模式下且组件已加载时渲染工具栏
  if (process.env.NODE_ENV !== 'development' || !StagewiseToolbar || !portalContainer) {
    return null
  }

  // 使用 Portal 渲染到独立容器
  return createPortal(
    <div style={{ pointerEvents: 'auto' }}>
      <StagewiseToolbar config={stagewiseConfig} />
    </div>,
    portalContainer
  )
} 