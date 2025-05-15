import type React from "react"
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">MZG Tools 管理系统</h1>
          <p className="text-gray-600">登录以访问管理仪表板</p>
        </div>
        {children}
      </div>
    </div>
  )
}
