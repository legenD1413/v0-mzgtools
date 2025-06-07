"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Eye, Trash } from "lucide-react"
import { type QuoteRequest, updateQuoteRequestStatus, deleteQuoteRequest } from "@/app/actions/quote-actions"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface QuoteRequestsTableProps {
  requests: QuoteRequest[]
}

export default function QuoteRequestsTable({ requests: initialRequests }: QuoteRequestsTableProps) {
  const [requests, setRequests] = useState<QuoteRequest[]>(initialRequests)
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // 查看请求详情
  const handleViewRequest = (request: QuoteRequest) => {
    setSelectedRequest(request)
    setIsViewDialogOpen(true)

    // 如果状态是"new"，则更新为"viewed"
    if (request.status === "new") {
      handleUpdateStatus(request.id, "viewed")
    }
  }

  // 更新请求状态
  const handleUpdateStatus = async (id: string, status: QuoteRequest["status"]) => {
    setIsLoading(true)
    try {
      const updatedRequest = await updateQuoteRequestStatus(id, status)
      if (updatedRequest) {
        setRequests(requests.map((req) => (req.id === id ? { ...req, status } : req)))

        // 如果当前正在查看这个请求，也更新选中的请求
        if (selectedRequest?.id === id) {
          setSelectedRequest({ ...selectedRequest, status })
        }
      }
    } catch (error) {
      console.error("Failed to update status:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // 删除请求
  const handleDeleteRequest = async (id: string) => {
    if (!confirm("Are you sure you want to delete this request?")) {
      return
    }

    setIsLoading(true)
    try {
      const success = await deleteQuoteRequest(id)
      if (success) {
        setRequests(requests.filter((req) => req.id !== id))

        // 如果当前正在查看这个请求，关闭对话框
        if (selectedRequest?.id === id) {
          setIsViewDialogOpen(false)
        }
      }
    } catch (error) {
      console.error("Failed to delete request:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // 获取状态徽章颜色
  const getStatusBadgeVariant = (status: QuoteRequest["status"]) => {
    switch (status) {
      case "new":
        return "default"
      case "viewed":
        return "secondary"
      case "contacted":
        return "warning"
      case "completed":
        return "success"
      case "archived":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{format(new Date(request.createdAt), "MMM d, yyyy")}</TableCell>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.company || "-"}</TableCell>
              <TableCell>{request.email}</TableCell>
              <TableCell>
                <Badge variant={getStatusBadgeVariant(request.status)}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => handleViewRequest(request)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Set Status</DropdownMenuLabel>
                    <DropdownMenuItem
                      disabled={request.status === "new" || isLoading}
                      onClick={() => handleUpdateStatus(request.id, "new")}
                    >
                      New
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      disabled={request.status === "viewed" || isLoading}
                      onClick={() => handleUpdateStatus(request.id, "viewed")}
                    >
                      Viewed
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      disabled={request.status === "contacted" || isLoading}
                      onClick={() => handleUpdateStatus(request.id, "contacted")}
                    >
                      Contacted
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      disabled={request.status === "completed" || isLoading}
                      onClick={() => handleUpdateStatus(request.id, "completed")}
                    >
                      Completed
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      disabled={request.status === "archived" || isLoading}
                      onClick={() => handleUpdateStatus(request.id, "archived")}
                    >
                      Archived
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-red-600 focus:text-red-600"
                      onClick={() => handleDeleteRequest(request.id)}
                      disabled={isLoading}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 查看请求详情对话框 */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Quote Request Details</DialogTitle>
            <DialogDescription>
              Submitted on {selectedRequest && format(new Date(selectedRequest.createdAt), "MMMM d, yyyy")}
            </DialogDescription>
          </DialogHeader>

          {selectedRequest && (
            <div className="space-y-4">
              <div className="flex justify-between">
                <Badge variant={getStatusBadgeVariant(selectedRequest.status)}>
                  {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                </Badge>
                <span className="text-sm text-gray-500">ID: {selectedRequest.id}</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Name</h4>
                  <p>{selectedRequest.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <p>{selectedRequest.email}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Company</h4>
                  <p>{selectedRequest.company || "-"}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                  <p>{selectedRequest.phone || "-"}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500">Requirements</h4>
                <div className="mt-1 rounded-md border border-gray-200 bg-gray-50 p-4">
                  <p className="whitespace-pre-wrap">{selectedRequest.requirements}</p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handleUpdateStatus(selectedRequest.id, "contacted")}
                    disabled={selectedRequest.status === "contacted" || isLoading}
                  >
                    Mark as Contacted
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleUpdateStatus(selectedRequest.id, "completed")}
                    disabled={selectedRequest.status === "completed" || isLoading}
                  >
                    Mark as Completed
                  </Button>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteRequest(selectedRequest.id)}
                  disabled={isLoading}
                >
                  Delete
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
