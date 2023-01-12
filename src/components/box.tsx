import { CSSProperties, ReactNode } from "react"

export default function Box({
  children,
  className,
  style,
}: {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div className={className} style={{ boxSizing: "border-box", ...style }}>
      {children}
    </div>
  )
}
