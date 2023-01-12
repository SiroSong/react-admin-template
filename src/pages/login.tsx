import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { Button, Card, Form, Input, theme } from "antd"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { defaultUser, UserContext } from "../providers/user"
import styles from "./login.module.css"

export default function Login() {
  const navigate = useNavigate()
  const userInfo = useContext(UserContext)
  const {
    token: { colorPrimaryBg },
  } = theme.useToken()
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values)
    userInfo.userLogin(defaultUser)
    navigate("/")
  }

  return (
    <div className={styles.content} style={{ backgroundColor: colorPrimaryBg }}>
      <Card style={{ width: 300 }} title="登陆" bordered={false}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请填写用户名!" }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请填写用户名!" }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
