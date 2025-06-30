"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FAQSectionEn from "@/components/faq-section-en"

export default function TestFAQPage() {
  const [faqs, setFaqs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('/api/faqs?page_url=/standard-tools/milling/right-angle-flat')
        if (response.ok) {
          const data = await response.json()
          const allFaqs = Object.values(data.faqs || {}).flat()
          setFaqs(allFaqs as any[])
        }
      } catch (error) {
        console.error('获取FAQ失败:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFaqs()
  }, [])

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">FAQ功能测试页面</h1>
        <p className="text-gray-600 mb-6">
          测试FAQ管理后台的"显示在热门问题"功能
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>功能说明</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 管理员可以在后台设置FAQ是否显示在"Popular Questions"中</li>
                <li>• 只有勾选了"显示在热门问题中"的FAQ才会出现在Popular Questions区域</li>
                <li>• 前端会自动过滤并显示最多4个热门问题</li>
                <li>• 如果没有设置热门问题，Popular Questions区域不会显示</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>当前FAQ状态</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p>加载中...</p>
              ) : (
                <div className="space-y-2">
                  <p>总FAQ数量: {faqs.length}</p>
                  <p>热门问题数量: {faqs.filter(faq => faq.showInPopular).length}</p>
                  {faqs.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">FAQ列表:</h4>
                      {faqs.map((faq, index) => (
                        <div key={index} className="flex items-center justify-between py-1 text-xs">
                          <span className="truncate max-w-xs">{faq.question}</span>
                          <Badge variant={faq.showInPopular ? "default" : "outline"}>
                            {faq.showInPopular ? "热门" : "普通"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <Button asChild>
            <a href="/admin-mzg/faqs" target="_blank">
              打开FAQ管理后台
            </a>
          </Button>
        </div>
      </div>

      {/* FAQ组件展示 */}
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">FAQ组件展示</h2>
        <FAQSectionEn pageUrl="/standard-tools/milling/right-angle-flat" />
      </div>
    </div>
  )
} 