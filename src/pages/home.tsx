import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"
import { Row, Col, Card, Space, Typography, Divider, theme } from "antd"
import { useState } from "react"
import Box from "../components/box"
import Page from "../components/page"
import { data1, data2, DemoColumn } from "../components_test/demoColumnChart"

const { Text } = Typography

export default function Home() {
  const {
    token: { colorSuccess, colorWarning, colorTextSecondary },
  } = theme.useToken()
  const [activeTabKey2, setActiveTabKey2] = useState<string>("销售1")

  const tabListNoTitle = [
    {
      key: "销售1",
      tab: "销售1",
    },
    {
      key: "销售2",
      tab: "销售2",
    },
  ]

  const contentListNoTitle: Record<string, React.ReactNode> = {
    销售1: (
      <Box>
        <DemoColumn data={data1} />
      </Box>
    ),
    销售2: (
      <Box>
        <DemoColumn data={data2} />
      </Box>
    ),
  }

  return (
    <Page>
      <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={12} lg={12} xl={6}>
            <Card bordered={false}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Text style={{ color: colorTextSecondary }}>总销售额</Text>
                <Space>
                  <Text style={{ fontSize: 24 }}>¥</Text>
                  <Text strong style={{ fontSize: 24 }}>
                    12345678
                  </Text>
                </Space>
                <Space size={"large"}>
                  <Space>
                    <Text style={{ color: colorTextSecondary }}>周同比</Text>
                    <Text style={{ color: colorTextSecondary }}>12%</Text>
                    <CaretUpOutlined style={{ color: colorSuccess }} />
                  </Space>
                  <Space>
                    <Text style={{ color: colorTextSecondary }}>日同比</Text>
                    <Text style={{ color: colorTextSecondary }}>11%</Text>
                    <CaretDownOutlined style={{ color: colorWarning }} />
                  </Space>
                </Space>
                <Divider style={{ padding: 0, margin: 0 }} />
                <Space>
                  <Text style={{ color: colorTextSecondary }}>日销售额</Text>
                  <Text style={{ color: colorTextSecondary }}>￥12,423</Text>
                </Space>
              </Space>
            </Card>
          </Col>
          <Col sm={24} md={12} lg={12} xl={6}>
            <Card bordered={false}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Text style={{ color: colorTextSecondary }}>总销售额</Text>
                <Space>
                  <Text style={{ fontSize: 24 }}>¥</Text>
                  <Text strong style={{ fontSize: 24 }}>
                    12345678
                  </Text>
                </Space>
                <Space size={"large"}>
                  <Space>
                    <Text style={{ color: colorTextSecondary }}>周同比</Text>
                    <Text style={{ color: colorTextSecondary }}>12%</Text>
                    <CaretUpOutlined style={{ color: colorSuccess }} />
                  </Space>
                  <Space>
                    <Text style={{ color: colorTextSecondary }}>日同比</Text>
                    <Text style={{ color: colorTextSecondary }}>11%</Text>
                    <CaretDownOutlined style={{ color: colorWarning }} />
                  </Space>
                </Space>
                <Divider style={{ padding: 0, margin: 0 }} />
                <Space>
                  <Text style={{ color: colorTextSecondary }}>日销售额</Text>
                  <Text style={{ color: colorTextSecondary }}>￥12,423</Text>
                </Space>
              </Space>
            </Card>
          </Col>
          <Col sm={24} md={12} lg={12} xl={6}>
            <Card bordered={false}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Text style={{ color: colorTextSecondary }}>总销售额</Text>
                <Space>
                  <Text style={{ fontSize: 24 }}>¥</Text>
                  <Text strong style={{ fontSize: 24 }}>
                    12345678
                  </Text>
                </Space>
                <Space size={"large"}>
                  <Space>
                    <Text style={{ color: colorTextSecondary }}>周同比</Text>
                    <Text style={{ color: colorTextSecondary }}>12%</Text>
                    <CaretUpOutlined style={{ color: colorSuccess }} />
                  </Space>
                  <Space>
                    <Text style={{ color: colorTextSecondary }}>日同比</Text>
                    <Text style={{ color: colorTextSecondary }}>11%</Text>
                    <CaretDownOutlined style={{ color: colorWarning }} />
                  </Space>
                </Space>
                <Divider style={{ padding: 0, margin: 0 }} />
                <Space>
                  <Text style={{ color: colorTextSecondary }}>日销售额</Text>
                  <Text style={{ color: colorTextSecondary }}>￥12,423</Text>
                </Space>
              </Space>
            </Card>
          </Col>
          <Col sm={24} md={12} lg={12} xl={6}>
            <Card bordered={false}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Text style={{ color: colorTextSecondary }}>总销售额</Text>
                <Space>
                  <Text style={{ fontSize: 24 }}>¥</Text>
                  <Text strong style={{ fontSize: 24 }}>
                    12345678
                  </Text>
                </Space>
                <Space size={"large"}>
                  <Space>
                    <Text style={{ color: colorTextSecondary }}>周同比</Text>
                    <Text style={{ color: colorTextSecondary }}>12%</Text>
                    <CaretUpOutlined style={{ color: colorSuccess }} />
                  </Space>
                  <Space>
                    <Text style={{ color: colorTextSecondary }}>日同比</Text>
                    <Text style={{ color: colorTextSecondary }}>11%</Text>
                    <CaretDownOutlined style={{ color: colorWarning }} />
                  </Space>
                </Space>
                <Divider style={{ padding: 0, margin: 0 }} />
                <Space>
                  <Text style={{ color: colorTextSecondary }}>日销售额</Text>
                  <Text style={{ color: colorTextSecondary }}>￥12,423</Text>
                </Space>
              </Space>
            </Card>
          </Col>
        </Row>
        <Card
          style={{ width: "100%" }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey2}
          onTabChange={(key) => {
            setActiveTabKey2(key)
          }}>
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </Space>
    </Page>
  )
}
