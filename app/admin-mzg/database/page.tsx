'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  RefreshCw, 
  Database, 
  CheckCircle, 
  XCircle, 
  Info,
  TableIcon,
  Activity,
  Eye,
  X,
  FileText,
  ChevronLeft,
  ChevronRight,
  Upload,
  Download,
  Settings,
  FileUp,
  FileDown,
  Trash2,
  AlertTriangle,
  Shield,
  Plus,
  Minus,
  Type,
  Hash,
  Calendar,
  ToggleLeft
} from "lucide-react"

interface DatabaseInfo {
  database_name: string
  current_user: string
  version: string
  current_time: string
}

interface TableInfo {
  schemaname: string
  tablename: string
  tableowner: string
  hasindexes: boolean
  hasrules: boolean
  hastriggers: boolean
  rowCount: number
}

interface ConnectionTest {
  currentTime: string
  version: string
  status: string
}

interface TableColumn {
  column_name: string
  data_type: string
  is_nullable: string
  column_default: string | null
  character_maximum_length: number | null
  numeric_precision: number | null
  numeric_scale: number | null
}

interface TableDetails {
  tableName: string
  columns: TableColumn[]
  indexes: any[]
  constraints: any[]
  size: any
  comment: string | null
}

interface TableRecord {
  [key: string]: any
}

interface TableRecordsData {
  tableName: string
  columns: { name: string; type: string }[]
  records: TableRecord[]
  pagination: {
    currentPage: number
    totalPages: number
    totalCount: number
    limit: number
    hasNext: boolean
    hasPrev: boolean
  }
}

interface TableStructure {
  tableName: string
  comment: string | null
  columns: {
    name: string
    type: string
    nullable: boolean
    default: string | null
    maxLength: number | null
    precision: number | null
    scale: number | null
    position: number
    isPrimaryKey: boolean
  }[]
  indexes: {
    name: string
    definition: string
    isPrimary: boolean
    columns: string[]
  }[]
  foreignKeys: {
    constraintName: string
    column: string
    referencedTable: string
    referencedColumn: string
  }[]
  checkConstraints: {
    name: string
    definition: string
  }[]
  statistics: {
    column: string
    distinctValues: number
    mostCommonValues: any[]
    frequencies: number[]
  }[]
}

