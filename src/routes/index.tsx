import { useContext, useMemo } from "react"
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom"
import { UserContext } from "../providers/user"
import { RouterType } from "../types"
import { loginRoute } from "./login"
import { mainRoute } from "./main"

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

  const appRoutes = useMemo(() => {
    const allRoutes = [loginRoute, mainRoute]
    return createBrowserRouter(formatRoute(allRoutes))
  }, [userInfo.user])

  return <RouterProvider router={appRoutes} />
}
