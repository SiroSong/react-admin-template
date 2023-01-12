import React, { useState, useEffect } from "react"
import { Column } from "@ant-design/charts"

export const data1 = [
  {
    type: "家具家电",
    sales: 38,
  },
  {
    type: "粮油副食",
    sales: 52,
  },
  {
    type: "生鲜水果",
    sales: 61,
  },
  {
    type: "美容洗护",
    sales: 145,
  },
  {
    type: "母婴用品",
    sales: 48,
  },
  {
    type: "进口食品",
    sales: 38,
  },
  {
    type: "食品饮料",
    sales: 38,
  },
  {
    type: "家庭清洁",
    sales: 38,
  },
]

export const data2 = [
  {
    type: "家庭清洁",
    sales: 38,
  },
  {
    type: "家具家电",
    sales: 38,
  },
  {
    type: "母婴用品",
    sales: 48,
  },
  {
    type: "进口食品",
    sales: 38,
  },
  {
    type: "食品饮料",
    sales: 38,
  },

  {
    type: "粮油副食",
    sales: 52,
  },
  {
    type: "生鲜水果",
    sales: 61,
  },
  {
    type: "美容洗护",
    sales: 145,
  },
]

export const DemoColumn = (props: { data: any[] }) => {
  const configConstructor = (data: any[]) => {
    return {
      data,
      xField: "type",
      yField: "sales",
      label: {
        // 可手动配置 label 数据标签位置
        // position: "middle",
        // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
          fill: "#FFFFFF",
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: "类别",
        },
        sales: {
          alias: "销售额",
        },
      },
    }
  }
  const [data, setData] = useState(configConstructor(props.data))
  useEffect(() => {
    setData(configConstructor(props.data))
  }, [props.data])

  return (
    <div style={{ flex: 1 }}>
      <Column {...data} />
    </div>
  )
}
