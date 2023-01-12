import { Typography } from "antd"
import Page from "../components/page"

export default function Details(props: { label: string }) {
  return (
    <Page>
      <Typography.Text>{props.label}</Typography.Text>
    </Page>
  )
}
