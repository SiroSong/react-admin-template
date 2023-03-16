import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import {
  Dropdown,
  Layout as AntdLayout,
  Menu,
  MenuProps,
  Space,
  Switch,
  theme,
  Typography,
} from "antd"
import React, {
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import Icon, {
  GithubOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { mainRoute } from "../routes/main"
import "./index.css"
import { RouterType, Theme } from "../types"
import Box from "../components/box"
import { UserContext } from "../providers/user"
import { APP_NAME } from "../config"
import { ThemeContext } from "../providers/theme"
import IconSun from "../components/IconSun"
import IconMoon from "../components/IconMoon"

type MenuItem = Required<MenuProps>["items"][number]

const { Header, Sider, Content } = AntdLayout

const formatMenu = (menuRoutes: RouterType[] | undefined) => {
  if (!menuRoutes) {
    return
  }

  const userInfo = useContext(UserContext)
  const menus: MenuItem[] = []

  for (const route of menuRoutes) {
    const menu = {
      label: route.label,
      key: route.path,
      icon: route.icon,
      children: formatMenu(route.children),
    } as MenuItem

    if (
      route.hide !== true &&
      (route.auth === undefined || route.auth?.includes(userInfo.user.role!))
    ) {
      menus.push(menu)
    }
  }

  return menus
}

const pathname2selectedKeys = (pathname: string) => {
  const paths = pathname.match(/\w+/g)
  if (paths === null) {
    return { selectedKeys: [""], subKeys: [] }
  } else {
    const subKeys = paths.slice(0, paths.length - 1)
    return { selectedKeys: paths, subKeys }
  }
}

export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const userInfo = useContext(UserContext)
  const { themeType, updateThemeType } = useContext(ThemeContext)
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken()
  const [themeValue, setThemeValue] = useState(true)

  const formatPath = (pathArray: string[]) => {
    pathArray.reverse()
    return pathArray.reduce((path, cur, index) => {
      if (index === 0) {
        return path + cur
      } else {
        return path + "/" + cur
      }
    }, "/")
  }

  const items: MenuItem[] = [
    {
      key: "2",
      label: <a>设置</a>,
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      icon: <LoginOutlined />,
      danger: true,
      label: (
        <a
          onClick={(e) => {
            e.preventDefault()
            userInfo.userLoginOut()
            navigate("/login")
          }}>
          Login Out
        </a>
      ),
    },
  ]

  const memoSubKeys = useMemo(
    () => pathname2selectedKeys(location.pathname).subKeys,
    [location]
  )

  const memoSelectedKeys = useMemo(
    () => pathname2selectedKeys(location.pathname).selectedKeys,
    [location]
  )

  useEffect(() => {
    if (themeValue) {
      updateThemeType(Theme.light)
    } else {
      updateThemeType(Theme.dark)
    }
  }, [themeValue])

  return (
    <Fragment>
      {userInfo.userCheck() === false && <Navigate to="/login" replace />}
      <AntdLayout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme={themeType}>
          <div className="logo">
            {collapsed ? (
              <Typography.Text strong italic style={{ color: colorPrimary }}>
                {APP_NAME.abbreviation}
              </Typography.Text>
            ) : (
              <Typography.Text strong style={{ color: colorPrimary }}>
                {APP_NAME.normal}
              </Typography.Text>
            )}
          </div>
          <Menu
            theme={themeType}
            mode="inline"
            defaultOpenKeys={memoSubKeys}
            defaultSelectedKeys={memoSelectedKeys}
            items={formatMenu(mainRoute.children)}
            onSelect={(menu) => {
              const path = formatPath(menu.keyPath)
              navigate(path)
            }}
          />
        </Sider>
        <AntdLayout>
          <Header
            style={{
              padding: "0 24px",
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
            }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <Box
              style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <Space size={"middle"} align="center">
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}>
                  <a>
                    <Space style={{ display: "flex" }}>
                      <Typography.Text>
                        用户名: {userInfo.user.name}
                      </Typography.Text>
                      <UserOutlined style={{ fontSize: 16 }} />
                    </Space>
                  </a>
                </Dropdown>
                <a>
                  <GithubOutlined style={{ fontSize: 16 }} />
                </a>
                <Switch
                  checkedChildren={<Icon component={IconSun} />}
                  unCheckedChildren={<Icon component={IconMoon} />}
                  checked={themeValue}
                  onChange={(value) => setThemeValue(value)}
                />
              </Space>
            </Box>
          </Header>
          <Content
            style={{
              minHeight: 280,
              overflow: "auto",
            }}>
            <Outlet />
          </Content>
        </AntdLayout>
      </AntdLayout>
    </Fragment>
  )
}
