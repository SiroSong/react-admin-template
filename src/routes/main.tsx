import {
  AlignLeftOutlined,
  GlobalOutlined,
  HomeOutlined,
} from "@ant-design/icons"
import { Outlet } from "react-router-dom"
import Layout from "../layouts"
import About from "../pages/about"
import Details from "../pages/details"
import Home from "../pages/home"
import { Roles, RouterType } from "../types"

export const mainRoute: RouterType = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "",
      label: "首页",
      element: <Home />,
      icon: <HomeOutlined />,
    },
    {
      path: "details",
      label: "详情",
      element: <Outlet />,
      icon: <AlignLeftOutlined />,
      children: [
        {
          path: "details1",
          label: "详情1",
          element: <Details label="details1" />,
        },
        {
          path: "details2",
          label: "详情2",
          element: <Details label="details2" />,
          auth: [Roles.ADMIN],
        },
      ],
    },
    {
      path: "about",
      label: "简介",
      element: <About />,
      icon: <GlobalOutlined />,
    },
  ],
}
