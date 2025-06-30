'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X, Plus } from 'lucide-react'

// 定义standard-tools的页面结构
const STANDARD_TOOLS_STRUCTURE = {
  'milling': {
    name: 'milling',
    pages: [
      'ball-end', 'ball-nose', 'chamfer', 'corner-radius', 'deep-ditch',
      'end-mills', 'engraving', 'face-mills', 'fillet', 'reamer',
      'right-angle-flat', 'rough', 'roughing', 'side-milling-cutter',
      'small-diameter', 't-slot-cutter', 'taper', 'thread-mills', 'welding-edge'
    ]
  },
  'hole-making': {
    name: 'hole-making',
    pages: [
      'boring', 'counterbores', 'countersinks', 'drills', 
      'gun-drills', 'reamers', 'spotting', 'step-drills'
    ]
  },
  'threading': {
    name: 'threading',
    pages: [
      'taps', 'inserts-type-thread-milling-cutter', 'integral-thread-milling-cutters',
      'thread-milling-cutters', 'thread-mills', 'thread-turning', 'thread-whirling'
    ]
  },
  'hole-machining': {
    name: 'hole-machining',
    pages: [
      'boring-machining', 'drill-bit', 'drill-bit-reamer', 'fast-drilling',
      'fine-boring', 'rough-boring'
    ]
  },
  'lathe-turning-inserts': {
    name: 'lathe-turning-inserts',
    pages: [
      'back-turning-inserts', 'drilling-inserts', 'grooving-cut-off-turning-inserts',
      'milling-inserts', 'threading-inserts', 'turning-inserts'
    ]
  },
  'clamp-type-milling': {
    name: 'clamp-type-milling',
    pages: [
      'ball-end-milling-cutters', 'chamfering-cutters', 'corn-roughing',
      'face-milling-cutters', 'fillet-corner-rounding', 'grooving-slotting',
      'high-feed-milling-cutter', 'right-angle-square-shoulder', 'screwed-modular-tool-holders'
    ]
  },
  'milling-tool-holder': {
    name: 'milling-tool-holder',
    pages: [
      'ads-pull-back', 'drill-chuck', 'er-tool-holder', 'face-milling',
      'hm-hydraulic', 'morse-taper', 'oz-tool-holder', 'power-tool-holder',
      'side-lock', 'sk-high-speed', 'sr-shrink-fit', 'tapping-tool-holder'
    ]
  },
  'inserts': {
    name: 'inserts',
    pages: [
      'drilling', 'grooving', 'milling', 'threading', 'turning'
    ]
  },
  'tool-holders': {
    name: 'tool-holders',
    pages: [
      'adapters', 'boring', 'collet-chucks', 'milling', 'turning'
    ]
  },
  'right-angle-flat': {
    name: 'right-angle-flat',
    pages: []
  }
}

// 直接返回英文页面名称，与URL路径保持一致
const getPageDisplayName = (category: string, page: string): string => {
  return page
}

interface HierarchicalPageSelectorProps {
  selectedPages: string[]
  onChange: (pages: string[]) => void
  className?: string
}

export default function HierarchicalPageSelector({ 
  selectedPages, 
  onChange, 
  className = '' 
}: HierarchicalPageSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedSubPage, setSelectedSubPage] = useState<string>('')

  // 添加页面
  const addPage = () => {
    if (selectedCategory && selectedSubPage) {
      const fullPath = `/standard-tools/${selectedCategory}/${selectedSubPage}`
      if (!selectedPages.includes(fullPath)) {
        onChange([...selectedPages, fullPath])
      }
      // 清空选择
      setSelectedSubPage('')
    }
  }

  // 移除页面
  const removePage = (pageToRemove: string) => {
    onChange(selectedPages.filter(page => page !== pageToRemove))
  }

  // 获取页面完整显示名称
  const getFullPageDisplayName = (fullPath: string) => {
    const parts = fullPath.split('/')
    if (parts.length >= 4) {
      const category = parts[2]
      const subPage = parts[3]
      const categoryInfo = STANDARD_TOOLS_STRUCTURE[category as keyof typeof STANDARD_TOOLS_STRUCTURE]
      const categoryName = categoryInfo?.name || category
      const pageName = getPageDisplayName(category, subPage)
      return `${categoryName} > ${pageName}`
    }
    return fullPath
  }

  // 获取当前分类的页面列表
  const getCurrentCategoryPages = () => {
    if (!selectedCategory) return []
    const categoryInfo = STANDARD_TOOLS_STRUCTURE[selectedCategory as keyof typeof STANDARD_TOOLS_STRUCTURE]
    return categoryInfo?.pages || []
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <Label>页面地址 *</Label>
      
      {/* 分级选择器 */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* 一级分类选择 */}
          <div>
            <Label className="text-sm text-muted-foreground">一级分类</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="选择分类" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(STANDARD_TOOLS_STRUCTURE).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 二级页面选择 */}
          <div>
            <Label className="text-sm text-muted-foreground">二级页面</Label>
            <Select 
              value={selectedSubPage} 
              onValueChange={setSelectedSubPage}
              disabled={!selectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择页面" />
              </SelectTrigger>
              <SelectContent>
                {getCurrentCategoryPages().map((page) => (
                  <SelectItem key={page} value={page}>
                    {getPageDisplayName(selectedCategory, page)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 添加按钮 */}
          <div className="flex items-end">
            <Button 
              type="button"
              onClick={addPage}
              disabled={!selectedCategory || !selectedSubPage}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              添加页面
            </Button>
          </div>
        </div>

        {/* 预览将要添加的页面 */}
        {selectedCategory && selectedSubPage && (
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2">
              <span className="text-sm text-blue-600 font-medium">将要添加:</span>
              <Badge variant="outline" className="text-blue-700">
                {getFullPageDisplayName(`/standard-tools/${selectedCategory}/${selectedSubPage}`)}
              </Badge>
            </div>
          </div>
        )}
      </div>

      {/* 已选择的页面列表 */}
      {selectedPages.length > 0 && (
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">
            已选择的页面 ({selectedPages.length})
          </Label>
          <div className="flex flex-wrap gap-2 p-3 bg-muted rounded-lg">
            {selectedPages.map((page) => (
              <Badge 
                key={page} 
                variant="secondary" 
                className="flex items-center gap-1 pr-1"
              >
                <span className="text-xs">{getFullPageDisplayName(page)}</span>
                <X 
                  className="h-3 w-3 cursor-pointer hover:text-red-500" 
                  onClick={() => removePage(page)}
                />
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* 提示信息 */}
      {selectedPages.length === 0 && (
        <div className="text-sm text-muted-foreground p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          请选择至少一个页面地址。您可以为同一个FAQ选择多个页面地址。
        </div>
      )}
    </div>
  )
} 