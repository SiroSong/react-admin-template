import { createContext, useEffect, useState } from "react"
import { ContextProps, Roles, StorageKeys, UserType } from "../types"

export const defaultUser: UserType = {
  name: "siro",
  token: "testtoken",
  role: Roles.ADMIN,
}

export const UserContext = createContext<{
  user: UserType
  userLogin: (user: UserType) => void
  userLoginOut: () => void
  userUpdate: (user: UserType) => void
  userCheck: () => boolean
}>({
  user: {},
  userLogin: function (user: UserType): void {
    throw new Error("Function not implemented.")
  },
  userLoginOut: function (): void {
    throw new Error("Function not implemented.")
  },
  userUpdate: function (user: UserType): void {
    throw new Error("Function not implemented.")
  },
  userCheck: function (): boolean {
    throw new Error("Function not implemented.")
  },
})

const userInit = () => {
  return defaultUser
  const userJson = sessionStorage.getItem(StorageKeys.USER)
  try {
    const user = JSON.parse(userJson || "")
    return user
  } catch (error) {
    return {}
  }
}

export function UserProvider(props: ContextProps) {
  const [user, setUser] = useState<UserType>(userInit())
  const userLogin = (user: any) => {
    setUser(user)
    try {
      const jsonUser = JSON.stringify(user)
      sessionStorage.setItem(StorageKeys.USER, jsonUser)
    } catch (error) {
      console.log(error)
    }
  }

  const userLoginOut = () => {
    setUser({})
    sessionStorage.clear()
  }

  const userUpdate = (user: any) => {
    userLogin(user)
  }

  const userCheck = () => {
    if (user.token) {
      return true
    } else {
      return false
    }
  }

  return (
    <UserContext.Provider
      value={{ user, userLogin, userLoginOut, userUpdate, userCheck }}>
      {props.children}
    </UserContext.Provider>
  )
}
