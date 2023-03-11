import { theme } from "antd"
import { ReactNode, CSSProperties, useContext } from "react"
import { ThemeContext } from "../modules/theme"

export default function View({
  children,
  className,
  style,
}: {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const { themeType } = useContext(ThemeContext)
  const {
    token: {},
  } = theme.useToken()

  return (
    <div style={{ ...style }} className={className}>
      {children}
    </div>
  )
}
