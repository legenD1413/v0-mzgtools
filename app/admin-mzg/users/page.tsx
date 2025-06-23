'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Users, 
  Search,
  UserPlus,
  Eye,
  Edit,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  Mail,
  Phone,
  Building,
  Crown,
  Shield,
  User
} from "lucide-react"

interface User {
  id: number
  username: string
  email: string
  first_name: string | null
  last_name: string | null
  company: string | null
  phone: string | null
  user_type: string
  subscription_level: string
  credit_limit: number
  is_active: boolean
  email_verified: boolean
  last_login: string | null
  login_count: number
  created_at: string
  updated_at: string
}

interface UserStats {
  total_users: number
  active_users: number
  inactive_users: number
  customers: number
  partners: number
  vendors: number
  verified_users: number
  new_users_30d: number
}

interface UserFormData {
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  company: string
  phone: string
  address: string
  city: string
  state: string
  country: string
  postalCode: string
  userType: string
  subscriptionLevel: string
  creditLimit: number
  isActive: boolean
}

export default function UsersManagementPage() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [stats, setStats] = useState<UserStats | null>(null)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [showUserModal, setShowUserModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [userDetails, setUserDetails] = useState<any>(null)
  
  // 分页和筛选
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [userTypeFilter, setUserTypeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  // 表单数据
  const [formData, setFormData] = useState<UserFormData>({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    userType: 'customer',
    subscriptionLevel: 'basic',
    creditLimit: 0,
    isActive: true
  })

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // 获取用户列表
  const fetchUsers = async (page = 1, search = '', userType = '', status = '') => {
    setLoading(true)
    setError(null)
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(search && { search }),
        ...(userType && userType !== 'all' && { userType }),
        ...(status && status !== 'all' && { status })
      })

      console.log('正在请求API:', `/api/admin-mzg/users?${params}`)
      const response = await fetch(`/api/admin-mzg/users?${params}`)
      console.log('API响应状态:', response.status)
      
      const result = await response.json()
      console.log('API响应数据:', result)
      
      if (response.status === 401) {
        setError('未授权访问，请先登录管理后台')
        // 重定向到登录页面
        window.location.href = '/admin-mzg/login'
        return
      }
      
      if (result.success) {
        console.log('设置用户数据:', result.data.users.length, '个用户')
        setUsers(result.data.users || [])
        setStats(result.data.stats || null)
        setCurrentPage(result.data.pagination?.page || 1)
        setTotalPages(result.data.pagination?.totalPages || 0)
      } else {
        console.error('API返回错误:', result)
        setError(result.message || result.error || '获取用户列表失败')
      }
    } catch (error) {
      console.error('获取用户列表错误:', error)
      setError('网络请求失败')
    } finally {
      setLoading(false)
    }
  }

  // 获取用户详情
  const fetchUserDetails = async (userId: number) => {
    try {
      const response = await fetch(`/api/admin-mzg/users/${userId}`)
      const result = await response.json()
      
      if (result.success) {
        setUserDetails(result.data)
      } else {
        setError(result.message || '获取用户详情失败')
      }
    } catch (error) {
      console.error('获取用户详情错误:', error)
      setError('网络请求失败')
    }
  }

  // 创建用户
  const createUser = async () => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    
    try {
      const response = await fetch('/api/admin-mzg/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSuccess(result.message)
        setShowCreateModal(false)
        resetForm()
        fetchUsers(currentPage, searchTerm, userTypeFilter, statusFilter)
      } else {
        setError(result.message || '创建用户失败')
      }
    } catch (error) {
      console.error('创建用户错误:', error)
      setError('网络请求失败')
    } finally {
      setLoading(false)
    }
  }

  // 更新用户
  const updateUser = async (userId: number, updateData: Partial<UserFormData>) => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    
    try {
      const response = await fetch(`/api/admin-mzg/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSuccess(result.message)
        fetchUsers(currentPage, searchTerm, userTypeFilter, statusFilter)
        if (userDetails?.user.id === userId) {
          fetchUserDetails(userId)
        }
      } else {
        setError(result.message || '更新用户失败')
      }
    } catch (error) {
      console.error('更新用户错误:', error)
      setError('网络请求失败')
    } finally {
      setLoading(false)
    }
  }

  // 删除用户
  const deleteUser = async (userId: number) => {
    if (!confirm('确定要删除这个用户吗？此操作不可撤销。')) {
      return
    }

    setLoading(true)
    setError(null)
    setSuccess(null)
    
    try {
      const response = await fetch(`/api/admin-mzg/users/${userId}`, {
        method: 'DELETE'
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSuccess(result.message)
        fetchUsers(currentPage, searchTerm, userTypeFilter, statusFilter)
        if (selectedUser?.id === userId) {
          setSelectedUser(null)
          setShowUserModal(false)
        }
      } else {
        setError(result.message || '删除用户失败')
      }
    } catch (error) {
      console.error('删除用户错误:', error)
      setError('网络请求失败')
    } finally {
      setLoading(false)
    }
  }

  // 重置表单
  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
      userType: 'customer',
      subscriptionLevel: 'basic',
      creditLimit: 0,
      isActive: true
    })
  }

  // 处理搜索
  const handleSearch = () => {
    setCurrentPage(1)
    fetchUsers(1, searchTerm, userTypeFilter, statusFilter)
  }

  // 处理分页
  const handlePageChange = (page: number) => {
    fetchUsers(page, searchTerm, userTypeFilter, statusFilter)
  }

  // 显示用户详情
  const showUserDetails = (user: User) => {
    setSelectedUser(user)
    setShowUserModal(true)
    fetchUserDetails(user.id)
  }

  // 获取用户类型图标
  const getUserTypeIcon = (userType: string) => {
    switch (userType) {
      case 'customer': return <User className="w-4 h-4" />
      case 'partner': return <Shield className="w-4 h-4" />
      case 'vendor': return <Building className="w-4 h-4" />
      default: return <User className="w-4 h-4" />
    }
  }

  // 获取订阅级别颜色
  const getSubscriptionColor = (level: string) => {
    switch (level) {
      case 'basic': return 'secondary'
      case 'premium': return 'default'
      case 'enterprise': return 'destructive'
      default: return 'secondary'
    }
  }

  // 页面加载时获取数据
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Users className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-2xl font-bold">用户管理</h1>
          <p className="text-gray-600">管理系统用户和会员信息</p>
        </div>
      </div>

      {/* 调试信息 */}
      {process.env.NODE_ENV === 'development' && (
        <Alert className="border-blue-200 bg-blue-50">
          <AlertDescription className="text-blue-800">
            调试信息: 用户数量={users.length}, 加载中={loading.toString()}, 当前页={currentPage}, 总页数={totalPages}, 统计数据={stats ? '有' : '无'}
          </AlertDescription>
        </Alert>
      )}

      {/* 错误和成功提示 */}
      {error && (
        <Alert className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}
      
      {success && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">{success}</AlertDescription>
        </Alert>
      )}

      {/* 统计卡片 */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">总用户</p>
                  <p className="text-2xl font-bold">{stats.total_users}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">活跃用户</p>
                  <p className="text-2xl font-bold text-green-600">{stats.active_users}</p>
                </div>
                <Shield className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">已验证</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.verified_users}</p>
                </div>
                <Mail className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">新用户(30天)</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.new_users_30d}</p>
                </div>
                <UserPlus className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 搜索和筛选 */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="搜索用户名、邮箱、公司名..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={userTypeFilter} onValueChange={setUserTypeFilter}>
              <SelectTrigger className="w-full md:w-32">
                <SelectValue placeholder="用户类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部类型</SelectItem>
                <SelectItem value="customer">客户</SelectItem>
                <SelectItem value="partner">合作伙伴</SelectItem>
                <SelectItem value="vendor">供应商</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-24">
                <SelectValue placeholder="状态" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部状态</SelectItem>
                <SelectItem value="active">活跃</SelectItem>
                <SelectItem value="inactive">禁用</SelectItem>
              </SelectContent>
            </Select>
            
            <Button onClick={handleSearch} disabled={loading}>
              <Filter className="w-4 h-4 mr-2" />
              筛选
            </Button>
            
            <Button onClick={() => setShowCreateModal(true)}>
              <UserPlus className="w-4 h-4 mr-2" />
              新增用户
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 用户列表 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>用户列表</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchUsers(currentPage, searchTerm, userTypeFilter, statusFilter)}
              disabled={loading}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              刷新
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
            </div>
          ) : users.length > 0 ? (
            <div className="space-y-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>用户信息</TableHead>
                      <TableHead>类型</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>登录次数</TableHead>
                      <TableHead>创建时间</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium flex items-center gap-2">
                              {getUserTypeIcon(user.user_type)}
                              {user.username}
                              {user.email_verified && (
                                <Badge variant="outline" className="text-xs">
                                  已验证
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                            {user.company && (
                              <div className="text-xs text-gray-400 flex items-center gap-1">
                                <Building className="w-3 h-3" />
                                {user.company}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <Badge variant={getSubscriptionColor(user.subscription_level)}>
                              {user.subscription_level}
                            </Badge>
                            <div className="text-xs text-gray-500">
                              {user.user_type === 'customer' ? '客户' : 
                               user.user_type === 'partner' ? '合作伙伴' : '供应商'}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.is_active ? "default" : "secondary"}>
                            {user.is_active ? '活跃' : '禁用'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {user.login_count} 次
                            {user.last_login && (
                              <div className="text-xs text-gray-500">
                                {new Date(user.last_login).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {new Date(user.created_at).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => showUserDetails(user)}
                              title="查看详情"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateUser(user.id, { isActive: !user.is_active })}
                              title={user.is_active ? '禁用用户' : '启用用户'}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteUser(user.id)}
                              title="删除用户"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* 分页 */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1 || loading}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    上一页
                  </Button>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const startPage = Math.max(1, currentPage - 2)
                      const pageNum = startPage + i
                      
                      if (pageNum > totalPages) return null
                      
                      return (
                        <Button
                          key={pageNum}
                          variant={pageNum === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(pageNum)}
                          disabled={loading}
                        >
                          {pageNum}
                        </Button>
                      )
                    })}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || loading}
                  >
                    下一页
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>暂无用户数据</p>
              <p className="text-sm mt-2">
                {error ? '请检查错误信息' : '尝试点击"刷新"按钮重新加载数据'}
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3"
                onClick={() => fetchUsers()}
              >
                重新加载
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 用户详情模态窗口 */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-lg font-semibold">用户详情</h3>
                <p className="text-sm text-gray-600">{selectedUser.username}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowUserModal(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto p-6">
              {userDetails ? (
                <div className="space-y-6">
                  {/* 基本信息 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">基本信息</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">用户名:</span>
                          <div className="font-medium">{userDetails.user.username}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">邮箱:</span>
                          <div className="font-medium">{userDetails.user.email}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">姓名:</span>
                          <div className="font-medium">
                            {[userDetails.user.first_name, userDetails.user.last_name].filter(Boolean).join(' ') || '-'}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">公司:</span>
                          <div className="font-medium">{userDetails.user.company || '-'}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">电话:</span>
                          <div className="font-medium">{userDetails.user.phone || '-'}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">用户类型:</span>
                          <div className="font-medium">{userDetails.user.user_type}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">订阅级别:</span>
                          <div className="font-medium">{userDetails.user.subscription_level}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">信用额度:</span>
                          <div className="font-medium">¥{userDetails.user.credit_limit}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 活动会话 */}
                  {userDetails.activeSessions && userDetails.activeSessions.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">活动会话</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {userDetails.activeSessions.map((session: any, index: number) => (
                            <div key={index} className="p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm">
                                <div><strong>设备:</strong> {session.device_info || '未知'}</div>
                                <div><strong>IP:</strong> {session.ip_address}</div>
                                <div><strong>登录时间:</strong> {new Date(session.created_at).toLocaleString()}</div>
                                <div><strong>过期时间:</strong> {new Date(session.expires_at).toLocaleString()}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* 活动日志 */}
                  {userDetails.activityLogs && userDetails.activityLogs.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">活动日志</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                          {userDetails.activityLogs.map((log: any, index: number) => (
                            <div key={index} className="text-sm border-l-2 border-gray-200 pl-3">
                              <div className="font-medium">{log.action}</div>
                              <div className="text-gray-500 text-xs">
                                {new Date(log.created_at).toLocaleString()}
                              </div>
                              {log.details && (
                                <div className="text-gray-600 text-xs mt-1">
                                  {JSON.stringify(log.details)}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 创建用户模态窗口 */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-lg font-semibold">新增用户</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowCreateModal(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="username">用户名 *</Label>
                  <Input
                    id="username"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    placeholder="输入用户名"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">邮箱 *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="输入邮箱地址"
                  />
                </div>
                
                <div>
                  <Label htmlFor="password">密码 *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="输入密码"
                  />
                </div>
                
                <div>
                  <Label htmlFor="userType">用户类型</Label>
                  <Select value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer">客户</SelectItem>
                      <SelectItem value="partner">合作伙伴</SelectItem>
                      <SelectItem value="vendor">供应商</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="firstName">名</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="输入名"
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">姓</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="输入姓"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">公司</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="输入公司名称"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">电话</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="输入电话号码"
                  />
                </div>
                
                <div className="col-span-2">
                  <Label htmlFor="address">地址</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="输入详细地址"
                  />
                </div>
                
                <div>
                  <Label htmlFor="city">城市</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="输入城市"
                  />
                </div>
                
                <div>
                  <Label htmlFor="state">省份/州</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    placeholder="输入省份或州"
                  />
                </div>
                
                <div>
                  <Label htmlFor="country">国家</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    placeholder="输入国家"
                  />
                </div>
                
                <div>
                  <Label htmlFor="postalCode">邮政编码</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                    placeholder="输入邮政编码"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subscriptionLevel">订阅级别</Label>
                  <Select value={formData.subscriptionLevel} onValueChange={(value) => setFormData({...formData, subscriptionLevel: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">基础版</SelectItem>
                      <SelectItem value="premium">高级版</SelectItem>
                      <SelectItem value="enterprise">企业版</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="creditLimit">信用额度</Label>
                  <Input
                    id="creditLimit"
                    type="number"
                    value={formData.creditLimit}
                    onChange={(e) => setFormData({...formData, creditLimit: parseFloat(e.target.value) || 0})}
                    placeholder="输入信用额度"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 p-6 border-t">
              <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                取消
              </Button>
              <Button onClick={createUser} disabled={loading || !formData.username || !formData.email || !formData.password}>
                {loading ? '创建中...' : '创建用户'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 