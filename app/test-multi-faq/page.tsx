"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, MessageCircle, BookOpen, Cog, Wrench } from "lucide-react"

interface FAQ {
  id: number
  question: string
  answer: string
  categories: string[]
  page_urls: string[]
  sort_order: number
  show_in_popular: boolean
}

export default function TestMultiFAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(false)
  const [testResults, setTestResults] = useState<any[]>([])

  const testPageUrl = "/standard-tools/milling/right-angle-flat"

  // 分类映射
  const categoryMap: { [key: string]: { label: string; icon: any; color: string } } = {
    "产品信息": { label: "General", icon: HelpCircle, color: "blue" },
    "技术参数": { label: "Technical", icon: Cog, color: "green" },
    "使用方法": { label: "Applications", icon: Wrench, color: "purple" }
  }

  // 测试API功能
  const runTests = async () => {
    setLoading(true)
    const results = []

    try {
      // 测试1: 查询特定页面的FAQ
      console.log('测试1: 查询特定页面的FAQ')
      const response1 = await fetch(`/api/faqs?page_url=${encodeURIComponent(testPageUrl)}`)
      const data1 = await response1.json()
      results.push({
        test: "查询特定页面FAQ",
        success: response1.ok && data1.success,
        data: data1,
        count: data1.faqs?.length || 0
      })

      // 测试2: 查询热门问题
      console.log('测试2: 查询热门问题')
      const response2 = await fetch(`/api/faqs?page_url=${encodeURIComponent(testPageUrl)}&show_in_popular=true`)
      const data2 = await response2.json()
      results.push({
        test: "查询热门问题",
        success: response2.ok && data2.success,
        data: data2,
        count: data2.faqs?.length || 0
      })

      // 测试3: 按分类查询
      console.log('测试3: 按分类查询')
      const response3 = await fetch(`/api/faqs?page_url=${encodeURIComponent(testPageUrl)}&category=技术参数`)
      const data3 = await response3.json()
      results.push({
        test: "按分类查询FAQ",
        success: response3.ok && data3.success,
        data: data3,
        count: data3.faqs?.length || 0
      })

      // 设置FAQ数据用于显示
      if (data1.success && data1.faqs) {
        setFaqs(data1.faqs)
      }

      setTestResults(results)
    } catch (error) {
      console.error('测试失败:', error)
      results.push({
        test: "API测试",
        success: false,
        error: error instanceof Error ? error.message : String(error)
      })
      setTestResults(results)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    runTests()
  }, [])

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

  // 获取热门问题
  const popularFaqs = faqs.filter(faq => faq.show_in_popular).slice(0, 4)

  // 获取可用分类
  const availableCategories = Object.keys(faqsByCategory).filter(category => 
    categoryMap[category]
  )

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            FAQ多选功能测试页面
          </h1>
          <p className="text-gray-600">
            测试页面: {testPageUrl}
          </p>
        </div>

        {/* 测试结果 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              API测试结果
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant={result.success ? "default" : "destructive"}>
                      {result.success ? "✓" : "✗"}
                    </Badge>
                    <span className="font-medium">{result.test}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {result.count !== undefined ? `${result.count} 条数据` : result.error}
                  </div>
                </div>
              ))}
              <Button onClick={runTests} disabled={loading} className="w-full">
                {loading ? "测试中..." : "重新测试"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ显示 */}
        {faqs.length > 0 && (
          <>
            {/* 热门问题 */}
            {popularFaqs.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    热门问题 ({popularFaqs.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {popularFaqs.map((faq) => (
                      <div key={faq.id} className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">{faq.question}</h4>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {faq.page_urls.map((url, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {url}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {faq.categories.map((cat, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 分类FAQ */}
            {availableCategories.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    按分类浏览FAQ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={availableCategories[0] ? categoryMap[availableCategories[0]].label : ""}>
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      {availableCategories.map((category) => {
                        const categoryInfo = categoryMap[category]
                        return (
                          <TabsTrigger 
                            key={category} 
                            value={categoryInfo.label}
                            className="flex items-center gap-2"
                          >
                            <categoryInfo.icon className="h-4 w-4" />
                            <span>{categoryInfo.label}</span>
                          </TabsTrigger>
                        )
                      })}
                    </TabsList>

                    {availableCategories.map((category) => {
                      const categoryInfo = categoryMap[category]
                      const categoryFaqs = faqsByCategory[category] || []
                      
                      return (
                        <TabsContent key={category} value={categoryInfo.label}>
                          <div className="space-y-4">
                            {categoryFaqs.map((faq) => (
                              <div key={faq.id} className="p-4 border rounded-lg">
                                <div className="flex items-start gap-3 mb-3">
                                  <categoryInfo.icon className="h-5 w-5 text-gray-500 mt-0.5" />
                                  <h4 className="font-medium">{faq.question}</h4>
                                </div>
                                <p className="text-gray-600 mb-3 pl-8">
                                  {faq.answer}
                                </p>
                                <div className="flex justify-between items-center pl-8">
                                  <div className="flex flex-wrap gap-1">
                                    <span className="text-xs text-gray-500">页面:</span>
                                    {faq.page_urls.map((url, i) => (
                                      <Badge key={i} variant="outline" className="text-xs">
                                        {url}
                                      </Badge>
                                    ))}
                                  </div>
                                  {faq.show_in_popular && (
                                    <Badge variant="default" className="text-xs">
                                      热门
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      )
                    })}
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* 无数据提示 */}
        {!loading && faqs.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                暂无FAQ数据，请先在管理后台添加FAQ
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 