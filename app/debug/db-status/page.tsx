'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, CheckCircle, XCircle, AlertTriangle, Database, RefreshCw } from 'lucide-react'

interface DatabaseStatus {
  status: string
  message: string
  database_time?: string
  table_exists?: boolean
  columns?: Array<{
    column_name: string
    data_type: string
    is_nullable: string
    column_default: string
  }>
  column_names?: string[]
  missing_columns?: string[]
  has_old_structure?: boolean
  database_url_configured?: boolean
  error?: string
  details?: string
  suggestions?: string[]
}

export default function DatabaseStatusPage() {
  const [status, setStatus] = useState<DatabaseStatus | null>(null)
  const [loading, setLoading] = useState(false)
  const [migrating, setMigrating] = useState(false)

  const checkDatabaseStatus = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin-mzg/check-db')
      const data = await response.json()
      setStatus(data)
    } catch (error) {
      setStatus({
        status: 'error',
        message: '无法连接到API',
        error: error instanceof Error ? error.message : '未知错误'
      })
    } finally {
      setLoading(false)
    }
  }

  const migrateDatebase = async () => {
    setMigrating(true)
    try {
      const response = await fetch('/api/admin-mzg/migrate-db', {
        method: 'POST'
      })
      const data = await response.json()
      
      if (response.ok) {
        alert(`迁移成功: ${data.message}`)
        // 重新检查状态
        await checkDatabaseStatus()
      } else {
        alert(`迁移失败: ${data.error || data.details}`)
      }
    } catch (error) {
      alert(`迁移失败: ${error instanceof Error ? error.message : '未知错误'}`)
    } finally {
      setMigrating(false)
    }
  }

  useEffect(() => {
    checkDatabaseStatus()
  }, [])

  const getStatusIcon = () => {
    if (loading) return <Loader2 className="h-5 w-5 animate-spin" />
    if (!status) return null
    
    switch (status.status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    }
  }

  const getStatusColor = () => {
    if (!status) return 'secondary'
    switch (status.status) {
      case 'success':
        return 'default' as const
      case 'error':
        return 'destructive' as const
      case 'warning':
        return 'outline' as const
      default:
        return 'secondary' as const
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Database className="h-8 w-8" />
          <h1 className="text-3xl font-bold">PostgreSQL 数据库状态</h1>
        </div>
        <div className="flex gap-2">
          <Button onClick={checkDatabaseStatus} disabled={loading} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            刷新状态
          </Button>
          {status?.status === 'warning' && (
            <Button onClick={migrateDatebase} disabled={migrating} className="bg-orange-600 hover:bg-orange-700">
              {migrating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
              修复表结构
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        {/* 基本状态 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getStatusIcon()}
              数据库连接状态
            </CardTitle>
            <CardDescription>
              检查PostgreSQL数据库连接和基本配置
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">状态:</span>
                <Badge variant={getStatusColor()}>
                  {status?.status === 'success' ? '正常' : 
                   status?.status === 'error' ? '错误' : 
                   status?.status === 'warning' ? '需要修复' : '未知'}
                </Badge>
              </div>
              
              <div>
                <span className="font-medium">消息:</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {status?.message || '检查中...'}
                </p>
              </div>

              {status?.error && (
                <div>
                  <span className="font-medium text-red-600">错误:</span>
                  <p className="text-sm text-red-600 mt-1">
                    {status.error}
                  </p>
                </div>
              )}

              {status?.details && (
                <div>
                  <span className="font-medium text-red-600">详细信息:</span>
                  <p className="text-sm text-red-600 mt-1">
                    {status.details}
                  </p>
                </div>
              )}

              {status?.database_time && (
                <div>
                  <span className="font-medium">数据库时间:</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(status.database_time).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 配置状态 */}
        <Card>
          <CardHeader>
            <CardTitle>配置状态</CardTitle>
            <CardDescription>
              检查必要的环境变量和配置
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">DATABASE_URL:</span>
                <Badge variant={status?.database_url_configured ? 'default' : 'destructive'}>
                  {status?.database_url_configured ? '已配置' : '未配置'}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">FAQ表:</span>
                <Badge variant={status?.table_exists ? 'default' : 'destructive'}>
                  {status?.table_exists ? '存在' : '不存在'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 解决方案建议 */}
        {(status?.status === 'error' || status?.missing_columns?.length || status?.suggestions?.length) && (
          <Card>
            <CardHeader>
              <CardTitle>解决方案建议</CardTitle>
              <CardDescription>
                根据检测到的问题提供解决建议
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {!status.database_url_configured && (
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800">数据库URL未配置</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      请在项目根目录创建 <code>.env.local</code> 文件，并添加：
                    </p>
                    <pre className="text-xs bg-yellow-100 p-2 rounded mt-2 text-yellow-800">
                      DATABASE_URL="postgresql://username:password@host/database"
                    </pre>
                  </div>
                )}

                {status?.missing_columns && status.missing_columns.length > 0 && (
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-medium text-orange-800">表结构需要更新</h4>
                    <p className="text-sm text-orange-700 mt-1">
                      FAQ表缺少必要的列，点击上方的"修复表结构"按钮进行自动修复。
                    </p>
                  </div>
                )}

                {status?.suggestions && status.suggestions.length > 0 && (
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-800">其他建议</h4>
                    <ul className="text-sm text-blue-700 mt-1 list-disc list-inside">
                      {status.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 