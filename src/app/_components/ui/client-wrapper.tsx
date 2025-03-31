"use client"

import { Suspense } from "react"

interface ClientWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

function ClientWrapper({
  children,
  fallback = <div className="animate-pulse h-32 w-full bg-gray-200 rounded-md"></div>,
}: ClientWrapperProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>
}

export { ClientWrapper } 