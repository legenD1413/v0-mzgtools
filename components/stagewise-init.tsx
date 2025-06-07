'use client'

import { useEffect } from 'react'

// stagewise 配置
const stagewiseConfig = {
  plugins: []
}

export function StagewiseInit() {
  useEffect(() => {
    // 只在开发模式下且在客户端初始化 stagewise
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      // 延迟初始化，确保页面完全加载
      const timer = setTimeout(() => {
        import('@stagewise/toolbar-next')
          .then((module) => {
            // 创建独立的容器
            let container = document.getElementById('stagewise-container')
            if (!container) {
              container = document.createElement('div')
              container.id = 'stagewise-container'
              container.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 999999;
                isolation: isolate;
              `
              document.body.appendChild(container)
            }

            // 使用 React 18 的 createRoot API
            import('react-dom/client').then(({ createRoot }) => {
              const root = createRoot(container!)
              const StagewiseToolbar = module.StagewiseToolbar
              
              root.render(
                <div style={{ pointerEvents: 'auto' }}>
                  <StagewiseToolbar config={stagewiseConfig} />
                </div>
              )
            })
          })
          .catch((error) => {
            console.warn('Failed to load stagewise toolbar:', error)
          })
      }, 1000) // 延迟1秒初始化

      return () => {
        clearTimeout(timer)
        const container = document.getElementById('stagewise-container')
        if (container) {
          container.remove()
        }
      }
    }
  }, [])

  return null // 不渲染任何内容
} 