"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, ChevronDown } from "lucide-react"

interface FAQ {
  id: number
  question: string
  answer: string
  category: string
  sortOrder: number
}

interface FAQSectionProps {
  pageUrl: string
  className?: string
}

export default function FAQSection({ pageUrl, className = "" }: FAQSectionProps) {
  const [faqsByCategory, setFaqsByCategory] = useState<{ [key: string]: FAQ[] }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true)
        setError("")
        
        const response = await fetch(`/api/faqs?page_url=${encodeURIComponent(pageUrl)}`)
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error || "获取FAQ失败")
        }
        
        const data = await response.json()
        setFaqsByCategory(data.faqs || {})
      } catch (error) {
        console.error("获取FAQ失败:", error)
        setError("获取FAQ失败")
      } finally {
        setLoading(false)
      }
    }

    if (pageUrl) {
      fetchFaqs()
    }
  }, [pageUrl])

  // 获取FAQ总数
  const totalFaqs = Object.values(faqsByCategory).reduce((total, faqs) => total + faqs.length, 0)

  const categoryColors: { [key: string]: string } = {
    "产品信息": "bg-blue-100 text-blue-800",
    "技术参数": "bg-green-100 text-green-800", 
    "使用方法": "bg-purple-100 text-purple-800",
    "订购流程": "bg-orange-100 text-orange-800",
    "售后服务": "bg-red-100 text-red-800",
    "其他": "bg-gray-100 text-gray-800"
  }

  return (
    <div className={`${className}`}>
      {/* 标题部分 */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-1 bg-red-600 mr-4"></div>
          <h2 className="text-3xl font-bold flex items-center">
            <HelpCircle className="h-8 w-8 text-red-600 mr-3" />
            常见问题
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          查找关于本产品的常见问题和详细解答
        </p>
      </div>

      {/* FAQ内容 */}
      <div className="space-y-6">
        {loading ? (
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                <span className="ml-3 text-gray-600">加载中...</span>
              </div>
            </CardContent>
          </Card>
        ) : error ? (
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="text-center py-8">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">暂时无法加载FAQ内容</p>
                <p className="text-sm text-gray-500">请稍后再试，或联系我们的技术支持</p>
              </div>
            </CardContent>
          </Card>
        ) : totalFaqs === 0 ? (
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="text-center py-8">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">暂无常见问题</p>
                <p className="text-sm text-gray-500">如有疑问，请随时联系我们的技术支持团队</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          Object.entries(faqsByCategory).map(([category, faqs]) => (
            <Card key={category} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                {/* 分类标题 */}
                <div className="flex items-center mb-4">
                  <Badge 
                    className={`${categoryColors[category] || categoryColors["其他"]} mr-3`}
                    variant="secondary"
                  >
                    {category}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {faqs.length} 个问题
                  </span>
                </div>

                {/* FAQ手风琴 */}
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs
                    .sort((a, b) => a.sortOrder - b.sortOrder)
                    .map((faq, index) => (
                      <AccordionItem 
                        key={faq.id} 
                        value={`faq-${faq.id}`}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-left [&[data-state=open]>svg]:rotate-180">
                          <div className="flex items-start">
                            <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded mr-3 shrink-0 mt-0.5">
                              Q{index + 1}
                            </span>
                            <span className="font-medium text-gray-900 text-sm leading-relaxed">
                              {faq.question}
                            </span>
                          </div>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-gray-500" />
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0">
                          <div className="flex items-start">
                            <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded mr-3 shrink-0 mt-0.5">
                              A
                            </span>
                            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                              {faq.answer}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))
                  }
                </Accordion>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* 底部提示 */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            没有找到您需要的答案？
          </p>
          <p className="text-xs text-gray-500">
            请联系我们的技术支持团队获取更多帮助
          </p>
        </div>
      </div>
    </div>
  )
} 