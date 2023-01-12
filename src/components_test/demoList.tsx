import { List, Typography } from "antd"

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
]
export default function DemoList() {
  return (
    <List
      style={{ minWidth: 300 }}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
  )
}
