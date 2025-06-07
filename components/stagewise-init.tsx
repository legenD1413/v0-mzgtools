'use client'

import { useEffect, useState } from 'react'

export function StagewiseInit() {
  const [enableStagewise, setEnableStagewise] = useState(false)

  useEffect(() => {
    // 只在开发模式下显示控制按钮
    if (process.env.NODE_ENV === 'development') {
      // 创建控制按钮
      const controlButton = document.createElement('button')
      controlButton.id = 'stagewise-toggle'
      controlButton.innerText = '启用 Stagewise'
      controlButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #3b82f6;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        z-index: 9999;
        font-size: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      `
      
      controlButton.onclick = () => {
        if (!enableStagewise) {
          setEnableStagewise(true)
          controlButton.innerText = '禁用 Stagewise'
          controlButton.style.background = '#ef4444'
        } else {
          setEnableStagewise(false)
          controlButton.innerText = '启用 Stagewise'
          controlButton.style.background = '#3b82f6'
          // 移除 stagewise 容器
          const container = document.getElementById('stagewise-root')
          if (container) {
            container.remove()
          }
        }
      }
      
      document.body.appendChild(controlButton)

      return () => {
        const button = document.getElementById('stagewise-toggle')
        if (button) {
          button.remove()
        }
      }
    }
  }, [])

  useEffect(() => {
    if (enableStagewise && process.env.NODE_ENV === 'development') {
      const timer = setTimeout(() => {
        import('@stagewise/toolbar-next')
          .then((module) => {
            const StagewiseToolbar = module.StagewiseToolbar
            
            // 移除旧容器
            const oldContainer = document.getElementById('stagewise-root')
            if (oldContainer) {
              oldContainer.remove()
            }
            
            // 创建新容器
            const container = document.createElement('div')
            container.id = 'stagewise-root'
            container.style.cssText = `
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 999998;
            `
            document.body.appendChild(container)
            
            import('react-dom/client').then(({ createRoot }) => {
              const root = createRoot(container)
              root.render(
                <div style={{ pointerEvents: 'auto' }}>
                  <StagewiseToolbar config={{ plugins: [] }} />
                </div>
              )
              console.log('✅ Stagewise 已启用')
            })
          })
          .catch((error) => {
            console.error('❌ Stagewise 加载失败:', error)
          })
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [enableStagewise])

  return null
} 