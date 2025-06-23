"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Plus, Search, Edit, Trash2, Eye, Shield, User, Settings, Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

// 类型定义
interface AdminUser {
  id: number
  username: string
  email?: string
  role: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

interface AdminStats {
  total: number
  active: number
  superAdmins: number
  admins: number
}

interface PaginationInfo {
  page: number
  limit: number
  total: number
  totalPages: number
}

export default function ManageUsersPage() {
  const { toast } = useToast()
  
  // 状态管理
  const [admins, setAdmins] = useState<AdminUser[]>([])
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  })
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  
  // 模态框状态
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedAdmin, setSelectedAdmin] = useState<AdminUser | null>(null)
  const [showViewModal, setShowViewModal] = useState(false)
  
  // 表单状态
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'admin',
    isActive: true
  })
  const [formLoading, setFormLoading] = useState(false)

  // 获取管理员列表
  const fetchAdmins = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString()
      })
      
      if (searchTerm) params.append('search', searchTerm)
      if (roleFilter !== 'all') params.append('role', roleFilter)

      const response = await fetch(`/api/admin-mzg/manage-users?${params}`)
      const data = await response.json()

      if (data.success) {
        setAdmins(data.data)
        setStats(data.stats)
        setPagination(data.pagination)
      } else {
        toast({
          title: "错误",
          description: "获取管理员列表失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('获取管理员列表错误:', error)
      toast({
        title: "错误",
        description: "获取管理员列表失败",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  // 创建管理员
  const handleCreate = async () => {
    if (!formData.username || !formData.password) {
      toast({
        title: "错误",
        description: "用户名和密码为必填项",
        variant: "destructive"
      })
      return
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "错误",
        description: "两次输入的密码不一致",
        variant: "destructive"
      })
      return
    }

    try {
      setFormLoading(true)
      const response = await fetch('/api/admin-mzg/manage-users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email || null,
          password: formData.password,
          role: formData.role,
          isActive: formData.isActive
        })
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: "管理员创建成功"
        })
        setShowCreateModal(false)
        resetForm()
        fetchAdmins()
      } else {
        toast({
          title: "错误",
          description: data.message || "创建管理员失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('创建管理员错误:', error)
      toast({
        title: "错误",
        description: "创建管理员失败",
        variant: "destructive"
      })
    } finally {
      setFormLoading(false)
    }
  }

  // 编辑管理员
  const handleEdit = async () => {
    if (!selectedAdmin) return

    if (formData.password && formData.password !== formData.confirmPassword) {
      toast({
        title: "错误",
        description: "两次输入的密码不一致",
        variant: "destructive"
      })
      return
    }

    try {
      setFormLoading(true)
      const updateData: any = {}
      
      if (formData.username && formData.username !== selectedAdmin.username) {
        updateData.username = formData.username
      }
      if (formData.email !== selectedAdmin.email) {
        updateData.email = formData.email || null
      }
      if (formData.role !== selectedAdmin.role) {
        updateData.role = formData.role
      }
      if (formData.isActive !== selectedAdmin.isActive) {
        updateData.isActive = formData.isActive
      }
      if (formData.password) {
        updateData.password = formData.password
      }

      const response = await fetch(`/api/admin-mzg/manage-users/${selectedAdmin.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: "管理员信息更新成功"
        })
        setShowEditModal(false)
        resetForm()
        fetchAdmins()
      } else {
        toast({
          title: "错误",
          description: data.message || "更新管理员信息失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('更新管理员错误:', error)
      toast({
        title: "错误",
        description: "更新管理员信息失败",
        variant: "destructive"
      })
    } finally {
      setFormLoading(false)
    }
  }

  // 删除管理员
  const handleDelete = async (admin: AdminUser) => {
    try {
      const response = await fetch(`/api/admin-mzg/manage-users/${admin.id}`, {
        method: 'DELETE'
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "成功",
          description: "管理员删除成功"
        })
        fetchAdmins()
      } else {
        toast({
          title: "错误",
          description: data.message || "删除管理员失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('删除管理员错误:', error)
      toast({
        title: "错误",
        description: "删除管理员失败",
        variant: "destructive"
      })
    }
  }

  // 重置表单
  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'admin',
      isActive: true
    })
    setSelectedAdmin(null)
  }

  // 打开编辑模态框
  const openEditModal = (admin: AdminUser) => {
    setSelectedAdmin(admin)
    setFormData({
      username: admin.username,
      email: admin.email || '',
      password: '',
      confirmPassword: '',
      role: admin.role,
      isActive: admin.isActive
    })
    setShowEditModal(true)
  }

  // 打开查看模态框
  const openViewModal = (admin: AdminUser) => {
    setSelectedAdmin(admin)
    setShowViewModal(true)
  }

  // 格式化日期
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN')
  }

  // 角色标签样式
  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'super_admin':
        return <Badge variant="destructive" className="gap-1"><Shield className="w-3 h-3" />超级管理员</Badge>
      case 'admin':
        return <Badge variant="secondary" className="gap-1"><User className="w-3 h-3" />普通管理员</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  // 页面加载时获取数据
  useEffect(() => {
    fetchAdmins()
  }, [pagination.page, searchTerm, roleFilter])

  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">管理员账户管理</h1>
          <p className="text-gray-600 mt-2">管理后台管理员账户，支持增加、删除、修改管理员账户和密码</p>
        </div>
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="gap-2">
              <Plus className="w-4 h-4" />
              添加管理员
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>添加管理员</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">用户名 *</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                  placeholder="请输入用户名"
                />
              </div>
              <div>
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="请输入邮箱（可选）"
                />
              </div>
              <div>
                <Label htmlFor="password">密码 *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="请输入密码"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">确认密码 *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  placeholder="请再次输入密码"
                />
              </div>
              <div>
                <Label htmlFor="role">角色</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择角色" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">普通管理员</SelectItem>
                    <SelectItem value="super_admin">超级管理员</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
                />
                <Label htmlFor="isActive">启用账户</Label>
              </div>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" onClick={() => setShowCreateModal(false)} className="flex-1">
                  取消
                </Button>
                <Button onClick={handleCreate} disabled={formLoading} className="flex-1">
                  {formLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                  创建
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* 统计卡片 */}
      {stats && (
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">总管理员</p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">活跃管理员</p>
                  <p className="text-2xl font-bold">{stats.active}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">超级管理员</p>
                  <p className="text-2xl font-bold">{stats.superAdmins}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Settings className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">普通管理员</p>
                  <p className="text-2xl font-bold">{stats.admins}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 搜索和筛选 */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="搜索用户名或邮箱..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="筛选角色" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有角色</SelectItem>
                <SelectItem value="super_admin">超级管理员</SelectItem>
                <SelectItem value="admin">普通管理员</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* 管理员列表 */}
      <Card>
        <CardHeader>
          <CardTitle>管理员列表</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="ml-2">加载中...</span>
            </div>
          ) : (
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>用户名</TableHead>
                    <TableHead>邮箱</TableHead>
                    <TableHead>角色</TableHead>
                    <TableHead>状态</TableHead>
                    <TableHead>创建时间</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admins.map((admin) => (
                    <TableRow key={admin.id}>
                      <TableCell className="font-medium">{admin.username}</TableCell>
                      <TableCell>{admin.email || '-'}</TableCell>
                      <TableCell>{getRoleBadge(admin.role)}</TableCell>
                      <TableCell>
                        <Badge variant={admin.isActive ? "default" : "secondary"}>
                          {admin.isActive ? "启用" : "禁用"}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDate(admin.createdAt)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openViewModal(admin)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openEditModal(admin)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>确认删除</AlertDialogTitle>
                                <AlertDialogDescription>
                                  确定要删除管理员 "{admin.username}" 吗？此操作无法撤销。
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>取消</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDelete(admin)}>
                                  删除
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* 分页 */}
              {pagination.totalPages > 1 && (
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-700">
                    共 {pagination.total} 条记录，第 {pagination.page} / {pagination.totalPages} 页
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={pagination.page <= 1}
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                    >
                      上一页
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={pagination.page >= pagination.totalPages}
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                    >
                      下一页
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>



      {/* 编辑管理员模态框 */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>编辑管理员</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-username">用户名</Label>
              <Input
                id="edit-username"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                placeholder="请输入用户名"
              />
            </div>
            <div>
              <Label htmlFor="edit-email">邮箱</Label>
              <Input
                id="edit-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="请输入邮箱（可选）"
              />
            </div>
            <div>
              <Label htmlFor="edit-password">新密码</Label>
              <Input
                id="edit-password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                placeholder="留空则不修改密码"
              />
            </div>
            {formData.password && (
              <div>
                <Label htmlFor="edit-confirmPassword">确认新密码</Label>
                <Input
                  id="edit-confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  placeholder="请再次输入新密码"
                />
              </div>
            )}
            <div>
              <Label htmlFor="edit-role">角色</Label>
              <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="选择角色" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">普通管理员</SelectItem>
                  <SelectItem value="super_admin">超级管理员</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="edit-isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
              />
              <Label htmlFor="edit-isActive">启用账户</Label>
            </div>
            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={() => setShowEditModal(false)} className="flex-1">
                取消
              </Button>
              <Button onClick={handleEdit} disabled={formLoading} className="flex-1">
                {formLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                保存
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 查看管理员详情模态框 */}
      <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>管理员详情</DialogTitle>
          </DialogHeader>
          {selectedAdmin && (
            <div className="space-y-4">
              <div>
                <Label>用户名</Label>
                <p className="text-sm bg-gray-50 p-2 rounded">{selectedAdmin.username}</p>
              </div>
              <div>
                <Label>邮箱</Label>
                <p className="text-sm bg-gray-50 p-2 rounded">{selectedAdmin.email || '未设置'}</p>
              </div>
              <div>
                <Label>角色</Label>
                <div className="py-2">{getRoleBadge(selectedAdmin.role)}</div>
              </div>
              <div>
                <Label>状态</Label>
                <div className="py-2">
                  <Badge variant={selectedAdmin.isActive ? "default" : "secondary"}>
                    {selectedAdmin.isActive ? "启用" : "禁用"}
                  </Badge>
                </div>
              </div>
              <div>
                <Label>创建时间</Label>
                <p className="text-sm bg-gray-50 p-2 rounded">{formatDate(selectedAdmin.createdAt)}</p>
              </div>
              <div>
                <Label>更新时间</Label>
                <p className="text-sm bg-gray-50 p-2 rounded">{formatDate(selectedAdmin.updatedAt)}</p>
              </div>
              <Button onClick={() => setShowViewModal(false)} className="w-full">
                关闭
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 