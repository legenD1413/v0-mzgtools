"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, Settings, Wrench, ChevronRight, MessageCircle, BookOpen, Cog } from "lucide-react"

interface FAQ {
  id: number
  question: string
  answer: string
  categories: string[]
  page_urls: string[]
  sort_order: number
  showInPopular: boolean
}

interface FAQSectionProps {
  pageUrl: string
}

export default function FAQSectionEn({ pageUrl }: FAQSectionProps) {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("General")

  // 分类映射
  const categoryMap: { [key: string]: { label: string; icon: any } } = {
    "General": { label: "General", icon: HelpCircle },
    "Technical": { label: "Technical", icon: Cog },
    "Applications": { label: "Applications", icon: Wrench },
    "Order Process": { label: "Order Process", icon: BookOpen },
    "Support": { label: "Support", icon: MessageCircle },
    "Others": { label: "Others", icon: Settings }
  }

  // 获取FAQ数据
  const fetchFAQs = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/faqs?page_url=${encodeURIComponent(pageUrl)}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch FAQs')
      }
      
      const data = await response.json()
      console.log('FAQ数据:', data)
      
      if (data.success && data.faqs) {
        // 过滤出包含当前页面的FAQ
        const filteredFaqs = data.faqs.filter((faq: any) => 
          faq.page_urls && faq.page_urls.includes(pageUrl)
        ).map((faq: any) => ({
          id: faq.id,
          question: faq.question,
          answer: faq.answer,
          categories: faq.categories || [],
          page_urls: faq.page_urls || [],
          sort_order: faq.sort_order || 0,
          showInPopular: faq.show_in_popular || false
        }))
        
        setFaqs(filteredFaqs)
      }
    } catch (error) {
      console.error('获取FAQ失败:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFAQs()
  }, [pageUrl])

  // 如果没有FAQ数据，不显示组件
  if (loading || faqs.length === 0) {
    return null
  }

  // 获取热门问题（标记为热门的FAQ）
  const popularFaqs = faqs.filter(faq => faq.showInPopular).slice(0, 4)

  // 按分类组织FAQ
  const faqsByCategory: { [key: string]: FAQ[] } = {}
  faqs.forEach(faq => {
    faq.categories.forEach(category => {
      if (!faqsByCategory[category]) {
        faqsByCategory[category] = []
      }
      faqsByCategory[category].push(faq)
    })
  })

  // 获取可用的分类
  const availableCategories = Object.keys(faqsByCategory).filter(category => 
    categoryMap[category]
  )

  return (
    <section className="pt-5 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="w-12 h-1 bg-red-600 mr-4"></div>
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>

        {/* 热门问题部分 */}
        {popularFaqs.length > 0 && (
          <div className="mb-12">
            <h3 className="text-base font-semibold text-gray-900 mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 mr-2 text-blue-600" />
              Popular Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularFaqs.map((faq) => (
                <Card key={faq.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <HelpCircle className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {faq.answer}
                        </p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-blue-600">
                          View answer <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 分类FAQ部分 */}
        {availableCategories.length > 0 && (
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-green-600" />
              Browse by Category
            </h3>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className={`grid w-full mb-8 ${
                availableCategories.length <= 3 
                  ? `grid-cols-${availableCategories.length}` 
                  : 'grid-cols-3 lg:grid-cols-6'
              }`}>
                {availableCategories.map((category) => {
                  const categoryInfo = categoryMap[category]
                  return (
                    <TabsTrigger 
                      key={category} 
                      value={categoryInfo.label}
                      className="flex items-center space-x-2 text-xs lg:text-sm"
                    >
                      <categoryInfo.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{categoryInfo.label}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {availableCategories.map((category) => {
                const categoryInfo = categoryMap[category]
                const categoryFaqs = faqsByCategory[category] || []
                
                return (
                  <TabsContent key={category} value={categoryInfo.label}>
                    <Card>
                      <CardContent className="p-6">
                        <Accordion type="single" collapsible className="w-full">
                          {categoryFaqs.map((faq) => (
                            <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                              <AccordionTrigger className="text-left">
                                <div className="flex items-start space-x-3">
                                  <categoryInfo.icon className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <span>{faq.question}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="pl-8 pr-4">
                                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {faq.answer}
                                  </p>
                                  {faq.showInPopular && (
                                    <Badge variant="secondary" className="mt-3">
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>
        )}
      </div>
    </section>
  )
} 