import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon"
import { ThemeConfig } from "antd/es/config-provider/context"
import { ReactNode, SVGProps } from "react"

export type RouterType = {
  // route props
  path?: string
  element?: ReactNode
  children?: RouterType[]
  loader?: () => void
  // menu props
  icon?: ReactNode
  name?: string
  label?: string
  hide?: boolean
  // auth props
  auth?: Roles[]
}

export type MenuType = {
  label: string
  key: string
  icon: ReactNode
  children: MenuType[]
}

export enum StorageKeys {
  USER = "user",
}

export interface ContextProps {
  children?: ReactNode
}

export enum Roles {
  ADMIN = 0,
  USER = 1,
}

export type UserType = {
  name?: string
  token?: string
  role?: Roles
}

export type ThemeType = "light" | "dark"
export enum Theme {
  light = "light",
  dark = "dark",
}
export interface ThemeData {
  light?: ThemeConfig["token"]
  dark?: ThemeConfig["token"]
}