export default function DatabaseManagementPage() {
  const router = useRouter()
  
  const [loading, setLoading] = useState(false)
  const [connectionTesting, setConnectionTesting] = useState(false)
  const [tablesLoading, setTablesLoading] = useState(false)
  const [tableDetailsLoading, setTableDetailsLoading] = useState(false)
  const [tableRecordsLoading, setTableRecordsLoading] = useState(false)
  const [tableStructureLoading, setTableStructureLoading] = useState(false)
  const [importing, setImporting] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [creatingTable, setCreatingTable] = useState(false)
  
  const [databaseInfo, setDatabaseInfo] = useState<DatabaseInfo | null>(null)
  const [connectionTest, setConnectionTest] = useState<ConnectionTest | null>(null)
  const [tables, setTables] = useState<TableInfo[]>([])
  const [selectedTable, setSelectedTable] = useState<string | null>(null)
  const [tableDetails, setTableDetails] = useState<TableDetails | null>(null)
  const [selectedRecordsTable, setSelectedRecordsTable] = useState<string | null>(null)
  const [tableRecords, setTableRecords] = useState<TableRecordsData | null>(null)
  const [selectedStructureTable, setSelectedStructureTable] = useState<string | null>(null)
  const [tableStructure, setTableStructure] = useState<TableStructure | null>(null)
  const [showImportDialog, setShowImportDialog] = useState<string | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState<string | null>(null)

  const [showCustomCreateDialog, setShowCustomCreateDialog] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState("")
  const [deleteSafetyCode, setDeleteSafetyCode] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  
  // 自定义表创建状态
  const [customTableName, setCustomTableName] = useState("")
  const [customTableComment, setCustomTableComment] = useState("")
  const [customColumns, setCustomColumns] = useState([
    {
      name: "",
      type: "varchar",
      maxLength: 255,
      precision: 10,
      scale: 2,
      nullable: true,
      defaultValue: "",
      primaryKey: false,
      unique: false,
      comment: ""
    }
  ])
  const [tableOptions, setTableOptions] = useState({
    addAutoId: true,
    addTimestamps: true
  })
  
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // 检查认证状态
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin-mzg/database')
        if (response.status === 401) {
          // 未认证，重定向到登录页
          router.push('/admin-mzg/login')
          return
        }
      } catch (error) {
        console.error('认证检查失败:', error)
      }
    }
    
    checkAuth()
  }, [router])

  // 处理API认证错误的通用函数
  const handleAuthError = (response: Response) => {
    if (response.status === 401) {
      setError('认证已过期，请重新登录')
      setTimeout(() => {
        router.push('/admin-mzg/login')
      }, 2000)
      return true
    }
    return false
  }

  // 获取数据库基本信息
  const fetchDatabaseInfo = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/admin-mzg/database')
      
      // 检查认证错误
      if (handleAuthError(response)) {
        return
      }
      
      const result = await response.json()
      
      if (result.success) {
        setDatabaseInfo(result.data)
      } else {
        setError(result.message || '获取数据库信息失败')
      }
    } catch (error) {
      console.error('获取数据库信息错误:', error)
      setError('网络请求失败')
    } finally {
      setLoading(false)
    }
  }

  // 测试数据库连接
  const testConnection = async () => {
    setConnectionTesting(true)
    setError(null)
    setSuccess(null)
    
    try {
      console.log('开始测试数据库连接...')
      const response = await fetch('/api/admin-mzg/database?action=test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      console.log('响应状态:', response.status)
      
      // 检查认证错误
      if (handleAuthError(response)) {
        return
      }
      
      if (!response.ok) {
        throw new Error(`HTTP错误: ${response.status}`)
      }
      
      const result = await response.json()
      console.log('API响应结果:', result)
      
      if (result.success) {
        setConnectionTest(result.data)
        setSuccess(result.message)
        console.log('数据库连接测试成功')
      } else {
        setError(result.message || '数据库连接测试失败')
        console.error('API返回错误:', result.error)
      }
    } catch (error) {
      console.error('数据库连接测试错误:', error)
      setError(`网络请求失败: ${error instanceof Error ? error.message : String(error)}`)
    } finally {
      setConnectionTesting(false)
    }
  }

  // 获取数据库表列表
  const fetchTables = async () => {
    setTablesLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/admin-mzg/database?action=tables')
      
      // 检查认证错误
      if (handleAuthError(response)) {
        return
      }
      
      const result = await response.json()
      
      if (result.success) {
        setTables(result.data)
      } else {
        setError(result.message || '获取表列表失败')
      }
    } catch (error) {
      console.error('获取表列表错误:', error)
      setError('网络请求失败')
    } finally {
      setTablesLoading(false)
    }
  }

  // 获取表详细信息
  const fetchTableDetails = async (tableName: string) => {
    setTableDetailsLoading(true)
    setError(null)
    
    try {
      console.log(`开始获取表 ${tableName} 的详细信息...`)
      const response = await fetch(`/api/admin-mzg/database/table-details?table=${encodeURIComponent(tableName)}`)
      
      console.log(`API响应状态: ${response.status}`)
      
      // 检查认证错误
      if (handleAuthError(response)) {
        return
      }
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error(`API请求失败: ${response.status} ${response.statusText}`)
        console.error('错误内容:', errorText)
        setError(`获取表详细信息失败 (${response.status}): ${errorText}`)
        return
      }
      
      const result = await response.json()
      console.log('API响应结果:', result)
      
      if (result.success) {
        console.log('表详细信息获取成功')
        setTableDetails(result.data)
        setSelectedTable(tableName)
      } else {
        console.error('API返回失败:', result.message, result.error)
        setError(result.message || '获取表详细信息失败')
        if (result.error) {
          console.error('详细错误:', result.error)
        }
      }
    } catch (error) {
      console.error('获取表详细信息错误:', error)
      setError(`网络请求失败: ${error instanceof Error ? error.message : String(error)}`)
    } finally {
      setTableDetailsLoading(false)
    }
  }

  // 关闭表详细信息弹窗
  const closeTableDetails = () => {
    setSelectedTable(null)
    setTableDetails(null)
  }

  // 获取表记录数据
  const fetchTableRecords = async (tableName: string, page: number = 1) => {
    setTableRecordsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/admin-mzg/database/table-records?table=${encodeURIComponent(tableName)}&page=${page}&limit=50`)
      
      // 检查认证错误
      if (handleAuthError(response)) {
        return
      }
      
      const result = await response.json()
      
      if (result.success) {
        setTableRecords(result.data)
        setSelectedRecordsTable(tableName)
        setCurrentPage(page)
      } else {
        setError(result.message || '获取表记录失败')
      }
    } catch (error) {
      console.error('获取表记录错误:', error)
      setError('网络请求失败')
    } finally {
      setTableRecordsLoading(false)
    }
  }

  // 关闭表记录弹窗
  const closeTableRecords = () => {
    setSelectedRecordsTable(null)
    setTableRecords(null)
    setCurrentPage(1)
  }

  // 切换页面
  const handlePageChange = (newPage: number) => {
    if (selectedRecordsTable && newPage !== currentPage) {
      fetchTableRecords(selectedRecordsTable, newPage)
    }
  }

  // 获取表结构信息
  const fetchTableStructure = async (tableName: string) => {
    setTableStructureLoading(true)
    setSelectedStructureTable(tableName)
    setError(null)
    
    try {
      const response = await fetch(`/api/admin-mzg/database/structure?table=${encodeURIComponent(tableName)}`)
      
      // 检查认证错误
      if (handleAuthError(response)) {
        return
      }
      
      const result = await response.json()
      
      if (result.success) {
        setTableStructure(result.data)
      } else {
        setError(result.message || '获取表结构失败')
      }
    } catch (error) {
      console.error('获取表结构错误:', error)
      setError('网络请求失败')
    } finally {
      setTableStructureLoading(false)
    }
  }

  // 关闭表结构窗口
  const closeTableStructure = () => {
    setSelectedStructureTable(null)
    setTableStructure(null)
  }

  // 导出表数据
  const exportTableData = async (tableName: string, format: 'json' | 'csv' = 'json') => {
    setExporting(true)
    setError(null)
    setSuccess(null)
    
    try {
      const response = await fetch(`/api/admin-mzg/database/export?table=${encodeURIComponent(tableName)}&format=${format}&limit=1000`)
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = `${tableName}_${new Date().toISOString().split('T')[0]}.${format}`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
        setSuccess(`表 ${tableName} 数据导出成功`)
      } else {
        const result = await response.json()
        setError(result.message || '导出失败')
      }
    } catch (error) {
      console.error('导出数据错误:', error)
      setError('导出失败')
    } finally {
      setExporting(false)
    }
  }

  // 显示导入对话框
  const showImportDialogForTable = (tableName: string) => {
    setShowImportDialog(tableName)
  }

  // 导入表数据
  const importTableData = async (tableName: string, file: File, mode: 'append' | 'replace' | 'update' = 'append') => {
    setImporting(true)
    setError(null)
    setSuccess(null)
    
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('tableName', tableName)
      formData.append('mode', mode)
      
      const response = await fetch('/api/admin-mzg/database/import', {
        method: 'POST',
        body: formData
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSuccess(result.message)
        // 刷新表列表以更新记录数
        fetchTables()
      } else {
        setError(result.message || '导入失败')
      }
    } catch (error) {
      console.error('导入数据错误:', error)
      setError('导入失败')
    } finally {
      setImporting(false)
      setShowImportDialog(null)
    }
  }

  // 显示删除确认对话框
  const showDeleteDialogForTable = (tableName: string) => {
    setShowDeleteDialog(tableName)
    setDeleteConfirmText("")
    setDeleteSafetyCode("")
  }

  // 删除数据表
  const deleteTable = async (tableName: string) => {
    console.log('开始删除表:', tableName)
    console.log('确认文本:', deleteConfirmText)
    console.log('安全码:', deleteSafetyCode)
    
    setDeleting(true)
    setError(null)
    setSuccess(null)
    
    try {
      const requestBody = {
        tableName,
        confirmText: deleteConfirmText,
        safetyCode: deleteSafetyCode
      }
      
      console.log('发送删除请求:', requestBody)
      
      const response = await fetch('/api/admin-mzg/database', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      })
      
      console.log('删除请求响应状态:', response.status)
      
      const result = await response.json()
      console.log('删除请求响应数据:', result)
      
      if (result.success) {
        setSuccess(`表 "${tableName}" 删除成功`)
        console.log('删除成功，刷新表列表')
        // 刷新表列表
        fetchTables()
        // 关闭删除对话框
        setShowDeleteDialog(null)
        setDeleteConfirmText("")
        setDeleteSafetyCode("")
      } else {
        console.error('删除失败:', result.message)
        setError(result.message || '删除失败')
      }
    } catch (error) {
      console.error('删除表错误:', error)
      setError('删除操作失败')
    } finally {
      setDeleting(false)
    }
  }

  // 检查是否可以删除表
  const canDeleteTable = (tableName: string) => {
    // 禁止删除的核心系统表和业务表
    const protectedTables = [
      'admin_users',
      'admin_sessions', 
      'users',
      'user_sessions',
      'user_activity_logs',
      'products',
      'product_categories',
      'product_series', 
      'quote_requests'
    ]
    return !protectedTables.includes(tableName)
  }

  // 创建测试表
  const createTestTable = async () => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    
    try {
      const response = await fetch('/api/admin-mzg/database/test-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSuccess(result.message)
        // 刷新表列表
        fetchTables()
      } else {
        setError(result.message || '创建测试表失败')
      }
    } catch (error) {
      console.error('创建测试表错误:', error)
      setError('创建测试表失败')
    } finally {
      setLoading(false)
    }
  }

  // 添加新字段
  const addColumn = () => {
    setCustomColumns([...customColumns, {
      name: "",
      type: "varchar",
      maxLength: 255,
      precision: 10,
      scale: 2,
      nullable: true,
      defaultValue: "",
      primaryKey: false,
      unique: false,
      comment: ""
    }])
  }

  // 删除字段
  const removeColumn = (index: number) => {
    if (customColumns.length > 1) {
      setCustomColumns(customColumns.filter((_, i) => i !== index))
    }
  }

  // 更新字段属性
  const updateColumn = (index: number, field: string, value: any) => {
    const newColumns = [...customColumns]
    newColumns[index] = { ...newColumns[index], [field]: value }
    setCustomColumns(newColumns)
  }

  // 重置自定义表单
  const resetCustomForm = () => {
    setCustomTableName("")
    setCustomTableComment("")
    setCustomColumns([{
      name: "",
      type: "varchar",
      maxLength: 255,
      precision: 10,
      scale: 2,
      nullable: true,
      defaultValue: "",
      primaryKey: false,
      unique: false,
      comment: ""
    }])
    setTableOptions({
      addAutoId: true,
      addTimestamps: true
    })
  }

  // 创建自定义表
  const createCustomTable = async () => {
    setCreatingTable(true)
    setError(null)
    setSuccess(null)
    
    try {
      // 验证表名
      if (!customTableName.trim()) {
        setError("请输入表名")
        return
      }

      // 验证字段
      const validColumns = customColumns.filter(col => col.name.trim())
      if (validColumns.length === 0) {
        setError("请至少添加一个字段")
        return
      }

      // 检查字段名重复
      const columnNames = validColumns.map(col => col.name.trim().toLowerCase())
      const duplicates = columnNames.filter((name, index) => columnNames.indexOf(name) !== index)
      if (duplicates.length > 0) {
        setError(`字段名重复: ${duplicates.join(', ')}`)
        return
      }

      const tableData = {
        tableName: customTableName.trim(),
        columns: validColumns.map(col => ({
          name: col.name.trim(),
          type: col.type,
          maxLength: col.maxLength,
          precision: col.precision,
          scale: col.scale,
          nullable: col.nullable,
          defaultValue: col.defaultValue.trim() || undefined,
          primaryKey: col.primaryKey,
          unique: col.unique,
          comment: col.comment.trim() || undefined
        })),
        options: {
          ...tableOptions,
          comment: customTableComment.trim() || undefined
        }
      }

      console.log('创建自定义表:', tableData)

      const response = await fetch('/api/admin-mzg/database/create-custom-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tableData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSuccess(result.message)
        setShowCustomCreateDialog(false)
        resetCustomForm()
        // 刷新表列表
        fetchTables()
      } else {
        setError(result.message || '创建表失败')
      }
    } catch (error) {
      console.error('创建自定义表错误:', error)
      setError('创建表失败')
    } finally {
      setCreatingTable(false)
    }
  }

  // 页面加载时获取基本信息
  useEffect(() => {
    fetchDatabaseInfo()
    fetchTables()
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Database className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-2xl font-bold">数据库管理</h1>
          <p className="text-gray-600">数据库连接测试和表结构查询</p>
        </div>
      </div>

      {/* 错误和成功提示 */}
      {error && (
        <Alert className="border-red-200 bg-red-50">
          <XCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}
      
      {success && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">{success}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 数据库基本信息 */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-lg">数据库信息</CardTitle>
              <CardDescription>查看当前数据库基本配置</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchDatabaseInfo}
              disabled={loading}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              刷新
            </Button>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
              </div>
            ) : databaseInfo ? (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">数据库名称:</span>
                  <Badge variant="outline">{databaseInfo.database_name}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">当前用户:</span>
                  <Badge variant="outline">{databaseInfo.current_user}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">连接时间:</span>
                  <span className="text-sm font-mono">
                    {new Date(databaseInfo.current_time).toLocaleString()}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-600">版本信息:</span>
                  <p className="text-xs text-gray-500 mt-1 font-mono leading-relaxed">
                    {databaseInfo.version}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                暂无数据
              </div>
            )}
          </CardContent>
        </Card>

        {/* 数据库连接测试 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">连接测试</CardTitle>
            <CardDescription>测试数据库连接状态</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                onClick={testConnection}
                disabled={connectionTesting}
                className="w-full"
              >
                <Activity className={`w-4 h-4 mr-2 ${connectionTesting ? 'animate-pulse' : ''}`} />
                {connectionTesting ? '测试中...' : '测试连接'}
              </Button>
              
              {connectionTest && (
                <div className="space-y-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">连接成功</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">服务器时间:</span>
                      <span className="font-mono">
                        {new Date(connectionTest.currentTime).toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">数据库版本:</span>
                      <p className="text-xs text-gray-500 mt-1 font-mono">
                        {connectionTest.version}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 数据库表列表 */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <TableIcon className="w-5 h-5" />
              数据库表
            </CardTitle>
            <CardDescription>查看数据库中的所有表结构</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setShowCustomCreateDialog(true)}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Database className="w-4 h-4 mr-2" />
              创建数据库表
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={createTestTable}
              disabled={loading}
            >
              <Database className="w-4 h-4 mr-2" />
              创建测试表
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchTables}
              disabled={tablesLoading}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${tablesLoading ? 'animate-spin' : ''}`} />
              刷新表列表
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {tablesLoading ? (
            <div className="flex items-center justify-center py-8">
              <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
            </div>
          ) : tables.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <Info className="w-4 h-4" />
                <span>共找到 {tables.length} 个表</span>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>表名</TableHead>
                      <TableHead>所有者</TableHead>
                      <TableHead>记录数</TableHead>
                      <TableHead>索引</TableHead>
                      <TableHead>规则</TableHead>
                      <TableHead>触发器</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tables.map((table) => (
                      <TableRow key={table.tablename}>
                        <TableCell className="font-medium font-mono">
                          {table.tablename}
                        </TableCell>
                        <TableCell>{table.tableowner}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">
                            {table.rowCount.toLocaleString()}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={table.hasindexes ? "default" : "outline"}>
                            {table.hasindexes ? "是" : "否"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={table.hasrules ? "default" : "outline"}>
                            {table.hasrules ? "是" : "否"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={table.hastriggers ? "default" : "outline"}>
                            {table.hastriggers ? "是" : "否"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1 flex-wrap">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => fetchTableDetails(table.tablename)}
                              disabled={tableDetailsLoading}
                              title="查看表详情"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => fetchTableRecords(table.tablename)}
                              disabled={tableRecordsLoading}
                              title="查看记录"
                            >
                              <FileText className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => fetchTableStructure(table.tablename)}
                              disabled={tableStructureLoading}
                              title="查看表结构"
                            >
                              <Settings className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => showImportDialogForTable(table.tablename)}
                              disabled={importing}
                              title="导入数据"
                            >
                              <Upload className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => exportTableData(table.tablename, 'json')}
                              disabled={exporting}
                              title="导出JSON"
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                            {canDeleteTable(table.tablename) ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => showDeleteDialogForTable(table.tablename)}
                                disabled={deleting}
                                title="删除表"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            ) : (
                              <Button
                                variant="ghost"
                                size="sm"
                                disabled
                                title="系统表，禁止删除"
                                className="text-gray-300"
                              >
                                <Shield className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <TableIcon className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>暂无数据表</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 表详细信息模态窗口 */}
      {selectedTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-lg font-semibold">表详细信息</h3>
                <p className="text-sm text-gray-600 font-mono">{selectedTable}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={closeTableDetails}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto p-6">
              {tableDetailsLoading ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
                </div>
              ) : tableDetails ? (
                <div className="space-y-6">
                  {/* 表基本信息 */}
                  {tableDetails.size && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">表信息</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">总大小:</span>
                            <div className="font-mono">{tableDetails.size.total_size}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">表大小:</span>
                            <div className="font-mono">{tableDetails.size.table_size}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">索引大小:</span>
                            <div className="font-mono">{tableDetails.size.index_size}</div>
                          </div>
                        </div>
                        {tableDetails.comment && (
                          <div className="mt-4">
                            <span className="text-gray-600">表注释:</span>
                            <p className="text-sm mt-1">{tableDetails.comment}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* 字段信息 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">字段信息</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>字段名</TableHead>
                              <TableHead>数据类型</TableHead>
                              <TableHead>允许空值</TableHead>
                              <TableHead>默认值</TableHead>
                              <TableHead>长度/精度</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {tableDetails.columns.map((column) => (
                              <TableRow key={column.column_name}>
                                <TableCell className="font-mono font-medium">
                                  {column.column_name}
                                </TableCell>
                                <TableCell className="font-mono">
                                  {column.data_type}
                                </TableCell>
                                <TableCell>
                                  <Badge variant={column.is_nullable === 'YES' ? "outline" : "default"}>
                                    {column.is_nullable === 'YES' ? '是' : '否'}
                                  </Badge>
                                </TableCell>
                                <TableCell className="font-mono text-xs">
                                  {column.column_default || '-'}
                                </TableCell>
                                <TableCell className="font-mono text-xs">
                                  {column.character_maximum_length ? 
                                    `${column.character_maximum_length}` : 
                                    column.numeric_precision ? 
                                      `${column.numeric_precision}${column.numeric_scale ? `,${column.numeric_scale}` : ''}` : 
                                      '-'
                                  }
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 索引信息 */}
                  {tableDetails.indexes.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">索引信息</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {tableDetails.indexes.map((index, i) => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              <div className="font-medium font-mono text-sm">{index.index_name}</div>
                              <div className="text-xs text-gray-600 font-mono mt-1">{index.index_definition}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* 约束信息 */}
                  {tableDetails.constraints.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">约束信息</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>约束名</TableHead>
                                <TableHead>约束类型</TableHead>
                                <TableHead>字段</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {tableDetails.constraints.map((constraint, i) => (
                                <TableRow key={i}>
                                  <TableCell className="font-mono text-sm">
                                    {constraint.constraint_name}
                                  </TableCell>
                                  <TableCell>
                                    <Badge variant="secondary">
                                      {constraint.constraint_type}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="font-mono text-sm">
                                    {constraint.column_name}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  获取表信息失败
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 表记录数据模态窗口 */}
      {selectedRecordsTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-lg font-semibold">表记录数据</h3>
                <p className="text-sm text-gray-600 font-mono">{selectedRecordsTable}</p>
                {tableRecords && (
                  <p className="text-xs text-gray-500 mt-1">
                    共 {tableRecords.pagination.totalCount.toLocaleString()} 条记录
                  </p>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={closeTableRecords}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto p-6">
              {tableRecordsLoading ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
                </div>
              ) : tableRecords ? (
                <div className="space-y-4">
                  {/* 分页信息 */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      第 {tableRecords.pagination.currentPage} 页，共 {tableRecords.pagination.totalPages} 页
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={!tableRecords.pagination.hasPrev || tableRecordsLoading}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        上一页
                      </Button>
                      <span className="text-sm px-3 py-1 bg-gray-100 rounded">
                        {currentPage} / {tableRecords.pagination.totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={!tableRecords.pagination.hasNext || tableRecordsLoading}
                      >
                        下一页
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* 数据表格 */}
                  {tableRecords.records.length > 0 ? (
                    <div className="rounded-md border overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            {tableRecords.columns.map((column) => (
                              <TableHead key={column.name} className="min-w-32">
                                <div>
                                  <div className="font-medium">{column.name}</div>
                                  <div className="text-xs text-gray-500 font-normal">{column.type}</div>
                                </div>
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tableRecords.records.map((record, index) => (
                            <TableRow key={index}>
                              {tableRecords.columns.map((column) => (
                                <TableCell key={column.name} className="font-mono text-sm max-w-64">
                                  <div className="truncate" title={String(record[column.name] || '')}>
                                    {record[column.name] === null ? (
                                      <span className="text-gray-400 italic">NULL</span>
                                    ) : typeof record[column.name] === 'object' ? (
                                      <span className="text-blue-600">
                                        {JSON.stringify(record[column.name])}
                                      </span>
                                    ) : record[column.name] === true ? (
                                      <span className="text-green-600">true</span>
                                    ) : record[column.name] === false ? (
                                      <span className="text-red-600">false</span>
                                    ) : (
                                      String(record[column.name])
                                    )}
                                  </div>
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                      <p>该表暂无数据记录</p>
                    </div>
                  )}

                  {/* 底部分页 */}
                  {tableRecords.pagination.totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 pt-4 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1 || tableRecordsLoading}
                      >
                        首页
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={!tableRecords.pagination.hasPrev || tableRecordsLoading}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      
                      {/* 页码按钮 */}
                      {Array.from({ length: Math.min(5, tableRecords.pagination.totalPages) }, (_, i) => {
                        const startPage = Math.max(1, currentPage - 2)
                        const pageNum = startPage + i
                        
                        if (pageNum > tableRecords.pagination.totalPages) return null
                        
                        return (
                          <Button
                            key={pageNum}
                            variant={pageNum === currentPage ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(pageNum)}
                            disabled={tableRecordsLoading}
                          >
                            {pageNum}
                          </Button>
                        )
                      })}
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={!tableRecords.pagination.hasNext || tableRecordsLoading}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(tableRecords.pagination.totalPages)}
                        disabled={currentPage === tableRecords.pagination.totalPages || tableRecordsLoading}
                      >
                        末页
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  获取表记录失败
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 表结构详细信息模态窗口 */}
      {selectedStructureTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-lg font-semibold">表结构详情</h3>
                <p className="text-sm text-gray-600 font-mono">{selectedStructureTable}</p>
                {tableStructure?.comment && (
                  <p className="text-xs text-gray-500 mt-1">{tableStructure.comment}</p>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={closeTableStructure}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto p-6">
              {tableStructureLoading ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
                </div>
              ) : tableStructure ? (
                <div className="space-y-6">
                  {/* 字段信息 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">字段结构</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>序号</TableHead>
                              <TableHead>字段名</TableHead>
                              <TableHead>数据类型</TableHead>
                              <TableHead>可为空</TableHead>
                              <TableHead>默认值</TableHead>
                              <TableHead>主键</TableHead>
                              <TableHead>长度/精度</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {tableStructure.columns.map((column) => (
                              <TableRow key={column.name}>
                                <TableCell className="text-center text-sm text-gray-500">
                                  {column.position}
                                </TableCell>
                                <TableCell className="font-mono font-medium">
                                  {column.name}
                                </TableCell>
                                <TableCell className="font-mono">
                                  {column.type}
                                </TableCell>
                                <TableCell>
                                  <Badge variant={column.nullable ? "outline" : "default"}>
                                    {column.nullable ? '是' : '否'}
                                  </Badge>
                                </TableCell>
                                <TableCell className="font-mono text-xs max-w-32 truncate">
                                  {column.default || '-'}
                                </TableCell>
                                <TableCell>
                                  <Badge variant={column.isPrimaryKey ? "default" : "outline"}>
                                    {column.isPrimaryKey ? '是' : '否'}
                                  </Badge>
                                </TableCell>
                                <TableCell className="font-mono text-xs">
                                  {column.maxLength ? 
                                    `${column.maxLength}` : 
                                    column.precision ? 
                                      `${column.precision}${column.scale ? `,${column.scale}` : ''}` : 
                                      '-'
                                  }
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 索引信息 */}
                  {tableStructure.indexes.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">索引信息</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {tableStructure.indexes.map((index, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <div className="font-medium font-mono text-sm">{index.name}</div>
                                <Badge variant={index.isPrimary ? "default" : "secondary"}>
                                  {index.isPrimary ? '主键索引' : '普通索引'}
                                </Badge>
                              </div>
                              <div className="text-xs text-gray-600 font-mono">{index.definition}</div>
                                                             <div className="text-xs text-gray-500 mt-2">
                                 字段: {Array.isArray(index.columns) ? index.columns.join(', ') : '未知'}
                               </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* 外键约束 */}
                  {tableStructure.foreignKeys.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">外键约束</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>约束名</TableHead>
                                <TableHead>本表字段</TableHead>
                                <TableHead>引用表</TableHead>
                                <TableHead>引用字段</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {tableStructure.foreignKeys.map((fk, i) => (
                                <TableRow key={i}>
                                  <TableCell className="font-mono text-sm">
                                    {fk.constraintName}
                                  </TableCell>
                                  <TableCell className="font-mono">
                                    {fk.column}
                                  </TableCell>
                                  <TableCell className="font-mono">
                                    {fk.referencedTable}
                                  </TableCell>
                                  <TableCell className="font-mono">
                                    {fk.referencedColumn}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* 检查约束 */}
                  {tableStructure.checkConstraints.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">检查约束</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {tableStructure.checkConstraints.map((constraint, i) => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              <div className="font-medium font-mono text-sm">{constraint.name}</div>
                              <div className="text-xs text-gray-600 font-mono mt-1">{constraint.definition}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  获取表结构失败
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 导入数据对话框 */}
      {showImportDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-lg font-semibold">导入数据</h3>
                <p className="text-sm text-gray-600 font-mono">{showImportDialog}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowImportDialog(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    选择文件 (支持 JSON, CSV)
                  </label>
                  <input
                    type="file"
                    accept=".json,.csv"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file && showImportDialog) {
                        importTableData(showImportDialog, file, 'append')
                      }
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    disabled={importing}
                  />
                </div>
                
                {importing && (
                  <div className="flex items-center justify-center py-4">
                    <RefreshCw className="w-5 h-5 animate-spin text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">正在导入数据...</span>
                  </div>
                )}
                
                <div className="text-xs text-gray-500">
                  <p>• JSON文件：支持对象数组格式</p>
                  <p>• CSV文件：第一行为标题行</p>
                  <p>• 导入模式：追加到表中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 创建自定义表对话框 */}
      {showCustomCreateDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">创建自定义数据表</h3>
                  <p className="text-sm text-blue-600">设计您的数据表结构</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setShowCustomCreateDialog(false)
                  resetCustomForm()
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* 基本信息 */}
              <div className="space-y-4">
                <h4 className="text-md font-semibold flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  基本信息
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tableName">表名称 *</Label>
                    <Input
                      id="tableName"
                      value={customTableName}
                      onChange={(e) => setCustomTableName(e.target.value)}
                      placeholder="例如: user_profiles"
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">只能包含字母、数字、下划线和连字符</p>
                  </div>
                  <div>
                    <Label htmlFor="tableComment">表注释</Label>
                    <Input
                      id="tableComment"
                      value={customTableComment}
                      onChange={(e) => setCustomTableComment(e.target.value)}
                      placeholder="例如: 用户资料表"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* 表选项 */}
              <div className="space-y-4">
                <h4 className="text-md font-semibold flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  表选项
                </h4>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="addAutoId"
                      checked={tableOptions.addAutoId}
                      onCheckedChange={(checked) => 
                        setTableOptions({...tableOptions, addAutoId: !!checked})
                      }
                    />
                    <Label htmlFor="addAutoId" className="text-sm">
                      自动添加ID主键 (SERIAL)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="addTimestamps"
                      checked={tableOptions.addTimestamps}
                      onCheckedChange={(checked) => 
                        setTableOptions({...tableOptions, addTimestamps: !!checked})
                      }
                    />
                    <Label htmlFor="addTimestamps" className="text-sm">
                      自动添加时间戳字段 (created_at, updated_at)
                    </Label>
                  </div>
                </div>
              </div>

              {/* 字段定义 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-md font-semibold flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    字段定义
                  </h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addColumn}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    添加字段
                  </Button>
                </div>

                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {customColumns.map((column, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">字段 {index + 1}</span>
                        {customColumns.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeColumn(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {/* 字段名 */}
                        <div>
                          <Label className="text-xs">字段名 *</Label>
                          <Input
                            value={column.name}
                            onChange={(e) => updateColumn(index, 'name', e.target.value)}
                            placeholder="字段名"
                            className="mt-1"
                          />
                        </div>

                        {/* 数据类型 */}
                        <div>
                          <Label className="text-xs">数据类型</Label>
                          <Select
                            value={column.type}
                            onValueChange={(value) => updateColumn(index, 'type', value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="varchar">VARCHAR - 可变长字符串</SelectItem>
                              <SelectItem value="char">CHAR - 固定长字符串</SelectItem>
                              <SelectItem value="text">TEXT - 长文本</SelectItem>
                              <SelectItem value="integer">INTEGER - 整数</SelectItem>
                              <SelectItem value="bigint">BIGINT - 大整数</SelectItem>
                              <SelectItem value="smallint">SMALLINT - 小整数</SelectItem>
                              <SelectItem value="decimal">DECIMAL - 精确小数</SelectItem>
                              <SelectItem value="numeric">NUMERIC - 数值</SelectItem>
                              <SelectItem value="real">REAL - 单精度浮点数</SelectItem>
                              <SelectItem value="double">DOUBLE - 双精度浮点数</SelectItem>
                              <SelectItem value="boolean">BOOLEAN - 布尔值</SelectItem>
                              <SelectItem value="date">DATE - 日期</SelectItem>
                              <SelectItem value="time">TIME - 时间</SelectItem>
                              <SelectItem value="timestamp">TIMESTAMP - 时间戳</SelectItem>
                              <SelectItem value="timestamptz">TIMESTAMPTZ - 带时区时间戳</SelectItem>
                              <SelectItem value="json">JSON - JSON数据</SelectItem>
                              <SelectItem value="jsonb">JSONB - 二进制JSON</SelectItem>
                              <SelectItem value="uuid">UUID - 唯一标识符</SelectItem>
                              <SelectItem value="serial">SERIAL - 自增序列</SelectItem>
                              <SelectItem value="bigserial">BIGSERIAL - 大自增序列</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* 长度/精度 */}
                        {(column.type === 'varchar' || column.type === 'char') && (
                          <div>
                            <Label className="text-xs">最大长度</Label>
                            <Input
                              type="number"
                              value={column.maxLength}
                              onChange={(e) => updateColumn(index, 'maxLength', parseInt(e.target.value) || 255)}
                              min="1"
                              max="65535"
                              className="mt-1"
                            />
                          </div>
                        )}

                        {(column.type === 'decimal' || column.type === 'numeric') && (
                          <>
                            <div>
                              <Label className="text-xs">精度</Label>
                              <Input
                                type="number"
                                value={column.precision}
                                onChange={(e) => updateColumn(index, 'precision', parseInt(e.target.value) || 10)}
                                min="1"
                                max="65"
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label className="text-xs">标度</Label>
                              <Input
                                type="number"
                                value={column.scale}
                                onChange={(e) => updateColumn(index, 'scale', parseInt(e.target.value) || 2)}
                                min="0"
                                max="30"
                                className="mt-1"
                              />
                            </div>
                          </>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* 默认值 */}
                        <div>
                          <Label className="text-xs">默认值</Label>
                          <Input
                            value={column.defaultValue}
                            onChange={(e) => updateColumn(index, 'defaultValue', e.target.value)}
                            placeholder="留空表示无默认值"
                            className="mt-1"
                          />
                        </div>

                        {/* 注释 */}
                        <div>
                          <Label className="text-xs">字段注释</Label>
                          <Input
                            value={column.comment}
                            onChange={(e) => updateColumn(index, 'comment', e.target.value)}
                            placeholder="字段说明"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* 约束选项 */}
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`nullable-${index}`}
                            checked={column.nullable}
                            onCheckedChange={(checked) => updateColumn(index, 'nullable', !!checked)}
                          />
                          <Label htmlFor={`nullable-${index}`} className="text-xs">允许为空</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`unique-${index}`}
                            checked={column.unique}
                            onCheckedChange={(checked) => updateColumn(index, 'unique', !!checked)}
                          />
                          <Label htmlFor={`unique-${index}`} className="text-xs">唯一值</Label>
                        </div>
                        {!tableOptions.addAutoId && (
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`primaryKey-${index}`}
                              checked={column.primaryKey}
                              onCheckedChange={(checked) => {
                                updateColumn(index, 'primaryKey', !!checked)
                                // 如果设为主键，则自动设为非空
                                if (checked) {
                                  updateColumn(index, 'nullable', false)
                                }
                              }}
                            />
                            <Label htmlFor={`primaryKey-${index}`} className="text-xs">主键</Label>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3 justify-end pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowCustomCreateDialog(false)
                    resetCustomForm()
                  }}
                  disabled={creatingTable}
                >
                  取消
                </Button>
                <Button
                  onClick={createCustomTable}
                  disabled={creatingTable || !customTableName.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {creatingTable ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      创建中...
                    </>
                  ) : (
                    <>
                      <Database className="w-4 h-4 mr-2" />
                      创建表
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 删除表确认对话框 */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900">删除数据表</h3>
                  <p className="text-sm text-red-600 font-mono">{showDeleteDialog}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowDeleteDialog(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* 警告信息 */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div className="text-sm text-red-800">
                    <p className="font-medium mb-2">⚠️ 危险操作警告</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>此操作将永久删除表 <code className="bg-red-100 px-1 rounded">{showDeleteDialog}</code> 及其所有数据</li>
                      <li>删除后无法恢复，请确保已备份重要数据</li>
                      <li>相关的外键约束和索引也将被删除</li>
                      <li>只有超级管理员可以执行此操作</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 安全验证 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    第一步：输入确认文本
                  </label>
                  <div className="text-sm text-gray-600 mb-2">
                    请在下方输入框中输入：<code className="bg-gray-100 px-2 py-1 rounded text-red-600 font-mono">DELETE TABLE {showDeleteDialog}</code>
                  </div>
                  <input
                    type="text"
                    value={deleteConfirmText}
                    onChange={(e) => setDeleteConfirmText(e.target.value)}
                    placeholder={`DELETE TABLE ${showDeleteDialog}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 font-mono text-sm"
                    disabled={deleting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    第二步：输入安全码
                  </label>
                  <div className="text-sm text-gray-600 mb-2">
                    请输入安全码：<code className="bg-gray-100 px-2 py-1 rounded text-red-600 font-mono">DELETE-CONFIRM-2024</code>
                  </div>
                  <input
                    type="text"
                    value={deleteSafetyCode}
                    onChange={(e) => setDeleteSafetyCode(e.target.value)}
                    placeholder="DELETE-CONFIRM-2024"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 font-mono text-sm"
                    disabled={deleting}
                  />
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3 justify-end pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowDeleteDialog(null)
                    setDeleteConfirmText("")
                    setDeleteSafetyCode("")
                  }}
                  disabled={deleting}
                >
                  取消
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => showDeleteDialog && deleteTable(showDeleteDialog)}
                  disabled={
                    deleting ||
                    deleteConfirmText !== `DELETE TABLE ${showDeleteDialog}` ||
                    deleteSafetyCode !== "DELETE-CONFIRM-2024"
                  }
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  {deleting ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      删除中...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4 mr-2" />
                      确认删除
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 