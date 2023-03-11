import { useContext, useMemo } from "react"
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom"
import { UserContext } from "../modules/user"
import { RouterType } from "../types"
import { loginRoute } from "./login"
import { mainRoute } from "./main"
import Permission from "./permission"

export function AppRouter() {
  const userInfo = useContext(UserContext)

  const formatRoute = (routes: RouterType[]): RouteObject[] => {
    const _routes: RouteObject[] = []

    for (const route of routes) {
      if (
        route.auth === undefined ||
        route.auth.includes(userInfo.user.role!)
      ) {
        _routes.push({
          path: route.path,
          element: route.element,
          children: route.children ? formatRoute(route.children) : undefined,
        } as RouterType)
      }
    }

    return _routes
  }

  const appRoutes =  createBrowserRouter([{
    path: '',
    element: <Permission />,
    children: [mainRoute, loginRoute]
  }])


  return <RouterProvider router={appRoutes} />
}
