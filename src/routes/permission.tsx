import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

interface PermissionProps {
  children?: ReactNode
}

export default function Permission(props: PermissionProps) {
  return <Outlet />
}